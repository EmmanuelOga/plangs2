import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+factor").merge({
    name: "Factor",
    websites: [
      { kind: "wikipedia", title: "Factor", href: "https://en.wikipedia.org/wiki/Factor_(programming_language)" },
      { kind: "homepage", title: "factorcode.org", href: "http://factorcode.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/NewFactorLogo.png/200px-NewFactorLogo.png",
      },
    ],
    releases: [{ version: "0.99", date: "2023-01-01", kind: "stable" }],
  });
}
