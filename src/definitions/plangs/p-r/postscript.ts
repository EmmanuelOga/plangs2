import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+postscript",
    "PostScript",
    {
      name: "PostScript",
      websites: [{ kind: "wikipedia", title: "PostScript", href: "https://en.wikipedia.org/wiki/PostScript" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg" },
      ],
      releases: [
        { version: "unknown", date: "1982-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
      references: { influenced_by: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }] },
      extensions: [],
    },
    {
      implementations: ["pl+ghostscript", "pl+trueimage"],
      influences: ["pl+interpress", "pl+lisp", "pl+mesa"],
      paradigms: ["para+concatenative", "para+imperative", "para+multi", "para+stack"],
      people: [
        ["person+bill-paxton", "designer"],
        ["person+chuck-geschke", "designer"],
        ["person+john-warnock", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
