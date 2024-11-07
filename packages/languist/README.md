# Languist

This package has tools to match Plangs data against both [languish](https://github.com/tjpalmer/languish) and [github-linguist](https://github.com/github-linguist/linguist) hence: `Languist` :-).

This package also contains code that can turn an NPlang instance into Plangs code that can create that instance. This is useful in the following kind of workflow:

* Load all definitions.
* Massage the data.
* Rewrite the code that generates the definitions.

## Generating data

We generate two files:

* `./src/languish-keys.json`: translated from `keys.csv` from [languish](https://github.com/tjpalmer/languish).

* `./src/github-linguist.json`: generated from a ruby script using [github-linguist](https://github.com/github-linguist/linguist).

### Bun Script

Because Plangs uses TypeScript and Bun, we also use Bun here to convert the `in/languish-keys.csv` file to JSON (to avoid adding a CSV parser dependency).

```sh
$ bun run in/languish.ts
```

... generates a JSON file in the `./src` folder.

### Ruby script

We use Docker since installing ruby gems wich require CMake,
ICU and other friends is a lil bit hairy to do cross-platform.

Build the image and run it:

```sh
$ docker build -t linguist . && docker run --rm linguist > src/linguist.json
```

## Using the data

JSON files can be imported in both Bun and numerous other environments (ex: esbuild can bundle JSON too). The types were handwritten to match the content of the data.