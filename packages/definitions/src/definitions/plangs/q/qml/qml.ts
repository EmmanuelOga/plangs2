import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+qml", {
      name: "QML",
      languishRanking: 62,
      websites: [
        { title: "QML on Wikipedia", href: "https://en.wikipedia.org/wiki/QML", kind: "wikipedia" },
        { title: "QML Reference Documentation", href: "https://doc.qt.io/qt-5/qmlapplications.html", kind: "apidocs" },
        { kind: "reddit", title: "QML on Reddit", href: "https://reddit.com/r/QtFramework" },
      ],
      stackovTags: ["qml"],
      githubName: "QML",
      githubLangId: "305",
      githubColor: "#44a51c",
      githubPopular: false,
      githubType: "programming",
      description:
        "QML (Qt Modeling Language) is a user interface markup language for designing user interface-centric applications. It is declarative, leveraging inline JavaScript for imperative aspects, and is primarily associated with Qt Quick. QML is designed for applications prioritizing touch input, animations, and user experiences, especially for mobile platforms. It extends JavaScript with a custom V4 engine, compiling to native C++ using the Qt Quick Compiler, or caching compiled QML for fast application startups. QML can directly integrate with C++ via the Qt framework, enhancing its functionalities.",
      keywords: ["JavaScript", "QML", "Qt Modeling Language", "Qt Quick", "declarative", "markup language", "user interface"],
      extensions: [".qml"],
      year: 2009,
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "6.4", name: "Stable release", date: "2022-09-29" }],
    })
    .addCompilesTo(["pl+c++"])
    .addParadigms(["paradigm+declarative", "paradigm+reactive", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
