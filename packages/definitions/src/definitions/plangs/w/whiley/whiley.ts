import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+whiley", {
      name: "Whiley",
      description:
        'Whiley is an experimental programming language that combines features from the functional and imperative paradigms, and supports formal specification through function preconditions, postconditions and loop invariants. The language uses flow-sensitive typing also known as "flow typing."',
      firstAppeared: "2010-01-01",
      websites: [
        { href: "http://whiley.org/", title: "whiley.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)", title: "Whiley", kind: "wikipedia" },
      ],
      releases: [{ version: "0.6.1", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+rust"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+functional", "para+imperative"])
    .addTypeSystems(["tsys+flow", "tsys+safe", "tsys+strong", "tsys+structural"]);
}