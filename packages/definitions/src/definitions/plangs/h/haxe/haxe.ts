import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+haxe", {
      name: "Haxe",
      description:
        "Haxe is a high-level cross-platform programming language and compiler that can produce applications and source code for many different computing platforms from one code-base. It is free and open-source software, released under an MIT License. The compiler, written in OCaml, is released under the GNU General Public License (GPL) version 2.",
      firstAppeared: "2005-01-01",
      extensions: [".hx", ".hxml"],
      websites: [
        { href: "https://haxe.org/", title: "haxe.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Haxe", title: "Haxe", kind: "wikipedia" },
      ],
      releases: [{ version: "4.3.6", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+ecmascript"])
    .addInfluencedBy(["pl+actionscript", "pl+c++", "pl+c-sharp", "pl+ecmascript", "pl+javascript", "pl+lua", "pl+ocaml", "pl+python"])
    .addLicenses(["license+gnu-gpl", "license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+arm", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+nominal", "tsys+static"])
    .addWrittenIn(["pl+ocaml"]);
}
