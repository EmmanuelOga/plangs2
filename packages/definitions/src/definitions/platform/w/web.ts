import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+web", {
    name: "WWW",
    description:
      "The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links.",
    extHomeURL: "https://en.wikipedia.org/wiki/World_Wide_Web",
    keywords: ["web"],
  });
}
