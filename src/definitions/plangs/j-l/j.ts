import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+j").merge({
    name: "J",
    websites: [{ kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
      },
    ],
    releases: [{ version: "9.5", date: "2023-01-01", kind: "stable" }],
  });
}
