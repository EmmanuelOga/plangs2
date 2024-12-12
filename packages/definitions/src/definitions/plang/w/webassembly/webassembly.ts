import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+webassembly", {
      name: "WebAssembly",
      languishRanking: 93,
      stackovTags: ["webassembly"],
      githubName: "WebAssembly",
      githubLangId: "956556503",
      githubColor: "#04133b",
      githubPopular: false,
      githubType: "programming",
      description:
        "WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine. It is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.",
      keywords: ["binary code", "portable", "stack machine", "virtual machine", "wasm", "web", "webassembly"],
      extensions: [".wasm", ".wat"],
      releases: [
        { version: "1.0", name: "Initial Release", date: "2017-03" },
        { version: "Core Specification Release", name: "Publication", date: "2018-02" },
        { version: "2.0 Draft", name: "Draft Status", date: "2022-04" },
      ],
      extWikipediaPath: "WebAssembly",
      extRedditPath: "WebAssembly",
      extHomeURL: "https://webassembly.org",
      created: "2017",
      isTranspiler: false,
      shortDesc: "WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine.",
      links: [{ url: "https://github.com/WebAssembly", title: "GitHub Org" }],
      extGithubPath: "WebAssembly",
    })
    .relImplements.add("pl+assembly", "pl+javascript")
    .relInfluencedBy.add("pl+javascript", "pl+llvm")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+stack-oriented", "para+structured")
    .relPlatforms.add("plat+cross", "plat+web")
    .relTags.add("tag+compiler");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
