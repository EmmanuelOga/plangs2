import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+modelica", {
      name: "Modelica",
      description:
        "Modelica is a non-proprietary, object-oriented, declarative, multi-domain modeling language for component-oriented modeling of complex systems. It is primarily developed for modeling physical systems and supports acausal modeling with the use of mathematical equations rather than assignment statements. Developed by the Modelica Association, it allows the connection of reusable components to model systems across multiple domains such as electrical, mechanical, and thermal.",
      keywords: ["cyber-physical", "declarative", "modelica", "multi-domain", "object-oriented"],
      extensions: [".mo"],
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
      extWikipediaPath: "Modelica",
      extRedditPath: "Modelica",
      extHomeURL: "https://www.modelica.org/",
      created: "1997",
    })
    .relLicense.add(["lic+cc-by"])
    .relParadigm.add(["para+declarative", "para+multi", "para+simulation"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+app", "tag+industrial", "tag+modeling", "tag+sci", "tag+viz"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
