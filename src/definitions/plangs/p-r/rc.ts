import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+rc",
    {
      name: "rc",
      websites: [{ kind: "wikipedia", title: "rc", href: "https://en.wikipedia.org/wiki/Rc_(Unix_shell)" }],
    },
    {
      influences: ["pl+bourne-shell"],
      people: ["person+tom-duff"],
      paradigms: ["para+imperative", "para+pipeline"],
      platforms: ["platf+cross-platform", "platf+plan9"],
      typeSystems: ["tsys+weak"],
    },
  );
}
