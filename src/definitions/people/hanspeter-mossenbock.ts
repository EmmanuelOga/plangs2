import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+hanspeter-mossenbock", "Hanspeter Mössenböck", {
    websites: [
      {
        title: "Hanspeter Mössenböck",
        href: "https://en.wikipedia.org/wiki/Hanspeter_M%C3%B6ssenb%C3%B6ck",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
