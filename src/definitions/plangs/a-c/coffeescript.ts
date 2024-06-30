import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+coffeescript",
    {
      name: "CoffeeScript",
      websites: [{ kind: "wikipedia", title: "CoffeeScript", href: "https://en.wikipedia.org/wiki/CoffeeScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg" }],
      releases: [{ version: "2.7.0", date: "2022-01-01", kind: "stable" }],
      extensions: [".coffee"],
    },
    {
      influences: ["pl+javascript", "pl+python", "pl+ruby"],
      people: ["person+jeremy-ashkenas"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+prototypes", "para+scripting"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
