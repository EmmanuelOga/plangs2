import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+.net", {
    name: "CLI",
    websites: [
      { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
    ],
  });
}
