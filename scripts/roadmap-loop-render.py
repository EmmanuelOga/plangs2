#!/usr/bin/env python3
"""Render `claude -p --output-format stream-json` events as a compact live log.

Usage:
  claude -p ... --output-format stream-json --verbose \
    | tee raw.jsonl | python3 scripts/roadmap-loop-render.py [session-id-file]

Reads JSONL events on stdin and prints one short local-time-stamped line per
meaningful event (assistant text, tool call, tool error, final result). When
no event arrives for IDLE_SECS it prints an idle notice, so an API backoff or
a long tool call is visible instead of a silent blank log. If session-id-file
is given, the session id is written there as soon as the init event arrives —
roadmap-loop.sh uses it to `--resume` the session for a clean wrap-up on
Ctrl-C.

Also works (approximately) on session transcript files, which share the same
assistant/user event shapes:
  tail -f ~/.claude/projects/<proj>/<session>.jsonl | python3 scripts/roadmap-loop-render.py

stdlib only. Adopted from ~/dev/unrelated (the house TS+Python template).
"""

import json
import os
import select
import sys
from datetime import datetime

IDLE_SECS = 60


def emit(line: str) -> None:
    sys.stdout.write(f"[{datetime.now().strftime('%H:%M:%S')}] {line}\n")
    sys.stdout.flush()


def summarize_tool(name: str, inp: dict) -> str:
    if name == "Bash":
        return inp.get("description") or inp.get("command", "")[:120]
    for key in ("file_path", "path", "pattern", "url", "skill", "prompt"):
        if key in inp:
            return str(inp[key])[:120]
    return json.dumps(inp)[:120]


def handle(ev: dict, sid_file: str | None) -> None:
    t = ev.get("type")
    if t == "system" and ev.get("subtype") == "init":
        sid = ev.get("session_id", "")
        emit(f"session {sid} (model {ev.get('model', '?')})")
        if sid_file and sid:
            with open(sid_file, "w") as f:
                f.write(sid)
    elif t == "assistant":
        for b in (ev.get("message") or {}).get("content") or []:
            bt = b.get("type")
            if bt == "text":
                text = b.get("text", "").strip()
                if text:
                    emit("text  " + text.replace("\n", " ⏎ ")[:400])
            elif bt == "thinking":
                think = b.get("thinking", "").strip()
                if think:
                    emit("think " + think.replace("\n", " ")[:160])
            elif bt == "tool_use":
                name = b.get("name", "?")
                emit(f"tool  {name}: {summarize_tool(name, b.get('input') or {})}")
    elif t == "user":
        for b in (ev.get("message") or {}).get("content") or []:
            if isinstance(b, dict) and b.get("type") == "tool_result" and b.get("is_error"):
                content = b.get("content")
                if isinstance(content, list):
                    content = " ".join(
                        c.get("text", "") for c in content if isinstance(c, dict)
                    )
                emit("ERR   " + str(content).replace("\n", " ")[:300])
    elif t == "result":
        cost = ev.get("total_cost_usd") or 0
        secs = int((ev.get("duration_ms") or 0) / 1000)
        emit(f"result {ev.get('subtype')} — {ev.get('num_turns', '?')} turns, ${cost:.2f}, {secs}s")
        final = (ev.get("result") or "").strip()
        if final:
            sys.stdout.write(final + "\n")
            sys.stdout.flush()


def main() -> None:
    sid_file = sys.argv[1] if len(sys.argv) > 1 else None
    fd = sys.stdin.fileno()
    buf = b""
    idle = 0
    while True:
        # own line-splitting over raw reads: select+readline would strand
        # buffered lines and report a stall that isn't there
        if b"\n" in buf:
            raw, buf = buf.split(b"\n", 1)
            line = raw.decode("utf-8", "replace").strip()
            if line:
                try:
                    handle(json.loads(line), sid_file)
                except json.JSONDecodeError:
                    emit(line[:200])
            continue
        if not select.select([fd], [], [], IDLE_SECS)[0]:
            idle += IDLE_SECS
            emit(f"… quiet for {idle // 60}m{idle % 60:02d}s (api backoff or long tool call)")
            continue
        idle = 0
        chunk = os.read(fd, 65536)
        if not chunk:
            if buf.strip():
                emit(buf.decode("utf-8", "replace")[:200])
            return
        buf += chunk


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
