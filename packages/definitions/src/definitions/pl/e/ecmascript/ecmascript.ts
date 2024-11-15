import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ecmascript", {
      name: "ECMAScript",
      description:
        "ECMAScript is a standardized specification for scripting languages, including JavaScript, JScript, and ActionScript. It ensures interoperability of web pages across different browsers and is maintained by Ecma International. ECMAScript, designed by Brendan Eich, has a dynamic and weak typing discipline and supports multi-paradigm features, covering prototype-based, functional, and imperative programming styles.",
      keywords: ["ecma-262", "ecmascript", "javascript"],
      extensions: [".es", ".js", ".mjs"],
      year: 1997,
      isMainstream: true,
      releases: [
        { version: "2024", name: "ECMAScript 2024", date: "2024-06-01" },
        { version: "2022", name: "ECMAScript 2022", date: "2022-06-01" },
        { version: "2023", name: "ECMAScript 2023", date: "2023-06-01" },
      ],
      filenames: ["ECMA-262"],
      extWikipediaPath: "ECMAScript",
      extHomeURL: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    })
    .addInfluencedBy(["pl+awk", "pl+c", "pl+perl", "pl+python", "pl+scheme", "pl+self"])
    .addLicenses(["license+dual"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+procedural", "paradigm+prototype"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+macos", "plat+nodejs", "plat+web", "plat+windows"])
    .addTags(["tag+analysis", "tag+app", "tag+framework", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+testing", "tag+web"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
