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
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" }],
      releases: [{ version: "3.4.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+eiffel",
        "pl+erlang",
        "pl+java",
        "pl+ml",
        "pl+ocaml",
        "pl+oz",
        "pl+pizza",
        "pl+poly-slashml",
        "pl+common-lisp",
        "pl+f-sharp",
        "pl+haskell",
        "pl+scheme",
        "pl+smalltalk",
        "pl+sml",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+concurrent", "para+functional", "para+imperative", "para+objects"],
      people: ["person+martin-odersky"],
      platforms: ["platf+jvm", "platf+javascript", "platf+llvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
