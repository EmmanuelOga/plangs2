import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+esbuild", {
      name: "esbuild",
      description:
        "Our current build tools for the web are 10-100x slower than they could be. The main goal of the esbuild bundler project is to bring about a new era of build tool performance, and create an easy-to-use modern bundler along the way.",
      shortDesc: "An extremely fast bundler for the web.",
      extGithubPath: "evanw/esbuild",
      extHomeURL: "https://esbuild.github.io/",
      githubStars: 38400,
    })
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+go");
}
