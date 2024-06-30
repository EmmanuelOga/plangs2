import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+smalltalk").merge({
    name: "Smalltalk",
    websites: [
      { kind: "wikipedia", title: "Smalltalk", href: "https://en.wikipedia.org/wiki/Smalltalk" },
      { kind: "wikipedia", title: "Amber Smalltalk", href: "https://en.wikipedia.org/wiki/Amber_Smalltalk" },
      { kind: "wikipedia", title: "Dolphin Smalltalk", href: "https://en.wikipedia.org/wiki/Dolphin_Smalltalk" },
      { kind: "wikipedia", title: "GNU Smalltalk", href: "https://en.wikipedia.org/wiki/GNU_Smalltalk" },
      {
        kind: "homepage",
        title: "https://www.gnu.org/software/smalltalk/",
        href: "https://www.gnu.org/software/smalltalk/",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/f/fb/Amber_Smalltalk_Logo.svg" },
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DolphinSmalltalkBeachBall.png/121px-DolphinSmalltalkBeachBall.png",
      },
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/GNU_Smalltalk_logo.svg" },
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg" },
    ],
    releases: [
      { version: "0.30.0", date: "2021-01-01", kind: "stable" },
      { version: "7.1.24", date: "2022-01-01", kind: "stable" },
      { version: "8.0", date: "2024-01-01", kind: "preview" },
      { version: "3.2.5", date: "2013-01-01", kind: "stable" },
      { version: "unknown", date: "1980-01-01", kind: "stable" },
    ],
  });
}
