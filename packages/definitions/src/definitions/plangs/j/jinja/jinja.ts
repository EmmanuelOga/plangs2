import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+jinja", {
    name: "Jinja",
    languishRanking: 57,
    websites: [{ kind: "wikipedia", title: "Jinja on Wikipedia", href: "https://en.wikipedia.org/wiki/Jinja_(template_engine)" }],
    stackovTags: ["jinja2"],
    githubName: "Jinja",
    githubLangId: "147",
    githubColor: "#a52a22",
    githubPopular: false,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
