import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hcl", {
      name: "HCL",
      description:
        "HashiCorp Configuration Language is a declarative configuration language developed by HashiCorp, often used in Terraform to describe cloud infrastructure resources.",
      shortDesc:
        "Declarative configuration language used in Terraform to define cloud infrastructure resources.",
      created: "2014",
      extensions: [".hcl"],
      extGithubPath: "hashicorp/hcl",
      extHomeURL: "https://github.com/hashicorp/hcl",
      extRedditPath: "Terraform",
      extWikipediaPath: "Terraform_(software)",
      githubColor: "#844FBA",
      githubLangId: "144",
      githubName: "HCL",
      githubPopular: false,
      githubStars: 5300,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["configuration language", "hashicorp", "hcl", "terraform"],
      languishRanking: 53,
      releases: [
        { version: "1.9.1", name: "Stable release", date: "2024-07-03" },
        { version: "1.0.0", name: "Initial release", date: "2014-07-28" },
      ],
      stackovTags: ["Terraform"],
    })
    .relCompilesTo.add("pl+go")
    .relLicenses.add("lic+mpl")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add(
      "plat+apple",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+windows",
    )
    .relWrittenWith.add("pl+go");
}
