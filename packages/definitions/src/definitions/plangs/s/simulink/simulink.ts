import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+simulink", {
      name: "Simulink",
      description:
        "Simulink is a MATLAB-based graphical programming environment for modeling, simulating and analyzing multidomain dynamical systems. Its primary interface is a graphical block diagramming tool and a customizable set of block libraries. It offers tight integration with the rest of the MATLAB environment and can either drive MATLAB or be scripted from it. Simulink is widely used in automatic control and digital signal processing for multidomain simulation and model-based design.",
      websites: [
        { href: "https://www.mathworks.com/products/simulink.html", title: "mathworks.com", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Simulink", title: "Simulink", kind: "wikipedia" },
      ],
      releases: [{ version: "10.7", date: "2023-01-01" }],
      images: [{ kind: "other", title: "Simulink", url: "/images/plangs/s/simulink/other.jpg" }],
    })
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"]);
}
