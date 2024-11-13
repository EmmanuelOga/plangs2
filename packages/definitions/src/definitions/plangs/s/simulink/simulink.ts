import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+simulink", {
      name: "Simulink",
      description:
        "Simulink is a MATLAB-based graphical programming environment for modeling, simulating and analyzing multidomain dynamical systems. Its primary interface is a graphical block diagramming tool and a customizable set of block libraries. It offers tight integration with the rest of the MATLAB environment and can either drive MATLAB or be scripted from it. Simulink is widely used in automatic control and digital signal processing for multidomain simulation and model-based design.",
      keywords: ["matlab", "simulink"],
      websites: [
        { title: "MathWorks", href: "https://www.mathworks.com/products/simulink.html", kind: "homepage" },
        { title: "Simulink", href: "https://en.wikipedia.org/wiki/Simulink", kind: "wikipedia" },
      ],
      year: 1988,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "10.7", name: "Simulink Release 10.7", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+matlab"])
    .addParadigms(["paradigm+dataflow", "paradigm+simulation", "paradigm+visual"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+dsp", "tag+embedded", "tag+industrial", "tag+modeling", "tag+testing", "tag+wavelet"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
