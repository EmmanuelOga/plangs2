import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+natlog", {
      name: "Natlog",
      description: "A lightweight Prolog-like system engineered to integrate seamlessly with deep learning tools such as PyTorch, JAX, and GPT.",
      shortDesc: "A lightweight Prolog-like system designed for interoperability with deep learning tools.",
      created: "2022-04",
      extGithubPath: "ptarau/natlog",
      isTranspiler: false,
      keywords: ["deep-learning", "gpt", "interpretation", "jax", "logicprogramming", "prolog", "py-torch"],
    })
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+declarative", "para+interpreted", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+languages", "tag+sci")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+python");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
