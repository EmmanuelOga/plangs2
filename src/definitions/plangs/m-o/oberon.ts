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
      influences: ["pl+oberon-2", "pl+oberon", "pl+object-oberon"],
      paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects", "para+concurrent"],
      people: ["person+niklaus-wirth", "person+jurg-gutknecht"],
      platforms: ["platf+ia-32", "platf+amd64"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

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
      dialects: ["pl+oberon-2", "pl+obliq", "pl+active-oberon"],
      influences: ["pl+modula", "pl+oberon-2", "pl+pascal"],
      paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64", "platf+win", "platf+linux", "platf+atari", "platf+amiga"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

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
      influences: ["pl+oberon", "pl+modula", "pl+object-oberon", "pl+pascal"],
      paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects"],
      people: ["person+niklaus-wirth"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+win", "platf+linux", "platf+mac"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

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
      influences: ["pl+modula", "pl+oberon"],
      paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects"],
      people: ["person+hanspeter-mossenbock"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );
}
