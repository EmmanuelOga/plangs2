import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+livescript",
    "LiveScript",
    {
      name: "LiveScript",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveScript",
          href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
        },
      ],
      releases: [{ version: "1.6.1", date: "2020-01-01", kind: "stable" }],
      extensions: [".ls"],
    },
    {
      influences: ["pl+coffeescript", "pl+f-sharp", "pl+javascript", "pl+haskell"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
