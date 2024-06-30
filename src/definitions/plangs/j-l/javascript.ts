import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+javascript").merge({
    name: "JavaScript",
    websites: [
      { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
      {
        kind: "wikipedia",
        title: "Javascript",
        href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2023-01-01", kind: "stable" },
      { version: "unknown", date: "2025-01-01", kind: "preview" },
    ],
    extensions: [".cjs", ".js", ".mjs[4]"],
  });
}
