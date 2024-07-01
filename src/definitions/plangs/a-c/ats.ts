import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ats")
    .merge({
      name: "ATS",
      websites: [{ kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
      releases: [{ name: "ATS", version: "0.4.2", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+dependent-ml", "pl+ml", "pl+ocaml", "pl+cpp"])
    .addLicenses(["lic+gpl"])
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+concurrent",
      "para+modular",
    ])
    .addTypeSystems(["tsys+static", "tsys+dependent"]);

  /**/
}
