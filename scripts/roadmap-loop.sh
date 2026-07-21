#!/usr/bin/env bash
# roadmap-loop.sh — the "real loop" over ROADMAP.md.
#
# Each iteration invokes `claude -p "/roadmap-continue"` — a FRESH context
# window every time (this is the automated /clear). ROADMAP.md + CLAUDE.md +
# git are the only state carried between iterations; the skill's protocol
# forces all progress to be written there before an iteration ends.
#
# Usage:
#   scripts/roadmap-loop.sh                  # up to 20 iterations, acceptEdits
#   ROADMAP_LOOP_MAX=5 scripts/roadmap-loop.sh
#   ROADMAP_LOOP_PERMISSIONS=bypassPermissions scripts/roadmap-loop.sh  # no prompts at all (trusted repo only)
#
# Exit codes: 0 roadmap DONE · 2 BLOCKED (read the owner queue) ·
#             1 no sentinel (crash/refusal — inspect the log) · 3 max iterations
set -u

MAX_ITER="${ROADMAP_LOOP_MAX:-20}"
PERM="${ROADMAP_LOOP_PERMISSIONS:-acceptEdits}"
LOG_DIR="${ROADMAP_LOOP_LOGDIR:-.claude/roadmap-loop-logs}"
mkdir -p "$LOG_DIR"

for i in $(seq 1 "$MAX_ITER"); do
  log="$LOG_DIR/$(date +%Y%m%d-%H%M%S)-iter$i.log"
  echo "──────── roadmap-loop: iteration $i/$MAX_ITER (fresh context) → $log"

  claude -p "/roadmap-continue" --permission-mode "$PERM" 2>&1 | tee "$log"

  sentinel="$(grep -Eo 'ROADMAP-LOOP: (CONTINUE|BLOCKED|DONE)' "$log" | tail -1)"
  case "$sentinel" in
    *CONTINUE*) ;;  # loop again
    *BLOCKED*)
      echo "roadmap-loop: BLOCKED — everything pending needs you (owner queue / env)." >&2
      exit 2 ;;
    *DONE*)
      echo "roadmap-loop: roadmap complete."
      exit 0 ;;
    *)
      echo "roadmap-loop: no sentinel in output (crash or refusal) — stopping for safety. See $log" >&2
      exit 1 ;;
  esac
done

echo "roadmap-loop: hit max iterations ($MAX_ITER) — rerun to continue." >&2
exit 3
