import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ampl", {
      images: [{ kind: "other", title: "AMPL", url: "/images/plangs/a/ampl/other.jpg" }],
      name: "AMPL",
      description:
        "AMPL (A Mathematical Programming Language) is an algebraic modeling language to describe and solve high-complexity problems for large-scale mathematical computing (e.g. large-scale optimization and scheduling-type problems).\nIt was developed by Robert Fourer, David Gay, and Brian Kernighan at Bell Laboratories.\nAMPL supports dozens of solvers, both open source and commercial software, including CBC, CPLEX, FortMP, MOSEK, MINOS, IPOPT, SNOPT, KNITRO, and LGO. Problems are passed to solvers as nl files.\nAMPL is used by more than 100 corporate clients, and by government agencies and academic institutions.",
      websites: [
        { href: "http://www.ampl.com/", title: "www.ampl.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/AMPL", title: "AMPL", kind: "wikipedia" },
      ],
      extensions: [".dat", ".mod", ".run"],
      releases: [],
    })
    .addInfluencedBy(["pl+awk", "pl+c"])
    .addParadigms(["para+declarative", "para+imperative", "para+multi"])
    .addPlatforms(["platf+apple", "platf+cross", "platf+linux", "platf+windows"]);
}
