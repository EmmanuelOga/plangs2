import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+modula",
    {
      name: "Modula-2",
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
      influences: ["pl+algol", "pl+cedar", "pl+euclid", "pl+mesa", "pl+modula", "pl+oberon", "pl+pascal"],
      people: ["person+greg-nelson", "person+luca-cardelli", "person+niklaus-wirth", "person+the-byte-works"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+concurrent",
        "para+generic",
        "para+imperative",
        "para+information",
        "para+modular",
        "para+objects",
        "para+structured",
      ],
      platforms: [
        "platf+amd",
        "platf+amd-am2900",
        "platf+bsd",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
