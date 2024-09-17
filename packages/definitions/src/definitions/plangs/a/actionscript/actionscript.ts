import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+actionscript", {
      name: "ActionScript",
      description:
        "ActionScript is an object-oriented programming language originally developed by Macromedia Inc. (later acquired by Adobe). It is influenced by HyperTalk, the scripting language for HyperCard. It is now an implementation of ECMAScript (meaning it is a superset of the syntax and semantics of the language more widely known as JavaScript), though it originally arose as a sibling, both being influenced by HyperTalk. ActionScript code is usually converted to byte-code format by a compiler.",
      firstAppeared: "1998-01-01",
      websites: [
        {
          href: "https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html",
          title: "adobe.com/devnet/actionscript/",
          kind: "other",
        },
        { href: "https://en.wikipedia.org/wiki/ActionScript", title: "ActionScript", kind: "wikipedia" },
      ],
      releases: [{ version: "3.0", date: "2006-01-01" }],
      images: [{ kind: "other", title: "ActionScript", url: "/images/plangs/a/actionscript/other.png" }],
    })
    .addImplements(["pl+ecmascript"])
    .addInfluencedBy(["pl+javascript"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+prototype", "paradigm+scripting"])
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
