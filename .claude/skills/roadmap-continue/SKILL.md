---
description: Execute the next pending ROADMAP.md item end-to-end; queue questions for the owner instead of stopping; emit a machine-readable loop status line.
---

# roadmap-continue — one iteration of the roadmap execution loop

You are one iteration of an automated loop (`scripts/roadmap-loop.sh`). Your
context may be discarded after this run: **anything not written to a file is
lost**. The loop's only memory is ROADMAP.md (status), CLAUDE.md (durable
discoveries), and git.

## Protocol

1. **Load context.** Read CLAUDE.md (verification loop, invariants, traps),
   then ROADMAP.md. Trust the gates, not prose counts.

2. **Pick exactly ONE item**: the first pending (⬜) or resumable-partial (🔶)
   item in the Execution queue that is NOT 🧑 (owner-only), NOT ⛔ (deferred),
   and NOT blocked on a missing environment (e.g. E4 needs a Linux runner —
   verify a blocker still holds before honoring it). If the queue's stated
   order conflicts with dependencies noted in the items, dependencies win.

3. **Execute it end-to-end. NEVER stop to ask the user anything.** When a
   question arises:
   - **Product/design call** → append it to the "Owner decision queue" in
     ROADMAP.md as a new O-item with enough context to answer asynchronously.
     Then EITHER take the most conservative path that doesn't foreclose any
     answer, OR — if the item truly cannot proceed — mark it 🧑
     blocked-on-owner (with the O-ref) and move on to the NEXT executable
     item this same iteration.
   - **Environment blocker** → record it in the item (what's missing, how to
     verify it's fixed), leave the item 🔶/⬜, move to the next executable
     item.
   - Interactive invocation is NOT an exception: queue questions all the
     same; the user reads the queue when they choose.

4. **Verify per CLAUDE.md** — the full loop, every command. Visual changes:
   screenshot and LOOK; re-record pixel baselines when grid-visible. New
   regression tests must be proven faithful by re-introducing the bug.

5. **Save state BEFORE finishing** (assume amnesia after this response):
   - ROADMAP.md: flip the item's status, replace estimates with measured
     results, prune what no longer applies.
   - Durable discoveries (how/why, traps) → CLAUDE.md, not ROADMAP.
   - Commit: ONE item per commit, loop green first, drift-report removals
     claimed in the message (hard rule 7). Do not push unless prior
     authorization is recorded. Never deploy.

6. **End your response with exactly one final line** (machine-parsed):
   - `ROADMAP-LOOP: CONTINUE` — item landed; at least one more executable
     item remains.
   - `ROADMAP-LOOP: BLOCKED` — nothing is executable (everything pending is
     owner-gated/deferred/env-blocked). Immediately before this line, list
     each blocked item and what unblocks it.
   - `ROADMAP-LOOP: DONE` — nothing pending at all.

   The sentinel must be the LAST line, exactly as written. If this iteration
   failed mid-item (verification red you can't fix, unexpected repo state),
   leave the item 🔶 with a note in ROADMAP.md describing where you stopped,
   and emit `ROADMAP-LOOP: BLOCKED` so a human looks before the loop burns
   more iterations.

## Guardrails

- One item per iteration even when the next one looks trivial — small
  contexts are the point of the loop.
- If the working tree is dirty at start with changes you didn't make, stop
  and report (BLOCKED) rather than committing over someone's work.
- Items marked 🧑/⛔ are never yours, no matter how easy they look.
