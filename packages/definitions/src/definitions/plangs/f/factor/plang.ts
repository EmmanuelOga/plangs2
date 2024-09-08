import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+factor", {
      images: [{ kind: "logo", title: "Factor" }],
      name: "Factor",
      description:
        "Factor is a stack-oriented programming language created by Slava Pestov. Factor is dynamically typed and has automatic memory management, as well as powerful metaprogramming features. The language has a single implementation featuring a self-hosted optimizing compiler and an interactive development environment. The Factor distribution includes a large standard library.",
      websites: [
        { href: "http://factorcode.org/", title: "factorcode.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Factor_(programming_language)", title: "Factor", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "0.99", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+forth", "pl+joy", "pl+lisp", "pl+self"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+concatenative", "para+functional", "para+multi", "para+oop"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}