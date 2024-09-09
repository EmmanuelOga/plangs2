import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+yacc", {
      name: "Yacc",
      description:
        "Yacc (Yet Another Compiler-Compiler) is a computer program for the Unix operating system developed by Stephen C. Johnson.  It is a lookahead left-to-right rightmost derivation (LALR) parser generator, generating a LALR parser (the part of a compiler that tries to make syntactic sense of the source code) based on a formal grammar, written in a notation similar to Backus–Naur form (BNF). Yacc is supplied as a standard utility on BSD and AT&T Unix. GNU-based Linux distributions include Bison, a forward-compatible Yacc replacement.",
      websites: [{ href: "https://en.wikipedia.org/wiki/Yacc", title: "Yacc", kind: "wikipedia" }],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+c"]);
}
