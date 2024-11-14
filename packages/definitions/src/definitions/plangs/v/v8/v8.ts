import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+v8", {
      name: "V8",
      description:
        "V8 is Google's open-source high-performance JavaScript and WebAssembly engine, primarily used in Chrome and Node.js, among others. It implements ECMAScript and WebAssembly and can be embedded in any C++ application. It runs on Windows, macOS, Linux, and various processors including x86-64 and ARM.",
      keywords: ["chrome", "google", "javascript", "node.js", "webassembly"],
      websites: [
        { title: "V8 JavaScript engine", href: "https://v8.dev/", kind: "homepage" },
        { title: "V8 (JavaScript engine) - Wikipedia", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)", kind: "wikipedia" },
        { title: "JavaScript - Wikipedia", href: "https://en.wikipedia.org/wiki/JavaScript", kind: "wikipedia" },
      ],
      year: 2008,
      isMainstream: true,
      releases: [{ version: "11.4", name: "V8 11.4", date: "2023-05-24" }],
      stackovTags: ["javascript"],
      githubName: "JavaScript",
      languishRanking: 3,
      githubLangId: "183",
      githubColor: "#f1e05a",
      githubPopular: true,
      githubType: "programming",
      extensions: [".cjs", ".js", ".mjs"],
    })
    .addImplements(["pl+javascript"])
    .addLicenses(["license+bsd"])
    .addParadigms([
      "paradigm+event-driven",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+interpreted",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
    ])
    .addPlatforms(["plat+arm", "plat+cross", "plat+linux", "plat+wasm", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting", "tag+server"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+weak"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
