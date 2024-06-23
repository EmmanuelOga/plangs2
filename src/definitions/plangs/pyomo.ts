import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pyomo",
    "Pyomo",
    {
      name: "Pyomo",
      websites: [
        { kind: "wikipedia", title: "Pyomo", href: "https://en.wikipedia.org/wiki/Pyomo" },
        { kind: "homepage", title: "www.pyomo.org", href: "https://www.pyomo.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "6.4.2", date: "2022-08-17", kind: "stable" },
      ],
      extensions: [".py"],
    },
    {
      influenced: ["pl+ampl"],
      influences: ["pl+ampl", "pl+general-algebraic-modeling-system", "pl+python"],
      licenses: ["lic+bsd"],
      people: [
        ["person+carl-laird", "designer"],
        ["person+david-woodruff", "designer"],
        ["person+gabriel-hackebeil", "designer"],
        ["person+jean-paul-watson", "designer"],
        ["person+john-siirola", "designer"],
        ["person+william-e-hart", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+windows"],
    },
  );

  /**/
}
