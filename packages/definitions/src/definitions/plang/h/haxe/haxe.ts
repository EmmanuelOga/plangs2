import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+haxe", {
      name: "Haxe",
      description:
        "Haxe is a high-level cross-platform programming language and compiler that can produce applications and source code for many different computing platforms from one code-base. It is free and open-source software, released under an MIT License. The compiler is written in OCaml and is released under the GNU General Public License (GPL) version 2.",
      keywords: ["haxe"],
      extensions: [".hx", ".hxml"],
      isTranspiler: true,
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
      created: "2005",
      shortDesc: "Haxe is a high-level cross-platform language and compiler for multiple platforms.",
      githubStars: 6200,
      extGithubPath: "HaxeFoundation/haxe",
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
