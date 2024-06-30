import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+scala")
    .merge({
      name: "Scala",
      websites: [
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_(programming_language)" },
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_programming_language" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" }],
      releases: [{ name: "Scala", version: "3.4.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+eiffel", "pl+erlang", "pl+ml", "pl+oz", "pl+poly-slashml", "pl+f-sharp", "pl+smalltalk"])
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addInfluence("pl+ocaml", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addInfluence("pl+pizza", {
      refs: [
        { href: "http://www.artima.com/scalazine/articles/origins_of_scala.html", title: "The Origins of Scala" },
        {
          href: "https://web.archive.org/web/20200709211816/https://www.scala-lang.org/docu/files/ScalaOverview.pdf",
          title: "An Overview of the Scala Programming Language",
        },
      ],
    })
    .addInfluence("pl+common-lisp", { refs: [{ href: "http://scalamacros.org", title: "Scala Macros" }] })
    .addInfluence("pl+haskell", {
      refs: [
        { href: "http://blog.fogus.me/2010/08/06/martinodersky-take5-tolist/", title: "MartinOdersky take(5) toList" },
      ],
    })
    .addInfluence("pl+scheme", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addInfluence("pl+sml", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addPerson("person+martin-odersky", { role: "designer" })
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/scala/scala/blob/2.13.x/NOTICE", title: "Notice file" }],
    })
    .addParadigms(["para+multi", "para+concurrent", "para+functional", "para+imperative", "para+objects"])
    .addPlatforms(["platf+jvm", "platf+javascript", "platf+llvm"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  /**/
}
