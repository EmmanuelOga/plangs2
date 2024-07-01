# Plangs2 Server

The server is useful during development as a "live server".
The same codebase is used to generate static files for deployment.

## Installation

Bun.JS is needed for runtime. ESBuild is used to build. Pixi is used to install most dependencies.

1. Install pixi.sh.
2. Install bun.
    `$ script/install-bun.sh`
3. Source the script:
    `$ source script/bashrc.dev`

The script will output every found binary installed.

Dockerfile: comming soon (TM) :-p

## Styles, frontend scripts

Both CSS and TS/JS files are kept in the root folder `src/frontend`, and bundled to `server/static/` with ESBuild.

## Templier

Templier is an addon for templ that watches for file changes,
rebuilds and reloads the app in the browser:

```sh
$ templier -config ./templier.yml
```

## ESBuild

ESBuild should be watching the frontend files and generating the bundles.
Bun.JS includes a bundler but it is not as reliable as ESBuild for bundling, for now.

From root folder:

```sh
$ esbuild --bundle src/frontend/browse.tsx src/frontend/index.tsx --outdir=server/static/ --sourcemap --watch
```

... puts the frontend files in server/static, and since templier is watching,
it will reload the server as needed.