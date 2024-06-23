import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gambas",
    "Gambas",
    {
      name: "Gambas",
      websites: [
        { kind: "wikipedia", title: "Gambas", href: "https://en.wikipedia.org/wiki/Gambas" },
        { kind: "homepage", title: "http://gambas.sourceforge.net", href: "http://gambas.sourceforge.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gambas_mascot.png/95px-Gambas_mascot.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "3.19.1", date: "2024-03-17", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://gitlab.com/gambas/gambas/-/releases", title: "Releases · Gambas / gambas · GitLab" },
        ],
        os: [
          { href: "https://allbasic.info/forum/index.php?topic=118.0", title: "Gambas 3 OS X" },
          { href: "https://discuss.haiku-os.org/t/gambas-on-haiku/10500", title: "Gambas on Haiku?" },
        ],
        influenced_by: [
          { href: "http://gambaswiki.org/wiki/doc/intro?nh&l=en", title: "Gambas Documentation Introduction" },
        ],
      },
    },
    {
      influenced: ["pl+java", "pl+visual-basic"],
      influences: ["pl+java", "pl+visual-basic"],
      licenses: ["lic+gpl"],
      people: [["person+benoit-minisini", "designer"]],
      platforms: ["platf+bsd", "platf+cygwin", "platf+haiku", "platf+linux", "platf+mac", "platf+windows"],
    },
  );

  /**/
}
