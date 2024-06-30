import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+amiga-e",
    {
      name: "Amiga E",
      websites: [
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E#PortablE" },
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E" },
      ],
    },
    {
      influences: ["pl+ada", "pl+cpp", "pl+lisp"],
      licenses: ["lic+freeware"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+amiga"],
    },
  );
}
