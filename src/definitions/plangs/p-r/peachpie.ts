import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+peachpie",
    "PeachPie",
    {
      name: "PeachPie",
      websites: [
        { kind: "wikipedia", title: "PeachPie", href: "https://en.wikipedia.org/wiki/PeachPie" },
        { kind: "homepage", title: "www.peachpie.io", href: "http://www.peachpie.io" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peachpie-logo.png/150px-Peachpie-logo.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2016-07-18", kind: "first" },
      ],
    },
    { licenses: ["lic+apache"] },
  );
}
