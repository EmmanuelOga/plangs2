import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+v8", {
      name: "V8",
      description:
        "V8 is Google's open-source high-performance JavaScript and WebAssembly engine, primarily used in Chrome and Node.js, among others. It implements ECMAScript and WebAssembly and can be embedded in any C++ application. It runs on Windows, macOS, Linux, and various processors including x86-64 and ARM.",
      keywords: ["chrome", "google", "javascript", "node.js", "webassembly"],
      releases: [{ version: "11.4", name: "V8 11.4", date: "2023-05-24" }],
      stackovTags: ["javascript"],
      githubName: "JavaScript",
      githubLangId: "183",
      githubColor: "#f1e05a",
      githubPopular: true,
      githubType: "programming",
      extensions: [".cjs", ".js", ".mjs"],
      extWikipediaPath: "JavaScript",
      extRedditPath: "javascript",
      extHomeURL: "https://v8.dev",
      created: "2008",
      isTranspiler: false,
      shortDesc: "V8 is Google's open-source high-performance JavaScript engine used in Chrome and Node.js.",
      extGithubPath: "v8/v8",
      ghRepoCreated: "2015-12-11",
      githubStars: 23600,
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
