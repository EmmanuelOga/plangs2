import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+haxe")
    .merge({
      name: "Haxe",
      websites: [{ kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
      releases: [{ name: "Haxe", version: "4.3.4", date: "2024-01-01", kind: "stable" }],
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

  g.buildPlang("pl+neko")
    .merge({
      name: "NekoVMNeko",
      websites: [
        { kind: "wikipedia", title: "NekoVMNeko", href: "https://en.wikipedia.org/wiki/Neko_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ name: "NekoVMNeko", version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+ocaml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+nekovm")
    .merge({
      name: "NekoVMNeko",
      websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ name: "NekoVMNeko", version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+ocaml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
