import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+eiffel", {
      name: "Eiffel",
      description:
        "Eiffel is an object-oriented programming language designed by Bertrand Meyer (an object-orientation proponent and author of Object-Oriented Software Construction) and Eiffel Software. Meyer conceived the language in 1985 with the goal of increasing the reliability of commercial software development; the first version becoming available in 1986. In 2005, Eiffel became an ISO-standardized language.",
      firstAppeared: "1986-01-01",
      extensions: [".e"],
      websites: [
        { href: "http://eiffel.org/", title: "eiffel.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)", title: "Eiffel", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+ada", "pl+simula"])
    .addParadigms(["paradigm+concurrent", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+static"]);
}
