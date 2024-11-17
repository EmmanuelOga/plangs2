import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+rust", {"name":"Rust","description":"Rust is a general-purpose programming language emphasizing performance, type safety, and concurrency. It enforces memory safety, meaning that all references point to valid memory, without a garbage collector. To simultaneously enforce memory safety and prevent data races, its \"borrow checker\" tracks the object lifetime of all references in a program during compiling.","keywords":["concurrency","memory safety","programming","rust","systems programming"],"extensions":[".rlib",".rs"],"year":2015,"isMainstream":true,"releases":[{"version":"1.82.0","name":"Rust 1.82.0","date":"2024-10-17"},{"version":"1.80.1","name":"Rust 1.80.1","date":"2024-01-01"}],"stackovTags":["rust"],"githubName":"Rust","languishRanking":10,"githubLangId":"327","githubColor":"#dea584","githubPopular":true,"githubType":"programming","extWikipediaPath":"Rust_(programming_language)","extRedditPath":"rust","extHomeURL":"https://www.rust-lang.org/"})
    .addInfluencedBy(["pl+c","pl+c++","pl+c-sharp","pl+cilk","pl+erlang","pl+haskell","pl+ocaml","pl+r5rs","pl+racket","pl+ruby","pl+scheme","pl+standard-ml","pl+swift"])
    .addLicenses(["license+apache","license+mit"])
    .addParadigms(["paradigm+compiled","paradigm+concurrent","paradigm+functional","paradigm+imperative","paradigm+multi","paradigm+structured"])
    .addPlatforms(["plat+apple","plat+cross","plat+linux","plat+wasm","plat+windows"])
    .addTags(["tag+app","tag+cli","tag+compiler","tag+dataq","tag+editor","tag+embedded","tag+industrial","tag+interpreter","tag+iot","tag+viz"])
    .addTypeSystems(["tsys+affine","tsys+inferred","tsys+nominal","tsys+static","tsys+strong"])
    .addWrittenIn(["pl+ocaml"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  