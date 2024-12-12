import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mustache", {
      name: "Mustache",
      languishRanking: 87,
      stackovTags: ["mustache"],
      githubName: "Mustache",
      githubLangId: "638334590",
      githubColor: "#724b3b",
      githubPopular: false,
      githubType: "markup",
      description:
        "Mustache is a logic-less web template system that heavily uses braces `{{}}` for templating, resembling a sideways moustache. Known for strong separation of logic and presentation, Mustache relies on data-driven rendering without explicit flow control.",
      keywords: ["logic-less", "mustache", "templating", "web templates"],
      extensions: [".mustache"],
      isTranspiler: false,
      releases: [{ version: "4.2.0", name: "Stable release", date: "2021-03-28" }],
      extWikipediaPath: "Mustache_(template_system)",
      extGithubPath: "mustache/mustache",
      extHomeURL: "https://mustache.github.io/",
      created: "2009",
      shortDesc: "Mustache is a logic-less web template system using braces `{{}}` for templating.",
      githubStars: 3000,
      ghRepoCreated: "2011-08-15",
    })
    .relCompilesTo.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-driven", "para+declarative")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+webdev");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
