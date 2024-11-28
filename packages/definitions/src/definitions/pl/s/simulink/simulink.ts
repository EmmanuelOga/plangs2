import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+simulink", {
      name: "Simulink",
      description:
        "Simulink is a MATLAB-based graphical programming environment for modeling, simulating, and analyzing multidomain dynamical systems. Its primary interface is a graphical block diagramming tool and a customizable set of block libraries, offering tight integration with the MATLAB environment. Simulink is widely used for automatic control, digital signal processing, embedded system design, and model-based design.",
      keywords: ["matlab", "model-based design", "simulation", "simulink"],
      releases: [{ version: "10.7", name: "Simulink Release 10.7", date: "2023-03-16" }],
      extWikipediaPath: "Simulink",
      extHomeURL: "https://www.mathworks.com/products/simulink.html",
      created: "1984",
    })
    .relInfluencedBy.add(["pl+matlab"])
    .relParadigms.add(["para+dataflow", "para+simulation", "para+visual"])
    .relPlatforms.add(["plat+apple", "plat+linux", "plat+windows"])
    .relTags.add(["tag+analysis", "tag+dsp", "tag+embedded", "tag+industrial", "tag+modeling", "tag+testing", "tag+wavelet"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
