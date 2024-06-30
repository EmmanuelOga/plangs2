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
        "pl+c-sharp",
        "pl+cedar",
        "pl+clu",
        "pl+cpp",
        "pl+eiffel",
        "pl+emerald",
        "pl+lisp",
        "pl+mdl",
        "pl+mesa",
        "pl+modula",
        "pl+ms-visual-c-sharp",
        "pl+oaklisp",
        "pl+oberon",
        "pl+objective-c",
        "pl+objective-cpp",
        "pl+pascal",
        "pl+simula67",
        "pl+smalltalk",
        "pl+strongtalk",
      ],
      people: ["person+james-gosling"],
      paradigms: [
        "para+class",
        "para+concurrent",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflection",
      ],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
