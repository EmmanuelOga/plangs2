import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+apple-pascal", "Apple Pascal", {
    name: "Apple Pascal",
    websites: [{ kind: "wikipedia", title: "Apple Pascal", href: "https://en.wikipedia.org/wiki/Apple_Pascal" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Apple_Pascal_1.2.jpg/300px-Apple_Pascal_1.2.jpg",
      },
    ],
    releases: [
      { version: "unknown", date: "1979-01-01", kind: "first" },
      { version: "1.3", date: "1984-01-01", kind: "other" },
    ],
    references: {
      latest_release: [
        {
          href: "https://web.archive.org/web/20150430033749/http://apple2info.net/index.php?title=Apple_II_Pascal",
          title: "Apple II Pascal - apple2info.net: Apple II Information",
        },
      ],
    },
  });

  /**/

  lb.define(
    "pl+component-pascal",
    "Component Pascal",
    {
      name: "Component Pascal",
      websites: [
        { kind: "wikipedia", title: "Component Pascal", href: "https://en.wikipedia.org/wiki/Component_Pascal" },
        { kind: "homepage", title: "blackboxframework.org", href: "http://blackboxframework.org" },
      ],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "first" }],
    },
    {
      influences: ["pl+oberon", "pl+oberon-2", "pl+pascal"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+concurrent-pascal",
    "Concurrent Pascal",
    {
      name: "Concurrent Pascal",
      websites: [
        { kind: "wikipedia", title: "Concurrent Pascal", href: "https://en.wikipedia.org/wiki/Concurrent_Pascal" },
      ],
      releases: [{ version: "unknown", date: "1974-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol-60", "pl+pascal", "pl+simula"],
      paradigms: ["para+concurrent", "para+imperative", "para+structured"],
      platforms: ["platf+dec"],
      typeSystems: ["tsys+dynamic", "tsys+safe", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+free-pascal",
    "Free Pascal",
    {
      name: "Free Pascal",
      websites: [
        { kind: "wikipedia", title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal" },
        { kind: "homepage", title: "www.freepascal.org", href: "http://www.freepascal.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Free_Pascal_3.2.2_help_screen.png/220px-Free_Pascal_3.2.2_help_screen.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "3.2.2", date: "2021-05-20", kind: "stable" },
        { version: "3.3.1", kind: "preview" },
      ],
    },
    { licenses: ["lic+gpl", "lic+lgpl"] },
  );

  /**/

  lb.define("pl+gnu-pascal", "GNU Pascal", {
    name: "GNU Pascal",
    websites: [{ kind: "wikipedia", title: "GNU Pascal", href: "https://en.wikipedia.org/wiki/GNU_Pascal" }],
  });

  /**/

  lb.define(
    "pl+object-pascal",
    "Object Pascal",
    {
      name: "Object Pascal",
      websites: [{ kind: "wikipedia", title: "Object Pascal", href: "https://en.wikipedia.org/wiki/Object_Pascal" }],
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
      },
      releases: [{ version: "unknown", date: "1986-01-01", kind: "first" }],
      extensions: [".p", ".pp", ".pas"],
    },
    {
      dialects: ["pl+delphi", "pl+free-pascal", "pl+oxygene", "pl+pascalabc.net", "pl+turbo-pascal"],
      implementations: [
        "pl+.net",
        "pl+arm-architecture-family",
        "pl+cocoa",
        "pl+delphi",
        "pl+free-pascal",
        "pl+java",
        "pl+javascript",
        "pl+mips-architecture",
        "pl+oxygene",
        "pl+powerpc",
        "pl+ppc64",
        "pl+sparc",
        "pl+x86",
      ],
      influences: ["pl+pascal", "pl+simula", "pl+smalltalk"],
      paradigms: [
        "para+component",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+objects",
        "para+structured",
      ],
      people: [
        ["person+anders-hejlsberg", "designer"],
        ["person+borland-international", "developer"],
        ["person+larry-tesler", "designer"],
        ["person+niklaus-wirth", "designer"],
      ],
      platforms: ["platf+.net", "platf+arm", "platf+jvm", "platf+mips", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+safe", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+pascal",
    "Pascal",
    {
      name: "Pascal",
      websites: [
        { kind: "wikipedia", title: "Pascal", href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
      references: {
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
      },
    },
    {
      dialects: [
        "pl+ada",
        "pl+clarion",
        "pl+concurrent-pascal",
        "pl+delphi",
        "pl+object-pascal",
        "pl+planc",
        "pl+turbo-pascal",
        "pl+ucsd-pascal",
      ],
      implementations: [
        "pl+berkeley-software-distribution",
        "pl+cdc-6000",
        "pl+delphi",
        "pl+free-pascal",
        "pl+gnu-pascal",
        "pl+ibm-system-slash370",
        "pl+ict-1900-series",
        "pl+pascal-p",
        "pl+pdp-10",
        "pl+pdp-11",
        "pl+vsi-pascal",
      ],
      influences: ["pl+algol", "pl+algol-60", "pl+algol-w", "pl+simula", "pl+simula-67"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+niklaus-wirth", "designer"]],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+pascal-p", "Pascal-P", {
    name: "Pascal-P",
    websites: [{ kind: "wikipedia", title: "Pascal-P", href: "https://en.wikipedia.org/wiki/Pascal-P" }],
  });

  /**/

  lb.define(
    "pl+pascal-script",
    "Pascal Script",
    {
      name: "Pascal Script",
      websites: [{ kind: "wikipedia", title: "Pascal Script", href: "https://en.wikipedia.org/wiki/Pascal_Script" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pascal_Script_3_Lazarus_IDE.png/300px-Pascal_Script_3_Lazarus_IDE.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2000-01-01", kind: "first" },
        { version: "3.0", kind: "stable" },
      ],
      extensions: [".pas"],
    },
    {
      influences: ["pl+object-pascal", "pl+pascal"],
      paradigms: ["para+imperative", "para+objects", "para+scripting"],
      people: [["person+free-pascal", "developer"]],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

  lb.define("pl+pascalabc.net", "PascalABC.NET", {
    name: "PascalABC.NET",
    websites: [{ kind: "wikipedia", title: "PascalABC.NET", href: "https://en.wikipedia.org/wiki/PascalABC.NET" }],
  });

  /**/

  lb.define("pl+turbo-pascal", "Turbo Pascal", {
    name: "Turbo Pascal",
    websites: [{ kind: "wikipedia", title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal" }],
  });

  /**/

  lb.define(
    "pl+ucsd-pascal",
    "UCSD Pascal",
    {
      name: "UCSD Pascal",
      websites: [{ kind: "wikipedia", title: "UCSD Pascal", href: "https://en.wikipedia.org/wiki/UCSD_Pascal" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/UCSD_p-System.svg" }],
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "2.2", date: "1987-01-01", kind: "other" },
      ],
    },
    { people: [["person+san-diego", "developer"]] },
  );

  /**/

  lb.define("pl+vsi-pascal", "VSI Pascal", {
    name: "VSI Pascal",
    websites: [{ kind: "wikipedia", title: "VSI Pascal", href: "https://en.wikipedia.org/wiki/VSI_Pascal" }],
  });

  /**/
}
