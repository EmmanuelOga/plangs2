import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+fortran")
    .merge({
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
      releases: [{ name: "Fortran", version: "unknown", date: "2023-01-01", kind: "stable" }],
      extensions: [".f", ".f90", ".for"],
    })
    .addImplementations([
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
    ])
    .addInfluences(["pl+speedcoding", "pl+modula"])
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+multi", "para+structured", "para+imperative", "para+objects", "para+generic", "para+array"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+g95")
    .merge({ name: "G95", websites: [{ kind: "wikipedia", title: "G95", href: "https://en.wikipedia.org/wiki/G95" }] })
    .addLicenses(["lic+gpl"]);

  /**/
}
