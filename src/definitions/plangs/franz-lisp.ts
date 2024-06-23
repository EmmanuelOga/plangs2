import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+franz-lisp",
    "Franz Lisp",
    {
      name: "Franz Lisp",
      websites: [{ kind: "wikipedia", title: "Franz Lisp", href: "https://en.wikipedia.org/wiki/Franz_Lisp" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png/300px-4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png",
        },
      ],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
      scoping: ["lexical"],
    },
    {
      dialects: ["pl+lisp-programming-language"],
      implementations: ["pl+c"],
      influenced: ["pl+allegro-common-lisp"],
      influences: ["pl+allegro-common-lisp", "pl+common-lisp", "pl+lisp", "pl+maclisp"],
      licenses: ["lic+freeware", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      people: [["person+richard-fateman", "designer"]],
      platforms: ["platf+openvms", "platf+unix"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
