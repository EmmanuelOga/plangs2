import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+c-sharp",
    {
      name: "C#",
      websites: [
        { kind: "wikipedia", title: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
      releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
      extensions: [".cs", ".csx"],
    },
    {
      dialects: ["pl+c-", "pl+nemerle", "pl+polyphonic-c-sharp"],
      implementations: ["pl+.net", "pl+.net-framework", "pl+dotgnu", "pl+mono", "pl+ms-visual-c-sharp", "pl+win"],
      influences: [
        "pl+basic",
        "pl+c",
        "pl+c-",
        "pl+cpp",
        "pl+d",
        "pl+eiffel",
        "pl+f-sharp",
        "pl+haskell",
        "pl+icon",
        "pl+j-sharp",
        "pl+java",
        "pl+ml",
        "pl+modula",
        "pl+pascal",
        "pl+scala",
        "pl+visual-jpp",
      ],
      people: ["person+anders-hejlsberg"],
      paradigms: [
        "para+concurrent",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
        "para+the",
      ],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
