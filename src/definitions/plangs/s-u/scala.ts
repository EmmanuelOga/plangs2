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
        { version: "unknown", kind: "stable" },
        { version: "3.4.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".scala", ".sc"],
    },
    {
      influences: [
        "pl+java",
        "pl+sml",
        "pl+scheme",
        "pl+lisp",
        "pl+erlang",
        "pl+ocaml",
        "pl+ml",
        "pl+pizza",
        "pl+oz",
        "pl+common-lisp",
        "pl+eiffel",
        "pl+f-sharp",
        "pl+haskell",
        "pl+smalltalk",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+concurrent", "para+functional", "para+imperative", "para+objects"],
      people: ["person+martin-odersky"],
      platforms: ["platf+jvm", "platf+javascript", "platf+llvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
