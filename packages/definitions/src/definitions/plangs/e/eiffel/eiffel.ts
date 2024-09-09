import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
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
    .addParadigms(["para+concurrent", "para+oop"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+cross", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+static"]);
}
