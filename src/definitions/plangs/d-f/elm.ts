import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+elm").merge({
    name: "Elm",
    websites: [{ kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
    releases: [{ version: "0.19.1", date: "2019-01-01", kind: "stable" }],
  });
}
