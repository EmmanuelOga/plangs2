import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+svelte", {
      name: "Svelte",
      languishRanking: 30,
      stackovTags: ["svelte"],
      githubName: "Svelte",
      githubLangId: "928734530",
      githubColor: "#ff3e00",
      githubPopular: false,
      githubType: "markup",
      description:
        "Svelte is a free and open-source component-based front-end software framework, created by Rich Harris and maintained by the Svelte core team members. It compiles HTML templates to specialized code that manipulates the DOM directly, reducing the size of transferred files and improving client performance.",
      keywords: ["component-based", "frontend-framework", "rich-harris", "svelte"],
      extensions: [".svelte"],
      isTranspiler: true,
      releases: [
        { version: "1.0.0", name: "Initial Release", date: "2016-11-29" },
        { version: "2.0.0", name: "Release 2", date: "2018-04-19" },
        { version: "3.0.0", name: "Release 3", date: "2019-04-21" },
        { version: "4.0.0", name: "Release 4", date: "2023-06-22" },
        { version: "5.0.0", name: "Release 5", date: "2024-10-19" },
      ],
      extWikipediaPath: "Svelte",
      extRedditPath: "sveltejs",
      extGithubPath: "sveltejs/svelte",
      extHomeURL: "https://svelte.dev/",
      created: "2016",
      shortDesc: "Svelte is an open-source front-end framework that compiles HTML templates to optimized JavaScript.",
      githubStars: 80400,
    })
    .relCompilesTo.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+compiled", "para+event-driven", "para+functional", "para+reactive")
    .relPlatforms.add("plat+nodejs", "plat+web")
    .relTags.add("tag+framework", "tag+gui", "tag+webdev")
    .relTypeSystems.add("tsys+dynamic", "tsys+static");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
