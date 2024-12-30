import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+json", {
      name: "JSON",
      description:
        "JavaScript Object Notation is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
      shortDesc: "Lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
      created: "2001",
      extensions: [".json"],
      extHomeURL: "https://json.org",
      extWikipediaPath: "JSON",
      githubColor: "#292929",
      githubLangId: "174",
      githubName: "JSON",
      githubPopular: false,
      githubType: "data",
      isTranspiler: false,
      keywords: ["data interchange", "javascript object notation", "json", "lightweight"],
      languishRanking: 27,
      releases: [{ version: "1.0", name: "Initial JSON Specification", date: "2013" }],
      stackovTags: ["json"],
    })
    .relParadigms.add("para+data-exchange")
    .relPlatforms.add("plat+cross");
}
