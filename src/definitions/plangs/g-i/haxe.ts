import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+haxe",
    "Haxe",
    {
      name: "Haxe",
      websites: [{ kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
      releases: [{ version: "4.3.4", date: "2024-01-01", kind: "stable" }],
      scoping: ["lexical"],
    },
    {
      implementations: ["pl+ocaml"],
      influences: [
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
      ],
      licenses: ["lic+gpl", "lic+mit"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+generic"],
      platforms: [
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
      ],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+nominative"],
    },
  );
}
