import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+web", "web browser", {
    websites: [
      { kind: "wikipedia", title: "Web browser", href: "https://en.wikipedia.org/wiki/Web_browser" },
      { kind: "wikipedia", title: "Web platform", href: "https://en.wikipedia.org/wiki/Web_platform" },
      { kind: "wikipedia", title: "browser-based", href: "https://en.wikipedia.org/wiki/Web_application" },
      { kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" },
    ],
  });

  /**/
}