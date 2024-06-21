import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+v",
    "V",
    {
      name: "V",
      websites: [
        { kind: "wikipedia", title: "V", href: "https://en.wikipedia.org/wiki/V_(programming_language)" },
        { kind: "homepage", title: "vlang.io", href: "http://vlang.io" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" }],
      references: {
        designed_by: [{ href: "https://github.com/medvednikov", title: "Creator of V" }],
        first_appeared: [{ href: "https://github.com/vlang/v/releases/tag/v0.0.12", title: "First public release" }],
        stable_release: [{ href: "https://github.com/vlang/v/releases/tag/0.4.5", title: "Release 0.4.5" }],
      },
      releases: [
        { version: "unknown", date: "2019-06-20", kind: "first" },
        { version: "0.4.5", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".v", ".vsh"],
    },
    {
      influenced: ["pl+rust"],
      influences: ["pl+go", "pl+kotlin", "pl+oberon", "pl+python", "pl+rust", "pl+swift"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+structured", "para+concurrent"],
      people: [["person+alexander-medvednikov", "designer"]],
      platforms: ["platf+x86-64", "platf+linux", "platf+macos", "platf+windows", "platf+bsd"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+vala",
    "Vala",
    {
      name: "Vala",
      websites: [
        { kind: "wikipedia", title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)" },
        { kind: "homepage", title: "vala.dev", href: "https://vala.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg" }],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "0.57.0", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".vala", ".vapi"],
    },
    {
      influenced: ["pl+java", "pl+c", "pl+boo", "pl+d-programming-language"],
      influences: ["pl+c", "pl+c-plus-plus", "pl+c-sharp", "pl+d", "pl+java", "pl+boo"],
      licenses: ["lic+lgpl-2.1-plus"],
      paradigms: ["para+multi-paradigm", "para+imperative", "para+structured", "para+objects"],
      people: [
        ["person+jurg-billeter", "designer"],
        ["person+raffaele-sandrini", "designer"],
        ["person+rico-tzschichholz", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+verilog",
    "Verilog",
    {
      name: "Verilog",
      websites: [
        { kind: "wikipedia", title: "Verilog", href: "https://en.wikipedia.org/wiki/Verilog" },
        {
          kind: "homepage",
          title: "https://ieeexplore.ieee.org/document/10458102",
          href: "https://ieeexplore.ieee.org/document/10458102",
        },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "unknown", date: "2023-12-06", kind: "stable" },
      ],
      extensions: [".v"],
    },
    {
      influenced: ["pl+systemverilog", "pl+c"],
      influences: ["pl+pascal", "pl+ada", "pl+c", "pl+fortran", "pl+systemverilog"],
      paradigms: ["para+structured"],
      people: [
        ["person+prabhu-goel", "designer"],
        ["person+phil-moorby", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+verse",
    "Verse",
    {
      name: "Verse",
      websites: [
        { kind: "wikipedia", title: "Verse", href: "https://en.wikipedia.org/wiki/Verse_(programming_language)" },
        {
          kind: "homepage",
          title: "dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
          href: "https://dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
        },
      ],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "first" }],
      extensions: [],
    },
    {
      implementations: ["pl+uefn", "pl+visual-studio-code"],
      influences: ["pl+functional-logic-programming", "pl+object-oriented-programming", "pl+lambda-calculus"],
      paradigms: ["para+objects"],
      people: [
        ["person+simon-peyton-jones", "designer"],
        ["person+tim-sweeney", "designer"],
        ["person+lennart-augustsson", "designer"],
        ["person+guy-steele", "designer"],
      ],
      typeSystems: ["tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+vhdl",
    "VHDL",
    {
      name: "VHDL",
      websites: [
        { kind: "wikipedia", title: "VHDL", href: "https://en.wikipedia.org/wiki/VHDL" },
        { kind: "homepage", title: "IEEE VASG", href: "https://opensource.ieee.org/vasg" },
      ],
      releases: [
        { version: "unknown", date: "1980-01-01", kind: "first" },
        { version: "unknown", date: "2019-12-23", kind: "stable" },
      ],
      extensions: [".vhd"],
      references: {
        influenced_by: [{ href: "https://books.google.com/books?id=IxZqlbYMJCIC&q=Ada", title: "The VHDL Handbook" }],
      },
    },
    {
      influenced: ["pl+ada", "pl+systemverilog", "pl+pascal"],
      influences: ["pl+ada", "pl+pascal"],
      paradigms: ["para+concurrent", "para+reactive", "para+dataflow"],
      typeSystems: ["tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+visual-basic",
    "Visual Basic",
    {
      name: "Visual Basic",
      websites: [
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic" },
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)" },
        {
          kind: "homepage",
          title:
            "learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
          href: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Visual_Basic_6.0_logo.png/210px-Visual_Basic_6.0_logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+microsoft-visual-studio"],
      influenced: ["pl+b4x", "pl+visual-basic-for-applications", "pl+gambas", "pl+basic"],
      influences: [
        "pl+basic",
        "pl+microsoft-basic",
        "pl+qbasic",
        "pl+visual-basic-.net",
        "pl+visual-basic-for-applications",
        "pl+windows-forms",
        "pl+gambas",
        "pl+xojo",
        "pl+basic4ppc",
        "pl+basic4android",
        "pl+ns-basic",
      ],
      paradigms: ["para+objects", "para+event-driven"],
      platforms: ["platf+windows", "platf+dos"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+visual-basic-.net",
    "Visual Basic .NET",
    {
      name: "Visual Basic .NET",
      websites: [
        { kind: "wikipedia", title: "Visual Basic .NET", href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET" },
      ],
    },
    { influenced: ["pl+visual-basic", "pl+microsoft-small-basic", "pl+basic"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+visual-c-plus-plus",
    "Visual C++",
    {
      name: "Visual C++",
      websites: [
        { kind: "wikipedia", title: "Visual C++", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B" },
        { kind: "homepage", title: "docs.microsoft.com/en-us/cpp/", href: "https://docs.microsoft.com/en-us/cpp/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" },
      ],
      releases: [{ version: "14.40.33810", date: "3381-01-01", kind: "stable" }],
      references: {
        written_in: [
          {
            href: "https://archive.today/20120530/http://www.lextrait.com/Vincent/implementations.html",
            title: "The Programming Languages Beacon, v10.0",
          },
        ],
      },
    },
    { licenses: ["lic+trialware", "lic+freeware"], platforms: ["platf+ia-32", "platf+x86-64", "platf+arm"] },
  );
}
