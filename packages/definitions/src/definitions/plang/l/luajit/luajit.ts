import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+luajit", {
      name: "LuaJIT",
      description:
        "LuaJIT is a tracing just-in-time compiler for the Lua programming language, renowned for its execution performance and compatibility with Lua 5.1. It was originally developed by Mike Pall and is known as the fastest Lua runtime, frequently used for numerical computation and dynamic programming language applications.",
      keywords: ["just-in-time compiler", "lua", "luajit"],
      extensions: [".lua", ".luajit"],
      releases: [
        { version: "2.1.ROLLING", name: "LuaJIT 2.1 Rolling Release", date: "2023-08-21" },
        { version: "2.0.5", name: "LuaJIT 2.0.5", date: "2023-01-01" },
      ],
      extWikipediaPath: "LuaJIT",
      extGithubPath: "LuaJIT/LuaJIT",
      extHomeURL: "https://luajit.org/",
      created: "2005",
    })
    .relDialectOf.add("pl+lua")
    .relImplements.add("pl+lua")
    .relInfluencedBy.add("pl+c", "pl+lua")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+imperative", "para+procedural", "para+scripting")
    .relPlatforms.add("plat+android", "plat+apple", "plat+arm", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
