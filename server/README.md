# Plangs2 Server

The server is useful during development as a "live server".
The same codebase is used to generate static files for deployment.

## Templ

This should install the `templ` tool on the local Go distro:

```sh
$ go install github.com/a-h/templ/cmd/templ@latest
```

Note that this is not listed on `go.mod` since it is not a dependency of the server.