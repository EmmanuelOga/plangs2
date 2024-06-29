import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+fortran",
    "FORTRAN II",
    {
      name: "FORTRAN II",
      websites: [
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran" },
        { kind: "wikipedia", title: "HPF", href: "https://en.wikipedia.org/wiki/High_Performance_Fortran" },
        { kind: "wikipedia", title: "Fortran 90", href: "https://en.wikipedia.org/wiki/Fortran_90" },
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran_95" },
        { kind: "homepage", title: "fortran-lang.org", href: "https://fortran-lang.org" },
        { kind: "wikipedia", title: "Absoft", href: "https://en.wikipedia.org/wiki/Absoft_Fortran_Compilers" },
        { kind: "wikipedia", title: "GFortran", href: "https://en.wikipedia.org/wiki/GNU_Fortran" },
        { kind: "wikipedia", title: "Intel", href: "https://en.wikipedia.org/wiki/Intel_Fortran_Compiler" },
      ],
      releases: [
        { version: "unknown", date: "1957-01-01", kind: "first" },
        { version: "unknown", date: "2023-11-17", kind: "stable" },
      ],
      extensions: [".f90", ".f", ".for"],
    },
    {
      implementations: [
        "pl+fortran",
        "pl+cray",
        "pl+g95",
        "pl+ibm",
        "pl+hitachi",
        "pl+numerical-algorithms-group",
        "pl+watcom-c-compiler",
        "pl+pathscale",
        "pl+pgi-compiler",
        "pl+silverfrost-ftn95",
        "pl+oracle-solaris-studio",
      ],
      influences: ["pl+modula", "pl+speedcoding"],
      paradigms: ["para+multi", "para+structured", "para+imperative", "para+objects", "para+generic", "para+array"],
      people: ["person+john-backus"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+manifest"],
    },
  );
}
