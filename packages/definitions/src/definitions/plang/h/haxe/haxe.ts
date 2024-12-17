import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+haxe", {
      name: "Haxe",
      description:
        "High-level cross-platform programming language and compiler that can produce applications and source code for many different computing platforms from one code-base. It is free and open-source software, released under an MIT License. The compiler is written in OCaml and is released under the GNU General Public License (GPL) version 2.",
      shortDesc: "High-level cross-platform language and compiler for multiple platforms.",
      created: "2005",
      extensions: [".hx", ".hxml"],
      extGithubPath: "HaxeFoundation/haxe",
      extHomeURL: "https://haxe.org/",
      extRedditPath: "haxe",
      extWikipediaPath: "Haxe",
      githubColor: "#df7900",
      githubLangId: "158",
      githubName: "Haxe",
      githubPopular: false,
      githubStars: 6200,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["haxe"],
      languishRanking: 97,
      releases: [{ version: "4.3.6", name: "Haxe 4.3.6", date: "2024-08-07" }],
      stackovTags: ["haxe"],
    })
    .relCompilesTo.add("pl+actionscript", "pl+c++", "pl+c-sharp", "pl+java", "pl+javascript", "pl+lua", "pl+ocaml", "pl+php", "pl+python")
    .relInfluencedBy.add("pl+actionscript", "pl+c++", "pl+c-sharp", "pl+javascript", "pl+lua", "pl+ocaml", "pl+python")
    .relLicenses.add("lic+gnu-gpl", "lic+mit")
    .relParadigms.add("para+functional", "para+multi", "para+oop")
    .relPlatforms.add("plat+android", "plat+apple", "plat+arm", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64")
    .relTags.add("tag+app", "tag+compiler", "tag+control", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+viz")
    .relTypeSystems.add("tsys+dynamic", "tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+ocaml");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
