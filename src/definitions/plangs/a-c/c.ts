import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+c").merge({
    name: "C",
    websites: [
      { kind: "wikipedia", title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      {
        kind: "wikipedia",
        title: "C Programming Language",
        href: "https://en.wikipedia.org/wiki/C_Programming_Language",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "2018-01-01", kind: "stable" },
      { version: "unknown", date: "3220-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+c99").merge({
    name: "C99",
    websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }],
  });
}
