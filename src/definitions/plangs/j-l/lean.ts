import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+lean")
    .merge({
      name: "Lean",
      websites: [{ kind: "wikipedia", title: "Lean", href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg" }],
      releases: [
        { name: "Lean", version: "4.7.0", date: "2024-01-01", kind: "stable" },
        { name: "Lean", version: "4.8.0", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addImplementations(["pl+cpp"])
    .addInfluences(["pl+ml", "pl+coq", "pl+haskell"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+imperative"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
