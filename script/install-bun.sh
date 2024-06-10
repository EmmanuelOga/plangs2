#!/usr/bin/env bash
set -euo pipefail

platform=$(uname -ms)

if [[ ${OS:-} = Windows_NT ]]; then
    echo "this script only runs on unixes"
    exit
fi

case $platform in
'Darwin x86_64')
    target=darwin-x64
    ;;
'Darwin arm64')
    target=darwin-aarch64
    ;;
'Linux aarch64' | 'Linux arm64')
    target=linux-aarch64
    ;;
'MINGW64'*)
    target=windows-x64
    ;;
'Linux x86_64' | *)
    target=linux-x64
    ;;
esac

if [[ $target = darwin-x64 ]]; then
    # Is this process running in Rosetta?
    # redirect stderr to devnull to avoid error message when not running in Rosetta
    if [[ $(sysctl -n sysctl.proc_translated 2>/dev/null) = 1 ]]; then
        target=darwin-aarch64
    fi
fi

GITHUB=${GITHUB-"https://github.com"}

github_repo="$GITHUB/oven-sh/bun"

if [[ $target = darwin-x64 ]]; then
    # If AVX2 isn't supported, use the -baseline build
    if [[ $(sysctl -a | grep machdep.cpu | grep AVX2) == '' ]]; then
        target=darwin-x64-baseline
    fi
fi

if [[ $target = linux-x64 ]]; then
    # If AVX2 isn't supported, use the -baseline build
    if [[ $(cat /proc/cpuinfo | grep avx2) = '' ]]; then
        target=linux-x64-baseline
    fi
fi

BUN_DST="$(pwd)/.bun"
BUN_URI=$github_repo/releases/latest/download/bun-$target.zip

echo "This is a slightly modified version of the bun installer script."
echo
echo "The script doesn't mess with \$HOME or \$PATH, or any other env vars,"
echo "it just downloads the bun binary locally, so you can use a different"
echo "install of bun for each project, if you want."
echo

if [[ -f "$BUN_DST/bin/bun" ]]; then
    echo "Bun is already installed in $BUN_DST"
    echo
else
    echo "The appropriate zip file for your platform is $BUN_URI"
    echo "Installing to: $BUN_DST"

    curl --fail --location --progress-bar --output "bun.zip" "$BUN_URI"
    mkdir -p "$BUN_DST/bin"
    unzip -oqd "$BUN_DST" "bun.zip"
    mv "$BUN_DST/bun-$target/bun" "$BUN_DST/bin/bun"
    rm -r "$BUN_DST/bun-$target" "bun.zip"

    chmod +x "$BUN_DST/bin/bun"
    echo
fi

echo "Make sure your shell sets the following environment variables:"
echo
echo "  export BUN_INSTALL=\"$BUN_DST\""
echo "  export PATH=\"$BUN_DST\":\$PATH"
echo
