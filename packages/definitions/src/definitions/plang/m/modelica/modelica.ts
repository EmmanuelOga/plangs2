import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+modelica", {
      name: "Modelica",
      description:
        "Modelica is a non-proprietary, object-oriented, declarative, multi-domain modeling language for component-oriented modeling of complex systems. It is primarily developed for modeling physical systems and supports acausal modeling with the use of mathematical equations rather than assignment statements. Developed by the Modelica Association, it allows the connection of reusable components to model systems across multiple domains such as electrical, mechanical, and thermal.",
      shortDesc: "Modelica is a non-proprietary, object-oriented language for modeling complex physical systems across multiple domains.",
      created: "1997",
      extensions: [".mo"],
      extGithubPath: "modelica/ModelicaStandardLibrary",
      extHomeURL: "https://www.modelica.org/",
      extRedditPath: "Modelica",
      extWikipediaPath: "Modelica",
      githubColor: "#de1d31",
      githubLangId: "233",
      githubName: "Modelica",
      githubPopular: false,
      githubStars: 484,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["cyber-physical", "declarative", "modelica", "multi-domain", "object-oriented"],
      languishRanking: 124,
      releases: [{ version: "3.6", name: "Modelica 3.6", date: "2023-03-09" }],
      stackovTags: ["modelica"],
    })
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+multi", "para+simulation")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+industrial", "tag+modeling", "tag+sci", "tag+viz");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
