import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ecmascript", {
      images: [],
      name: "ECMAScript",
      description:
        "ECMAScript (/ˈɛkməskrɪpt/; ES) is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International in the document ECMA-262.",
      websites: [
        {
          href: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
          title: "www.ecma-international.org/publications-and-standards/standards/ecma-262/",
          kind: "other",
        },
        { href: "https://en.wikipedia.org/wiki/ECMAScript", title: "ECMAScript", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+awk", "pl+c", "pl+coffeescript", "pl+perl", "pl+scheme", "pl+self"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+prototype"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);
}
