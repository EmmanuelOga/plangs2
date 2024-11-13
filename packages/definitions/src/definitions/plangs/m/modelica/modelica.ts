import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+modelica", {
      name: "Modelica",
      description:
        "Modelica is a non-proprietary, object-oriented, declarative, multi-domain modeling language for component-oriented modeling of complex systems. It is primarily developed for modeling physical systems and supports acausal modeling with the use of mathematical equations rather than assignment statements. Developed by the Modelica Association, it allows the connection of reusable components to model systems across multiple domains such as electrical, mechanical, and thermal.",
      keywords: ["cyber-physical", "declarative", "modelica", "multi-domain", "object-oriented"],
      websites: [
        { title: "www.modelica.org", href: "https://www.modelica.org/", kind: "homepage" },
        { title: "Modelica", href: "https://en.wikipedia.org/wiki/Modelica", kind: "wikipedia" },
        { title: "Modelica on Reddit", kind: "reddit", href: "https://reddit.com/r/Modelica" },
      ],
      extensions: [".mo"],
      year: 1997,
      releases: [
        { version: "1.0", name: "Modelica 1.0", date: "1997-09-01" },
        { version: "3.6", name: "Modelica 3.6", date: "2023-03-09" },
      ],
      stackovTags: ["modelica"],
      githubName: "Modelica",
      languishRanking: 124,
      githubLangId: "233",
      githubColor: "#de1d31",
      githubPopular: false,
      githubType: "programming",
    })
    .addLicenses(["license+cc-by"])
    .addParadigms(["paradigm+declarative", "paradigm+multi", "paradigm+object-oriented", "paradigm+simulation"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+industrial", "tag+modeling", "tag+sci", "tag+viz"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
