import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lean",
    "Lean",
    {
      name: "Lean",
      websites: [
        { kind: "wikipedia", title: "Lean", href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)" },
        { kind: "homepage", title: "lean-lang.org", href: "https://lean-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg" }],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "unknown", date: "2024-04-03", kind: "stable" },
        { version: "unknown", date: "2024-05-02", kind: "preview" },
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
