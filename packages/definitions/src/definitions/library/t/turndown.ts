import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+turndown", {
      name: "turndown",
      description: "An HTML to Markdown converter written in JavaScript.",
      shortDesc: "An HTML to Markdown converter written in JavaScript.",
      extGithubPath: "mixmark-io/turndown",
      extHomeURL: "https://mixmark-io.github.io/turndown/",
      extWikipediaPath: "",
      githubStars: 9100,
    })
    .relPlangs.add("pl+javascript", "pl+javascriptcore", "pl+typescript")
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+javascript");
}
