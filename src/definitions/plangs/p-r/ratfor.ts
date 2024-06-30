import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ratfor",
    {
      name: "Ratfor",
      websites: [
        { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfor" },
        {
          kind: "homepage",
          title: "sepwww.stanford.edu",
          href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
        },
      ],
    },
    { influences: ["pl+fortran", "pl+c", "pl+speedcoding"], people: ["person+brian-kernighan"] },
  );
}
