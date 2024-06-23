import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+allegro-common-lisp",
    "Allegro CL",
    {
      name: "Allegro CL",
      websites: [
        { kind: "wikipedia", title: "Allegro Common Lisp", href: "https://en.wikipedia.org/wiki/Allegro_Common_Lisp" },
        {
          kind: "homepage",
          title: "franz.com/products/allegro-common-lisp",
          href: "http://franz.com/products/allegro-common-lisp",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Allegro_Common_Lisp_emblem.png/121px-Allegro_Common_Lisp_emblem.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "11.0", date: "2024-01-09", kind: "stable" },
      ],
      scoping: ["dynamic"],
    },
    {
      implementations: ["pl+common-lisp"],
      influenced: ["pl+franz-lisp"],
      influences: ["pl+franz-lisp", "pl+lisp", "pl+maclisp", "pl+macsyma"],
      licenses: ["lic+freeware", "lic+proprietary"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      people: [["person+john-foderaro", "designer"]],
      platforms: ["platf+arm", "platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+windows", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
