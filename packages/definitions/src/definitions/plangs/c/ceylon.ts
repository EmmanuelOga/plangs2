import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ceylon", {
      images: [{ title: "Ceylon", kind: "logo", url: "/images/plangs/c/ceylon/main.png" }],
      name: "Ceylon",
      description:
        "Ceylon was an object-oriented, strongly statically typed programming language with an emphasis on immutability, created by Red Hat. Ceylon programs run on the Java virtual machine (JVM), and could be compiled to JavaScript.\nThe language design focuses on source code readability, predictability, toolability, modularity, and metaprogrammability.",
      websites: [
        { href: "http://ceylon-lang.org/", title: "ceylon-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)", title: "Ceylon", kind: "wikipedia" },
      ],
      extensions: [".ceylon"],
      releases: [{ version: "1.3.3", date: "2017-01-01" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+ml", "pl+scala", "pl+whiley"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+oop"])
    .addPlatforms(["platf+java", "platf+nodejs"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);
}
