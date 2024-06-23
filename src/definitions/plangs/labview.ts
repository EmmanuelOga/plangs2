import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+labview",
    "LabVIEW",
    {
      name: "LabVIEW",
      websites: [
        { kind: "wikipedia", title: "LabVIEW", href: "https://en.wikipedia.org/wiki/LabVIEW" },
        { kind: "homepage", title: "www.ni.com/labview", href: "https://www.ni.com/labview" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/LabVIEW_Logo.jpg/300px-LabVIEW_Logo.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "5.1", date: "2023-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+proprietary"], people: [["person+national-instruments", "designer"]] },
  );

  /**/
}
