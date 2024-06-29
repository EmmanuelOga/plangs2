import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pop-11",
    "POP-11",
    {
      name: "POP-11",
      websites: [
        { kind: "wikipedia", title: "11", href: "https://en.wikipedia.org/wiki/POP-11" },
        {
          kind: "homepage",
          title: "www.cs.bham.ac.uk/research/projects/poplog/poplog.info.html",
          href: "http://www.cs.bham.ac.uk/research/projects/poplog/poplog.info.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "2020-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+lisp", "pl+pop-2"],
      licenses: ["lic+mit", "lic+open-source", "lic+proprietary", "lic+xfree86"],
      paradigms: ["para+dec", "para+functional", "para+imperative", "para+multi", "para+reflective", "para+structured"],
      people: [["person+robin-popplestone", { role: "designer" }]],
      platforms: [
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+openvms",
        "platf+unix",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
