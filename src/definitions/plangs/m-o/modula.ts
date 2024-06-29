import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+modula",
    "-3",
    {
      name: "-3",
      websites: [
        { kind: "wikipedia", title: "Modula-2", href: "https://en.wikipedia.org/wiki/Modula-2" },
        { kind: "wikipedia", title: "Modula", href: "https://en.wikipedia.org/wiki/Modula" },
        { kind: "wikipedia", title: "Modula-3", href: "https://en.wikipedia.org/wiki/Modula-3" },
        { kind: "wikipedia", title: "Modula-2+", href: "https://en.wikipedia.org/wiki/Modula-2%2B" },
        { kind: "wikipedia", title: "ORCA/Modula-2", href: "https://en.wikipedia.org/wiki/ORCA/Modula-2" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Modula-3.svg" }],
      releases: [{ version: "5.8.6", date: "2010-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+alma-0", "pl+modula"],
      implementations: ["pl+dec"],
      influences: ["pl+algol", "pl+cedar", "pl+mesa", "pl+pascal", "pl+modula", "pl+euclid", "pl+oberon"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+imperative",
        "para+structured",
        "para+modular",
        "para+information",
        "para+concurrent",
        "para+objects",
        "para+generic",
      ],
      people: ["person+niklaus-wirth", "person+luca-cardelli", "person+greg-nelson", "person+the-byte-works"],
      platforms: [
        "platf+cross-platform",
        "platf+amd",
        "platf+amd-am2900",
        "platf+ia-32",
        "platf+x86-64",
        "platf+bsd",
        "platf+linux",
        "platf+mac",
      ],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );
}
