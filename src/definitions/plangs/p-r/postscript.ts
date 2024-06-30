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
      releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
      extensions: [".ps"],
    },
    {
      implementations: ["pl+trueimage", "pl+ghostscript"],
      influences: ["pl+cedar", "pl+mesa", "pl+interpress", "pl+lisp"],
      paradigms: ["para+multi", "para+concatenative", "para+stack", "para+imperative"],
      people: ["person+john-warnock", "person+chuck-geschke", "person+bill-paxton"],
    },
  );
}
