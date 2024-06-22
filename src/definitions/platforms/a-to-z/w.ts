import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+watchos", "watchOS", [
    { kind: "wikipedia", title: "watchOS", href: "https://en.wikipedia.org/wiki/WatchOS" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+web", "WebAssembly", [
    { kind: "wikipedia", title: "Web browser", href: "https://en.wikipedia.org/wiki/Web_browser" },
    { kind: "wikipedia", title: "Amazon Web Services", href: "https://en.wikipedia.org/wiki/Amazon_Web_Services" },
    { kind: "wikipedia", title: "Web platform", href: "https://en.wikipedia.org/wiki/Web_platform" },
    { kind: "wikipedia", title: "browser-based", href: "https://en.wikipedia.org/wiki/Web_application" },
    { kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" },
    { kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" },
  ]);
}
