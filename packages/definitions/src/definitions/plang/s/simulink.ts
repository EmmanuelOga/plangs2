import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+simulink", {
      name: "Simulink",
      description:
        "Graphical programming environment integrated with MATLAB for modeling, simulating, and analyzing dynamic systems, leveraging block diagrams and model-based designs.",
      shortDesc:
        "Graphical programming environment for dynamic system modeling and analysis integrated with MATLAB.",
      created: "1984",
      extHomeURL: "https://www.mathworks.com/products/simulink.html",
      extWikipediaPath: "Simulink",
      isTranspiler: false,
      keywords: ["block diagram", "matlab", "model-based design", "simulink"],
      releases: [
        { version: "10.7", name: "Simulink Release 10.7", date: "2023-03-16" },
      ],
    })
    .relInfluencedBy.add("pl+matlab")
    .relLicenses.add("lic+proprietary")
    .relParadigms.add("para+dataflow", "para+simulation", "para+visual")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+control",
      "tag+dsp",
      "tag+embedded",
      "tag+industrial",
      "tag+modeling",
      "tag+testing",
      "tag+wavelet",
    );
}
