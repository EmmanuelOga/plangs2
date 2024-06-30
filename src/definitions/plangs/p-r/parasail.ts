import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+parasail").merge({
    name: "ParaSail",
    websites: [
      { kind: "wikipedia", title: "ParaSail", href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)" },
      {
        kind: "wikipedia",
        title: "Sparkel",
        href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)#Description",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/c/c1/Logo_for_ParaSail_Programming_Language.jpg",
      },
    ],
    releases: [{ version: "9.3", date: "2021-01-01", kind: "stable" }],
  });
}
