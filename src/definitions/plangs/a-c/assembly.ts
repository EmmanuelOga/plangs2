import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+assembly")
    .merge({
      name: "Assembly language",
      websites: [
        { kind: "wikipedia", title: "Assembly language", href: "https://en.wikipedia.org/wiki/Assembly_language" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/300px-Motorola_6800_Assembly_Language.png",
        },
      ],
      extensions: [".SRC", ".asm", ".inc", ".s", ".wla"],
    })
    .addParadigms([
      "para+imperative",
      "para+unstructured",
      "para+meta",
      "para+macros",
      "para+structured",
      "para+objects",
    ]);

  /**/

  g.buildPlang("pl+assemblyscript")
    .merge({
      name: "AssemblyScript",
      websites: [{ kind: "wikipedia", title: "AssemblyScript", href: "https://en.wikipedia.org/wiki/AssemblyScript" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg" },
      ],
      releases: [{ name: "AssemblyScript", version: "0.27.27", date: "2024-01-01", kind: "stable" }],
      extensions: [".ts"],
    })
    .addInfluences(["pl+javascript", "pl+typescript", "pl+webassembly"])
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/AssemblyScript/assemblyscript/blob/master/LICENSE", title: "LICENSE" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+game-oriented-assembly-lisp")
    .merge({
      name: "Game Oriented Assembly Lisp",
      websites: [
        {
          kind: "wikipedia",
          title: "Game Oriented Assembly Lisp",
          href: "https://en.wikipedia.org/wiki/Game_Oriented_Assembly_Lisp",
        },
      ],
      releases: [{ name: "Game Oriented Assembly Lisp", version: "unknown", date: "2012-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+common-lisp"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addPerson("person+andy-gavin", { role: "designer" })
    .addPerson("person+naughty-dog", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+playstation"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  /**/

  g.buildPlang("pl+high-level-assembly")
    .merge({
      name: "High Level Assembly (HLA)",
      websites: [
        {
          kind: "wikipedia",
          title: "High Level Assembly (HLA)",
          href: "https://en.wikipedia.org/wiki/High_Level_Assembly",
        },
      ],
      releases: [{ name: "High Level Assembly (HLA)", version: "2.16", date: "2011-01-01", kind: "stable" }],
    })
    .addPerson("person+randall-hyde", { role: "developer" })
    .addLicenses(["lic+public-domain"])
    .addPlatforms(["platf+ia-32"]);

  /**/

  g.buildPlang("pl+ms-macro-assembler")
    .merge({
      name: "Microsoft Macro Assembler",
      websites: [
        {
          kind: "wikipedia",
          title: "Microsoft Macro Assembler",
          href: "https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler",
        },
      ],
      releases: [{ name: "Microsoft Macro Assembler", version: "14.16.27023.1", date: "2702-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial", "lic+proprietary"]);

  /**/

  g.buildPlang("pl+netwide-assembler")
    .merge({
      name: "NASM",
      websites: [{ kind: "wikipedia", title: "NASM", href: "https://en.wikipedia.org/wiki/Netwide_Assembler" }],
      images: [
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Netwide_Assembler.svg" },
      ],
      releases: [{ name: "NASM", version: "2.16.03", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+h-peter-anvin", { role: "developer" })
    .addLicenses(["lic+bsd-s"]);

  /**/

  g.buildPlang("pl+webassembly")
    .merge({
      name: "WebAssembly",
      websites: [{ kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" }],
      extensions: [".wasm", ".wat"],
    })
    .addLicenses(["lic+apache"])
    .addParadigm("para+stack", {
      refs: [
        {
          href: "https://github.com/WebAssembly/design/blob/376bcc4b9cba79280d79be023d71e30d0b00ba47/Semantics.md",
          title: "WebAssembly/design/Semantics.md",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
