import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+raku",
    "Raku",
    {
      name: "Raku",
      websites: [
        { kind: "wikipedia", title: "Raku", href: "https://en.wikipedia.org/wiki/Raku_(programming_language)" },
        { kind: "homepage", title: "raku.org", href: "http://raku.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg" }],
      releases: [
        { version: "unknown", date: "2015-12-25", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2020-10-24", kind: "stable" },
      ],
      extensions: [".raku", ".t"],
    },
    {
      implementations: ["pl+rakudo"],
      influences: ["pl+perl", "pl+ruby", "pl+smalltalk", "pl+haskell", "pl+javascript"],
      licenses: ["lic+gpl", "lic+artistic"],
      paradigms: ["para+multi"],
      people: ["person+larry-wall"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual"],
    },
  );

  lb.define(
    "pl+rakudo",
    "Rakudo",
    {
      name: "Rakudo",
      websites: [
        { kind: "wikipedia", title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo" },
        { kind: "homepage", title: "rakudo.org", href: "http://rakudo.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2024.05", date: "2024-05-30", kind: "stable" },
      ],
    },
    { licenses: ["lic+artistic"] },
  );
}
