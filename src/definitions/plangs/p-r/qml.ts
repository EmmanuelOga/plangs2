import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+qml",
    {
      name: "QML",
      websites: [{ kind: "wikipedia", title: "QML", href: "https://en.wikipedia.org/wiki/QML" }],
      releases: [{ version: "6.4", date: "2022-01-01", kind: "stable" }],
      extensions: [".qml"],
    },
    {
      influences: ["pl+javascript", "pl+json", "pl+qt", "pl+xaml"],
      paradigms: ["para+dec", "para+multi", "para+reactive", "para+scripting"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
