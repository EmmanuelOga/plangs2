import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+coffeescript",
    "CoffeeScript",
    {
      name: "CoffeeScript",
      websites: [
        { kind: "wikipedia", title: "CoffeeScript", href: "https://en.wikipedia.org/wiki/CoffeeScript" },
        { kind: "homepage", title: "coffeescript.org", href: "https://coffeescript.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg" }],
      releases: [
        { version: "unknown", date: "2009-12-13", kind: "first" },
        { version: "2.7.0", date: "2022-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jashkenas/coffeescript/releases/tag/2.7.0", title: "2.7.0" }],
      },
    },
    {
      influenced: ["pl+ecmascript", "pl+livescript", "pl+moonscript"],
      influences: ["pl+javascript", "pl+python", "pl+ruby"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+prototypes", "para+scripting"],
      people: [["person+jeremy-ashkenas", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
