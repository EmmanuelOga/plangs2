import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+wasp", {
      name: "Wasp",
      extHomeURL: "https://wasp-lang.dev",
      extGithubPath: "wasp-lang/wasp",
      githubStars: 14000,
      extensions: [".wasp"],
      filenames: ["wasp"],
      isTranspiler: true,
      releases: [{ version: "0.2.0", name: "Beta Release", date: "2023-08-15" }],
      description:
        "Wasp is a configuration-driven, declarative programming language for building full-stack web applications, focusing on reducing boilerplate and improving developer productivity by efficiently managing both server and client-side code.",
      shortDesc: "Wasp simplifies full-stack web development with a declarative approach.",
      created: "2021",
      keywords: ["configuration-driven", "declarative language", "full-stack", "wasp", "web development"],
      links: [
        { url: "https://github.com/wasp-lang/wasp", title: "Wasp on GitHub" },
        { url: "https://wasp-lang.dev/docs", title: "Wasp Documentation" },
      ],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+low-code")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+cli", "tag+low-code", "tag+webdev")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+javascript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
