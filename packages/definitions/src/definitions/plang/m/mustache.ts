import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mustache", {
      name: "Mustache",
      description:
        "Logic-less web template system that heavily uses braces `{{}}` for templating, resembling a sideways moustache. Known for strong separation of logic and presentation, Mustache relies on data-driven rendering without explicit flow control.",
      shortDesc:
        "Logic-less web template system using braces `{{}}` for templating.",
      created: "2009",
      extensions: [".mustache"],
      extGithubPath: "mustache/mustache",
      extHomeURL: "https://mustache.github.io/",
      extWikipediaPath: "Mustache_(template_system)",
      githubColor: "#724b3b",
      githubLangId: "638334590",
      githubName: "Mustache",
      githubPopular: false,
      githubStars: 3000,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["logic-less", "mustache", "templating", "web templates"],
      languishRanking: 87,
      releases: [
        { version: "4.2.0", name: "Stable release", date: "2021-03-28" },
      ],
      stackovTags: ["mustache"],
    })
    .relCompilesTo.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-driven", "para+declarative")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+webdev");
}
