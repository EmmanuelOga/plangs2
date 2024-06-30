import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lean",
    {
      name: "Lean",
      websites: [{ kind: "wikipedia", title: "Lean", href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg" }],
      releases: [
        { version: "4.7.0", date: "2024-01-01", kind: "stable" },
        { version: "4.8.0", date: "2024-01-01", kind: "preview" },
      ],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+coq", "pl+haskell", "pl+ml"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
