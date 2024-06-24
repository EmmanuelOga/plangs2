import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+clojure",
    "Clojure",
    {
      name: "Clojure",
      websites: [
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure" },
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)" },
        { kind: "homepage", title: "clojure.org", href: "https://clojure.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" }],
      references: {
        paradigm: [
          { href: "https://clojure.org/about/concurrent_programming", title: "Concurrent Programming" },
          { href: "https://github.com/clojure/core.async", title: "core.async" },
          { href: "https://clojure.org/about/functional_programming", title: "Functional Programming" },
          { href: "https://github.com/clojure/core.logic/", title: "core.logic" },
          { href: "https://clojure.org/guides/threading_macros", title: "Threading Macros Guide" },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey/",
            title: "Rich Hickey Q&A",
          },
          { href: "https://youtube.com/watch?v=LKtk3HCgTa8", title: "Simple Made Easy" },
          {
            href: "http://cdn.oreilly.com/oreilly/booksamplers/9781449394707_sampler.pdf",
            title: "Clojure Programming",
          },
          {
            href: "https://web.archive.org/web/20171003001051/https://www.amazon.com/gp/richpub/listmania/fullview/R3LG3ZBZS4GCTH",
            title: "Clojure Bookshelf",
          },
        ],
        influenced: [
          { href: "https://janet-lang.org/", title: "Janet Language" },
          { href: "https://www.pixielang.org/", title: "Pixie" },
          { href: "https://github.com/artagnon/rhine-ml", title: "Rhine" },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "1.11.2", date: "2024-03-08", kind: "stable" },
      ],
      extensions: [],
    },
    {
      dialects: ["pl+lisp"],
      influenced: [
        "pl+c-plus-plus",
        "pl+common-lisp",
        "pl+elixir",
        "pl+erlang",
        "pl+hy",
        "pl+java",
        "pl+lfe",
        "pl+ml",
        "pl+prolog",
        "pl+racket",
        "pl+ruby",
        "pl+scheme",
        "pl+wolfram",
      ],
      influences: [
        "pl+c-plus-plus",
        "pl+c-sharp",
        "pl+common-lisp",
        "pl+elixir",
        "pl+erlang",
        "pl+haskell",
        "pl+hy",
        "pl+java",
        "pl+lfe",
        "pl+ml",
        "pl+prolog",
        "pl+racket",
        "pl+ruby",
        "pl+scheme",
        "pl+wolfram",
      ],
      licenses: ["lic+eclipse-public"],
      paradigms: [
        "para+agent",
        "para+concurrent",
        "para+functional",
        "para+logic",
        "para+macros",
        "para+multi",
        "para+pipeline",
      ],
      people: [["person+rich-hickey", "designer"]],
      platforms: ["platf+.net", "platf+javascript", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
