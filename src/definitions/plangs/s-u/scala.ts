import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scala",
    "Scala",
    {
      name: "Scala",
      websites: [
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_(programming_language)" },
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_programming_language" },
        { kind: "homepage", title: "www.scala-lang.org", href: "http://www.scala-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" }],
      releases: [
        { version: "unknown", date: "2004-01-20", kind: "first" },
        { version: "3.4.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/scala/scala3/releases/tag/3.4.0", title: "Scala 3.4.0" }],
        license: [{ href: "https://github.com/scala/scala/blob/2.13.x/NOTICE", title: "Notice file" }],
        influenced_by: [
          { href: "http://scalamacros.org", title: "Scala Macros" },
          {
            href: "http://blog.fogus.me/2010/08/06/martinodersky-take5-tolist/",
            title: "MartinOdersky take(5) toList",
          },
          {
            href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
            title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
          },
          {
            href: "https://web.archive.org/web/20200709211816/https://www.scala-lang.org/docu/files/ScalaOverview.pdf",
            title: "An Overview of the Scala Programming Language",
          },
        ],
      },
      extensions: [".scala", ".sc"],
    },
    {
      influences: [
        "pl+common-lisp",
        "pl+eiffel",
        "pl+erlang",
        "pl+f-sharp",
        "pl+haskell",
        "pl+java",
        "pl+lisp",
        "pl+ml",
        "pl+ocaml",
        "pl+oz",
        "pl+pizza",
        "pl+scheme",
        "pl+smalltalk",
        "pl+sml",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [["person+martin-odersky", "designer"]],
      platforms: ["platf+javascript", "platf+jvm", "platf+llvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
