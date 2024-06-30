import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+-mega",
    "Omega",
    {
      name: "Omega",
      websites: [
        { kind: "wikipedia", title: "Omega", href: "https://en.wikipedia.org/wiki/%CE%A9mega" },
        { kind: "homepage", title: "Omega download page", href: "http://web.cecs.pdx.edu/~sheard/Omega/" },
      ],
      releases: [{ version: "1.5", date: "2011-01-01", kind: "stable" }],
    },
    { licenses: ["lic+bsd-n"] },
  );

  lb.define("pl+.net", "CLI", {
    name: "CLI",
    websites: [
      { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
    ],
  });

  lb.define("pl+.net-framework", ".NET Framework", {
    name: ".NET Framework",
    websites: [{ kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" }],
  });

  lb.define("pl+.net-framework-sdk", ".NET Framework SDK", {
    name: ".NET Framework SDK",
    websites: [
      { kind: "wikipedia", title: ".NET Framework SDK", href: "https://en.wikipedia.org/wiki/.NET_Framework_SDK" },
    ],
  });

  lb.define("pl+.ql", ".QL", {
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  lb.define(
    "pl+a-",
    "A#",
    {
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A♯", href: "https://en.wikipedia.org/wiki/A%E2%99%AF_(Axiom)" }],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "stable" },
        { version: "unknown", date: "2014-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+pascal", "pl+haskell"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+multi", "para+objects", "para+functional"],
      people: ["person+stephen-m-watt"],
      platforms: [
        "platf+cross-platform",
        "platf+dec",
        "platf+ia-32",
        "platf+intel-80286",
        "platf+linux",
        "platf+mach",
        "platf+dos",
        "platf+win",
        "platf+openvms",
        "platf+vm",
      ],
    },
  );

  lb.define(
    "pl+a-sharp",
    "A#",
    {
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A#", href: "https://en.wikipedia.org/wiki/A_Sharp_(.NET)" }],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+.net", "platf+cross-platform"] },
  );

  lb.define(
    "pl+abap",
    "ABAP/4",
    {
      name: "ABAP/4",
      websites: [{ kind: "wikipedia", title: "ABAP/4", href: "https://en.wikipedia.org/wiki/ABAP" }],
      releases: [{ version: "7.58", date: "2023-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+sap"],
      paradigms: ["para+objects", "para+structured", "para+imperative"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+abc",
    "ABC",
    {
      name: "ABC",
      websites: [{ kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" }],
      releases: [{ version: "1.05.02", date: "1990-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+setl", "pl+algol", "pl+isetl", "pl+setl2"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+lambert-meertens", "person+steven-pemberton", "person+centrum-wiskunde"],
      platforms: ["platf+unix", "platf+win", "platf+mac", "platf+atari"],
      typeSystems: ["tsys+strong", "tsys+polymorphic"],
    },
  );

  lb.define(
    "pl+action-",
    "Action!",
    {
      name: "Action!",
      websites: [
        { kind: "wikipedia", title: "Action!", href: "https://en.wikipedia.org/wiki/Action!_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Actionscr.png/220px-Actionscr.png" },
      ],
    },
    { platforms: ["platf+atari"] },
  );

  lb.define("pl+active-scripting", "Active Scripting", {
    name: "Active Scripting",
    websites: [
      { kind: "wikipedia", title: "Active Scripting", href: "https://en.wikipedia.org/wiki/Active_Scripting" },
    ],
  });

  lb.define(
    "pl+active-server-pages",
    "ASP",
    {
      name: "ASP",
      websites: [{ kind: "wikipedia", title: "ASP", href: "https://en.wikipedia.org/wiki/Active_Server_Pages" }],
    },
    { influences: ["pl+php"] },
  );

  lb.define("pl+actor-based-concurrent", "ABCL", {
    name: "ABCL",
    websites: [
      { kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Actor-Based_Concurrent_Language" },
    ],
  });

  lb.define(
    "pl+actor-model",
    "actor model",
    {
      name: "actor model",
      websites: [{ kind: "wikipedia", title: "Actors", href: "https://en.wikipedia.org/wiki/Actor_model" }],
    },
    { influences: ["pl+mdl"] },
  );

  lb.define("pl+actor-model-middle-history", "Act1", {
    name: "Act1",
    websites: [
      {
        kind: "wikipedia",
        title: "Act1",
        href: "https://en.wikipedia.org/wiki/Actor_model_middle_history#Actor_programming_languages",
      },
    ],
  });

  lb.define(
    "pl+adobe-air",
    "Adobe AIR",
    {
      name: "Adobe AIR",
      websites: [{ kind: "wikipedia", title: "Adobe AIR", href: "https://en.wikipedia.org/wiki/Adobe_AIR" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Adobe_AIR_logo.svg" }],
      releases: [
        { version: "51.0.1.3", date: "2024-01-01", kind: "stable" },
        { version: "33.1.1.932", kind: "preview" },
      ],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+ia-32", "platf+x86-64", "platf+arm", "platf+mips"] },
  );

  lb.define("pl+adobe-flash-player", "Adobe Flash Player", {
    name: "Adobe Flash Player",
    websites: [
      { kind: "wikipedia", title: "Adobe Flash Player", href: "https://en.wikipedia.org/wiki/Adobe_Flash_Player" },
    ],
  });

  lb.define(
    "pl+advpl",
    "AdvPL",
    { name: "AdvPL", websites: [{ kind: "wikipedia", title: "AdvPL", href: "https://en.wikipedia.org/wiki/AdvPL" }] },
    { influences: ["pl+xbase"] },
  );

  lb.define(
    "pl+agentcubes",
    "AgentCubes",
    {
      name: "AgentCubes",
      websites: [{ kind: "wikipedia", title: "AgentCubes", href: "https://en.wikipedia.org/wiki/AgentCubes" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AgentCubes_user_interface.png/121px-AgentCubes_user_interface.png",
        },
      ],
      releases: [{ version: "3.0", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+agentsheets", "pl+lisp", "pl+logo", "pl+smalltalk"],
      paradigms: ["para+objects", "para+educational"],
      people: ["person+alexander-repenning"],
    },
  );

  lb.define(
    "pl+agentsheets",
    "AgentSheets",
    {
      name: "AgentSheets",
      websites: [{ kind: "wikipedia", title: "AgentSheets", href: "https://en.wikipedia.org/wiki/AgentSheets" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Agentsheets_IDE.jpg" }],
      releases: [{ version: "4.0", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lisp", "pl+logo", "pl+smalltalk", "pl+karel", "pl+objectlogo"],
      paradigms: ["para+objects", "para+educational"],
      people: ["person+alexander-repenning"],
      platforms: ["platf+jvm"],
    },
  );

  lb.define(
    "pl+agilent-vee",
    "Keysight VEE",
    {
      name: "Keysight VEE",
      websites: [
        { kind: "wikipedia", title: "Keysight VEE", href: "https://en.wikipedia.org/wiki/Agilent_VEE" },
        {
          kind: "homepage",
          title: "https://www.keysight.com/us/en/product/W4000D/vee-pro-9-33.html",
          href: "https://www.keysight.com/us/en/product/W4000D/vee-pro-9-33.html",
        },
      ],
    },
    { licenses: ["lic+proprietary", "lic+commercial"] },
  );

  lb.define(
    "pl+agora",
    "Agora",
    {
      name: "Agora",
      websites: [
        { kind: "wikipedia", title: "Agora", href: "https://en.wikipedia.org/wiki/Agora_(programming_language)" },
      ],
    },
    { influences: ["pl+self"] },
  );

  lb.define(
    "pl+aimaco",
    "AIMACO",
    {
      name: "AIMACO",
      websites: [{ kind: "wikipedia", title: "AIMACO", href: "https://en.wikipedia.org/wiki/AIMACO" }],
    },
    { influences: ["pl+flow-matic", "pl+comtran"], paradigms: ["para+imperative"] },
  );

  lb.define("pl+aimms", "AIMMS", {
    name: "AIMMS",
    websites: [
      { kind: "wikipedia", title: "AIMMS", href: "https://en.wikipedia.org/wiki/AIMMS" },
      { kind: "homepage", title: "AIMMS home page", href: "http://www.aimms.com" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/AIMMS_logo.png/121px-AIMMS_logo.png" },
    ],
  });

  lb.define(
    "pl+akka",
    "Akka",
    {
      name: "Akka",
      websites: [{ kind: "wikipedia", title: "Akka", href: "https://en.wikipedia.org/wiki/Akka_(toolkit)" }],
    },
    { influences: ["pl+erlang"] },
  );

  lb.define(
    "pl+aldor",
    "Aldor",
    {
      name: "Aldor",
      websites: [{ kind: "wikipedia", title: "Aldor", href: "https://en.wikipedia.org/wiki/Aldor" }],
      releases: [
        { version: "1.0.3", kind: "stable" },
        { version: "1.1.0", kind: "preview" },
      ],
    },
    {
      implementations: ["pl+axiom"],
      influences: ["pl+a-", "pl+pascal", "pl+haskell"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative", "para+dependent", "para+logic"],
      platforms: ["platf+axiom", "platf+linux", "platf+win"],
    },
  );

  lb.define(
    "pl+alef",
    "Alef",
    {
      name: "Alef",
      websites: [
        { kind: "wikipedia", title: "Alef", href: "https://en.wikipedia.org/wiki/Alef_(programming_language)" },
      ],
    },
    {
      influences: ["pl+c", "pl+newsqueak"],
      paradigms: ["para+compiled", "para+concurrent", "para+structured"],
      platforms: ["platf+plan9"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+alf", "ALF", {
    name: "ALF",
    websites: [{ kind: "wikipedia", title: "ALF", href: "https://en.wikipedia.org/wiki/ALF_(proof_assistant)" }],
  });

  lb.define(
    "pl+algebraic-logic-functional",
    "ALF",
    {
      name: "ALF",
      websites: [
        {
          kind: "wikipedia",
          title: "ALF",
          href: "https://en.wikipedia.org/wiki/Algebraic_Logic_Functional_programming_language",
        },
      ],
    },
    { influences: ["pl+prolog"], paradigms: ["para+multi", "para+logic", "para+functional"] },
  );

  lb.define(
    "pl+alice",
    "Alice",
    {
      name: "Alice",
      websites: [
        { kind: "wikipedia", title: "Alice", href: "https://en.wikipedia.org/wiki/Alice_(programming_language)" },
      ],
      releases: [{ version: "1.4", date: "2007-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ml", "pl+oz"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+imperative",
        "para+functional",
        "para+distributed",
        "para+concurrent",
        "para+constraint",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+alma-0",
    "Alma-0",
    {
      name: "Alma-0",
      websites: [{ kind: "wikipedia", title: "Alma-0", href: "https://en.wikipedia.org/wiki/Alma-0" }],
    },
    {
      influences: ["pl+modula"],
      paradigms: ["para+multi", "para+constraint", "para+imperative", "para+logic"],
      people: ["person+krzysztof-apt", "person+centrum-wiskunde"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define("pl+alphard", "Alphard", {
    name: "Alphard",
    websites: [
      { kind: "wikipedia", title: "Alphard", href: "https://en.wikipedia.org/wiki/Alphard_(programming_language)" },
    ],
  });

  lb.define(
    "pl+ambienttalk",
    "AmbientTalk",
    {
      name: "AmbientTalk",
      websites: [{ kind: "wikipedia", title: "AmbientTalk", href: "https://en.wikipedia.org/wiki/AmbientTalk" }],
      releases: [{ version: "2.19", date: "2011-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+smalltalk", "pl+self", "pl+scheme", "pl+e", "pl+actor-based-concurrent"],
      paradigms: ["para+objects", "para+prototypes", "para+concurrent", "para+event", "para+reflection"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+amesim",
    "AMESim",
    {
      name: "AMESim",
      websites: [{ kind: "wikipedia", title: "Simcenter Amesim", href: "https://en.wikipedia.org/wiki/AMESim" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg" }],
      releases: [{ version: "unknown", date: "2310-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+amiga-e",
    "Amiga E",
    {
      name: "Amiga E",
      websites: [
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E#PortablE" },
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E" },
      ],
    },
    {
      influences: ["pl+ada", "pl+cpp", "pl+lisp"],
      licenses: ["lic+freeware"],
      paradigms: ["para+multi", "para+functional", "para+objects", "para+imperative"],
      platforms: ["platf+amiga"],
    },
  );

  lb.define(
    "pl+ampl",
    "AMPL",
    {
      name: "AMPL",
      websites: [{ kind: "wikipedia", title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/b6/AMPL_%28textbook_cover%29.jpg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+awk", "pl+c"],
      licenses: ["lic+proprietary", "lic+free-and-open-source"],
      paradigms: ["para+multi", "para+dec", "para+imperative"],
      people: ["person+robert-fourer", "person+brian-kernighan"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define("pl+ansi-c", "ANSI C", {
    name: "ANSI C",
    websites: [{ kind: "wikipedia", title: "ANSI C", href: "https://en.wikipedia.org/wiki/ANSI_C" }],
  });

  lb.define(
    "pl+ap",
    "A+",
    {
      name: "A+",
      websites: [{ kind: "wikipedia", title: "A+", href: "https://en.wikipedia.org/wiki/A%2B_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Aplus_logo.jpg/121px-Aplus_logo.jpg",
        },
      ],
      releases: [{ version: "4.22", date: "2008-01-01", kind: "stable" }],
      extensions: ["..", ".+", ".a", ".m"],
    },
    {
      influences: ["pl+apl"],
      licenses: ["lic+gpl"],
      paradigms: ["para+array"],
      people: ["person+arthur-whitney", "person+morgan-stanley"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+apache-flex",
    "Apache Flex",
    {
      name: "Apache Flex",
      websites: [{ kind: "wikipedia", title: "Apache Flex", href: "https://en.wikipedia.org/wiki/Apache_Flex" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Apache_Flex_logo.svg" }],
      releases: [{ version: "4.16.1", date: "2017-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache", "lic+mozilla-public"] },
  );

  lb.define(
    "pl+apache-groovy",
    "Apache Groovy",
    {
      name: "Apache Groovy",
      websites: [{ kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Apache_Groovy" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
      extensions: [".groovy", ".gvy", ".gy", ".gsh"],
    },
    {
      implementations: ["pl+gradle", "pl+grails"],
      influences: ["pl+java", "pl+python", "pl+ruby", "pl+smalltalk"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+functional", "para+aspect", "para+scripting"],
      people: ["person+james-strachan"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+duck"],
    },
  );

  lb.define(
    "pl+apache-pig",
    "Apache Pig",
    {
      name: "Apache Pig",
      websites: [{ kind: "wikipedia", title: "Apache Pig", href: "https://en.wikipedia.org/wiki/Apache_Pig" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Apache_Pig_Logo.svg" }],
      releases: [{ version: "0.17.0", date: "2017-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define(
    "pl+aplx",
    "APLX",
    {
      name: "APLX",
      websites: [
        { kind: "wikipedia", title: "APLX", href: "https://en.wikipedia.org/wiki/APLX" },
        { kind: "homepage", title: "www.dyalog.com/aplx.htm", href: "http://www.dyalog.com/aplx.htm" },
      ],
      releases: [{ version: "unknown", date: "2002-01-01", kind: "first" }],
    },
    {
      licenses: ["lic+proprietary", "lic+freeware"],
      paradigms: ["para+array", "para+functional", "para+structured", "para+modular", "para+objects"],
      platforms: ["platf+ia-32", "platf+win", "platf+linux", "platf+mac"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+app-inventor-for-android",
    "MIT App Inventor",
    {
      name: "MIT App Inventor",
      websites: [
        {
          kind: "wikipedia",
          title: "MIT App Inventor",
          href: "https://en.wikipedia.org/wiki/App_Inventor_for_Android_(programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/App_Inventor_2.png/220px-App_Inventor_2.png",
        },
      ],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+cc", "lic+apache"] },
  );

  lb.define(
    "pl+applescript",
    "AppleScript",
    {
      name: "AppleScript",
      websites: [{ kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" }],
      releases: [{ version: "2.8", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+hypertalk", "pl+smalltalk", "pl+xtalk"],
      licenses: ["lic+proprietary", "lic+apple-public-source"],
      paradigms: ["para+natural", "para+scripting"],
      platforms: ["platf+mac"],
      typeSystems: ["tsys+weak", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+apt",
    "APT",
    {
      name: "APT",
      websites: [{ kind: "wikipedia", title: "APT", href: "https://en.wikipedia.org/wiki/APT_(programming_language)" }],
    },
    { paradigms: ["para+numerical"], people: ["person+douglas-t-ross"] },
  );

  lb.define("pl+arexx", "ARexx", {
    name: "ARexx",
    websites: [{ kind: "wikipedia", title: "ARexx", href: "https://en.wikipedia.org/wiki/ARexx" }],
  });

  lb.define(
    "pl+argus",
    "Argus",
    {
      name: "Argus",
      websites: [
        { kind: "wikipedia", title: "Argus", href: "https://en.wikipedia.org/wiki/Argus_(programming_language)" },
      ],
    },
    { influences: ["pl+clu"] },
  );

  lb.define("pl+arith-matic", "ARITH-MATIC", {
    name: "ARITH-MATIC",
    websites: [{ kind: "wikipedia", title: "ARITH-MATIC", href: "https://en.wikipedia.org/wiki/ARITH-MATIC" }],
  });

  lb.define(
    "pl+arkts",
    "ArkTS",
    {
      name: "ArkTS",
      websites: [{ kind: "wikipedia", title: "ArkTS", href: "https://en.wikipedia.org/wiki/ArkTS" }],
      releases: [{ version: "4.1.7.3", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+typescript",
        "pl+swift",
        "pl+objective-c",
        "pl+javascript",
        "pl+c-sharp",
        "pl+f-sharp",
        "pl+java",
        "pl+actionscript",
        "pl+atscript",
        "pl+assemblyscript",
      ],
      licenses: ["lic+apache", "lic+proprietary"],
      paradigms: ["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"],
      platforms: ["platf+mac", "platf+win", "platf+android", "platf+ios"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );

  lb.define("pl+arm-architecture-family", "ARM", {
    name: "ARM",
    websites: [{ kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" }],
  });

  lb.define("pl+arpanet", "ARPAnet", {
    name: "ARPAnet",
    websites: [{ kind: "wikipedia", title: "ARPAnet", href: "https://en.wikipedia.org/wiki/ARPAnet" }],
  });

  lb.define(
    "pl+asm.js",
    "asm.js",
    {
      name: "asm.js",
      websites: [
        { kind: "wikipedia", title: "asm.js", href: "https://en.wikipedia.org/wiki/Asm.js" },
        { kind: "homepage", title: "asmjs.org", href: "http://asmjs.org" },
      ],
      releases: [{ version: "unknown", date: "2013-03-21", kind: "first" }],
    },
    { influences: ["pl+javascript"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+asp.net",
    "ASP.NET",
    {
      name: "ASP.NET",
      websites: [{ kind: "wikipedia", title: "ASP.NET (software)", href: "https://en.wikipedia.org/wiki/ASP.NET" }],
      releases: [{ version: "4.8.1", date: "2022-01-01", kind: "stable" }],
      extensions: [".aspx", ".cshtml", ".vbhtml"],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+.net"] },
  );

  lb.define(
    "pl+atlas-autocode",
    "Atlas Autocode",
    {
      name: "Atlas Autocode",
      websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
    },
    {
      implementations: ["pl+algol", "pl+edinburgh-imp"],
      influences: ["pl+algol"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+tony-brooker"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+ats",
    "ATS",
    {
      name: "ATS",
      websites: [{ kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
      releases: [{ version: "0.4.2", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+dependent-ml", "pl+ml", "pl+ocaml", "pl+cpp"],
      licenses: ["lic+gpl"],
      paradigms: [
        "para+multi",
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+concurrent",
        "para+modular",
      ],
      typeSystems: ["tsys+static", "tsys+dependent"],
    },
  );

  lb.define(
    "pl+atscript",
    "AtScript",
    {
      name: "AtScript",
      websites: [{ kind: "wikipedia", title: "AtScript", href: "https://en.wikipedia.org/wiki/AtScript" }],
    },
    { influences: ["pl+typescript"] },
  );

  lb.define(
    "pl+autoit",
    "AutoIt",
    {
      name: "AutoIt",
      websites: [{ kind: "wikipedia", title: "AutoIt", href: "https://en.wikipedia.org/wiki/AutoIt" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Autoitlogo.png/121px-Autoitlogo.png",
        },
      ],
      releases: [{ version: "3.3.16.1", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+freeware"],
      paradigms: ["para+imperative", "para+functional", "para+reflective"],
      platforms: ["platf+ia-32", "platf+x64", "platf+win"],
    },
  );

  lb.define(
    "pl+awk",
    "AWK",
    {
      name: "AWK",
      websites: [{ kind: "wikipedia", title: "AWK", href: "https://en.wikipedia.org/wiki/AWK" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The-AWK-Programming-Language.svg" },
      ],
      releases: [{ version: "1003.1", date: "1003-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+sed", "pl+snobol"],
      paradigms: ["para+scripting", "para+imperative", "para+data"],
      people: ["person+alfred-aho", "person+peter-weinberger", "person+brian-kernighan"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+axiom",
    "Axiom",
    {
      name: "Axiom",
      websites: [
        {
          kind: "wikipedia",
          title: "Axiom computer algebra system",
          href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
        },
      ],
      releases: [
        { version: "unknown", date: "2015-01-01", kind: "stable" },
        { version: "unknown", date: "2022-01-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+bsd-s"] },
  );

  lb.define(
    "pl+axum",
    "Axum",
    {
      name: "Axum",
      websites: [
        { kind: "wikipedia", title: "Axum", href: "https://en.wikipedia.org/wiki/Axum_(programming_language)" },
        { kind: "homepage", title: "Axum at DevLabs", href: "http://msdn.microsoft.com/en-us/devlabs/dd795202.aspx" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Axum_Banner.png/150px-Axum_Banner.png",
        },
      ],
      releases: [{ version: "unknown", date: "2009-01-01", kind: "stable" }],
    },
    { licenses: ["lic+closed-source"], platforms: ["platf+x86", "platf+x86-64", "platf+win"] },
  );

  lb.define(
    "pl+b",
    "B",
    {
      name: "B",
      websites: [{ kind: "wikipedia", title: "B", href: "https://en.wikipedia.org/wiki/B_(programming_language)" }],
    },
    { influences: ["pl+bcpl", "pl+pl-slash", "pl+tmg"], people: ["person+ken-thompson", "person+dennis-ritchie"] },
  );

  lb.define("pl+b-prolog", "B-Prolog", {
    name: "B-Prolog",
    websites: [{ kind: "wikipedia", title: "B-Prolog", href: "https://en.wikipedia.org/wiki/B-Prolog" }],
  });

  lb.define(
    "pl+bally-astrocade",
    "Astro BASIC",
    {
      name: "Astro BASIC",
      websites: [
        { kind: "wikipedia", title: "Astro BASIC", href: "https://en.wikipedia.org/wiki/Bally_Astrocade#Astro_BASIC" },
      ],
    },
    { influences: ["pl+basic"] },
  );

  lb.define("pl+bazel", "Starlark", {
    name: "Starlark",
    websites: [{ kind: "wikipedia", title: "Starlark", href: "https://en.wikipedia.org/wiki/Bazel_(software)" }],
  });

  lb.define(
    "pl+bc",
    "bc",
    {
      name: "bc",
      websites: [{ kind: "wikipedia", title: "bc", href: "https://en.wikipedia.org/wiki/Bc_(programming_language)" }],
    },
    { people: ["person+robert-morris", "person+lorinda-cherry"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+bcpl",
    "BCPL",
    { name: "BCPL", websites: [{ kind: "wikipedia", title: "BCPL", href: "https://en.wikipedia.org/wiki/BCPL" }] },
    {
      influences: ["pl+cpl", "pl+combined"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+martin-richards"],
    },
  );

  lb.define(
    "pl+beanshell",
    "BeanShell",
    {
      name: "BeanShell",
      websites: [{ kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" }],
      releases: [{ version: "2.1.1", date: "2022-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+java"],
      influences: ["pl+java", "pl+javascript", "pl+perl"],
      licenses: ["lic+apache", "lic+sun-public", "lic+lgpl"],
      paradigms: ["para+objects", "para+scripting"],
      platforms: ["platf+jvm", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+befunge",
    "Befunge",
    {
      name: "Befunge",
      websites: [{ kind: "wikipedia", title: "Befunge", href: "https://en.wikipedia.org/wiki/Befunge" }],
    },
    { influences: ["pl+forth", "pl+esoteric"] },
  );

  lb.define("pl+begriffsschrift", "Begriffsschrift", {
    name: "Begriffsschrift",
    websites: [{ kind: "wikipedia", title: "Begriffsschrift", href: "https://en.wikipedia.org/wiki/Begriffsschrift" }],
  });

  lb.define("pl+berkeley-software-distribution", "BSD", {
    name: "BSD",
    websites: [
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/Berkeley_Software_Distribution" },
    ],
  });

  lb.define(
    "pl+beta",
    "BETA",
    {
      name: "BETA",
      websites: [
        { kind: "wikipedia", title: "BETA", href: "https://en.wikipedia.org/wiki/BETA_(programming_language)" },
      ],
    },
    {
      influences: ["pl+simula", "pl+simula-67", "pl+simula67"],
      paradigms: ["para+objects"],
      people: ["person+birger-m-ller-pedersen", "person+kristen-nygaard"],
    },
  );

  lb.define(
    "pl+bitcoin",
    "Bitcoin Script",
    {
      name: "Bitcoin Script",
      websites: [
        { kind: "wikipedia", title: "Bitcoin Script", href: "https://en.wikipedia.org/wiki/Bitcoin#Transactions" },
      ],
    },
    { influences: ["pl+forth"] },
  );

  lb.define(
    "pl+bliss",
    "BLISS",
    { name: "BLISS", websites: [{ kind: "wikipedia", title: "BLISS", href: "https://en.wikipedia.org/wiki/BLISS" }] },
    {
      influences: ["pl+algol"],
      paradigms: ["para+structured", "para+imperative"],
      people: ["person+w-a-wulf", "person+a-n-habermann"],
      platforms: ["platf+dec", "platf+mips", "platf+ia-32", "platf+ia-64", "platf+x86-64", "platf+cross-platform"],
    },
  );

  lb.define(
    "pl+bluespec--inc.",
    "Bluespec",
    {
      name: "Bluespec",
      websites: [{ kind: "wikipedia", title: "Bluespec", href: "https://en.wikipedia.org/wiki/Bluespec,_Inc." }],
      releases: [{ version: "2022.01", date: "2022-01-01", kind: "stable" }],
    },
    { dialects: ["pl+verilog"], paradigms: ["para+functional"] },
  );

  lb.define(
    "pl+boo",
    "Boo",
    {
      name: "Boo",
      websites: [{ kind: "wikipedia", title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BooLogo.png" }],
      releases: [{ version: "0.9.7", date: "2013-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c-sharp"],
      influences: ["pl+c-sharp", "pl+python"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects"],
      platforms: ["platf+.net", "platf+mono"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+duck"],
    },
  );

  lb.define(
    "pl+bs",
    "bs",
    {
      name: "bs",
      websites: [{ kind: "wikipedia", title: "bs", href: "https://en.wikipedia.org/wiki/Bs_(programming_language)" }],
    },
    { influences: ["pl+basic", "pl+snobol", "pl+c"], platforms: ["platf+unix"] },
  );

  lb.define("pl+burroughs-b5000", "Burroughs B5000", {
    name: "Burroughs B5000",
    websites: [{ kind: "wikipedia", title: "Burroughs B5000", href: "https://en.wikipedia.org/wiki/Burroughs_B5000" }],
  });

  lb.define(
    "pl+c-",
    "Cω",
    {
      name: "Cω",
      websites: [
        { kind: "wikipedia", title: "C--", href: "https://en.wikipedia.org/wiki/C--" },
        {
          kind: "homepage",
          title: "https://www.cs.tufts.edu/~nr/c--/index.html",
          href: "https://www.cs.tufts.edu/~nr/c--/index.html",
        },
        { kind: "wikipedia", title: "Cω", href: "https://en.wikipedia.org/wiki/C%CF%89" },
      ],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative"],
      people: ["person+simon-peyton-jones"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+c-shell",
    "csh",
    { name: "csh", websites: [{ kind: "wikipedia", title: "csh", href: "https://en.wikipedia.org/wiki/C_shell" }] },
    { influences: ["pl+c"] },
  );

  lb.define(
    "pl+c-slashal",
    "C/AL",
    { name: "C/AL", websites: [{ kind: "wikipedia", title: "C/AL", href: "https://en.wikipedia.org/wiki/C/AL" }] },
    { influences: ["pl+pascal"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+c-star",
    "C*",
    {
      name: "C*",
      websites: [{ kind: "wikipedia", title: "C*", href: "https://en.wikipedia.org/wiki/C*" }],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ansi-c", "pl+star-lisp"],
      paradigms: ["para+multi", "para+imperative", "para+parallel"],
      people: ["person+thinking-machines"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+cache-objectscript",
    "Caché ObjectScript",
    {
      name: "Caché ObjectScript",
      websites: [
        {
          kind: "wikipedia",
          title: "Caché ObjectScript",
          href: "https://en.wikipedia.org/wiki/Cach%C3%A9_ObjectScript",
        },
      ],
    },
    { influences: ["pl+mumps"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+cadence-skill",
    "SKILL",
    {
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/Cadence_SKILL" }],
    },
    {
      influences: ["pl+armed-bear-common-lisp", "pl+scheme", "pl+common-lisp", "pl+common-lisp-object-system"],
      paradigms: ["para+functional", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+cal",
    "CAL",
    {
      name: "CAL",
      websites: [{ kind: "wikipedia", title: "CAL", href: "https://en.wikipedia.org/wiki/CAL_(programming_language)" }],
    },
    { influences: ["pl+joss"] },
  );

  lb.define(
    "pl+caml",
    "Caml",
    {
      name: "Caml",
      websites: [{ kind: "wikipedia", title: "Caml", href: "https://en.wikipedia.org/wiki/Caml" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caml.gif/121px-Caml.gif" }],
      releases: [{ version: "0.75", date: "2002-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+ats", "pl+f-sharp", "pl+f-star", "pl+ocaml", "pl+reason"],
      influences: ["pl+ml"],
      licenses: ["lic+q-public", "lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative"],
      people: ["person+gerard-huet", "person+xavier-leroy"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+catia", "CATIA", {
    name: "CATIA",
    websites: [{ kind: "wikipedia", title: "CATIA", href: "https://en.wikipedia.org/wiki/CATIA" }],
  });

  lb.define(
    "pl+catrobat",
    "Catrobat",
    {
      name: "Catrobat",
      websites: [{ kind: "wikipedia", title: "Catrobat", href: "https://en.wikipedia.org/wiki/Catrobat" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Catrobat_logo.png/121px-Catrobat_logo.png",
        },
      ],
      releases: [{ version: "1.11", kind: "stable" }],
    },
    { influences: ["pl+scratch"], licenses: ["lic+gnu-affero-gpl"], typeSystems: ["tsys+dynamic"] },
  );

  lb.define("pl+cdc-6000", "CDC 6000", {
    name: "CDC 6000",
    websites: [{ kind: "wikipedia", title: "CDC 6000", href: "https://en.wikipedia.org/wiki/CDC_6000" }],
  });

  lb.define(
    "pl+cecil",
    "Cecil",
    {
      name: "Cecil",
      websites: [
        { kind: "wikipedia", title: "Cecil", href: "https://en.wikipedia.org/wiki/Cecil_(programming_language)" },
      ],
    },
    { paradigms: ["para+objects"], people: ["person+craig-chambers"] },
  );

  lb.define(
    "pl+cedar",
    "Cedar",
    {
      name: "Cedar",
      websites: [
        { kind: "wikipedia", title: "Mesa[1]", href: "https://en.wikipedia.org/wiki/Cedar_(programming_language)" },
      ],
      releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
    },
    { influences: ["pl+algol", "pl+cedar", "pl+mesa"] },
  );

  lb.define("pl+ceemac", "CEEMAC", {
    name: "CEEMAC",
    websites: [{ kind: "wikipedia", title: "CEEMAC", href: "https://en.wikipedia.org/wiki/CEEMAC" }],
  });

  lb.define(
    "pl+cg",
    "Cg/HLSL",
    {
      name: "Cg/HLSL",
      websites: [
        { kind: "wikipedia", title: "Cg/HLSL", href: "https://en.wikipedia.org/wiki/Cg_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HLSL-Examples-1.PNG/300px-HLSL-Examples-1.PNG",
        },
      ],
    },
    { influences: ["pl+c", "pl+renderman-shading"] },
  );

  lb.define(
    "pl+ch",
    "CH C/C++ interpreter",
    {
      name: "CH C/C++ interpreter",
      websites: [
        {
          kind: "wikipedia",
          title: "CH C/C++ interpreter",
          href: "https://en.wikipedia.org/wiki/Ch_(computer_programming)",
        },
      ],
      releases: [{ version: "8.0.0", date: "2017-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary", "lic+freeware", "lic+trialware"], platforms: ["platf+x86"] },
  );

  lb.define("pl+chakra", "Chakra", {
    name: "Chakra",
    websites: [{ kind: "wikipedia", title: "Chakra", href: "https://en.wikipedia.org/wiki/Chakra_(JScript_engine)" }],
  });

  lb.define(
    "pl+charm",
    "Charm",
    {
      name: "Charm",
      websites: [{ kind: "wikipedia", title: "Charm", href: "https://en.wikipedia.org/wiki/Charm_(language)" }],
    },
    {
      influences: ["pl+rtl-slash2", "pl+c", "pl+pascal"],
      paradigms: ["para+structured"],
      platforms: ["platf+risc-os"],
    },
  );

  lb.define("pl+chef", "Chef", {
    name: "Chef",
    websites: [{ kind: "wikipedia", title: "Chef", href: "https://en.wikipedia.org/wiki/Chef_(software)" }],
  });

  lb.define(
    "pl+chill",
    "CHILL",
    {
      name: "CHILL",
      websites: [{ kind: "wikipedia", title: "CHILL", href: "https://en.wikipedia.org/wiki/CHILL" }],
      releases: [{ version: "3.0", date: "2003-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cobol", "pl+pl-slash"],
      paradigms: ["para+imperative"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+chisel",
    "Chisel",
    {
      name: "Chisel",
      websites: [
        { kind: "wikipedia", title: "Chisel", href: "https://en.wikipedia.org/wiki/Chisel_(programming_language)" },
      ],
    },
    { influences: ["pl+scala"] },
  );

  lb.define(
    "pl+cilk",
    "CilkOpenCilkCilk Plus",
    {
      name: "CilkOpenCilkCilk Plus",
      websites: [
        { kind: "wikipedia", title: "Cilk", href: "https://en.wikipedia.org/wiki/Cilk" },
        {
          kind: "homepage",
          title: "http://cilkplus.org/",
          href: "https://web.archive.org/web/20210117031010/http://cilkplus.org/",
        },
      ],
      releases: [{ version: "1.2", date: "2013-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+structured", "para+parallel"],
      platforms: ["platf+unix", "platf+mac"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+cilk-plus",
    "Cilk Plus",
    {
      name: "Cilk Plus",
      websites: [
        { kind: "wikipedia", title: "CilkOpenCilkCilk Plus", href: "https://en.wikipedia.org/wiki/Cilk_Plus" },
        {
          kind: "homepage",
          title: "http://cilkplus.org/",
          href: "https://web.archive.org/web/20210117031010/http://cilkplus.org/",
        },
      ],
      releases: [{ version: "1.2", date: "2013-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+structured", "para+parallel"],
      platforms: ["platf+unix", "platf+mac"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+claire",
    "Claire",
    {
      name: "Claire",
      websites: [
        { kind: "wikipedia", title: "Claire", href: "https://en.wikipedia.org/wiki/Claire_(programming_language)" },
      ],
      releases: [{ version: "3.3.46", date: "2009-01-01", kind: "stable" }],
      extensions: [".cl"],
    },
    {
      influences: ["pl+smalltalk", "pl+setl", "pl+ops5", "pl+lisp", "pl+ml", "pl+c"],
      licenses: ["lic+permissive-free-licence"],
      paradigms: ["para+multi", "para+functional", "para+objects", "para+class", "para+production", "para+reflection"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+clarion",
    "Clarion",
    {
      name: "Clarion",
      websites: [
        { kind: "wikipedia", title: "Clarion", href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2018-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+structured", "para+objects"],
      platforms: ["platf+ia-32", "platf+dos", "platf+win"],
    },
  );

  lb.define(
    "pl+clean",
    "Clean",
    {
      name: "Clean",
      websites: [
        { kind: "wikipedia", title: "Clean", href: "https://en.wikipedia.org/wiki/Clean_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Clean_3.0_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ version: "3.1", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+miranda", "pl+haskell", "pl+iswim"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+clipper",
    "Clipper",
    {
      name: "Clipper",
      websites: [
        { kind: "wikipedia", title: "Clipper", href: "https://en.wikipedia.org/wiki/Clipper_(programming_language)" },
      ],
      releases: [{ version: "5.3", date: "1997-01-01", kind: "stable" }],
    },
    { influences: ["pl+dbase"], platforms: ["platf+dos"] },
  );

  lb.define(
    "pl+clips",
    "CLIPS",
    {
      name: "CLIPS",
      websites: [
        { kind: "wikipedia", title: "CLIPS", href: "https://en.wikipedia.org/wiki/CLIPS_(programming_language)" },
        { kind: "homepage", title: "https://clipsrules.net", href: "https://clipsrules.net" },
        { kind: "wikipedia", title: "CLIPS", href: "https://en.wikipedia.org/wiki/CLIPS" },
      ],
      releases: [{ version: "unknown", date: "1985-01-01", kind: "first" }],
    },
    { paradigms: ["para+expert"] },
  );

  lb.define(
    "pl+clozure-cl",
    "Clozure CL",
    {
      name: "Clozure CL",
      websites: [{ kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" }],
      releases: [{ version: "1.12.2", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache", "lic+lgpl"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+clu",
    "CLU",
    {
      name: "CLU",
      websites: [{ kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" }],
      releases: [{ version: "1.5", date: "1989-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+lisp", "pl+simula", "pl+alphard", "pl+simula-67", "pl+simula67"],
      paradigms: ["para+multi", "para+objects", "para+imperative"],
      people: ["person+barbara-liskov"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+cms-2",
    "CMS-2",
    {
      name: "CMS-2",
      websites: [
        { kind: "wikipedia", title: "CMS-2", href: "https://en.wikipedia.org/wiki/CMS-2_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/CMS-2Y_Programmers_Reference_Manual_for_the_AN_UYK-7_and_AN_UYK-43_Oct86.jpg/121px-CMS-2Y_Programmers_Reference_Manual_for_the_AN_UYK-7_and_AN_UYK-43_Oct86.jpg",
        },
      ],
    },
    { influences: ["pl+fortran", "pl+jovial", "pl+pl-slash"], paradigms: ["para+imperative"] },
  );

  lb.define("pl+cms-exec", "EXEC", {
    name: "EXEC",
    websites: [{ kind: "wikipedia", title: "EXEC", href: "https://en.wikipedia.org/wiki/CMS_EXEC" }],
  });

  lb.define(
    "pl+cmucl",
    "CMUCL",
    {
      name: "CMUCL",
      websites: [{ kind: "wikipedia", title: "CMUCL", href: "https://en.wikipedia.org/wiki/CMUCL" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+public-domain"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+cobol",
    "COBOL",
    {
      name: "COBOL",
      websites: [
        { kind: "wikipedia", title: "COBOL", href: "https://en.wikipedia.org/wiki/COBOL" },
        { kind: "wikipedia", title: "CobolScript", href: "https://en.wikipedia.org/wiki/CobolScript" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/COBOL_Report_Apr60.djvu/page1-121px-COBOL_Report_Apr60.djvu.jpg",
        },
      ],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "stable" }],
      extensions: [".cbl", ".cob", ".cpy"],
    },
    {
      dialects: ["pl+x-slashopen", "pl+watbol"],
      influences: [
        "pl+aimaco",
        "pl+comtran",
        "pl+fact-computer",
        "pl+flow-matic",
        "pl+cpp",
        "pl+eiffel",
        "pl+smalltalk",
        "pl+cobol",
      ],
      paradigms: ["para+imperative", "para+objects", "para+generic"],
      typeSystems: ["tsys+weak", "tsys+static"],
    },
  );

  lb.define(
    "pl+cobra",
    "Cobra",
    {
      name: "Cobra",
      websites: [
        { kind: "wikipedia", title: "Cobra", href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)" },
      ],
    },
    {
      influences: ["pl+python", "pl+eiffel", "pl+c-sharp", "pl+objective-c"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects"],
      platforms: ["platf+.net", "platf+mono"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic", "tsys+inferred"],
    },
  );

  lb.define("pl+cocoa", "Cocoa", {
    name: "Cocoa",
    websites: [{ kind: "wikipedia", title: "Cocoa", href: "https://en.wikipedia.org/wiki/Cocoa_(API)" }],
  });

  lb.define("pl+coldfusion", "Adobe ColdFusion", {
    name: "Adobe ColdFusion",
    websites: [{ kind: "wikipedia", title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adobe_ColdFusion_logo_2021.svg" },
    ],
  });

  lb.define(
    "pl+comal",
    "COMAL",
    { name: "COMAL", websites: [{ kind: "wikipedia", title: "COMAL", href: "https://en.wikipedia.org/wiki/COMAL" }] },
    { influences: ["pl+basic", "pl+pascal"], paradigms: ["para+structured"], typeSystems: ["tsys+strong"] },
  );

  lb.define(
    "pl+combined",
    "CPL",
    {
      name: "CPL",
      websites: [
        { kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Combined_Programming_Language" },
      ],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+functional"],
      people: ["person+christopher-strachey"],
    },
  );

  lb.define(
    "pl+comit",
    "COMIT",
    { name: "COMIT", websites: [{ kind: "wikipedia", title: "COMIT", href: "https://en.wikipedia.org/wiki/COMIT" }] },
    { people: ["person+victor-yngve"] },
  );

  lb.define("pl+communicating-sequential-processes", "Communicating sequential processes", {
    name: "Communicating sequential processes",
    websites: [
      {
        kind: "wikipedia",
        title: "Communicating Sequential Processes",
        href: "https://en.wikipedia.org/wiki/Communicating_Sequential_Processes",
      },
    ],
  });

  lb.define(
    "pl+comtran",
    "COMTRAN",
    {
      name: "COMTRAN",
      websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
    },
    { influences: ["pl+flow-matic"], people: ["person+bob-bemer"] },
  );

  lb.define(
    "pl+concurrent-euclid",
    "Concurrent Euclid",
    {
      name: "Concurrent Euclid",
      websites: [
        {
          kind: "wikipedia",
          title: "Concurrent Euclid (ConEuc)",
          href: "https://en.wikipedia.org/wiki/Concurrent_Euclid_(programming_language)",
        },
      ],
    },
    {
      influences: ["pl+euclid", "pl+communicating-sequential-processes"],
      paradigms: ["para+multi", "para+structured", "para+imperative", "para+functional"],
      people: ["person+james-cordy", "person+ric-holt"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );

  lb.define("pl+concurrent-ml", "Concurrent ML", {
    name: "Concurrent ML",
    websites: [{ kind: "wikipedia", title: "Concurrent ML", href: "https://en.wikipedia.org/wiki/Concurrent_ML" }],
  });

  lb.define(
    "pl+constraint-handling-rules",
    "CHR",
    {
      name: "CHR",
      websites: [
        {
          kind: "wikipedia",
          title: "Constraint Handling Rules (CHR)",
          href: "https://en.wikipedia.org/wiki/Constraint_Handling_Rules",
        },
      ],
    },
    { influences: ["pl+prolog"], paradigms: ["para+constraint", "para+dec"] },
  );

  lb.define(
    "pl+contextual-query",
    "CQL",
    {
      name: "CQL",
      websites: [{ kind: "wikipedia", title: "CQL", href: "https://en.wikipedia.org/wiki/Contextual_Query_Language" }],
    },
    { influences: ["pl+sql"] },
  );

  lb.define(
    "pl+control",
    "CL",
    {
      name: "CL",
      websites: [
        { kind: "wikipedia", title: "Control Language", href: "https://en.wikipedia.org/wiki/Control_Language" },
      ],
    },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+coral",
    "Coral 66",
    {
      name: "Coral 66",
      websites: [
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" },
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" },
      ],
    },
    {
      implementations: ["pl+bcpl"],
      influences: ["pl+algol", "pl+jovial", "pl+fortran"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+philip-woodward"],
      platforms: [
        "platf+dec",
        "platf+x86",
        "platf+intel-8080",
        "platf+zilog-z80",
        "platf+openvms",
        "platf+bsd",
        "platf+unix",
        "platf+linux",
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+core-war",
    "Core War",
    {
      name: "Core War",
      websites: [{ kind: "wikipedia", title: "Core War", href: "https://en.wikipedia.org/wiki/Core_War" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Core_War_PMars_Screenshot.png/220px-Core_War_PMars_Screenshot.png",
        },
      ],
    },
    { people: ["person+a-k-dewdney"] },
  );

  lb.define("pl+cornell-university", "CUPL", {
    name: "CUPL",
    websites: [
      {
        kind: "wikipedia",
        title: "CUPL",
        href: "https://en.wikipedia.org/wiki/Cornell_University_Programming_Language",
      },
    ],
  });

  lb.define(
    "pl+corvision",
    "CorVision",
    {
      name: "CorVision",
      websites: [{ kind: "wikipedia", title: "CorVision", href: "https://en.wikipedia.org/wiki/CorVision" }],
    },
    { influences: ["pl+inform"] },
  );

  lb.define(
    "pl+cowsel",
    "COWSEL",
    {
      name: "COWSEL",
      websites: [{ kind: "wikipedia", title: "COWSEL, POP-1", href: "https://en.wikipedia.org/wiki/COWSEL" }],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+cpl", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+structured", "para+reflective", "para+imperative"],
      people: ["person+robin-popplestone", "person+rod-burstall"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+cpl",
    "CPL",
    {
      name: "CPL",
      websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/CPL_(programming_language)" }],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+functional"],
      people: ["person+christopher-strachey"],
    },
  );

  lb.define("pl+cray", "Cray", {
    name: "Cray",
    websites: [{ kind: "wikipedia", title: "Cray", href: "https://en.wikipedia.org/wiki/Cray" }],
  });

  lb.define("pl+cray-mta", "Cray MTA", {
    name: "Cray MTA",
    websites: [{ kind: "wikipedia", title: "Cray MTA", href: "https://en.wikipedia.org/wiki/Cray_MTA" }],
  });

  lb.define("pl+cray-xmt", "XMT", {
    name: "XMT",
    websites: [{ kind: "wikipedia", title: "XMT", href: "https://en.wikipedia.org/wiki/Cray_XMT" }],
  });

  lb.define(
    "pl+croquet-project",
    "Croquet",
    {
      name: "Croquet",
      websites: [{ kind: "wikipedia", title: "Croquet", href: "https://en.wikipedia.org/wiki/Croquet_Project" }],
    },
    { influences: ["pl+etoys", "pl+squeak"] },
  );

  lb.define("pl+cuda", "CUDA", {
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  lb.define(
    "pl+cuneiform",
    "Cuneiform",
    {
      name: "Cuneiform",
      websites: [
        {
          kind: "wikipedia",
          title: "Cuneiform",
          href: "https://en.wikipedia.org/wiki/Cuneiform_(programming_language)",
        },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/G18225.png/121px-G18225.png" },
      ],
      releases: [{ version: "3.0.4", date: "2018-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+erlang"],
      influences: ["pl+swift"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+scientific"],
      platforms: ["platf+linux", "platf+mac"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+curl",
    "Curl",
    {
      name: "Curl",
      websites: [
        { kind: "wikipedia", title: "Curl", href: "https://en.wikipedia.org/wiki/Curl_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Curl_logo.gif" }],
      releases: [{ version: "8.0.13", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+html", "pl+javascript", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+objects", "para+markup"],
      people: ["person+steve-ward"],
      platforms: ["platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+curry",
    "Curry",
    {
      name: "Curry",
      websites: [
        { kind: "wikipedia", title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)" },
      ],
      releases: [{ version: "3.6.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+prolog", "pl+c", "pl+haskell"],
      influences: ["pl+haskell", "pl+prolog"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+logic"],
      platforms: ["platf+x86-64", "platf+cross-platform", "platf+linux"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+cyclone",
    "Cyclone",
    {
      name: "Cyclone",
      websites: [
        { kind: "wikipedia", title: "Cyclone", href: "https://en.wikipedia.org/wiki/Cyclone_(programming_language)" },
      ],
      releases: [{ version: "1.0", date: "2006-01-01", kind: "stable" }],
    },
    { influences: ["pl+c", "pl+ml"] },
  );

  lb.define(
    "pl+dafny",
    "Dafny",
    {
      name: "Dafny",
      websites: [
        { kind: "wikipedia", title: "Dafny", href: "https://en.wikipedia.org/wiki/Dafny_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dafny_logo.jpg/128px-Dafny_logo.jpg",
        },
      ],
      releases: [{ version: "3.7.2", date: "2022-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+mit"],
      paradigms: ["para+imperative", "para+functional"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );

  lb.define(
    "pl+darsimco",
    "DARSIMCO",
    {
      name: "DARSIMCO",
      websites: [{ kind: "wikipedia", title: "DARSIMCO", href: "https://en.wikipedia.org/wiki/DARSIMCO" }],
    },
    { implementations: ["pl+assembly"], paradigms: ["para+imperative"], people: ["person+john-g-kemeny"] },
  );

  lb.define(
    "pl+dartmouth-time-sharing-system",
    "Dartmouth Time Sharing System",
    {
      name: "Dartmouth Time Sharing System",
      websites: [
        {
          kind: "wikipedia",
          title: "Dartmouth Time Sharing System",
          href: "https://en.wikipedia.org/wiki/Dartmouth_Time_Sharing_System",
        },
      ],
    },
    { influences: ["pl+algol"] },
  );

  lb.define(
    "pl+darwin",
    "Darwin",
    {
      name: "Darwin",
      websites: [
        { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(programming_language)" },
      ],
    },
    {
      influences: ["pl+maple"],
      paradigms: ["para+imperative", "para+structured", "para+objects"],
      people: ["person+gaston-gonnet"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+dataflow", "dataflow", {
    name: "dataflow",
    websites: [{ kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" }],
  });

  lb.define(
    "pl+dataparallel-c",
    "Dataparallel-C",
    {
      name: "Dataparallel-C",
      websites: [{ kind: "wikipedia", title: "Dataparallel-C", href: "https://en.wikipedia.org/wiki/Dataparallel-C" }],
    },
    { influences: ["pl+c-star"] },
  );

  lb.define("pl+datomic", "Datomic", {
    name: "Datomic",
    websites: [{ kind: "wikipedia", title: "Datomic", href: "https://en.wikipedia.org/wiki/Datomic" }],
  });

  lb.define(
    "pl+dbase",
    "DBase",
    {
      name: "DBase",
      websites: [{ kind: "wikipedia", title: "DBase", href: "https://en.wikipedia.org/wiki/DBase" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DBaseLogo_BlackWithRed_glass_300.png/121px-DBaseLogo_BlackWithRed_glass_300.png",
        },
      ],
      releases: [{ version: "unknown", date: "2019-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+dec"],
      people: ["person+cecil-wayne-ratliff"],
      platforms: ["platf+dos", "platf+win"],
    },
  );

  lb.define(
    "pl+dc",
    "dc",
    {
      name: "dc",
      websites: [{ kind: "wikipedia", title: "dc", href: "https://en.wikipedia.org/wiki/Dc_(computer_program)" }],
    },
    { platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+ddc-i", "DDC-I", {
    name: "DDC-I",
    websites: [{ kind: "wikipedia", title: "DDC-I", href: "https://en.wikipedia.org/wiki/DDC-I" }],
  });

  lb.define("pl+dec", "DEC", {
    name: "DEC",
    websites: [
      { kind: "wikipedia", title: "SRC", href: "https://en.wikipedia.org/wiki/DEC_Systems_Research_Center" },
      { kind: "wikipedia", title: "DEC", href: "https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" },
    ],
  });

  lb.define(
    "pl+dependent-ml",
    "Dependent ML",
    {
      name: "Dependent ML",
      websites: [{ kind: "wikipedia", title: "Dependent ML", href: "https://en.wikipedia.org/wiki/Dependent_ML" }],
    },
    { dialects: ["pl+ats"] },
  );

  lb.define("pl+diagram", "diagrams", {
    name: "diagrams",
    websites: [{ kind: "wikipedia", title: "diagrams", href: "https://en.wikipedia.org/wiki/Diagram" }],
  });

  lb.define(
    "pl+dibol",
    "DIBOL",
    {
      name: "DIBOL",
      websites: [{ kind: "wikipedia", title: "DIBOL", href: "https://en.wikipedia.org/wiki/DIBOL" }],
      releases: [{ version: "unknown", date: "1992-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+basic", "pl+fortran", "pl+cobol"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define("pl+digital-command", "DCL", {
    name: "DCL",
    websites: [{ kind: "wikipedia", title: "DCL", href: "https://en.wikipedia.org/wiki/DIGITAL_Command_Language" }],
  });

  lb.define(
    "pl+dis-virtual-machine",
    "Dis virtual machine",
    {
      name: "Dis virtual machine",
      websites: [{ kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" }],
    },
    {
      implementations: ["pl+dis-virtual-machine"],
      influences: ["pl+c", "pl+pascal", "pl+communicating-sequential-processes", "pl+alef", "pl+newsqueak"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      people: ["person+rob-pike"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define("pl+domain-specific", "Domain-specific language", {
    name: "Domain-specific language",
    websites: [
      {
        kind: "wikipedia",
        title: "Domain-specific language",
        href: "https://en.wikipedia.org/wiki/Domain-specific_language",
      },
    ],
  });

  lb.define("pl+dotgnu", "DotGNU", {
    name: "DotGNU",
    websites: [{ kind: "wikipedia", title: "DotGNU", href: "https://en.wikipedia.org/wiki/DotGNU" }],
  });

  lb.define(
    "pl+draco",
    "Draco",
    {
      name: "Draco",
      websites: [
        { kind: "wikipedia", title: "Draco", href: "https://en.wikipedia.org/wiki/Draco_(programming_language)" },
      ],
    },
    {
      influences: ["pl+algol", "pl+pascal", "pl+c"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+amiga"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+drakon",
    "DRAKON",
    {
      name: "DRAKON",
      websites: [{ kind: "wikipedia", title: "DRAKON", href: "https://en.wikipedia.org/wiki/DRAKON" }],
    },
    { paradigms: ["para+visual"] },
  );

  lb.define("pl+dsssl", "DSSSL", {
    name: "DSSSL",
    websites: [
      {
        kind: "wikipedia",
        title: "Document Style Semantics and Specification Language",
        href: "https://en.wikipedia.org/wiki/DSSSL",
      },
    ],
  });

  lb.define(
    "pl+dymola",
    "Dymola",
    {
      name: "Dymola",
      websites: [{ kind: "wikipedia", title: "Dymola", href: "https://en.wikipedia.org/wiki/Dymola" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Dymola.png/100px-Dymola.png" },
      ],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"], people: ["person+dassault-systemes"], platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+e",
    "E",
    {
      name: "E",
      websites: [{ kind: "wikipedia", title: "E", href: "https://en.wikipedia.org/wiki/E_(programming_language)" }],
    },
    {
      influences: ["pl+joule", "pl+java"],
      licenses: ["lic+free"],
      paradigms: ["para+multi", "para+objects", "para+message"],
      people: ["person+mark-s-miller"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+ease",
    "Ease",
    {
      name: "Ease",
      websites: [
        { kind: "wikipedia", title: "Ease", href: "https://en.wikipedia.org/wiki/Ease_(programming_language)" },
      ],
    },
    {
      influences: ["pl+occam"],
      paradigms: ["para+concurrent", "para+csp"],
      platforms: ["platf+parallel-computing"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+easy",
    "Easy Programming Language",
    {
      name: "Easy Programming Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Easy Programming Language",
          href: "https://en.wikipedia.org/wiki/Easy_Programming_Language",
        },
      ],
      releases: [{ version: "5.95", date: "2023-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+compiled", "para+imperative", "para+objects", "para+functional"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+easytrieve", "Easytrieve", {
    name: "Easytrieve",
    websites: [
      { kind: "wikipedia", title: "Easytrieve", href: "https://en.wikipedia.org/wiki/Easytrieve" },
      {
        kind: "homepage",
        title: "CA Easytrieve® Report Generator",
        href: "https://www.broadcom.com/products/mainframe/application-development/easytrieve-report-generator",
      },
    ],
  });

  lb.define(
    "pl+eclipse",
    "ECLiPSe",
    {
      name: "ECLiPSe",
      websites: [
        {
          kind: "wikipedia",
          title: "ECLiPSe Constraint Logic Programming System",
          href: "https://en.wikipedia.org/wiki/ECLiPSe",
        },
      ],
      releases: [{ version: "7.0", date: "2018-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mozilla-public-licence"] },
  );

  lb.define(
    "pl+ecmascript-harmony",
    "ECMAScript Harmony",
    {
      name: "ECMAScript Harmony",
      websites: [
        { kind: "wikipedia", title: "ECMAScript Harmony", href: "https://en.wikipedia.org/wiki/ECMAScript_Harmony" },
      ],
    },
    { influences: ["pl+ambienttalk"] },
  );

  lb.define("pl+ed", "ed", {
    name: "ed",
    websites: [{ kind: "wikipedia", title: "ed", href: "https://en.wikipedia.org/wiki/Ed_(text_editor)" }],
  });

  lb.define(
    "pl+edinburgh-imp",
    "Edinburgh IMP",
    {
      name: "Edinburgh IMP",
      websites: [{ kind: "wikipedia", title: "Edinburgh IMP", href: "https://en.wikipedia.org/wiki/Edinburgh_IMP" }],
    },
    {
      implementations: ["pl+atlas-autocode"],
      influences: ["pl+algol", "pl+atlas-autocode"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+x86", "platf+dos", "platf+win", "platf+linux"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+egl",
    "EGL(Enterprise Generation Language)",
    {
      name: "EGL(Enterprise Generation Language)",
      websites: [{ kind: "wikipedia", title: "EGL", href: "https://en.wikipedia.org/wiki/EGL_(programming_language)" }],
    },
    { influences: ["pl+cobol"], licenses: ["lic+eclipse-public"] },
  );

  lb.define("pl+eiffelstudio", "EiffelStudio", {
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  lb.define(
    "pl+elan",
    "Elan",
    {
      name: "Elan",
      websites: [
        { kind: "wikipedia", title: "Elan", href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)" },
      ],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+cha-koster"],
      platforms: ["platf+zilog-z80"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+emerald",
    "Emerald",
    {
      name: "Emerald",
      websites: [
        { kind: "wikipedia", title: "Emerald", href: "https://en.wikipedia.org/wiki/Emerald_(programming_language)" },
      ],
    },
    {
      influences: ["pl+pascal", "pl+simula", "pl+smalltalk", "pl+simula-67", "pl+simula67"],
      paradigms: ["para+objects"],
      people: ["person+henry-m-levy"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );

  lb.define(
    "pl+epigram",
    "Epigram",
    {
      name: "Epigram",
      websites: [
        { kind: "wikipedia", title: "Epigram", href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+alf"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional"],
      people: ["person+conor-mcbride"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dependent"],
    },
  );

  lb.define("pl+esoteric", "FALSE", {
    name: "FALSE",
    websites: [
      { kind: "wikipedia", title: "FALSE", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language#FALSE" },
    ],
  });

  lb.define(
    "pl+etoys",
    "Etoys",
    {
      name: "Etoys",
      websites: [
        { kind: "wikipedia", title: "Etoys", href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+squeak", "pl+morphic", "pl+tweak"],
      influences: [
        "pl+agentsheets",
        "pl+logo",
        "pl+smalltalk",
        "pl+hypercard",
        "pl+starlogo",
        "pl+objectlogo",
        "pl+squeak",
        "pl+ucblogo",
      ],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: ["para+objects", "para+prototypes", "para+educational"],
      people: ["person+alan-kay", "person+ted-kaehler", "person+andreas-raab", "person+dan-ingalls"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+euclid",
    "Euclid",
    {
      name: "Euclid",
      websites: [
        { kind: "wikipedia", title: "Euclid", href: "https://en.wikipedia.org/wiki/Euclid_(programming_language)" },
      ],
    },
    {
      influences: ["pl+pascal", "pl+mesa", "pl+alphard", "pl+clu", "pl+bcpl", "pl+modula", "pl+lis"],
      paradigms: ["para+multi", "para+structured", "para+imperative", "para+functional"],
      people: [
        "person+butler-lampson",
        "person+james-g-mitchell",
        "person+jim-horning",
        "person+gerald-j-popek",
        "person+ric-holt",
        "person+james-cordy",
      ],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );

  lb.define(
    "pl+euler",
    "Euler",
    {
      name: "Euler",
      websites: [
        { kind: "wikipedia", title: "Euler", href: "https://en.wikipedia.org/wiki/Euler_(programming_language)" },
      ],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+niklaus-wirth"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+excel", "Excel macros", {
    name: "Excel macros",
    websites: [
      { kind: "wikipedia", title: "Excel functions", href: "https://en.wikipedia.org/wiki/Excel_function" },
      { kind: "wikipedia", title: "Excel macros", href: "https://en.wikipedia.org/wiki/Excel_macro" },
    ],
  });

  lb.define("pl+exec-2", "EXEC 2", {
    name: "EXEC 2",
    websites: [{ kind: "wikipedia", title: "EXEC 2", href: "https://en.wikipedia.org/wiki/EXEC_2" }],
  });

  lb.define(
    "pl+executive-systems-problem-oriented",
    "Executive Systems Problem Oriented Language",
    {
      name: "Executive Systems Problem Oriented Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Executive Systems Problem Oriented Language (ESPOL)",
          href: "https://en.wikipedia.org/wiki/Executive_Systems_Problem_Oriented_Language",
        },
      ],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+ezhil",
    "Ezhil",
    {
      name: "Ezhil",
      websites: [
        { kind: "wikipedia", title: "Ezhil", href: "https://en.wikipedia.org/wiki/Ezhil_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Ezhil_-_A_Tamil_Programming_Language_Logo.png",
        },
      ],
      releases: [
        { version: "0.99", date: "2017-01-01", kind: "stable" },
        { version: "unknown", date: "2021-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+logo", "pl+basic", "pl+python"],
      licenses: ["lic+gpl"],
      paradigms: ["para+interpreted", "para+imperative", "para+structured"],
      people: ["person+google-scholar"],
      platforms: ["platf+linux", "platf+win", "platf+mac", "platf+python", "platf+pip"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+f",
    "F language",
    {
      name: "F language",
      websites: [
        { kind: "wikipedia", title: "F language", href: "https://en.wikipedia.org/wiki/F_(programming_language)" },
      ],
    },
    {
      influences: ["pl+fortran"],
      paradigms: ["para+array", "para+imperative", "para+modular"],
      typeSystems: ["tsys+static", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+fact-computer",
    "FACT",
    {
      name: "FACT",
      websites: [{ kind: "wikipedia", title: "FACT", href: "https://en.wikipedia.org/wiki/FACT_computer_language" }],
    },
    { paradigms: ["para+imperative"] },
  );

  lb.define("pl+fanuc", "FANUC", {
    name: "FANUC",
    websites: [{ kind: "wikipedia", title: "FANUC", href: "https://en.wikipedia.org/wiki/FANUC" }],
  });

  lb.define("pl+fargo", "FARGO", {
    name: "FARGO",
    websites: [
      { kind: "wikipedia", title: "FARGO", href: "https://en.wikipedia.org/wiki/FARGO_(programming_language)" },
    ],
  });

  lb.define(
    "pl+ffp",
    "FP",
    {
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FFP_(programming_language)" }],
    },
    { influences: ["pl+apl"], paradigms: ["para+function"], people: ["person+john-backus"] },
  );

  lb.define(
    "pl+fjolnir",
    "Fjölnir",
    {
      name: "Fjölnir",
      websites: [
        {
          kind: "wikipedia",
          title: "Fjölnir",
          href: "https://en.wikipedia.org/wiki/Fj%C3%B6lnir_(programming_language)",
        },
      ],
    },
    { paradigms: ["para+objects"], platforms: ["platf+dos"] },
  );

  lb.define(
    "pl+fl",
    "FL",
    {
      name: "FL",
      websites: [{ kind: "wikipedia", title: "FL", href: "https://en.wikipedia.org/wiki/FL_(programming_language)" }],
    },
    {
      influences: ["pl+ffp", "pl+fp"],
      paradigms: ["para+function", "para+functional"],
      people: ["person+john-backus"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+flacc", "FLACC", {
    name: "FLACC",
    websites: [{ kind: "wikipedia", title: "FLACC", href: "https://en.wikipedia.org/wiki/FLACC" }],
  });

  lb.define(
    "pl+flow-matic",
    "FLOW-MATIC",
    {
      name: "FLOW-MATIC",
      websites: [{ kind: "wikipedia", title: "FLOW-MATIC", href: "https://en.wikipedia.org/wiki/FLOW-MATIC" }],
    },
    {
      influences: ["pl+arith-matic", "pl+laning-and-zierler-system"],
      paradigms: ["para+imperative"],
      people: ["person+remington-rand", "person+grace-hopper"],
    },
  );

  lb.define(
    "pl+flutter",
    "Flutter",
    {
      name: "Flutter",
      websites: [{ kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
      releases: [{ version: "3.22.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+bsd-n"],
      platforms: ["platf+android", "platf+ios", "platf+fuchsia", "platf+web", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define(
    "pl+focal",
    "FOCAL",
    {
      name: "FOCAL",
      websites: [
        { kind: "wikipedia", title: "FOCAL", href: "https://en.wikipedia.org/wiki/FOCAL_(programming_language)" },
      ],
    },
    { influences: ["pl+joss"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+fortress",
    "Fortress",
    {
      name: "Fortress",
      websites: [
        { kind: "wikipedia", title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)" },
      ],
    },
    {
      influences: ["pl+fortran", "pl+scala", "pl+haskell"],
      licenses: ["lic+bsd-s"],
      platforms: ["platf+jvm", "platf+cross-platform"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+foxpro",
    "FoxBASE+, FoxPro, Visual FoxPro",
    {
      name: "FoxBASE+, FoxPro, Visual FoxPro",
      websites: [
        { kind: "wikipedia", title: "FoxBASE+, FoxPro, Visual FoxPro", href: "https://en.wikipedia.org/wiki/FoxPro" },
      ],
    },
    { influences: ["pl+dbase"] },
  );

  lb.define(
    "pl+fp",
    "FP",
    {
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FP_(programming_language)" }],
    },
    { influences: ["pl+apl"], paradigms: ["para+function"], people: ["person+john-backus"] },
  );

  lb.define(
    "pl+fpgac",
    "FpgaC",
    {
      name: "FpgaC",
      websites: [{ kind: "wikipedia", title: "FpgaC", href: "https://en.wikipedia.org/wiki/FpgaC" }],
      releases: [{ version: "1.0", kind: "stable" }],
    },
    { influences: ["pl+c"], platforms: ["platf+fpga"] },
  );

  lb.define(
    "pl+frama-c",
    "Frama-C",
    {
      name: "Frama-C",
      websites: [{ kind: "wikipedia", title: "Frama-C", href: "https://en.wikipedia.org/wiki/Frama-C" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frama-C_logo%2C_full.png/120px-Frama-C_logo%2C_full.png",
        },
      ],
    },
    { licenses: ["lic+lgpl", "lic+bsd-s"] },
  );

  lb.define("pl+free-university-of-berlin", "FU Berlin", {
    name: "FU Berlin",
    websites: [
      { kind: "wikipedia", title: "FU Berlin", href: "https://en.wikipedia.org/wiki/Free_University_of_Berlin" },
    ],
  });

  lb.define(
    "pl+g-code",
    "G-code",
    {
      name: "G-code",
      websites: [{ kind: "wikipedia", title: "G-code", href: "https://en.wikipedia.org/wiki/G-code" }],
    },
    {
      implementations: [
        "pl+siemens",
        "pl+fanuc",
        "pl+haas-automation",
        "pl+heidenhain",
        "pl+yamazaki-mazak-corporation",
        "pl+okuma-corporation",
      ],
      paradigms: ["para+imperative"],
    },
  );

  lb.define(
    "pl+g95",
    "G95",
    { name: "G95", websites: [{ kind: "wikipedia", title: "G95", href: "https://en.wikipedia.org/wiki/G95" }] },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+game-maker",
    "GameMaker",
    {
      name: "GameMaker",
      websites: [{ kind: "wikipedia", title: "GameMaker", href: "https://en.wikipedia.org/wiki/Game_Maker_Language" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4b/GameMaker_Logo.svg" }],
      releases: [{ version: "2024.4.1", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+gcc",
    "GCC",
    {
      name: "GCC",
      websites: [{ kind: "wikipedia", title: "GCC", href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/GNU_Compiler_Collection_logo.svg" },
      ],
      releases: [{ version: "14.1", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+gnu"] },
  );

  lb.define(
    "pl+gemstone",
    "GemStone/S",
    {
      name: "GemStone/S",
      websites: [
        {
          kind: "wikipedia",
          title: "GemStone/S Object Server",
          href: "https://en.wikipedia.org/wiki/Gemstone_(database)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/GemStone-S_logo_and_wordmark.png/121px-GemStone-S_logo_and_wordmark.png",
        },
      ],
      releases: [{ version: "3.7.1", kind: "stable" }],
    },
    {
      implementations: ["pl+smalltalk"],
      influences: ["pl+smalltalk"],
      licenses: ["lic+proprietary", "lic+commercial"],
      paradigms: ["para+objects", "para+distributed", "para+in", "para+process"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+linux", "platf+mac"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+genera",
    "Genera",
    {
      name: "Genera",
      websites: [
        {
          kind: "wikipedia",
          title: "Symbolics Common Lisp",
          href: "https://en.wikipedia.org/wiki/Genera_(operating_system)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Symbolics-document-examiner.png/300px-Symbolics-document-examiner.png",
        },
      ],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define("pl+general-algebraic-modeling-system", "General Algebraic Modeling System", {
    name: "General Algebraic Modeling System",
    websites: [
      {
        kind: "wikipedia",
        title: "General Algebraic Modeling System",
        href: "https://en.wikipedia.org/wiki/General_Algebraic_Modeling_System",
      },
    ],
  });

  lb.define(
    "pl+generic-java",
    "Generic Java",
    {
      name: "Generic Java",
      websites: [{ kind: "wikipedia", title: "Generic Java", href: "https://en.wikipedia.org/wiki/Generic_Java" }],
    },
    { influences: ["pl+pizza"] },
  );

  lb.define(
    "pl+genie",
    "Genie",
    {
      name: "Genie",
      websites: [
        { kind: "wikipedia", title: "Genie", href: "https://en.wikipedia.org/wiki/Genie_(programming_language)" },
      ],
      releases: [{ version: "0.52.3", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+boo", "pl+d", "pl+python", "pl+pascal"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+ghostscript", "Ghostscript", {
    name: "Ghostscript",
    websites: [{ kind: "wikipedia", title: "Ghostscript", href: "https://en.wikipedia.org/wiki/Ghostscript" }],
  });

  lb.define("pl+glasgow-haskell-compiler", "GHC", {
    name: "GHC",
    websites: [{ kind: "wikipedia", title: "GHC", href: "https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler" }],
  });

  lb.define(
    "pl+gnu-data",
    "GNU Data Language",
    {
      name: "GNU Data Language",
      websites: [
        { kind: "wikipedia", title: "GNU Data Language", href: "https://en.wikipedia.org/wiki/GNU_Data_Language" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/GNU_Data_Language_%28logo%29.png" },
      ],
      releases: [{ version: "1.0.5", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+gnu-e",
    "GNU E",
    {
      name: "GNU E",
      websites: [
        { kind: "wikipedia", title: "GNU E", href: "https://en.wikipedia.org/wiki/GNU_E" },
        { kind: "homepage", title: "ftp://ftp.cs.wisc.edu/exodus/E/", href: "ftp://ftp.cs.wisc.edu/exodus/E/" },
      ],
      releases: [{ version: "2.3.3", date: "1993-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+gnu-m4",
    "GNU m4",
    { name: "GNU m4", websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }] },
    {
      implementations: ["pl+gnu-m4"],
      paradigms: ["para+macros"],
      people: ["person+brian-kernighan", "person+dennis-ritchie"],
    },
  );

  lb.define(
    "pl+go-",
    "Go!",
    {
      name: "Go!",
      websites: [{ kind: "wikipedia", title: "Go!", href: "https://en.wikipedia.org/wiki/Go!_(programming_language)" }],
      releases: [{ version: "unknown", date: "2007-01-01", kind: "preview" }],
    },
    {
      influences: ["pl+prolog"],
      licenses: ["lic+gpl-2"],
      paradigms: ["para+multi", "para+concurrent", "para+logic", "para+functional", "para+imperative", "para+objects"],
      people: ["person+keith-clark"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+godel",
    "Gödel",
    {
      name: "Gödel",
      websites: [
        { kind: "wikipedia", title: "Gödel", href: "https://en.wikipedia.org/wiki/G%C3%B6del_(programming_language)" },
        {
          kind: "homepage",
          title: "https://www.cs.unipr.it/~hill/GOEDEL/expgoedel.html",
          href: "https://www.cs.unipr.it/~hill/GOEDEL/expgoedel.html",
        },
      ],
      releases: [{ version: "1.5", date: "1995-01-01", kind: "stable" }],
    },
    { paradigms: ["para+dec", "para+logic"], platforms: ["platf+unix"], typeSystems: ["tsys+strong"] },
  );

  lb.define(
    "pl+godot",
    "GDScript",
    {
      name: "GDScript",
      websites: [
        {
          kind: "wikipedia",
          title: "Godot EngineGDScript",
          href: "https://en.wikipedia.org/wiki/Godot_(game_engine)#GDScript",
        },
        {
          kind: "homepage",
          title: "docs.godotengine.org",
          href: "https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/index.html",
        },
        { kind: "wikipedia", title: "Godot EngineGDScript", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Godot_logo.svg" }],
      releases: [{ version: "4.2.2", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+cpp", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+duck"],
    },
  );

  lb.define("pl+gofer", "Gofer", {
    name: "Gofer",
    websites: [
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(software)" },
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(programming_language)" },
    ],
  });

  lb.define(
    "pl+golo",
    "Golo",
    {
      name: "Golo",
      websites: [
        { kind: "wikipedia", title: "Golo", href: "https://en.wikipedia.org/wiki/Golo_(programming_language)" },
      ],
      releases: [{ version: "3.4.0", date: "2021-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+eclipse-public"],
      people: ["person+insa-lyon"],
      platforms: ["platf+jvm", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define("pl+google-apps-script", "Apps Script", {
    name: "Apps Script",
    websites: [
      { kind: "wikipedia", title: "Google Apps Script", href: "https://en.wikipedia.org/wiki/Google_Apps_Script" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" }],
  });

  lb.define(
    "pl+gpss",
    "GPSS",
    {
      name: "GPSS",
      websites: [{ kind: "wikipedia", title: "GPSS", href: "https://en.wikipedia.org/wiki/GPSS" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GPSS_sine-qua-non_icon.png/121px-GPSS_sine-qua-non_icon.png",
        },
      ],
    },
    { people: ["person+geoffrey-gordon"] },
  );

  lb.define("pl+graalvm", "TruffleRuby", {
    name: "TruffleRuby",
    websites: [
      {
        kind: "wikipedia",
        title: "TruffleRuby",
        href: "https://en.wikipedia.org/wiki/GraalVM#Language_and_Runtime_Support",
      },
    ],
  });

  lb.define("pl+gradle", "Gradle", {
    name: "Gradle",
    websites: [{ kind: "wikipedia", title: "Gradle", href: "https://en.wikipedia.org/wiki/Gradle" }],
  });

  lb.define("pl+grails", "Grails", {
    name: "Grails",
    websites: [{ kind: "wikipedia", title: "Grails", href: "https://en.wikipedia.org/wiki/Grails_(framework)" }],
  });

  lb.define(
    "pl+gt.m",
    "GT.M",
    { name: "GT.M", websites: [{ kind: "wikipedia", title: "GT.M", href: "https://en.wikipedia.org/wiki/GT.M" }] },
    { influences: ["pl+mumps"] },
  );

  lb.define("pl+haas-automation", "Haas", {
    name: "Haas",
    websites: [{ kind: "wikipedia", title: "Haas", href: "https://en.wikipedia.org/wiki/Haas_Automation" }],
  });

  lb.define(
    "pl+hamilton-c-shell",
    "Hamilton C shell",
    {
      name: "Hamilton C shell",
      websites: [
        { kind: "wikipedia", title: "Hamilton C shell", href: "https://en.wikipedia.org/wiki/Hamilton_C_shell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hamilton_C_shell_x64_on_Windows_7.png/300px-Hamilton_C_shell_x64_on_Windows_7.png",
        },
      ],
      releases: [{ version: "5.2", date: "2017-01-01", kind: "stable" }],
    },
    { licenses: ["lic+commercial", "lic+proprietary"] },
  );

  lb.define(
    "pl+handel-c",
    "Handel-C",
    {
      name: "Handel-C",
      websites: [{ kind: "wikipedia", title: "Handel-C", href: "https://en.wikipedia.org/wiki/Handel-C" }],
      releases: [{ version: "3.0", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+communicating-sequential-processes", "pl+occam"],
      paradigms: ["para+imperative", "para+structured", "para+concurrent"],
      people: ["person+siemens-eda"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+manifest", "tsys+nominative", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+harbour",
    "Harbour Project",
    {
      name: "Harbour Project",
      websites: [{ kind: "wikipedia", title: "Harbour", href: "https://en.wikipedia.org/wiki/Harbour_(software)" }],
      releases: [
        { version: "3.0.0", date: "2011-01-01", kind: "stable" },
        { version: "3.2.0", kind: "preview" },
      ],
    },
    {
      influences: ["pl+dbase"],
      licenses: ["lic+open-source"],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+safe", "tsys+strong"],
    },
  );

  lb.define(
    "pl+hartmann-pipeline",
    "Pipelines",
    {
      name: "Pipelines",
      websites: [
        { kind: "wikipedia", title: "Pipelines", href: "https://en.wikipedia.org/wiki/Hartmann_pipeline" },
        { kind: "homepage", title: "http://vm.marist.edu/~pipeline", href: "http://vm.marist.edu/~pipeline" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/0/0c/Pipjarg1.jpeg" }],
      releases: [{ version: "1.1.12", date: "2020-06-03", kind: "stable" }],
    },
    { influences: ["pl+pipeline"], paradigms: ["para+dataflow"], platforms: ["platf+z-slashvm"] },
  );

  lb.define("pl+heidenhain", "Heidenhain", {
    name: "Heidenhain",
    websites: [{ kind: "wikipedia", title: "Heidenhain", href: "https://en.wikipedia.org/wiki/Heidenhain" }],
  });

  lb.define(
    "pl+hhvm",
    "HHVM",
    {
      name: "HHVM",
      websites: [{ kind: "wikipedia", title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HHVM_logo.svg" }],
      releases: [{ version: "3.15.0", date: "2016-01-01", kind: "stable" }],
    },
    { licenses: ["lic+php", "lic+zend"], people: ["person+meta-platforms"] },
  );

  lb.define("pl+hitachi", "Hitachi", {
    name: "Hitachi",
    websites: [{ kind: "wikipedia", title: "Hitachi", href: "https://en.wikipedia.org/wiki/Hitachi" }],
  });

  lb.define(
    "pl+hollywood",
    "HollywoodHollywood Designer",
    {
      name: "HollywoodHollywood Designer",
      websites: [
        {
          kind: "wikipedia",
          title: "HollywoodHollywood Designer",
          href: "https://en.wikipedia.org/wiki/Hollywood_(programming_language)",
        },
        { kind: "homepage", title: "www.hollywood-mal.com", href: "http://www.hollywood-mal.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hollywood-ide3.jpg/220px-Hollywood-ide3.jpg",
        },
      ],
      releases: [{ version: "6.0", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+hop",
    "Hop",
    {
      name: "Hop",
      websites: [{ kind: "wikipedia", title: "Hop", href: "https://en.wikipedia.org/wiki/Hop_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hop_logo.svg" }],
      releases: [{ version: "2.4.2", date: "2013-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+scheme"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+multi"],
      people: ["person+manuel-serrano"],
    },
  );

  lb.define("pl+hope", "Hope", {
    name: "Hope",
    websites: [{ kind: "wikipedia", title: "Hope", href: "https://en.wikipedia.org/wiki/Hope_(programming_language)" }],
  });

  lb.define("pl+html", "HTML", {
    name: "HTML",
    websites: [{ kind: "wikipedia", title: "HTML", href: "https://en.wikipedia.org/wiki/HTML" }],
  });

  lb.define("pl+html5", "HTML5", {
    name: "HTML5",
    websites: [{ kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" }],
  });

  lb.define("pl+hugs", "Hugs", {
    name: "Hugs",
    websites: [{ kind: "wikipedia", title: "Hugs", href: "https://en.wikipedia.org/wiki/Hugs_(interpreter)" }],
  });

  lb.define(
    "pl+hume",
    "Hume",
    {
      name: "Hume",
      websites: [
        { kind: "wikipedia", title: "Hume", href: "https://en.wikipedia.org/wiki/Hume_(programming_language)" },
      ],
      releases: [{ version: "0.8", date: "2008-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+haskell"],
      paradigms: ["para+functional"],
      platforms: ["platf+ia-32", "platf+mac", "platf+red-hat", "platf+linux"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+ibm", "IBM", {
    name: "IBM",
    websites: [{ kind: "wikipedia", title: "IBM", href: "https://en.wikipedia.org/wiki/IBM" }],
  });

  lb.define("pl+ibm-704", "IBM 704", {
    name: "IBM 704",
    websites: [{ kind: "wikipedia", title: "IBM 704", href: "https://en.wikipedia.org/wiki/IBM_704" }],
  });

  lb.define("pl+ibm-709-slash90-9pac", "9PAC", {
    name: "9PAC",
    websites: [{ kind: "wikipedia", title: "9PAC", href: "https://en.wikipedia.org/wiki/IBM_709/90_9PAC" }],
  });

  lb.define("pl+ibm-7090", "7090", {
    name: "7090",
    websites: [{ kind: "wikipedia", title: "7090", href: "https://en.wikipedia.org/wiki/IBM_7090" }],
  });

  lb.define("pl+ibm-informix-4gl", "IBM Informix-4GL", {
    name: "IBM Informix-4GL",
    websites: [
      { kind: "wikipedia", title: "IBM Informix-4GL", href: "https://en.wikipedia.org/wiki/IBM_Informix-4GL" },
    ],
  });

  lb.define(
    "pl+ibm-pl-slashs",
    "PL/S",
    { name: "PL/S", websites: [{ kind: "wikipedia", title: "PL/S", href: "https://en.wikipedia.org/wiki/IBM_PL/S" }] },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+ibm-rpg",
    "RPGReport Program Generator",
    {
      name: "RPGReport Program Generator",
      websites: [
        { kind: "wikipedia", title: "RPGReport Program Generator", href: "https://en.wikipedia.org/wiki/IBM_RPG" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/IBM_RPG_logo.png/121px-IBM_RPG_logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+rpg"],
      influences: ["pl+ibm-709-slash90-9pac", "pl+fargo"],
      paradigms: ["para+multi"],
      platforms: ["platf+z-slashos", "platf+vse", "platf+openvms", "platf+dos", "platf+win"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );

  lb.define("pl+ibm-system-slash360", "S/360", {
    name: "S/360",
    websites: [{ kind: "wikipedia", title: "S/360", href: "https://en.wikipedia.org/wiki/IBM_System/360" }],
  });

  lb.define("pl+ibm-system-slash370", "IBM System/370", {
    name: "IBM System/370",
    websites: [{ kind: "wikipedia", title: "S/370", href: "https://en.wikipedia.org/wiki/IBM_System/370" }],
  });

  lb.define(
    "pl+ibm-visualage",
    "VA Smalltalk",
    {
      name: "VA Smalltalk",
      websites: [{ kind: "wikipedia", title: "VisualAge", href: "https://en.wikipedia.org/wiki/IBM_VisualAge" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+icon",
    "Icon",
    {
      name: "Icon",
      websites: [
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_(programming_language)" },
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_Icon_logo_Mondadori.png/121px-Panorama_Icon_logo_Mondadori.png",
        },
      ],
      releases: [{ version: "9.5.24", date: "2024-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+unicon"],
      influences: ["pl+snobol", "pl+algol"],
      paradigms: ["para+multi", "para+structured"],
      people: ["person+ralph-griswold"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+ict-1900-series", "ICL 1900", {
    name: "ICL 1900",
    websites: [{ kind: "wikipedia", title: "ICL 1900", href: "https://en.wikipedia.org/wiki/ICT_1900_series" }],
  });

  lb.define("pl+id", "Id", {
    name: "Id",
    websites: [{ kind: "wikipedia", title: "Id", href: "https://en.wikipedia.org/wiki/Id_(programming_language)" }],
  });

  lb.define(
    "pl+idl",
    "IDL",
    {
      name: "IDL",
      websites: [{ kind: "wikipedia", title: "IDL", href: "https://en.wikipedia.org/wiki/IDL_(programming_language)" }],
      releases: [{ version: "9.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+gnu-data"],
      influences: ["pl+fortran"],
      paradigms: ["para+array"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+imp",
    "IMP",
    {
      name: "IMP",
      websites: [{ kind: "wikipedia", title: "IMP", href: "https://en.wikipedia.org/wiki/IMP_(programming_language)" }],
      releases: [{ version: "unknown", date: "1972-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+algol"],
      influences: ["pl+algol"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+extensible"],
      people: ["person+national-security-agency"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+inferno",
    "Inferno",
    {
      name: "Inferno",
      websites: [
        { kind: "wikipedia", title: "Inferno", href: "https://en.wikipedia.org/wiki/Inferno_(operating_system)" },
      ],
    },
    { influences: ["pl+rc"] },
  );

  lb.define(
    "pl+information-processing",
    "Information Processing Language",
    {
      name: "Information Processing Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Information Processing Language (IPL)",
          href: "https://en.wikipedia.org/wiki/Information_Processing_Language",
        },
      ],
    },
    {
      paradigms: ["para+assembly"],
      people: ["person+allen-newell", "person+cliff-shaw", "person+herbert-a-simon"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+inscript", "InScript", {
    name: "InScript",
    websites: [
      { kind: "wikipedia", title: "InScript", href: "https://en.wikipedia.org/wiki/InScript_(JavaScript_engine)" },
    ],
  });

  lb.define("pl+intel-array-building-blocks", "Intel Array Building Blocks", {
    name: "Intel Array Building Blocks",
    websites: [
      {
        kind: "wikipedia",
        title: "Intel Array Building Blocks",
        href: "https://en.wikipedia.org/wiki/Intel_Array_Building_Blocks",
      },
    ],
    releases: [{ version: "1.0", date: "2011-01-01", kind: "preview" }],
  });

  lb.define(
    "pl+intel-parallel-building-blocks",
    "Parallel Building Blocks",
    {
      name: "Parallel Building Blocks",
      websites: [
        {
          kind: "wikipedia",
          title: "Parallel Building Blocks",
          href: "https://en.wikipedia.org/wiki/Intel_Parallel_Building_Blocks",
        },
      ],
      releases: [{ version: "unknown", date: "2010-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cilk-plus", "pl+threading-building-blocks", "pl+intel-array-building-blocks"],
      paradigms: ["para+imperative", "para+structured", "para+parallel"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+interactive-fiction",
    "interactive fiction",
    {
      name: "interactive fiction",
      websites: [
        { kind: "wikipedia", title: "interactive fiction", href: "https://en.wikipedia.org/wiki/Interactive_fiction" },
      ],
    },
    { influences: ["pl+mdl"] },
  );

  lb.define("pl+intercal", "INTERCAL", {
    name: "INTERCAL",
    websites: [{ kind: "wikipedia", title: "INTERCAL", href: "https://en.wikipedia.org/wiki/INTERCAL" }],
  });

  lb.define("pl+interpress", "Interpress", {
    name: "Interpress",
    websites: [{ kind: "wikipedia", title: "Interpress", href: "https://en.wikipedia.org/wiki/Interpress" }],
  });

  lb.define(
    "pl+isetl",
    "ISETL",
    {
      name: "ISETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/ISETL" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+isetl", "pl+setl", "pl+setl2"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+jacob-t-schwartz"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+iswim",
    "ISWIM",
    { name: "ISWIM", websites: [{ kind: "wikipedia", title: "ISWIM", href: "https://en.wikipedia.org/wiki/ISWIM" }] },
    {
      influences: ["pl+algol", "pl+lisp"],
      paradigms: ["para+imperative", "para+functional"],
      people: ["person+peter-landin"],
    },
  );

  lb.define(
    "pl+j-sharp",
    "J#",
    { name: "J#", websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/J_Sharp" }] },
    {
      influences: ["pl+c-sharp", "pl+java", "pl+visual-jpp", "pl+ms-visual-c-sharp"],
      paradigms: ["para+objects", "para+structured", "para+imperative"],
      platforms: ["platf+.net"],
    },
  );

  lb.define(
    "pl+jakarta-server-pages",
    "JSP",
    {
      name: "JSP",
      websites: [{ kind: "wikipedia", title: "JSP", href: "https://en.wikipedia.org/wiki/Jakarta_Server_Pages" }],
    },
    { influences: ["pl+php"] },
  );

  lb.define(
    "pl+janus",
    "Janus",
    {
      name: "Janus",
      websites: [
        {
          kind: "wikipedia",
          title: "Janus",
          href: "https://en.wikipedia.org/wiki/Janus_(concurrent_constraint_programming_language)",
        },
        {
          kind: "wikipedia",
          title: "Janus",
          href: "https://en.wikipedia.org/wiki/Janus_(time-reversible_computing_programming_language)",
        },
      ],
    },
    { paradigms: ["para+logic", "para+imperative", "para+reversible"] },
  );

  lb.define(
    "pl+java-ee",
    "Java EE",
    {
      name: "Java EE",
      websites: [{ kind: "wikipedia", title: "Java EE", href: "https://en.wikipedia.org/wiki/Java_EE" }],
    },
    { influences: ["pl+gemstone"] },
  );

  lb.define(
    "pl+java-object-oriented-querying",
    "jOOQ",
    {
      name: "jOOQ",
      websites: [
        { kind: "wikipedia", title: "jOOQ", href: "https://en.wikipedia.org/wiki/Java_Object_Oriented_Querying" },
      ],
      releases: [{ version: "3.19.2", date: "2024-01-01", kind: "stable" }],
    },
    { influences: ["pl+sql"], licenses: ["lic+apache"], platforms: ["platf+jvm"] },
  );

  lb.define(
    "pl+java-persistence-query",
    "JPQL",
    {
      name: "JPQL",
      websites: [
        { kind: "wikipedia", title: "JPQL", href: "https://en.wikipedia.org/wiki/Java_Persistence_Query_Language" },
      ],
    },
    { influences: ["pl+sql"] },
  );

  lb.define(
    "pl+javafx-script",
    "JavaFX",
    {
      name: "JavaFX",
      websites: [
        { kind: "wikipedia", title: "JavaFX", href: "https://en.wikipedia.org/wiki/JavaFX_Script" },
        { kind: "homepage", title: "http://javafx.com/", href: "http://javafx.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/JavaFX_Logo.png/200px-JavaFX_Logo.png",
        },
      ],
      releases: [{ version: "1.2", date: "2009-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+jvm", "platf+cross-platform"] },
  );

  lb.define(
    "pl+javascriptcore",
    "WebKit",
    {
      name: "WebKit",
      websites: [{ kind: "wikipedia", title: "JavaScriptCore", href: "https://en.wikipedia.org/wiki/JavaScriptCore" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
    },
    { licenses: ["lic+lgpl", "lic+bsd-s"] },
  );

  lb.define("pl+jena", "Jena", {
    name: "Jena",
    websites: [{ kind: "wikipedia", title: "Jena", href: "https://en.wikipedia.org/wiki/Jena_(framework)" }],
  });

  lb.define(
    "pl+jmodelica.org",
    "JModelica.org",
    {
      name: "JModelica.org",
      websites: [{ kind: "wikipedia", title: "JModelica.org", href: "https://en.wikipedia.org/wiki/JModelica.org" }],
      releases: [{ version: "2.10", date: "2019-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+join-java",
    "Join Java",
    {
      name: "Join Java",
      websites: [
        { kind: "wikipedia", title: "Join Java", href: "https://en.wikipedia.org/wiki/Join_Java" },
        { kind: "homepage", title: "joinjava.unisa.edu.au", href: "http://joinjava.unisa.edu.au/" },
      ],
    },
    { influences: ["pl+java"], paradigms: ["para+imperative", "para+reflective"] },
  );

  lb.define(
    "pl+joss",
    "JOSS",
    { name: "JOSS", websites: [{ kind: "wikipedia", title: "JOSS", href: "https://en.wikipedia.org/wiki/JOSS" }] },
    {
      dialects: ["pl+focal"],
      implementations: ["pl+assembly"],
      paradigms: ["para+non", "para+imperative"],
      people: ["person+cliff-shaw"],
    },
  );

  lb.define(
    "pl+joule",
    "Joule",
    {
      name: "Joule",
      websites: [
        { kind: "wikipedia", title: "Joule", href: "https://en.wikipedia.org/wiki/Joule_(programming_language)" },
      ],
    },
    {
      influences: ["pl+actor-model", "pl+t"],
      paradigms: ["para+multi", "para+objects", "para+distributed", "para+dataflow"],
    },
  );

  lb.define(
    "pl+jovial",
    "JOVIAL",
    {
      name: "JOVIAL",
      websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
    },
    {
      implementations: [
        "pl+mvs",
        "pl+openvms",
        "pl+macos",
        "pl+win",
        "pl+linux",
        "pl+sparc",
        "pl+powerpc",
        "pl+mil-std-1750a",
      ],
      influences: ["pl+algol", "pl+semi-automatic-ground-environment"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+structural"],
    },
  );

  lb.define(
    "pl+joy",
    "Joy",
    {
      name: "Joy",
      websites: [{ kind: "wikipedia", title: "Joy", href: "https://en.wikipedia.org/wiki/Joy_(programming_language)" }],
      releases: [{ version: "unknown", date: "2003-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ffp", "pl+forth", "pl+fp", "pl+scheme"],
      paradigms: ["para+multi", "para+functional", "para+concatenative", "para+stack"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+jscript",
    "JScript",
    {
      name: "JScript",
      websites: [{ kind: "wikipedia", title: "JScript", href: "https://en.wikipedia.org/wiki/JScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif" }],
      releases: [{ version: "9.0", date: "2011-01-01", kind: "stable" }],
      extensions: [".js", ".jse", ".wsf", ".wsc", ".htm", ".html", ".hta", ".asp"],
    },
    {
      implementations: ["pl+active-scripting", "pl+jscript-.net"],
      platforms: ["platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    },
  );

  lb.define(
    "pl+jscript-.net",
    "JScript .NET",
    {
      name: "JScript .NET",
      websites: [{ kind: "wikipedia", title: "JScript .NET", href: "https://en.wikipedia.org/wiki/JScript_.NET" }],
      extensions: [".js"],
    },
    {
      influences: ["pl+jscript", "pl+ecmascript"],
      paradigms: ["para+multi"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+duck", "tsys+weak", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+jspp",
    "JS++",
    { name: "JS++", websites: [{ kind: "wikipedia", title: "JS++", href: "https://en.wikipedia.org/wiki/JS%2B%2B" }] },
    {
      influences: ["pl+c", "pl+cpp", "pl+java", "pl+javascript", "pl+c-sharp"],
      licenses: ["lic+bsd"],
      paradigms: ["para+imperative", "para+structured", "para+objects", "para+functional", "para+generic"],
      typeSystems: ["tsys+gradual", "tsys+static", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+jython",
    "Jython",
    {
      name: "Jython",
      websites: [{ kind: "wikipedia", title: "Jython", href: "https://en.wikipedia.org/wiki/Jython" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Jython.png" }],
      releases: [{ version: "2.7.3", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+python-foundation"], platforms: ["platf+jvm"] },
  );

  lb.define(
    "pl+karel",
    "Karel the Robot",
    {
      name: "Karel the Robot",
      websites: [
        {
          kind: "wikipedia",
          title: "Karel the Robot",
          href: "https://en.wikipedia.org/wiki/Karel_(programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/NikiExample.jpg/220px-NikiExample.jpg",
        },
      ],
    },
    { influences: ["pl+pascal"], paradigms: ["para+imperative"], people: ["person+richard-e-pattis"] },
  );

  lb.define(
    "pl+kawa",
    "Kawa",
    {
      name: "Kawa",
      websites: [
        { kind: "wikipedia", title: "Kawa", href: "https://en.wikipedia.org/wiki/Kawa_(Scheme_implementation)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kawa-logo.svg" }],
      releases: [{ version: "3.1.1", date: "2020-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+java", "pl+scheme"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+mit"],
      platforms: ["platf+jvm", "platf+cross-platform"],
    },
  );

  lb.define(
    "pl+kent-recursive-calculator",
    "KRC",
    {
      name: "KRC",
      websites: [{ kind: "wikipedia", title: "KRC", href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator" }],
    },
    { influences: ["pl+sasl"], paradigms: ["para+functional"], people: ["person+david-turner"] },
  );

  lb.define(
    "pl+kivy",
    "Kivy",
    {
      name: "Kivy",
      websites: [
        { kind: "wikipedia", title: "Kivy", href: "https://en.wikipedia.org/wiki/Kivy_(framework)#Kv_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kivy_logo.png/120px-Kivy_logo.png",
        },
      ],
      releases: [{ version: "2.3.0", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mit", "lic+free"] },
  );

  lb.define(
    "pl+kl0",
    "KL0",
    { name: "KL0", websites: [{ kind: "wikipedia", title: "KL0", href: "https://en.wikipedia.org/wiki/KL0" }] },
    { influences: ["pl+prolog"] },
  );

  lb.define(
    "pl+kl1",
    "KL1",
    { name: "KL1", websites: [{ kind: "wikipedia", title: "KL1", href: "https://en.wikipedia.org/wiki/KL1" }] },
    { influences: ["pl+prolog"] },
  );

  lb.define("pl+kodu-game-lab", "Kodu Game Lab", {
    name: "Kodu Game Lab",
    websites: [{ kind: "wikipedia", title: "Kodu Game Lab", href: "https://en.wikipedia.org/wiki/Kodu_Game_Lab" }],
    releases: [{ version: "1.6.18.0", date: "2023-01-01", kind: "stable" }],
  });

  lb.define(
    "pl+kojo",
    "The Kojo Learning Environment",
    {
      name: "The Kojo Learning Environment",
      websites: [
        {
          kind: "wikipedia",
          title: "The Kojo Learning Environment",
          href: "https://en.wikipedia.org/wiki/Kojo_(programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kojo-screenshot.png/300px-Kojo-screenshot.png",
        },
      ],
      releases: [{ version: "2.9.24", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+logo", "pl+processing"],
      licenses: ["lic+gpl"],
      paradigms: ["para+structured", "para+functional", "para+objects"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define("pl+kornshell", "Ksh", {
    name: "Ksh",
    websites: [{ kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" }],
  });

  lb.define(
    "pl+krl",
    "KRL",
    {
      name: "KRL",
      websites: [{ kind: "wikipedia", title: "KRL", href: "https://en.wikipedia.org/wiki/KRL_(programming_language)" }],
    },
    { paradigms: ["para+knowledge"] },
  );

  lb.define(
    "pl+kuka-robot",
    "KUKA Robot Language",
    {
      name: "KUKA Robot Language",
      websites: [
        { kind: "wikipedia", title: "KUKA Robot Language", href: "https://en.wikipedia.org/wiki/KUKA_Robot_Language" },
      ],
    },
    { influences: ["pl+pascal"] },
  );

  lb.define("pl+lambda-calculus", "Lambda calculus", {
    name: "Lambda calculus",
    websites: [{ kind: "wikipedia", title: "Lambda calculus", href: "https://en.wikipedia.org/wiki/Lambda_calculus" }],
  });

  lb.define(
    "pl+language-h",
    "Language H",
    {
      name: "Language H",
      websites: [{ kind: "wikipedia", title: "Language H", href: "https://en.wikipedia.org/wiki/Language_H" }],
    },
    { influences: ["pl+cobol"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+language-integrated-query",
    "LINQ",
    {
      name: "LINQ",
      websites: [{ kind: "wikipedia", title: "LINQ", href: "https://en.wikipedia.org/wiki/Language_Integrated_Query" }],
    },
    { influences: ["pl+sql"] },
  );

  lb.define("pl+laning-and-zierler-system", "Laning and Zierler system", {
    name: "Laning and Zierler system",
    websites: [
      {
        kind: "wikipedia",
        title: "Laning and Zierler system",
        href: "https://en.wikipedia.org/wiki/Laning_and_Zierler_system",
      },
    ],
  });

  lb.define(
    "pl+lasso",
    "Lasso",
    {
      name: "Lasso",
      websites: [
        { kind: "wikipedia", title: "Lasso", href: "https://en.wikipedia.org/wiki/Lasso_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/LassoSoft_and_Lasso_Logo.png/220px-LassoSoft_and_Lasso_Logo.png",
        },
      ],
      releases: [{ version: "9.3.1", date: "2015-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+dylan", "pl+smalltalk", "pl+scala"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+structured", "para+objects", "para+meta", "para+reflection"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"],
      typeSystems: ["tsys+dynamic", "tsys+nominative", "tsys+duck"],
    },
  );

  lb.define("pl+li-chen-wang", "Palo Alto Tiny BASIC", {
    name: "Palo Alto Tiny BASIC",
    websites: [
      { kind: "wikipedia", title: "Palo Alto Tiny BASIC", href: "https://en.wikipedia.org/wiki/Li-Chen_Wang" },
    ],
  });

  lb.define(
    "pl+libertyeiffel",
    "Liberty Eiffel",
    {
      name: "Liberty Eiffel",
      websites: [{ kind: "wikipedia", title: "LibertyEiffel", href: "https://en.wikipedia.org/wiki/LibertyEiffel" }],
      releases: [{ version: "2016.05", date: "2016-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+limbo",
    "Limbo",
    {
      name: "Limbo",
      websites: [
        { kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Limbo_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+dis-virtual-machine"],
      influences: ["pl+alef", "pl+c", "pl+pascal", "pl+communicating-sequential-processes", "pl+newsqueak"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      people: ["person+rob-pike"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+lingo",
    "Lingo",
    {
      name: "Lingo",
      websites: [
        { kind: "wikipedia", title: "Lingo", href: "https://en.wikipedia.org/wiki/Lingo_(programming_language)" },
      ],
    },
    { influences: ["pl+hypertalk", "pl+xtalk"] },
  );

  lb.define("pl+linux", "Linux", {
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  lb.define("pl+lis", "LIS", {
    name: "LIS",
    websites: [{ kind: "wikipedia", title: "LIS", href: "https://en.wikipedia.org/wiki/LIS_(programming_language)" }],
  });

  lb.define(
    "pl+little-b",
    "Little b",
    {
      name: "Little b",
      websites: [
        { kind: "wikipedia", title: "Little b", href: "https://en.wikipedia.org/wiki/Little_b_(programming_language)" },
        {
          kind: "homepage",
          title: "www.littleb.org",
          href: "https://web.archive.org/web/20051102195348/http://www.littleb.org/",
        },
      ],
      releases: [{ version: "1.6.0", date: "2008-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+linux", "pl+mac-os-x", "pl+win"],
      influences: ["pl+lisp"],
      paradigms: ["para+functional"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+llvm", "LLVM", {
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  lb.define(
    "pl+logtalk",
    "Logtalk",
    {
      name: "Logtalk",
      websites: [{ kind: "wikipedia", title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk" }],
      releases: [{ version: "3.66.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+prolog", "pl+smalltalk", "pl+objective-c"],
      licenses: ["lic+artistic-2", "lic+apache"],
      paradigms: ["para+logic", "para+objects", "para+prototypes"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+lpc",
    "LPC",
    {
      name: "LPC",
      websites: [{ kind: "wikipedia", title: "LPC", href: "https://en.wikipedia.org/wiki/LPC_(programming_language)" }],
    },
    { influences: ["pl+c"] },
  );

  lb.define("pl+luajit", "LuaJIT", {
    name: "LuaJIT",
    websites: [{ kind: "wikipedia", title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT" }],
  });

  lb.define(
    "pl+lucid",
    "Lucid",
    {
      name: "Lucid",
      websites: [
        { kind: "wikipedia", title: "Lucid", href: "https://en.wikipedia.org/wiki/Lucid_(programming_language)" },
      ],
    },
    { influences: ["pl+iswim"], paradigms: ["para+dataflow"] },
  );

  lb.define(
    "pl+lustre",
    "Lustre",
    {
      name: "Lustre",
      websites: [
        { kind: "wikipedia", title: "Lustre", href: "https://en.wikipedia.org/wiki/Lustre_(programming_language)" },
      ],
    },
    { influences: ["pl+lucid"] },
  );

  lb.define(
    "pl+lyapas",
    "LYaPAS",
    {
      name: "LYaPAS",
      websites: [{ kind: "wikipedia", title: "LYaPAS", href: "https://en.wikipedia.org/wiki/LYaPAS" }],
    },
    { paradigms: ["para+functional", "para+structured", "para+modular"], typeSystems: ["tsys+dynamic"] },
  );

  lb.define(
    "pl+m-sharp",
    "M#",
    {
      name: "M#",
      websites: [
        { kind: "wikipedia", title: "M#", href: "https://en.wikipedia.org/wiki/M_Sharp_(programming_language)" },
        { kind: "homepage", title: "http://www.msharp.co.uk/", href: "http://www.msharp.co.uk/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Msharp_logo.png" }],
    },
    {
      implementations: ["pl+ms-visual-c-sharp", "pl+.net-framework", "pl+asp.net", "pl+domain-specific"],
      paradigms: ["para+multi", "para+structured", "para+objects", "para+event", "para+imperative", "para+meta"],
      typeSystems: ["tsys+static", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+m4",
    "m4",
    {
      name: "m4",
      websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/M4_(computer_language)" }],
    },
    {
      implementations: ["pl+gnu-m4"],
      paradigms: ["para+macros"],
      people: ["person+brian-kernighan", "person+dennis-ritchie"],
    },
  );

  lb.define("pl+mac-os-x", "Mac OS X", {
    name: "Mac OS X",
    websites: [{ kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  lb.define("pl+macos", "macOS", {
    name: "macOS",
    websites: [{ kind: "wikipedia", title: "macOS", href: "https://en.wikipedia.org/wiki/MacOS" }],
  });

  lb.define("pl+macsyma", "Macsyma", {
    name: "Macsyma",
    websites: [{ kind: "wikipedia", title: "Macsyma", href: "https://en.wikipedia.org/wiki/Macsyma" }],
  });

  lb.define(
    "pl+mad",
    "MAD",
    {
      name: "MAD",
      websites: [{ kind: "wikipedia", title: "MAD", href: "https://en.wikipedia.org/wiki/MAD_(programming_language)" }],
    },
    {
      implementations: [
        "pl+ibm-704",
        "pl+ibm-7090",
        "pl+ibm-system-slash360",
        "pl+ibm-system-slash370",
        "pl+univac-1108",
      ],
      influences: ["pl+algol"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+bernard-galler", "person+bruce-arden", "person+robert-m-graham"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+magma-computer-algebra-system",
    "Magma",
    {
      name: "Magma",
      websites: [
        { kind: "wikipedia", title: "Magma", href: "https://en.wikipedia.org/wiki/Magma_computer_algebra_system" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magma-logo.png/120px-Magma-logo.png",
        },
      ],
      releases: [{ version: "2.27", date: "2023-01-01", kind: "stable" }],
    },
    { people: ["person+school-of-mathematics"] },
  );

  lb.define("pl+maker-culture", "Maker Culture", {
    name: "Maker Culture",
    websites: [{ kind: "wikipedia", title: "Maker Culture", href: "https://en.wikipedia.org/wiki/Maker_culture" }],
  });

  lb.define(
    "pl+malbolge",
    "Malbolge",
    {
      name: "Malbolge",
      websites: [{ kind: "wikipedia", title: "Malbolge", href: "https://en.wikipedia.org/wiki/Malbolge" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Malbolge_cat_program.png/300px-Malbolge_cat_program.png",
        },
      ],
    },
    { influences: ["pl+brainfuck", "pl+intercal", "pl+befunge"] },
  );

  lb.define("pl+maplesim", "MapleSim", {
    name: "MapleSim",
    websites: [{ kind: "wikipedia", title: "MapleSim", href: "https://en.wikipedia.org/wiki/MapleSim" }],
  });

  lb.define("pl+mariadb", "MariaDB", {
    name: "MariaDB",
    websites: [{ kind: "wikipedia", title: "MariaDB", href: "https://en.wikipedia.org/wiki/MariaDB" }],
  });

  lb.define(
    "pl+math-matic",
    "MATH-MATIC",
    {
      name: "MATH-MATIC",
      websites: [{ kind: "wikipedia", title: "MATH-MATIC", href: "https://en.wikipedia.org/wiki/MATH-MATIC" }],
    },
    { influences: ["pl+flow-matic"], paradigms: ["para+imperative"], people: ["person+remington-rand"] },
  );

  lb.define(
    "pl+mathematica",
    "Mathematica",
    {
      name: "Mathematica",
      websites: [
        { kind: "wikipedia", title: "Wolfram Mathematica", href: "https://en.wikipedia.org/wiki/Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+win", "platf+mac", "platf+linux", "platf+rpi"] },
  );

  lb.define(
    "pl+mblock",
    "mBlock",
    {
      name: "mBlock",
      websites: [{ kind: "wikipedia", title: "mBlock", href: "https://en.wikipedia.org/wiki/MBlock" }],
    },
    { influences: ["pl+scratch"] },
  );

  lb.define(
    "pl+mdl",
    "MDL",
    {
      name: "MDL",
      websites: [{ kind: "wikipedia", title: "MDL", href: "https://en.wikipedia.org/wiki/MDL_(programming_language)" }],
      scoping: ["lexical"],
    },
    {
      influences: ["pl+lisp"],
      licenses: ["lic+open-source"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"],
      people: ["person+gerald-sussman", "person+carl-hewitt", "person+bruce-daniels"],
      platforms: ["platf+bsd"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+mesa",
    "Mesa",
    {
      name: "Mesa",
      websites: [
        { kind: "wikipedia", title: "Mesa", href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)" },
      ],
      releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
    },
    { influences: ["pl+algol"] },
  );

  lb.define("pl+mil-std-1750a", "MIL-STD-1750A", {
    name: "MIL-STD-1750A",
    websites: [{ kind: "wikipedia", title: "MIL-STD-1750A", href: "https://en.wikipedia.org/wiki/MIL-STD-1750A" }],
  });

  lb.define("pl+mips-architecture", "MIPS", {
    name: "MIPS",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  lb.define(
    "pl+mirah",
    "Mirah",
    {
      name: "Mirah",
      websites: [
        { kind: "wikipedia", title: "Mirah", href: "https://en.wikipedia.org/wiki/Mirah_(programming_language)" },
        { kind: "homepage", title: "https://mirah.org/", href: "https://mirah.org/" },
      ],
      releases: [{ version: "0.2.1", date: "2016-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ruby", "pl+java", "pl+boo"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+imperative"],
      platforms: ["platf+jvm", "platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+strong", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+miranda",
    "Miranda",
    {
      name: "Miranda",
      websites: [
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_(programming_language)" },
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/3/34/Miranda_logo_%28programming_language%29.jpg",
        },
      ],
      releases: [{ version: "2.066", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+iswim", "pl+kent-recursive-calculator", "pl+ml", "pl+sasl", "pl+hope"],
      paradigms: ["para+lazy", "para+functional", "para+dec"],
      people: ["person+david-turner"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );

  lb.define(
    "pl+ml-slashi",
    "ML/I",
    { name: "ML/I", websites: [{ kind: "wikipedia", title: "ML/I", href: "https://en.wikipedia.org/wiki/ML/I" }] },
    { influences: ["pl+trac"] },
  );

  lb.define(
    "pl+mlton",
    "MLton",
    {
      name: "MLton",
      websites: [{ kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" }],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+sml"],
      licenses: ["lic+hpnd"],
      paradigms: ["para+multi", "para+functional", "para+imperative"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );

  lb.define("pl+mono", "Mono", {
    name: "Mono",
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  lb.define(
    "pl+moose",
    "Moose",
    {
      name: "Moose",
      websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
    },
    { influences: ["pl+armed-bear-common-lisp", "pl+common-lisp"] },
  );

  lb.define("pl+morphic", "Morphic", {
    name: "Morphic",
    websites: [{ kind: "wikipedia", title: "Morphic", href: "https://en.wikipedia.org/wiki/Morphic_(software)" }],
  });

  lb.define("pl+mos-6502", "6502", {
    name: "6502",
    websites: [{ kind: "wikipedia", title: "6502", href: "https://en.wikipedia.org/wiki/MOS_6502" }],
  });

  lb.define("pl+motorola-68000", "Motorola 68000", {
    name: "Motorola 68000",
    websites: [{ kind: "wikipedia", title: "Motorola 68000", href: "https://en.wikipedia.org/wiki/Motorola_68000" }],
  });

  lb.define(
    "pl+ms-macro-assembler",
    "Microsoft Macro Assembler",
    {
      name: "Microsoft Macro Assembler",
      websites: [
        {
          kind: "wikipedia",
          title: "Microsoft Macro Assembler",
          href: "https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler",
        },
      ],
      releases: [{ version: "14.16.27023.1", date: "2702-01-01", kind: "stable" }],
    },
    { licenses: ["lic+commercial", "lic+proprietary"] },
  );

  lb.define(
    "pl+ms-power-fx",
    "Power Fx",
    {
      name: "Power Fx",
      websites: [
        { kind: "wikipedia", title: "Microsoft Power Fx", href: "https://en.wikipedia.org/wiki/Microsoft_Power_Fx" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Power_Fx_logo.png/64px-Power_Fx_logo.png",
        },
      ],
    },
    {
      influences: ["pl+excel", "pl+pascal", "pl+mathematica", "pl+miranda"],
      licenses: ["lic+mit"],
      paradigms: ["para+low", "para+general", "para+imperative", "para+strongly", "para+dec", "para+functional"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define("pl+ms-visual-studio", "Microsoft Visual Studio", {
    name: "Microsoft Visual Studio",
    websites: [
      {
        kind: "wikipedia",
        title: "Microsoft Visual Studio",
        href: "https://en.wikipedia.org/wiki/Microsoft_Visual_Studio",
      },
    ],
  });

  lb.define(
    "pl+mumps",
    "MUMPS",
    {
      name: "MUMPS",
      websites: [{ kind: "wikipedia", title: "MUMPS", href: "https://en.wikipedia.org/wiki/MUMPS" }],
      releases: [{ version: "11.1", date: "1995-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+fortran", "pl+joss", "pl+speedcoding", "pl+telcomp"],
      paradigms: ["para+imperative"],
      people: ["person+neil-pappalardo", "person+robert-a-greenes"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+mvs", "MVS", {
    name: "MVS",
    websites: [{ kind: "wikipedia", title: "MVS", href: "https://en.wikipedia.org/wiki/MVS" }],
  });

  lb.define(
    "pl+n1ql",
    "N1QL",
    { name: "N1QL", websites: [{ kind: "wikipedia", title: "N1QL", href: "https://en.wikipedia.org/wiki/N1QL" }] },
    { influences: ["pl+sql"] },
  );

  lb.define(
    "pl+napier88",
    "Napier88",
    {
      name: "Napier88",
      websites: [{ kind: "wikipedia", title: "Napier88", href: "https://en.wikipedia.org/wiki/Napier88" }],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+ron-morrison"],
    },
  );

  lb.define(
    "pl+neko",
    "NekoVMNeko",
    {
      name: "NekoVMNeko",
      websites: [
        { kind: "wikipedia", title: "NekoVMNeko", href: "https://en.wikipedia.org/wiki/Neko_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nekovm",
    "NekoVMNeko",
    {
      name: "NekoVMNeko",
      websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nemerle",
    "Nemerle",
    {
      name: "Nemerle",
      websites: [{ kind: "wikipedia", title: "Nemerle", href: "https://en.wikipedia.org/wiki/Nemerle" }],
      releases: [{ version: "1.2.507.0", date: "2016-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c-sharp", "pl+ms-visual-c-sharp", "pl+ml", "pl+lisp"],
      paradigms: [
        "para+multi",
        "para+aspect",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+nesl",
    "NESL",
    {
      name: "NESL",
      websites: [{ kind: "wikipedia", title: "NESL", href: "https://en.wikipedia.org/wiki/NESL" }],
      releases: [{ version: "3.1", date: "1995-01-01", kind: "stable" }],
    },
    { licenses: ["lic+isc", "lic+mit"], paradigms: ["para+functional", "para+array"] },
  );

  lb.define(
    "pl+net.data",
    "Net.Data",
    {
      name: "Net.Data",
      websites: [
        { kind: "wikipedia", title: "Net.Data", href: "https://en.wikipedia.org/wiki/Net.Data" },
        {
          kind: "homepage",
          title: "http://www-306.ibm.com/software/data/net.data/",
          href: "http://www-306.ibm.com/software/data/net.data/",
        },
      ],
    },
    { platforms: ["platf+z-slashos", "platf+win", "platf+unix"] },
  );

  lb.define(
    "pl+netlogo",
    "NetLogo",
    {
      name: "NetLogo",
      websites: [{ kind: "wikipedia", title: "NetLogo", href: "https://en.wikipedia.org/wiki/NetLogo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/NetLogo_%28logo%29.png/280px-NetLogo_%28logo%29.png",
        },
      ],
      releases: [{ version: "6.4.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+scala", "pl+java"],
      influences: ["pl+logo", "pl+starlogo", "pl+objectlogo", "pl+ucblogo"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi", "para+educational", "para+imperative", "para+computer", "para+simulation"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+netrexx",
    "NetRexx",
    {
      name: "NetRexx",
      websites: [{ kind: "wikipedia", title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NETREXX.gif" }],
      releases: [{ version: "4.06", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+pl-slash", "pl+rexx", "pl+object-rexx", "pl+java"],
      licenses: ["lic+icu"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+structured"],
      people: ["person+mike-cowlishaw"],
      platforms: [
        "platf+cross-platform",
        "platf+linux",
        "platf+win",
        "platf+mac",
        "platf+z-slashos",
        "platf+z-slashvm",
        "platf+android",
      ],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+netwide-assembler",
    "NASM",
    {
      name: "NASM",
      websites: [{ kind: "wikipedia", title: "NASM", href: "https://en.wikipedia.org/wiki/Netwide_Assembler" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Netwide_Assembler.svg" }],
      releases: [{ version: "2.16.03", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+bsd-s"], people: ["person+h-peter-anvin"] },
  );

  lb.define(
    "pl+newp",
    "NEWP",
    {
      name: "NEWP",
      websites: [{ kind: "wikipedia", title: "NEWP", href: "https://en.wikipedia.org/wiki/NEWP" }],
      releases: [{ version: "17.0", date: "2015-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+executive-systems-problem-oriented", "pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+newspeak",
    "Newspeak",
    {
      name: "Newspeak",
      websites: [
        { kind: "wikipedia", title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+cpp", "pl+javascript"],
      influences: ["pl+smalltalk", "pl+self", "pl+beta", "pl+e"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+functional"],
      people: ["person+gilad-bracha"],
      platforms: ["platf+win", "platf+mac", "platf+linux", "platf+android", "platf+web"],
      typeSystems: ["tsys+dynamic", "tsys+optional"],
    },
  );

  lb.define(
    "pl+newsqueak",
    "Newsqueak",
    {
      name: "Newsqueak",
      websites: [{ kind: "wikipedia", title: "Newsqueak", href: "https://en.wikipedia.org/wiki/Newsqueak" }],
    },
    {
      influences: ["pl+c", "pl+communicating-sequential-processes"],
      paradigms: ["para+concurrent"],
      people: ["person+rob-pike"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+newtonscript",
    "NewtonScript",
    {
      name: "NewtonScript",
      websites: [{ kind: "wikipedia", title: "NewtonScript", href: "https://en.wikipedia.org/wiki/NewtonScript" }],
    },
    {
      influences: ["pl+self", "pl+dylan", "pl+smalltalk"],
      paradigms: ["para+prototypes", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nial",
    "Nial",
    {
      name: "Nial",
      websites: [{ kind: "wikipedia", title: "Nial", href: "https://en.wikipedia.org/wiki/Nial" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/NialLogo.jpg" }],
      releases: [{ version: "7.0", date: "2017-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+apl", "pl+lisp"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+array"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+niklaus-wirth",
    "Wirth",
    {
      name: "Wirth",
      websites: [{ kind: "wikipedia", title: "Wirth", href: "https://en.wikipedia.org/wiki/Niklaus_Wirth" }],
    },
    {
      dialects: [
        "pl+active-oberon",
        "pl+alma-0",
        "pl+pascal",
        "pl+euler",
        "pl+modula",
        "pl+oberon",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+obliq",
        "pl+pl360",
        "pl+zonnon",
      ],
    },
  );

  lb.define(
    "pl+nix-package-manager",
    "Nix",
    {
      name: "Nix",
      websites: [{ kind: "wikipedia", title: "Nix", href: "https://en.wikipedia.org/wiki/Nix_package_manager" }],
      releases: [{ version: "2.22.1", date: "2024-01-01", kind: "stable" }],
    },
    { platforms: ["platf+linux", "platf+unix"] },
  );

  lb.define(
    "pl+nord",
    "Nord Programming Language",
    {
      name: "Nord Programming Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Nord Programming Language",
          href: "https://en.wikipedia.org/wiki/NORD_Programming_Language",
        },
      ],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative"],
      people: ["person+norsk-data"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+noweb",
    "noweb",
    {
      name: "noweb",
      websites: [{ kind: "wikipedia", title: "Noweb", href: "https://en.wikipedia.org/wiki/Noweb" }],
      releases: [{ version: "2.12", date: "2018-01-01", kind: "stable" }],
    },
    { influences: ["pl+web"] },
  );

  lb.define(
    "pl+nu",
    "Nu",
    {
      name: "Nu",
      websites: [{ kind: "wikipedia", title: "Nu", href: "https://en.wikipedia.org/wiki/Nu_(programming_language)" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lisp", "pl+objective-c", "pl+ruby", "pl+objective-cpp"],
      licenses: ["lic+apache"],
      paradigms: ["para+structured", "para+imperative", "para+functional", "para+objects"],
      platforms: ["platf+x86", "platf+mac"],
    },
  );

  lb.define("pl+numerical-algorithms-group", "Numerical Algorithms Group", {
    name: "Numerical Algorithms Group",
    websites: [
      {
        kind: "wikipedia",
        title: "Numerical Algorithms Group",
        href: "https://en.wikipedia.org/wiki/Numerical_Algorithms_Group",
      },
    ],
  });

  lb.define(
    "pl+object-rexx",
    "Object REXX",
    {
      name: "Object REXX",
      websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/Object_REXX" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rexx3_orig_size_transparent.gif/121px-Rexx3_orig_size_transparent.gif",
        },
      ],
      releases: [
        { version: "5.0.0", date: "2023-01-01", kind: "stable" },
        { version: "5.1.0", kind: "preview" },
      ],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+rexx", "pl+smalltalk"],
      licenses: ["lic+common-public", "lic+gpl"],
      paradigms: ["para+objects", "para+class"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+arm",
        "platf+cross-platform",
        "platf+linux",
        "platf+win",
        "platf+mac",
        "platf+bsd",
      ],
    },
  );

  lb.define(
    "pl+objectlogo",
    "Logo",
    {
      name: "Logo",
      websites: [{ kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/ObjectLOGO" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    },
    {
      dialects: ["pl+starlogo", "pl+netlogo"],
      implementations: ["pl+ucblogo"],
      influences: ["pl+lisp"],
      paradigms: ["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflective"],
      people: ["person+wally-feurzeig", "person+seymour-papert", "person+cynthia-solomon"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+obliq",
    "Obliq",
    { name: "Obliq", websites: [{ kind: "wikipedia", title: "Obliq", href: "https://en.wikipedia.org/wiki/Obliq" }] },
    {
      implementations: ["pl+modula"],
      influences: ["pl+modula", "pl+self", "pl+oberon"],
      paradigms: [
        "para+multi",
        "para+imperative",
        "para+structured",
        "para+modular",
        "para+objects",
        "para+prototypes",
        "para+parallel",
      ],
      people: ["person+luca-cardelli"],
      platforms: ["platf+ia-32"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+occam",
    "occam",
    {
      name: "occam",
      websites: [
        { kind: "wikipedia", title: "occam", href: "https://en.wikipedia.org/wiki/Occam_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/1983_1988_Trademark_occam_and_occam_2_INMOS_Limited.jpg/121px-1983_1988_Trademark_occam_and_occam_2_INMOS_Limited.jpg",
        },
      ],
      releases: [{ version: "2.1", date: "1994-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+occam--"],
      influences: ["pl+communicating-sequential-processes"],
      paradigms: ["para+imperative", "para+concurrent"],
      people: ["person+david-may"],
    },
  );

  lb.define(
    "pl+occam--",
    "occam-π",
    {
      name: "occam-π",
      websites: [{ kind: "wikipedia", title: "occam-π", href: "https://en.wikipedia.org/wiki/Occam-%CF%80" }],
    },
    {
      influences: ["pl+occam"],
      paradigms: ["para+imperative", "para+concurrent"],
      platforms: ["platf+ia-32", "platf+arduino"],
    },
  );

  lb.define("pl+odra", "Odra ALGOL 68", {
    name: "Odra ALGOL 68",
    websites: [{ kind: "wikipedia", title: "Odra ALGOL 68", href: "https://en.wikipedia.org/wiki/Odra_(computer)" }],
  });

  lb.define("pl+okuma-corporation", "Okuma", {
    name: "Okuma",
    websites: [{ kind: "wikipedia", title: "Okuma", href: "https://en.wikipedia.org/wiki/Okuma_Corporation" }],
  });

  lb.define("pl+oorexx", "ooREXX", {
    name: "ooREXX",
    websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/OoREXX" }],
  });

  lb.define(
    "pl+opa",
    "Opa",
    {
      name: "Opa",
      websites: [{ kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
      releases: [{ version: "1.1.1", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+erlang", "pl+javascript", "pl+ml", "pl+ocaml"],
      licenses: ["lic+mit", "lic+affero-gpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+open",
    "Open Programming Language (OPL)",
    {
      name: "Open Programming Language (OPL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Open Programming Language (OPL)",
          href: "https://en.wikipedia.org/wiki/Open_Programming_Language",
        },
      ],
      releases: [{ version: "1.56", date: "2006-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+structured", "para+embedded"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+open-source", "open source", {
    name: "open source",
    websites: [{ kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open_source" }],
  });

  lb.define(
    "pl+opencl",
    "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
    {
      name: "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
      websites: [
        {
          kind: "wikipedia",
          title: "OpenCL APIOpenCL C/C++ and C++ for OpenCL",
          href: "https://en.wikipedia.org/wiki/OpenCL",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg" }],
      releases: [{ version: "1.0", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c99", "pl+cuda", "pl+cpp14", "pl+cpp17"],
      paradigms: ["para+imperative", "para+structured", "para+objects", "para+generic"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    },
  );

  lb.define("pl+openedge-advanced-business", "OpenEdge Advanced Business Language (ABL)", {
    name: "OpenEdge Advanced Business Language (ABL)",
    websites: [
      {
        kind: "wikipedia",
        title: "OpenEdge Advanced Business Language (ABL)",
        href: "https://en.wikipedia.org/wiki/OpenEdge_Advanced_Business_Language",
      },
      { kind: "homepage", title: "https://www.progress.com/openedge", href: "https://www.progress.com/openedge" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/OpenEdge_logo.png/120px-OpenEdge_logo.png",
      },
    ],
    releases: [{ version: "12.8", date: "2024-01-01", kind: "stable" }],
  });

  lb.define(
    "pl+openmodelica",
    "OpenModelica",
    {
      name: "OpenModelica",
      websites: [{ kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" }],
      releases: [{ version: "1.22.2", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+eclipse-public", "lic+gpl", "lic+free"] },
  );

  lb.define(
    "pl+openqasm",
    "OpenQASM",
    {
      name: "OpenQASM",
      websites: [{ kind: "wikipedia", title: "OpenQASM", href: "https://en.wikipedia.org/wiki/OpenQASM" }],
      extensions: [".qasm"],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define("pl+openvera", "OpenVera", {
    name: "OpenVera",
    websites: [{ kind: "wikipedia", title: "OpenVera", href: "https://en.wikipedia.org/wiki/OpenVera" }],
  });

  lb.define("pl+openvms", "OpenVMS", {
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  lb.define("pl+ops5", "OPS5", {
    name: "OPS5",
    websites: [{ kind: "wikipedia", title: "OPS5", href: "https://en.wikipedia.org/wiki/OPS5" }],
  });

  lb.define(
    "pl+optimj",
    "OptimJ",
    {
      name: "OptimJ",
      websites: [
        { kind: "wikipedia", title: "OptimJ", href: "https://en.wikipedia.org/wiki/OptimJ" },
        { kind: "homepage", title: "www.Ateji.com", href: "http://www.ateji.com/" },
      ],
    },
    { influences: ["pl+java"], paradigms: ["para+objects"] },
  );

  lb.define("pl+oracle-solaris-studio", "Oracle Developer Studio", {
    name: "Oracle Developer Studio",
    websites: [
      {
        kind: "wikipedia",
        title: "Oracle Solaris Studio",
        href: "https://en.wikipedia.org/wiki/Oracle_Solaris_Studio",
      },
    ],
    releases: [{ version: "12.6", date: "2017-01-01", kind: "stable" }],
  });

  lb.define(
    "pl+orc",
    "Orc",
    {
      name: "Orc",
      websites: [{ kind: "wikipedia", title: "Orc", href: "https://en.wikipedia.org/wiki/Orc_(programming_language)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Orc_programming_language_logo.png" },
      ],
    },
    {
      influences: ["pl+haskell", "pl+ml", "pl+oz", "pl+smalltalk", "pl+pict"],
      licenses: ["lic+bsd-n"],
      paradigms: ["para+concurrent", "para+nondeterministic"],
      people: ["person+jayadev-misra", "person+william-r-cook"],
    },
  );

  lb.define(
    "pl+oriel",
    "Oriel",
    {
      name: "Oriel",
      websites: [
        { kind: "wikipedia", title: "Oriel", href: "https://en.wikipedia.org/wiki/Oriel_(scripting_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/9/97/The_Oriel_for_Windows_Logo.png" }],
    },
    { paradigms: ["para+imperative"], platforms: ["platf+win"] },
  );

  lb.define(
    "pl+orwell",
    "Orwell",
    {
      name: "Orwell",
      websites: [
        { kind: "wikipedia", title: "Orwell", href: "https://en.wikipedia.org/wiki/Orwell_(programming_language)" },
      ],
    },
    { influences: ["pl+miranda"], paradigms: ["para+lazy", "para+functional"], people: ["person+philip-wadler"] },
  );

  lb.define("pl+otcl", "OTcl", {
    name: "OTcl",
    websites: [{ kind: "wikipedia", title: "OTcl", href: "https://en.wikipedia.org/wiki/OTcl" }],
  });

  lb.define(
    "pl+oxygene",
    "Oxygene",
    {
      name: "Oxygene",
      websites: [
        { kind: "wikipedia", title: "Oxygene", href: "https://en.wikipedia.org/wiki/Oxygene_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Chrome-128.png/121px-Chrome-128.png",
        },
      ],
    },
    {
      influences: ["pl+c-sharp", "pl+ms-visual-c-sharp", "pl+delphi", "pl+pascal"],
      licenses: ["lic+trialware"],
      platforms: ["platf+.net", "platf+jvm", "platf+win", "platf+linux", "platf+wasm"],
    },
  );

  lb.define(
    "pl+oz",
    "Oz",
    {
      name: "Oz",
      websites: [{ kind: "wikipedia", title: "Oz", href: "https://en.wikipedia.org/wiki/Oz_(programming_language)" }],
      releases: [{ version: "1.4.0", date: "2018-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+erlang", "pl+lisp", "pl+prolog"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+logic",
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+constraint",
        "para+distributed",
        "para+concurrent",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+p",
    "P",
    {
      name: "P",
      websites: [{ kind: "wikipedia", title: "P", href: "https://en.wikipedia.org/wiki/P_(programming_language)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/P_logo.png/64px-P_logo.png" },
      ],
    },
    { licenses: ["lic+mit"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+p--",
    "P′′",
    {
      name: "P′′",
      websites: [{ kind: "wikipedia", title: "P′′", href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2" }],
    },
    { dialects: ["pl+brainfuck"], paradigms: ["para+imperative", "para+structured"], people: ["person+corrado-bohm"] },
  );

  lb.define(
    "pl+pact-i",
    "PACT I",
    {
      name: "PACT I",
      websites: [{ kind: "wikipedia", title: "PACT I", href: "https://en.wikipedia.org/wiki/PACT_I" }],
    },
    { influences: ["pl+fortran", "pl+speedcoding"] },
  );

  lb.define(
    "pl+parasail",
    "ParaSail",
    {
      name: "ParaSail",
      websites: [
        { kind: "wikipedia", title: "ParaSail", href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Sparkel",
          href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)#Description",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/c/c1/Logo_for_ParaSail_Programming_Language.jpg",
        },
      ],
      releases: [{ version: "9.3", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ada", "pl+modula", "pl+pascal", "pl+ml"],
      licenses: ["lic+gpl"],
      paradigms: ["para+compiled", "para+concurrent", "para+imperative", "para+structured", "para+objects"],
      platforms: ["platf+x86", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );

  lb.define(
    "pl+pari-slashgp",
    "PARI/GP",
    {
      name: "PARI/GP",
      websites: [{ kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], people: ["person+henri-cohen"] },
  );

  lb.define("pl+parrot-virtual-machine", "Parrot", {
    name: "Parrot",
    websites: [{ kind: "wikipedia", title: "Parrot", href: "https://en.wikipedia.org/wiki/Parrot_virtual_machine" }],
  });

  lb.define(
    "pl+patcher",
    "Patcher",
    {
      name: "Patcher",
      websites: [{ kind: "wikipedia", title: "Max", href: "https://en.wikipedia.org/wiki/Patcher" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
        },
      ],
      releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+pathscale",
    "PathScale EKOPath Compiler",
    {
      name: "PathScale EKOPath Compiler",
      websites: [{ kind: "wikipedia", title: "PathScale", href: "https://en.wikipedia.org/wiki/PathScale" }],
      releases: [{ version: "5.0.0", date: "2013-01-01", kind: "stable" }],
    },
    { platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+pcastl",
    "PCASTL",
    {
      name: "PCASTL",
      websites: [{ kind: "wikipedia", title: "PCASTL", href: "https://en.wikipedia.org/wiki/PCASTL" }],
      releases: [{ version: "3.5", date: "2018-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+r"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+reflective"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+pdp-10", "PDP-10", {
    name: "PDP-10",
    websites: [{ kind: "wikipedia", title: "PDP-10", href: "https://en.wikipedia.org/wiki/PDP-10" }],
  });

  lb.define("pl+pdp-11", "PDP-11", {
    name: "PDP-11",
    websites: [{ kind: "wikipedia", title: "PDP-11", href: "https://en.wikipedia.org/wiki/PDP-11" }],
  });

  lb.define("pl+pdp-7", "PDP-7", {
    name: "PDP-7",
    websites: [{ kind: "wikipedia", title: "PDP-7", href: "https://en.wikipedia.org/wiki/PDP-7" }],
  });

  lb.define(
    "pl+perl-data",
    "Perl Data Language (PDL)",
    {
      name: "Perl Data Language (PDL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Perl Data Language (PDL)",
          href: "https://en.wikipedia.org/wiki/Perl_Data_Language",
        },
      ],
      releases: [{ version: "2.080", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+apl", "pl+idl", "pl+perl"],
      licenses: ["lic+gpl", "lic+artistic"],
      paradigms: ["para+array"],
      people: ["person+karl-glazebrook"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+pgi-compiler", "PGI", {
    name: "PGI",
    websites: [{ kind: "wikipedia", title: "PGI", href: "https://en.wikipedia.org/wiki/PGI_compiler" }],
  });

  lb.define(
    "pl+pico",
    "Pico",
    {
      name: "Pico",
      websites: [
        { kind: "wikipedia", title: "Pico", href: "https://en.wikipedia.org/wiki/Pico_(programming_language)" },
      ],
      releases: [{ version: "2.0", date: "2007-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+scheme"],
      influences: ["pl+scheme", "pl+smalltalk"],
      paradigms: ["para+reflective", "para+imperative"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+mac", "platf+linux", "platf+bsd", "platf+win"],
    },
  );

  lb.define(
    "pl+pict",
    "Pict",
    {
      name: "Pict",
      websites: [
        { kind: "wikipedia", title: "Pict", href: "https://en.wikipedia.org/wiki/Pict_(programming_language)" },
      ],
    },
    {
      influences: ["pl+ml"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      people: ["person+benjamin-c-pierce"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+pike",
    "Pike",
    {
      name: "Pike",
      websites: [
        { kind: "wikipedia", title: "Pike", href: "https://en.wikipedia.org/wiki/Pike_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pike_Programming_Language_Logo.svg" },
      ],
      releases: [{ version: "8.0.1738", date: "1738-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+lpc", "pl+cpp"],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mozilla-public"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative"],
      platforms: ["platf+unix", "platf+win"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+manifest"],
    },
  );

  lb.define("pl+pipeline", "Pipeline (Unix)", {
    name: "Pipeline (Unix)",
    websites: [{ kind: "wikipedia", title: "Pipeline (Unix)", href: "https://en.wikipedia.org/wiki/Pipeline_(Unix)" }],
  });

  lb.define(
    "pl+pizza",
    "Pizza",
    {
      name: "Pizza",
      websites: [
        { kind: "wikipedia", title: "Pizza", href: "https://en.wikipedia.org/wiki/Pizza_(programming_language)" },
      ],
    },
    { influences: ["pl+java"], paradigms: ["para+generic", "para+algebraic"] },
  );

  lb.define(
    "pl+pl-6",
    "PL-6",
    { name: "PL-6", websites: [{ kind: "wikipedia", title: "PL-6", href: "https://en.wikipedia.org/wiki/PL-6" }] },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+pl-slash",
    "PL/I",
    {
      name: "PL/I",
      websites: [
        { kind: "wikipedia", title: "PL/I", href: "https://en.wikipedia.org/wiki/PL/I" },
        { kind: "wikipedia", title: "PL/1", href: "https://en.wikipedia.org/wiki/PL/1" },
        { kind: "wikipedia", title: "PL/M", href: "https://en.wikipedia.org/wiki/PL/M" },
        { kind: "wikipedia", title: "PL/C", href: "https://en.wikipedia.org/wiki/PL/C" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Conway_Gries_An_Introduction_to_Programming_cover.jpg/180px-Conway_Gries_An_Introduction_to_Programming_cover.jpg",
        },
      ],
      releases: [{ version: "7.6", date: "1977-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+algol",
        "pl+cobol",
        "pl+fortran",
        "pl+pl-slash",
        "pl+cornell-university",
        "pl+xpl",
        "pl+speedcoding",
      ],
      paradigms: ["para+imperative", "para+structured", "para+educational"],
      people: ["person+gary-kildall"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+pl.8",
    "PL.8",
    { name: "PL.8", websites: [{ kind: "wikipedia", title: "PL.8", href: "https://en.wikipedia.org/wiki/PL.8" }] },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+pl360",
    "PL360",
    { name: "PL360", websites: [{ kind: "wikipedia", title: "PL360", href: "https://en.wikipedia.org/wiki/PL360" }] },
    {
      implementations: ["pl+algol"],
      influences: ["pl+algol", "pl+executive-systems-problem-oriented"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+niklaus-wirth"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+planc",
    "PLANC",
    { name: "PLANC", websites: [{ kind: "wikipedia", title: "PLANC", href: "https://en.wikipedia.org/wiki/PLANC" }] },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+norsk-data"],
      platforms: ["platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+plankalkul",
    "Plankalkül",
    {
      name: "Plankalkül",
      websites: [{ kind: "wikipedia", title: "Plankalkül", href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl" }],
    },
    {
      implementations: ["pl+free-university-of-berlin"],
      influences: ["pl+begriffsschrift"],
      paradigms: ["para+imperative"],
      people: ["person+konrad-zuse"],
    },
  );

  lb.define(
    "pl+planner",
    "Planner",
    {
      name: "Planner",
      websites: [
        { kind: "wikipedia", title: "Planner", href: "https://en.wikipedia.org/wiki/Planner_(programming_language)" },
      ],
    },
    {
      influences: ["pl+mdl"],
      paradigms: ["para+multi", "para+logic", "para+imperative"],
      people: ["person+carl-hewitt"],
    },
  );

  lb.define(
    "pl+plex",
    "Plex",
    {
      name: "Plex",
      websites: [
        { kind: "wikipedia", title: "PLEX", href: "https://en.wikipedia.org/wiki/PLEX_(programming_language)" },
      ],
    },
    { licenses: ["lic+proprietary"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+plexil",
    "PLEXIL",
    {
      name: "PLEXIL",
      websites: [
        { kind: "wikipedia", title: "PLEXIL", href: "https://en.wikipedia.org/wiki/PLEXIL" },
        { kind: "homepage", title: "http://plexil.sourceforge.net/", href: "http://plexil.sourceforge.net/" },
      ],
    },
    {
      implementations: ["pl+robotics"],
      paradigms: ["para+multi"],
      platforms: ["platf+linux", "platf+mac"],
      typeSystems: ["tsys+static", "tsys+safe", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+plus",
    "Plus",
    {
      name: "Plus",
      websites: [
        { kind: "wikipedia", title: "Plus", href: "https://en.wikipedia.org/wiki/Plus_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+ibm-system-slash370", "pl+dec", "pl+pdp-11", "pl+motorola-68000"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );

  lb.define(
    "pl+poly-slashml",
    "Poly/ML",
    {
      name: "Poly/ML",
      websites: [{ kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Poly/ML" }],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+alice", "pl+concurrent-ml", "pl+dependent-ml"],
      implementations: ["pl+sml", "pl+mlton", "pl+poly-slashml"],
      influences: ["pl+ml", "pl+hope", "pl+pascal"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+modular"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+polyphonic-c-sharp", "Polyphonic C#", {
    name: "Polyphonic C#",
    websites: [{ kind: "wikipedia", title: "Polyphonic C#", href: "https://en.wikipedia.org/wiki/Polyphonic_C_Sharp" }],
  });

  lb.define(
    "pl+pop-2",
    "POP-2",
    {
      name: "POP-2",
      websites: [{ kind: "wikipedia", title: "POP-2", href: "https://en.wikipedia.org/wiki/POP-2" }],
      releases: [{ version: "unknown", date: "1975-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+cowsel", "pl+lisp", "pl+algol"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+structured", "para+reflective", "para+imperative"],
      people: ["person+robin-popplestone", "person+rod-burstall"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+poplog",
    "Poplog",
    {
      name: "Poplog",
      websites: [{ kind: "wikipedia", title: "Poplog", href: "https://en.wikipedia.org/wiki/Poplog" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"],
      platforms: ["platf+ia-32", "platf+x86-64"],
    },
  );

  lb.define(
    "pl+portable-c-compiler",
    "Portable C Compiler",
    {
      name: "Portable C Compiler",
      websites: [{ kind: "wikipedia", title: "pcc", href: "https://en.wikipedia.org/wiki/Portable_C_Compiler" }],
      releases: [{ version: "1.1.0", date: "2014-01-01", kind: "stable" }],
    },
    { licenses: ["lic+bsd"] },
  );

  lb.define(
    "pl+portable-document-format",
    "PDF",
    {
      name: "PDF",
      websites: [{ kind: "wikipedia", title: "PDF", href: "https://en.wikipedia.org/wiki/Portable_Document_Format" }],
    },
    { influences: ["pl+postscript"] },
  );

  lb.define(
    "pl+powerbuilder",
    "Appeon PowerBuilder",
    {
      name: "Appeon PowerBuilder",
      websites: [
        { kind: "wikipedia", title: "Appeon PowerBuilder", href: "https://en.wikipedia.org/wiki/PowerBuilder" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/PowerBuilder_2017_Logo.png/75px-PowerBuilder_2017_Logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+commerce"] },
  );

  lb.define(
    "pl+powerhouse",
    "UNICOM PowerHouse",
    {
      name: "UNICOM PowerHouse",
      websites: [
        {
          kind: "wikipedia",
          title: "UNICOM PowerHouse",
          href: "https://en.wikipedia.org/wiki/Powerhouse_(programming_language)",
        },
      ],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define("pl+powerpc", "PowerPC", {
    name: "PowerPC",
    websites: [{ kind: "wikipedia", title: "PowerPC", href: "https://en.wikipedia.org/wiki/PowerPC" }],
  });

  lb.define("pl+ppc64", "ppc64", {
    name: "ppc64",
    websites: [{ kind: "wikipedia", title: "ppc64", href: "https://en.wikipedia.org/wiki/Ppc64" }],
  });

  lb.define(
    "pl+processing.js",
    "ProcessingProcessing IDE",
    {
      name: "ProcessingProcessing IDE",
      websites: [
        { kind: "wikipedia", title: "ProcessingProcessing IDE", href: "https://en.wikipedia.org/wiki/Processing.js" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ version: "4.3", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl", "lic+lgpl"], paradigms: ["para+objects"], people: ["person+casey-reas", "person+ben-fry"] },
  );

  lb.define(
    "pl+profile-scripting",
    "Profile Scripting Language",
    {
      name: "Profile Scripting Language",
      websites: [{ kind: "wikipedia", title: "PSL", href: "https://en.wikipedia.org/wiki/Profile_Scripting_Language" }],
    },
    { influences: ["pl+mumps"], paradigms: ["para+imperative"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+programming-language-for-business",
    "Programming Language for Business",
    {
      name: "Programming Language for Business",
      websites: [
        { kind: "wikipedia", title: "PL/B", href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business" },
      ],
      extensions: [".rl", ".ps", ".cb", ".pls", ".pgm"],
    },
    { influences: ["pl+cobol"], paradigms: ["para+imperative"], typeSystems: ["tsys+strong", "tsys+static"] },
  );

  lb.define(
    "pl+prograph",
    "Prograph",
    {
      name: "Prograph",
      websites: [{ kind: "wikipedia", title: "Prograph", href: "https://en.wikipedia.org/wiki/Prograph" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Prograph_cpx_logo.PNG/150px-Prograph_cpx_logo.PNG",
        },
      ],
    },
    {
      influences: ["pl+dataflow", "pl+diagram"],
      paradigms: ["para+multi", "para+objects", "para+visual", "para+dataflow"],
      platforms: ["platf+cross-platform", "platf+win", "platf+mac"],
    },
  );

  lb.define(
    "pl+project-verona",
    "Project Verona",
    {
      name: "Project Verona",
      websites: [
        { kind: "wikipedia", title: "Project Verona", href: "https://en.wikipedia.org/wiki/Project_Verona" },
        { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
      ],
    },
    {
      influences: ["pl+cyclone", "pl+rust"],
      licenses: ["lic+mit"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"],
    },
  );

  lb.define(
    "pl+promal",
    "PROMAL",
    {
      name: "PROMAL",
      websites: [{ kind: "wikipedia", title: "PROMAL", href: "https://en.wikipedia.org/wiki/PROMAL" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/PROMAL_logo.png/121px-PROMAL_logo.png",
        },
      ],
      releases: [{ version: "2.1", date: "1986-10-14", kind: "stable" }],
    },
    { paradigms: ["para+imperative", "para+structured"] },
  );

  lb.define("pl+ptc", "PTC", {
    name: "PTC",
    websites: [{ kind: "wikipedia", title: "PTC", href: "https://en.wikipedia.org/wiki/PTC_(software_company)" }],
  });

  lb.define("pl+pthreads", "Pthreads", {
    name: "Pthreads",
    websites: [{ kind: "wikipedia", title: "Pthreads", href: "https://en.wikipedia.org/wiki/Pthreads" }],
  });

  lb.define("pl+puppet", "Puppet", {
    name: "Puppet",
    websites: [{ kind: "wikipedia", title: "Puppet", href: "https://en.wikipedia.org/wiki/Puppet_(software)" }],
  });

  lb.define(
    "pl+pure-data",
    "Pure DataPure Data",
    {
      name: "Pure DataPure Data",
      websites: [{ kind: "wikipedia", title: "Pure DataPure Data", href: "https://en.wikipedia.org/wiki/Pure_Data" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+patcher"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+dataflow"],
      people: ["person+miller-s-puckette"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"],
    },
  );

  lb.define(
    "pl+pwct",
    "PWCT",
    {
      name: "PWCT",
      websites: [{ kind: "wikipedia", title: "PWCT", href: "https://en.wikipedia.org/wiki/PWCT" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/PWCT_1.9_-_Goal_Designer.png/300px-PWCT_1.9_-_Goal_Designer.png",
        },
      ],
      releases: [{ version: "1.9", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+visual-foxpro"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi", "para+visual", "para+imperative", "para+objects"],
      people: ["person+mahmoud-samir-fayed"],
      platforms: ["platf+win"],
    },
  );

  lb.define(
    "pl+q-sharp",
    "Q#",
    { name: "Q#", websites: [{ kind: "wikipedia", title: "Q#", href: "https://en.wikipedia.org/wiki/Q_Sharp" }] },
    {
      influences: ["pl+c-sharp", "pl+f-sharp", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+quantum", "para+functional", "para+imperative"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+qalb",
    "قلب",
    {
      name: "قلب",
      websites: [
        { kind: "wikipedia", title: "قلب", href: "https://en.wikipedia.org/wiki/Qalb_(programming_language)" },
      ],
    },
    { influences: ["pl+scheme"], paradigms: ["para+functional"] },
  );

  lb.define(
    "pl+qore",
    "Qore",
    {
      name: "Qore",
      websites: [
        { kind: "wikipedia", title: "Qore", href: "https://en.wikipedia.org/wiki/Qore_(programming_language)" },
      ],
      releases: [{ version: "1.16.1", date: "2023-01-01", kind: "stable" }],
      extensions: [".q", ".qm", ".qtest"],
    },
    {
      implementations: ["pl+cpp", "pl+pthreads"],
      influences: ["pl+d", "pl+perl", "pl+cpp", "pl+java"],
      licenses: ["lic+mit", "lic+gpl", "lic+lgpl"],
      paradigms: [
        "para+multi",
        "para+thread",
        "para+parallel",
        "para+shared",
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+class",
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+qt",
    "Qt",
    {
      name: "Qt",
      websites: [{ kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
      releases: [{ version: "6.7.1", date: "2024-01-01", kind: "stable" }],
    },
    { influences: ["pl+qml"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+qtscript", "QtScript", {
    name: "QtScript",
    websites: [{ kind: "wikipedia", title: "QtScript", href: "https://en.wikipedia.org/wiki/QtScript" }],
  });

  lb.define(
    "pl+quakec",
    "QuakeC",
    {
      name: "QuakeC",
      websites: [{ kind: "wikipedia", title: "QuakeC", href: "https://en.wikipedia.org/wiki/QuakeC" }],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+john-carmack"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+quercus", "Quercus", {
    name: "Quercus",
    websites: [{ kind: "wikipedia", title: "Quercus", href: "https://en.wikipedia.org/wiki/Quercus_(software)" }],
  });

  lb.define(
    "pl+query",
    "Query language",
    {
      name: "Query language",
      websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
    },
    { dialects: ["pl+sql"] },
  );

  lb.define(
    "pl+quintus-prolog",
    "Quintus Prolog",
    {
      name: "Quintus Prolog",
      websites: [{ kind: "wikipedia", title: "Quintus Prolog", href: "https://en.wikipedia.org/wiki/Quintus_Prolog" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+rapid",
    "RAPID",
    { name: "RAPID", websites: [{ kind: "wikipedia", title: "RAPID", href: "https://en.wikipedia.org/wiki/RAPID" }] },
    { influences: ["pl+c"] },
  );

  lb.define(
    "pl+rapira",
    "Rapira",
    {
      name: "Rapira",
      websites: [{ kind: "wikipedia", title: "Rapira", href: "https://en.wikipedia.org/wiki/Rapira" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RAPIRA_example.png/300px-RAPIRA_example.png",
        },
      ],
    },
    {
      influences: ["pl+algol", "pl+pop-2", "pl+setl"],
      paradigms: ["para+imperative", "para+structured"],
      people: ["person+andrey-ershov"],
      platforms: ["platf+intel-8080", "platf+zilog-z80"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+ratfiv",
    "Ratfor",
    {
      name: "Ratfor",
      websites: [
        { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfiv" },
        {
          kind: "homepage",
          title: "sepwww.stanford.edu",
          href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
        },
      ],
    },
    { influences: ["pl+fortran", "pl+c"], people: ["person+brian-kernighan"] },
  );

  lb.define(
    "pl+ratfor",
    "Ratfor",
    {
      name: "Ratfor",
      websites: [
        { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfor" },
        {
          kind: "homepage",
          title: "sepwww.stanford.edu",
          href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
        },
      ],
    },
    { influences: ["pl+fortran", "pl+c", "pl+speedcoding"], people: ["person+brian-kernighan"] },
  );

  lb.define("pl+ravenscar-profile", "Ravenscar profile", {
    name: "Ravenscar profile",
    websites: [
      { kind: "wikipedia", title: "Ravenscar profile", href: "https://en.wikipedia.org/wiki/Ravenscar_profile" },
    ],
  });

  lb.define(
    "pl+react",
    "React",
    {
      name: "React",
      websites: [
        { kind: "wikipedia", title: "React JS", href: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" }],
      releases: [
        { version: "18.3.1", date: "2024-01-01", kind: "stable" },
        { version: "19.0", date: "2024-01-01", kind: "preview" },
      ],
    },
    { influences: ["pl+php"], licenses: ["lic+mit"], platforms: ["platf+web"] },
  );

  lb.define(
    "pl+redux",
    "Redux",
    {
      name: "Redux",
      websites: [
        { kind: "wikipedia", title: "Redux", href: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" },
      ],
    },
    { influences: ["pl+elm"] },
  );

  lb.define(
    "pl+refal",
    "Refal",
    {
      name: "Refal",
      websites: [
        { kind: "wikipedia", title: "Refal", href: "https://en.wikipedia.org/wiki/REFAL" },
        { kind: "homepage", title: "http://www.refal.net", href: "http://www.refal.net" },
      ],
    },
    {
      paradigms: ["para+pattern", "para+term"],
      people: ["person+valentin-turchin"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+reia",
    "Elixir",
    {
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Reia", href: "https://en.wikipedia.org/wiki/Reia_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [{ version: "1.16.3", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+erlang", "pl+clojure", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+concurrent", "para+distributed", "para+process"],
      platforms: ["platf+erlang"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+renderman-shading", "RenderMan Shading Language", {
    name: "RenderMan Shading Language",
    websites: [
      {
        kind: "wikipedia",
        title: "RenderMan Shading Language",
        href: "https://en.wikipedia.org/wiki/RenderMan_Shading_Language",
      },
    ],
  });

  lb.define("pl+reverse-polish-notation", "RPN", {
    name: "RPN",
    websites: [{ kind: "wikipedia", title: "RPN", href: "https://en.wikipedia.org/wiki/Reverse_Polish_Notation" }],
  });

  lb.define(
    "pl+rexx",
    "Rexx",
    {
      name: "Rexx",
      websites: [{ kind: "wikipedia", title: "REXX", href: "https://en.wikipedia.org/wiki/REXX" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Rexx-img-lg.png/220px-Rexx-img-lg.png",
        },
      ],
      releases: [{ version: "3.274", date: "1996-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+netrexx", "pl+object-rexx", "pl+oorexx", "pl+xedit"],
      implementations: ["pl+arexx"],
      influences: ["pl+pl-slash", "pl+algol", "pl+cms-exec", "pl+exec-2"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+mike-cowlishaw"],
    },
  );

  lb.define("pl+robotics", "Robotics", {
    name: "Robotics",
    websites: [{ kind: "wikipedia", title: "Robotics", href: "https://en.wikipedia.org/wiki/Robotics" }],
  });

  lb.define(
    "pl+roslyn",
    "Roslyn Compiler",
    {
      name: "Roslyn Compiler",
      websites: [
        {
          kind: "wikipedia",
          title: ".NET Compiler Platform (Roslyn)",
          href: "https://en.wikipedia.org/wiki/Roslyn_(compiler)",
        },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Roslyn.png/120px-Roslyn.png" },
      ],
      releases: [{ version: "7.0.0", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mit"], platforms: ["platf+ia-32", "platf+x86-64"] },
  );

  lb.define("pl+rpg", "RPG IV", {
    name: "RPG IV",
    websites: [
      { kind: "wikipedia", title: "RPG II", href: "https://en.wikipedia.org/wiki/RPG_II" },
      { kind: "wikipedia", title: "RPG III", href: "https://en.wikipedia.org/wiki/RPG_III" },
      { kind: "wikipedia", title: "RPG IV", href: "https://en.wikipedia.org/wiki/RPG_IV" },
    ],
  });

  lb.define(
    "pl+rpl",
    "RPL",
    {
      name: "RPL",
      websites: [{ kind: "wikipedia", title: "RPL", href: "https://en.wikipedia.org/wiki/RPL_(programming_language)" }],
    },
    {
      influences: ["pl+forth", "pl+reverse-polish-notation", "pl+lisp"],
      paradigms: ["para+concatenative", "para+stack", "para+structured"],
    },
  );

  lb.define(
    "pl+rtl-slash2",
    "RTL/2",
    { name: "RTL/2", websites: [{ kind: "wikipedia", title: "RTL/2", href: "https://en.wikipedia.org/wiki/RTL/2" }] },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+real"],
      people: ["person+jgp-barnes"],
      platforms: ["platf+cross-platform", "platf+openvms"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+structural"],
    },
  );

  lb.define(
    "pl+rubinius",
    "Rubinius",
    {
      name: "Rubinius",
      websites: [{ kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" }],
      releases: [{ version: "5.0", date: "2020-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mozilla-public"] },
  );

  lb.define(
    "pl+s",
    "S",
    {
      name: "S",
      websites: [
        { kind: "wikipedia", title: "S", href: "https://en.wikipedia.org/wiki/S_(programming_language)" },
        {
          kind: "homepage",
          title: "ect.bell-labs.com/sl/S/",
          href: "https://web.archive.org/web/20181014111802/http://ect.bell-labs.com/sl/S/",
        },
        { kind: "wikipedia", title: "Wayback Machine", href: "https://en.wikipedia.org/wiki/Wayback_Machine" },
      ],
    },
    {
      implementations: ["pl+s-plus"],
      influences: ["pl+c", "pl+apl", "pl+fortran", "pl+scheme"],
      paradigms: ["para+multi", "para+imperative", "para+objects"],
      people: ["person+john-chambers", "person+william-s-cleveland", "person+trevor-hastie"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+s-lang",
    "S-Lang",
    {
      name: "S-Lang",
      websites: [{ kind: "wikipedia", title: "S-Lang", href: "https://en.wikipedia.org/wiki/S-Lang" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/JED-editor-slang-source.png/220px-JED-editor-slang-source.png",
        },
      ],
      releases: [{ version: "2.3.3", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+s-plus",
    "S-PLUS",
    {
      name: "S-PLUS",
      websites: [{ kind: "wikipedia", title: "S-PLUS", href: "https://en.wikipedia.org/wiki/S-PLUS" }],
      releases: [{ version: "8.2", date: "2010-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+s3",
    "S3",
    {
      name: "S3",
      websites: [{ kind: "wikipedia", title: "S3", href: "https://en.wikipedia.org/wiki/S3_(programming_language)" }],
    },
    { influences: ["pl+algol"], paradigms: ["para+structured", "para+imperative"] },
  );

  lb.define(
    "pl+sac",
    "SAC",
    {
      name: "SAC",
      websites: [{ kind: "wikipedia", title: "SAC", href: "https://en.wikipedia.org/wiki/SAC_programming_language" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/SAC_language_logo.png/121px-SAC_language_logo.png",
        },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+apl", "pl+sisal", "pl+c"],
      licenses: ["lic+free"],
      paradigms: ["para+array", "para+functional"],
      platforms: ["platf+posix", "platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+safari", "Safari", {
    name: "Safari",
    websites: [{ kind: "wikipedia", title: "Safari", href: "https://en.wikipedia.org/wiki/Safari_(web_browser)" }],
  });

  lb.define("pl+sail", "SAIL", {
    name: "SAIL",
    websites: [{ kind: "wikipedia", title: "SAIL", href: "https://en.wikipedia.org/wiki/SAIL_(programming_language)" }],
  });

  lb.define("pl+sap", "SAP S/4HANA", {
    name: "SAP S/4HANA",
    websites: [
      { kind: "wikipedia", title: "SAP R/2", href: "https://en.wikipedia.org/wiki/SAP_R/2" },
      { kind: "wikipedia", title: "SAP R/3", href: "https://en.wikipedia.org/wiki/SAP_R/3" },
      { kind: "wikipedia", title: "SAP S/4HANA", href: "https://en.wikipedia.org/wiki/SAP_S/4HANA" },
    ],
  });

  lb.define(
    "pl+sas",
    "SAS",
    {
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_language" }],
    },
    {
      influences: ["pl+pl-slash"],
      licenses: ["lic+proprietary", "lic+commercial"],
      paradigms: ["para+multi", "para+data", "para+imperative"],
      people: ["person+anthony-james-barr"],
      platforms: ["platf+win", "platf+mac"],
    },
  );

  lb.define(
    "pl+sas-system",
    "SAS",
    {
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_System" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png/120px-%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png",
        },
      ],
      releases: [{ version: "9.4", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+sasl",
    "SASL",
    {
      name: "SASL",
      websites: [
        { kind: "wikipedia", title: "SASL", href: "https://en.wikipedia.org/wiki/SASL_(programming_language)" },
      ],
    },
    { influences: ["pl+iswim"], paradigms: ["para+functional"], people: ["person+david-turner"] },
  );

  lb.define(
    "pl+sather",
    "Sather",
    {
      name: "Sather",
      websites: [{ kind: "wikipedia", title: "Sather", href: "https://en.wikipedia.org/wiki/Sather" }],
      releases: [{ version: "1.2.3", date: "2007-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+clu", "pl+eiffel", "pl+common-lisp", "pl+scheme"],
      paradigms: ["para+objects", "para+functional"],
      people: ["person+steve-omohundro"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+sawzall",
    "Sawzall",
    {
      name: "Sawzall",
      websites: [
        { kind: "wikipedia", title: "Sawzall", href: "https://en.wikipedia.org/wiki/Sawzall_(programming_language)" },
      ],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define(
    "pl+sbcl",
    "SBCL",
    {
      name: "SBCL",
      websites: [{ kind: "wikipedia", title: "SBCL", href: "https://en.wikipedia.org/wiki/SBCL" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SBCL_screenshot.png/250px-SBCL_screenshot.png",
        },
      ],
      releases: [{ version: "2.4.5", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+public-domain", "lic+mit", "lic+bsd"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+scaleform-gfx", "Scaleform GFx", {
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  lb.define("pl+scicos", "Scicos", {
    name: "Scicos",
    websites: [
      { kind: "wikipedia", title: "Scicos", href: "https://en.wikipedia.org/wiki/Scicos" },
      { kind: "homepage", title: "www.scicos.org", href: "http://www.scicos.org" },
    ],
    releases: [{ version: "4.4.1", date: "2011-01-01", kind: "stable" }],
  });

  lb.define(
    "pl+scm",
    "SCM",
    {
      name: "SCM",
      websites: [
        { kind: "wikipedia", title: "SCM", href: "https://en.wikipedia.org/wiki/SCM_(Scheme_implementation)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/SCM_64.png" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+scheme", "pl+siod"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+dynamic", "tsys+latent"],
    },
  );

  lb.define(
    "pl+script.net",
    "Script.NET",
    {
      name: "Script.NET",
      websites: [{ kind: "wikipedia", title: "Script.NET", href: "https://en.wikipedia.org/wiki/Script.NET" }],
    },
    {
      influences: ["pl+javascript"],
      paradigms: ["para+imperative", "para+meta", "para+scripting"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+scripting",
    "Scripting language",
    {
      name: "Scripting language",
      websites: [
        { kind: "wikipedia", title: "Scripting language", href: "https://en.wikipedia.org/wiki/Scripting_language" },
      ],
    },
    { dialects: ["pl+sensetalk"] },
  );

  lb.define(
    "pl+sed",
    "sed",
    {
      name: "sed",
      websites: [{ kind: "wikipedia", title: "sed", href: "https://en.wikipedia.org/wiki/Sed" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sed_stream_editor_cropped1.jpg/300px-Sed_stream_editor_cropped1.jpg",
        },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+ed"],
      paradigms: ["para+scripting"],
      people: ["person+lee-e-mcmahon"],
    },
  );

  lb.define("pl+semi-automatic-ground-environment", "SAGE", {
    name: "SAGE",
    websites: [
      { kind: "wikipedia", title: "SAGE", href: "https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment" },
    ],
  });

  lb.define(
    "pl+sensetalk",
    "SenseTalk",
    {
      name: "SenseTalk",
      websites: [{ kind: "wikipedia", title: "SenseTalk", href: "https://en.wikipedia.org/wiki/SenseTalk" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/ST-HelloWorld2.png/250px-ST-HelloWorld2.png",
        },
      ],
      releases: [{ version: "2.15", date: "2024-01-01", kind: "stable" }],
      extensions: [".script", ".st"],
    },
    {
      influences: ["pl+hypertalk", "pl+xtalk"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+people", "para+multi", "para+objects"],
      typeSystems: ["tsys+duck"],
    },
  );

  lb.define(
    "pl+sequencel",
    "SequenceL",
    {
      name: "SequenceL",
      websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+parallel", "para+functional", "para+dec"],
      platforms: ["platf+x86", "platf+arm", "platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+static", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+setl",
    "SETL",
    {
      name: "SETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/SETL" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+jacob-t-schwartz"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+setl2",
    "SETL2",
    {
      name: "SETL2",
      websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+isetl", "pl+setl", "pl+algol", "pl+setl2"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+jacob-t-schwartz"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+shading",
    "shading language",
    {
      name: "shading language",
      websites: [
        { kind: "wikipedia", title: "shading language", href: "https://en.wikipedia.org/wiki/Shading_language" },
      ],
    },
    { dialects: ["pl+cg"] },
  );

  lb.define(
    "pl+sharp-pc-1211",
    "Sharp PC-1211 BASIC",
    {
      name: "Sharp PC-1211 BASIC",
      websites: [
        { kind: "wikipedia", title: "Sharp PC-1211 BASIC", href: "https://en.wikipedia.org/wiki/Sharp_PC-1211" },
      ],
    },
    { influences: ["pl+basic"] },
  );

  lb.define("pl+short-code", "Short Code", {
    name: "Short Code",
    websites: [
      { kind: "wikipedia", title: "Short Code", href: "https://en.wikipedia.org/wiki/Short_Code_(computer_language)" },
    ],
  });

  lb.define("pl+siemens", "Siemens", {
    name: "Siemens",
    websites: [{ kind: "wikipedia", title: "Siemens", href: "https://en.wikipedia.org/wiki/Siemens" }],
  });

  lb.define(
    "pl+silverfrost-ftn95",
    "Silverfrost FTN95: Fortran for Windows",
    {
      name: "Silverfrost FTN95: Fortran for Windows",
      websites: [{ kind: "wikipedia", title: "Silverfrost", href: "https://en.wikipedia.org/wiki/Silverfrost_FTN95" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Silverfrost_ftn95.jpg" }],
      releases: [{ version: "9.00", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define("pl+simscript", "Simscript", {
    name: "Simscript",
    websites: [{ kind: "wikipedia", title: "Simscript", href: "https://en.wikipedia.org/wiki/Simscript" }],
  });

  lb.define(
    "pl+simula",
    "Simula",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula", href: "https://en.wikipedia.org/wiki/Simula" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    },
    {
      implementations: ["pl+algol", "pl+simscript"],
      influences: ["pl+algol", "pl+simscript"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+ole-johan-dahl", "person+kristen-nygaard"],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+static", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+simula-67",
    "Simula",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    },
    {
      implementations: ["pl+algol", "pl+simscript"],
      influences: ["pl+algol", "pl+simscript"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+ole-johan-dahl", "person+kristen-nygaard"],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+static", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+simula67",
    "Simula",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula67", href: "https://en.wikipedia.org/wiki/Simula67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    },
    {
      implementations: ["pl+algol", "pl+simscript"],
      influences: ["pl+algol", "pl+simscript"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+ole-johan-dahl", "person+kristen-nygaard"],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+static", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+simulationx",
    "SimulationX",
    {
      name: "SimulationX",
      websites: [
        { kind: "wikipedia", title: "SimulationX", href: "https://en.wikipedia.org/wiki/SimulationX" },
        { kind: "homepage", title: "SimulationX product page", href: "http://www.simulationx.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SimulationX_by_ESI_color_rgb.png/120px-SimulationX_by_ESI_color_rgb.png",
        },
      ],
      releases: [{ version: "4.3", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary", "lic+commercial"], platforms: ["platf+ia-32", "platf+x86-64"] },
  );

  lb.define(
    "pl+simulink",
    "Simulink",
    {
      name: "Simulink",
      websites: [{ kind: "wikipedia", title: "Simulink", href: "https://en.wikipedia.org/wiki/Simulink" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Simulink_Logo_%28non-wordmark%29.png/100px-Simulink_Logo_%28non-wordmark%29.png",
        },
      ],
      releases: [{ version: "10.7", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+singularity",
    "Singularity",
    {
      name: "Singularity",
      websites: [
        {
          kind: "wikipedia",
          title: "Singularity",
          href: "https://en.wikipedia.org/wiki/Singularity_(operating_system)",
        },
      ],
    },
    { influences: ["pl+emerald"] },
  );

  lb.define(
    "pl+siod",
    "SIOD",
    {
      name: "SIOD",
      websites: [{ kind: "wikipedia", title: "SIOD", href: "https://en.wikipedia.org/wiki/SIOD" }],
      releases: [{ version: "3.63", date: "2008-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta"],
      platforms: ["platf+ia-32", "platf+cross-platform", "platf+linux", "platf+openvms", "platf+win"],
      typeSystems: ["tsys+strong", "tsys+dynamic", "tsys+latent"],
    },
  );

  lb.define(
    "pl+sisal",
    "SISAL",
    { name: "SISAL", websites: [{ kind: "wikipedia", title: "SISAL", href: "https://en.wikipedia.org/wiki/SISAL" }] },
    {
      influences: ["pl+lucid", "pl+pascal", "pl+c", "pl+fortran"],
      paradigms: ["para+functional", "para+dataflow"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+sketchpad", "Sketchpad", {
    name: "Sketchpad",
    websites: [{ kind: "wikipedia", title: "Sketchpad", href: "https://en.wikipedia.org/wiki/Sketchpad" }],
  });

  lb.define(
    "pl+skill",
    "SKILL",
    { name: "SKILL", websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/SKILL" }] },
    {
      influences: ["pl+scheme", "pl+common-lisp", "pl+common-lisp-object-system"],
      paradigms: ["para+functional", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+small",
    "Small Machine Algol Like Language",
    {
      name: "Small Machine Algol Like Language",
      websites: [
        { kind: "wikipedia", title: "Small Machine Algol Like Language", href: "https://en.wikipedia.org/wiki/SMALL" },
      ],
    },
    {
      implementations: ["pl+fortran"],
      influences: ["pl+algol"],
      paradigms: ["para+imperative", "para+structured", "para+objects"],
      platforms: ["platf+dec"],
    },
  );

  lb.define("pl+small-c", "Small-C", {
    name: "Small-C",
    websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
  });

  lb.define("pl+smarteiffel", "SmartEiffel", {
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  lb.define(
    "pl+sml",
    "Standard ML",
    {
      name: "Standard ML",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
      ],
      releases: [
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+alice", "pl+mlton", "pl+sml", "pl+concurrent-ml", "pl+dependent-ml"],
      implementations: ["pl+sml", "pl+c", "pl+mlton", "pl+poly-slashml"],
      influences: ["pl+ml", "pl+pascal", "pl+sml", "pl+hope"],
      licenses: ["lic+permissive"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+modular"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+snap-",
    "Snap!",
    {
      name: "Snap!",
      websites: [
        { kind: "wikipedia", title: "Snap!", href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Snap%21.svg" }],
      releases: [{ version: "9.2.17", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+javascript"],
      influences: ["pl+scratch", "pl+scheme", "pl+logo", "pl+smalltalk", "pl+apl"],
      licenses: ["lic+affero-gpl"],
      paradigms: ["para+objects", "para+educational", "para+event"],
      people: ["person+brian-harvey"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+snobol",
    "SNOBOL",
    {
      name: "SNOBOL",
      websites: [
        { kind: "wikipedia", title: "SNOBOL", href: "https://en.wikipedia.org/wiki/SNOBOL" },
        { kind: "homepage", title: "https://www.regressive.org/snobol4/", href: "https://www.regressive.org/snobol4/" },
      ],
      releases: [{ version: "unknown", date: "1967-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+icon"],
      implementations: ["pl+spitbol"],
      influences: ["pl+comit"],
      paradigms: ["para+imperative", "para+unstructured"],
      people: ["person+david-j-farber", "person+ralph-griswold"],
    },
  );

  lb.define(
    "pl+sp-slashk",
    "SP/k",
    { name: "SP/k", websites: [{ kind: "wikipedia", title: "SP/k", href: "https://en.wikipedia.org/wiki/SP/k" }] },
    {
      influences: ["pl+pl-slash"],
      paradigms: ["para+structured", "para+imperative"],
      people: ["person+rc-holt", "person+jr-cordy"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+sparc", "SPARC", {
    name: "SPARC",
    websites: [{ kind: "wikipedia", title: "SPARC", href: "https://en.wikipedia.org/wiki/SPARC" }],
  });

  lb.define(
    "pl+spark",
    "SPARK",
    {
      name: "SPARK",
      websites: [
        { kind: "wikipedia", title: "SPARK", href: "https://en.wikipedia.org/wiki/SPARK_(programming_language)" },
        { kind: "homepage", title: "About SPARK", href: "http://www.adacore.com/about-spark" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Sparkada.jpg/250px-Sparkada.jpg" },
      ],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ada", "pl+eiffel"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+sparql",
    "SPARQL",
    {
      name: "SPARQL",
      websites: [{ kind: "wikipedia", title: "SPARQL", href: "https://en.wikipedia.org/wiki/SPARQL" }],
      releases: [{ version: "1.1", date: "2013-01-01", kind: "stable" }],
    },
    { implementations: ["pl+jena", "pl+virtuoso-universal-server"], influences: ["pl+sql"], paradigms: ["para+query"] },
  );

  lb.define(
    "pl+speakeasy",
    "SpeakeasySpeakeasy (the interpreted programming language)",
    {
      name: "SpeakeasySpeakeasy (the interpreted programming language)",
      websites: [
        {
          kind: "wikipedia",
          title: "SpeakeasySpeakeasy (the interpreted programming language)",
          href: "https://en.wikipedia.org/wiki/Speakeasy_(computational_environment)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Speakeasy_Red_Logo.png/120px-Speakeasy_Red_Logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+apl"],
      licenses: ["lic+trialware"],
      paradigms: ["para+imperative"],
      people: ["person+stanley-cohen"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+speedcoding",
    "Speedcoding",
    {
      name: "Speedcoding",
      websites: [{ kind: "wikipedia", title: "Speedcoding", href: "https://en.wikipedia.org/wiki/Speedcoding" }],
    },
    {
      influences: ["pl+assembly"],
      paradigms: ["para+structured", "para+generic"],
      people: ["person+john-backus"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+manifest"],
    },
  );

  lb.define("pl+spidermonkey", "SpiderMonkey", {
    name: "SpiderMonkey",
    websites: [
      {
        kind: "wikipedia",
        title: "SpiderMonkey",
        href: "https://en.wikipedia.org/wiki/SpiderMonkey_(JavaScript_engine)",
      },
    ],
  });

  lb.define("pl+spitbol", "SPITBOL", {
    name: "SPITBOL",
    websites: [{ kind: "wikipedia", title: "SPITBOL", href: "https://en.wikipedia.org/wiki/SPITBOL" }],
  });

  lb.define(
    "pl+split-c",
    "Split-C",
    {
      name: "Split-C",
      websites: [
        { kind: "wikipedia", title: "Split-C", href: "https://en.wikipedia.org/wiki/Split-C" },
        {
          kind: "homepage",
          title: "Split-C project website",
          href: "http://www.eecs.berkeley.edu/Research/Projects/CS/parallel/castle/split-c/",
        },
      ],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+structured", "para+parallel"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+squirrel",
    "Squirrel",
    {
      name: "Squirrel",
      websites: [
        { kind: "wikipedia", title: "Squirrel", href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)" },
      ],
      releases: [{ version: "3.2", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp", "pl+javascript", "pl+lua", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+scripting", "para+imperative", "para+functional", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+starlogo",
    "StarLogo",
    {
      name: "StarLogo",
      websites: [{ kind: "wikipedia", title: "StarLogo", href: "https://en.wikipedia.org/wiki/StarLogo" }],
      releases: [{ version: "2.1", date: "2018-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+java", "pl+c"],
      influences: ["pl+logo"],
      paradigms: ["para+multi", "para+educational", "para+imperative", "para+agent", "para+simulation"],
      people: ["person+mitchel-resnick", "person+media-lab"],
      platforms: ["platf+jvm", "platf+win", "platf+mac"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+stata",
    "Stata",
    {
      name: "Stata",
      websites: [{ kind: "wikipedia", title: "Stata", href: "https://en.wikipedia.org/wiki/Stata" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Stata_logo_med_blue.png/120px-Stata_logo_med_blue.png",
        },
      ],
      releases: [{ version: "18.0", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+stoic",
    "STOIC",
    { name: "STOIC", websites: [{ kind: "wikipedia", title: "STOIC", href: "https://en.wikipedia.org/wiki/STOIC" }] },
    {
      influences: ["pl+forth", "pl+reverse-polish-notation"],
      paradigms: ["para+concatenative", "para+stack", "para+imperative"],
      people: ["person+jonathan-sachs"],
      platforms: ["platf+openvms"],
    },
  );

  lb.define(
    "pl+strand",
    "Strand",
    {
      name: "Strand",
      websites: [
        { kind: "wikipedia", title: "Strand", href: "https://en.wikipedia.org/wiki/Strand_(programming_language)" },
      ],
    },
    { influences: ["pl+prolog"] },
  );

  lb.define(
    "pl+strongtalk",
    "Strongtalk",
    {
      name: "Strongtalk",
      websites: [{ kind: "wikipedia", title: "Strongtalk", href: "https://en.wikipedia.org/wiki/Strongtalk" }],
      releases: [{ version: "2.0", date: "2006-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+smalltalk"],
      influences: ["pl+smalltalk", "pl+self"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects"],
      people: ["person+gilad-bracha"],
      platforms: ["platf+ia-32", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+structured-text",
    "Structured text",
    {
      name: "Structured text",
      websites: [
        { kind: "wikipedia", title: "Structured text", href: "https://en.wikipedia.org/wiki/Structured_text" },
      ],
    },
    { influences: ["pl+pascal"] },
  );

  lb.define(
    "pl+subl",
    "SubL",
    { name: "SubL", websites: [{ kind: "wikipedia", title: "SubL", href: "https://en.wikipedia.org/wiki/SubL" }] },
    { influences: ["pl+armed-bear-common-lisp", "pl+common-lisp"] },
  );

  lb.define(
    "pl+superplan",
    "Superplan",
    {
      name: "Superplan",
      websites: [{ kind: "wikipedia", title: "Superplan", href: "https://en.wikipedia.org/wiki/Superplan" }],
    },
    { influences: ["pl+plankalkul"], people: ["person+heinz-rutishauser"] },
  );

  lb.define(
    "pl+supertalk",
    "SuperTalk",
    {
      name: "SuperTalk",
      websites: [{ kind: "wikipedia", title: "SuperTalk", href: "https://en.wikipedia.org/wiki/SuperTalk" }],
    },
    { influences: ["pl+hypertalk", "pl+xtalk"] },
  );

  lb.define(
    "pl+sympl",
    "SYMPL",
    { name: "SYMPL", websites: [{ kind: "wikipedia", title: "SYMPL", href: "https://en.wikipedia.org/wiki/SYMPL" }] },
    { influences: ["pl+jovial"] },
  );

  lb.define(
    "pl+sysquake",
    "Sysquake",
    {
      name: "Sysquake",
      websites: [
        { kind: "wikipedia", title: "Sysquake", href: "https://en.wikipedia.org/wiki/Sysquake" },
        { kind: "homepage", title: "Sysquake product page", href: "http://www.calerga.com/products/Sysquake/" },
      ],
      releases: [{ version: "6.5", date: "2019-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+t",
    "T",
    {
      name: "T",
      websites: [
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_(programming_language)" },
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_programming_language" },
      ],
    },
    {
      influences: ["pl+scheme"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+functional", "para+meta"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+tads",
    "TADS",
    {
      name: "TADS",
      websites: [{ kind: "wikipedia", title: "TADS", href: "https://en.wikipedia.org/wiki/TADS" }],
      releases: [{ version: "3.1.3", date: "2013-01-01", kind: "stable" }],
    },
    {
      paradigms: ["para+prototypes", "para+domain"],
      platforms: ["platf+amiga", "platf+dos", "platf+win", "platf+unix", "platf+linux", "platf+mac"],
      typeSystems: ["tsys+strong", "tsys+inferred"],
    },
  );

  lb.define("pl+tail-call", "properly tail recursive", {
    name: "properly tail recursive",
    websites: [
      { kind: "wikipedia", title: "properly tail recursive", href: "https://en.wikipedia.org/wiki/Tail_call" },
    ],
  });

  lb.define(
    "pl+tea",
    "Tea",
    {
      name: "Tea",
      websites: [
        { kind: "wikipedia", title: "Tea", href: "https://en.wikipedia.org/wiki/Tea_(programming_language)" },
        { kind: "repository", title: "Tea", href: "https://github.com/jorgefranconunes/tea" },
      ],
    },
    {
      influences: ["pl+tcl", "pl+java", "pl+scheme"],
      paradigms: ["para+multi", "para+functional", "para+objects", "para+class"],
    },
  );

  lb.define(
    "pl+telcomp",
    "TELCOMP",
    {
      name: "TELCOMP",
      websites: [{ kind: "wikipedia", title: "TELCOMP", href: "https://en.wikipedia.org/wiki/TELCOMP" }],
    },
    { influences: ["pl+joss"] },
  );

  lb.define(
    "pl+tex",
    "TeX",
    {
      name: "TeX",
      websites: [{ kind: "wikipedia", title: "TeX", href: "https://en.wikipedia.org/wiki/TeX" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/68/TeX_logo.svg" }],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
      extensions: [".tex"],
    },
    { licenses: ["lic+permissive-free"], people: ["person+donald-knuth"] },
  );

  lb.define(
    "pl+threading-building-blocks",
    "Threading Building Blocks",
    {
      name: "Threading Building Blocks",
      websites: [
        {
          kind: "wikipedia",
          title: "Threading Building Blocks",
          href: "https://en.wikipedia.org/wiki/Threading_Building_Blocks",
        },
      ],
      releases: [{ version: "2021.8", date: "2021-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define(
    "pl+tk",
    "Tk",
    {
      name: "Tk",
      websites: [{ kind: "wikipedia", title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tcl-Tk_universal_scripting.svg" },
      ],
      releases: [{ version: "8.6.13", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+bsd-s"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+tmg",
    "TMGUnix TMG",
    {
      name: "TMGUnix TMG",
      websites: [{ kind: "wikipedia", title: "TMG", href: "https://en.wikipedia.org/wiki/TMG_(language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Brainfuck_to_C_translator_in_Unix_TMG.png/225px-Brainfuck_to_C_translator_in_Unix_TMG.png",
        },
      ],
    },
    {
      dialects: ["pl+pdp-7", "pl+pdp-11"],
      influences: ["pl+algol", "pl+b", "pl+pl-slash", "pl+snobol"],
      people: ["person+douglas-mcilroy"],
    },
  );

  lb.define(
    "pl+trac",
    "TRAC",
    {
      name: "TRAC",
      websites: [
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_(programming_language)" },
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_programming_language" },
      ],
    },
    { paradigms: ["para+macros"], people: ["person+calvin-mooers"] },
  );

  lb.define(
    "pl+transaction-application",
    "Transaction Programming Language (TAL)",
    {
      name: "Transaction Programming Language (TAL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Transaction Programming Language (TAL)",
          href: "https://en.wikipedia.org/wiki/Transaction_Application_Language",
        },
      ],
    },
    { licenses: ["lic+proprietary", "lic+commercial"], platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+transcript",
    "LiveCodeLiveCode Script",
    {
      name: "LiveCodeLiveCode Script",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveCodeLiveCode Script",
          href: "https://en.wikipedia.org/wiki/Transcript_(programming_language)",
        },
      ],
      releases: [
        { version: "9.6.4", date: "2021-01-01", kind: "stable" },
        { version: "9.6.5", date: "2021-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+hypertalk"],
      licenses: ["lic+proprietary", "lic+gpl"],
      paradigms: ["para+objects"],
      platforms: ["platf+win", "platf+mac", "platf+linux", "platf+unix", "platf+rpi"],
    },
  );

  lb.define("pl+trueimage", "TrueImage", {
    name: "TrueImage",
    websites: [{ kind: "wikipedia", title: "TrueImage", href: "https://en.wikipedia.org/wiki/TrueImage" }],
  });

  lb.define(
    "pl+ttm",
    "TTM",
    {
      name: "TTM",
      websites: [{ kind: "wikipedia", title: "TTM", href: "https://en.wikipedia.org/wiki/TTM_(programming_language)" }],
      releases: [{ version: "1.0", kind: "stable" }],
    },
    { influences: ["pl+trac"], licenses: ["lic+mit"], paradigms: ["para+macros"] },
  );

  lb.define(
    "pl+turing",
    "TuringTuring+Object-Oriented Turing",
    {
      name: "TuringTuring+Object-Oriented Turing",
      websites: [
        { kind: "wikipedia", title: "Turing Plus", href: "https://en.wikipedia.org/wiki/Turing_Plus" },
        { kind: "wikipedia", title: "Turing", href: "https://en.wikipedia.org/wiki/Turing_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Turing_logo.gif/121px-Turing_logo.gif",
        },
      ],
    },
    {
      influences: ["pl+concurrent-euclid", "pl+euclid", "pl+sp-slashk"],
      paradigms: ["para+multi", "para+imperative", "para+objects", "para+concurrent"],
      people: ["person+ric-holt"],
      platforms: ["platf+cross-platform", "platf+mips"],
      typeSystems: ["tsys+static", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+turtlestitch",
    "TurtleStitch",
    {
      name: "TurtleStitch",
      websites: [{ kind: "wikipedia", title: "Turtlestitch", href: "https://en.wikipedia.org/wiki/Turtlestitch" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turtlestitch_Logo.png/121px-Turtlestitch_Logo.png",
        },
      ],
      releases: [{ version: "2.7.7", date: "2022-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+javascript"],
      influences: ["pl+scratch", "pl+snap-", "pl+logo", "pl+maker-culture"],
      licenses: ["lic+affero-gpl"],
      paradigms: ["para+objects", "para+educational", "para+event"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+tutor",
    "TUTOR",
    { name: "TUTOR", websites: [{ kind: "wikipedia", title: "TUTOR", href: "https://en.wikipedia.org/wiki/TUTOR" }] },
    { paradigms: ["para+imperative"] },
  );

  lb.define("pl+tweak", "Tweak", {
    name: "Tweak",
    websites: [
      { kind: "wikipedia", title: "Tweak", href: "https://en.wikipedia.org/wiki/Tweak_(programming_environment)" },
    ],
  });

  lb.define("pl+tynker", "Tynker IDE", {
    name: "Tynker IDE",
    websites: [{ kind: "wikipedia", title: "Tynker IDE", href: "https://en.wikipedia.org/wiki/Tynker" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Tynker_logo.png/120px-Tynker_logo.png",
      },
    ],
  });

  lb.define(
    "pl+ucblogo",
    "UCBLogo",
    {
      name: "UCBLogo",
      websites: [{ kind: "wikipedia", title: "UCBLogo", href: "https://en.wikipedia.org/wiki/UCBLogo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ubclogo_spiral.png/121px-Ubclogo_spiral.png",
        },
      ],
      releases: [{ version: "6.2.1", date: "2020-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflection"],
      people: ["person+brian-harvey"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+uefn", "UEFN", {
    name: "UEFN",
    websites: [{ kind: "wikipedia", title: "UEFN", href: "https://en.wikipedia.org/wiki/UEFN" }],
  });

  lb.define("pl+uml", "UML", {
    name: "UML",
    websites: [{ kind: "wikipedia", title: "UML", href: "https://en.wikipedia.org/wiki/Unified_Modeling_Language" }],
  });

  lb.define(
    "pl+unicon",
    "Unicon",
    {
      name: "Unicon",
      websites: [
        { kind: "wikipedia", title: "Unicon", href: "https://en.wikipedia.org/wiki/Unicon_(programming_language)" },
      ],
    },
    {
      influences: ["pl+icon"],
      licenses: ["lic+gpl"],
      paradigms: ["para+objects", "para+imperative"],
      platforms: ["platf+cross-platform", "platf+win", "platf+unix"],
    },
  );

  lb.define(
    "pl+uniface",
    "Uniface",
    {
      name: "Uniface",
      websites: [
        { kind: "wikipedia", title: "Uniface", href: "https://en.wikipedia.org/wiki/Uniface_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_Payoff_RGB.svg" }],
      releases: [{ version: "10.4.01.018", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+commercial"] },
  );

  lb.define(
    "pl+unified-parallel-c",
    "Unified Parallel C (UPC)",
    {
      name: "Unified Parallel C (UPC)",
      websites: [
        { kind: "wikipedia", title: "Unified Parallel C", href: "https://en.wikipedia.org/wiki/Unified_Parallel_C" },
      ],
      releases: [{ version: "2022.10.0", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+split-c"],
      paradigms: ["para+parallel", "para+message", "para+imperative", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest"],
    },
  );

  lb.define("pl+univac-1108", "UNIVAC 1108", {
    name: "UNIVAC 1108",
    websites: [{ kind: "wikipedia", title: "UNIVAC 1108", href: "https://en.wikipedia.org/wiki/UNIVAC_1108" }],
  });

  lb.define("pl+unix-shell", "Unix shell", {
    name: "Unix shell",
    websites: [{ kind: "wikipedia", title: "Unix shell", href: "https://en.wikipedia.org/wiki/Unix_shell" }],
  });

  lb.define(
    "pl+urbiscript",
    "urbiscript",
    {
      name: "urbiscript",
      websites: [{ kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" }],
      releases: [{ version: "2.7.4", date: "2011-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp", "pl+self", "pl+io"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+multi", "para+objects", "para+event", "para+imperative", "para+functional", "para+reflective"],
      people: ["person+jean-christophe-baillie"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic"],
    },
  );

  lb.define("pl+v8", "V8", {
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  lb.define(
    "pl+vax",
    "VAX",
    { name: "VAX", websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }] },
    { influences: ["pl+multilisp"] },
  );

  lb.define("pl+vhdl-ams", "VHDL-AMS", {
    name: "VHDL-AMS",
    websites: [{ kind: "wikipedia", title: "VHDL-AMS", href: "https://en.wikipedia.org/wiki/VHDL-AMS" }],
  });

  lb.define("pl+virtuoso-universal-server", "OpenLink Virtuoso", {
    name: "OpenLink Virtuoso",
    websites: [
      {
        kind: "wikipedia",
        title: "OpenLink Virtuoso",
        href: "https://en.wikipedia.org/wiki/Virtuoso_Universal_Server",
      },
    ],
  });

  lb.define(
    "pl+visual-dataflex",
    "DataFlex",
    {
      name: "DataFlex",
      websites: [{ kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/Visual_DataFlex" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      releases: [{ version: "24.0", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+commercial", "lic+proprietary"] },
  );

  lb.define("pl+visual-eiffel", "Visual Eiffel", {
    name: "Visual Eiffel",
    websites: [{ kind: "wikipedia", title: "Visual Eiffel", href: "https://en.wikipedia.org/wiki/Visual_Eiffel" }],
  });

  lb.define(
    "pl+visual-foxpro",
    "Visual FoxPro",
    {
      name: "Visual FoxPro",
      websites: [{ kind: "wikipedia", title: "Visual FoxPro", href: "https://en.wikipedia.org/wiki/Visual_FoxPro" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/VisualFoxProScreenshot.png/220px-VisualFoxProScreenshot.png",
        },
      ],
    },
    { licenses: ["lic+commercial", "lic+proprietary"], platforms: ["platf+ia-32"] },
  );

  lb.define(
    "pl+visual-j-sharp",
    "Visual J#",
    {
      name: "Visual J#",
      websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/Visual_J_Sharp" }],
    },
    {
      influences: ["pl+java", "pl+visual-jpp"],
      paradigms: ["para+objects", "para+structured", "para+imperative"],
      platforms: ["platf+.net"],
    },
  );

  lb.define("pl+visual-jpp", "Visual J++", {
    name: "Visual J++",
    websites: [{ kind: "wikipedia", title: "J++", href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B" }],
  });

  lb.define(
    "pl+visual-prolog",
    "Visual Prolog",
    {
      name: "Visual Prolog",
      websites: [{ kind: "wikipedia", title: "Visual Prolog", href: "https://en.wikipedia.org/wiki/Visual_Prolog" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Visual_Prolog_IDE_Screenshot.png/300px-Visual_Prolog_IDE_Screenshot.png",
        },
      ],
      releases: [{ version: "unknown", date: "1105-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+prolog"],
      paradigms: [
        "para+multi",
        "para+logic",
        "para+functional",
        "para+objects",
        "para+imperative",
        "para+dec",
        "para+generic",
        "para+concurrent",
      ],
      platforms: ["platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );

  lb.define("pl+visual-studio-code", "Visual Studio Code", {
    name: "Visual Studio Code",
    websites: [
      { kind: "wikipedia", title: "Visual Studio Code", href: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    ],
  });

  lb.define(
    "pl+visualworks",
    "VisualWorks",
    {
      name: "VisualWorks",
      websites: [{ kind: "wikipedia", title: "VisualWorks", href: "https://en.wikipedia.org/wiki/VisualWorks" }],
    },
    {
      influences: ["pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+objects"],
      people: ["person+alan-kay", "person+dan-ingalls", "person+adele-goldberg"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+mac", "platf+linux", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+vp-info",
    "VP-Info",
    {
      name: "VP-Info",
      websites: [{ kind: "wikipedia", title: "VP-Info", href: "https://en.wikipedia.org/wiki/VP-Info" }],
    },
    { influences: ["pl+dbase"] },
  );

  lb.define(
    "pl+vue.js",
    "Vue",
    {
      name: "Vue",
      websites: [{ kind: "wikipedia", title: "Vue", href: "https://en.wikipedia.org/wiki/Vue.js#Official_libraries" }],
    },
    { influences: ["pl+elm"] },
  );

  lb.define("pl+watbol", "WATBOL", {
    name: "WATBOL",
    websites: [{ kind: "wikipedia", title: "WATBOL", href: "https://en.wikipedia.org/wiki/WATBOL" }],
  });

  lb.define(
    "pl+watcom-c-compiler",
    "Open Watcom C/C++",
    {
      name: "Open Watcom C/C++",
      websites: [{ kind: "wikipedia", title: "Open Watcom", href: "https://en.wikipedia.org/wiki/Watcom_C_compiler" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Watcom_logo.png" }],
      releases: [
        { version: "1.9", date: "2010-01-01", kind: "stable" },
        { version: "2.0", date: "2022-01-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+sybase-open-watcom-public"], platforms: ["platf+x86", "platf+ia-32", "platf+x86-64"] },
  );

  lb.define(
    "pl+web",
    "WEB",
    {
      name: "WEB",
      websites: [{ kind: "wikipedia", title: "CWEB", href: "https://en.wikipedia.org/wiki/WEB" }],
      releases: [{ version: "3.67", date: "2006-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+web", "pl+tex"],
      licenses: ["lic+free"],
      paradigms: ["para+literate", "para+imperative", "para+structured"],
      people: ["person+donald-knuth"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+win",
    "Windows Forms (WinForms)",
    {
      name: "Windows Forms (WinForms)",
      websites: [
        {
          kind: "wikipedia",
          title: "Universal Windows Platform",
          href: "https://en.wikipedia.org/wiki/Universal_Windows_Platform",
        },
        { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" },
        { kind: "wikipedia", title: "Windows Forms", href: "https://en.wikipedia.org/wiki/Windows_Forms" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/37/WinForms_Logo.png" }],
      releases: [{ version: "8.0.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+mit"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+arm", "platf+.net", "platf+mono"],
    },
  );

  lb.define(
    "pl+wolfram",
    "Wolfram Language",
    {
      name: "Wolfram Language",
      websites: [
        { kind: "wikipedia", title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_Language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/1/17/Wolfram_Language_Logo_2016.svg" }],
      releases: [{ version: "14.0.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+wolfram-mathematica"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+term", "para+functional", "para+imperative", "para+array"],
      people: ["person+stephen-wolfram"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+wolfram-mathematica",
    "Wolfram Mathematica",
    {
      name: "Wolfram Mathematica",
      websites: [
        { kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+win", "platf+mac", "platf+linux", "platf+rpi"] },
  );

  lb.define(
    "pl+wolfram-systemmodeler",
    "Wolfram System Modeler",
    {
      name: "Wolfram System Modeler",
      websites: [
        {
          kind: "wikipedia",
          title: "Wolfram SystemModeler",
          href: "https://en.wikipedia.org/wiki/Wolfram_SystemModeler",
        },
        { kind: "homepage", title: "Wolfram SystemModeler", href: "http://www.wolfram.com/system-modeler" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/WolframSystemModelerLogo.png/64px-WolframSystemModelerLogo.png",
        },
      ],
      releases: [{ version: "14.0.0", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define("pl+x-slashopen", "X/Open", {
    name: "X/Open",
    websites: [{ kind: "wikipedia", title: "X/Open", href: "https://en.wikipedia.org/wiki/X/Open" }],
  });

  lb.define(
    "pl+x10",
    "X10",
    {
      name: "X10",
      websites: [{ kind: "wikipedia", title: "X10", href: "https://en.wikipedia.org/wiki/X10_(programming_language)" }],
      releases: [{ version: "2.6.2", date: "2019-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp", "pl+java"],
      licenses: ["lic+eclipse-public"],
      paradigms: ["para+objects"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );

  lb.define("pl+x86", "x86", {
    name: "x86",
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  lb.define(
    "pl+xalan",
    "Xalan",
    {
      name: "Xalan",
      websites: [{ kind: "wikipedia", title: "Apache Xalan", href: "https://en.wikipedia.org/wiki/Xalan" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Apache_Xalan_logo.svg" }],
      releases: [{ version: "2.7.3", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define("pl+xbase", "xBase", {
    name: "xBase",
    websites: [{ kind: "wikipedia", title: "xBase", href: "https://en.wikipedia.org/wiki/XBase" }],
  });

  lb.define(
    "pl+xcos",
    "Scilab",
    {
      name: "Scilab",
      websites: [{ kind: "wikipedia", title: "Xcos", href: "https://en.wikipedia.org/wiki/Xcos" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
        },
      ],
      releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl-2", "lic+cecill"], people: ["person+dassault-systemes"] },
  );

  lb.define("pl+xedit", "KEXX", {
    name: "KEXX",
    websites: [{ kind: "wikipedia", title: "KEXX", href: "https://en.wikipedia.org/wiki/XEDIT#KEXX" }],
  });

  lb.define(
    "pl+xharbour",
    "xHarbour",
    {
      name: "xHarbour",
      websites: [{ kind: "wikipedia", title: "xHarbour", href: "https://en.wikipedia.org/wiki/XHarbour" }],
    },
    { influences: ["pl+harbour"] },
  );

  lb.define(
    "pl+xotcl",
    "XOTcl",
    {
      name: "XOTcl",
      websites: [
        { kind: "wikipedia", title: "XOTcl", href: "https://en.wikipedia.org/wiki/XOTcl" },
        { kind: "homepage", title: "media.wu-wien.ac.at", href: "http://media.wu-wien.ac.at/" },
      ],
      releases: [{ version: "1.6.8", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+tcl", "pl+otcl"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative", "para+event"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+xpl", "XPL", {
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  lb.define(
    "pl+xtalk",
    "HyperTalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
    },
    { influences: ["pl+pascal"], paradigms: ["para+imperative", "para+event"] },
  );

  lb.define(
    "pl+yacc",
    "Yacc",
    { name: "Yacc", websites: [{ kind: "wikipedia", title: "Yacc", href: "https://en.wikipedia.org/wiki/Yacc" }] },
    { influences: ["pl+tmg"], licenses: ["lic+mit"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+yamazaki-mazak-corporation", "Mazak", {
    name: "Mazak",
    websites: [{ kind: "wikipedia", title: "Mazak", href: "https://en.wikipedia.org/wiki/Yamazaki_Mazak_Corporation" }],
  });

  lb.define(
    "pl+yap",
    "YAP Prolog",
    {
      name: "YAP Prolog",
      websites: [{ kind: "wikipedia", title: "YAP", href: "https://en.wikipedia.org/wiki/YAP_(Prolog)" }],
      releases: [
        { version: "6.3.3", date: "2013-01-01", kind: "stable" },
        { version: "7.1", date: "2016-01-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+artistic"] },
  );

  lb.define(
    "pl+yarv",
    "YARV",
    {
      name: "YARV",
      websites: [{ kind: "wikipedia", title: "YARV", href: "https://en.wikipedia.org/wiki/YARV" }],
      releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+ruby"], people: ["person+koichi-sasada"] },
  );

  lb.define("pl+yhc", "Yhc", {
    name: "Yhc",
    websites: [{ kind: "wikipedia", title: "Yhc", href: "https://en.wikipedia.org/wiki/Yhc" }],
  });

  lb.define(
    "pl+yorick",
    "Yorick",
    {
      name: "Yorick",
      websites: [
        { kind: "wikipedia", title: "Yorick", href: "https://en.wikipedia.org/wiki/Yorick_(programming_language)" },
      ],
      releases: [{ version: "2.2.04", date: "2015-01-01", kind: "stable" }],
    },
    { licenses: ["lic+bsd-s"], people: ["person+david-h-munro"], platforms: ["platf+unix", "platf+mac", "platf+win"] },
  );

  lb.define(
    "pl+z-machine",
    "ZIL",
    { name: "ZIL", websites: [{ kind: "wikipedia", title: "ZIL", href: "https://en.wikipedia.org/wiki/Z-machine" }] },
    { influences: ["pl+mdl"] },
  );

  lb.define("pl+z-notation", "Z", {
    name: "Z",
    websites: [{ kind: "wikipedia", title: "Z", href: "https://en.wikipedia.org/wiki/Z_notation" }],
  });

  lb.define(
    "pl+zend-engine",
    "Zend Engine",
    {
      name: "Zend Engine",
      websites: [{ kind: "wikipedia", title: "Zend Engine", href: "https://en.wikipedia.org/wiki/Zend_Engine" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Zend_Engine_logo.png/120px-Zend_Engine_logo.png",
        },
      ],
      releases: [{ version: "3.4", kind: "stable" }],
    },
    { licenses: ["lic+zend", "lic+php"] },
  );

  lb.define(
    "pl+zonnon",
    "Zonnon",
    {
      name: "Zonnon",
      websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
    },
    {
      influences: ["pl+modula", "pl+oberon", "pl+oberon-2", "pl+pascal"],
      paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects"],
      people: ["person+jurg-gutknecht"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+zpl",
    "ZPL",
    {
      name: "ZPL",
      websites: [
        { kind: "wikipedia", title: "ZPL", href: "https://en.wikipedia.org/wiki/ZPL_(programming_language)" },
        {
          kind: "homepage",
          title: "www.cs.washington.edu",
          href: "https://web.archive.org/web/20060211013421/http://www.cs.washington.edu/research/zpl/home/",
        },
        { kind: "homepage", title: "[1]", href: "https://research.cs.washington.edu/zpl/home/index.html" },
      ],
    },
    { influences: ["pl+c"], paradigms: ["para+array"] },
  );
}
