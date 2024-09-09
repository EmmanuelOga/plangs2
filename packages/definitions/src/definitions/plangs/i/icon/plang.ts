import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+icon", {
      name: "Icon",
      description:
        'Icon is a very high-level programming language based on the concept of "goal-directed execution" in which code returns a "success" along with valid values, or a "failure", indicating that there is no valid data to return. The success and failure of a given block of code is used to direct further processing, whereas conventional languages would typically use boolean logic written by the programmer to achieve the same ends. Because the logic for basic control structures is often implicit in Icon, common tasks can be completed with less explicit code.',
      firstAppeared: "1977-01-01",
      websites: [
        { href: "http://www.cs.arizona.edu/icon", title: "www.cs.arizona.edu/icon", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Icon_programming_language", title: "Icon", kind: "wikipedia" },
      ],
      releases: [{ version: "9.5.24", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+algol"])
    .addParadigms(["para+multi", "para+structured"])
    .addTypeSystems(["tsys+dynamic"]);
}
