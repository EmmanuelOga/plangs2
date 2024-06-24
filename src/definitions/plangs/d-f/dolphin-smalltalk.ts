import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+dolphin-smalltalk",
    "Dolphin Smalltalk",
    {
      name: "Dolphin Smalltalk",
      websites: [
        { kind: "wikipedia", title: "Dolphin Smalltalk", href: "https://en.wikipedia.org/wiki/Dolphin_Smalltalk" },
        { kind: "homepage", title: "www.object-arts.com", href: "http://www.object-arts.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DolphinSmalltalkBeachBall.png/121px-DolphinSmalltalkBeachBall.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1997-08-01", kind: "first" },
        { version: "7.1.24", date: "2022-06-19", kind: "stable" },
        { version: "8.0", date: "2024-01-01", kind: "preview" },
      ],
      references: {
        stable_release: [
          {
            href: "https://object-arts.com/blog/files/d60e38332cc3e009d1326504af95a64a-6.html",
            title: "Dolphin Smalltalk 7 is Open Source",
          },
        ],
      },
    },
    {
      implementations: ["pl+smalltalk"],
      influences: ["pl+smalltalk"],
      licenses: ["lic+mit"],
      paradigms: ["para+objects"],
      people: [
        ["person+andy-bower", "designer"],
        ["person+blair-mcglashan", "designer"],
        ["person+object-arts", "developer"],
      ],
      platforms: ["platf+ia-32", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+object-oriented"],
    },
  );

  /**/
}
