import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+futhark", {
      name: "Futhark",
      description:
        "Futhark is a multi-paradigm, high-level, functional, data-parallel, array programming language. It is a dialect of the language ML, originally developed at the University of Copenhagen, specifically at the Department of Computer Science (DIKU) as part of the HIPERFIT project. Focusing on enabling data parallel programs written in a functional style to be executed with high performance on massively parallel hardware, especially GPUs, Futhark is influenced by languages such as APL, Haskell, and NESL. It features a strongly optimizing ahead-of-time compiler that can generate either GPU code via CUDA and OpenCL or multi-threaded CPU code. Designed with an indentation-insensitive syntax derived from OCaml, Standard ML, and Haskell, it employs a Hindley-Milner-type system with extensions such as uniqueness types and size-dependent types. The language supports automatic differentiation and regular nested data parallelism while ensuring purity through a uniqueness type system. Although Futhark is not meant to replace general-purpose languages, it excels in compute-intensive parts of an application and is able to integrate seamlessly with non-Futhark code.",
      keywords: ["futhark"],
      extensions: [".fut"],
      releases: [
        { version: "0.20.0", name: "Futhark 0.20.0", date: "2021-12-01" },
        { version: "0.21.0", name: "Futhark 0.21.0", date: "2022-06-01" },
      ],
      stackovTags: ["futhark"],
      githubName: "Futhark",
      languishRanking: 399,
      githubLangId: "97358117",
      githubColor: "#5f021f",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Futhark_(programming_language)",
      extRedditPath: "futhark",
      extHomeURL: "http://futhark-lang.org/",
      created: "2014",
    })
    .relInfluencedBy.add("pl+apl", "pl+haskell", "pl+standard-ml")
    .relLicenses.add("lic+isc")
    .relParadigms.add("para+array", "para+compiled", "para+functional", "para+multi", "para+parallel")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+compiler", "tag+interpreters", "tag+numeric", "tag+ray-tracer", "tag+sci")
    .relTypeSystems.add("tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness")
    .relWrittenWith.add("pl+standard-ml");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
