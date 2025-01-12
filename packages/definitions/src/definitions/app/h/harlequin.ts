import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+harlequin", {
      name: "Harlequin",
      description:
        "Easy, fast, and beautiful database client for the terminal.",
      shortDesc: "The SQL IDE for Your Terminal.",
      extGithubPath: "tconbeer/harlequin",
      extHomeURL: "https://harlequin.sh/",
      githubStars: 4000,
      keywords: ["client", "database", "terminal"],
    })
    .relPlatforms.add("plat+cross", "plat+linux", "plat+osx", "plat+windows")
    .relTags.add("tag+analysis")
    .relWrittenWith.add("pl+python");
}
