import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+snap-",
    "Snap!",
    {
      name: "Snap!",
      websites: [
        { kind: "wikipedia", title: "Snap!", href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)" },
        { kind: "homepage", title: "snap.berkeley.edu", href: "http://snap.berkeley.edu" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Snap%21.svg" }],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "9.2.17", date: "2024-04-24", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jmoenig/Snap/releases", title: "jmoenig/Snap" }],
        implementation_language: [
          { href: "https://github.com/jmoenig/morphic.js/blob/master/morphic.txt", title: "morphic.js" },
        ],
      },
      extensions: [],
    },
    {
      implementations: ["pl+javascript"],
      influenced: ["pl+turtlestitch"],
      influences: ["pl+apl", "pl+logo", "pl+scheme", "pl+scratch", "pl+smalltalk"],
      licenses: ["lic+affero-gpl"],
      paradigms: ["para+educational", "para+event", "para+objects"],
      people: [["person+brian-harvey", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
