import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+actionscript", {
      name: "ActionScript",
      description:
        "ActionScript is an object-oriented programming language originally developed by Macromedia Inc. (later acquired by Adobe). It is influenced by HyperTalk, the scripting language for HyperCard. It is now an implementation of ECMAScript (meaning it is a superset of the syntax and semantics of the language more widely known as JavaScript), though it originally arose as a sibling, both being influenced by HyperTalk. ActionScript code is usually converted to byte-code format by a compiler.",
      keywords: ["actionscript", "flash"],
      year: 1998,
      websites: [
        {
          title: "ActionScript",
          href: "https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html",
          kind: "apidocs",
        },
        { title: "ActionScript", href: "https://en.wikipedia.org/wiki/ActionScript", kind: "wikipedia" },
      ],
      extensions: [".as", ".swf"],
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.0", name: "ActionScript 1.0", date: "2000-01-01" },
        { version: "2.0", name: "ActionScript 2.0", date: "2003-01-01" },
        { version: "3.0", name: "ActionScript 3.0", date: "2006-01-01" },
      ],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+ecmascript", "pl+javascript"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+prototype", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+windows", "plat+web"])
    .addTags([
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+scripting",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong"]);
}
