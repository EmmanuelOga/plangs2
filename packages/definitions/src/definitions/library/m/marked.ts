import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+marked", {
      name: "Marked",
      description:
        "Marked is a fast, lightweight markdown compiler designed for both client and server-side JavaScript, supporting all markdown features across various specifications and available as a CLI tool.",
      shortDesc: "A markdown parser and compiler. Built for speed.",
      extGithubPath: "markedjs/marked",
      extHomeURL: "https://marked.js.org/",
      githubStars: 33600,
    })
    .relPlangs.add("pl+javascript", "pl+javascriptcore", "pl+typescript")
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+typescript");
}
