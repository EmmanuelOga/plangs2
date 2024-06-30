import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+assembly").merge({
    name: "Assembly language",
    websites: [
      { kind: "wikipedia", title: "Assembly language", href: "https://en.wikipedia.org/wiki/Assembly_language" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/300px-Motorola_6800_Assembly_Language.png",
      },
    ],
    extensions: [".SRC", ".asm", ".inc", ".s", ".wla"],
  });

  g.buildPlang("pl+assemblyscript").merge({
    name: "AssemblyScript",
    websites: [{ kind: "wikipedia", title: "AssemblyScript", href: "https://en.wikipedia.org/wiki/AssemblyScript" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg" }],
    releases: [{ version: "0.27.27", date: "2024-01-01", kind: "stable" }],
    extensions: [".ts"],
  });

  g.buildPlang("pl+game-oriented-assembly-lisp").merge({
    name: "Game Oriented Assembly Lisp",
    websites: [
      {
        kind: "wikipedia",
        title: "Game Oriented Assembly Lisp",
        href: "https://en.wikipedia.org/wiki/Game_Oriented_Assembly_Lisp",
      },
    ],
    releases: [{ version: "unknown", date: "2012-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+high-level-assembly").merge({
    name: "High Level Assembly (HLA)",
    websites: [
      {
        kind: "wikipedia",
        title: "High Level Assembly (HLA)",
        href: "https://en.wikipedia.org/wiki/High_Level_Assembly",
      },
    ],
    releases: [{ version: "2.16", date: "2011-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+webassembly").merge({
    name: "WebAssembly",
    websites: [{ kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" }],
    extensions: [".wasm", ".wat"],
  });
}
