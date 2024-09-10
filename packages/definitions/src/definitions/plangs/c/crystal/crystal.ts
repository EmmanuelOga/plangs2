import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+crystal", {
      name: "Crystal",
      description:
        "Crystal is a high-level general-purpose, object-oriented programming language, designed and developed by Ary Borenszweig, Juan Wajnerman, Brian Cardiff and more than 400 contributors. With syntax inspired by the language Ruby, it is a compiled language with static type-checking, but specifying the types of variables or method arguments is generally unneeded. Types are resolved by an advanced global type inference algorithm. Crystal \nis currently in active development. It is released as free and open-source software under the Apache License version 2.0.",
      firstAppeared: "2014-01-01",
      extensions: [".cr"],
      websites: [
        { href: "https://crystal-lang.org/", title: "crystal-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)", title: "Crystal", kind: "wikipedia" },
      ],
      releases: [{ version: "1.13.2", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Crystal", url: "/images/plangs/c/crystal/logo.png" }],
    })
    .addInfluencedBy(["pl+c", "pl+c-sharp", "pl+go", "pl+ruby", "pl+rust"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTypeSystems(["tsys+duck", "tsys+nominal", "tsys+static"]);
}
