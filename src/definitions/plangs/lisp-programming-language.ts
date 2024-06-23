import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lisp-programming-language",
    "Lisp",
    {
      name: "Lisp",
      websites: [{ kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
      releases: [{ version: "unknown", date: "1960-01-01", kind: "first" }],
      references: {
        influenced: [
          {
            href: "https://web.archive.org/web/20160408134008/http://julia.readthedocs.org/en/latest/manual/introduction/",
            title: "Introduction",
          },
          { href: "https://www.wolfram.com/language/faq/", title: "Wolfram Language Q&A" },
        ],
      },
    },
    {
      influenced: ["pl+nial"],
      influences: [
        "pl+clips",
        "pl+clu",
        "pl+cowsel",
        "pl+dylan",
        "pl+elixir",
        "pl+forth",
        "pl+haskell",
        "pl+information-processing-language",
        "pl+io",
        "pl+javascript",
        "pl+julia",
        "pl+logo",
        "pl+lua",
        "pl+microsoft-excel",
        "pl+ml",
        "pl+nim",
        "pl+nu",
        "pl+ops5",
        "pl+perl",
        "pl+pop-11",
        "pl+pop-2",
        "pl+python",
        "pl+r",
        "pl+rebol",
        "pl+red",
        "pl+ruby",
        "pl+scala",
        "pl+smalltalk",
        "pl+swift",
        "pl+tcl",
        "pl+wolfram-language",
      ],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflective"],
      people: [
        ["person+john-mccarthy", "designer"],
        ["person+steve-russell", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
