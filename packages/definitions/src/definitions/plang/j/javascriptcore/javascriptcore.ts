import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+javascriptcore", {
      name: "JavaScriptCore",
      description:
        "JavaScriptCore, also known as SquirrelFish, is a JavaScript engine developed as part of the WebKit project. It is widely known for being used in the Safari web browser and provides a robust implementation of the ECMAScript standards.",
      keywords: ["javascriptcore", "js engine", "webkit"],
      extWikipediaPath: "JavaScriptCore",
      extHomeURL: "http://webkit.org/",
      created: "2008",
      isTranspiler: false,
      shortDesc: "JavaScriptCore is a JavaScript engine utilized in Safari and part of the WebKit project.",
      extGithubPath: "WebKit/WebKit",
      githubStars: 8100,
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
