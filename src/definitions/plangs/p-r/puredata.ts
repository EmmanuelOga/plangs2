import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+puredata",
    "Pure DataPure Data",
    {
      name: "Pure DataPure Data",
      websites: [{ kind: "wikipedia", title: "PureData", href: "https://en.wikipedia.org/wiki/PureData" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lucid", "pl+patcher"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+dataflow"],
      people: ["person+miller-s-puckette"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"],
    },
  );
}
