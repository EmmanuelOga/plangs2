import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+absoft-fortran-compilers", "Absoft", {
    name: "Absoft",
    websites: [{ kind: "wikipedia", title: "Absoft", href: "https://en.wikipedia.org/wiki/Absoft_Fortran_Compilers" }],
  });

  lb.define(
    "pl+fortran",
    "FORTRAN II",
    {
      name: "FORTRAN II",
      websites: [{ kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran" }],
    },
    { influences: ["pl+speedcoding"] },
  );

  lb.define(
    "pl+fortran-90",
    "Fortran 90",
    {
      name: "Fortran 90",
      websites: [{ kind: "wikipedia", title: "Fortran 90", href: "https://en.wikipedia.org/wiki/Fortran_90" }],
    },
    { influences: ["pl+modula-2"] },
  );

  lb.define(
    "pl+fortran-95",
    "Fortran 95",
    {
      name: "Fortran 95",
      websites: [
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran_95" },
        { kind: "homepage", title: "fortran-lang.org", href: "https://fortran-lang.org" },
      ],
      releases: [
        { version: "unknown", date: "1957-01-01", kind: "first" },
        { version: "unknown", date: "2023-11-17", kind: "stable" },
      ],
      extensions: [".f90", ".f", ".for"],
      references: {
        influenced: [
          {
            href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
            title: "Chapel spec (Acknowledgements)",
          },
        ],
      },
    },
    {
      implementations: [
        "pl+absoft-fortran-compilers",
        "pl+cray",
        "pl+g95",
        "pl+gnu-fortran",
        "pl+hitachi",
        "pl+ibm",
        "pl+intel-fortran-compiler",
        "pl+numerical-algorithms-group",
        "pl+oracle-solaris-studio",
        "pl+pathscale",
        "pl+pgi-compiler",
        "pl+silverfrost-ftn95",
        "pl+watcom-c-compiler",
      ],
      influences: ["pl+speedcoding"],
      paradigms: ["para+array", "para+generic", "para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [["person+john-backus", "designer"]],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+gnu-fortran", "GFortran", {
    name: "GFortran",
    websites: [{ kind: "wikipedia", title: "GFortran", href: "https://en.wikipedia.org/wiki/GNU_Fortran" }],
  });

  lb.define("pl+high-performance-fortran", "HPF", {
    name: "HPF",
    websites: [{ kind: "wikipedia", title: "HPF", href: "https://en.wikipedia.org/wiki/High_Performance_Fortran" }],
  });

  lb.define("pl+intel-fortran-compiler", "Intel", {
    name: "Intel",
    websites: [{ kind: "wikipedia", title: "Intel", href: "https://en.wikipedia.org/wiki/Intel_Fortran_Compiler" }],
  });
}
