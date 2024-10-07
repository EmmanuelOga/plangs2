import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ceylon", {
      name: "Ceylon",
      description:
        "Ceylon was an object-oriented, strongly statically typed programming language with an emphasis on immutability, created by Red Hat. Ceylon programs run on the Java virtual machine (JVM), and could be compiled to JavaScript.\nThe language design focuses on source code readability, predictability, toolability, modularity, and metaprogrammability.",
      firstAppeared: "2011-01-01",
      extensions: [".ceylon"],
      websites: [
        { href: "http://ceylon-lang.org/", title: "ceylon-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)", title: "Ceylon", kind: "wikipedia" },
      ],
      releases: [{ version: "1.3.3", date: "2017-01-01" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+ml", "pl+scala", "pl+whiley"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+oop"])
    .addPlatforms(["plat+java", "plat+nodejs"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);
}
