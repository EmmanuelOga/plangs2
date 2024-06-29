import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+assembly",
    "Assembly",
    {
      name: "Assembly",
      websites: [
        { kind: "wikipedia", title: "assembly language", href: "https://en.wikipedia.org/wiki/Assembly_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/300px-Motorola_6800_Assembly_Language.png",
        },
      ],
      releases: [{ version: "unknown", date: "1947-01-01", kind: "first" }],
      extensions: [".asm", ".s", ".inc", ".wla"],
    },
    {
      paradigms: [
        "para+imperative",
        "para+unstructured",
        "para+meta",
        "para+macros",
        "para+structured",
        "para+objects",
      ],
    },
  );

  lb.define(
    "pl+assemblyscript",
    "AssemblyScript",
    {
      name: "AssemblyScript",
      websites: [
        { kind: "wikipedia", title: "AssemblyScript", href: "https://en.wikipedia.org/wiki/AssemblyScript" },
        { kind: "homepage", title: "www.assemblyscript.org", href: "https://www.assemblyscript.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2017-01-01", kind: "first" },
        { version: "0.27.27", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influences: ["pl+javascript", "pl+typescript", "pl+webassembly"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"],
      people: ["person+daniel-wirtz", "person+max-graey"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+game-oriented-assembly-lisp",
    "Game Oriented Assembly Lisp",
    {
      name: "Game Oriented Assembly Lisp",
      websites: [
        { kind: "wikipedia", title: "GOAL", href: "https://en.wikipedia.org/wiki/Game_Oriented_Assembly_Lisp" },
      ],
      releases: [
        { version: "unknown", date: "2001-12-03", kind: "first" },
        { version: "unknown", date: "2012-02-07", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+allegro-common-lisp"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi"],
      people: ["person+andy-gavin", "person+naughty-dog"],
      platforms: ["platf+playstation"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  lb.define(
    "pl+high-level-assembly",
    "High Level Assembly (HLA)",
    {
      name: "High Level Assembly (HLA)",
      websites: [
        {
          kind: "wikipedia",
          title: "High Level Assembly (HLA)",
          href: "https://en.wikipedia.org/wiki/High_Level_Assembly",
        },
        {
          kind: "homepage",
          title: "plantation-productions.com/Webster",
          href: "http://plantation-productions.com/Webster",
        },
      ],
      releases: [{ version: "2.16", date: "2011-07-06", kind: "stable" }],
    },
    { licenses: ["lic+public-domain"], people: ["person+randall-hyde"], platforms: ["platf+ia-32"] },
  );

  lb.define(
    "pl+webassembly",
    "WebAssembly",
    {
      name: "WebAssembly",
      websites: [
        { kind: "wikipedia", title: "WebAssembly", href: "https://en.wikipedia.org/wiki/WebAssembly" },
        { kind: "homepage", title: "webassembly.org", href: "https://webassembly.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" }],
      releases: [{ version: "unknown", date: "2017-01-01", kind: "first" }],
      extensions: [],
    },
    {
      influences: ["pl+asm.js", "pl+google-native-client", "pl+lisp"],
      licenses: ["lic+apache"],
      paradigms: ["para+structured", "para+stack"],
      platforms: ["platf+cross-platform"],
    },
  );
}
