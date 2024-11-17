import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascriptcore", {
      name: "JavaScriptCore",
      description:
        "JavaScriptCore, also known as SquirrelFish, is a JavaScript engine developed as part of the WebKit project. It is widely known for being used in the Safari web browser and provides a robust implementation of the ECMAScript standards.",
      keywords: ["javascriptcore", "js engine", "webkit"],
      year: 2008,
      isMainstream: false,
      extWikipediaPath: "JavaScriptCore",
      extHomeURL: "http://webkit.org/",
    })
    .addImplements(["pl+javascript"])
    .addInfluencedBy(["pl+javascript"])
    .addLicenses(["license+bsd", "license+lgpl"])
    .addParadigms(["paradigm+event-driven", "paradigm+interpreted", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+linux", "plat+windows"])
    .addTags(["tag+interpreter", "tag+low-code", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
