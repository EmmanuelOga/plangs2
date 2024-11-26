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
        "Mustache is a logic-less web template system that heavily uses braces `{{}}` for templating, resembling a sideways moustache. Known for strong separation of logic and presentation, Mustache doesn't include explicit flow control like `if` or `for`, relying on data-driven rendering instead.",
      keywords: ["JSON templating", "logic-less", "mustache", "presentation separation", "template system", "web templates"],
      extensions: [".mustache"],
      isTranspiler: true,
      releases: [{ version: "4.2.0", name: "Stable release", date: "2021-03-28" }],
      extWikipediaPath: "Mustache_(template_system)",
      extGithubPath: "mustache/mustache",
      extHomeURL: "http://mustache.github.io",
      created: "2009",
    })
    .relCompilesTo.add(["pl+javascript"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+data-driven", "para+declarative"])
    .relPlatform.add(["plat+web"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
