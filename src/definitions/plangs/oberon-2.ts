import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+windows", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
