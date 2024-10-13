# https://github.com/DarthSim/overmind
jsc: bun js
css: bun css
app: bun serve

# When any of style.css or tailwind conf changes, restart the css process.
# This is necessary to make tailwind restart if its conf changes.
cssR: ls style* tailwind* | entr -p overmind r css