#!/usr/bin/env bash
#
# Run the plangs pipeline authenticated by the local `ant` OAuth profile,
# instead of a static ANTHROPIC_API_KEY. This is the fast local-dev path for
# AI enrichment (`--source=ai`); the other importers need no credentials.
#
# One-time setup:
#   brew install anthropics/tap/ant   # the Anthropic CLI
#   ant auth login                    # browser OAuth → stores a profile
# The short-lived access token auto-refreshes; only re-run `ant auth login` if
# a refresh ever hard-fails (refresh tokens eventually expire).
#
# Usage (args pass straight through to `pnpm pipeline`):
#   scripts/pipeline-auth.sh run --source=ai --opt.keys=pl/nim --dry-run
#   scripts/pipeline-auth.sh run --source=ai --opt.keys=pl/nim
#
# CI/production should keep using ANTHROPIC_API_KEY (a repo/CI secret) — this
# wrapper is for a human at a workstation who is already `ant auth login`'d.
set -euo pipefail

# If a key/token is already in the environment, respect it and don't touch auth.
if [ -z "${ANTHROPIC_API_KEY:-}" ] && [ -z "${ANTHROPIC_AUTH_TOKEN:-}" ]; then
  if ! command -v ant >/dev/null 2>&1; then
    echo "pipeline-auth: no ANTHROPIC_API_KEY set and the 'ant' CLI is not installed." >&2
    echo "               brew install anthropics/tap/ant && ant auth login" >&2
    exit 1
  fi
  # `print-credentials --env` refreshes the OAuth token if needed and emits
  # ANTHROPIC_AUTH_TOKEN (+ ANTHROPIC_BASE_URL) as bare KEY=value lines; `set -a`
  # exports them so the child SDK process picks them up. Never set alongside
  # ANTHROPIC_API_KEY — the API rejects requests carrying both (hence the guard).
  set -a
  eval "$(ant auth print-credentials --env)"
  set +a
fi

exec pnpm pipeline "$@"
