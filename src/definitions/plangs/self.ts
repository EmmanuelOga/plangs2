import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+self",
    "Self",
    {
      name: "Self",
      websites: [
        { kind: "wikipedia", title: "Self", href: "https://en.wikipedia.org/wiki/Self_(programming_language)" },
        { kind: "homepage", title: "www.selflanguage.org", href: "http://www.selflanguage.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg" }],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "2017.1", date: "2017-05-24", kind: "stable" },
      ],
      references: {
        influenced_by: [{ href: "https://doi.org/10.1145%2F1238844.1238853", title: "10.1145/1238844.1238853" }],
      },
    },
    {
      dialects: ["pl+newspeak"],
      influenced: [
        "pl+ambienttalk",
        "pl+ecmascript",
        "pl+factor",
        "pl+io",
        "pl+javascript",
        "pl+newspeak",
        "pl+newtonscript",
        "pl+obliq",
        "pl+rebol",
        "pl+smalltalk",
        "pl+squeak",
        "pl+strongtalk",
        "pl+urbiscript",
      ],
      influences: [
        "pl+agora",
        "pl+apl",
        "pl+factor",
        "pl+io",
        "pl+javascript",
        "pl+lua",
        "pl+newtonscript",
        "pl+rebol",
        "pl+smalltalk",
        "pl+squeak",
      ],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects", "para+prototypes"],
      people: [["person+david-ungar", "designer"]],
      platforms: ["platf+cross-platform", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
