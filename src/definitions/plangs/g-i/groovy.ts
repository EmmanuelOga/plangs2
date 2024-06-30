import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+groovy").merge({
    name: "Groovy",
    websites: [
      { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
    releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
    extensions: [".groovy", ".gsh", ".gvy", ".gy"],
  });
}
