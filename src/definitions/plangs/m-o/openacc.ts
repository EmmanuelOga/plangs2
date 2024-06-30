import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+openacc", {
    name: "OpenACC",
    websites: [{ kind: "wikipedia", title: "OpenACC", href: "https://en.wikipedia.org/wiki/OpenACC" }],
    releases: [{ version: "3.2", date: "2021-01-01", kind: "stable" }],
  });
}
