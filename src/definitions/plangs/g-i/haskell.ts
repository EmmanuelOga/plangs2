import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+haskell").merge({
    name: "Haskell",
    websites: [
      { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)" },
      { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "2010-01-01", kind: "stable" },
      { version: "unknown", date: "2020-01-01", kind: "preview" },
    ],
  });
}
