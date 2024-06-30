import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+typescript").merge({
    name: "TypeScript",
    websites: [{ kind: "wikipedia", title: "TypeScript", href: "https://en.wikipedia.org/wiki/TypeScript" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" }],
    releases: [{ version: "5.4.2", date: "2024-01-01", kind: "stable" }],
  });
}
