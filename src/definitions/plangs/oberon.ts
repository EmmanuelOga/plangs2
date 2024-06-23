import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+oberon",
    "Oberon",
    {
      name: "Oberon",
      websites: [
        { kind: "wikipedia", title: "Oberon", href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Oberon-07",
          href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)#Oberon-07",
        },
        { kind: "homepage", title: "projectoberon.net", href: "https://projectoberon.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "unknown", date: "2020-03-06", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+active-oberon", "pl+oberon-2", "pl+obliq"],
      influenced: [
        "pl+active-oberon",
        "pl+component-pascal",
        "pl+go",
        "pl+java",
        "pl+modula-2",
        "pl+modula-3",
        "pl+nim",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+obliq",
        "pl+pascal",
        "pl+v",
        "pl+zonnon",
      ],
      influences: [
        "pl+active-oberon",
        "pl+component-pascal",
        "pl+go",
        "pl+modula-2",
        "pl+nim",
        "pl+oberon-2",
        "pl+v",
        "pl+zonnon",
      ],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      platforms: ["platf+amiga", "platf+arm", "platf+atari", "platf+ia-32", "platf+linux", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
