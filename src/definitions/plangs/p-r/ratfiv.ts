import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ratfiv",
    {
      name: "Ratfor",
      websites: [
        { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfiv" },
        {
          kind: "homepage",
          title: "sepwww.stanford.edu",
          href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
        },
      ],
    },
    { influences: ["pl+c", "pl+fortran"], people: ["person+brian-kernighan"] },
  );
}
