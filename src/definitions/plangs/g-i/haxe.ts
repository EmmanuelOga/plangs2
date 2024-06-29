import type { PlangsGraph } from "../../../entities/plangs_graph";

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
        { version: "unknown", kind: "stable" },
        { version: "4.3.4", date: "2024-01-01", kind: "stable" },
      ],
      scoping: ["lexical"],
      extensions: [".hx", ".hxml"],
    },
    {
      implementations: ["pl+ocaml"],
      influences: [
        "pl+ecmascript",
        "pl+javascript",
        "pl+actionscript",
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
