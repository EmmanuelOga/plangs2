import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+haxe")
    .merge({
      name: "Haxe",
      websites: [{ kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
      releases: [{ version: "4.3.4", date: "2024-01-01", kind: "stable" }],
      scoping: ["lexical"],
    })
    .addImplementations(["pl+ocaml"])
    .addInfluences([
      "pl+actionscript",
      "pl+ecmascript",
      "pl+javascript",
      "pl+ocaml",
      "pl+java",
      "pl+cpp",
      "pl+php",
      "pl+c-sharp",
      "pl+python",
      "pl+lua",
      "pl+nekovm",
    ])
    .addLicenses(["lic+gpl", "lic+mit"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+generic"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+aarch64",
      "platf+arm",
      "platf+mips",
      "platf+android",
      "platf+ios",
      "platf+linux",
      "platf+mac",
      "platf+win",
    ])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+nominative"]);

  /**/
}
