import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascriptcore", {
      name: "JavaScriptCore",
      description:
        "JavaScriptCore, also known as SquirrelFish, is a JavaScript engine developed as part of the WebKit project. It is widely known for being used in the Safari web browser and provides a robust implementation of the ECMAScript standards.",
      keywords: ["javascriptcore", "js engine", "webkit"],
      extWikipediaPath: "JavaScriptCore",
      extHomeURL: "http://webkit.org/",
      created: "2008",
    })
    .relImplements.add(["pl+javascript"])
    .relInfluencedBy.add(["pl+javascript"])
    .relLicenses.add(["license+bsd", "license+lgpl"])
    .relParadigms.add(["paradigm+event-driven", "paradigm+interpreted", "paradigm+oop", "paradigm+scripting"])
    .relPlatforms.add(["plat+apple", "plat+arm", "plat+linux", "plat+windows"])
    .relTags.add(["tag+interpreters", "tag+low-code", "tag+scripting", "tag+ui"])
    .relTsys.add(["tsys+dynamic", "tsys+weak"])
    .relWrittenIn.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
