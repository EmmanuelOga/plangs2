import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+elm",
    "Elm",
    {
      name: "Elm",
      websites: [
        { kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" },
        { kind: "homepage", title: "elm-lang.org", href: "https://elm-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://www.reddit.com/r/haskell/comments/rkyoa/my_thesis_is_finally_complete_elm_concurrent_frp/",
            title: 'My Thesis is Finally Complete! "Elm: Concurrent FRP for functional GUIs"',
          },
        ],
        stable_release: [{ href: "https://github.com/elm/compiler/releases", title: "Releases: elm/Compiler" }],
        license: [{ href: "https://github.com/elm/compiler/blob/master/LICENSE", title: "elm/compiler" }],
        influenced: [
          { href: "https://redux.js.org/introduction/prior-art", title: "Prior Art - Redux" },
          { href: "https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html", title: "Uniqueness Types" },
          {
            href: "https://vuejs.org/v2/guide/comparison.html#Scale",
            title: "Comparison with Other Frameworks — Vue.js",
          },
          {
            href: "https://github.com/roc-lang/roc/blob/main/roc-for-elm-programmers.md",
            title: "roc/roc-for-elm-programmers.md at main · roc-lang/roc",
          },
          {
            href: "https://derw.substack.com/p/why-derw-an-elm-like-language-that",
            title: "Why Derw: an Elm-like language that compiles to TypeScript?",
          },
          { href: "https://gren-lang.org/news/220530_first_release/", title: "Gren 0.1.0 is released" },
        ],
      },
      releases: [
        { version: "unknown", date: "2012-03-30", kind: "first" },
        { version: "0.19.1", date: "2019-10-21", kind: "stable" },
      ],
      extensions: [".elm"],
    },
    {
      influences: ["pl+f-sharp", "pl+haskell", "pl+ml", "pl+ocaml", "pl+sml"],
      licenses: ["lic+bsd", "lic+permissive"],
      paradigms: ["para+functional"],
      people: [["person+evan-czaplicki", "designer"]],
      platforms: ["platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
