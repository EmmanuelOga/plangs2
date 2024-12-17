import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+javascriptcore", {
      name: "JavaScriptCore",
      description:
        "JavaScript engine developed as part of the WebKit project. It is widely known for being used in the Safari web browser and provides a robust implementation of the ECMAScript standards.",
      shortDesc: "JavaScript engine utilized in Safari and part of the WebKit project.",
      created: "2008",
      extGithubPath: "WebKit/WebKit",
      extHomeURL: "http://webkit.org/",
      extWikipediaPath: "JavaScriptCore",
      githubStars: 8100,
      isTranspiler: false,
      keywords: ["javascriptcore", "js engine", "webkit"],
    })
    .relImplements.add("pl+javascript")
    .relInfluencedBy.add("pl+javascript")
    .relLicenses.add("lic+bsd", "lic+lgpl")
    .relParadigms.add("para+event-driven", "para+interpreted", "para+oop", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+arm", "plat+linux", "plat+windows")
    .relTags.add("tag+gui", "tag+interpreters", "tag+low-code", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+weak")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
