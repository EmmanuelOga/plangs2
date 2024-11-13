import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mustache", {
      name: "Mustache",
      languishRanking: 87,
      websites: [
        { title: "Mustache (template system) - Wikipedia", href: "https://en.wikipedia.org/wiki/Mustache_(template_system)", kind: "wikipedia" },
        { title: "Mustache Homepage", href: "http://mustache.github.io", kind: "homepage" },
        { title: "Mustache GitHub Repository", href: "https://github.com/mustache/mustache", kind: "repository" },
      ],
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
      year: 2009,
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "4.2.0", name: "Stable release", date: "2021-03-28" }],
    })
    .addCompilesTo(["pl+javascript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+data-driven", "paradigm+declarative"])
    .addPlatforms(["plat+web"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
