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
        { version: "6.4", date: "2022-09-29", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://www.qt.io/blog/qt-6.4-released", title: "Qt 6.4 Released" }],
        influenced_by: [
          {
            href: "https://www.scriptol.com/ajax/ajax-xul-xaml.php",
            title: "Which interface for a modern application?",
          },
        ],
        influenced: [
          {
            href: "http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
            title: "The Ring programming language and other languages",
          },
        ],
      },
      extensions: [],
    },
    {
      influences: ["pl+javascript", "pl+json", "pl+qt", "pl+xaml"],
      paradigms: ["para+dec", "para+multi", "para+reactive", "para+scripting"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
