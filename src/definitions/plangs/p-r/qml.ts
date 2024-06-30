import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+qml").merge({
    name: "QML",
    websites: [{ kind: "wikipedia", title: "QML", href: "https://en.wikipedia.org/wiki/QML" }],
    releases: [{ version: "6.4", date: "2022-01-01", kind: "stable" }],
    extensions: [".qml"],
  });
}
