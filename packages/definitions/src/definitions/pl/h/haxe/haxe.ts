import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+haxe", {
      name: "Haxe",
      description:
        "Haxe is a high-level cross-platform programming language and compiler that can produce applications and source code for many different computing platforms from one code-base. It is free and open-source software, released under an MIT License. The compiler is written in OCaml and is released under the GNU General Public License (GPL) version 2.",
      keywords: ["haxe"],
      extensions: [".hx", ".hxml"],
      year: 2005,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "4.3.6", name: "Haxe 4.3.6", date: "2024-08-07" }],
      stackovTags: ["haxe"],
      githubName: "Haxe",
      languishRanking: 97,
      githubLangId: "158",
      githubColor: "#df7900",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Haxe",
      extRedditPath: "haxe",
      extHomeURL: "https://haxe.org/",
    })
    .addCompilesTo([
      "pl+actionscript",
      "pl+c++",
      "pl+c-sharp",
      "pl+ecmascript",
      "pl+java",
      "pl+javascript",
      "pl+lua",
      "pl+ocaml",
      "pl+php",
      "pl+python",
    ])
    .addDialectOf(["pl+ecmascript"])
    .addInfluencedBy(["pl+actionscript", "pl+c++", "pl+c-sharp", "pl+ecmascript", "pl+javascript", "pl+lua", "pl+ocaml", "pl+python"])
    .addLicenses(["license+gnu-gpl", "license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+arm", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .addTags(["tag+app", "tag+compiler", "tag+industrial", "tag+instrument_control", "tag+interpreter", "tag+scripting", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}