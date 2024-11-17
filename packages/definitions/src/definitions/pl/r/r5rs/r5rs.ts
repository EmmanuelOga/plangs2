import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+r5rs", {"name":"R5RS","description":"Scheme is a classic programming language in the Lisp family. It emphasizes functional programming and domain-specific languages but adapts to other styles. Known for its clean and minimalist design, Scheme is one of the longest-lived and best-studied dynamic languages, and has many fast and portable implementations. It was originally developed by Guy L. Steele and Gerald Jay Sussman in the 1970s. Scheme is lexically scoped, supports first-class continuations, and includes tail-call optimization.","keywords":["scheme"],"extensions":[".scm",".ss"],"year":1998,"releases":[{"version":"R5RS","name":"Revised^5 Report on the Algorithmic Language Scheme","date":"1998-01-01"}],"extWikipediaPath":"R5RS","extHomeURL":"https://www.scheme.org/"})
    .addDialectOf(["pl+lisp","pl+scheme"])
    .addInfluencedBy(["pl+lisp"])
    .addParadigms(["paradigm+functional","paradigm+imperative","paradigm+metaprogramming","paradigm+multi"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis","tag+compiler","tag+industrial","tag+interpreter","tag+scripting","tag+testing"])
    .addTypeSystems(["tsys+dynamic","tsys+latent","tsys+strong"])
    .addWrittenIn(["pl+c"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  