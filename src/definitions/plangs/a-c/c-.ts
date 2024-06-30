import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+c-",
    {
      name: "Cω",
      websites: [
        { kind: "wikipedia", title: "C--", href: "https://en.wikipedia.org/wiki/C--" },
        {
          kind: "homepage",
          title: "https://www.cs.tufts.edu/~nr/c--/index.html",
          href: "https://www.cs.tufts.edu/~nr/c--/index.html",
        },
        { kind: "wikipedia", title: "Cω", href: "https://en.wikipedia.org/wiki/C%CF%89" },
      ],
    },
    {
      influences: ["pl+c"],
      people: ["person+simon-peyton-jones"],
      paradigms: ["para+imperative"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );
}
