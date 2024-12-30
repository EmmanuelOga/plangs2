# https://github.com/DarthSim/overmind

css: bun run watchcss
js: bun run watchjs
app: bun run serve

# When any of style.css or tailwind conf changes, restart the css process.
# This is necessary to make tailwind restart if its conf changes.
cssR: ls style* tailwind* | entr -p overmind r css