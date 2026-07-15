#!/usr/bin/env sh
# `pipeline` bin entry. Registers the .ts-retry resolve hook (see
# ts-resolve-hook.mjs) before running the CLI under Node's native TS stripping.
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
exec node --import "$DIR/register-hook.mjs" "$DIR/pipeline.ts" "$@"
