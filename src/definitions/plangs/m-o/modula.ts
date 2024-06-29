import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+modula",
    "Modula",
    {
      name: "Modula",
      websites: [
        { kind: "wikipedia", title: "Modula-3", href: "https://en.wikipedia.org/wiki/Modula-3" },
        { kind: "wikipedia", title: "Modula-2", href: "https://en.wikipedia.org/wiki/Modula-2" },
        { kind: "wikipedia", title: "Modula", href: "https://en.wikipedia.org/wiki/Modula" },
        { kind: "homepage", title: "www.modula2.org", href: "http://www.modula2.org" },
        { kind: "wikipedia", title: "Modula-2+", href: "https://en.wikipedia.org/wiki/Modula-2%2B" },
        { kind: "homepage", title: "www.modula3.org", href: "http://www.modula3.org" },
        { kind: "wikipedia", title: "ORCA/Modula-2", href: "https://en.wikipedia.org/wiki/ORCA/Modula-2" },
      ],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "1978-01-01", kind: "first" },
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "5.8.6", date: "2010-07-14", kind: "stable" },
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "unknown", date: "1994-01-01", kind: "first" },
      ],
      extensions: [".mod", ".m2", ".def", ".MOD", ".DEF", ".mi", ".md"],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Modula-3.svg" }],
    },
    {
      dialects: ["pl+modula", "pl+alma-0"],
      implementations: ["pl+dec"],
      influences: ["pl+pascal", "pl+modula", "pl+mesa", "pl+algol", "pl+euclid", "pl+oberon"],
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
      people: [
        "person+niklaus-wirth",
        "person+luca-cardelli",
        "person+greg-nelson",
        "person+paul-rovner",
        "person+roy-levin",
        "person+john-wick",
        "person+the-byte-works",
      ],
      platforms: [
        "platf+amd",
        "platf+amd-am2900",
        "platf+cross-platform",
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
