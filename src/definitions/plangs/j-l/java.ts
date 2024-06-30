import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+java",
    {
      name: "Java",
      websites: [
        { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      ],
    },
    {
      influences: [
        "pl+ada",
        "pl+c",
        "pl+cpp",
        "pl+c-sharp",
        "pl+cedar",
        "pl+eiffel",
        "pl+emerald",
        "pl+clu",
        "pl+simula67",
        "pl+lisp",
        "pl+smalltalk",
        "pl+mesa",
        "pl+modula",
        "pl+oberon",
        "pl+objective-c",
        "pl+pascal",
        "pl+mdl",
        "pl+ms-visual-c-sharp",
        "pl+oaklisp",
        "pl+objective-cpp",
        "pl+strongtalk",
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
