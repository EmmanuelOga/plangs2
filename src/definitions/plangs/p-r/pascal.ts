import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+delphi",
    {
      name: "Delphi",
      websites: [{ kind: "wikipedia", title: "Delphi", href: "https://en.wikipedia.org/wiki/Delphi_(software)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg",
        },
      ],
      releases: [{ version: "12.1", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+freemium"] },
  );

  lb.define(
    "pl+pascal",
    {
      name: "Pascal",
      websites: [
        { kind: "wikipedia", title: "Pascal", href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)" },
        { kind: "wikipedia", title: "Apple Pascal", href: "https://en.wikipedia.org/wiki/Apple_Pascal" },
        { kind: "wikipedia", title: "Object Pascal", href: "https://en.wikipedia.org/wiki/Object_Pascal" },
        { kind: "wikipedia", title: "Component Pascal", href: "https://en.wikipedia.org/wiki/Component_Pascal" },
        { kind: "wikipedia", title: "Concurrent Pascal", href: "https://en.wikipedia.org/wiki/Concurrent_Pascal" },
        { kind: "wikipedia", title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal" },
        { kind: "wikipedia", title: "UCSD Pascal", href: "https://en.wikipedia.org/wiki/UCSD_Pascal" },
        { kind: "wikipedia", title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal" },
        { kind: "wikipedia", title: "PascalABC.NET", href: "https://en.wikipedia.org/wiki/PascalABC.NET" },
        { kind: "wikipedia", title: "Pascal Script", href: "https://en.wikipedia.org/wiki/Pascal_Script" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Apple_Pascal_1.2.jpg/300px-Apple_Pascal_1.2.jpg",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Free_Pascal_3.2.2_help_screen.png/220px-Free_Pascal_3.2.2_help_screen.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pascal_Script_3_Lazarus_IDE.png/300px-Pascal_Script_3_Lazarus_IDE.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/UCSD_p-System.svg" },
      ],
      releases: [
        { version: "3.2.2", date: "2021-01-01", kind: "stable" },
        { version: "3.3.1", kind: "preview" },
        { version: "3.0", kind: "stable" },
      ],
      extensions: [".p", ".pp", ".pas"],
    },
    {
      dialects: ["pl+ada", "pl+clarion", "pl+pascal", "pl+delphi", "pl+oxygene", "pl+planc"],
      implementations: [
        "pl+delphi",
        "pl+x86",
        "pl+arm-architecture-family",
        "pl+pascal",
        "pl+powerpc",
        "pl+ppc64",
        "pl+sparc",
        "pl+mips-architecture",
        "pl+oxygene",
        "pl+.net",
        "pl+java",
        "pl+cocoa",
        "pl+javascript",
      ],
      influences: [
        "pl+algol",
        "pl+pascal",
        "pl+oberon",
        "pl+oberon-2",
        "pl+simula",
        "pl+smalltalk",
        "pl+simula-67",
        "pl+simula67",
      ],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: [
        "para+imperative",
        "para+structured",
        "para+modular",
        "para+objects",
        "para+concurrent",
        "para+functional",
        "para+component",
        "para+event",
        "para+generic",
        "para+scripting",
      ],
      people: [
        "person+larry-tesler",
        "person+niklaus-wirth",
        "person+anders-hejlsberg",
        "person+free-pascal",
        "person+san-diego",
      ],
      platforms: [
        "platf+dec",
        "platf+arm",
        "platf+x86",
        "platf+mips",
        "platf+.net",
        "platf+jvm",
        "platf+linux",
        "platf+mac",
        "platf+win",
      ],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic", "tsys+safe"],
    },
  );
}
