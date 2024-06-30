import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+active-oberon",
    {
      name: "Active Oberon",
      websites: [{ kind: "wikipedia", title: "Active Oberon", href: "https://en.wikipedia.org/wiki/Active_Oberon" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
    },
    {
      implementations: ["pl+oberon"],
      influences: ["pl+oberon", "pl+oberon-2", "pl+object-oberon"],
      people: ["person+jurg-gutknecht", "person+niklaus-wirth"],
      paradigms: ["para+concurrent", "para+imperative", "para+modular", "para+objects", "para+structured"],
      platforms: ["platf+amd64", "platf+ia-32"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+oberon",
    {
      name: "Oberon",
      websites: [
        { kind: "wikipedia", title: "Oberon", href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Oberon",
          href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)#Oberon-07",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+active-oberon", "pl+oberon-2", "pl+obliq"],
      influences: ["pl+modula", "pl+oberon-2"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      platforms: ["platf+amiga", "platf+arm", "platf+atari", "platf+ia-32", "platf+linux", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+oberon-2",
    {
      name: "Oberon-2",
      websites: [{ kind: "wikipedia", title: "Oberon-2", href: "https://en.wikipedia.org/wiki/Oberon-2" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
        },
      ],
    },
    {
      influences: ["pl+modula", "pl+oberon", "pl+object-oberon"],
      people: ["person+niklaus-wirth"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+object-oberon",
    {
      name: "Object Oberon",
      websites: [{ kind: "wikipedia", title: "Object Oberon", href: "https://en.wikipedia.org/wiki/Object_Oberon" }],
    },
    {
      implementations: ["pl+oberon"],
      influences: ["pl+modula", "pl+oberon"],
      people: ["person+hanspeter-mossenbock"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );
}
