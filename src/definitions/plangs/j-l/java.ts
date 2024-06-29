import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+java",
    "Java",
    {
      name: "Java",
      websites: [
        { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
        { kind: "homepage", title: "oracle.com/java/", href: "http://oracle.com/java/" },
        { kind: "homepage", title: "java.com", href: "http://java.com" },
        { kind: "homepage", title: "dev.java", href: "http://dev.java" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1995-05-23", kind: "first" },
      ],
      extensions: [".java", ".jmod"],
    },
    {
      influences: [
        "pl+ada",
        "pl+objective-cpp",
        "pl+clu",
        "pl+simula67",
        "pl+lisp",
        "pl+smalltalk",
        "pl+cpp",
        "pl+c-sharp",
        "pl+eiffel",
        "pl+mesa",
        "pl+modula",
        "pl+oberon",
        "pl+objective-c",
        "pl+pascal",
        "pl+emerald",
        "pl+mdl",
        "pl+c",
        "pl+strongtalk",
        "pl+oaklisp",
      ],
      paradigms: [
        "para+multi",
        "para+generic",
        "para+objects",
        "para+class",
        "para+functional",
        "para+imperative",
        "para+reflection",
        "para+concurrent",
      ],
      people: ["person+james-gosling"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"],
    },
  );
}
