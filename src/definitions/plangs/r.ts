import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+r",
    "R",
    {
      name: "R",
      websites: [
        { kind: "wikipedia", title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)" },
        { kind: "homepage", title: "www.r-project.org", href: "https://www.r-project.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" }],
      references: {
        paradigms: [
          {
            href: "https://doi.org/10.1007/978-3-642-31057-7_6",
            title: "Evaluating the design of the R language: objects and functions for data analysis",
          },
        ],
        stable_release: [
          {
            href: "https://hypatia.math.ethz.ch/pipermail/r-announce/2024/000701.html",
            title: "[Rd] R 4.4.0 is released",
          },
        ],
        license: [{ href: "https://directory.fsf.org/wiki/R#tab=Details", title: "R - Free Software Directory" }],
        filename_extensions: [
          {
            href: "http://mercury.webster.edu/aleshunas/R_learning_infrastructure/R%20scripts.html",
            title: "R scripts",
          },
          {
            href: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000470.shtml",
            title: "R Data Format Family (.rdata, .rda)",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20221228045640/https://cran.r-project.org/doc/FAQ/R-FAQ.html",
            title: "R FAQ",
          },
          {
            href: "https://doi.org/10.1007/978-3-642-31057-7_6",
            title: "Evaluating the design of the R language: objects and functions for data analysis",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20180620172516/https://docs.julialang.org/en/stable/manual/introduction/#man-introduction-1",
            title: "Introduction",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "4.4.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+common-lisp", "pl+julia", "pl+lisp", "pl+pcastl", "pl+s", "pl+scheme"],
      influences: ["pl+julia", "pl+lisp", "pl+s", "pl+scheme"],
      licenses: ["lic+gpl"],
      paradigms: ["para+array", "para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      people: [
        ["person+robert-gentleman", "designer"],
        ["person+ross-ihaka", "designer"],
      ],
      platforms: ["platf+arm", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
