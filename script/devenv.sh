#!/bin/bash

# Launch a new bash shell with the complete dev env setup.

# Define the bash configuration into a variable.
## read details:
### -r: raw mode, it doesn't allow backslashes to escape any characters.
### -d '': sets delimiter to null, so it reads the whole input.
read -r -d '' bash_config <<-'EOF'
echo "Starting a new shell with the complete dev env setup."
echo "'exit' to return to the previous shell."
echo

# Load default bash settings.
source ~/.bashrc

# Use a local version of BunJS.
export BUN_INSTALL=$(pwd)/.bun
export PATH=$BUN_INSTALL/bin:$PATH

# Load project environment variables, if any.
if [[ -f .env ]]; then
    set -a 
    source .env
fi
EOF

# "<()" is a process substitution, it allows to run a command and use its output as a file.
bash --init-file <(echo "$bash_config")
