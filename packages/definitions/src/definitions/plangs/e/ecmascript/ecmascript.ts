import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ecmascript", {
      name: "ECMAScript",
      description:
        "ECMAScript (/ˈɛkməskrɪpt/; ES) is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International in the document ECMA-262.",
      keywords: ["ecmascript"],
      websites: [
        {
          title: "ECMAScript Standard - Ecma International",
          href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
          kind: "homepage",
        },
        { title: "ECMAScript", href: "https://en.wikipedia.org/wiki/ECMAScript", kind: "wikipedia" },
      ],
      extensions: [".js", ".mjs"],
      year: 1997,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "2022", name: "ECMAScript 2022", date: "2022-06-01" },
        { version: "2023", name: "ECMAScript 2023", date: "2023-06-01" },
      ],
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
