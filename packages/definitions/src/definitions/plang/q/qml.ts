import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+qml", {
      name: "QML",
      description:
        "Qt Modeling Language is a user interface markup language for user interfaces. It is declarative, leveraging inline JavaScript for imperative aspects. QML is designed for applications prioritizing touch input, animations, and user experiences, especially for mobile platforms. It extends JavaScript with a custom V4 engine, compiling to native C++, or caching compiled QML for fast application startups. QML can directly integrate with C++ via the Qt framework.",
      shortDesc:
        "Declarative user interface markup language, primarily for Qt Quick applications.",
      created: "2009",
      extensions: [".qml"],
      extGithubPath: "qt/qt5",
      extRedditPath: "QtFramework",
      extWikipediaPath: "QML",
      githubColor: "#44a51c",
      githubLangId: "305",
      githubName: "QML",
      githubPopular: false,
      githubStars: 1500,
      githubType: "programming",
      isTranspiler: true,
      keywords: [
        "declarative",
        "markup language",
        "qml",
        "qt modeling language",
        "qt quick",
        "user interface",
      ],
      languishRanking: 78,
      releases: [
        { version: "6.4", name: "Stable release", date: "2022-09-29" },
      ],
      stackovTags: ["qml"],
    })
    .relCompilesTo.add("pl+c++")
    .relParadigms.add("para+declarative", "para+reactive", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+gui")
    .relTypeSystems.add("tsys+dynamic", "tsys+object", "tsys+strong");
}
