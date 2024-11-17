import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
      keywords: ["Frontend framework", "JavaScript", "Rich Harris", "Svelte", "TypeScript", "Web platform"],
      extensions: [".svelte"],
      year: 2016,
      isTranspiler: true,
      isMainstream: true,
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
    })
    .addCompilesTo(["pl+javascript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+reactive"])
    .addPlatforms(["plat+nodejs", "plat+web"])
    .addTags(["tag+framework", "tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
