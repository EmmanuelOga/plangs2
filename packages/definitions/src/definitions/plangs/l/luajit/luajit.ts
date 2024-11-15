import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+luajit", {
      name: "LuaJIT",
      description:
        "LuaJIT is a tracing just-in-time compiler for the Lua programming language, renowned for its execution performance and compatibility with Lua 5.1. It was originally developed by Mike Pall and is known as the fastest Lua runtime, frequently used for numerical computation and dynamic programming language applications.",
      keywords: ["just-in-time compiler", "lua", "luajit"],
      extensions: [".lua", ".luajit"],
      year: 2005,
      isMainstream: true,
      releases: [
        { version: "2.1.ROLLING", name: "LuaJIT 2.1 Rolling Release", date: "2023-08-21" },
        { version: "2.0.5", name: "LuaJIT 2.0.5", date: "2023-01-01" },
      ],
      extWikipediaPath: "LuaJIT",
      extGithubPath: "LuaJIT/LuaJIT",
      extHomeURL: "https://luajit.org/",
    })
    .addDialectOf(["pl+lua"])
    .addImplements(["pl+lua"])
    .addInfluencedBy(["pl+c", "pl+lua"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+apple", "plat+arm", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
