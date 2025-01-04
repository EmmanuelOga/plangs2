import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+webassembly", {
      name: "WebAssembly",
      description:
        "WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine. It is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.",
      shortDesc:
        "Binary instruction format for a stack-based virtual machine for the web.",
      created: "2017",
      extensions: [".wasm", ".wat"],
      extGithubPath: "WebAssembly",
      extHomeURL: "https://webassembly.org",
      extRedditPath: "WebAssembly",
      extWikipediaPath: "WebAssembly",
      githubColor: "#04133b",
      githubLangId: "956556503",
      githubName: "WebAssembly",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "binary code",
        "portable",
        "stack machine",
        "virtual machine",
        "wasm",
        "web",
        "webassembly",
      ],
      languishRanking: 93,
      links: [{ url: "https://github.com/WebAssembly", title: "GitHub Org" }],
      releases: [
        { version: "1.0", name: "Initial Release", date: "2017-03" },
        { version: "2.0 Draft", name: "Draft Status", date: "2022-04" },
      ],
      stackovTags: ["webassembly"],
    })
    .relImplements.add("pl+assembly", "pl+javascript")
    .relInfluencedBy.add("pl+javascript", "pl+llvm")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+stack-oriented", "para+structured")
    .relPlatforms.add("plat+cross", "plat+web")
    .relTags.add("tag+compiler");
}
