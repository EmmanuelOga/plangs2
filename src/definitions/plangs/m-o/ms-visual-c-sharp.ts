import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ms-visual-c-sharp",
    "Visual C#",
    {
      name: "Visual C#",
      websites: [
        { kind: "wikipedia", title: "Visual C#", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C_Sharp" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
      releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
      extensions: [".cs", ".csx"],
    },
    {
      dialects: ["pl+c-", "pl+polyphonic-c-sharp"],
      implementations: ["pl+ms-visual-c-sharp", "pl+.net", "pl+mono", "pl+win", "pl+.net-framework", "pl+dotgnu"],
      influences: [
        "pl+cpp",
        "pl+c-",
        "pl+eiffel",
        "pl+f-sharp",
        "pl+haskell",
        "pl+scala",
        "pl+icon",
        "pl+j-sharp",
        "pl+visual-jpp",
        "pl+java",
        "pl+ml",
        "pl+modula",
        "pl+pascal",
        "pl+basic",
      ],
      paradigms: [
        "para+multi",
        "para+structured",
        "para+imperative",
        "para+objects",
        "para+event",
        "para+the",
        "para+functional",
        "para+generic",
        "para+reflective",
        "para+concurrent",
      ],
      people: ["person+anders-hejlsberg"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+inferred"],
    },
  );
}
