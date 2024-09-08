import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+crystal", {
      images: [{ title: "Crystal", kind: "logo", url: "/images/plangs/c/crystal/main.png" }],
      name: "Crystal",
      description:
        "Crystal is a high-level general-purpose, object-oriented programming language, designed and developed by Ary Borenszweig, Juan Wajnerman, Brian Cardiff and more than 400 contributors. With syntax inspired by the language Ruby, it is a compiled language with static type-checking, but specifying the types of variables or method arguments is generally unneeded. Types are resolved by an advanced global type inference algorithm. Crystal \nis currently in active development. It is released as free and open-source software under the Apache License version 2.0.",
      websites: [
        { href: "https://crystal-lang.org/", title: "crystal-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)", title: "Crystal", kind: "wikipedia" },
      ],
      extensions: [".cr"],
      releases: [{ version: "1.13.2", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+c-sharp", "pl+go", "pl+ruby", "pl+rust"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+concurrent", "para+multi", "para+oop"])
    .addPlatforms(["platf+apple", "platf+arm", "platf+bsd", "platf+linux", "platf+windows", "platf+x86-64"])
    .addTypeSystems(["tsys+duck", "tsys+nominal", "tsys+static"]);
}
