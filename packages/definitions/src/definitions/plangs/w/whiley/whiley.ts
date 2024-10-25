import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+whiley", {
      name: "Whiley",
      description:
        'Whiley is an experimental programming language that combines features from the functional and imperative paradigms, and supports formal specification through function preconditions, postconditions and loop invariants. The language uses flow-sensitive typing also known as "flow typing."',
      keywords: ["whiley"],
      websites: [
        { title: "whiley.org", href: "http://whiley.org/", kind: "homepage" },
        { title: "Whiley", href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".whiley"],
      year: 2010,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.6.1", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+python", "pl+rust"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+sci"])
    .addTypeSystems(["tsys+flow", "tsys+safe", "tsys+strong", "tsys+structural"]);
}
