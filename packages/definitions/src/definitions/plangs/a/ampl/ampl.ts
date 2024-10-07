import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ampl", {
      name: "AMPL",
      description:
        "AMPL (A Mathematical Programming Language) is an algebraic modeling language to describe and solve high-complexity problems for large-scale mathematical computing (e.g. large-scale optimization and scheduling-type problems).\nIt was developed by Robert Fourer, David Gay, and Brian Kernighan at Bell Laboratories.\nAMPL supports dozens of solvers, both open source and commercial software, including CBC, CPLEX, FortMP, MOSEK, MINOS, IPOPT, SNOPT, KNITRO, and LGO. Problems are passed to solvers as nl files.\nAMPL is used by more than 100 corporate clients, and by government agencies and academic institutions.",
      firstAppeared: "1985-01-01",
      extensions: [".dat", ".mod", ".run"],
      websites: [
        { href: "http://www.ampl.com/", title: "www.ampl.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/AMPL", title: "AMPL", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+awk", "pl+c"])
    .addParadigms(["paradigm+declarative", "paradigm+imperative", "paradigm+multi"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+industrial", "tag+interpreter", "tag+stats"]);
}
