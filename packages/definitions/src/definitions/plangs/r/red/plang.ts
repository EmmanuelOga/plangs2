import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+red", {
      images: [{ kind: "logo", title: "Red" }],
      name: "Red",
      description:
        "Red is a programming language designed to overcome the limitations of the programming language Rebol. Red was introduced in 2011 by Nenad Rakočević, and is both an imperative and functional programming language. Its syntax and general usage overlaps that of the interpreted Rebol language.",
      websites: [
        { href: "https://www.red-lang.org/", title: "www.red-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Red_(programming_language)", title: "Red", kind: "wikipedia" },
      ],
      extensions: [".red", ".reds"],
      releases: [{ version: "0.6.5", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+lua", "pl+moonscript", "pl+rebol", "pl+scala"])
    .addLicenses(["lic+boost", "lic+bsd"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+symbolic"])
    .addPlatforms(["platf+linux", "platf+windows"]);
}
