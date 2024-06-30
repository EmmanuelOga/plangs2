import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+.net-framework", {
    name: ".NET Framework",
    websites: [{ kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" }],
  });

  lb.define("pl+.net-framework-sdk", {
    name: ".NET Framework SDK",
    websites: [
      { kind: "wikipedia", title: ".NET Framework SDK", href: "https://en.wikipedia.org/wiki/.NET_Framework_SDK" },
    ],
  });

  lb.define("pl+.ql", {
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  lb.define(
    "pl+a-",
    {
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A♯", href: "https://en.wikipedia.org/wiki/A%E2%99%AF_(Axiom)" }],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "stable" },
        { version: "unknown", date: "2014-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+haskell", "pl+pascal"],
      people: ["person+stephen-m-watt"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+multi", "para+objects"],
      platforms: [
        "platf+cross-platform",
        "platf+dec",
        "platf+dos",
        "platf+ia-32",
        "platf+intel-80286",
        "platf+linux",
        "platf+mach",
        "platf+openvms",
        "platf+vm",
        "platf+win",
      ],
    },
  );

  lb.define(
    "pl+a-sharp",
    {
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A#", href: "https://en.wikipedia.org/wiki/A_Sharp_(.NET)" }],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+.net", "platf+cross-platform"] },
  );

  lb.define(
    "pl+abap",
    {
      name: "ABAP/4",
      websites: [{ kind: "wikipedia", title: "ABAP/4", href: "https://en.wikipedia.org/wiki/ABAP" }],
      releases: [{ version: "7.58", date: "2023-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+sap"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+abc",
    {
      name: "ABC",
      websites: [{ kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" }],
      releases: [{ version: "1.05.02", date: "1990-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+isetl", "pl+setl", "pl+setl2"],
      people: ["person+centrum-wiskunde", "person+lambert-meertens", "person+steven-pemberton"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      platforms: ["platf+atari", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+polymorphic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+action-",
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

  lb.define("pl+active-scripting", {
    name: "Active Scripting",
    websites: [
      { kind: "wikipedia", title: "Active Scripting", href: "https://en.wikipedia.org/wiki/Active_Scripting" },
    ],
  });

  lb.define(
    "pl+active-server-pages",
    {
      name: "ASP",
      websites: [{ kind: "wikipedia", title: "ASP", href: "https://en.wikipedia.org/wiki/Active_Server_Pages" }],
    },
    { influences: ["pl+php"] },
  );

  lb.define("pl+actor-based-concurrent", {
    name: "ABCL",
    websites: [
      { kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Actor-Based_Concurrent_Language" },
    ],
  });

  lb.define(
    "pl+actor-model",
    {
      name: "actor model",
      websites: [{ kind: "wikipedia", title: "Actors", href: "https://en.wikipedia.org/wiki/Actor_model" }],
    },
    { influences: ["pl+mdl"] },
  );

  lb.define("pl+actor-model-middle-history", {
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
    {
      name: "Adobe AIR",
      websites: [{ kind: "wikipedia", title: "Adobe AIR", href: "https://en.wikipedia.org/wiki/Adobe_AIR" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Adobe_AIR_logo.svg" }],
      releases: [
        { version: "51.0.1.3", date: "2024-01-01", kind: "stable" },
        { version: "33.1.1.932", kind: "preview" },
      ],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+arm", "platf+ia-32", "platf+mips", "platf+x86-64"] },
  );

  lb.define("pl+adobe-flash-player", {
    name: "Adobe Flash Player",
    websites: [
      { kind: "wikipedia", title: "Adobe Flash Player", href: "https://en.wikipedia.org/wiki/Adobe_Flash_Player" },
    ],
  });

  lb.define(
    "pl+advpl",
    { name: "AdvPL", websites: [{ kind: "wikipedia", title: "AdvPL", href: "https://en.wikipedia.org/wiki/AdvPL" }] },
    { influences: ["pl+xbase"] },
  );

  lb.define(
    "pl+agentcubes",
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
      people: ["person+alexander-repenning"],
      paradigms: ["para+educational", "para+objects"],
    },
  );

  lb.define(
    "pl+agentsheets",
    {
      name: "AgentSheets",
      websites: [{ kind: "wikipedia", title: "AgentSheets", href: "https://en.wikipedia.org/wiki/AgentSheets" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Agentsheets_IDE.jpg" }],
      releases: [{ version: "4.0", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+karel", "pl+lisp", "pl+logo", "pl+objectlogo", "pl+smalltalk"],
      people: ["person+alexander-repenning"],
      paradigms: ["para+educational", "para+objects"],
      platforms: ["platf+jvm"],
    },
  );

  lb.define(
    "pl+agora",
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
    {
      name: "AIMACO",
      websites: [{ kind: "wikipedia", title: "AIMACO", href: "https://en.wikipedia.org/wiki/AIMACO" }],
    },
    { influences: ["pl+comtran", "pl+flow-matic"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+akka",
    {
      name: "Akka",
      websites: [{ kind: "wikipedia", title: "Akka", href: "https://en.wikipedia.org/wiki/Akka_(toolkit)" }],
    },
    { influences: ["pl+erlang"] },
  );

  lb.define(
    "pl+aldor",
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
      influences: ["pl+a-", "pl+haskell", "pl+pascal"],
      licenses: ["lic+apache"],
      paradigms: ["para+dependent", "para+functional", "para+imperative", "para+logic", "para+multi", "para+objects"],
      platforms: ["platf+axiom", "platf+linux", "platf+win"],
    },
  );

  lb.define(
    "pl+alef",
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

  lb.define("pl+alf", {
    name: "ALF",
    websites: [{ kind: "wikipedia", title: "ALF", href: "https://en.wikipedia.org/wiki/ALF_(proof_assistant)" }],
  });

  lb.define(
    "pl+algebraic-logic-functional",
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
    { influences: ["pl+prolog"], paradigms: ["para+functional", "para+logic", "para+multi"] },
  );

  lb.define(
    "pl+alice",
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
        "para+concurrent",
        "para+constraint",
        "para+distributed",
        "para+functional",
        "para+imperative",
        "para+multi",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+alma-0",
    {
      name: "Alma-0",
      websites: [{ kind: "wikipedia", title: "Alma-0", href: "https://en.wikipedia.org/wiki/Alma-0" }],
    },
    {
      influences: ["pl+modula"],
      people: ["person+centrum-wiskunde", "person+krzysztof-apt"],
      paradigms: ["para+constraint", "para+imperative", "para+logic", "para+multi"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define("pl+alphard", {
    name: "Alphard",
    websites: [
      { kind: "wikipedia", title: "Alphard", href: "https://en.wikipedia.org/wiki/Alphard_(programming_language)" },
    ],
  });

  lb.define(
    "pl+ambienttalk",
    {
      name: "AmbientTalk",
      websites: [{ kind: "wikipedia", title: "AmbientTalk", href: "https://en.wikipedia.org/wiki/AmbientTalk" }],
      releases: [{ version: "2.19", date: "2011-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+actor-based-concurrent", "pl+e", "pl+scheme", "pl+self", "pl+smalltalk"],
      paradigms: ["para+concurrent", "para+event", "para+objects", "para+prototypes", "para+reflection"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+amesim",
    {
      name: "AMESim",
      websites: [{ kind: "wikipedia", title: "Simcenter Amesim", href: "https://en.wikipedia.org/wiki/AMESim" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg" }],
      releases: [{ version: "unknown", date: "2310-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+ampl",
    {
      name: "AMPL",
      websites: [{ kind: "wikipedia", title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/b6/AMPL_%28textbook_cover%29.jpg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+awk", "pl+c"],
      people: ["person+brian-kernighan", "person+robert-fourer"],
      licenses: ["lic+free-and-open-source", "lic+proprietary"],
      paradigms: ["para+dec", "para+imperative", "para+multi"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define("pl+ansi-c", {
    name: "ANSI C",
    websites: [{ kind: "wikipedia", title: "ANSI C", href: "https://en.wikipedia.org/wiki/ANSI_C" }],
  });

  lb.define(
    "pl+ap",
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
      extensions: [".+", "..", ".a", ".m"],
    },
    {
      influences: ["pl+apl"],
      people: ["person+arthur-whitney", "person+morgan-stanley"],
      licenses: ["lic+gpl"],
      paradigms: ["para+array"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+apache-flex",
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
    {
      name: "Apache Groovy",
      websites: [{ kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Apache_Groovy" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
    },
    {
      implementations: ["pl+gradle", "pl+grails"],
      influences: ["pl+java", "pl+python", "pl+ruby", "pl+smalltalk"],
      people: ["person+james-strachan"],
      licenses: ["lic+apache"],
      paradigms: ["para+aspect", "para+functional", "para+imperative", "para+multi", "para+objects", "para+scripting"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+apache-pig",
    {
      name: "Apache Pig",
      websites: [{ kind: "wikipedia", title: "Apache Pig", href: "https://en.wikipedia.org/wiki/Apache_Pig" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Apache_Pig_Logo.svg" }],
      releases: [{ version: "0.17.0", date: "2017-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define(
    "pl+app-inventor-for-android",
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
    { licenses: ["lic+apache", "lic+cc"] },
  );

  lb.define(
    "pl+applescript",
    {
      name: "AppleScript",
      websites: [{ kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" }],
      releases: [{ version: "2.8", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+hypertalk", "pl+smalltalk", "pl+xtalk"],
      licenses: ["lic+apple-public-source", "lic+proprietary"],
      paradigms: ["para+natural", "para+scripting"],
      platforms: ["platf+mac"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+apt",
    {
      name: "APT",
      websites: [{ kind: "wikipedia", title: "APT", href: "https://en.wikipedia.org/wiki/APT_(programming_language)" }],
    },
    { people: ["person+douglas-t-ross"], paradigms: ["para+numerical"] },
  );

  lb.define("pl+arexx", {
    name: "ARexx",
    websites: [{ kind: "wikipedia", title: "ARexx", href: "https://en.wikipedia.org/wiki/ARexx" }],
  });

  lb.define(
    "pl+argus",
    {
      name: "Argus",
      websites: [
        { kind: "wikipedia", title: "Argus", href: "https://en.wikipedia.org/wiki/Argus_(programming_language)" },
      ],
    },
    { influences: ["pl+clu"] },
  );

  lb.define("pl+arith-matic", {
    name: "ARITH-MATIC",
    websites: [{ kind: "wikipedia", title: "ARITH-MATIC", href: "https://en.wikipedia.org/wiki/ARITH-MATIC" }],
  });

  lb.define(
    "pl+arkts",
    {
      name: "ArkTS",
      websites: [{ kind: "wikipedia", title: "ArkTS", href: "https://en.wikipedia.org/wiki/ArkTS" }],
      releases: [{ version: "4.1.7.3", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+actionscript",
        "pl+assemblyscript",
        "pl+atscript",
        "pl+c-sharp",
        "pl+f-sharp",
        "pl+java",
        "pl+javascript",
        "pl+objective-c",
        "pl+swift",
        "pl+typescript",
      ],
      licenses: ["lic+apache", "lic+proprietary"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+android", "platf+ios", "platf+mac", "platf+win"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );

  lb.define("pl+arm-architecture-family", {
    name: "ARM",
    websites: [{ kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" }],
  });

  lb.define("pl+arpanet", {
    name: "ARPAnet",
    websites: [{ kind: "wikipedia", title: "ARPAnet", href: "https://en.wikipedia.org/wiki/ARPAnet" }],
  });

  lb.define(
    "pl+asp.net",
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
    {
      name: "Atlas Autocode",
      websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
    },
    {
      implementations: ["pl+algol", "pl+edinburgh-imp"],
      influences: ["pl+algol"],
      people: ["person+tony-brooker"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+ats",
    {
      name: "ATS",
      websites: [{ kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
      releases: [{ version: "0.4.2", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp", "pl+dependent-ml", "pl+ml", "pl+ocaml"],
      licenses: ["lic+gpl"],
      paradigms: [
        "para+concurrent",
        "para+functional",
        "para+imperative",
        "para+modular",
        "para+multi",
        "para+objects",
      ],
      typeSystems: ["tsys+dependent", "tsys+static"],
    },
  );

  lb.define(
    "pl+atscript",
    {
      name: "AtScript",
      websites: [{ kind: "wikipedia", title: "AtScript", href: "https://en.wikipedia.org/wiki/AtScript" }],
    },
    { influences: ["pl+typescript"] },
  );

  lb.define(
    "pl+autoit",
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
      paradigms: ["para+functional", "para+imperative", "para+reflective"],
      platforms: ["platf+ia-32", "platf+win", "platf+x64"],
    },
  );

  lb.define(
    "pl+awk",
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
      people: ["person+alfred-aho", "person+brian-kernighan", "person+peter-weinberger"],
      paradigms: ["para+data", "para+imperative", "para+scripting"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+axiom",
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
    "pl+b",
    {
      name: "B",
      websites: [{ kind: "wikipedia", title: "B", href: "https://en.wikipedia.org/wiki/B_(programming_language)" }],
    },
    { influences: ["pl+bcpl", "pl+pl-slash", "pl+tmg"], people: ["person+dennis-ritchie", "person+ken-thompson"] },
  );

  lb.define("pl+b-prolog", {
    name: "B-Prolog",
    websites: [{ kind: "wikipedia", title: "B-Prolog", href: "https://en.wikipedia.org/wiki/B-Prolog" }],
  });

  lb.define("pl+bazel", {
    name: "Starlark",
    websites: [{ kind: "wikipedia", title: "Starlark", href: "https://en.wikipedia.org/wiki/Bazel_(software)" }],
  });

  lb.define(
    "pl+bc",
    {
      name: "bc",
      websites: [{ kind: "wikipedia", title: "bc", href: "https://en.wikipedia.org/wiki/Bc_(programming_language)" }],
    },
    { people: ["person+lorinda-cherry", "person+robert-morris"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+bcpl",
    { name: "BCPL", websites: [{ kind: "wikipedia", title: "BCPL", href: "https://en.wikipedia.org/wiki/BCPL" }] },
    {
      influences: ["pl+combined", "pl+cpl"],
      people: ["person+martin-richards"],
      paradigms: ["para+imperative", "para+structured"],
    },
  );

  lb.define(
    "pl+beanshell",
    {
      name: "BeanShell",
      websites: [{ kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" }],
      releases: [{ version: "2.1.1", date: "2022-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+java"],
      influences: ["pl+java", "pl+javascript", "pl+perl"],
      licenses: ["lic+apache", "lic+lgpl", "lic+sun-public"],
      paradigms: ["para+objects", "para+scripting"],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+befunge",
    {
      name: "Befunge",
      websites: [{ kind: "wikipedia", title: "Befunge", href: "https://en.wikipedia.org/wiki/Befunge" }],
    },
    { influences: ["pl+esoteric", "pl+forth"] },
  );

  lb.define("pl+begriffsschrift", {
    name: "Begriffsschrift",
    websites: [{ kind: "wikipedia", title: "Begriffsschrift", href: "https://en.wikipedia.org/wiki/Begriffsschrift" }],
  });

  lb.define(
    "pl+beta",
    {
      name: "BETA",
      websites: [
        { kind: "wikipedia", title: "BETA", href: "https://en.wikipedia.org/wiki/BETA_(programming_language)" },
      ],
    },
    {
      influences: ["pl+simula", "pl+simula-67", "pl+simula67"],
      people: ["person+birger-m-ller-pedersen", "person+kristen-nygaard"],
      paradigms: ["para+objects"],
    },
  );

  lb.define(
    "pl+bitcoin",
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
    { name: "BLISS", websites: [{ kind: "wikipedia", title: "BLISS", href: "https://en.wikipedia.org/wiki/BLISS" }] },
    {
      influences: ["pl+algol"],
      people: ["person+a-n-habermann", "person+w-a-wulf"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+cross-platform", "platf+dec", "platf+ia-32", "platf+ia-64", "platf+mips", "platf+x86-64"],
    },
  );

  lb.define(
    "pl+boo",
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
      typeSystems: ["tsys+duck", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+bs",
    {
      name: "bs",
      websites: [{ kind: "wikipedia", title: "bs", href: "https://en.wikipedia.org/wiki/Bs_(programming_language)" }],
    },
    { influences: ["pl+basic", "pl+c", "pl+snobol"], platforms: ["platf+unix"] },
  );

  lb.define("pl+burroughs-b5000", {
    name: "Burroughs B5000",
    websites: [{ kind: "wikipedia", title: "Burroughs B5000", href: "https://en.wikipedia.org/wiki/Burroughs_B5000" }],
  });

  lb.define(
    "pl+c-shell",
    { name: "csh", websites: [{ kind: "wikipedia", title: "csh", href: "https://en.wikipedia.org/wiki/C_shell" }] },
    { influences: ["pl+c"] },
  );

  lb.define(
    "pl+c-slashal",
    { name: "C/AL", websites: [{ kind: "wikipedia", title: "C/AL", href: "https://en.wikipedia.org/wiki/C/AL" }] },
    { influences: ["pl+pascal"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+c-star",
    {
      name: "C*",
      websites: [{ kind: "wikipedia", title: "C*", href: "https://en.wikipedia.org/wiki/C*" }],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ansi-c", "pl+star-lisp"],
      people: ["person+thinking-machines"],
      paradigms: ["para+imperative", "para+multi", "para+parallel"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+cache-objectscript",
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
    {
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/Cadence_SKILL" }],
    },
    {
      influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+common-lisp-object-system", "pl+scheme"],
      paradigms: ["para+functional", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+cal",
    {
      name: "CAL",
      websites: [{ kind: "wikipedia", title: "CAL", href: "https://en.wikipedia.org/wiki/CAL_(programming_language)" }],
    },
    { influences: ["pl+joss"] },
  );

  lb.define(
    "pl+caml",
    {
      name: "Caml",
      websites: [{ kind: "wikipedia", title: "Caml", href: "https://en.wikipedia.org/wiki/Caml" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caml.gif/121px-Caml.gif" }],
      releases: [{ version: "0.75", date: "2002-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+ats", "pl+f-sharp", "pl+f-star", "pl+ocaml", "pl+reason"],
      influences: ["pl+ml"],
      people: ["person+gerard-huet", "person+xavier-leroy"],
      licenses: ["lic+lgpl", "lic+q-public"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+catia", {
    name: "CATIA",
    websites: [{ kind: "wikipedia", title: "CATIA", href: "https://en.wikipedia.org/wiki/CATIA" }],
  });

  lb.define(
    "pl+catrobat",
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

  lb.define(
    "pl+cecil",
    {
      name: "Cecil",
      websites: [
        { kind: "wikipedia", title: "Cecil", href: "https://en.wikipedia.org/wiki/Cecil_(programming_language)" },
      ],
    },
    { people: ["person+craig-chambers"], paradigms: ["para+objects"] },
  );

  lb.define(
    "pl+cedar",
    {
      name: "Cedar",
      websites: [
        { kind: "wikipedia", title: "Mesa[1]", href: "https://en.wikipedia.org/wiki/Cedar_(programming_language)" },
      ],
      releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
    },
    { influences: ["pl+algol", "pl+cedar", "pl+mesa"] },
  );

  lb.define("pl+ceemac", {
    name: "CEEMAC",
    websites: [{ kind: "wikipedia", title: "CEEMAC", href: "https://en.wikipedia.org/wiki/CEEMAC" }],
  });

  lb.define(
    "pl+cg",
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
    { licenses: ["lic+freeware", "lic+proprietary", "lic+trialware"], platforms: ["platf+x86"] },
  );

  lb.define("pl+chakra", {
    name: "Chakra",
    websites: [{ kind: "wikipedia", title: "Chakra", href: "https://en.wikipedia.org/wiki/Chakra_(JScript_engine)" }],
  });

  lb.define(
    "pl+chapel",
    {
      name: "Chapel",
      websites: [
        { kind: "wikipedia", title: "Chapel", href: "https://en.wikipedia.org/wiki/Chapel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Cray_Chapel_Logo.png" }],
      releases: [{ version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+ada",
        "pl+c",
        "pl+c-sharp",
        "pl+cpp",
        "pl+cray-mta",
        "pl+cray-xmt",
        "pl+fortran",
        "pl+java",
        "pl+ms-visual-c-sharp",
        "pl+zpl",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+parallel", "para+partitioned"],
      platforms: ["platf+aws", "platf+bsd", "platf+cygwin", "platf+linux", "platf+mac", "platf+posix", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static"],
    },
  );

  lb.define(
    "pl+charm",
    {
      name: "Charm",
      websites: [{ kind: "wikipedia", title: "Charm", href: "https://en.wikipedia.org/wiki/Charm_(language)" }],
    },
    {
      influences: ["pl+c", "pl+pascal", "pl+rtl-slash2"],
      paradigms: ["para+structured"],
      platforms: ["platf+risc-os"],
    },
  );

  lb.define("pl+chef", {
    name: "Chef",
    websites: [{ kind: "wikipedia", title: "Chef", href: "https://en.wikipedia.org/wiki/Chef_(software)" }],
  });

  lb.define(
    "pl+chill",
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
    {
      name: "Chisel",
      websites: [
        { kind: "wikipedia", title: "Chisel", href: "https://en.wikipedia.org/wiki/Chisel_(programming_language)" },
      ],
    },
    { influences: ["pl+scala"] },
  );

  lb.define(
    "pl+claire",
    {
      name: "Claire",
      websites: [
        { kind: "wikipedia", title: "Claire", href: "https://en.wikipedia.org/wiki/Claire_(programming_language)" },
      ],
      releases: [{ version: "3.3.46", date: "2009-01-01", kind: "stable" }],
      extensions: [".cl"],
    },
    {
      influences: ["pl+c", "pl+lisp", "pl+ml", "pl+ops5", "pl+setl", "pl+smalltalk"],
      licenses: ["lic+permissive-free-licence"],
      paradigms: ["para+class", "para+functional", "para+multi", "para+objects", "para+production", "para+reflection"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+clarion",
    {
      name: "Clarion",
      websites: [
        { kind: "wikipedia", title: "Clarion", href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2018-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+dos", "platf+ia-32", "platf+win"],
    },
  );

  lb.define(
    "pl+clean",
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
      influences: ["pl+haskell", "pl+iswim", "pl+miranda"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+clipper",
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
    "pl+clozure-cl",
    {
      name: "Clozure CL",
      websites: [{ kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" }],
      releases: [{ version: "1.12.2", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache", "lic+lgpl"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+clu",
    {
      name: "CLU",
      websites: [{ kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" }],
      releases: [{ version: "1.5", date: "1989-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+alphard", "pl+lisp", "pl+simula", "pl+simula-67", "pl+simula67"],
      people: ["person+barbara-liskov"],
      paradigms: ["para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+cms-2",
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

  lb.define("pl+cms-exec", {
    name: "EXEC",
    websites: [{ kind: "wikipedia", title: "EXEC", href: "https://en.wikipedia.org/wiki/CMS_EXEC" }],
  });

  lb.define(
    "pl+cmucl",
    {
      name: "CMUCL",
      websites: [{ kind: "wikipedia", title: "CMUCL", href: "https://en.wikipedia.org/wiki/CMUCL" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+public-domain"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+cobra",
    {
      name: "Cobra",
      websites: [
        { kind: "wikipedia", title: "Cobra", href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)" },
      ],
    },
    {
      influences: ["pl+c-sharp", "pl+eiffel", "pl+objective-c", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects"],
      platforms: ["platf+.net", "platf+mono"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+cocoa", {
    name: "Cocoa",
    websites: [{ kind: "wikipedia", title: "Cocoa", href: "https://en.wikipedia.org/wiki/Cocoa_(API)" }],
  });

  lb.define("pl+coldfusion", {
    name: "Adobe ColdFusion",
    websites: [{ kind: "wikipedia", title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adobe_ColdFusion_logo_2021.svg" },
    ],
  });

  lb.define(
    "pl+comal",
    { name: "COMAL", websites: [{ kind: "wikipedia", title: "COMAL", href: "https://en.wikipedia.org/wiki/COMAL" }] },
    { influences: ["pl+basic", "pl+pascal"], paradigms: ["para+structured"], typeSystems: ["tsys+strong"] },
  );

  lb.define(
    "pl+combined",
    {
      name: "CPL",
      websites: [
        { kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Combined_Programming_Language" },
      ],
    },
    {
      influences: ["pl+algol"],
      people: ["person+christopher-strachey"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
    },
  );

  lb.define(
    "pl+comit",
    { name: "COMIT", websites: [{ kind: "wikipedia", title: "COMIT", href: "https://en.wikipedia.org/wiki/COMIT" }] },
    { people: ["person+victor-yngve"] },
  );

  lb.define("pl+communicating-sequential-processes", {
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
    {
      name: "COMTRAN",
      websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
    },
    { influences: ["pl+flow-matic"], people: ["person+bob-bemer"] },
  );

  lb.define(
    "pl+concurrent-euclid",
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
      influences: ["pl+communicating-sequential-processes", "pl+euclid"],
      people: ["person+james-cordy", "person+ric-holt"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+concurrent-ml", {
    name: "Concurrent ML",
    websites: [{ kind: "wikipedia", title: "Concurrent ML", href: "https://en.wikipedia.org/wiki/Concurrent_ML" }],
  });

  lb.define(
    "pl+constraint-handling-rules",
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
    {
      name: "CQL",
      websites: [{ kind: "wikipedia", title: "CQL", href: "https://en.wikipedia.org/wiki/Contextual_Query_Language" }],
    },
    { influences: ["pl+sql"] },
  );

  lb.define(
    "pl+control",
    {
      name: "CL",
      websites: [
        { kind: "wikipedia", title: "Control Language", href: "https://en.wikipedia.org/wiki/Control_Language" },
      ],
    },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+core-war",
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

  lb.define("pl+cornell-university", {
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
    {
      name: "CorVision",
      websites: [{ kind: "wikipedia", title: "CorVision", href: "https://en.wikipedia.org/wiki/CorVision" }],
    },
    { influences: ["pl+inform"] },
  );

  lb.define(
    "pl+cowsel",
    {
      name: "COWSEL",
      websites: [{ kind: "wikipedia", title: "COWSEL, POP-1", href: "https://en.wikipedia.org/wiki/COWSEL" }],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+cpl", "pl+lisp"],
      people: ["person+robin-popplestone", "person+rod-burstall"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+multi", "para+reflective", "para+structured"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+cpl",
    {
      name: "CPL",
      websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/CPL_(programming_language)" }],
    },
    {
      influences: ["pl+algol"],
      people: ["person+christopher-strachey"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
    },
  );

  lb.define("pl+cray", {
    name: "Cray",
    websites: [{ kind: "wikipedia", title: "Cray", href: "https://en.wikipedia.org/wiki/Cray" }],
  });

  lb.define("pl+cray-mta", {
    name: "Cray MTA",
    websites: [{ kind: "wikipedia", title: "Cray MTA", href: "https://en.wikipedia.org/wiki/Cray_MTA" }],
  });

  lb.define("pl+cray-xmt", {
    name: "XMT",
    websites: [{ kind: "wikipedia", title: "XMT", href: "https://en.wikipedia.org/wiki/Cray_XMT" }],
  });

  lb.define(
    "pl+croquet-project",
    {
      name: "Croquet",
      websites: [{ kind: "wikipedia", title: "Croquet", href: "https://en.wikipedia.org/wiki/Croquet_Project" }],
    },
    { influences: ["pl+etoys", "pl+squeak"] },
  );

  lb.define("pl+cuda", {
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  lb.define(
    "pl+cuneiform",
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
      people: ["person+steve-ward"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+markup", "para+multi", "para+objects"],
      platforms: ["platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+curry",
    {
      name: "Curry",
      websites: [
        { kind: "wikipedia", title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)" },
      ],
      releases: [{ version: "3.6.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c", "pl+haskell", "pl+prolog"],
      influences: ["pl+haskell", "pl+prolog"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+logic"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+cyclone",
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
      paradigms: ["para+functional", "para+imperative"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+darsimco",
    {
      name: "DARSIMCO",
      websites: [{ kind: "wikipedia", title: "DARSIMCO", href: "https://en.wikipedia.org/wiki/DARSIMCO" }],
    },
    { implementations: ["pl+assembly"], people: ["person+john-g-kemeny"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+dartmouth-time-sharing-system",
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
    {
      name: "Darwin",
      websites: [
        { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(programming_language)" },
      ],
    },
    {
      influences: ["pl+maple"],
      people: ["person+gaston-gonnet"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+dataflow", {
    name: "dataflow",
    websites: [{ kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" }],
  });

  lb.define(
    "pl+dataparallel-c",
    {
      name: "Dataparallel-C",
      websites: [{ kind: "wikipedia", title: "Dataparallel-C", href: "https://en.wikipedia.org/wiki/Dataparallel-C" }],
    },
    { influences: ["pl+c-star"] },
  );

  lb.define("pl+datomic", {
    name: "Datomic",
    websites: [{ kind: "wikipedia", title: "Datomic", href: "https://en.wikipedia.org/wiki/Datomic" }],
  });

  lb.define(
    "pl+dbase",
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
      people: ["person+cecil-wayne-ratliff"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+dec", "para+imperative"],
      platforms: ["platf+dos", "platf+win"],
    },
  );

  lb.define(
    "pl+dc",
    {
      name: "dc",
      websites: [{ kind: "wikipedia", title: "dc", href: "https://en.wikipedia.org/wiki/Dc_(computer_program)" }],
    },
    { platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+ddc-i", {
    name: "DDC-I",
    websites: [{ kind: "wikipedia", title: "DDC-I", href: "https://en.wikipedia.org/wiki/DDC-I" }],
  });

  lb.define(
    "pl+dependent-ml",
    {
      name: "Dependent ML",
      websites: [{ kind: "wikipedia", title: "Dependent ML", href: "https://en.wikipedia.org/wiki/Dependent_ML" }],
    },
    { dialects: ["pl+ats"] },
  );

  lb.define("pl+diagram", {
    name: "diagrams",
    websites: [{ kind: "wikipedia", title: "diagrams", href: "https://en.wikipedia.org/wiki/Diagram" }],
  });

  lb.define(
    "pl+dibol",
    {
      name: "DIBOL",
      websites: [{ kind: "wikipedia", title: "DIBOL", href: "https://en.wikipedia.org/wiki/DIBOL" }],
      releases: [{ version: "unknown", date: "1992-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+basic", "pl+cobol", "pl+fortran"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define("pl+digital-command", {
    name: "DCL",
    websites: [{ kind: "wikipedia", title: "DCL", href: "https://en.wikipedia.org/wiki/DIGITAL_Command_Language" }],
  });

  lb.define(
    "pl+dis-virtual-machine",
    {
      name: "Dis virtual machine",
      websites: [{ kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" }],
    },
    {
      implementations: ["pl+dis-virtual-machine"],
      influences: ["pl+alef", "pl+c", "pl+communicating-sequential-processes", "pl+newsqueak", "pl+pascal"],
      people: ["person+rob-pike"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define("pl+domain-specific", {
    name: "Domain-specific language",
    websites: [
      {
        kind: "wikipedia",
        title: "Domain-specific language",
        href: "https://en.wikipedia.org/wiki/Domain-specific_language",
      },
    ],
  });

  lb.define("pl+dotgnu", {
    name: "DotGNU",
    websites: [{ kind: "wikipedia", title: "DotGNU", href: "https://en.wikipedia.org/wiki/DotGNU" }],
  });

  lb.define(
    "pl+draco",
    {
      name: "Draco",
      websites: [
        { kind: "wikipedia", title: "Draco", href: "https://en.wikipedia.org/wiki/Draco_(programming_language)" },
      ],
    },
    {
      influences: ["pl+algol", "pl+c", "pl+pascal"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+amiga"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+drakon",
    {
      name: "DRAKON",
      websites: [{ kind: "wikipedia", title: "DRAKON", href: "https://en.wikipedia.org/wiki/DRAKON" }],
    },
    { paradigms: ["para+visual"] },
  );

  lb.define("pl+dsssl", {
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
    {
      name: "Dymola",
      websites: [{ kind: "wikipedia", title: "Dymola", href: "https://en.wikipedia.org/wiki/Dymola" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Dymola.png/100px-Dymola.png" },
      ],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    },
    { people: ["person+dassault-systemes"], licenses: ["lic+proprietary"], platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+e",
    {
      name: "E",
      websites: [{ kind: "wikipedia", title: "E", href: "https://en.wikipedia.org/wiki/E_(programming_language)" }],
    },
    {
      influences: ["pl+java", "pl+joule"],
      people: ["person+mark-s-miller"],
      licenses: ["lic+free"],
      paradigms: ["para+message", "para+multi", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+ease",
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
      paradigms: ["para+compiled", "para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+eclipse",
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
    {
      name: "ECMAScript Harmony",
      websites: [
        { kind: "wikipedia", title: "ECMAScript Harmony", href: "https://en.wikipedia.org/wiki/ECMAScript_Harmony" },
      ],
    },
    { influences: ["pl+ambienttalk"] },
  );

  lb.define("pl+ed", {
    name: "ed",
    websites: [{ kind: "wikipedia", title: "ed", href: "https://en.wikipedia.org/wiki/Ed_(text_editor)" }],
  });

  lb.define(
    "pl+edinburgh-imp",
    {
      name: "Edinburgh IMP",
      websites: [{ kind: "wikipedia", title: "Edinburgh IMP", href: "https://en.wikipedia.org/wiki/Edinburgh_IMP" }],
    },
    {
      implementations: ["pl+atlas-autocode"],
      influences: ["pl+algol", "pl+atlas-autocode"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+dos", "platf+linux", "platf+win", "platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+egl",
    {
      name: "EGL(Enterprise Generation Language)",
      websites: [{ kind: "wikipedia", title: "EGL", href: "https://en.wikipedia.org/wiki/EGL_(programming_language)" }],
    },
    { influences: ["pl+cobol"], licenses: ["lic+eclipse-public"] },
  );

  lb.define(
    "pl+eiffel",
    {
      name: "Eiffel",
      websites: [
        { kind: "wikipedia", title: "Eiffel", href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Eiffel_logo.svg" }],
      releases: [{ version: "23.09", date: "2023-01-01", kind: "stable" }],
      extensions: [".e"],
    },
    {
      implementations: ["pl+eiffelstudio", "pl+libertyeiffel", "pl+smarteiffel", "pl+visual-eiffel"],
      influences: ["pl+ada", "pl+simula", "pl+simula-67", "pl+simula67", "pl+z-notation"],
      people: ["person+bertrand-meyer"],
      paradigms: ["para+class", "para+concurrent", "para+generic", "para+objects"],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define("pl+eiffelstudio", {
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  lb.define(
    "pl+elan",
    {
      name: "Elan",
      websites: [
        { kind: "wikipedia", title: "Elan", href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)" },
      ],
    },
    {
      influences: ["pl+algol"],
      people: ["person+cha-koster"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+zilog-z80"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+emerald",
    {
      name: "Emerald",
      websites: [
        { kind: "wikipedia", title: "Emerald", href: "https://en.wikipedia.org/wiki/Emerald_(programming_language)" },
      ],
    },
    {
      influences: ["pl+pascal", "pl+simula", "pl+simula-67", "pl+simula67", "pl+smalltalk"],
      people: ["person+henry-m-levy"],
      paradigms: ["para+objects"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+epigram",
    {
      name: "Epigram",
      websites: [
        { kind: "wikipedia", title: "Epigram", href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+alf"],
      people: ["person+conor-mcbride"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dependent", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+esoteric", {
    name: "FALSE",
    websites: [
      { kind: "wikipedia", title: "FALSE", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language#FALSE" },
    ],
  });

  lb.define(
    "pl+etoys",
    {
      name: "Etoys",
      websites: [
        { kind: "wikipedia", title: "Etoys", href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+morphic", "pl+squeak", "pl+tweak"],
      influences: [
        "pl+agentsheets",
        "pl+hypercard",
        "pl+logo",
        "pl+objectlogo",
        "pl+smalltalk",
        "pl+squeak",
        "pl+starlogo",
        "pl+ucblogo",
      ],
      people: ["person+alan-kay", "person+andreas-raab", "person+dan-ingalls", "person+ted-kaehler"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+educational", "para+objects", "para+prototypes"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+euclid",
    {
      name: "Euclid",
      websites: [
        { kind: "wikipedia", title: "Euclid", href: "https://en.wikipedia.org/wiki/Euclid_(programming_language)" },
      ],
    },
    {
      influences: ["pl+alphard", "pl+bcpl", "pl+clu", "pl+lis", "pl+mesa", "pl+modula", "pl+pascal"],
      people: [
        "person+butler-lampson",
        "person+gerald-j-popek",
        "person+james-cordy",
        "person+james-g-mitchell",
        "person+jim-horning",
        "person+ric-holt",
      ],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+euler",
    {
      name: "Euler",
      websites: [
        { kind: "wikipedia", title: "Euler", href: "https://en.wikipedia.org/wiki/Euler_(programming_language)" },
      ],
    },
    {
      influences: ["pl+algol"],
      people: ["person+niklaus-wirth"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+exec-2", {
    name: "EXEC 2",
    websites: [{ kind: "wikipedia", title: "EXEC 2", href: "https://en.wikipedia.org/wiki/EXEC_2" }],
  });

  lb.define(
    "pl+executive-systems-problem-oriented",
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
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+ezhil",
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
      influences: ["pl+basic", "pl+logo", "pl+python"],
      people: ["person+google-scholar"],
      licenses: ["lic+gpl"],
      paradigms: ["para+imperative", "para+interpreted", "para+structured"],
      platforms: ["platf+linux", "platf+mac", "platf+pip", "platf+python", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+f",
    {
      name: "F language",
      websites: [
        { kind: "wikipedia", title: "F language", href: "https://en.wikipedia.org/wiki/F_(programming_language)" },
      ],
    },
    {
      influences: ["pl+fortran"],
      paradigms: ["para+array", "para+imperative", "para+modular"],
      typeSystems: ["tsys+manifest", "tsys+static"],
    },
  );

  lb.define(
    "pl+f-star",
    {
      name: "F*",
      websites: [{ kind: "wikipedia", title: "F*", href: "https://en.wikipedia.org/wiki/F*_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fstar-official-logo-2015.png/128px-Fstar-official-logo-2015.png",
        },
      ],
      releases: [{ version: "2023.09.03", date: "2023-09-03", kind: "stable" }],
    },
    {
      influences: ["pl+coq", "pl+dafny", "pl+f-sharp", "pl+lean", "pl+ml", "pl+ocaml", "pl+poly-slashml", "pl+sml"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+fact-computer",
    {
      name: "FACT",
      websites: [{ kind: "wikipedia", title: "FACT", href: "https://en.wikipedia.org/wiki/FACT_computer_language" }],
    },
    { paradigms: ["para+imperative"] },
  );

  lb.define("pl+fanuc", {
    name: "FANUC",
    websites: [{ kind: "wikipedia", title: "FANUC", href: "https://en.wikipedia.org/wiki/FANUC" }],
  });

  lb.define("pl+fargo", {
    name: "FARGO",
    websites: [
      { kind: "wikipedia", title: "FARGO", href: "https://en.wikipedia.org/wiki/FARGO_(programming_language)" },
    ],
  });

  lb.define(
    "pl+ffp",
    {
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FFP_(programming_language)" }],
    },
    { influences: ["pl+apl"], people: ["person+john-backus"], paradigms: ["para+function"] },
  );

  lb.define(
    "pl+fjolnir",
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
    {
      name: "FL",
      websites: [{ kind: "wikipedia", title: "FL", href: "https://en.wikipedia.org/wiki/FL_(programming_language)" }],
    },
    {
      influences: ["pl+ffp", "pl+fp"],
      people: ["person+john-backus"],
      paradigms: ["para+function", "para+functional"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+flacc", {
    name: "FLACC",
    websites: [{ kind: "wikipedia", title: "FLACC", href: "https://en.wikipedia.org/wiki/FLACC" }],
  });

  lb.define(
    "pl+flow-matic",
    {
      name: "FLOW-MATIC",
      websites: [{ kind: "wikipedia", title: "FLOW-MATIC", href: "https://en.wikipedia.org/wiki/FLOW-MATIC" }],
    },
    {
      influences: ["pl+arith-matic", "pl+laning-and-zierler-system"],
      people: ["person+grace-hopper", "person+remington-rand"],
      paradigms: ["para+imperative"],
    },
  );

  lb.define(
    "pl+flutter",
    {
      name: "Flutter",
      websites: [{ kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
      releases: [{ version: "3.22.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+bsd-n"],
      platforms: ["platf+android", "platf+fuchsia", "platf+ios", "platf+linux", "platf+mac", "platf+web", "platf+win"],
    },
  );

  lb.define(
    "pl+focal",
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
    {
      name: "Fortress",
      websites: [
        { kind: "wikipedia", title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)" },
      ],
    },
    {
      influences: ["pl+fortran", "pl+haskell", "pl+scala"],
      licenses: ["lic+bsd-s"],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+foxpro",
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
    {
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FP_(programming_language)" }],
    },
    { influences: ["pl+apl"], people: ["person+john-backus"], paradigms: ["para+function"] },
  );

  lb.define(
    "pl+fpgac",
    {
      name: "FpgaC",
      websites: [{ kind: "wikipedia", title: "FpgaC", href: "https://en.wikipedia.org/wiki/FpgaC" }],
      releases: [{ version: "1.0", kind: "stable" }],
    },
    { influences: ["pl+c"], platforms: ["platf+fpga"] },
  );

  lb.define(
    "pl+frama-c",
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
    { licenses: ["lic+bsd-s", "lic+lgpl"] },
  );

  lb.define("pl+free-university-of-berlin", {
    name: "FU Berlin",
    websites: [
      { kind: "wikipedia", title: "FU Berlin", href: "https://en.wikipedia.org/wiki/Free_University_of_Berlin" },
    ],
  });

  lb.define(
    "pl+g-code",
    {
      name: "G-code",
      websites: [{ kind: "wikipedia", title: "G-code", href: "https://en.wikipedia.org/wiki/G-code" }],
    },
    {
      implementations: [
        "pl+fanuc",
        "pl+haas-automation",
        "pl+heidenhain",
        "pl+okuma-corporation",
        "pl+siemens",
        "pl+yamazaki-mazak-corporation",
      ],
      paradigms: ["para+imperative"],
    },
  );

  lb.define(
    "pl+g95",
    { name: "G95", websites: [{ kind: "wikipedia", title: "G95", href: "https://en.wikipedia.org/wiki/G95" }] },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+game-maker",
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
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+distributed", "para+in", "para+objects", "para+process"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+linux", "platf+mac", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+genera",
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

  lb.define("pl+general-algebraic-modeling-system", {
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
    {
      name: "Generic Java",
      websites: [{ kind: "wikipedia", title: "Generic Java", href: "https://en.wikipedia.org/wiki/Generic_Java" }],
    },
    { influences: ["pl+pizza"] },
  );

  lb.define(
    "pl+genie",
    {
      name: "Genie",
      websites: [
        { kind: "wikipedia", title: "Genie", href: "https://en.wikipedia.org/wiki/Genie_(programming_language)" },
      ],
      releases: [{ version: "0.52.3", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+boo", "pl+d", "pl+pascal", "pl+python"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+ghostscript", {
    name: "Ghostscript",
    websites: [{ kind: "wikipedia", title: "Ghostscript", href: "https://en.wikipedia.org/wiki/Ghostscript" }],
  });

  lb.define("pl+glasgow-haskell-compiler", {
    name: "GHC",
    websites: [{ kind: "wikipedia", title: "GHC", href: "https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler" }],
  });

  lb.define(
    "pl+gnu-data",
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
    "pl+gnu-m4",
    { name: "GNU m4", websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }] },
    {
      implementations: ["pl+gnu-m4"],
      people: ["person+brian-kernighan", "person+dennis-ritchie"],
      paradigms: ["para+macros"],
    },
  );

  lb.define(
    "pl+go-",
    {
      name: "Go!",
      websites: [{ kind: "wikipedia", title: "Go!", href: "https://en.wikipedia.org/wiki/Go!_(programming_language)" }],
      releases: [{ version: "unknown", date: "2007-01-01", kind: "preview" }],
    },
    {
      influences: ["pl+prolog"],
      people: ["person+keith-clark"],
      licenses: ["lic+gpl-2"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+logic", "para+multi", "para+objects"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+golo",
    {
      name: "Golo",
      websites: [
        { kind: "wikipedia", title: "Golo", href: "https://en.wikipedia.org/wiki/Golo_(programming_language)" },
      ],
      releases: [{ version: "3.4.0", date: "2021-01-01", kind: "stable" }],
    },
    {
      people: ["person+insa-lyon"],
      licenses: ["lic+eclipse-public"],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define("pl+google-apps-script", {
    name: "Apps Script",
    websites: [
      { kind: "wikipedia", title: "Google Apps Script", href: "https://en.wikipedia.org/wiki/Google_Apps_Script" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" }],
  });

  lb.define(
    "pl+gpss",
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

  lb.define("pl+graalvm", {
    name: "TruffleRuby",
    websites: [
      {
        kind: "wikipedia",
        title: "TruffleRuby",
        href: "https://en.wikipedia.org/wiki/GraalVM#Language_and_Runtime_Support",
      },
    ],
  });

  lb.define("pl+gradle", {
    name: "Gradle",
    websites: [{ kind: "wikipedia", title: "Gradle", href: "https://en.wikipedia.org/wiki/Gradle" }],
  });

  lb.define("pl+grails", {
    name: "Grails",
    websites: [{ kind: "wikipedia", title: "Grails", href: "https://en.wikipedia.org/wiki/Grails_(framework)" }],
  });

  lb.define(
    "pl+gt.m",
    { name: "GT.M", websites: [{ kind: "wikipedia", title: "GT.M", href: "https://en.wikipedia.org/wiki/GT.M" }] },
    { influences: ["pl+mumps"] },
  );

  lb.define("pl+haas-automation", {
    name: "Haas",
    websites: [{ kind: "wikipedia", title: "Haas", href: "https://en.wikipedia.org/wiki/Haas_Automation" }],
  });

  lb.define(
    "pl+hamilton-c-shell",
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
    {
      name: "Handel-C",
      websites: [{ kind: "wikipedia", title: "Handel-C", href: "https://en.wikipedia.org/wiki/Handel-C" }],
      releases: [{ version: "3.0", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+communicating-sequential-processes", "pl+occam"],
      people: ["person+siemens-eda"],
      paradigms: ["para+concurrent", "para+imperative", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+manifest", "tsys+nominative", "tsys+static"],
    },
  );

  lb.define(
    "pl+harbour",
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
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+safe", "tsys+strong"],
    },
  );

  lb.define("pl+heidenhain", {
    name: "Heidenhain",
    websites: [{ kind: "wikipedia", title: "Heidenhain", href: "https://en.wikipedia.org/wiki/Heidenhain" }],
  });

  lb.define(
    "pl+hhvm",
    {
      name: "HHVM",
      websites: [{ kind: "wikipedia", title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HHVM_logo.svg" }],
      releases: [{ version: "3.15.0", date: "2016-01-01", kind: "stable" }],
    },
    { people: ["person+meta-platforms"], licenses: ["lic+php", "lic+zend"] },
  );

  lb.define("pl+hitachi", {
    name: "Hitachi",
    websites: [{ kind: "wikipedia", title: "Hitachi", href: "https://en.wikipedia.org/wiki/Hitachi" }],
  });

  lb.define(
    "pl+hop",
    {
      name: "Hop",
      websites: [{ kind: "wikipedia", title: "Hop", href: "https://en.wikipedia.org/wiki/Hop_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hop_logo.svg" }],
      releases: [{ version: "2.4.2", date: "2013-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+scheme"],
      people: ["person+manuel-serrano"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+multi"],
    },
  );

  lb.define("pl+hope", {
    name: "Hope",
    websites: [{ kind: "wikipedia", title: "Hope", href: "https://en.wikipedia.org/wiki/Hope_(programming_language)" }],
  });

  lb.define("pl+html", {
    name: "HTML",
    websites: [{ kind: "wikipedia", title: "HTML", href: "https://en.wikipedia.org/wiki/HTML" }],
  });

  lb.define("pl+html5", {
    name: "HTML5",
    websites: [{ kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" }],
  });

  lb.define("pl+hugs", {
    name: "Hugs",
    websites: [{ kind: "wikipedia", title: "Hugs", href: "https://en.wikipedia.org/wiki/Hugs_(interpreter)" }],
  });

  lb.define(
    "pl+hume",
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
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+red-hat"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+ibm", {
    name: "IBM",
    websites: [{ kind: "wikipedia", title: "IBM", href: "https://en.wikipedia.org/wiki/IBM" }],
  });

  lb.define("pl+ibm-704", {
    name: "IBM 704",
    websites: [{ kind: "wikipedia", title: "IBM 704", href: "https://en.wikipedia.org/wiki/IBM_704" }],
  });

  lb.define("pl+ibm-709-slash90-9pac", {
    name: "9PAC",
    websites: [{ kind: "wikipedia", title: "9PAC", href: "https://en.wikipedia.org/wiki/IBM_709/90_9PAC" }],
  });

  lb.define("pl+ibm-7090", {
    name: "7090",
    websites: [{ kind: "wikipedia", title: "7090", href: "https://en.wikipedia.org/wiki/IBM_7090" }],
  });

  lb.define("pl+ibm-informix-4gl", {
    name: "IBM Informix-4GL",
    websites: [
      { kind: "wikipedia", title: "IBM Informix-4GL", href: "https://en.wikipedia.org/wiki/IBM_Informix-4GL" },
    ],
  });

  lb.define(
    "pl+ibm-pl-slashs",
    { name: "PL/S", websites: [{ kind: "wikipedia", title: "PL/S", href: "https://en.wikipedia.org/wiki/IBM_PL/S" }] },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+ibm-rpg",
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
      influences: ["pl+fargo", "pl+ibm-709-slash90-9pac"],
      paradigms: ["para+multi"],
      platforms: ["platf+dos", "platf+openvms", "platf+vse", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+ibm-system-slash360", {
    name: "S/360",
    websites: [{ kind: "wikipedia", title: "S/360", href: "https://en.wikipedia.org/wiki/IBM_System/360" }],
  });

  lb.define("pl+ibm-system-slash370", {
    name: "IBM System/370",
    websites: [{ kind: "wikipedia", title: "S/370", href: "https://en.wikipedia.org/wiki/IBM_System/370" }],
  });

  lb.define(
    "pl+ibm-visualage",
    {
      name: "VA Smalltalk",
      websites: [{ kind: "wikipedia", title: "VisualAge", href: "https://en.wikipedia.org/wiki/IBM_VisualAge" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define("pl+id", {
    name: "Id",
    websites: [{ kind: "wikipedia", title: "Id", href: "https://en.wikipedia.org/wiki/Id_(programming_language)" }],
  });

  lb.define(
    "pl+idl",
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
    {
      name: "IMP",
      websites: [{ kind: "wikipedia", title: "IMP", href: "https://en.wikipedia.org/wiki/IMP_(programming_language)" }],
      releases: [{ version: "unknown", date: "1972-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+algol"],
      influences: ["pl+algol"],
      people: ["person+national-security-agency"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+extensible", "para+imperative", "para+multi", "para+structured"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+inferno",
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
      people: ["person+allen-newell", "person+cliff-shaw", "person+herbert-a-simon"],
      paradigms: ["para+assembly"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+inscript", {
    name: "InScript",
    websites: [
      { kind: "wikipedia", title: "InScript", href: "https://en.wikipedia.org/wiki/InScript_(JavaScript_engine)" },
    ],
  });

  lb.define("pl+intel-array-building-blocks", {
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
      influences: ["pl+cilk-plus", "pl+intel-array-building-blocks", "pl+threading-building-blocks"],
      paradigms: ["para+imperative", "para+parallel", "para+structured"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+interactive-fiction",
    {
      name: "interactive fiction",
      websites: [
        { kind: "wikipedia", title: "interactive fiction", href: "https://en.wikipedia.org/wiki/Interactive_fiction" },
      ],
    },
    { influences: ["pl+mdl"] },
  );

  lb.define("pl+intercal", {
    name: "INTERCAL",
    websites: [{ kind: "wikipedia", title: "INTERCAL", href: "https://en.wikipedia.org/wiki/INTERCAL" }],
  });

  lb.define("pl+interpress", {
    name: "Interpress",
    websites: [{ kind: "wikipedia", title: "Interpress", href: "https://en.wikipedia.org/wiki/Interpress" }],
  });

  lb.define(
    "pl+isetl",
    {
      name: "ISETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/ISETL" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+isetl", "pl+setl", "pl+setl2"],
      people: ["person+jacob-t-schwartz"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+iswim",
    { name: "ISWIM", websites: [{ kind: "wikipedia", title: "ISWIM", href: "https://en.wikipedia.org/wiki/ISWIM" }] },
    {
      influences: ["pl+algol", "pl+lisp"],
      people: ["person+peter-landin"],
      paradigms: ["para+functional", "para+imperative"],
    },
  );

  lb.define(
    "pl+j-sharp",
    { name: "J#", websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/J_Sharp" }] },
    {
      influences: ["pl+c-sharp", "pl+java", "pl+ms-visual-c-sharp", "pl+visual-jpp"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+.net"],
    },
  );

  lb.define(
    "pl+jakarta-server-pages",
    {
      name: "JSP",
      websites: [{ kind: "wikipedia", title: "JSP", href: "https://en.wikipedia.org/wiki/Jakarta_Server_Pages" }],
    },
    { influences: ["pl+php"] },
  );

  lb.define(
    "pl+java-ee",
    {
      name: "Java EE",
      websites: [{ kind: "wikipedia", title: "Java EE", href: "https://en.wikipedia.org/wiki/Java_EE" }],
    },
    { influences: ["pl+gemstone"] },
  );

  lb.define(
    "pl+java-object-oriented-querying",
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
    {
      name: "JPQL",
      websites: [
        { kind: "wikipedia", title: "JPQL", href: "https://en.wikipedia.org/wiki/Java_Persistence_Query_Language" },
      ],
    },
    { influences: ["pl+sql"] },
  );

  lb.define(
    "pl+javascriptcore",
    {
      name: "WebKit",
      websites: [{ kind: "wikipedia", title: "JavaScriptCore", href: "https://en.wikipedia.org/wiki/JavaScriptCore" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
    },
    { licenses: ["lic+bsd-s", "lic+lgpl"] },
  );

  lb.define("pl+jena", {
    name: "Jena",
    websites: [{ kind: "wikipedia", title: "Jena", href: "https://en.wikipedia.org/wiki/Jena_(framework)" }],
  });

  lb.define(
    "pl+jmodelica.org",
    {
      name: "JModelica.org",
      websites: [{ kind: "wikipedia", title: "JModelica.org", href: "https://en.wikipedia.org/wiki/JModelica.org" }],
      releases: [{ version: "2.10", date: "2019-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+joss",
    { name: "JOSS", websites: [{ kind: "wikipedia", title: "JOSS", href: "https://en.wikipedia.org/wiki/JOSS" }] },
    {
      dialects: ["pl+focal"],
      implementations: ["pl+assembly"],
      people: ["person+cliff-shaw"],
      paradigms: ["para+imperative", "para+non"],
    },
  );

  lb.define(
    "pl+joule",
    {
      name: "Joule",
      websites: [
        { kind: "wikipedia", title: "Joule", href: "https://en.wikipedia.org/wiki/Joule_(programming_language)" },
      ],
    },
    {
      influences: ["pl+actor-model", "pl+t"],
      paradigms: ["para+dataflow", "para+distributed", "para+multi", "para+objects"],
    },
  );

  lb.define(
    "pl+jovial",
    {
      name: "JOVIAL",
      websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
    },
    {
      implementations: [
        "pl+linux",
        "pl+macos",
        "pl+mil-std-1750a",
        "pl+mvs",
        "pl+openvms",
        "pl+powerpc",
        "pl+sparc",
        "pl+win",
      ],
      influences: ["pl+algol", "pl+semi-automatic-ground-environment"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  lb.define(
    "pl+joy",
    {
      name: "Joy",
      websites: [{ kind: "wikipedia", title: "Joy", href: "https://en.wikipedia.org/wiki/Joy_(programming_language)" }],
      releases: [{ version: "unknown", date: "2003-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ffp", "pl+forth", "pl+fp", "pl+scheme"],
      paradigms: ["para+concatenative", "para+functional", "para+multi", "para+stack"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+jscript",
    {
      name: "JScript",
      websites: [{ kind: "wikipedia", title: "JScript", href: "https://en.wikipedia.org/wiki/JScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif" }],
      releases: [{ version: "9.0", date: "2011-01-01", kind: "stable" }],
      extensions: [".asp", ".hta", ".htm", ".html", ".js", ".jse", ".wsc", ".wsf"],
    },
    {
      implementations: ["pl+active-scripting", "pl+jscript-.net"],
      platforms: ["platf+win"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+jscript-.net",
    {
      name: "JScript .NET",
      websites: [{ kind: "wikipedia", title: "JScript .NET", href: "https://en.wikipedia.org/wiki/JScript_.NET" }],
      extensions: [".js"],
    },
    {
      influences: ["pl+ecmascript", "pl+jscript"],
      paradigms: ["para+multi"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+jspp",
    { name: "JS++", websites: [{ kind: "wikipedia", title: "JS++", href: "https://en.wikipedia.org/wiki/JS%2B%2B" }] },
    {
      influences: ["pl+c", "pl+c-sharp", "pl+cpp", "pl+java", "pl+javascript"],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+static"],
    },
  );

  lb.define(
    "pl+jython",
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
    { influences: ["pl+pascal"], people: ["person+richard-e-pattis"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+kawa",
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
      platforms: ["platf+cross-platform", "platf+jvm"],
    },
  );

  lb.define(
    "pl+kent-recursive-calculator",
    {
      name: "KRC",
      websites: [{ kind: "wikipedia", title: "KRC", href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator" }],
    },
    { influences: ["pl+sasl"], people: ["person+david-turner"], paradigms: ["para+functional"] },
  );

  lb.define(
    "pl+kivy",
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
    { licenses: ["lic+free", "lic+mit"] },
  );

  lb.define(
    "pl+kl0",
    { name: "KL0", websites: [{ kind: "wikipedia", title: "KL0", href: "https://en.wikipedia.org/wiki/KL0" }] },
    { influences: ["pl+prolog"] },
  );

  lb.define(
    "pl+kl1",
    { name: "KL1", websites: [{ kind: "wikipedia", title: "KL1", href: "https://en.wikipedia.org/wiki/KL1" }] },
    { influences: ["pl+prolog"] },
  );

  lb.define("pl+kodu-game-lab", {
    name: "Kodu Game Lab",
    websites: [{ kind: "wikipedia", title: "Kodu Game Lab", href: "https://en.wikipedia.org/wiki/Kodu_Game_Lab" }],
    releases: [{ version: "1.6.18.0", date: "2023-01-01", kind: "stable" }],
  });

  lb.define(
    "pl+kojo",
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
      paradigms: ["para+functional", "para+objects", "para+structured"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define("pl+kornshell", {
    name: "Ksh",
    websites: [{ kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" }],
  });

  lb.define(
    "pl+krl",
    {
      name: "KRL",
      websites: [{ kind: "wikipedia", title: "KRL", href: "https://en.wikipedia.org/wiki/KRL_(programming_language)" }],
    },
    { paradigms: ["para+knowledge"] },
  );

  lb.define(
    "pl+kuka-robot",
    {
      name: "KUKA Robot Language",
      websites: [
        { kind: "wikipedia", title: "KUKA Robot Language", href: "https://en.wikipedia.org/wiki/KUKA_Robot_Language" },
      ],
    },
    { influences: ["pl+pascal"] },
  );

  lb.define("pl+lambda-calculus", {
    name: "Lambda calculus",
    websites: [{ kind: "wikipedia", title: "Lambda calculus", href: "https://en.wikipedia.org/wiki/Lambda_calculus" }],
  });

  lb.define(
    "pl+language-h",
    {
      name: "Language H",
      websites: [{ kind: "wikipedia", title: "Language H", href: "https://en.wikipedia.org/wiki/Language_H" }],
    },
    { influences: ["pl+cobol"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+language-integrated-query",
    {
      name: "LINQ",
      websites: [{ kind: "wikipedia", title: "LINQ", href: "https://en.wikipedia.org/wiki/Language_Integrated_Query" }],
    },
    { influences: ["pl+sql"] },
  );

  lb.define("pl+laning-and-zierler-system", {
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
      influences: ["pl+dylan", "pl+scala", "pl+smalltalk"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+meta", "para+multi", "para+objects", "para+reflection", "para+structured"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+libertyeiffel",
    {
      name: "Liberty Eiffel",
      websites: [{ kind: "wikipedia", title: "LibertyEiffel", href: "https://en.wikipedia.org/wiki/LibertyEiffel" }],
      releases: [{ version: "2016.05", date: "2016-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+limbo",
    {
      name: "Limbo",
      websites: [
        { kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Limbo_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+dis-virtual-machine"],
      influences: ["pl+alef", "pl+c", "pl+communicating-sequential-processes", "pl+newsqueak", "pl+pascal"],
      people: ["person+rob-pike"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+lingo",
    {
      name: "Lingo",
      websites: [
        { kind: "wikipedia", title: "Lingo", href: "https://en.wikipedia.org/wiki/Lingo_(programming_language)" },
      ],
    },
    { influences: ["pl+hypertalk", "pl+xtalk"] },
  );

  lb.define("pl+linux", {
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  lb.define("pl+lis", {
    name: "LIS",
    websites: [{ kind: "wikipedia", title: "LIS", href: "https://en.wikipedia.org/wiki/LIS_(programming_language)" }],
  });

  lb.define("pl+llvm", {
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  lb.define(
    "pl+logtalk",
    {
      name: "Logtalk",
      websites: [{ kind: "wikipedia", title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk" }],
      releases: [{ version: "3.66.0", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+objective-c", "pl+prolog", "pl+smalltalk"],
      licenses: ["lic+apache", "lic+artistic-2"],
      paradigms: ["para+logic", "para+objects", "para+prototypes"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+lpc",
    {
      name: "LPC",
      websites: [{ kind: "wikipedia", title: "LPC", href: "https://en.wikipedia.org/wiki/LPC_(programming_language)" }],
    },
    { influences: ["pl+c"] },
  );

  lb.define("pl+luajit", {
    name: "LuaJIT",
    websites: [{ kind: "wikipedia", title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT" }],
  });

  lb.define(
    "pl+lucid",
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
    {
      name: "LYaPAS",
      websites: [{ kind: "wikipedia", title: "LYaPAS", href: "https://en.wikipedia.org/wiki/LYaPAS" }],
    },
    { paradigms: ["para+functional", "para+modular", "para+structured"], typeSystems: ["tsys+dynamic"] },
  );

  lb.define(
    "pl+m4",
    {
      name: "m4",
      websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/M4_(computer_language)" }],
    },
    {
      implementations: ["pl+gnu-m4"],
      people: ["person+brian-kernighan", "person+dennis-ritchie"],
      paradigms: ["para+macros"],
    },
  );

  lb.define("pl+mac-os-x", {
    name: "Mac OS X",
    websites: [{ kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  lb.define("pl+macos", {
    name: "macOS",
    websites: [{ kind: "wikipedia", title: "macOS", href: "https://en.wikipedia.org/wiki/MacOS" }],
  });

  lb.define("pl+macsyma", {
    name: "Macsyma",
    websites: [{ kind: "wikipedia", title: "Macsyma", href: "https://en.wikipedia.org/wiki/Macsyma" }],
  });

  lb.define(
    "pl+mad",
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
      people: ["person+bernard-galler", "person+bruce-arden", "person+robert-m-graham"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+magma-computer-algebra-system",
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

  lb.define("pl+maker-culture", {
    name: "Maker Culture",
    websites: [{ kind: "wikipedia", title: "Maker Culture", href: "https://en.wikipedia.org/wiki/Maker_culture" }],
  });

  lb.define(
    "pl+malbolge",
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
    { influences: ["pl+befunge", "pl+brainfuck", "pl+intercal"] },
  );

  lb.define("pl+maplesim", {
    name: "MapleSim",
    websites: [{ kind: "wikipedia", title: "MapleSim", href: "https://en.wikipedia.org/wiki/MapleSim" }],
  });

  lb.define("pl+mariadb", {
    name: "MariaDB",
    websites: [{ kind: "wikipedia", title: "MariaDB", href: "https://en.wikipedia.org/wiki/MariaDB" }],
  });

  lb.define(
    "pl+math-matic",
    {
      name: "MATH-MATIC",
      websites: [{ kind: "wikipedia", title: "MATH-MATIC", href: "https://en.wikipedia.org/wiki/MATH-MATIC" }],
    },
    { influences: ["pl+flow-matic"], people: ["person+remington-rand"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+mathematica",
    {
      name: "Mathematica",
      websites: [
        { kind: "wikipedia", title: "Wolfram Mathematica", href: "https://en.wikipedia.org/wiki/Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+linux", "platf+mac", "platf+rpi", "platf+win"] },
  );

  lb.define(
    "pl+mblock",
    {
      name: "mBlock",
      websites: [{ kind: "wikipedia", title: "mBlock", href: "https://en.wikipedia.org/wiki/MBlock" }],
    },
    { influences: ["pl+scratch"] },
  );

  lb.define(
    "pl+mdl",
    {
      name: "MDL",
      websites: [{ kind: "wikipedia", title: "MDL", href: "https://en.wikipedia.org/wiki/MDL_(programming_language)" }],
      scoping: ["lexical"],
    },
    {
      influences: ["pl+lisp"],
      people: ["person+bruce-daniels", "person+carl-hewitt", "person+gerald-sussman"],
      licenses: ["lic+open-source"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      platforms: ["platf+bsd"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+mesa",
    {
      name: "Mesa",
      websites: [
        { kind: "wikipedia", title: "Mesa", href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)" },
      ],
      releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
    },
    { influences: ["pl+algol"] },
  );

  lb.define("pl+mil-std-1750a", {
    name: "MIL-STD-1750A",
    websites: [{ kind: "wikipedia", title: "MIL-STD-1750A", href: "https://en.wikipedia.org/wiki/MIL-STD-1750A" }],
  });

  lb.define("pl+mips-architecture", {
    name: "MIPS",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  lb.define(
    "pl+ml-slashi",
    { name: "ML/I", websites: [{ kind: "wikipedia", title: "ML/I", href: "https://en.wikipedia.org/wiki/ML/I" }] },
    { influences: ["pl+trac"] },
  );

  lb.define(
    "pl+mlton",
    {
      name: "MLton",
      websites: [{ kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" }],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+sml"],
      licenses: ["lic+hpnd"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+mono", {
    name: "Mono",
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  lb.define(
    "pl+moonscript",
    {
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    },
    {
      implementations: ["pl+ansi-c", "pl+luajit"],
      influences: ["pl+clu", "pl+coffeescript", "pl+cpp", "pl+modula", "pl+scheme", "pl+snobol"],
      people: ["person+roberto-ierusalimschy"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+prototypes",
        "para+reflective",
        "para+scripting",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+moose",
    {
      name: "Moose",
      websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
    },
    { influences: ["pl+armed-bear-common-lisp", "pl+common-lisp"] },
  );

  lb.define("pl+morphic", {
    name: "Morphic",
    websites: [{ kind: "wikipedia", title: "Morphic", href: "https://en.wikipedia.org/wiki/Morphic_(software)" }],
  });

  lb.define("pl+motorola-68000", {
    name: "Motorola 68000",
    websites: [{ kind: "wikipedia", title: "Motorola 68000", href: "https://en.wikipedia.org/wiki/Motorola_68000" }],
  });

  lb.define(
    "pl+ms-macro-assembler",
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
    {
      name: "Microsoft Power Fx",
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
      influences: ["pl+excel", "pl+mathematica", "pl+miranda", "pl+pascal"],
      licenses: ["lic+mit"],
      paradigms: ["para+dec", "para+functional", "para+general", "para+imperative", "para+low", "para+strongly"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+ms-visual-c-sharp",
    {
      name: "Visual C#",
      websites: [
        { kind: "wikipedia", title: "Visual C#", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C_Sharp" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
      releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
      extensions: [".cs", ".csx"],
    },
    {
      dialects: ["pl+c-", "pl+polyphonic-c-sharp"],
      implementations: ["pl+.net", "pl+.net-framework", "pl+dotgnu", "pl+mono", "pl+ms-visual-c-sharp", "pl+win"],
      influences: [
        "pl+basic",
        "pl+c-",
        "pl+cpp",
        "pl+eiffel",
        "pl+f-sharp",
        "pl+haskell",
        "pl+icon",
        "pl+j-sharp",
        "pl+java",
        "pl+ml",
        "pl+modula",
        "pl+pascal",
        "pl+scala",
        "pl+visual-jpp",
      ],
      people: ["person+anders-hejlsberg"],
      paradigms: [
        "para+concurrent",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
        "para+the",
      ],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+ms-visual-studio", {
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
    {
      name: "MUMPS",
      websites: [{ kind: "wikipedia", title: "MUMPS", href: "https://en.wikipedia.org/wiki/MUMPS" }],
      releases: [{ version: "11.1", date: "1995-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+fortran", "pl+joss", "pl+speedcoding", "pl+telcomp"],
      people: ["person+neil-pappalardo", "person+robert-a-greenes"],
      paradigms: ["para+imperative"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+mvs", {
    name: "MVS",
    websites: [{ kind: "wikipedia", title: "MVS", href: "https://en.wikipedia.org/wiki/MVS" }],
  });

  lb.define(
    "pl+n1ql",
    { name: "N1QL", websites: [{ kind: "wikipedia", title: "N1QL", href: "https://en.wikipedia.org/wiki/N1QL" }] },
    { influences: ["pl+sql"] },
  );

  lb.define(
    "pl+napier88",
    {
      name: "Napier88",
      websites: [{ kind: "wikipedia", title: "Napier88", href: "https://en.wikipedia.org/wiki/Napier88" }],
    },
    {
      influences: ["pl+algol"],
      people: ["person+ron-morrison"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
    },
  );

  lb.define(
    "pl+neko",
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
      paradigms: ["para+multi", "para+objects", "para+prototypes", "para+scripting", "para+structured"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nekovm",
    {
      name: "NekoVMNeko",
      websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects", "para+prototypes", "para+scripting", "para+structured"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nemerle",
    {
      name: "Nemerle",
      websites: [{ kind: "wikipedia", title: "Nemerle", href: "https://en.wikipedia.org/wiki/Nemerle" }],
      releases: [{ version: "1.2.507.0", date: "2016-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c-sharp", "pl+lisp", "pl+ml", "pl+ms-visual-c-sharp"],
      paradigms: [
        "para+aspect",
        "para+event",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+nesl",
    {
      name: "NESL",
      websites: [{ kind: "wikipedia", title: "NESL", href: "https://en.wikipedia.org/wiki/NESL" }],
      releases: [{ version: "3.1", date: "1995-01-01", kind: "stable" }],
    },
    { licenses: ["lic+isc", "lic+mit"], paradigms: ["para+array", "para+functional"] },
  );

  lb.define(
    "pl+netlogo",
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
      implementations: ["pl+java", "pl+scala"],
      influences: ["pl+logo", "pl+objectlogo", "pl+starlogo", "pl+ucblogo"],
      licenses: ["lic+gpl"],
      paradigms: ["para+computer", "para+educational", "para+imperative", "para+multi", "para+simulation"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+jvm", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+netrexx",
    {
      name: "NetRexx",
      websites: [{ kind: "wikipedia", title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NETREXX.gif" }],
      releases: [{ version: "4.06", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+java", "pl+object-rexx", "pl+pl-slash", "pl+rexx"],
      people: ["person+mike-cowlishaw"],
      licenses: ["lic+icu"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+linux",
        "platf+mac",
        "platf+win",
        "platf+z-slashos",
        "platf+z-slashvm",
      ],
      typeSystems: ["tsys+dynamic", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+netwide-assembler",
    {
      name: "NASM",
      websites: [{ kind: "wikipedia", title: "NASM", href: "https://en.wikipedia.org/wiki/Netwide_Assembler" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Netwide_Assembler.svg" }],
      releases: [{ version: "2.16.03", date: "2024-01-01", kind: "stable" }],
    },
    { people: ["person+h-peter-anvin"], licenses: ["lic+bsd-s"] },
  );

  lb.define(
    "pl+newp",
    {
      name: "NEWP",
      websites: [{ kind: "wikipedia", title: "NEWP", href: "https://en.wikipedia.org/wiki/NEWP" }],
      releases: [{ version: "17.0", date: "2015-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+executive-systems-problem-oriented"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+newspeak",
    {
      name: "Newspeak",
      websites: [
        { kind: "wikipedia", title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+cpp", "pl+javascript"],
      influences: ["pl+beta", "pl+e", "pl+self", "pl+smalltalk"],
      people: ["person+gilad-bracha"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+objects"],
      platforms: ["platf+android", "platf+linux", "platf+mac", "platf+web", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+optional"],
    },
  );

  lb.define(
    "pl+newsqueak",
    {
      name: "Newsqueak",
      websites: [{ kind: "wikipedia", title: "Newsqueak", href: "https://en.wikipedia.org/wiki/Newsqueak" }],
    },
    {
      influences: ["pl+c", "pl+communicating-sequential-processes"],
      people: ["person+rob-pike"],
      paradigms: ["para+concurrent"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+newtonscript",
    {
      name: "NewtonScript",
      websites: [{ kind: "wikipedia", title: "NewtonScript", href: "https://en.wikipedia.org/wiki/NewtonScript" }],
    },
    {
      influences: ["pl+dylan", "pl+self", "pl+smalltalk"],
      paradigms: ["para+objects", "para+prototypes"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nial",
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
    {
      name: "Wirth",
      websites: [{ kind: "wikipedia", title: "Wirth", href: "https://en.wikipedia.org/wiki/Niklaus_Wirth" }],
    },
    {
      dialects: [
        "pl+active-oberon",
        "pl+alma-0",
        "pl+euler",
        "pl+modula",
        "pl+oberon",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+obliq",
        "pl+pascal",
        "pl+pl360",
        "pl+zonnon",
      ],
    },
  );

  lb.define(
    "pl+nix-package-manager",
    {
      name: "Nix",
      websites: [{ kind: "wikipedia", title: "Nix", href: "https://en.wikipedia.org/wiki/Nix_package_manager" }],
      releases: [{ version: "2.22.1", date: "2024-01-01", kind: "stable" }],
    },
    { platforms: ["platf+linux", "platf+unix"] },
  );

  lb.define(
    "pl+nord",
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
      people: ["person+norsk-data"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+noweb",
    {
      name: "noweb",
      websites: [{ kind: "wikipedia", title: "Noweb", href: "https://en.wikipedia.org/wiki/Noweb" }],
      releases: [{ version: "2.12", date: "2018-01-01", kind: "stable" }],
    },
    { influences: ["pl+web"] },
  );

  lb.define(
    "pl+nu",
    {
      name: "Nu",
      websites: [{ kind: "wikipedia", title: "Nu", href: "https://en.wikipedia.org/wiki/Nu_(programming_language)" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lisp", "pl+objective-c", "pl+objective-cpp", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+mac", "platf+x86"],
    },
  );

  lb.define("pl+numerical-algorithms-group", {
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
      paradigms: ["para+class", "para+objects"],
      platforms: [
        "platf+arm",
        "platf+bsd",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+win",
        "platf+x86-64",
      ],
    },
  );

  lb.define(
    "pl+objectlogo",
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
      dialects: ["pl+netlogo", "pl+starlogo"],
      implementations: ["pl+ucblogo"],
      influences: ["pl+lisp"],
      people: ["person+cynthia-solomon", "person+seymour-papert", "person+wally-feurzeig"],
      paradigms: ["para+educational", "para+functional", "para+imperative", "para+multi", "para+reflective"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+obliq",
    { name: "Obliq", websites: [{ kind: "wikipedia", title: "Obliq", href: "https://en.wikipedia.org/wiki/Obliq" }] },
    {
      implementations: ["pl+modula"],
      influences: ["pl+modula", "pl+oberon", "pl+self"],
      people: ["person+luca-cardelli"],
      paradigms: [
        "para+imperative",
        "para+modular",
        "para+multi",
        "para+objects",
        "para+parallel",
        "para+prototypes",
        "para+structured",
      ],
      platforms: ["platf+ia-32"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+occam",
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
      people: ["person+david-may"],
      paradigms: ["para+concurrent", "para+imperative"],
    },
  );

  lb.define(
    "pl+occam--",
    {
      name: "occam-π",
      websites: [{ kind: "wikipedia", title: "occam-π", href: "https://en.wikipedia.org/wiki/Occam-%CF%80" }],
    },
    {
      influences: ["pl+occam"],
      paradigms: ["para+concurrent", "para+imperative"],
      platforms: ["platf+arduino", "platf+ia-32"],
    },
  );

  lb.define("pl+odra", {
    name: "Odra ALGOL 68",
    websites: [{ kind: "wikipedia", title: "Odra ALGOL 68", href: "https://en.wikipedia.org/wiki/Odra_(computer)" }],
  });

  lb.define("pl+okuma-corporation", {
    name: "Okuma",
    websites: [{ kind: "wikipedia", title: "Okuma", href: "https://en.wikipedia.org/wiki/Okuma_Corporation" }],
  });

  lb.define("pl+oorexx", {
    name: "ooREXX",
    websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/OoREXX" }],
  });

  lb.define(
    "pl+opa",
    {
      name: "Opa",
      websites: [{ kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
      releases: [{ version: "1.1.1", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+erlang", "pl+javascript", "pl+ml", "pl+ocaml"],
      licenses: ["lic+affero-gpl", "lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+open",
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
      paradigms: ["para+embedded", "para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+open-source", {
    name: "open source",
    websites: [{ kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open_source" }],
  });

  lb.define(
    "pl+opencl",
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
      influences: ["pl+c99", "pl+cpp14", "pl+cpp17", "pl+cuda"],
      paradigms: ["para+generic", "para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+openmodelica",
    {
      name: "OpenModelica",
      websites: [{ kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" }],
      releases: [{ version: "1.22.2", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+eclipse-public", "lic+free", "lic+gpl"] },
  );

  lb.define(
    "pl+openqasm",
    {
      name: "OpenQASM",
      websites: [{ kind: "wikipedia", title: "OpenQASM", href: "https://en.wikipedia.org/wiki/OpenQASM" }],
      extensions: [".qasm"],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define("pl+openvera", {
    name: "OpenVera",
    websites: [{ kind: "wikipedia", title: "OpenVera", href: "https://en.wikipedia.org/wiki/OpenVera" }],
  });

  lb.define("pl+openvms", {
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  lb.define("pl+ops5", {
    name: "OPS5",
    websites: [{ kind: "wikipedia", title: "OPS5", href: "https://en.wikipedia.org/wiki/OPS5" }],
  });

  lb.define("pl+oracle-solaris-studio", {
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
    {
      name: "Orc",
      websites: [{ kind: "wikipedia", title: "Orc", href: "https://en.wikipedia.org/wiki/Orc_(programming_language)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Orc_programming_language_logo.png" },
      ],
    },
    {
      influences: ["pl+haskell", "pl+ml", "pl+oz", "pl+pict", "pl+smalltalk"],
      people: ["person+jayadev-misra", "person+william-r-cook"],
      licenses: ["lic+bsd-n"],
      paradigms: ["para+concurrent", "para+nondeterministic"],
    },
  );

  lb.define(
    "pl+oriel",
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
    {
      name: "Orwell",
      websites: [
        { kind: "wikipedia", title: "Orwell", href: "https://en.wikipedia.org/wiki/Orwell_(programming_language)" },
      ],
    },
    { influences: ["pl+miranda"], people: ["person+philip-wadler"], paradigms: ["para+functional", "para+lazy"] },
  );

  lb.define("pl+otcl", {
    name: "OTcl",
    websites: [{ kind: "wikipedia", title: "OTcl", href: "https://en.wikipedia.org/wiki/OTcl" }],
  });

  lb.define(
    "pl+oxygene",
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
      influences: ["pl+c-sharp", "pl+delphi", "pl+ms-visual-c-sharp", "pl+pascal"],
      licenses: ["lic+trialware"],
      platforms: ["platf+.net", "platf+jvm", "platf+linux", "platf+wasm", "platf+win"],
    },
  );

  lb.define(
    "pl+oz",
    {
      name: "Oz",
      websites: [{ kind: "wikipedia", title: "Oz", href: "https://en.wikipedia.org/wiki/Oz_(programming_language)" }],
      releases: [{ version: "1.4.0", date: "2018-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+erlang", "pl+lisp", "pl+prolog"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+concurrent",
        "para+constraint",
        "para+distributed",
        "para+functional",
        "para+imperative",
        "para+logic",
        "para+multi",
        "para+objects",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+p",
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
    {
      name: "P′′",
      websites: [{ kind: "wikipedia", title: "P′′", href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2" }],
    },
    { dialects: ["pl+brainfuck"], people: ["person+corrado-bohm"], paradigms: ["para+imperative", "para+structured"] },
  );

  lb.define(
    "pl+pact-i",
    {
      name: "PACT I",
      websites: [{ kind: "wikipedia", title: "PACT I", href: "https://en.wikipedia.org/wiki/PACT_I" }],
    },
    { influences: ["pl+fortran", "pl+speedcoding"] },
  );

  lb.define(
    "pl+pari-slashgp",
    {
      name: "PARI/GP",
      websites: [{ kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
    },
    { people: ["person+henri-cohen"], licenses: ["lic+gpl"] },
  );

  lb.define("pl+parrot-virtual-machine", {
    name: "Parrot",
    websites: [{ kind: "wikipedia", title: "Parrot", href: "https://en.wikipedia.org/wiki/Parrot_virtual_machine" }],
  });

  lb.define(
    "pl+patcher",
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
    {
      name: "PathScale EKOPath Compiler",
      websites: [{ kind: "wikipedia", title: "PathScale", href: "https://en.wikipedia.org/wiki/PathScale" }],
      releases: [{ version: "5.0.0", date: "2013-01-01", kind: "stable" }],
    },
    { platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+pcastl",
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

  lb.define("pl+pdp-11", {
    name: "PDP-11",
    websites: [{ kind: "wikipedia", title: "PDP-11", href: "https://en.wikipedia.org/wiki/PDP-11" }],
  });

  lb.define("pl+pdp-7", {
    name: "PDP-7",
    websites: [{ kind: "wikipedia", title: "PDP-7", href: "https://en.wikipedia.org/wiki/PDP-7" }],
  });

  lb.define(
    "pl+perl-data",
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
      people: ["person+karl-glazebrook"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+array"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define("pl+pgi-compiler", {
    name: "PGI",
    websites: [{ kind: "wikipedia", title: "PGI", href: "https://en.wikipedia.org/wiki/PGI_compiler" }],
  });

  lb.define(
    "pl+pico",
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
      paradigms: ["para+imperative", "para+reflective"],
      platforms: ["platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
    },
  );

  lb.define(
    "pl+pict",
    {
      name: "Pict",
      websites: [
        { kind: "wikipedia", title: "Pict", href: "https://en.wikipedia.org/wiki/Pict_(programming_language)" },
      ],
    },
    {
      influences: ["pl+ml"],
      people: ["person+benjamin-c-pierce"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+pike",
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
      influences: ["pl+c", "pl+cpp", "pl+lpc"],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mozilla-public"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+manifest", "tsys+static"],
    },
  );

  lb.define("pl+pipeline", {
    name: "Pipeline (Unix)",
    websites: [{ kind: "wikipedia", title: "Pipeline (Unix)", href: "https://en.wikipedia.org/wiki/Pipeline_(Unix)" }],
  });

  lb.define(
    "pl+pizza",
    {
      name: "Pizza",
      websites: [
        { kind: "wikipedia", title: "Pizza", href: "https://en.wikipedia.org/wiki/Pizza_(programming_language)" },
      ],
    },
    { influences: ["pl+java"], paradigms: ["para+algebraic", "para+generic"] },
  );

  lb.define(
    "pl+pl-6",
    { name: "PL-6", websites: [{ kind: "wikipedia", title: "PL-6", href: "https://en.wikipedia.org/wiki/PL-6" }] },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+pl-slash",
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
        "pl+cornell-university",
        "pl+fortran",
        "pl+pl-slash",
        "pl+speedcoding",
        "pl+xpl",
      ],
      people: ["person+gary-kildall"],
      paradigms: ["para+educational", "para+imperative", "para+structured"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+pl.8",
    { name: "PL.8", websites: [{ kind: "wikipedia", title: "PL.8", href: "https://en.wikipedia.org/wiki/PL.8" }] },
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+pl360",
    { name: "PL360", websites: [{ kind: "wikipedia", title: "PL360", href: "https://en.wikipedia.org/wiki/PL360" }] },
    {
      implementations: ["pl+algol"],
      influences: ["pl+algol", "pl+executive-systems-problem-oriented"],
      people: ["person+niklaus-wirth"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+planc",
    { name: "PLANC", websites: [{ kind: "wikipedia", title: "PLANC", href: "https://en.wikipedia.org/wiki/PLANC" }] },
    {
      people: ["person+norsk-data"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+plankalkul",
    {
      name: "Plankalkül",
      websites: [{ kind: "wikipedia", title: "Plankalkül", href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl" }],
    },
    {
      implementations: ["pl+free-university-of-berlin"],
      influences: ["pl+begriffsschrift"],
      people: ["person+konrad-zuse"],
      paradigms: ["para+imperative"],
    },
  );

  lb.define(
    "pl+planner",
    {
      name: "Planner",
      websites: [
        { kind: "wikipedia", title: "Planner", href: "https://en.wikipedia.org/wiki/Planner_(programming_language)" },
      ],
    },
    {
      influences: ["pl+mdl"],
      people: ["person+carl-hewitt"],
      paradigms: ["para+imperative", "para+logic", "para+multi"],
    },
  );

  lb.define(
    "pl+plex",
    {
      name: "Plex",
      websites: [
        { kind: "wikipedia", title: "PLEX", href: "https://en.wikipedia.org/wiki/PLEX_(programming_language)" },
      ],
    },
    { licenses: ["lic+proprietary"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+plus",
    {
      name: "Plus",
      websites: [
        { kind: "wikipedia", title: "Plus", href: "https://en.wikipedia.org/wiki/Plus_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+dec", "pl+ibm-system-slash370", "pl+motorola-68000", "pl+pdp-11"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+poly-slashml",
    {
      name: "Poly/ML",
      websites: [{ kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Poly/ML" }],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+alice", "pl+concurrent-ml", "pl+dependent-ml"],
      implementations: ["pl+mlton", "pl+poly-slashml", "pl+sml"],
      influences: ["pl+hope", "pl+ml", "pl+pascal"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+polyphonic-c-sharp", {
    name: "Polyphonic C#",
    websites: [{ kind: "wikipedia", title: "Polyphonic C#", href: "https://en.wikipedia.org/wiki/Polyphonic_C_Sharp" }],
  });

  lb.define(
    "pl+pop-11",
    {
      name: "POP-11",
      websites: [{ kind: "wikipedia", title: "POP-11", href: "https://en.wikipedia.org/wiki/POP-11" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+pop-2"],
      people: ["person+robin-popplestone"],
      licenses: ["lic+mit", "lic+open-source", "lic+proprietary", "lic+xfree86"],
      paradigms: ["para+dec", "para+functional", "para+imperative", "para+multi", "para+reflective", "para+structured"],
      platforms: [
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+openvms",
        "platf+unix",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+pop-2",
    {
      name: "POP-2",
      websites: [{ kind: "wikipedia", title: "POP-2", href: "https://en.wikipedia.org/wiki/POP-2" }],
      releases: [{ version: "unknown", date: "1975-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+algol", "pl+cowsel", "pl+lisp"],
      people: ["person+robin-popplestone", "person+rod-burstall"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+multi", "para+reflective", "para+structured"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+poplog",
    {
      name: "Poplog",
      websites: [{ kind: "wikipedia", title: "Poplog", href: "https://en.wikipedia.org/wiki/Poplog" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+mit", "lic+open-source", "lic+proprietary", "lic+xfree86"],
      platforms: ["platf+ia-32", "platf+x86-64"],
    },
  );

  lb.define(
    "pl+portable-c-compiler",
    {
      name: "Portable C Compiler",
      websites: [{ kind: "wikipedia", title: "pcc", href: "https://en.wikipedia.org/wiki/Portable_C_Compiler" }],
      releases: [{ version: "1.1.0", date: "2014-01-01", kind: "stable" }],
    },
    { licenses: ["lic+bsd"] },
  );

  lb.define(
    "pl+portable-document-format",
    {
      name: "PDF",
      websites: [{ kind: "wikipedia", title: "PDF", href: "https://en.wikipedia.org/wiki/Portable_Document_Format" }],
    },
    { influences: ["pl+postscript"] },
  );

  lb.define(
    "pl+powerbuilder",
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

  lb.define("pl+powerpc", {
    name: "PowerPC",
    websites: [{ kind: "wikipedia", title: "PowerPC", href: "https://en.wikipedia.org/wiki/PowerPC" }],
  });

  lb.define("pl+ppc64", {
    name: "ppc64",
    websites: [{ kind: "wikipedia", title: "ppc64", href: "https://en.wikipedia.org/wiki/Ppc64" }],
  });

  lb.define(
    "pl+processing.js",
    {
      name: "ProcessingProcessing IDE",
      websites: [
        { kind: "wikipedia", title: "ProcessingProcessing IDE", href: "https://en.wikipedia.org/wiki/Processing.js" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ version: "4.3", date: "2023-01-01", kind: "stable" }],
    },
    { people: ["person+ben-fry", "person+casey-reas"], licenses: ["lic+gpl", "lic+lgpl"], paradigms: ["para+objects"] },
  );

  lb.define(
    "pl+profile-scripting",
    {
      name: "Profile Scripting Language",
      websites: [{ kind: "wikipedia", title: "PSL", href: "https://en.wikipedia.org/wiki/Profile_Scripting_Language" }],
    },
    { influences: ["pl+mumps"], paradigms: ["para+imperative"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+programming-language-for-business",
    {
      name: "Programming Language for Business",
      websites: [
        { kind: "wikipedia", title: "PL/B", href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business" },
      ],
      extensions: [".cb", ".pgm", ".pls", ".ps", ".rl"],
    },
    { influences: ["pl+cobol"], paradigms: ["para+imperative"], typeSystems: ["tsys+static", "tsys+strong"] },
  );

  lb.define(
    "pl+prograph",
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
      paradigms: ["para+dataflow", "para+multi", "para+objects", "para+visual"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+win"],
    },
  );

  lb.define(
    "pl+promal",
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

  lb.define("pl+ptc", {
    name: "PTC",
    websites: [{ kind: "wikipedia", title: "PTC", href: "https://en.wikipedia.org/wiki/PTC_(software_company)" }],
  });

  lb.define("pl+pthreads", {
    name: "Pthreads",
    websites: [{ kind: "wikipedia", title: "Pthreads", href: "https://en.wikipedia.org/wiki/Pthreads" }],
  });

  lb.define("pl+puppet", {
    name: "Puppet",
    websites: [{ kind: "wikipedia", title: "Puppet", href: "https://en.wikipedia.org/wiki/Puppet_(software)" }],
  });

  lb.define(
    "pl+pure-data",
    {
      name: "Pure DataPure Data",
      websites: [{ kind: "wikipedia", title: "Pure DataPure Data", href: "https://en.wikipedia.org/wiki/Pure_Data" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+patcher"],
      people: ["person+miller-s-puckette"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+dataflow"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define(
    "pl+pwct",
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
      people: ["person+mahmoud-samir-fayed"],
      licenses: ["lic+gpl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+visual"],
      platforms: ["platf+win"],
    },
  );

  lb.define(
    "pl+q-sharp",
    { name: "Q#", websites: [{ kind: "wikipedia", title: "Q#", href: "https://en.wikipedia.org/wiki/Q_Sharp" }] },
    {
      influences: ["pl+c-sharp", "pl+f-sharp", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+quantum"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+qalb",
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
      influences: ["pl+cpp", "pl+d", "pl+java", "pl+perl"],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mit"],
      paradigms: [
        "para+class",
        "para+functional",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+parallel",
        "para+shared",
        "para+thread",
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+qt",
    {
      name: "Qt",
      websites: [{ kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
      releases: [{ version: "6.7.1", date: "2024-01-01", kind: "stable" }],
    },
    { influences: ["pl+qml"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+qtscript", {
    name: "QtScript",
    websites: [{ kind: "wikipedia", title: "QtScript", href: "https://en.wikipedia.org/wiki/QtScript" }],
  });

  lb.define(
    "pl+quakec",
    {
      name: "QuakeC",
      websites: [{ kind: "wikipedia", title: "QuakeC", href: "https://en.wikipedia.org/wiki/QuakeC" }],
    },
    {
      influences: ["pl+c"],
      people: ["person+john-carmack"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+quercus", {
    name: "Quercus",
    websites: [{ kind: "wikipedia", title: "Quercus", href: "https://en.wikipedia.org/wiki/Quercus_(software)" }],
  });

  lb.define(
    "pl+query",
    {
      name: "Query language",
      websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
    },
    { dialects: ["pl+sql"] },
  );

  lb.define(
    "pl+quintus-prolog",
    {
      name: "Quintus Prolog",
      websites: [{ kind: "wikipedia", title: "Quintus Prolog", href: "https://en.wikipedia.org/wiki/Quintus_Prolog" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+rapid",
    { name: "RAPID", websites: [{ kind: "wikipedia", title: "RAPID", href: "https://en.wikipedia.org/wiki/RAPID" }] },
    { influences: ["pl+c"] },
  );

  lb.define(
    "pl+rapira",
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
      people: ["person+andrey-ershov"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+intel-8080", "platf+zilog-z80"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+ravenscar-profile", {
    name: "Ravenscar profile",
    websites: [
      { kind: "wikipedia", title: "Ravenscar profile", href: "https://en.wikipedia.org/wiki/Ravenscar_profile" },
    ],
  });

  lb.define(
    "pl+react",
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
    {
      name: "Redux",
      websites: [
        { kind: "wikipedia", title: "Redux", href: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" },
      ],
    },
    { influences: ["pl+elm"] },
  );

  lb.define(
    "pl+reia",
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
      influences: ["pl+clojure", "pl+erlang", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+distributed", "para+functional", "para+multi", "para+process"],
      platforms: ["platf+erlang"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+renderman-shading", {
    name: "RenderMan Shading Language",
    websites: [
      {
        kind: "wikipedia",
        title: "RenderMan Shading Language",
        href: "https://en.wikipedia.org/wiki/RenderMan_Shading_Language",
      },
    ],
  });

  lb.define("pl+reverse-polish-notation", {
    name: "RPN",
    websites: [{ kind: "wikipedia", title: "RPN", href: "https://en.wikipedia.org/wiki/Reverse_Polish_Notation" }],
  });

  lb.define(
    "pl+rexx",
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
      influences: ["pl+algol", "pl+cms-exec", "pl+exec-2", "pl+pl-slash"],
      people: ["person+mike-cowlishaw"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
    },
  );

  lb.define("pl+robotics", {
    name: "Robotics",
    websites: [{ kind: "wikipedia", title: "Robotics", href: "https://en.wikipedia.org/wiki/Robotics" }],
  });

  lb.define(
    "pl+roslyn",
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

  lb.define(
    "pl+rpl",
    {
      name: "RPL",
      websites: [{ kind: "wikipedia", title: "RPL", href: "https://en.wikipedia.org/wiki/RPL_(programming_language)" }],
    },
    {
      influences: ["pl+forth", "pl+lisp", "pl+reverse-polish-notation"],
      paradigms: ["para+concatenative", "para+stack", "para+structured"],
    },
  );

  lb.define(
    "pl+rtl-slash2",
    { name: "RTL/2", websites: [{ kind: "wikipedia", title: "RTL/2", href: "https://en.wikipedia.org/wiki/RTL/2" }] },
    {
      influences: ["pl+algol"],
      people: ["person+jgp-barnes"],
      paradigms: ["para+imperative", "para+multi", "para+real", "para+structured"],
      platforms: ["platf+cross-platform", "platf+openvms"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  lb.define(
    "pl+rubinius",
    {
      name: "Rubinius",
      websites: [{ kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" }],
      releases: [{ version: "5.0", date: "2020-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mozilla-public"] },
  );

  lb.define(
    "pl+s-lang",
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
    {
      name: "S-PLUS",
      websites: [{ kind: "wikipedia", title: "S-PLUS", href: "https://en.wikipedia.org/wiki/S-PLUS" }],
      releases: [{ version: "8.2", date: "2010-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+s3",
    {
      name: "S3",
      websites: [{ kind: "wikipedia", title: "S3", href: "https://en.wikipedia.org/wiki/S3_(programming_language)" }],
    },
    { influences: ["pl+algol"], paradigms: ["para+imperative", "para+structured"] },
  );

  lb.define(
    "pl+sac",
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
      influences: ["pl+apl", "pl+c", "pl+sisal"],
      licenses: ["lic+free"],
      paradigms: ["para+array", "para+functional"],
      platforms: ["platf+posix", "platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+safari", {
    name: "Safari",
    websites: [{ kind: "wikipedia", title: "Safari", href: "https://en.wikipedia.org/wiki/Safari_(web_browser)" }],
  });

  lb.define("pl+sail", {
    name: "SAIL",
    websites: [{ kind: "wikipedia", title: "SAIL", href: "https://en.wikipedia.org/wiki/SAIL_(programming_language)" }],
  });

  lb.define(
    "pl+sas",
    {
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_language" }],
    },
    {
      influences: ["pl+pl-slash"],
      people: ["person+anthony-james-barr"],
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+data", "para+imperative", "para+multi"],
      platforms: ["platf+mac", "platf+win"],
    },
  );

  lb.define(
    "pl+sas-system",
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
    {
      name: "SASL",
      websites: [
        { kind: "wikipedia", title: "SASL", href: "https://en.wikipedia.org/wiki/SASL_(programming_language)" },
      ],
    },
    { influences: ["pl+iswim"], people: ["person+david-turner"], paradigms: ["para+functional"] },
  );

  lb.define(
    "pl+sather",
    {
      name: "Sather",
      websites: [{ kind: "wikipedia", title: "Sather", href: "https://en.wikipedia.org/wiki/Sather" }],
      releases: [{ version: "1.2.3", date: "2007-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+clu", "pl+common-lisp", "pl+eiffel", "pl+scheme"],
      people: ["person+steve-omohundro"],
      paradigms: ["para+functional", "para+objects"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+sawzall",
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
    { licenses: ["lic+bsd", "lic+mit", "lic+public-domain"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+scaleform-gfx", {
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  lb.define(
    "pl+scm",
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
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  lb.define(
    "pl+script.net",
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
      people: ["person+lee-e-mcmahon"],
      paradigms: ["para+scripting"],
    },
  );

  lb.define(
    "pl+seed7",
    {
      name: "Seed7",
      websites: [{ kind: "wikipedia", title: "Seed7", href: "https://en.wikipedia.org/wiki/Seed7" }],
      releases: [{ version: "unknown", date: "2023-05-29", kind: "stable" }],
    },
    {
      implementations: ["pl+open-source"],
      influences: ["pl+ada", "pl+algol", "pl+c", "pl+cpp", "pl+java", "pl+modula", "pl+pascal"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: [
        "para+extensible",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+semi-automatic-ground-environment", {
    name: "SAGE",
    websites: [
      { kind: "wikipedia", title: "SAGE", href: "https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment" },
    ],
  });

  lb.define(
    "pl+sensetalk",
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
      paradigms: ["para+multi", "para+objects", "para+people"],
      typeSystems: ["tsys+duck"],
    },
  );

  lb.define(
    "pl+sequencel",
    {
      name: "SequenceL",
      websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+dec", "para+functional", "para+parallel"],
      platforms: ["platf+arm", "platf+linux", "platf+mac", "platf+win", "platf+x86"],
      typeSystems: ["tsys+inferred", "tsys+static"],
    },
  );

  lb.define(
    "pl+setl",
    {
      name: "SETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/SETL" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol"],
      people: ["person+jacob-t-schwartz"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+setl2",
    {
      name: "SETL2",
      websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+algol", "pl+isetl", "pl+setl", "pl+setl2"],
      people: ["person+jacob-t-schwartz"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+shading",
    {
      name: "shading language",
      websites: [
        { kind: "wikipedia", title: "shading language", href: "https://en.wikipedia.org/wiki/Shading_language" },
      ],
    },
    { dialects: ["pl+cg"] },
  );

  lb.define("pl+short-code", {
    name: "Short Code",
    websites: [
      { kind: "wikipedia", title: "Short Code", href: "https://en.wikipedia.org/wiki/Short_Code_(computer_language)" },
    ],
  });

  lb.define("pl+siemens", {
    name: "Siemens",
    websites: [{ kind: "wikipedia", title: "Siemens", href: "https://en.wikipedia.org/wiki/Siemens" }],
  });

  lb.define(
    "pl+silverfrost-ftn95",
    {
      name: "Silverfrost FTN95: Fortran for Windows",
      websites: [{ kind: "wikipedia", title: "Silverfrost", href: "https://en.wikipedia.org/wiki/Silverfrost_FTN95" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Silverfrost_ftn95.jpg" }],
      releases: [{ version: "9.00", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define("pl+simscript", {
    name: "Simscript",
    websites: [{ kind: "wikipedia", title: "Simscript", href: "https://en.wikipedia.org/wiki/Simscript" }],
  });

  lb.define(
    "pl+simula",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula", href: "https://en.wikipedia.org/wiki/Simula" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    },
    {
      implementations: ["pl+algol", "pl+simscript"],
      influences: ["pl+algol", "pl+simscript"],
      people: ["person+kristen-nygaard", "person+ole-johan-dahl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+nominative", "tsys+static"],
    },
  );

  lb.define(
    "pl+simula-67",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    },
    {
      implementations: ["pl+algol", "pl+simscript"],
      influences: ["pl+algol", "pl+simscript"],
      people: ["person+kristen-nygaard", "person+ole-johan-dahl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+nominative", "tsys+static"],
    },
  );

  lb.define(
    "pl+simula67",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula67", href: "https://en.wikipedia.org/wiki/Simula67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    },
    {
      implementations: ["pl+algol", "pl+simscript"],
      influences: ["pl+algol", "pl+simscript"],
      people: ["person+kristen-nygaard", "person+ole-johan-dahl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+nominative", "tsys+static"],
    },
  );

  lb.define(
    "pl+simulink",
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
    {
      name: "SIOD",
      websites: [{ kind: "wikipedia", title: "SIOD", href: "https://en.wikipedia.org/wiki/SIOD" }],
      releases: [{ version: "3.63", date: "2008-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+linux", "platf+openvms", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  lb.define(
    "pl+sisal",
    { name: "SISAL", websites: [{ kind: "wikipedia", title: "SISAL", href: "https://en.wikipedia.org/wiki/SISAL" }] },
    {
      influences: ["pl+c", "pl+fortran", "pl+lucid", "pl+pascal"],
      paradigms: ["para+dataflow", "para+functional"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+sketchpad", {
    name: "Sketchpad",
    websites: [{ kind: "wikipedia", title: "Sketchpad", href: "https://en.wikipedia.org/wiki/Sketchpad" }],
  });

  lb.define(
    "pl+skill",
    { name: "SKILL", websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/SKILL" }] },
    {
      influences: ["pl+common-lisp", "pl+common-lisp-object-system", "pl+scheme"],
      paradigms: ["para+functional", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+small",
    {
      name: "Small Machine Algol Like Language",
      websites: [
        { kind: "wikipedia", title: "Small Machine Algol Like Language", href: "https://en.wikipedia.org/wiki/SMALL" },
      ],
    },
    {
      implementations: ["pl+fortran"],
      influences: ["pl+algol"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+dec"],
    },
  );

  lb.define("pl+small-c", {
    name: "Small-C",
    websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
  });

  lb.define("pl+smarteiffel", {
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  lb.define(
    "pl+snap-",
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
      influences: ["pl+apl", "pl+logo", "pl+scheme", "pl+scratch", "pl+smalltalk"],
      people: ["person+brian-harvey"],
      licenses: ["lic+affero-gpl"],
      paradigms: ["para+educational", "para+event", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+sp-slashk",
    { name: "SP/k", websites: [{ kind: "wikipedia", title: "SP/k", href: "https://en.wikipedia.org/wiki/SP/k" }] },
    {
      influences: ["pl+pl-slash"],
      people: ["person+jr-cordy", "person+rc-holt"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+sparc", {
    name: "SPARC",
    websites: [{ kind: "wikipedia", title: "SPARC", href: "https://en.wikipedia.org/wiki/SPARC" }],
  });

  lb.define(
    "pl+sparql",
    {
      name: "SPARQL",
      websites: [{ kind: "wikipedia", title: "SPARQL", href: "https://en.wikipedia.org/wiki/SPARQL" }],
      releases: [{ version: "1.1", date: "2013-01-01", kind: "stable" }],
    },
    { implementations: ["pl+jena", "pl+virtuoso-universal-server"], influences: ["pl+sql"], paradigms: ["para+query"] },
  );

  lb.define(
    "pl+speakeasy",
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
      people: ["person+stanley-cohen"],
      licenses: ["lic+trialware"],
      paradigms: ["para+imperative"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+speedcoding",
    {
      name: "Speedcoding",
      websites: [{ kind: "wikipedia", title: "Speedcoding", href: "https://en.wikipedia.org/wiki/Speedcoding" }],
    },
    {
      influences: ["pl+assembly"],
      people: ["person+john-backus"],
      paradigms: ["para+generic", "para+structured"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+spidermonkey", {
    name: "SpiderMonkey",
    websites: [
      {
        kind: "wikipedia",
        title: "SpiderMonkey",
        href: "https://en.wikipedia.org/wiki/SpiderMonkey_(JavaScript_engine)",
      },
    ],
  });

  lb.define("pl+spitbol", {
    name: "SPITBOL",
    websites: [{ kind: "wikipedia", title: "SPITBOL", href: "https://en.wikipedia.org/wiki/SPITBOL" }],
  });

  lb.define(
    "pl+squirrel",
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
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+scripting"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+starlogo",
    {
      name: "StarLogo",
      websites: [{ kind: "wikipedia", title: "StarLogo", href: "https://en.wikipedia.org/wiki/StarLogo" }],
      releases: [{ version: "2.1", date: "2018-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c", "pl+java"],
      influences: ["pl+logo"],
      people: ["person+media-lab", "person+mitchel-resnick"],
      paradigms: ["para+agent", "para+educational", "para+imperative", "para+multi", "para+simulation"],
      platforms: ["platf+jvm", "platf+mac", "platf+win"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+stata",
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
    { name: "STOIC", websites: [{ kind: "wikipedia", title: "STOIC", href: "https://en.wikipedia.org/wiki/STOIC" }] },
    {
      influences: ["pl+forth", "pl+reverse-polish-notation"],
      people: ["person+jonathan-sachs"],
      paradigms: ["para+concatenative", "para+imperative", "para+stack"],
      platforms: ["platf+openvms"],
    },
  );

  lb.define(
    "pl+strand",
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
    {
      name: "Strongtalk",
      websites: [{ kind: "wikipedia", title: "Strongtalk", href: "https://en.wikipedia.org/wiki/Strongtalk" }],
      releases: [{ version: "2.0", date: "2006-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+smalltalk"],
      influences: ["pl+self", "pl+smalltalk"],
      people: ["person+gilad-bracha"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform", "platf+ia-32"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+subl",
    { name: "SubL", websites: [{ kind: "wikipedia", title: "SubL", href: "https://en.wikipedia.org/wiki/SubL" }] },
    { influences: ["pl+armed-bear-common-lisp", "pl+common-lisp"] },
  );

  lb.define(
    "pl+superplan",
    {
      name: "Superplan",
      websites: [{ kind: "wikipedia", title: "Superplan", href: "https://en.wikipedia.org/wiki/Superplan" }],
    },
    { influences: ["pl+plankalkul"], people: ["person+heinz-rutishauser"] },
  );

  lb.define(
    "pl+supertalk",
    {
      name: "SuperTalk",
      websites: [{ kind: "wikipedia", title: "SuperTalk", href: "https://en.wikipedia.org/wiki/SuperTalk" }],
    },
    { influences: ["pl+hypertalk", "pl+xtalk"] },
  );

  lb.define(
    "pl+sympl",
    { name: "SYMPL", websites: [{ kind: "wikipedia", title: "SYMPL", href: "https://en.wikipedia.org/wiki/SYMPL" }] },
    { influences: ["pl+jovial"] },
  );

  lb.define(
    "pl+tads",
    {
      name: "TADS",
      websites: [{ kind: "wikipedia", title: "TADS", href: "https://en.wikipedia.org/wiki/TADS" }],
      releases: [{ version: "3.1.3", date: "2013-01-01", kind: "stable" }],
    },
    {
      paradigms: ["para+domain", "para+prototypes"],
      platforms: ["platf+amiga", "platf+dos", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+strong"],
    },
  );

  lb.define("pl+tail-call", {
    name: "properly tail recursive",
    websites: [
      { kind: "wikipedia", title: "properly tail recursive", href: "https://en.wikipedia.org/wiki/Tail_call" },
    ],
  });

  lb.define(
    "pl+telcomp",
    {
      name: "TELCOMP",
      websites: [{ kind: "wikipedia", title: "TELCOMP", href: "https://en.wikipedia.org/wiki/TELCOMP" }],
    },
    { influences: ["pl+joss"] },
  );

  lb.define(
    "pl+tex",
    {
      name: "TeX",
      websites: [{ kind: "wikipedia", title: "TeX", href: "https://en.wikipedia.org/wiki/TeX" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/68/TeX_logo.svg" }],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
      extensions: [".tex"],
    },
    { people: ["person+donald-knuth"], licenses: ["lic+permissive-free"] },
  );

  lb.define(
    "pl+threading-building-blocks",
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
      dialects: ["pl+pdp-11", "pl+pdp-7"],
      influences: ["pl+algol", "pl+b", "pl+pl-slash", "pl+snobol"],
      people: ["person+douglas-mcilroy"],
    },
  );

  lb.define(
    "pl+transaction-application",
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
    { licenses: ["lic+commercial", "lic+proprietary"], platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+transcript",
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
      licenses: ["lic+gpl", "lic+proprietary"],
      paradigms: ["para+objects"],
      platforms: ["platf+linux", "platf+mac", "platf+rpi", "platf+unix", "platf+win"],
    },
  );

  lb.define("pl+trueimage", {
    name: "TrueImage",
    websites: [{ kind: "wikipedia", title: "TrueImage", href: "https://en.wikipedia.org/wiki/TrueImage" }],
  });

  lb.define(
    "pl+ttm",
    {
      name: "TTM",
      websites: [{ kind: "wikipedia", title: "TTM", href: "https://en.wikipedia.org/wiki/TTM_(programming_language)" }],
      releases: [{ version: "1.0", kind: "stable" }],
    },
    { influences: ["pl+trac"], licenses: ["lic+mit"], paradigms: ["para+macros"] },
  );

  lb.define(
    "pl+turtlestitch",
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
      influences: ["pl+logo", "pl+maker-culture", "pl+scratch", "pl+snap-"],
      licenses: ["lic+affero-gpl"],
      paradigms: ["para+educational", "para+event", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+tutor",
    { name: "TUTOR", websites: [{ kind: "wikipedia", title: "TUTOR", href: "https://en.wikipedia.org/wiki/TUTOR" }] },
    { paradigms: ["para+imperative"] },
  );

  lb.define("pl+tweak", {
    name: "Tweak",
    websites: [
      { kind: "wikipedia", title: "Tweak", href: "https://en.wikipedia.org/wiki/Tweak_(programming_environment)" },
    ],
  });

  lb.define("pl+tynker", {
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
      people: ["person+brian-harvey"],
      licenses: ["lic+gpl"],
      paradigms: ["para+educational", "para+functional", "para+imperative", "para+multi", "para+reflection"],
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+uefn", {
    name: "UEFN",
    websites: [{ kind: "wikipedia", title: "UEFN", href: "https://en.wikipedia.org/wiki/UEFN" }],
  });

  lb.define("pl+uml", {
    name: "UML",
    websites: [{ kind: "wikipedia", title: "UML", href: "https://en.wikipedia.org/wiki/Unified_Modeling_Language" }],
  });

  lb.define(
    "pl+unicon",
    {
      name: "Unicon",
      websites: [
        { kind: "wikipedia", title: "Unicon", href: "https://en.wikipedia.org/wiki/Unicon_(programming_language)" },
      ],
    },
    {
      influences: ["pl+icon"],
      licenses: ["lic+gpl"],
      paradigms: ["para+imperative", "para+objects"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+win"],
    },
  );

  lb.define(
    "pl+uniface",
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
    {
      name: "Unified Parallel C (UPC)",
      websites: [
        { kind: "wikipedia", title: "Unified Parallel C", href: "https://en.wikipedia.org/wiki/Unified_Parallel_C" },
      ],
      releases: [{ version: "2022.10.0", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+split-c"],
      paradigms: ["para+imperative", "para+message", "para+parallel", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  lb.define("pl+univac-1108", {
    name: "UNIVAC 1108",
    websites: [{ kind: "wikipedia", title: "UNIVAC 1108", href: "https://en.wikipedia.org/wiki/UNIVAC_1108" }],
  });

  lb.define("pl+unix-shell", {
    name: "Unix shell",
    websites: [{ kind: "wikipedia", title: "Unix shell", href: "https://en.wikipedia.org/wiki/Unix_shell" }],
  });

  lb.define(
    "pl+urbiscript",
    {
      name: "urbiscript",
      websites: [{ kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" }],
      releases: [{ version: "2.7.4", date: "2011-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp", "pl+io", "pl+self"],
      people: ["person+jean-christophe-baillie"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic"],
    },
  );

  lb.define("pl+v8", {
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  lb.define(
    "pl+vax",
    { name: "VAX", websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }] },
    { influences: ["pl+multilisp"] },
  );

  lb.define("pl+vhdl-ams", {
    name: "VHDL-AMS",
    websites: [{ kind: "wikipedia", title: "VHDL-AMS", href: "https://en.wikipedia.org/wiki/VHDL-AMS" }],
  });

  lb.define("pl+virtuoso-universal-server", {
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

  lb.define("pl+visual-eiffel", {
    name: "Visual Eiffel",
    websites: [{ kind: "wikipedia", title: "Visual Eiffel", href: "https://en.wikipedia.org/wiki/Visual_Eiffel" }],
  });

  lb.define(
    "pl+visual-foxpro",
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
    {
      name: "Visual J#",
      websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/Visual_J_Sharp" }],
    },
    {
      influences: ["pl+java", "pl+visual-jpp"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+.net"],
    },
  );

  lb.define("pl+visual-jpp", {
    name: "Visual J++",
    websites: [{ kind: "wikipedia", title: "J++", href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B" }],
  });

  lb.define(
    "pl+visual-prolog",
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
        "para+concurrent",
        "para+dec",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+logic",
        "para+multi",
        "para+objects",
      ],
      platforms: ["platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+visual-studio-code", {
    name: "Visual Studio Code",
    websites: [
      { kind: "wikipedia", title: "Visual Studio Code", href: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    ],
  });

  lb.define(
    "pl+visualworks",
    {
      name: "VisualWorks",
      websites: [{ kind: "wikipedia", title: "VisualWorks", href: "https://en.wikipedia.org/wiki/VisualWorks" }],
    },
    {
      influences: ["pl+lisp", "pl+logo", "pl+simula", "pl+sketchpad"],
      people: ["person+adele-goldberg", "person+alan-kay", "person+dan-ingalls"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+vp-info",
    {
      name: "VP-Info",
      websites: [{ kind: "wikipedia", title: "VP-Info", href: "https://en.wikipedia.org/wiki/VP-Info" }],
    },
    { influences: ["pl+dbase"] },
  );

  lb.define(
    "pl+vue.js",
    {
      name: "Vue",
      websites: [{ kind: "wikipedia", title: "Vue", href: "https://en.wikipedia.org/wiki/Vue.js#Official_libraries" }],
    },
    { influences: ["pl+elm"] },
  );

  lb.define("pl+watbol", {
    name: "WATBOL",
    websites: [{ kind: "wikipedia", title: "WATBOL", href: "https://en.wikipedia.org/wiki/WATBOL" }],
  });

  lb.define(
    "pl+watcom-c-compiler",
    {
      name: "Open Watcom C/C++",
      websites: [{ kind: "wikipedia", title: "Open Watcom", href: "https://en.wikipedia.org/wiki/Watcom_C_compiler" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Watcom_logo.png" }],
      releases: [
        { version: "1.9", date: "2010-01-01", kind: "stable" },
        { version: "2.0", date: "2022-01-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+sybase-open-watcom-public"], platforms: ["platf+ia-32", "platf+x86", "platf+x86-64"] },
  );

  lb.define(
    "pl+web",
    {
      name: "WEB",
      websites: [{ kind: "wikipedia", title: "CWEB", href: "https://en.wikipedia.org/wiki/WEB" }],
      releases: [{ version: "3.67", date: "2006-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+tex", "pl+web"],
      people: ["person+donald-knuth"],
      licenses: ["lic+free"],
      paradigms: ["para+imperative", "para+literate", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+wolfram",
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
      people: ["person+stephen-wolfram"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+imperative", "para+multi", "para+term"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+wolfram-mathematica",
    {
      name: "Wolfram Mathematica",
      websites: [
        { kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+linux", "platf+mac", "platf+rpi", "platf+win"] },
  );

  lb.define("pl+x-slashopen", {
    name: "X/Open",
    websites: [{ kind: "wikipedia", title: "X/Open", href: "https://en.wikipedia.org/wiki/X/Open" }],
  });

  lb.define(
    "pl+x10",
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
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+x86", {
    name: "x86",
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  lb.define(
    "pl+xalan",
    {
      name: "Xalan",
      websites: [{ kind: "wikipedia", title: "Apache Xalan", href: "https://en.wikipedia.org/wiki/Xalan" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Apache_Xalan_logo.svg" }],
      releases: [{ version: "2.7.3", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define("pl+xbase", {
    name: "xBase",
    websites: [{ kind: "wikipedia", title: "xBase", href: "https://en.wikipedia.org/wiki/XBase" }],
  });

  lb.define(
    "pl+xcos",
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
    { people: ["person+dassault-systemes"], licenses: ["lic+cecill", "lic+gpl-2"] },
  );

  lb.define("pl+xedit", {
    name: "KEXX",
    websites: [{ kind: "wikipedia", title: "KEXX", href: "https://en.wikipedia.org/wiki/XEDIT#KEXX" }],
  });

  lb.define(
    "pl+xharbour",
    {
      name: "xHarbour",
      websites: [{ kind: "wikipedia", title: "xHarbour", href: "https://en.wikipedia.org/wiki/XHarbour" }],
    },
    { influences: ["pl+harbour"] },
  );

  lb.define("pl+xpl", {
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  lb.define(
    "pl+xtalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
    },
    { influences: ["pl+pascal"], paradigms: ["para+event", "para+imperative"] },
  );

  lb.define(
    "pl+yacc",
    { name: "Yacc", websites: [{ kind: "wikipedia", title: "Yacc", href: "https://en.wikipedia.org/wiki/Yacc" }] },
    { influences: ["pl+tmg"], licenses: ["lic+mit"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+yamazaki-mazak-corporation", {
    name: "Mazak",
    websites: [{ kind: "wikipedia", title: "Mazak", href: "https://en.wikipedia.org/wiki/Yamazaki_Mazak_Corporation" }],
  });

  lb.define(
    "pl+yap",
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
    {
      name: "YARV",
      websites: [{ kind: "wikipedia", title: "YARV", href: "https://en.wikipedia.org/wiki/YARV" }],
      releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
    },
    { people: ["person+koichi-sasada"], licenses: ["lic+ruby"] },
  );

  lb.define("pl+yhc", {
    name: "Yhc",
    websites: [{ kind: "wikipedia", title: "Yhc", href: "https://en.wikipedia.org/wiki/Yhc" }],
  });

  lb.define(
    "pl+yorick",
    {
      name: "Yorick",
      websites: [
        { kind: "wikipedia", title: "Yorick", href: "https://en.wikipedia.org/wiki/Yorick_(programming_language)" },
      ],
      releases: [{ version: "2.2.04", date: "2015-01-01", kind: "stable" }],
    },
    { people: ["person+david-h-munro"], licenses: ["lic+bsd-s"], platforms: ["platf+mac", "platf+unix", "platf+win"] },
  );

  lb.define(
    "pl+z-machine",
    { name: "ZIL", websites: [{ kind: "wikipedia", title: "ZIL", href: "https://en.wikipedia.org/wiki/Z-machine" }] },
    { influences: ["pl+mdl"] },
  );

  lb.define("pl+z-notation", {
    name: "Z",
    websites: [{ kind: "wikipedia", title: "Z", href: "https://en.wikipedia.org/wiki/Z_notation" }],
  });

  lb.define(
    "pl+zend-engine",
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
    { licenses: ["lic+php", "lic+zend"] },
  );

  lb.define(
    "pl+zonnon",
    {
      name: "Zonnon",
      websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
    },
    {
      influences: ["pl+modula", "pl+oberon", "pl+oberon-2", "pl+pascal"],
      people: ["person+jurg-gutknecht"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );
}
