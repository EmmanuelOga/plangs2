import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+luajit", {
      name: "LuaJIT",
      description:
        "LuaJIT is a tracing just-in-time compiler for the Lua programming language. Mike Pall, a primary maintainer of the project had resigned in 2015, resorting only to occasional patching to the future 2.1 version.",
      websites: [
        { href: "https://luajit.org/", title: "luajit.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/LuaJIT", title: "LuaJIT", kind: "wikipedia" },
      ],
      releases: [{ version: "2.0.5", date: "2023-01-01" }],
      images: [{ kind: "other", title: "LuaJIT", url: "/images/plangs/l/luajit/other.png" }],
    })
    .addImplements(["pl+lua", "pl+moonscript"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+android", "plat+apple", "plat+windows", "plat+x86-64"])
    .addTags(["tag+asm", "tag+compiler", "tag+industrial", "tag+interpreter"])
    .addWrittenIn(["pl+c", "pl+lua"]);
}
