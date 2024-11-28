import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+qml", {
      name: "QML",
      languishRanking: 62,
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
      isTranspiler: true,
      releases: [{ version: "6.4", name: "Stable release", date: "2022-09-29" }],
      extWikipediaPath: "QML",
      extRedditPath: "QtFramework",
      extHomeURL: "https://doc.qt.io/qt-5/qmlapplications.html",
      created: "2009",
    })
    .relCompilesTo.add(["pl+c++"])
    .relParadigms.add(["para+declarative", "para+reactive", "para+scripting"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+ui"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
