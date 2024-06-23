import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ezhil",
    "Ezhil",
    {
      name: "Ezhil",
      websites: [
        { kind: "wikipedia", title: "Ezhil", href: "https://en.wikipedia.org/wiki/Ezhil_(programming_language)" },
        { kind: "homepage", title: "ezhillang.org", href: "http://ezhillang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Ezhil_-_A_Tamil_Programming_Language_Logo.png",
        },
      ],
      references: {
        designed_by: [
          { href: "https://scholar.google.com/citations?hl=en&user=n23oby8AAAAJ", title: "Muthiah Annamalai" },
        ],
        stable_release: [
          { href: "https://pypi.org/project/ezhil/#history", title: "Python PIP repository" },
          {
            href: "https://github.com/arcturusannamalai/Ezhil-Lang/commits/master",
            title: "Ezhil-Programming Language on github",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "0.99", date: "2017-08-23", kind: "stable" },
        { version: "unknown", date: "2021-03-14", kind: "preview" },
      ],
      extensions: [".n"],
    },
    {
      influences: ["pl+basic", "pl+logo", "pl+python"],
      licenses: ["lic+gpl"],
      paradigms: ["para+imperative", "para+interpreted", "para+structured"],
      people: [["person+google-scholar", "designer"]],
      platforms: ["platf+linux", "platf+mac", "platf+pip", "platf+python", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
