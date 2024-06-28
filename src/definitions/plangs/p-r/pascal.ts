import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+delphi",
    "Delphi",
    {
      name: "Delphi",
      websites: [
        { kind: "wikipedia", title: "Delphi", href: "https://en.wikipedia.org/wiki/Delphi_(software)" },
        {
          kind: "homepage",
          title: "www.embarcadero.com/products/delphi",
          href: "https://www.embarcadero.com/products/delphi",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "12.1", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://blogs.embarcadero.com/announcing-the-availability-of-rad-studio-12-1-athens/",
            title: "Announcing the Availability of RAD Studio 12.1 Athens",
          },
        ],
        operating_system: [
          {
            href: "https://web.archive.org/web/20200806012405/http://docwiki.embarcadero.com/RADStudio/Sydney/en/Installation_Notes#Operating_System_Requirements",
            title: "Installation Notes - Operating System Requirements",
          },
        ],
      },
    },
    { licenses: ["lic+freemium"] },
  );

  lb.define(
    "pl+pascal",
    "Pascal",
    {
      name: "Pascal",
      websites: [
        { kind: "wikipedia", title: "Object Pascal", href: "https://en.wikipedia.org/wiki/Object_Pascal" },
        { kind: "wikipedia", title: "Pascal", href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)" },
        { kind: "wikipedia", title: "UCSD Pascal", href: "https://en.wikipedia.org/wiki/UCSD_Pascal" },
        { kind: "wikipedia", title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal" },
        { kind: "wikipedia", title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal" },
        { kind: "wikipedia", title: "PascalABC.NET", href: "https://en.wikipedia.org/wiki/PascalABC.NET" },
        { kind: "wikipedia", title: "Pascal Script", href: "https://en.wikipedia.org/wiki/Pascal_Script" },
        { kind: "homepage", title: "www.freepascal.org", href: "http://www.freepascal.org" },
        { kind: "wikipedia", title: "Component Pascal", href: "https://en.wikipedia.org/wiki/Component_Pascal" },
        { kind: "homepage", title: "blackboxframework.org", href: "http://blackboxframework.org" },
        { kind: "wikipedia", title: "Concurrent Pascal", href: "https://en.wikipedia.org/wiki/Concurrent_Pascal" },
        { kind: "wikipedia", title: "Pascal-P", href: "https://en.wikipedia.org/wiki/Pascal-P" },
        { kind: "wikipedia", title: "VSI Pascal", href: "https://en.wikipedia.org/wiki/VSI_Pascal" },
        { kind: "wikipedia", title: "GNU Pascal", href: "https://en.wikipedia.org/wiki/GNU_Pascal" },
        { kind: "wikipedia", title: "Apple Pascal", href: "https://en.wikipedia.org/wiki/Apple_Pascal" },
      ],
      references: {
        designed_by: [
          {
            href: "https://web.archive.org/web/20240229162502/https://books.google.com/books?id=RzoEAAAAMBAJ&pg=PT27#v=onepage&q&f=false",
            title: "Borland and Microsoft Enter the Object-Oriented Pascal Ring",
          },
        ],
        developers: [
          {
            href: "https://web.archive.org/web/20240229162502/https://books.google.com/books?id=RzoEAAAAMBAJ&pg=PT27#v=onepage&q&f=false",
            title: "Borland and Microsoft Enter the Object-Oriented Pascal Ring",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20120627043929/http://java.sun.com/docs/white/delegates.html",
            title: 'About Microsoft\'s "Delegates"',
          },
          {
            href: "https://web.archive.org/web/20101229090912/http://www.fscript.org/prof/javapassport.pdf",
            title: "History of Java",
          },
          {
            href: "https://web.archive.org/web/20150716194245/http://queue.acm.org/detail.cfm?id=1017013",
            title: "A Conversation with James Gosling – ACM Queue",
          },
        ],
        latest_release: [
          {
            href: "https://web.archive.org/web/20150430033749/http://apple2info.net/index.php?title=Apple_II_Pascal",
            title: "Apple II Pascal - apple2info.net: Apple II Information",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", date: "2000-01-01", kind: "first" },
        { version: "3.0", kind: "stable" },
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "3.2.2", date: "2021-05-20", kind: "stable" },
        { version: "3.3.1", kind: "preview" },
        { version: "unknown", date: "1974-01-01", kind: "first" },
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "2.2", date: "1987-01-01", kind: "other" },
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "1.3", date: "1984-01-01", kind: "other" },
      ],
      extensions: [".p", ".pp", ".pas", ".pas"],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pascal_Script_3_Lazarus_IDE.png/300px-Pascal_Script_3_Lazarus_IDE.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Free_Pascal_3.2.2_help_screen.png/220px-Free_Pascal_3.2.2_help_screen.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/UCSD_p-System.svg" },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Apple_Pascal_1.2.jpg/300px-Apple_Pascal_1.2.jpg",
        },
      ],
    },
    {
      dialects: ["pl+ada", "pl+clarion", "pl+delphi", "pl+oxygene", "pl+pascal", "pl+planc"],
      implementations: [
        "pl+.net",
        "pl+arm-architecture-family",
        "pl+berkeley-software-distribution",
        "pl+cdc-6000",
        "pl+cocoa",
        "pl+delphi",
        "pl+ibm-system-slash370",
        "pl+ict-1900-series",
        "pl+java",
        "pl+javascript",
        "pl+mips-architecture",
        "pl+oxygene",
        "pl+pascal",
        "pl+pdp-10",
        "pl+pdp-11",
        "pl+powerpc",
        "pl+ppc64",
        "pl+sparc",
        "pl+x86",
      ],
      influences: ["pl+algol", "pl+oberon", "pl+oberon-2", "pl+pascal", "pl+simula", "pl+simula-67", "pl+smalltalk"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: [
        "para+component",
        "para+concurrent",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+modular",
        "para+objects",
        "para+scripting",
        "para+structured",
      ],
      people: [
        ["person+anders-hejlsberg", "designer"],
        ["person+free-pascal", "developer"],
        ["person+larry-tesler", "designer"],
        ["person+niklaus-wirth", "designer"],
        ["person+san-diego", "developer"],
      ],
      platforms: [
        "platf+.net",
        "platf+arm",
        "platf+dec",
        "platf+jvm",
        "platf+linux",
        "platf+mac",
        "platf+mips",
        "platf+win",
        "platf+x86",
      ],
      typeSystems: ["tsys+dynamic", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
