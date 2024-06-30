import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+io",
    {
      name: "Io",
      websites: [{ kind: "wikipedia", title: "Io", href: "https://en.wikipedia.org/wiki/Io_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg" }],
      releases: [{ version: "unknown", date: "2017-01-01", kind: "stable" }],
    },
    {
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
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
