import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+haxe",
    "Haxe",
    {
      name: "Haxe",
      websites: [
        { kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" },
        { kind: "homepage", title: "haxe.org", href: "https://haxe.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
      releases: [
        { version: "unknown", date: "2005-11-14", kind: "first" },
        { version: "4.3.4", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/HaxeFoundation/haxe/releases/tag/4.3.4", title: "Release 4.3.4" }],
      },
      scoping: ["lexical"],
      extensions: [".hx", ".hxml"],
    },
    {
      implementations: ["pl+ocaml"],
      influenced: ["pl+actionscript", "pl+java", "pl+javascript", "pl+ocaml"],
      influences: [
        "pl+actionscript",
        "pl+c-plus-plus",
        "pl+c-sharp",
        "pl+ecmascript",
        "pl+java",
        "pl+javascript",
        "pl+lua",
        "pl+nekovm",
        "pl+ocaml",
        "pl+php",
        "pl+python",
      ],
      licenses: ["lic+gpl", "lic+mit"],
      paradigms: ["para+functional", "para+generic", "para+multi", "para+objects"],
      platforms: [
        "platf+aarch64",
        "platf+android",
        "platf+arm",
        "platf+ia-32",
        "platf+ios",
        "platf+linux",
        "platf+mac",
        "platf+mips-architecture",
        "platf+windows",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+dynamic", "tsys+nominative", "tsys+static"],
    },
  );

  /**/
}
