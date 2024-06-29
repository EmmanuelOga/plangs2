import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ada",
    "Ada",
    {
      name: "Ada",
      websites: [
        { kind: "wikipedia", title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_(programming_language)" },
        { kind: "homepage", title: "www.adaic.org", href: "https://www.adaic.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ada_horizon_green_logo_with_slogan.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1980-01-01", kind: "first" },
        { version: "unknown", date: "2022-01-01", kind: "stable" },
      ],
      extensions: [".adb", ".ads"],
    },
    {
      dialects: ["pl+spark", "pl+ravenscar-profile"],
      implementations: ["pl+gnat", "pl+ptc", "pl+ddc-i"],
      influences: [
        "pl+algol",
        "pl+pascal",
        "pl+simula-67",
        "pl+cpp",
        "pl+smalltalk",
        "pl+modula",
        "pl+java",
        "pl+eiffel",
        "pl+clu",
      ],
      paradigms: [
        "para+multi",
        "para+structured",
        "para+imperative",
        "para+objects",
        "para+aspect",
        "para+concurrent",
        "para+array",
        "para+distributed",
        "para+generic",
        "para+meta",
      ],
      people: ["person+jean-ichbiah"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"],
    },
  );
}
