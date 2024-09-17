import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ecmascript", {
      name: "ECMAScript",
      description:
        "ECMAScript (/ˈɛkməskrɪpt/; ES) is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International in the document ECMA-262.",
      firstAppeared: "1997-01-01",
      websites: [
        {
          href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
          title: "www.ecma-international.org/publications-and-standards/standards/ecma-262/",
          kind: "other",
        },
        { href: "https://en.wikipedia.org/wiki/ECMAScript", title: "ECMAScript", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+awk", "pl+c", "pl+coffeescript", "pl+perl", "pl+python", "pl+scheme", "pl+self"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+prototype"])
    .addTags(["tag+analysis", "tag+app", "tag+framework", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);
}
