import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+fortran",
    {
      name: "Fortran",
      websites: [
        { kind: "wikipedia", title: "FORTRAN", href: "https://en.wikipedia.org/wiki/FORTRAN" },
        { kind: "wikipedia", title: "HPF", href: "https://en.wikipedia.org/wiki/High_Performance_Fortran" },
        { kind: "wikipedia", title: "Fortran 95", href: "https://en.wikipedia.org/wiki/Fortran_95" },
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran_90" },
        { kind: "wikipedia", title: "Absoft", href: "https://en.wikipedia.org/wiki/Absoft_Fortran_Compilers" },
        { kind: "wikipedia", title: "GFortran", href: "https://en.wikipedia.org/wiki/GNU_Fortran" },
        { kind: "wikipedia", title: "Intel", href: "https://en.wikipedia.org/wiki/Intel_Fortran_Compiler" },
      ],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
      extensions: [".f", ".f90", ".for"],
    },
    {
      implementations: [
        "pl+cray",
        "pl+fortran",
        "pl+g95",
        "pl+hitachi",
        "pl+ibm",
        "pl+numerical-algorithms-group",
        "pl+oracle-solaris-studio",
        "pl+pathscale",
        "pl+pgi-compiler",
        "pl+silverfrost-ftn95",
        "pl+watcom-c-compiler",
      ],
      influences: ["pl+modula", "pl+speedcoding"],
      people: ["person+john-backus"],
      paradigms: ["para+array", "para+generic", "para+imperative", "para+multi", "para+objects", "para+structured"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );
}
