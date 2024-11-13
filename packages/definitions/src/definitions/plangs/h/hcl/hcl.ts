import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hcl", {
      name: "HCL",
      languishRanking: 53,
      websites: [
        { title: "Terraform (software) - Wikipedia", href: "https://en.wikipedia.org/wiki/Terraform_(software)", kind: "wikipedia" },
        { title: "HCL on Reddit", href: "https://reddit.com/r/Terraform", kind: "reddit" },
      ],
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
      year: 2014,
      isMainstream: true,
      releases: [
        { version: "1.9.1", name: "Stable release", date: "2024-07-03" },
        { version: "1.0.0", name: "Initial release", date: "2014-07-28" },
      ],
    })
    .addCompilesTo(["pl+go"])
    .addLicenses(["license+mpl"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
