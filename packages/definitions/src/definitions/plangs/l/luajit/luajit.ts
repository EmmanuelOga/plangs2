import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+luajit", {
      name: "LuaJIT",
      description:
        "LuaJIT is a tracing just-in-time compiler for the Lua programming language. It aims to optimize the execution speed and reduce memory usage while staying compatible with existing Lua code. Mike Pall, a primary maintainer of the project, resigned in 2015, resulting in occasional patching for future version 2.1.",
      keywords: ["luajit"],
      websites: [
        { title: "luajit.org", href: "https://luajit.org/", kind: "homepage" },
        { title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT", kind: "wikipedia" },
      ],
      extensions: [".lua", ".luajit"],
      firstAppeared: "2005-06-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "2.0.5", name: "LuaJIT 2.0.5", date: "2023-01-01" }],
    })
    .addDialectOf(["pl+lua"])
    .addImplements(["pl+lua"])
    .addInfluencedBy(["pl+c", "pl+lua"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+apple", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c"]);
}
