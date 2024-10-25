import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+yacc", {
      name: "Yacc",
      description:
        "Yacc (Yet Another Compiler-Compiler) is a computer program for the Unix operating system developed by Stephen C. Johnson. It is a lookahead left-to-right, rightmost derivation (LALR) parser generator, generating a LALR parser based on a formal grammar written in a notation similar to Backus–Naur form (BNF). Yacc is commonly found on BSD and AT&T Unix systems, and GNU-based Linux distributions include Bison, a forward-compatible Yacc replacement.",
      keywords: ["yacc", "parser", "compiler", "lalr"],
      websites: [{ title: "Yacc", href: "https://en.wikipedia.org/wiki/Yacc", kind: "wikipedia" }],
      extensions: [".y"],
      year: 1970,
      isTranspiler: true,
      isMainstream: true,
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+compiler", "paradigm+declarative"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+algebraic"])
    .addWrittenIn(["pl+c"])
    .addCompilesTo(["pl+c"]);
}
