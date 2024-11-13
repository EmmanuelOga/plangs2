import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+futhark", {
      name: "Futhark",
      description:
        "Futhark is a multi-paradigm, high-level, functional, data parallel, array programming language. It is a dialect of the language ML, originally developed at UCPH Department of Computer Science (DIKU) as part of the HIPERFIT project. It focuses on enabling data parallel programs written in a functional style to be executed with high performance on massively parallel hardware, especially graphics processing units (GPUs). Futhark is strongly inspired by NESL, and its implementation uses a variant of the flattening transformation, but imposes constraints on how parallelism can be expressed in order to enable more aggressive compiler optimisations. In particular, irregular nested data parallelism is not supported. It is free and open-source software released under an ISC license.",
      keywords: ["futhark"],
      websites: [
        { title: "futhark-lang.org", href: "http://futhark-lang.org/", kind: "homepage" },
        { title: "Futhark", href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)", kind: "wikipedia" },
        { title: "Futhark on Reddit", kind: "reddit", href: "https://reddit.com/r/futhark" },
      ],
      extensions: [".fut"],
      year: 2014,
      isTranspiler: true,
      isMainstream: false,
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
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+apl", "pl+haskell", "pl+standard-ml"])
    .addLicenses(["license+isc"])
    .addParadigms(["paradigm+array", "paradigm+compiled", "paradigm+functional", "paradigm+parallel"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreter", "tag+numeric", "tag+ray-tracer", "tag+sci"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness"])
    .addWrittenIn(["pl+standard-ml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
