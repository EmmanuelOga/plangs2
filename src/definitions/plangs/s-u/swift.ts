import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+swift").merge({
    name: "Swift",
    websites: [
      { kind: "wikipedia", title: "Swift", href: "https://en.wikipedia.org/wiki/Swift_(programming_language)" },
      {
        kind: "wikipedia",
        title: "Swift (parallel scripting language)",
        href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
      },
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
    ],
    releases: [
      { version: "0.96.2", date: "2015-01-01", kind: "stable" },
      { version: "5.10.1", date: "2024-01-01", kind: "stable" },
      { version: "6.0", kind: "preview" },
    ],
  });
}
