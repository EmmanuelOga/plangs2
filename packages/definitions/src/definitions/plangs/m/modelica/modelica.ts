import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+modelica", {
      name: "Modelica",
      description:
        "Modelica is an object-oriented, declarative, multi-domain modeling language for component-oriented modeling of complex systems, such as mechanical, electrical, electronic, hydraulic, thermal, control, and electric power systems. It enables efficient development of complex multi-domain systems using reusable components.\n\nThe language is developed by the Modelica Association, which also maintains the Modelica Standard Library offering numerous generic model components and functions across various domains.",
      keywords: ["modelica"],
      websites: [
        { title: "www.modelica.org", href: "https://www.modelica.org/", kind: "homepage" },
        { title: "Modelica", href: "https://en.wikipedia.org/wiki/Modelica", kind: "wikipedia" },
        { title: "Modelica on Reddit", kind: "reddit", href: "https://reddit.com/r/Modelica" },
      ],
      extensions: [".mo"],
      year: 1997,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "3.6", name: "Modelica 3.6", date: "2023-01-01" }],
      github: { name: "Modelica", langId: "233", color: "#de1d31", popular: false, type: "programming" },
      stackovTags: ["modelica"],
    })
    .addLicenses(["license+cc-by"])
    .addParadigms(["paradigm+declarative", "paradigm+multi", "paradigm+object-oriented"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+industrial", "tag+modeling", "tag+sci", "tag+viz"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
