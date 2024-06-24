import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+active-oberon",
    "Active Oberon",
    {
      name: "Active Oberon",
      websites: [{ kind: "wikipedia", title: "Active Oberon", href: "https://en.wikipedia.org/wiki/Active_Oberon" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
      releases: [{ version: "unknown", date: "1998-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+oberon"],
      influenced: ["pl+go", "pl+oberon", "pl+oberon-2"],
      influences: ["pl+oberon", "pl+oberon-2", "pl+object-oberon"],
      paradigms: ["para+concurrent", "para+imperative", "para+modular", "para+objects", "para+structured"],
      people: [
        ["person+jurg-gutknecht", "designer"],
        ["person+niklaus-wirth", "designer"],
      ],
      platforms: ["platf+amd64", "platf+ia-32"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  lb.define(
    "pl+oberon-2",
    "Oberon-2",
    {
      name: "Oberon-2",
      websites: [
        { kind: "wikipedia", title: "Oberon-2", href: "https://en.wikipedia.org/wiki/Oberon-2" },
        { kind: "homepage", title: "www.ethoberon.ethz.ch", href: "http://www.ethoberon.ethz.ch" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+active-oberon", "pl+component-pascal", "pl+go", "pl+oberon", "pl+object-oberon", "pl+pascal"],
      influences: [
        "pl+active-oberon",
        "pl+component-pascal",
        "pl+go",
        "pl+modula-2",
        "pl+nim",
        "pl+oberon",
        "pl+object-oberon",
        "pl+zonnon",
      ],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      people: [["person+niklaus-wirth", "designer"]],
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+object-oberon",
    "Object Oberon",
    {
      name: "Object Oberon",
      websites: [
        { kind: "wikipedia", title: "Object Oberon", href: "https://en.wikipedia.org/wiki/Object_Oberon" },
        { kind: "homepage", title: "www.projectoberon.com", href: "http://www.projectoberon.com" },
      ],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+oberon"],
      influenced: ["pl+active-oberon", "pl+oberon-2"],
      influences: ["pl+modula-2", "pl+oberon", "pl+oberon-2"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      people: [["person+hanspeter-mossenbock", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
