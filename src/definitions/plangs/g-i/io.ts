import type { PlangsGraph } from "../../../entities/plangs_graph";

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
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2017-08-11", kind: "stable" },
      ],
    },
    {
      influences: [
        "pl+lisp",
        "pl+newtonscript",
        "pl+self",
        "pl+smalltalk",
        "pl+lua",
        "pl+python",
        "pl+actor-model-middle-history",
      ],
      paradigms: ["para+objects", "para+prototypes"],
      people: ["person+steve-dekorte", "person+jonathan-wright", "person+jeremy-tregunna"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
