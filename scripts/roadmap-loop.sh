#!/usr/bin/env bash
# roadmap-loop.sh — the "real loop" over ROADMAP.md.
#
# Each iteration invokes `claude -p "/roadmap-continue"` — a FRESH context
# window every time (this is the automated /clear). ROADMAP.md + CLAUDE.md +
# git are the only state carried between iterations; the skill's protocol
# forces all progress to be written there before an iteration ends.
#
# Output is streamed live (stream-json → scripts/roadmap-loop-render.py): one
# stamped line per tool call / assistant message, plus an idle notice every
# 60s so API backoff is visible instead of a silent blank log. Per iteration:
#   <stamp>-iterN.jsonl  raw stream-json (sentinel is grepped from this)
#   <stamp>-iterN.log    the rendered live log
#
# Ctrl-C: the FIRST press interrupts the current iteration, then resumes the
# same session once with a wrap-up instruction (commit only if the loop is
# green, record the WIP state in ROADMAP.md, emit the sentinel). A SECOND
# press hard-stops.
#
# Usage:
#   scripts/roadmap-loop.sh                  # up to 20 iterations, acceptEdits
#   ROADMAP_LOOP_MAX=5 scripts/roadmap-loop.sh
#   ROADMAP_LOOP_PERMISSIONS=bypassPermissions scripts/roadmap-loop.sh  # no prompts at all (trusted repo only)
#
# Exit codes: 0 roadmap DONE · 2 BLOCKED (read the owner queue) ·
#             1 no sentinel (crash/refusal — inspect the log) · 3 max
#             iterations · 130 interrupted (wrap-up attempted)
set -u

MAX_ITER="${ROADMAP_LOOP_MAX:-20}"
PERM="${ROADMAP_LOOP_PERMISSIONS:-acceptEdits}"
LOG_DIR="${ROADMAP_LOOP_LOGDIR:-.claude/roadmap-loop-logs}"
RENDER="$(cd "$(dirname "$0")" && pwd)/roadmap-loop-render.py"
mkdir -p "$LOG_DIR"

# In headless acceptEdits mode every non-allowlisted Bash command auto-denies
# (nobody to prompt), which starved iteration 1 on 2026-07-21: E6 was written
# but data-fmt/pnpm/git were all denied. Pre-approve exactly the verification
# loop + git plumbing here, scoped to this script rather than settings.json.
ALLOWED_TOOLS=(
  "Bash(pnpm check)" "Bash(pnpm build)" "Bash(pnpm test)"
  "Bash(pnpm test:*)" "Bash(pnpm url-parity)" "Bash(pnpm -F:*)"
  "Bash(node scripts/data-fmt.mjs:*)" "Bash(node scripts/url-parity.mjs:*)"
  "Bash(git add:*)" "Bash(git commit:*)" "Bash(git diff:*)"
  "Bash(git status:*)" "Bash(git log:*)" "Bash(git show:*)"
  "Bash(git restore:*)" "Bash(git stash:*)"
)

WRAPUP_PROMPT='The operator pressed Ctrl-C: wrap up as quickly and cleanly as
possible. Do not start new work. If the working tree already passes the full
verification loop, you may finish the roadmap-update/commit steps; otherwise
leave the tree exactly as it is — never mark an item done over a red loop.
Either way, record the precise WIP state in ROADMAP.md (item status + Log
entry: what is on disk, what ran, what a fresh session should do next), then
print the ROADMAP-LOOP sentinel line and stop.'

INTERRUPTED=0
trap 'INTERRUPTED=1' INT

for i in $(seq 1 "$MAX_ITER"); do
  base="$LOG_DIR/$(date +%Y%m%d-%H%M%S)-iter$i"
  echo "──────── roadmap-loop: iteration $i/$MAX_ITER (fresh context) → $base.log"

  claude -p "/roadmap-continue" --permission-mode "$PERM" \
      --allowedTools "${ALLOWED_TOOLS[@]}" \
      --output-format stream-json --verbose 2>&1 \
    | tee "$base.jsonl" \
    | python3 "$RENDER" "$base.session" \
    | tee "$base.log"

  if [ "$INTERRUPTED" -eq 1 ]; then
    trap - INT  # from here on, a second Ctrl-C kills for real
    sid="$(cat "$base.session" 2>/dev/null || true)"
    if [ -n "$sid" ]; then
      echo "──────── roadmap-loop: interrupted — asking the agent to wrap up cleanly (Ctrl-C again to hard-stop)"
      claude -p --resume "$sid" --permission-mode "$PERM" \
          --allowedTools "${ALLOWED_TOOLS[@]}" \
          --output-format stream-json --verbose "$WRAPUP_PROMPT" 2>&1 \
        | tee -a "$base.jsonl" \
        | python3 "$RENDER" \
        | tee -a "$base.log"
      echo "roadmap-loop: wrap-up finished — see ROADMAP.md and $base.log" >&2
    else
      echo "roadmap-loop: interrupted before a session id was captured — nothing to wrap up." >&2
    fi
    exit 130
  fi

  sentinel="$(grep -Eo 'ROADMAP-LOOP: (CONTINUE|BLOCKED|DONE)' "$base.jsonl" | tail -1)"
  case "$sentinel" in
    *CONTINUE*) ;;  # loop again
    *BLOCKED*)
      echo "roadmap-loop: BLOCKED — everything pending needs you (owner queue / env)." >&2
      exit 2 ;;
    *DONE*)
      echo "roadmap-loop: roadmap complete."
      exit 0 ;;
    *)
      echo "roadmap-loop: no sentinel in output (crash or refusal) — stopping for safety. See $base.log" >&2
      exit 1 ;;
  esac
done

echo "roadmap-loop: hit max iterations ($MAX_ITER) — rerun to continue." >&2
exit 3
