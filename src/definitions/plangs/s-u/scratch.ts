import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+scratch").merge({
    name: "Scratch",
    websites: [
      { kind: "wikipedia", title: "Scratch", href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg" }],
    releases: [
      { version: "0.1", date: "2003-01-01", kind: "first" },
      { version: "3.0", date: "2019-01-01", kind: "stable" },
    ],
  });

  g.buildPlang("pl+scratchjr").merge({
    name: "ScratchJr",
    websites: [{ kind: "wikipedia", title: "ScratchJr", href: "https://en.wikipedia.org/wiki/ScratchJr" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
      },
    ],
  });
}
