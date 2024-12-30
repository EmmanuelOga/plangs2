import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+wasp", {
      name: "Wasp",
      description:
        "Configuration-driven, declarative programming language for building full-stack web applications, focusing on reducing boilerplate and improving developer productivity by efficiently managing both server and client-side code.",
      shortDesc: "Simplifies full-stack web development with a declarative approach.",
      created: "2021",
      extensions: [".wasp"],
      extGithubPath: "wasp-lang/wasp",
      extHomeURL: "https://wasp-lang.dev",
      filenames: ["wasp"],
      githubStars: 14000,
      isTranspiler: true,
      keywords: ["configuration-driven", "declarative language", "full-stack", "wasp", "web development"],
      releases: [{ version: "0.2.0", name: "Beta Release", date: "2023-08-15" }],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+low-code")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+cli", "tag+low-code", "tag+webdev")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+javascript");
}
