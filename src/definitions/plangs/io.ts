import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+io",
    "Io",
    {
      name: "Io",
      websites: [
        { kind: "wikipedia", title: "Io", href: "https://en.wikipedia.org/wiki/Io_(programming_language)" },
        { kind: "homepage", title: "iolanguage.org", href: "https://iolanguage.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg" }],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "unknown", date: "2017-08-11", kind: "stable" },
      ],
      references: { stable_release: [{ href: "https://github.com/IoLanguage/io/releases", title: "Io Releases" }] },
    },
    {
      influenced: ["pl+lisp-programming-language", "pl+newtonscript", "pl+self", "pl+smalltalk", "pl+urbiscript"],
      influences: [
        "pl+actor-model-middle-history",
        "pl+lisp",
        "pl+lua",
        "pl+newtonscript",
        "pl+python",
        "pl+self",
        "pl+smalltalk",
      ],
      paradigms: ["para+objects", "para+prototypes"],
      people: [
        ["person+jeremy-tregunna", "designer"],
        ["person+jonathan-wright", "designer"],
        ["person+steve-dekorte", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
