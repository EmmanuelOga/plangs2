import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+preact", {
      name: "preact",
      description:
        "\nPreact is a fast, lightweight JavaScript library that offers a thin Virtual DOM abstraction directly on top of the DOM, making it highly portable and performant. With its small size, browser compatibility, and seamless integration with the React ecosystem, Preact enables developers to build productive, efficient, and embeddable UI components without unnecessary complexity.",
      shortDesc:
        "⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
      extGithubPath: "preactjs/preact",
      extHomeURL: "https://preactjs.com/",
      githubStars: 37000,
    })
    .relPlangs.add("pl+javascript", "pl+javascriptcore", "pl+typescript")
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+javascript", "pl+typescript");
}
