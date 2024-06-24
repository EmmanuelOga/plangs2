import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+urbiscript",
    "urbiscript",
    {
      name: "urbiscript",
      websites: [
        { kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" },
        { kind: "repository", title: "github.com/urbiforge/urbi", href: "https://github.com/urbiforge/urbi" },
      ],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "2.7.4", date: "2011-11-17", kind: "stable" },
      ],
      references: {
        license: [
          {
            href: "http://www.roboticmagazine.com/software-ai/urbi-the-open-source-operating-system-for-robots",
            title: "Urbi, the open source operating system for robots",
          },
        ],
        influenced_by: [
          {
            href: "http://www.rfc1149.net/download/documents/scpr2008-08-Baillie.pdf",
            title: "The Urbi Universal Platform for Robotics",
          },
        ],
      },
      extensions: [".u"],
    },
    {
      influences: ["pl+c-plus-plus", "pl+io", "pl+self"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      people: [["person+jean-christophe-baillie", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic"],
    },
  );

  /**/
}
