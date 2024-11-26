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
      keywords: ["Wasm", "WebAssembly", "binary code", "high-performance applications", "portable", "stack machine", "virtual machine", "web"],
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
    })
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+stack-oriented", "para+structured"])
    .relPlatform.add(["plat+cross", "plat+web"])
    .relTag.add(["tag+compiler"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
