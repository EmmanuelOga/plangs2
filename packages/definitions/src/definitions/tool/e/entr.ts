import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+entr", {
      name: "entr",
      description: "Run arbitrary commands when files change.",
      shortDesc: "Run arbitrary commands when files change.",
      extGithubPath: "eradman/entr",
      extHomeURL: "https://eradman.com/entrproject/",
      githubStars: 4800,
    })
    .relWrittenWith.add("pl+c");
}
