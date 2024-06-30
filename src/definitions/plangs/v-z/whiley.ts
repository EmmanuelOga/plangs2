import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+whiley",
    {
      name: "Whiley",
      websites: [
        { kind: "wikipedia", title: "Whiley", href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)" },
      ],
      releases: [{ version: "0.6.1", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+java", "pl+python", "pl+rust"],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional", "para+imperative"],
      typeSystems: ["tsys+flow-sensitive", "tsys+safe", "tsys+strong", "tsys+structural"],
    },
  );
}
