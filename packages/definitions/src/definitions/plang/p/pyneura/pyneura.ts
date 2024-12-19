import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pyneura", {
      name: "PyNeuraLogic",
      description: "Enables the creation of Differentiable Logic Programs using neural networks within a Python-friendly framework.",
      shortDesc: "Enables Differentiable Logic Programs via neural networks.",
      extensions: [".plogic"],
      extGithubPath: "LukasZahradnik/PyNeuraLogic",
      isTranspiler: false,
      keywords: ["differentiable logic", "neural networks", "pyneuralogic"],
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+logic")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+java", "pl+python");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
