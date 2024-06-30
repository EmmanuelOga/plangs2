import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+delphi")
    .merge({
      name: "Delphi",
      websites: [{ kind: "wikipedia", title: "Delphi", href: "https://en.wikipedia.org/wiki/Delphi_(software)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg",
        },
      ],
      releases: [{ version: "12.1", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+freemium"]);

  /**/
  g.buildPlang("pl+pascal")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Apple_Pascal_1.2.jpg/300px-Apple_Pascal_1.2.jpg",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Free_Pascal_3.2.2_help_screen.png/220px-Free_Pascal_3.2.2_help_screen.png",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pascal_Script_3_Lazarus_IDE.png/300px-Pascal_Script_3_Lazarus_IDE.png",
        },
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/UCSD_p-System.svg" },
      ],
      releases: [
        { version: "3.2.2", date: "2021-01-01", kind: "stable" },
        { version: "3.3.1", kind: "preview" },
        { version: "3.0", kind: "stable" },
      ],
      extensions: [".p", ".pas", ".pp"],
    })
    .addDialects(["pl+ada", "pl+clarion", "pl+pascal", "pl+delphi", "pl+oxygene", "pl+planc"])
    .addImplementations([
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
    ])
    .addInfluences([
      "pl+algol",
      "pl+pascal",
      "pl+oberon",
      "pl+oberon-2",
      "pl+simula",
      "pl+smalltalk",
      "pl+simula-67",
      "pl+simula67",
    ])
    .addPerson("person+larry-tesler", { role: "designer" })
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addPerson("person+anders-hejlsberg", {
      role: "designer",
      refs: [
        {
          href: "https://web.archive.org/web/20240229162502/https://books.google.com/books?id=RzoEAAAAMBAJ&pg=PT27#v=onepage&q&f=false",
          title: "Borland and Microsoft Enter the Object-Oriented Pascal Ring",
        },
      ],
    })
    .addPerson("person+free-pascal", { role: "developer" })
    .addPerson("person+san-diego", { role: "developer" })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms([
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
    ])
    .addPlatforms([
      "platf+dec",
      "platf+arm",
      "platf+x86",
      "platf+mips",
      "platf+.net",
      "platf+jvm",
      "platf+linux",
      "platf+mac",
      "platf+win",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic", "tsys+safe"]);

  /**/
}
