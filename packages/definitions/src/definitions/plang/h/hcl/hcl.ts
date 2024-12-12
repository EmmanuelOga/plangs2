import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hcl", {
      name: "HCL",
      languishRanking: 53,
      stackovTags: ["Terraform"],
      githubName: "HCL",
      githubLangId: "144",
      githubColor: "#844FBA",
      githubPopular: false,
      githubType: "programming",
      description:
        "HCL (HashiCorp Configuration Language) is a declarative configuration language developed by HashiCorp, often used in Terraform to describe cloud infrastructure resources.",
      keywords: ["configuration language", "hashicorp", "hcl", "terraform"],
      extensions: [".hcl"],
      releases: [
        { version: "1.9.1", name: "Stable release", date: "2024-07-03" },
        { version: "1.0.0", name: "Initial release", date: "2014-07-28" },
      ],
      isTranspiler: false,
      extWikipediaPath: "Terraform_(software)",
      extRedditPath: "Terraform",
      created: "2014",
      shortDesc: "HCL is a declarative configuration language used in Terraform to define cloud infrastructure resources.",
      extHomeURL: "https://github.com/hashicorp/hcl",
      githubStars: 5300,
      extGithubPath: "hashicorp/hcl",
      ghRepoCreated: "2014-07-30",
    })
    .relCompilesTo.add("pl+go")
    .relLicenses.add("lic+mpl")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relWrittenWith.add("pl+go");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
