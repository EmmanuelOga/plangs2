import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+webdev", {
    name: "WebDev",
    description: "Design and development of websites and web applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Web_development",
    keywords: ["http", "web design", "web programming", "webdev"],
  });
}
