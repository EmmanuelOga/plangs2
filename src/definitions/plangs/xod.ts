import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xod",
    "XOD",
    {
      name: "XOD",
      websites: [
        { kind: "wikipedia", title: "XOD", href: "https://en.wikipedia.org/wiki/XOD_(programming_language)" },
        { kind: "homepage", title: "xod.io", href: "http://xod.io" },
      ],
      releases: [
        { version: "unknown", date: "2016-01-01", kind: "first" },
        { version: "0.38.0", date: "2021-03-12", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+gnu-affero-gpl"],
      paradigms: ["para+dataflow", "para+declarative", "para+functional", "para+visual"],
      platforms: ["platf+arduino", "platf+rpi"],
    },
  );

  /**/
}
