import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+v8", {
      name: "V8",
      description:
        "V8 is a high-performance JavaScript and WebAssembly engine developed by Google. It is primarily used in the Chrome browser and is a key component of the Chromium open-source project. V8 is also used in server-side environments like Node.js, providing fast and efficient execution of JavaScript code.",
      keywords: ["v8", "node.js", "chromium"],
      websites: [
        { title: "v8.dev", href: "https://v8.dev/", kind: "homepage" },
        { title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)", kind: "wikipedia" },
      ],
      firstAppeared: "2008-09-02",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "11.4", name: "V8 11.4", date: "2023-01-01" }],
    })
    .addImplements(["pl+javascript"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+event-driven", "paradigm+interpreted"])
    .addPlatforms(["plat+arm", "plat+cross", "plat+wasm", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting", "tag+server"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c++"]);
}
