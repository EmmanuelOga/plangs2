import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+q",
    "q",
    {
      name: "q",
      websites: [
        {
          kind: "wikipedia",
          title: "Q",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
        },
        { kind: "homepage", title: "code.kx.com", href: "http://code.kx.com" },
      ],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20070101213150/http://vector.org.uk/weblog/archive/000036.html",
            title: "Q Language Widening the Appeal of Vectors",
          },
        ],
        stable_release: [{ href: "https://code.kx.com/q/ref/releases/ChangesIn4.0/", title: "Changes in 4.0" }],
      },
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "4.0", date: "2020-03-17", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+k", "pl+pure"],
      influences: ["pl+a-plus", "pl+apl", "pl+k", "pl+scheme"],
      paradigms: ["para+array", "para+functional"],
      people: [["person+arthur-whitney", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+qb64",
    "QB64",
    {
      name: "QB64",
      websites: [
        { kind: "wikipedia", title: "QB64", href: "https://en.wikipedia.org/wiki/QB64" },
        { kind: "homepage", title: "www.qb64.com", href: "http://www.qb64.com" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg" },
      ],
      releases: [
        { version: "unknown", date: "2007-09-08", kind: "first" },
        { version: "2.0.2", date: "2021-11-07", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+qbasic"],
      influences: ["pl+qbasic", "pl+quickbasic"],
      licenses: ["lic+mit"],
      people: [["person+rob-galleon", "designer"]],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
    },
  );

  /**/

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
      influenced: ["pl+ring"],
      influences: ["pl+javascript", "pl+json", "pl+qt", "pl+ring", "pl+xaml"],
      paradigms: ["para+declarative", "para+multi-paradigm", "para+reactive", "para+scripting"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
