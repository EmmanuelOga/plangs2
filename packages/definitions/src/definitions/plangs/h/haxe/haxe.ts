import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+haxe", {
      name: "Haxe",
      description:
        "Haxe is a high-level cross-platform programming language and compiler that can produce applications and source code for many different computing platforms from one code-base. It is free and open-source software, released under an MIT License. The compiler, written in OCaml, is released under the GNU General Public License (GPL) version 2.",
      keywords: ["haxe"],
      websites: [
        { title: "haxe.org", href: "https://haxe.org/", kind: "homepage" },
        { title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe", kind: "wikipedia" },
      ],
      extensions: [".hx", ".hxml"],
      year: 2005,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "4.3.6", name: "Haxe 4.3.6", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+ecmascript"])
    .addInfluencedBy(["pl+actionscript", "pl+c++", "pl+c-sharp", "pl+ecmascript", "pl+javascript", "pl+lua", "pl+ocaml", "pl+python"])
    .addLicenses(["license+gnu-gpl", "license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+arm", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+app", "tag+compiler", "tag+industrial", "tag+instrument_control", "tag+interpreter", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+nominal", "tsys+static"])
    .addWrittenIn(["pl+ocaml"])
    .addCompilesTo(["pl+c++", "pl+c-sharp", "pl+javascript", "pl+java", "pl+lua", "pl+php", "pl+python"]);
}
