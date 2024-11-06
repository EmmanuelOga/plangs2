# Linguist

We use Github's [github-linguist](https://github.com/github-linguist/linguist)
ruby gem to align with things like language name and "popularity".

# Run the script

We use Docker since installing ruby gems wich require CMake,
ICU and other friends is a lil bit hairy to do cross-platform.

Build the image and run it:

```sh
$ docker build -t linguist . && docker run linguist > out/linguist.json
```

Running the script generates a data file that is later used by Plangs code.