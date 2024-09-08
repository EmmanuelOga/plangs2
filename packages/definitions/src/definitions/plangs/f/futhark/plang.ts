import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+futhark", {
      images: [],
      name: "Futhark",
      description:
        "Futhark is a multi-paradigm, high-level, functional, data parallel, array programming language. It is a dialect of the language ML, originally developed at UCPH Department of Computer Science (DIKU) as part of the HIPERFIT project. It focuses on enabling data parallel programs written in a functional style to be executed with high performance on massively parallel hardware, especially graphics processing units (GPUs). Futhark is strongly inspired by NESL, and its implementation uses a variant of the flattening transformation, but imposes constraints on how parallelism can be expressed in order to enable more aggressive compiler optimisations. In particular, irregular nested data parallelism is not supported. It is free and open-source software released under an ISC license.",
      websites: [
        { href: "http://futhark-lang.org/", title: "futhark-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)", title: "Futhark", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+apl", "pl+haskell", "pl+standard-ml"])
    .addLicenses(["lic+isc"])
    .addParadigms(["para+array", "para+functional"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"]);
}
