import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+rc",
    "rc",
    {
      name: "rc",
      websites: [
        { kind: "wikipedia", title: "rc", href: "https://en.wikipedia.org/wiki/Rc_(Unix_shell)" },
        {
          kind: "homepage",
          title: "doc.cat-v.org/plan_9/4th_edition/papers/rc",
          href: "http://doc.cat-v.org/plan_9/4th_edition/papers/rc",
        },
      ],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "first" }],
    },
    {
      influences: ["pl+bourne-shell"],
      paradigms: ["para+imperative", "para+pipeline"],
      people: ["person+tom-duff"],
      platforms: ["platf+cross-platform", "platf+plan9"],
      typeSystems: ["tsys+weak"],
    },
  );
}
