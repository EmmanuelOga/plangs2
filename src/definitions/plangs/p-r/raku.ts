import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+raku",
    {
      name: "Raku",
      websites: [
        { kind: "wikipedia", title: "Raku", href: "https://en.wikipedia.org/wiki/Raku_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+rakudo"],
      influences: ["pl+haskell", "pl+javascript", "pl+perl", "pl+ruby", "pl+smalltalk"],
      people: ["person+larry-wall"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+multi"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual"],
    },
  );

  lb.define(
    "pl+rakudo",
    {
      name: "Rakudo",
      websites: [{ kind: "wikipedia", title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
        },
      ],
      releases: [{ version: "2024.05", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+artistic"] },
  );
}
