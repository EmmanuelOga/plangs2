import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+souffle", {
      name: "Soufflé",
      description:
        'Soufflé is an open source parallel logic programming language, influenced by Datalog. Soufflé includes both an interpreter and a compiler that targets parallel C++. Soufflé has been used to build static analyzers, disassemblers, and tools for binary reverse engineering. Soufflé is considered by academic researchers to be high-performance and "state of the art," and is often used in benchmarks in academic papers.',
      extensions: [".dl"],
      websites: [
        { href: "https://souffle-lang.github.io/", title: "souffle-lang.github.io", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)", title: "Soufflé", kind: "wikipedia" },
      ],
      releases: [{ version: "2.3" }],
    })
    .addDialectOf(["pl+datalog"])
    .addInfluencedBy(["pl+datalog"])
    .addParadigms(["para+declarative", "para+logic"])
    .addTypeSystems(["tsys+static"]);
}
