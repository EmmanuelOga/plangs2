import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+postscript",
    {
      name: "PostScript",
      websites: [{ kind: "wikipedia", title: "PostScript", href: "https://en.wikipedia.org/wiki/PostScript" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg" },
      ],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
      extensions: [".ps"],
    },
    {
      implementations: ["pl+ghostscript", "pl+trueimage"],
      influences: ["pl+cedar", "pl+interpress", "pl+lisp", "pl+mesa"],
      people: ["person+bill-paxton", "person+chuck-geschke", "person+john-warnock"],
      paradigms: ["para+concatenative", "para+imperative", "para+multi", "para+stack"],
    },
  );
}
