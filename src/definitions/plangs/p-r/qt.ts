import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+qt",
    "Qt",
    {
      name: "Qt",
      websites: [
        { kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" },
        { kind: "homepage", title: "www.qt.io", href: "https://www.qt.io" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
      references: {
        original_authors: [
          {
            href: "https://web.archive.org/web/20190923193951/https://my.safaribooksonline.com/0131872494/pref04",
            title: "A Brief History of Qt",
          },
        ],
        initial_release: [
          {
            href: "https://web.archive.org/web/20190923193951/https://my.safaribooksonline.com/0131872494/pref04",
            title: "A Brief History of Qt",
          },
        ],
        stable_release: [{ href: "https://www.qt.io/blog/qt-6.7.1-released", title: "Qt 6.7.1 Released" }],
        operating_system: [{ href: "https://doc.qt.io/qt-5/supported-platforms.html", title: "Supported Platforms" }],
        license: [
          { href: "http://doc.qt.io/qt-5/licensing.html", title: "Licenses" },
          {
            href: "http://blog.qt.io/blog/2016/01/13/new-agreement-with-the-kde-free-qt-foundation/",
            title: "New agreement with the KDE Free Qt Foundation and changes for the open source version",
          },
          { href: "https://blog.qt.io/blog/2014/08/20/adding-lgpl-v3-to-qt/", title: "Adding LGPL v3 to Qt" },
        ],
      },
      releases: [
        { version: "unknown", date: "1995-05-20", kind: "first" },
        { version: "6.7.1", date: "2024-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+qml"],
      licenses: ["lic+gpl", "lic+lgpl", "lic+qt-commercial"],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/
}
