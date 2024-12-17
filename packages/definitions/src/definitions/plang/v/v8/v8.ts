import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+v8", {
      name: "V8",
      description:
        "V8 is Google's high-performance JavaScript and WebAssembly engine, primarily used in Chrome and Node.js, among others. It implements ECMAScript and WebAssembly and can be embedded in any C++ application. It runs on Windows, macOS, Linux, and various processors including x86-64 and ARM.",
      shortDesc: "V8 is a high-performance JavaScript engine used in Chrome and Node.js.",
      created: "2008",
      extensions: [".cjs", ".js", ".mjs"],
      extGithubPath: "v8/v8",
      extHomeURL: "https://v8.dev",
      extRedditPath: "javascript",
      extWikipediaPath: "JavaScript",
      githubColor: "#f1e05a",
      githubLangId: "183",
      githubName: "JavaScript",
      githubPopular: true,
      githubStars: 23600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["chrome", "google", "javascript", "node.js", "webassembly"],
      releases: [{ version: "11.4", name: "V8 11.4", date: "2023-05-24" }],
      stackovTags: ["javascript"],
    })
    .relImplements.add("pl+javascript")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+event-driven", "para+functional", "para+imperative", "para+interpreted", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+arm", "plat+cross", "plat+linux", "plat+wasm", "plat+windows", "plat+x86-64")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting", "tag+server")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+weak")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
