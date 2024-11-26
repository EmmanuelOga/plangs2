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
        "HCL (HashiCorp Configuration Language) is a declarative configuration language developed by HashiCorp. It is primarily used with Terraform to define infrastructure as code, allowing users to manage resources across various cloud providers using a consistent syntax.",
      keywords: ["HCL", "HashiCorp", "Terraform", "declarative configuration language", "infrastructure as code"],
      extensions: [".hcl"],
      releases: [
        { version: "1.9.1", name: "Stable release", date: "2024-07-03" },
        { version: "1.0.0", name: "Initial release", date: "2014-07-28" },
      ],
      isTranspiler: true,
      extWikipediaPath: "Terraform_(software)",
      extRedditPath: "Terraform",
      created: "2014",
    })
    .relCompilesTo.add(["pl+go"])
    .relLicense.add(["lic+mpl"])
    .relParadigm.add(["para+declarative", "para+dsl"])
    .relPlatform.add(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
