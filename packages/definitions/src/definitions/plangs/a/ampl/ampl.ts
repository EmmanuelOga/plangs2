import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ampl", {
      name: "AMPL",
      description:
        "AMPL (A Mathematical Programming Language) is an algebraic modeling language to describe and solve high-complexity problems for large-scale mathematical computing (e.g., large-scale optimization and scheduling-type problems).\nIt was developed by Robert Fourer, David Gay, and Brian Kernighan at Bell Laboratories.\nAMPL supports dozens of solvers, both open source and commercial software, including CBC, CPLEX, FortMP, MOSEK, MINOS, IPOPT, SNOPT, KNITRO, and LGO. Problems are passed to solvers as .nl files.\nAMPL is used by more than 100 corporate clients, and by government agencies and academic institutions.",
      keywords: ["ampl", "mathematical programming language", "optimization", "scheduling"],
      websites: [
        { title: "www.ampl.com", href: "http://www.ampl.com/", kind: "homepage" },
        { title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL", kind: "wikipedia" },
      ],
      extensions: [".dat", ".mod", ".run"],
      year: 1985,
      isTranspiler: false,
      isMainstream: false,
      releases: [],
    })
    .addInfluencedBy(["pl+awk", "pl+c"])
    .addLicenses(["license+proprietary"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+imperative", "paradigm+multi"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+industrial", "tag+interpreter", "tag+modeling", "tag+stats"])
    .addTypeSystems(["tsys+untyped"]);
}
