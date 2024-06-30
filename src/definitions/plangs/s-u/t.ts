import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+t",
    {
      name: "T",
      websites: [
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_(programming_language)" },
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_programming_language" },
      ],
    },
    {
      influences: ["pl+scheme"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
