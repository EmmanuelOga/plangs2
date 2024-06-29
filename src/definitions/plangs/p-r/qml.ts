import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+qml",
    "QML",
    {
      name: "QML",
      websites: [
        { kind: "wikipedia", title: "QML", href: "https://en.wikipedia.org/wiki/QML" },
        {
          kind: "homepage",
          title: "qt-project.org/doc/qt-5/qmlapplications.html",
          href: "http://qt-project.org/doc/qt-5/qmlapplications.html",
        },
      ],
      releases: [
        { version: "unknown", date: "2009-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "6.4", date: "2022-09-29", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influences: ["pl+xaml", "pl+json", "pl+javascript", "pl+qt"],
      paradigms: ["para+multi", "para+dec", "para+reactive", "para+scripting"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
