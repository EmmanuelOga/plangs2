import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+.net", "CLI", {
    name: "CLI",
    websites: [
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
    ],
  });

  lb.define("pl+.ql", ".QL", {
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  lb.define(
    "pl+a-",
    "A♯",
    {
      name: "A♯",
      websites: [
        { kind: "wikipedia", title: "A#", href: "https://en.wikipedia.org/wiki/A%E2%99%AF_(Axiom)" },
        { kind: "homepage", title: "axiom-developer.org", href: "http://axiom-developer.org" },
      ],
      releases: [
        { version: "unknown", date: "1971-01-01", kind: "first" },
        { version: "unknown", date: "2008-01-01", kind: "stable" },
        { version: "unknown", date: "2014-07-31", kind: "preview" },
      ],
      extensions: [".as"],
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
    "pl+abap",
    "ABAP/4",
    {
      name: "ABAP/4",
      websites: [
        { kind: "wikipedia", title: "ABAP/4", href: "https://en.wikipedia.org/wiki/ABAP" },
        { kind: "homepage", title: "community.sap.com/topics/abap", href: "https://community.sap.com/topics/abap" },
      ],
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "7.58", date: "2023-10-26", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" },
        { kind: "homepage", title: "homepages.cwi.nl/~steven/abc/", href: "https://homepages.cwi.nl/~steven/abc/" },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "1.05.02", date: "1990-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+setl", "pl+algol"],
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
      releases: [{ version: "unknown", date: "1983-01-01", kind: "first" }],
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
    "Actors",
    {
      name: "Actors",
      websites: [{ kind: "wikipedia", title: "actor model", href: "https://en.wikipedia.org/wiki/Actor_model" }],
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
      websites: [
        { kind: "wikipedia", title: "Adobe AIR", href: "https://en.wikipedia.org/wiki/Adobe_AIR" },
        { kind: "homepage", title: "airsdk.harman.com", href: "https://airsdk.harman.com/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Adobe_AIR_logo.svg" }],
      releases: [
        { version: "unknown", date: "2008-02-25", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "51.0.1.3", date: "2024-06-10", kind: "stable" },
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
      websites: [
        { kind: "wikipedia", title: "AgentCubes", href: "https://en.wikipedia.org/wiki/AgentCubes" },
        { kind: "homepage", title: "agentsheets.com", href: "http://agentsheets.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AgentCubes_user_interface.png/121px-AgentCubes_user_interface.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "3.0", date: "2020-03-18", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "AgentSheets", href: "https://en.wikipedia.org/wiki/AgentSheets" },
        { kind: "homepage", title: "www.agentsheets.com", href: "http://www.agentsheets.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Agentsheets_IDE.jpg" }],
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "4.0", date: "2014-05-19", kind: "stable" },
      ],
    },
    {
      influences: ["pl+lisp", "pl+logo", "pl+smalltalk", "pl+objectlogo", "pl+karel"],
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
      releases: [{ version: "unknown", date: "1959-01-01", kind: "first" }],
    },
    { influences: ["pl+flow-matic", "pl+comtran"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+aimms",
    "AIMMS",
    {
      name: "AIMMS",
      websites: [
        { kind: "wikipedia", title: "AIMMS", href: "https://en.wikipedia.org/wiki/AIMMS" },
        { kind: "homepage", title: "AIMMS home page", href: "http://www.aimms.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/AIMMS_logo.png/121px-AIMMS_logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    { people: ["person+johannes-j-bisschop", "person+marcel-roelofs"] },
  );

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
      websites: [
        { kind: "wikipedia", title: "Aldor", href: "https://en.wikipedia.org/wiki/Aldor" },
        { kind: "homepage", title: "aldor.org", href: "https://aldor.org" },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "1.0.3", kind: "stable" },
        { version: "1.1.0", kind: "preview" },
      ],
      extensions: [".al", ".as"],
    },
    {
      implementations: ["pl+axiom"],
      influences: ["pl+a-", "pl+pascal", "pl+haskell"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative", "para+dependent", "para+logic"],
      people: [
        "person+richard-dimick-jenks",
        "person+barry-trager",
        "person+stephen-watt",
        "person+james-davenport",
        "person+robert-sutor",
        "person+scott-morrison",
      ],
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
      releases: [{ version: "unknown", date: "1992-01-01", kind: "first" }],
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
        {
          kind: "homepage",
          title: "www.informatik.uni-kiel.de/~mh/systems/ALF",
          href: "http://www.informatik.uni-kiel.de/~mh/systems/ALF",
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
        { kind: "homepage", title: "www.ps.uni-saarland.de/alice", href: "http://www.ps.uni-saarland.de/alice" },
      ],
      releases: [
        { version: "unknown", date: "2000-06-16", kind: "first" },
        { version: "1.4", date: "2007-05-03", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "Alma-0", href: "https://en.wikipedia.org/wiki/Alma-0" },
        { kind: "homepage", title: "www.cwi.nl/en/alma", href: "http://www.cwi.nl/en/alma" },
      ],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "first" }],
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
      websites: [
        { kind: "wikipedia", title: "AmbientTalk", href: "https://en.wikipedia.org/wiki/AmbientTalk" },
        { kind: "homepage", title: "soft.vub.ac.be/amop", href: "https://soft.vub.ac.be/amop" },
      ],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "2.19", date: "2011-01-01", kind: "stable" },
      ],
      extensions: [".at"],
    },
    {
      influences: ["pl+smalltalk", "pl+self", "pl+scheme", "pl+e", "pl+actor-based-concurrent"],
      paradigms: ["para+objects", "para+prototypes", "para+concurrent", "para+event", "para+reflection"],
      people: ["person+tom-van-cutsem", "person+jessie-dedecker", "person+wolfgang-de-meuter"],
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
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "unknown", date: "2310-01-01", kind: "stable" },
      ],
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
        {
          kind: "homepage",
          title: "aminet.net/package/dev/e/amigae33a",
          href: "https://aminet.net/package/dev/e/amigae33a",
        },
      ],
      releases: [{ version: "unknown", date: "1993-09-29", kind: "first" }],
      extensions: [".e"],
    },
    {
      influences: ["pl+ada", "pl+cpp", "pl+lisp"],
      licenses: ["lic+freeware"],
      paradigms: ["para+multi", "para+functional", "para+objects", "para+imperative"],
      people: ["person+wouter-van-oortmerssen"],
      platforms: ["platf+amiga"],
    },
  );

  lb.define(
    "pl+ampl",
    "AMPL",
    {
      name: "AMPL",
      websites: [
        { kind: "wikipedia", title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL" },
        { kind: "homepage", title: "www.ampl.com", href: "http://www.ampl.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/b6/AMPL_%28textbook_cover%29.jpg" }],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "unknown", date: "2023-04-30", kind: "stable" },
      ],
      extensions: [".mod", ".dat", ".run"],
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
      websites: [
        { kind: "wikipedia", title: "A+", href: "https://en.wikipedia.org/wiki/A%2B_(programming_language)" },
        { kind: "homepage", title: "www.aplusdev.org", href: "http://www.aplusdev.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Aplus_logo.jpg/121px-Aplus_logo.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "4.22", date: "2008-03-27", kind: "stable" },
      ],
      extensions: [".+", ".a", ".m"],
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
      websites: [
        { kind: "wikipedia", title: "Apache Flex", href: "https://en.wikipedia.org/wiki/Apache_Flex" },
        { kind: "homepage", title: "Apache Flex", href: "https://flex.apache.org/" },
        { kind: "homepage", title: "Adobe Flex", href: "http://www.adobe.com/products/flex.html" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Apache_Flex_logo.svg" }],
      releases: [
        { version: "unknown", date: "2004-06-20", kind: "first" },
        { version: "4.16.1", date: "2017-11-23", kind: "stable" },
      ],
    },
    { licenses: ["lic+apache", "lic+mozilla-public"] },
  );

  lb.define(
    "pl+apache-pig",
    "Apache Pig",
    {
      name: "Apache Pig",
      websites: [
        { kind: "wikipedia", title: "Apache Pig", href: "https://en.wikipedia.org/wiki/Apache_Pig" },
        { kind: "homepage", title: "pig.apache.org", href: "https://pig.apache.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Apache_Pig_Logo.svg" }],
      releases: [
        { version: "unknown", date: "2008-09-11", kind: "first" },
        { version: "0.17.0", date: "2017-06-19", kind: "stable" },
      ],
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
        { kind: "homepage", title: "appinventor.mit.edu", href: "http://appinventor.mit.edu" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/App_Inventor_2.png/220px-App_Inventor_2.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2010-12-15", kind: "first" },
        { version: "unknown", date: "2023-09-14", kind: "stable" },
      ],
    },
    { licenses: ["lic+cc", "lic+apache"] },
  );

  lb.define(
    "pl+applescript",
    "AppleScript",
    {
      name: "AppleScript",
      websites: [
        { kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" },
        {
          kind: "homepage",
          title: "developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide",
          href: "https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "2.8", date: "2014-10-16", kind: "stable" },
      ],
      extensions: [".scpt", ".scptd"],
    },
    {
      influences: ["pl+hypertalk", "pl+smalltalk"],
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
      releases: [{ version: "unknown", date: "1956-01-01", kind: "first" }],
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
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2013-03-21", kind: "first" },
      ],
    },
    { influences: ["pl+javascript"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+asp.net",
    "ASP.NET (software)",
    {
      name: "ASP.NET (software)",
      websites: [
        { kind: "wikipedia", title: "ASP.NET (software)", href: "https://en.wikipedia.org/wiki/ASP.NET" },
        {
          kind: "homepage",
          title: "dotnet.microsoft.com/en-us/apps/aspnet",
          href: "https://dotnet.microsoft.com/en-us/apps/aspnet",
        },
      ],
      releases: [
        { version: "unknown", date: "2002-01-05", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "4.8.1", date: "2022-08-09", kind: "stable" },
      ],
      extensions: [".aspx"],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+.net"] },
  );

  lb.define(
    "pl+atlas-autocode",
    "Atlas Autocode",
    {
      name: "Atlas Autocode",
      websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
      releases: [{ version: "unknown", date: "1963-01-01", kind: "first" }],
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
      websites: [
        { kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" },
        { kind: "homepage", title: "www.ats-lang.org", href: "http://www.ats-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "0.4.2", date: "2020-11-14", kind: "stable" },
      ],
      extensions: [".sats", ".dats", ".hats"],
    },
    {
      influences: ["pl+ocaml", "pl+dependent-ml", "pl+ml", "pl+cpp"],
      licenses: ["lic+gpl"],
      paradigms: [
        "para+multi",
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+concurrent",
        "para+modular",
      ],
      people: ["person+hongwei-xi"],
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
      websites: [
        { kind: "wikipedia", title: "AutoIt", href: "https://en.wikipedia.org/wiki/AutoIt" },
        { kind: "homepage", title: "www.autoitscript.com", href: "https://www.autoitscript.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Autoitlogo.png/121px-Autoitlogo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "3.3.16.1", date: "2022-09-19", kind: "stable" },
        { version: "3.3.16.1", date: "2022-06-09", kind: "preview" },
      ],
      extensions: [".au3"],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+freeware"],
      paradigms: ["para+imperative", "para+functional", "para+reflective"],
      people: ["person+jonathan-bennett"],
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
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "unknown", date: "1985-01-01", kind: "stable" },
      ],
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
    "Axiom computer algebra system",
    {
      name: "Axiom computer algebra system",
      websites: [
        { kind: "wikipedia", title: "Axiom", href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)" },
        { kind: "homepage", title: "www.axiom-developer.org", href: "http://www.axiom-developer.org" },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2015-11-13", kind: "stable" },
        { version: "unknown", date: "2022-02-06", kind: "preview" },
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
      releases: [
        { version: "unknown", date: "2009-01-01", kind: "first" },
        { version: "unknown", date: "2009-05-08", kind: "stable" },
      ],
    },
    { licenses: ["lic+closed-source"], platforms: ["platf+x86", "platf+x86-64", "platf+win"] },
  );

  lb.define(
    "pl+b",
    "B",
    {
      name: "B",
      websites: [{ kind: "wikipedia", title: "B", href: "https://en.wikipedia.org/wiki/B_(programming_language)" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1969-01-01", kind: "first" },
      ],
      extensions: [".b"],
    },
    { influences: ["pl+bcpl", "pl+tmg", "pl+pl-slash"], people: ["person+ken-thompson", "person+dennis-ritchie"] },
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
      releases: [{ version: "unknown", date: "1975-01-01", kind: "first" }],
    },
    { people: ["person+robert-morris", "person+lorinda-cherry"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+bcpl",
    "BCPL",
    {
      name: "BCPL",
      websites: [{ kind: "wikipedia", title: "BCPL", href: "https://en.wikipedia.org/wiki/BCPL" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1967-01-01", kind: "first" },
      ],
    },
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
      websites: [
        { kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" },
        { kind: "repository", title: "github.com/beanshell/beanshell", href: "https://github.com/beanshell/beanshell" },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.1.1", date: "2022-01-01", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "Befunge", href: "https://en.wikipedia.org/wiki/Befunge" },
        { kind: "homepage", title: "catseye.tc/node/Befunge-93.html", href: "http://catseye.tc/node/Befunge-93.html" },
      ],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    { influences: ["pl+forth", "pl+esoteric"], people: ["person+chris-pressey"] },
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
        { kind: "homepage", title: "beta.cs.au.dk", href: "http://beta.cs.au.dk" },
      ],
    },
    {
      influences: ["pl+simula", "pl+simula-67"],
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
    {
      name: "BLISS",
      websites: [
        { kind: "wikipedia", title: "BLISS", href: "https://en.wikipedia.org/wiki/BLISS" },
        {
          kind: "homepage",
          title: "pdp-10.trailing-edge.com/bb-m836d-bm/",
          href: "http://pdp-10.trailing-edge.com/bb-m836d-bm/",
        },
      ],
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+structured", "para+imperative"],
      people: ["person+w-a-wulf", "person+a-n-habermann"],
      platforms: ["platf+dec", "platf+mips", "platf+ia-32", "platf+ia-64", "platf+x86-64", "platf+cross-platform"],
    },
  );

  lb.define(
    "pl+boo",
    "Boo",
    {
      name: "Boo",
      websites: [
        { kind: "wikipedia", title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)" },
        { kind: "repository", title: "github.com/boo-lang", href: "https://github.com/boo-lang" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BooLogo.png" }],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "0.9.7", date: "2013-03-25", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c-sharp"],
      influences: ["pl+python", "pl+c-sharp"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects"],
      people: ["person+rodrigo-b-de-oliveira", "person+mason-wheeler"],
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
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    { influences: ["pl+basic", "pl+snobol", "pl+c"], people: ["person+richard-c-haight"], platforms: ["platf+unix"] },
  );

  lb.define("pl+burroughs-b5000", "Burroughs B5000", {
    name: "Burroughs B5000",
    websites: [{ kind: "wikipedia", title: "Burroughs B5000", href: "https://en.wikipedia.org/wiki/Burroughs_B5000" }],
  });

  lb.define(
    "pl+c-",
    "C--",
    {
      name: "C--",
      websites: [
        { kind: "wikipedia", title: "C--", href: "https://en.wikipedia.org/wiki/C--" },
        {
          kind: "homepage",
          title: "https://www.cs.tufts.edu/~nr/c--/index.html",
          href: "https://www.cs.tufts.edu/~nr/c--/index.html",
        },
      ],
      releases: [{ version: "unknown", date: "1998-01-01", kind: "first" }],
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
    { influences: ["pl+pascal"], paradigms: ["para+imperative"], people: ["person+michael-nielsen"] },
  );

  lb.define(
    "pl+c-star",
    "C*",
    {
      name: "C*",
      websites: [{ kind: "wikipedia", title: "C*", href: "https://en.wikipedia.org/wiki/C*" }],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "unknown", date: "1993-08-27", kind: "stable" },
      ],
      extensions: [".cs"],
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
      releases: [{ version: "unknown", date: "1997-01-01", kind: "first" }],
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
    { influences: ["pl+common-lisp"] },
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

  lb.define("pl+catia", "CATIA", {
    name: "CATIA",
    websites: [{ kind: "wikipedia", title: "CATIA", href: "https://en.wikipedia.org/wiki/CATIA" }],
  });

  lb.define(
    "pl+catrobat",
    "Catrobat",
    {
      name: "Catrobat",
      websites: [
        { kind: "wikipedia", title: "Catrobat", href: "https://en.wikipedia.org/wiki/Catrobat" },
        { kind: "homepage", title: "catrobat.org", href: "https://catrobat.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Catrobat_logo.png/121px-Catrobat_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "first" },
        { version: "1.11", kind: "stable" },
      ],
    },
    {
      influences: ["pl+scratch"],
      licenses: ["lic+gnu-affero-gpl"],
      people: ["person+wolfgang-slany"],
      platforms: ["platf+android", "platf+ios"],
      typeSystems: ["tsys+dynamic"],
    },
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
      releases: [{ version: "unknown", date: "1992-01-01", kind: "first" }],
    },
    { paradigms: ["para+objects"], people: ["person+craig-chambers"], typeSystems: ["tsys+dynamic"] },
  );

  lb.define(
    "pl+cedar",
    "Cedar",
    {
      name: "Cedar",
      websites: [
        { kind: "wikipedia", title: "Cedar", href: "https://en.wikipedia.org/wiki/Cedar_(programming_language)" },
      ],
    },
    { influences: ["pl+mesa"] },
  );

  lb.define(
    "pl+ceemac",
    "CEEMAC",
    {
      name: "CEEMAC",
      websites: [{ kind: "wikipedia", title: "CEEMAC", href: "https://en.wikipedia.org/wiki/CEEMAC" }],
    },
    { people: ["person+brooke-boering", "person+vagabondo-enterprises"] },
  );

  lb.define(
    "pl+cg",
    "Cg/HLSL",
    {
      name: "Cg/HLSL",
      websites: [
        { kind: "wikipedia", title: "Cg/HLSL", href: "https://en.wikipedia.org/wiki/Cg_(programming_language)" },
        { kind: "homepage", title: "developer.nvidia.com/cg-toolkit", href: "https://developer.nvidia.com/cg-toolkit" },
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
        { kind: "homepage", title: "www.softintegration.com", href: "http://www.softintegration.com" },
      ],
      releases: [
        { version: "unknown", date: "2001-10-01", kind: "first" },
        { version: "8.0.0", date: "2017-11-19", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "Charm", href: "https://en.wikipedia.org/wiki/Charm_(language)" },
        { kind: "homepage", title: "charm.qu-bit.co.uk", href: "http://charm.qu-bit.co.uk" },
      ],
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
    },
    {
      influences: ["pl+rtl-slash2", "pl+c", "pl+pascal"],
      paradigms: ["para+structured"],
      people: ["person+p-nowosad"],
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
      releases: [
        { version: "unknown", date: "1980-01-01", kind: "first" },
        { version: "3.0", date: "2003-01-01", kind: "stable" },
      ],
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

  lb.define("pl+cilk", "Cilk", {
    name: "Cilk",
    websites: [{ kind: "wikipedia", title: "Cilk", href: "https://en.wikipedia.org/wiki/Cilk" }],
  });

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
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "first" },
        { version: "1.2", date: "2013-09-09", kind: "stable" },
      ],
      extensions: [],
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
        { kind: "homepage", title: "www.claire-language.com", href: "http://www.claire-language.com" },
      ],
      releases: [
        { version: "unknown", date: "1994-01-01", kind: "first" },
        { version: "3.3.46", date: "2009-02-17", kind: "stable" },
      ],
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
        { kind: "homepage", title: "www.softvelocity.com", href: "http://www.softvelocity.com" },
      ],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", date: "2018-01-01", kind: "stable" },
      ],
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
        { kind: "homepage", title: "clean.cs.ru.nl", href: "http://clean.cs.ru.nl" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Clean_3.0_%28programming_language%29_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "3.1", date: "2022-01-05", kind: "stable" },
      ],
      extensions: [".icl", ".dcl", ".abc"],
    },
    {
      influences: ["pl+miranda", "pl+iswim", "pl+haskell"],
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
        { kind: "homepage", title: "www.grafxsoft.com/clipper.htm", href: "http://www.grafxsoft.com/clipper.htm" },
        {
          kind: "homepage",
          title: "web.archive.org/web/20180616231447/http://www.grafxsoft.com/clipper.htm",
          href: "https://web.archive.org/web/20180616231447/http://www.grafxsoft.com/clipper.htm",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "5.3", date: "1997-05-20", kind: "stable" },
      ],
    },
    { influences: ["pl+dbase"], platforms: ["platf+dos"] },
  );

  lb.define(
    "pl+clips",
    "CLIPS",
    {
      name: "CLIPS",
      websites: [
        { kind: "wikipedia", title: "CLIPS", href: "https://en.wikipedia.org/wiki/CLIPS" },
        { kind: "wikipedia", title: "CLIPS", href: "https://en.wikipedia.org/wiki/CLIPS_(programming_language)" },
        { kind: "homepage", title: "https://clipsrules.net", href: "https://clipsrules.net" },
      ],
      releases: [{ version: "unknown", date: "1985-01-01", kind: "first" }],
    },
    { influences: ["pl+lisp"], paradigms: ["para+expert"] },
  );

  lb.define(
    "pl+clozure-cl",
    "Clozure CL",
    {
      name: "Clozure CL",
      websites: [
        { kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" },
        { kind: "homepage", title: "ccl.clozure.com", href: "http://ccl.clozure.com" },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "1.12.2", date: "2023-08-08", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+apache", "lic+lgpl"],
      people: ["person+clozure-associates"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+clu",
    "CLU",
    {
      name: "CLU",
      websites: [
        { kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" },
        { kind: "homepage", title: "pmg.csail.mit.edu/CLU.html", href: "http://pmg.csail.mit.edu/CLU.html" },
      ],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.5", date: "1989-05-26", kind: "stable" },
      ],
    },
    {
      influences: ["pl+lisp", "pl+simula-67", "pl+algol", "pl+simula", "pl+alphard"],
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
      releases: [{ version: "unknown", date: "1968-01-01", kind: "first" }],
    },
    { influences: ["pl+jovial", "pl+fortran", "pl+pl-slash"], paradigms: ["para+imperative"] },
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
      websites: [
        { kind: "wikipedia", title: "CMUCL", href: "https://en.wikipedia.org/wiki/CMUCL" },
        { kind: "homepage", title: "cmucl.org", href: "http://cmucl.org" },
      ],
      releases: [
        { version: "unknown", date: "1980-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2023-05-14", kind: "stable" },
      ],
    },
    { licenses: ["lic+public-domain"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+cobra",
    "Cobra",
    {
      name: "Cobra",
      websites: [
        { kind: "wikipedia", title: "Cobra", href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)" },
        { kind: "homepage", title: "cobra-language.com", href: "http://cobra-language.com/" },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "first" }],
      extensions: [".cobra"],
    },
    {
      influences: ["pl+python", "pl+eiffel", "pl+c-sharp", "pl+objective-c"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects"],
      people: ["person+charles-esterbrook", "person+cobra-language-llc"],
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
    websites: [
      { kind: "wikipedia", title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion" },
      {
        kind: "homepage",
        title: "adobe.com/products/coldfusion-family.html",
        href: "https://adobe.com/products/coldfusion-family.html",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adobe_ColdFusion_logo_2021.svg" },
    ],
    releases: [{ version: "unknown", date: "1995-01-01", kind: "first" }],
  });

  lb.define(
    "pl+comal",
    "COMAL",
    {
      name: "COMAL",
      websites: [{ kind: "wikipedia", title: "COMAL", href: "https://en.wikipedia.org/wiki/COMAL" }],
      releases: [{ version: "unknown", date: "1975-01-01", kind: "first" }],
    },
    {
      influences: ["pl+basic", "pl+pascal"],
      paradigms: ["para+structured"],
      people: ["person+b-rge-r-christensen", "person+benedict-l-fstedt"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define(
    "pl+combined",
    "CPL",
    {
      name: "CPL",
      websites: [
        { kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Combined_Programming_Language" },
      ],
      releases: [{ version: "unknown", date: "1963-01-01", kind: "first" }],
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
    {
      name: "COMIT",
      websites: [{ kind: "wikipedia", title: "COMIT", href: "https://en.wikipedia.org/wiki/COMIT" }],
      releases: [{ version: "unknown", date: "1957-01-01", kind: "first" }],
    },
    { people: ["person+victor-yngve"] },
  );

  lb.define("pl+communicating-sequential-processes", "CSP", {
    name: "CSP",
    websites: [
      {
        kind: "wikipedia",
        title: "communicating sequential processes",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
  });

  lb.define(
    "pl+comtran",
    "COMTRAN",
    {
      name: "COMTRAN",
      websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
      releases: [{ version: "unknown", date: "1957-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
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
        { kind: "homepage", title: "constraint-handling-rules.org", href: "http://constraint-handling-rules.org" },
      ],
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    { influences: ["pl+prolog"], paradigms: ["para+constraint", "para+dec"], people: ["person+thom-fruhwirth"] },
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
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" },
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" },
      ],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
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
      websites: [
        { kind: "wikipedia", title: "Core War", href: "https://en.wikipedia.org/wiki/Core_War" },
        { kind: "homepage", title: "www.corewars.org", href: "https://www.corewars.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Core_War_PMars_Screenshot.png/220px-Core_War_PMars_Screenshot.png",
        },
      ],
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1986-01-01", kind: "first" }],
    },
    { influences: ["pl+inform"] },
  );

  lb.define(
    "pl+cowsel",
    "COWSEL",
    {
      name: "COWSEL",
      websites: [{ kind: "wikipedia", title: "COWSEL", href: "https://en.wikipedia.org/wiki/COWSEL" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+lisp", "pl+cpl"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+structured", "para+reflective", "para+imperative"],
      people: ["person+robin-popplestone", "person+rod-burstall"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+cpl", "CPL", {
    name: "CPL",
    websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/CPL_(programming_language)" }],
  });

  lb.define(
    "pl+cpp11",
    "C++11",
    {
      name: "C++11",
      websites: [{ kind: "wikipedia", title: "C++11", href: "https://en.wikipedia.org/wiki/C%2B%2B11" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp14",
    "C++14",
    {
      name: "C++14",
      websites: [{ kind: "wikipedia", title: "C++14", href: "https://en.wikipedia.org/wiki/C%2B%2B14" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp17",
    "C++17",
    {
      name: "C++17",
      websites: [{ kind: "wikipedia", title: "C++17", href: "https://en.wikipedia.org/wiki/C%2B%2B17" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp20",
    "C++20",
    {
      name: "C++20",
      websites: [{ kind: "wikipedia", title: "C++20", href: "https://en.wikipedia.org/wiki/C%2B%2B20" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cppbuilder",
    "C++Builder",
    {
      name: "C++Builder",
      websites: [
        { kind: "wikipedia", title: "Embarcadero C++Builder", href: "https://en.wikipedia.org/wiki/C%2B%2BBuilder" },
        {
          kind: "homepage",
          title: "www.embarcadero.com/products/cbuilder",
          href: "https://www.embarcadero.com/products/cbuilder",
        },
      ],
      releases: [
        { version: "unknown", date: "1997-01-07", kind: "first" },
        { version: "12.1", date: "2024-04-04", kind: "stable" },
      ],
    },
    {
      influences: ["pl+delphi", "pl+cpp"],
      licenses: ["lic+trialware"],
      paradigms: ["para+objects", "para+functional", "para+strongly"],
      platforms: ["platf+x64", "platf+win"],
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
    { influences: ["pl+squeak", "pl+etoys"] },
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
        { kind: "homepage", title: "cuneiform-lang.org", href: "https://cuneiform-lang.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/G18225.png/121px-G18225.png" },
      ],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "3.0.4", date: "2018-11-19", kind: "stable" },
      ],
      extensions: [".cfl"],
    },
    {
      implementations: ["pl+erlang"],
      influences: ["pl+swift"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+scientific"],
      people: ["person+jorgen-brandt"],
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
        { kind: "homepage", title: "www.curl.com", href: "http://www.curl.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Curl_logo.gif" }],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "8.0.13", date: "2022-09-06", kind: "stable" },
      ],
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
        {
          kind: "homepage",
          title: "curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
          href: "http://curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
        },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "3.6.0", date: "2023-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+prolog", "pl+c", "pl+haskell"],
      influences: ["pl+haskell", "pl+prolog"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+logic"],
      people: ["person+michael-hanus", "person+sergio-antoy"],
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
        { kind: "homepage", title: "cyclone.thelanguage.org", href: "http://cyclone.thelanguage.org" },
      ],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "1.0", date: "2006-05-08", kind: "stable" },
      ],
    },
    { influences: ["pl+ml", "pl+c"] },
  );

  lb.define(
    "pl+dafny",
    "Dafny",
    {
      name: "Dafny",
      websites: [
        { kind: "wikipedia", title: "Dafny", href: "https://en.wikipedia.org/wiki/Dafny_(programming_language)" },
        { kind: "homepage", title: "dafny.org", href: "https://dafny.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dafny_logo.jpg/128px-Dafny_logo.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "2009-01-01", kind: "first" },
        { version: "3.7.2", date: "2022-07-14", kind: "stable" },
      ],
      extensions: [".dfy"],
    },
    {
      licenses: ["lic+mit"],
      paradigms: ["para+imperative", "para+functional"],
      people: ["person+k-rustan-m-leino"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );

  lb.define(
    "pl+darsimco",
    "DARSIMCO",
    {
      name: "DARSIMCO",
      websites: [{ kind: "wikipedia", title: "DARSIMCO", href: "https://en.wikipedia.org/wiki/DARSIMCO" }],
      releases: [{ version: "unknown", date: "1956-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
      extensions: [".drw"],
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
      websites: [
        { kind: "wikipedia", title: "DBase", href: "https://en.wikipedia.org/wiki/DBase" },
        { kind: "homepage", title: "www.dbase.com", href: "http://www.dbase.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DBaseLogo_BlackWithRed_glass_300.png/121px-DBaseLogo_BlackWithRed_glass_300.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "unknown", date: "2019-01-01", kind: "stable" },
      ],
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

  lb.define("pl+dec", "SRC", {
    name: "SRC",
    websites: [
      { kind: "wikipedia", title: "DEC", href: "https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" },
      { kind: "wikipedia", title: "SRC", href: "https://en.wikipedia.org/wiki/DEC_Systems_Research_Center" },
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
      releases: [
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "unknown", date: "1992-01-01", kind: "stable" },
      ],
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

  lb.define("pl+dis-virtual-machine", "Dis virtual machine", {
    name: "Dis virtual machine",
    websites: [
      { kind: "wikipedia", title: "Dis virtual machine", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" },
    ],
  });

  lb.define(
    "pl+draco",
    "Draco",
    {
      name: "Draco",
      websites: [
        { kind: "wikipedia", title: "Draco", href: "https://en.wikipedia.org/wiki/Draco_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
      extensions: [".d .g"],
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
      websites: [
        { kind: "wikipedia", title: "DRAKON", href: "https://en.wikipedia.org/wiki/DRAKON" },
        { kind: "homepage", title: "drakon.su/start", href: "https://drakon.su/start" },
      ],
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
    },
    { paradigms: ["para+visual"] },
  );

  lb.define(
    "pl+dsssl",
    "Document Style Semantics and Specification Language",
    {
      name: "Document Style Semantics and Specification Language",
      websites: [{ kind: "wikipedia", title: "DSSSL", href: "https://en.wikipedia.org/wiki/DSSSL" }],
    },
    { paradigms: ["para+style", "para+transformation"] },
  );

  lb.define(
    "pl+dymola",
    "Dymola",
    {
      name: "Dymola",
      websites: [
        { kind: "wikipedia", title: "Dymola", href: "https://en.wikipedia.org/wiki/Dymola" },
        { kind: "homepage", title: "Dymola", href: "http://www.3ds.com/products-services/catia/products/dymola" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "E", href: "https://en.wikipedia.org/wiki/E_(programming_language)" },
        { kind: "homepage", title: "erights.org", href: "http://erights.org" },
      ],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    {
      influences: ["pl+occam"],
      paradigms: ["para+concurrent", "para+csp"],
      people: ["person+steven-ericsson-zenith"],
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
        { kind: "homepage", title: "epl.eyuyan.com", href: "http://epl.eyuyan.com/" },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "5.95", date: "2023-09-04", kind: "stable" },
      ],
      extensions: [".e"],
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
        { kind: "homepage", title: "eclipseclp.org", href: "http://eclipseclp.org" },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "7.0", date: "2018-01-22", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+atlas-autocode"],
      influences: ["pl+algol", "pl+atlas-autocode"],
      paradigms: ["para+imperative", "para+structured"],
      people: [
        "person+m-m-barritt",
        "person+david-rees",
        "person+peter-d-schofield",
        "person+roderick-mcleod",
        "person+hamish-dewar",
        "person+peter-d-stephens",
        "person+peter-robertson",
      ],
      platforms: ["platf+x86", "platf+dos", "platf+win", "platf+linux"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+edison-design-group", "EDG", {
    name: "EDG",
    websites: [{ kind: "wikipedia", title: "EDG", href: "https://en.wikipedia.org/wiki/Edison_Design_Group" }],
  });

  lb.define(
    "pl+egl",
    "EGL(Enterprise Generation Language)",
    {
      name: "EGL(Enterprise Generation Language)",
      websites: [
        { kind: "wikipedia", title: "EGL", href: "https://en.wikipedia.org/wiki/EGL_(programming_language)" },
        { kind: "homepage", title: "www.eclipse.org/edt/", href: "http://www.eclipse.org/edt/" },
      ],
    },
    { influences: ["pl+cobol"], licenses: ["lic+eclipse-public"] },
  );

  lb.define("pl+eiffelstudio", "EiffelStudio", {
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  lb.define("pl+eispack", "EISPACK", {
    name: "EISPACK",
    websites: [{ kind: "wikipedia", title: "EISPACK", href: "https://en.wikipedia.org/wiki/EISPACK" }],
  });

  lb.define(
    "pl+elan",
    "Elan",
    {
      name: "Elan",
      websites: [
        { kind: "wikipedia", title: "Elan", href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)" },
        { kind: "homepage", title: "www.cs.ru.nl/elan", href: "http://www.cs.ru.nl/elan" },
      ],
      releases: [{ version: "unknown", date: "1974-01-01", kind: "first" }],
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
        {
          kind: "homepage",
          title: "www.emeraldprogramminglanguage.org",
          href: "http://www.emeraldprogramminglanguage.org",
        },
      ],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    {
      influences: ["pl+pascal", "pl+simula", "pl+smalltalk", "pl+simula-67"],
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
        {
          kind: "homepage",
          title: "web.archive.org/web/20120717070845/http://www.e-pig.org/darcs/Pig09/web/",
          href: "https://web.archive.org/web/20120717070845/http://www.e-pig.org/darcs/Pig09/web/",
        },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "unknown", date: "2006-10-11", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+squeak", "pl+morphic", "pl+tweak"],
      influences: [
        "pl+agentsheets",
        "pl+squeak",
        "pl+objectlogo",
        "pl+starlogo",
        "pl+ucblogo",
        "pl+logo",
        "pl+smalltalk",
        "pl+hypercard",
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
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1965-01-01", kind: "first" }],
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
          title: "Executive Systems Problem Oriented Language",
          href: "https://en.wikipedia.org/wiki/Executive_Systems_Problem_Oriented_Language",
        },
      ],
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
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
      releases: [{ version: "unknown", date: "1959-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
      scoping: ["lexical"],
      extensions: [".fjo", ".fjv", ".sma", ".ein"],
    },
    {
      paradigms: ["para+objects"],
      people: ["person+snorri-agnarsson"],
      platforms: ["platf+dos"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+fl",
    "FL",
    {
      name: "FL",
      websites: [{ kind: "wikipedia", title: "FL", href: "https://en.wikipedia.org/wiki/FL_(programming_language)" }],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1955-01-01", kind: "first" }],
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
      websites: [
        { kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" },
        { kind: "homepage", title: "flutter.dev", href: "https://flutter.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "0.0.6", date: "2017-05-12", kind: "first" },
        { version: "3.22.0", date: "2024-01-01", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1968-01-01", kind: "first" }],
    },
    { influences: ["pl+joss"], paradigms: ["para+imperative"], people: ["person+richard-merrill"] },
  );

  lb.define(
    "pl+fortress",
    "Fortress",
    {
      name: "Fortress",
      websites: [
        { kind: "wikipedia", title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)" },
        {
          kind: "repository",
          title: "github.com/stokito/fortress-lang",
          href: "https://github.com/stokito/fortress-lang",
        },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "first" }],
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
    { influences: ["pl+apl"] },
  );

  lb.define(
    "pl+fpgac",
    "FpgaC",
    {
      name: "FpgaC",
      websites: [
        { kind: "wikipedia", title: "FpgaC", href: "https://en.wikipedia.org/wiki/FpgaC" },
        { kind: "homepage", title: "sourceforge.net/projects/fpgac/", href: "http://sourceforge.net/projects/fpgac/" },
      ],
      releases: [
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "1.0", kind: "stable" },
      ],
    },
    { influences: ["pl+c"], people: ["person+john-bass"], platforms: ["platf+fpga"] },
  );

  lb.define(
    "pl+frama-c",
    "Frama-C",
    {
      name: "Frama-C",
      websites: [
        { kind: "wikipedia", title: "Frama-C", href: "https://en.wikipedia.org/wiki/Frama-C" },
        { kind: "homepage", title: "frama-c.com", href: "http://frama-c.com" },
      ],
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
      releases: [{ version: "unknown", date: "1963-01-01", kind: "first" }],
      extensions: [".gcode", ".mpt", ".mpf"],
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
    {
      name: "G95",
      websites: [
        { kind: "wikipedia", title: "G95", href: "https://en.wikipedia.org/wiki/G95" },
        { kind: "homepage", title: "g95.org", href: "http://g95.org" },
      ],
      releases: [{ version: "unknown", date: "2000-01-01", kind: "first" }],
    },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+game-maker",
    "GameMaker",
    {
      name: "GameMaker",
      websites: [
        { kind: "wikipedia", title: "GameMaker", href: "https://en.wikipedia.org/wiki/Game_Maker_Language" },
        { kind: "homepage", title: "gamemaker.io", href: "https://gamemaker.io" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4b/GameMaker_Logo.svg" }],
      releases: [
        { version: "unknown", date: "1999-11-15", kind: "first" },
        { version: "2024.4.1", date: "2024-05-21", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+proprietary"],
      platforms: [
        "platf+win",
        "platf+mac",
        "platf+linux",
        "platf+web",
        "platf+android",
        "platf+ios",
        "platf+amazon-firetv",
        "platf+playstation",
        "platf+xbox",
        "platf+nintendo-switch",
      ],
    },
  );

  lb.define(
    "pl+gcc",
    "GCC",
    {
      name: "GCC",
      websites: [
        {
          kind: "wikipedia",
          title: "GNU Compiler Collection",
          href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection",
        },
        { kind: "homepage", title: "gcc.gnu.org", href: "https://gcc.gnu.org" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/GNU_Compiler_Collection_logo.svg" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1987-03-22", kind: "first" },
        { version: "14.1", date: "2024-01-01", kind: "stable" },
      ],
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
        {
          kind: "homepage",
          title: "gemtalksystems.com/products/gss32",
          href: "http://gemtalksystems.com/products/gss32",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/GemStone-S_logo_and_wordmark.png/121px-GemStone-S_logo_and_wordmark.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "3.7.1", kind: "stable" },
      ],
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
    "Symbolics Common Lisp",
    {
      name: "Symbolics Common Lisp",
      websites: [
        { kind: "wikipedia", title: "Genera", href: "https://en.wikipedia.org/wiki/Genera_(operating_system)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Symbolics-document-examiner.png/300px-Symbolics-document-examiner.png",
        },
      ],
      releases: [{ version: "unknown", date: "1982-01-01", kind: "first" }],
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
        { kind: "homepage", title: "wiki.gnome.org/Projects/Genie", href: "https://wiki.gnome.org/Projects/Genie" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "0.52.3", date: "2021-05-01", kind: "stable" },
      ],
      extensions: [".gs"],
    },
    {
      influences: ["pl+pascal", "pl+python", "pl+boo", "pl+d"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+objects"],
      people: ["person+jamie-mccracken"],
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
        { kind: "repository", title: "gnudatalanguage.github.io", href: "https://gnudatalanguage.github.io/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/GNU_Data_Language_%28logo%29.png" },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.0.5", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl"], people: ["person+marc-schellens"] },
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
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "2.3.3", date: "1993-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+cpp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );

  lb.define("pl+gnu-m4", "GNU m4", {
    name: "GNU m4",
    websites: [{ kind: "wikipedia", title: "GNU m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }],
  });

  lb.define(
    "pl+go-",
    "Go!",
    {
      name: "Go!",
      websites: [{ kind: "wikipedia", title: "Go!", href: "https://en.wikipedia.org/wiki/Go!_(programming_language)" }],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "unknown", date: "2007-09-30", kind: "preview" },
      ],
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
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "1.5", date: "1995-08-11", kind: "stable" },
      ],
    },
    {
      paradigms: ["para+dec", "para+logic"],
      people: ["person+john-lloyd", "person+patricia-hill"],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+strong"],
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
        { kind: "homepage", title: "golo-lang.org", href: "http://golo-lang.org" },
      ],
      releases: [
        { version: "unknown", date: "2012-01-01", kind: "first" },
        { version: "3.4.0", date: "2021-10-20", kind: "stable" },
      ],
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
      { kind: "homepage", title: "script.google.com", href: "https://script.google.com" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" }],
    releases: [
      { version: "unknown", kind: "first" },
      { version: "unknown", date: "2009-08-19", kind: "first" },
    ],
  });

  lb.define("pl+google-native-client", "PNaCl", {
    name: "PNaCl",
    websites: [{ kind: "wikipedia", title: "PNaCl", href: "https://en.wikipedia.org/wiki/Google_Native_Client" }],
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
      releases: [{ version: "unknown", date: "1961-01-01", kind: "first" }],
      extensions: [".gps"],
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
    "pl+grass",
    "GRASS",
    {
      name: "GRASS",
      websites: [
        { kind: "wikipedia", title: "GRASS", href: "https://en.wikipedia.org/wiki/GRASS_(programming_language)" },
      ],
    },
    { influences: ["pl+basic"] },
  );

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
        { kind: "homepage", title: "hamiltonlabs.com/Cshell.htm", href: "https://hamiltonlabs.com/Cshell.htm" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hamilton_C_shell_x64_on_Windows_7.png/300px-Hamilton_C_shell_x64_on_Windows_7.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1988-12-12", kind: "first" },
        { version: "5.2", date: "2017-03-05", kind: "stable" },
      ],
    },
    { licenses: ["lic+commercial", "lic+proprietary"] },
  );

  lb.define(
    "pl+handel-c",
    "Handel-C",
    {
      name: "Handel-C",
      websites: [
        { kind: "wikipedia", title: "Handel-C", href: "https://en.wikipedia.org/wiki/Handel-C" },
        {
          kind: "homepage",
          title: "eda.sw.siemens.com/en-US/ic/precision/",
          href: "https://eda.sw.siemens.com/en-US/ic/precision/",
        },
      ],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "3.0", kind: "stable" },
      ],
      extensions: [".hcc", ".hch"],
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
      websites: [
        { kind: "wikipedia", title: "Harbour", href: "https://en.wikipedia.org/wiki/Harbour_(software)" },
        { kind: "repository", title: "harbour.github.io", href: "https://harbour.github.io/" },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "3.0.0", date: "2011-07-17", kind: "stable" },
      ],
      extensions: [".prg", ".ch", ".hb", ".hbp"],
    },
    {
      influences: ["pl+dbase"],
      licenses: ["lic+open-source"],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"],
      people: ["person+antonio-linares", "person+viktor-szakats"],
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
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "1.1.12", date: "2020-06-03", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM" },
        { kind: "homepage", title: "hhvm.com", href: "https://hhvm.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HHVM_logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2011-12-09", kind: "first" },
        { version: "3.15.0", date: "2016-01-01", kind: "stable" },
      ],
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
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "6.0", date: "2022-05-16", kind: "stable" },
      ],
    },
    { licenses: ["lic+proprietary"], people: ["person+andreas-falkenhahn"] },
  );

  lb.define(
    "pl+hop",
    "Hop",
    {
      name: "Hop",
      websites: [
        { kind: "wikipedia", title: "Hop", href: "https://en.wikipedia.org/wiki/Hop_(software)" },
        { kind: "homepage", title: "hop.inria.fr", href: "http://hop.inria.fr/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hop_logo.svg" }],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "2.4.2", date: "2013-09-23", kind: "stable" },
      ],
    },
    {
      influences: ["pl+scheme"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+multi"],
      people: ["person+manuel-serrano"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
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
      releases: [
        { version: "unknown", date: "2000-01-01", kind: "first" },
        { version: "0.8", date: "2008-04-25", kind: "stable" },
      ],
    },
    {
      influences: ["pl+haskell"],
      paradigms: ["para+functional"],
      people: ["person+greg-michaelson", "person+andrew-ireland", "person+andy-wallace"],
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
    releases: [
      { version: "unknown", kind: "first" },
      { version: "unknown", date: "1986-01-01", kind: "first" },
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
      releases: [
        { version: "unknown", date: "1959-01-01", kind: "first" },
        { version: "unknown", date: "2020-10-06", kind: "stable" },
      ],
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

  lb.define("pl+ibm-system-slash370", "S/370", {
    name: "S/370",
    websites: [{ kind: "wikipedia", title: "IBM System/370", href: "https://en.wikipedia.org/wiki/IBM_System/370" }],
  });

  lb.define(
    "pl+ibm-visualage",
    "VA Smalltalk",
    {
      name: "VA Smalltalk",
      websites: [
        { kind: "wikipedia", title: "VisualAge", href: "https://en.wikipedia.org/wiki/IBM_VisualAge" },
        {
          kind: "homepage",
          title: "www-01.ibm.com/software/awdtools/vacpp",
          href: "https://web.archive.org/web/20110915104218/http://www-01.ibm.com/software/awdtools/vacpp",
        },
      ],
      releases: [{ version: "unknown", date: "1993-10-12", kind: "first" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+ibm-xl-cpp",
    "XL C/C++ Compilers and Open XL C/C++ Compilers",
    {
      name: "XL C/C++ Compilers and Open XL C/C++ Compilers",
      websites: [
        { kind: "wikipedia", title: "IBM XL C++", href: "https://en.wikipedia.org/wiki/IBM_XL_C%2B%2B" },
        {
          kind: "homepage",
          title: "www.ibm.com/products/c-and-c-plus-plus-compiler-family",
          href: "https://www.ibm.com/products/c-and-c-plus-plus-compiler-family",
        },
      ],
      releases: [{ version: "17.1.1", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+icon",
    "Icon",
    {
      name: "Icon",
      websites: [
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_programming_language" },
        { kind: "homepage", title: "www.cs.arizona.edu/icon", href: "http://www.cs.arizona.edu/icon" },
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_Icon_logo_Mondadori.png/121px-Panorama_Icon_logo_Mondadori.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "9.5.24", date: "2024-01-17", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "IDL", href: "https://en.wikipedia.org/wiki/IDL_(programming_language)" },
        {
          kind: "homepage",
          title: "www.harrisgeospatial.com/Software-Technology/IDL",
          href: "https://www.harrisgeospatial.com/Software-Technology/IDL",
        },
      ],
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "9.0", date: "2023-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+gnu-data"],
      influences: ["pl+fortran"],
      paradigms: ["para+array"],
      people: ["person+david-stern"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+imp",
    "IMP",
    {
      name: "IMP",
      websites: [{ kind: "wikipedia", title: "IMP", href: "https://en.wikipedia.org/wiki/IMP_(programming_language)" }],
      releases: [
        { version: "unknown", date: "1965-01-01", kind: "first" },
        { version: "unknown", date: "1972-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+algol"],
      influences: ["pl+algol"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+imperative", "para+structured", "para+extensible"],
      people: ["person+edgar-t-irons", "person+national-security-agency"],
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
    "Information Processing Language (IPL)",
    {
      name: "Information Processing Language (IPL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Information Processing Language",
          href: "https://en.wikipedia.org/wiki/Information_Processing_Language",
        },
      ],
      releases: [{ version: "unknown", date: "1956-01-01", kind: "first" }],
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
      {
        kind: "homepage",
        title: "software.intel.com/en-us/articles/intel-array-building-blocks",
        href: "http://software.intel.com/en-us/articles/intel-array-building-blocks",
      },
    ],
    releases: [
      { version: "unknown", date: "2010-01-01", kind: "first" },
      { version: "1.0", date: "2011-01-01", kind: "preview" },
    ],
  });

  lb.define(
    "pl+intel-cpp-compiler",
    "Intel C",
    {
      name: "Intel C",
      websites: [
        {
          kind: "wikipedia",
          title: "Intel C++ Compiler",
          href: "https://en.wikipedia.org/wiki/Intel_C%2B%2B_Compiler",
        },
        {
          kind: "homepage",
          title: "software.intel.com/content/www/us/en/develop/tools/oneapi/components/dpc-compiler.html",
          href: "https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/dpc-compiler.html",
        },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2021.10.0", date: "2021-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+freeware", "lic+proprietary"] },
  );

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
        {
          kind: "homepage",
          title: "software.intel.com/en-us/articles/intel-parallel-building-blocks",
          href: "http://software.intel.com/en-us/articles/intel-parallel-building-blocks",
        },
      ],
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "first" },
        { version: "unknown", date: "2010-09-02", kind: "stable" },
      ],
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
    "pl+intlab",
    "INTLAB",
    {
      name: "INTLAB",
      websites: [{ kind: "wikipedia", title: "INTLAB", href: "https://en.wikipedia.org/wiki/INTLAB" }],
    },
    { influences: ["pl+matlab"] },
  );

  lb.define(
    "pl+isetl",
    "ISETL",
    { name: "ISETL", websites: [{ kind: "wikipedia", title: "ISETL", href: "https://en.wikipedia.org/wiki/ISETL" }] },
    { influences: ["pl+setl"] },
  );

  lb.define(
    "pl+iswim",
    "ISWIM",
    {
      name: "ISWIM",
      websites: [{ kind: "wikipedia", title: "ISWIM", href: "https://en.wikipedia.org/wiki/ISWIM" }],
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol", "pl+lisp"],
      paradigms: ["para+imperative", "para+functional"],
      people: ["person+peter-landin"],
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
          href: "https://en.wikipedia.org/wiki/Janus_(time-reversible_computing_programming_language)",
        },
        { kind: "homepage", title: "tetsuo.jp/ref/janus.html", href: "http://tetsuo.jp/ref/janus.html" },
      ],
      releases: [{ version: "unknown", date: "1982-01-01", kind: "first" }],
    },
    {
      paradigms: ["para+imperative", "para+reversible"],
      people: ["person+christopher-lutz", "person+howard-derby", "person+tetsuo-yokoyama", "person+robert-gluck"],
    },
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
        { kind: "homepage", title: "www.jooq.org", href: "https://www.jooq.org/" },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "3.19.2", date: "2024-01-12", kind: "stable" },
      ],
    },
    {
      influences: ["pl+sql"],
      licenses: ["lic+apache"],
      people: ["person+data-geekery-gmbh"],
      platforms: ["platf+jvm"],
    },
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
      releases: [{ version: "1.2", date: "2009-06-02", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+jvm", "platf+cross-platform"] },
  );

  lb.define(
    "pl+javascriptcore",
    "JavaScriptCore",
    {
      name: "JavaScriptCore",
      websites: [
        { kind: "wikipedia", title: "WebKit", href: "https://en.wikipedia.org/wiki/JavaScriptCore" },
        { kind: "homepage", title: "webkit.org", href: "http://webkit.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
      releases: [
        { version: "unknown", date: "1998-11-04", kind: "first" },
        { version: "unknown", kind: "preview" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "JModelica.org", href: "https://en.wikipedia.org/wiki/JModelica.org" },
        { kind: "homepage", title: "www.jmodelica.org", href: "http://www.jmodelica.org" },
      ],
      releases: [{ version: "2.10", date: "2019-03-22", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"], people: ["person+modelon-ab"] },
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
      releases: [{ version: "unknown", date: "2000-01-01", kind: "first" }],
    },
    { influences: ["pl+java"], paradigms: ["para+imperative", "para+reflective"] },
  );

  lb.define(
    "pl+joss",
    "JOSS",
    {
      name: "JOSS",
      websites: [{ kind: "wikipedia", title: "JOSS", href: "https://en.wikipedia.org/wiki/JOSS" }],
      releases: [{ version: "unknown", date: "1963-01-01", kind: "first" }],
    },
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
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
    },
    {
      influences: ["pl+t", "pl+actor-model"],
      paradigms: ["para+multi", "para+objects", "para+distributed", "para+dataflow"],
      people: ["person+e-dean-tribble"],
    },
  );

  lb.define(
    "pl+jovial",
    "JOVIAL",
    {
      name: "JOVIAL",
      websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
      releases: [{ version: "unknown", date: "1960-01-01", kind: "first" }],
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
      releases: [
        { version: "unknown", date: "2001-01-01", kind: "first" },
        { version: "unknown", date: "2003-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+ffp", "pl+forth", "pl+scheme", "pl+fp"],
      paradigms: ["para+multi", "para+functional", "para+concatenative", "para+stack"],
      people: ["person+manfred-von-thun", "person+john-cowan"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+jscript",
    "JScript",
    {
      name: "JScript",
      websites: [
        { kind: "wikipedia", title: "JScript", href: "https://en.wikipedia.org/wiki/JScript" },
        {
          kind: "homepage",
          title: "learn.microsoft.com/en-us/previous-versions/hbxc2t98(v=vs.85)",
          href: "https://learn.microsoft.com/en-us/previous-versions/hbxc2t98(v=vs.85)",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif" }],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "9.0", date: "2011-01-01", kind: "stable" },
      ],
      extensions: [".jse", ".wsc (", ")"],
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
      extensions: [],
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
    {
      name: "JS++",
      websites: [
        { kind: "wikipedia", title: "JS++", href: "https://en.wikipedia.org/wiki/JS%2B%2B" },
        { kind: "homepage", title: "www.onux.com/jspp/", href: "https://www.onux.com/jspp/" },
      ],
      releases: [{ version: "unknown", date: "2011-10-08", kind: "first" }],
      extensions: [".jspp", ".js++", ".jpp"],
    },
    {
      influences: ["pl+java", "pl+cpp", "pl+javascript", "pl+c", "pl+c-sharp"],
      licenses: ["lic+bsd"],
      paradigms: ["para+imperative", "para+structured", "para+objects", "para+functional", "para+generic"],
      people: ["person+roger-poon", "person+anton-rapetov"],
      typeSystems: ["tsys+gradual", "tsys+static", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+jython",
    "Jython",
    {
      name: "Jython",
      websites: [
        { kind: "wikipedia", title: "Jython", href: "https://en.wikipedia.org/wiki/Jython" },
        { kind: "homepage", title: "www.jython.org", href: "https://www.jython.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Jython.png" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2001-01-17", kind: "first" },
        { version: "2.7.3", date: "2022-01-01", kind: "stable" },
      ],
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
        { kind: "homepage", title: "xkarel.sourceforge.net", href: "https://xkarel.sourceforge.net/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/NikiExample.jpg/220px-NikiExample.jpg",
        },
      ],
      releases: [{ version: "unknown", date: "1981-01-01", kind: "first" }],
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
        { kind: "homepage", title: "www.gnu.org/software/kawa", href: "https://www.gnu.org/software/kawa" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kawa-logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1996-06-10", kind: "first" },
        { version: "3.1.1", date: "2020-01-16", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+java", "pl+scheme"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+mit"],
      people: ["person+per-bothner"],
      platforms: ["platf+jvm", "platf+cross-platform"],
    },
  );

  lb.define(
    "pl+kent-recursive-calculator",
    "KRC",
    {
      name: "KRC",
      websites: [{ kind: "wikipedia", title: "KRC", href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator" }],
      releases: [{ version: "unknown", date: "1981-01-01", kind: "first" }],
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
        { kind: "homepage", title: "kivy.org", href: "https://kivy.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kivy_logo.png/120px-Kivy_logo.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2011-02-01", kind: "first" },
        { version: "2.3.0", date: "2024-01-05", kind: "stable" },
      ],
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
    websites: [
      { kind: "wikipedia", title: "Kodu Game Lab", href: "https://en.wikipedia.org/wiki/Kodu_Game_Lab" },
      { kind: "homepage", title: "kodugamelab.com", href: "http://kodugamelab.com" },
    ],
    releases: [
      { version: "unknown", kind: "first" },
      { version: "unknown", date: "2009-06-30", kind: "first" },
      { version: "1.6.18.0", date: "2023-04-09", kind: "stable" },
    ],
  });

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
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    { paradigms: ["para+knowledge"], people: ["person+daniel-g-bobrow", "person+terry-winograd"] },
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
      releases: [{ version: "unknown", date: "1962-01-01", kind: "first" }],
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

  lb.define("pl+li-chen-wang", "Palo Alto Tiny BASIC", {
    name: "Palo Alto Tiny BASIC",
    websites: [
      { kind: "wikipedia", title: "Palo Alto Tiny BASIC", href: "https://en.wikipedia.org/wiki/Li-Chen_Wang" },
    ],
  });

  lb.define(
    "pl+libertyeiffel",
    "LibertyEiffel",
    {
      name: "LibertyEiffel",
      websites: [
        { kind: "wikipedia", title: "Liberty Eiffel", href: "https://en.wikipedia.org/wiki/LibertyEiffel" },
        { kind: "homepage", title: "www.liberty-eiffel.org", href: "http://www.liberty-eiffel.org" },
      ],
      releases: [{ version: "2016.05", date: "2016-05-26", kind: "stable" }],
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
        {
          kind: "homepage",
          title: "www.vitanuova.com/inferno/limbo.html",
          href: "http://www.vitanuova.com/inferno/limbo.html",
        },
      ],
      releases: [{ version: "unknown", date: "1995-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+dis-virtual-machine"],
      influences: ["pl+alef", "pl+newsqueak", "pl+c", "pl+pascal", "pl+communicating-sequential-processes"],
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
    { influences: ["pl+hypertalk"] },
  );

  lb.define("pl+linpack", "LINPACK", {
    name: "LINPACK",
    websites: [{ kind: "wikipedia", title: "LINPACK", href: "https://en.wikipedia.org/wiki/LINPACK" }],
  });

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
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "1.6.0", date: "2008-09-06", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+linux", "pl+mac-os-x", "pl+win"],
      influences: ["pl+lisp"],
      paradigms: ["para+functional"],
      people: ["person+aneil-mallavarapu"],
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
      websites: [
        { kind: "wikipedia", title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk" },
        { kind: "homepage", title: "logtalk.org", href: "https://logtalk.org" },
      ],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "3.66.0", date: "2023-05-30", kind: "stable" },
      ],
    },
    {
      influences: ["pl+prolog", "pl+smalltalk", "pl+objective-c"],
      licenses: ["lic+artistic-2", "lic+apache"],
      paradigms: ["para+logic", "para+objects", "para+prototypes"],
      people: ["person+paulo-moura"],
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
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    {
      influences: ["pl+iswim"],
      paradigms: ["para+dataflow"],
      people: ["person+edward-a-ashcroft", "person+william-w-wadge"],
    },
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
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
    },
    {
      paradigms: ["para+functional", "para+structured", "para+modular"],
      people: ["person+arkady-dzakrevskij"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+m4",
    "m4",
    {
      name: "m4",
      websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/M4_(computer_language)" }],
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1959-01-01", kind: "first" }],
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
        { kind: "homepage", title: "magma.maths.usyd.edu.au", href: "http://magma.maths.usyd.edu.au" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magma-logo.png/120px-Magma-logo.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2.27", date: "2023-02-22", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1998-01-01", kind: "first" }],
      extensions: [".mal", ".mb"],
    },
    { influences: ["pl+brainfuck", "pl+intercal", "pl+befunge"], people: ["person+ben-olmstead"] },
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
      releases: [{ version: "unknown", date: "1957-01-01", kind: "first" }],
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
        { kind: "homepage", title: "www.wolfram.com/mathematica/", href: "https://www.wolfram.com/mathematica/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1988-06-23", kind: "first" },
        { version: "14.0.0", date: "2024-01-09", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1971-01-01", kind: "first" }],
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
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1976-01-01", kind: "first" },
        { version: "6.0", date: "1981-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+algol"], typeSystems: ["tsys+strong", "tsys+static"] },
  );

  lb.define("pl+micro-focus", "Micro Focus", {
    name: "Micro Focus",
    websites: [{ kind: "wikipedia", title: "Micro Focus", href: "https://en.wikipedia.org/wiki/Micro_Focus" }],
  });

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
      releases: [{ version: "0.2.1", date: "2016-09-26", kind: "stable" }],
    },
    {
      influences: ["pl+ruby", "pl+java", "pl+boo"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+imperative"],
      people: ["person+charles-oliver-nutter"],
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
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_programming_language" },
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_(programming_language)" },
        { kind: "homepage", title: "miranda.org.uk", href: "http://miranda.org.uk" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/3/34/Miranda_logo_%28programming_language%29.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.066", date: "2020-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+kent-recursive-calculator", "pl+ml", "pl+sasl", "pl+hope", "pl+iswim"],
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
      websites: [
        { kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" },
        { kind: "homepage", title: "mlton.org", href: "http://mlton.org" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "unknown", date: "2021-01-17", kind: "stable" },
      ],
      extensions: [".sml"],
    },
    {
      influences: ["pl+sml"],
      licenses: ["lic+hpnd"],
      paradigms: ["para+multi", "para+functional", "para+imperative"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+moonscript",
    "MoonScript",
    {
      name: "MoonScript",
      websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
    },
    { influences: ["pl+coffeescript"] },
  );

  lb.define(
    "pl+moose",
    "Moose",
    {
      name: "Moose",
      websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
    },
    { influences: ["pl+common-lisp"] },
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
    "pl+ms-excel",
    "Excel",
    {
      name: "Excel",
      websites: [{ kind: "wikipedia", title: "Excel", href: "https://en.wikipedia.org/wiki/Microsoft_Excel" }],
    },
    { influences: ["pl+lisp"] },
  );

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
        {
          kind: "homepage",
          title: "docs.microsoft.com/en-us/cpp/assembler/masm/microsoft-macro-assembler-reference",
          href: "https://docs.microsoft.com/en-us/cpp/assembler/masm/microsoft-macro-assembler-reference",
        },
      ],
      releases: [
        { version: "unknown", date: "1981-01-01", kind: "first" },
        { version: "14.16.27023.1", date: "2017-03-07", kind: "stable" },
      ],
    },
    { licenses: ["lic+commercial", "lic+proprietary"] },
  );

  lb.define(
    "pl+ms-visual-cpp",
    "Microsoft Visual C++",
    {
      name: "Microsoft Visual C++",
      websites: [
        { kind: "wikipedia", title: "Visual C++", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B" },
        { kind: "homepage", title: "docs.microsoft.com/en-us/cpp/", href: "https://docs.microsoft.com/en-us/cpp/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" },
      ],
      releases: [{ version: "14.40.33810", date: "3381-01-01", kind: "stable" }],
    },
    { licenses: ["lic+trialware", "lic+freeware"], platforms: ["platf+ia-32", "platf+x86-64", "platf+arm"] },
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
      releases: [
        { version: "unknown", date: "1966-01-01", kind: "first" },
        { version: "11.1", date: "1995-12-08", kind: "stable" },
      ],
    },
    {
      influences: ["pl+joss", "pl+fortran", "pl+telcomp", "pl+speedcoding"],
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
      releases: [{ version: "unknown", date: "1988-01-01", kind: "first" }],
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
        { kind: "homepage", title: "nekovm.org/specs/syntax", href: "http://nekovm.org/specs/syntax" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "2.3.0", date: "2019-10-24", kind: "stable" },
      ],
      extensions: [],
    },
    {
      implementations: ["pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"],
      people: ["person+motion-twin", "person+nicolas-cannasse"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+nekovm", "NekoVM", {
    name: "NekoVM",
    websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
  });

  lb.define(
    "pl+nemerle",
    "Nemerle",
    {
      name: "Nemerle",
      websites: [
        { kind: "wikipedia", title: "Nemerle", href: "https://en.wikipedia.org/wiki/Nemerle" },
        { kind: "homepage", title: "nemerle.org", href: "http://nemerle.org" },
      ],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.2.507.0", date: "2016-08-06", kind: "stable" },
      ],
      extensions: [".n"],
    },
    {
      influences: ["pl+c-sharp", "pl+lisp", "pl+ml"],
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
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "3.1", date: "1995-01-01", kind: "stable" },
      ],
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
    "pl+netwide-assembler",
    "NASM",
    {
      name: "NASM",
      websites: [
        { kind: "wikipedia", title: "NASM", href: "https://en.wikipedia.org/wiki/Netwide_Assembler" },
        { kind: "homepage", title: "www.nasm.us", href: "https://www.nasm.us" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Netwide_Assembler.svg" }],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.16.03", date: "2024-01-01", kind: "stable" },
      ],
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
      influences: ["pl+algol", "pl+executive-systems-problem-oriented"],
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
        { kind: "homepage", title: "newspeaklanguage.org", href: "http://newspeaklanguage.org" },
      ],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "unknown", date: "2013-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+cpp", "pl+javascript"],
      influences: ["pl+smalltalk", "pl+self", "pl+beta", "pl+e"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+functional"],
      people: [
        "person+gilad-bracha",
        "person+peter-von-der-ahe",
        "person+vassili-bykov",
        "person+yaron-kashai",
        "person+ryan-macnak",
        "person+william-maddox",
        "person+eliot-miranda",
      ],
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
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    {
      influences: ["pl+self", "pl+dylan", "pl+smalltalk"],
      paradigms: ["para+prototypes", "para+objects"],
      people: ["person+walter-smith"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+nial",
    "Nial",
    {
      name: "Nial",
      websites: [
        { kind: "wikipedia", title: "Nial", href: "https://en.wikipedia.org/wiki/Nial" },
        { kind: "homepage", title: "www.nial-array-language.org", href: "https://www.nial-array-language.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/NialLogo.jpg" }],
      releases: [
        { version: "unknown", date: "1981-01-01", kind: "first" },
        { version: "7.0", date: "2017-01-01", kind: "stable" },
      ],
      extensions: [".ndf", ".nlg"],
    },
    {
      influences: ["pl+apl", "pl+lisp"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+array"],
      people: ["person+mike-jenkins"],
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
        "pl+euler",
        "pl+pascal",
        "pl+modula",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+obliq",
        "pl+oberon",
        "pl+pl360",
        "pl+zonnon",
        "pl+alma-0",
        "pl+active-oberon",
      ],
    },
  );

  lb.define("pl+nil", "NIL", {
    name: "NIL",
    websites: [{ kind: "wikipedia", title: "NIL", href: "https://en.wikipedia.org/wiki/NIL_(programming_language)" }],
  });

  lb.define(
    "pl+nix-package-manager",
    "Nix",
    {
      name: "Nix",
      websites: [
        { kind: "wikipedia", title: "Nix", href: "https://en.wikipedia.org/wiki/Nix_package_manager" },
        { kind: "homepage", title: "nixos.org", href: "https://nixos.org" },
      ],
      releases: [
        { version: "unknown", date: "2003-06-15", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.22.1", date: "2024-01-01", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1974-01-01", kind: "first" }],
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
    "Noweb",
    {
      name: "Noweb",
      websites: [
        { kind: "wikipedia", title: "noweb", href: "https://en.wikipedia.org/wiki/Noweb" },
        { kind: "homepage", title: "www.cs.tufts.edu/~nr/noweb/", href: "https://www.cs.tufts.edu/~nr/noweb/" },
      ],
      releases: [
        { version: "unknown", date: "1989-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.12", date: "2018-06-28", kind: "stable" },
      ],
    },
    { influences: ["pl+web"] },
  );

  lb.define(
    "pl+nu",
    "Nu",
    {
      name: "Nu",
      websites: [
        { kind: "wikipedia", title: "Nu", href: "https://en.wikipedia.org/wiki/Nu_(programming_language)" },
        { kind: "repository", title: "programming-nu.github.io", href: "http://programming-nu.github.io" },
      ],
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "2.3.0", date: "2019-07-29", kind: "stable" },
      ],
    },
    {
      influences: ["pl+objective-cpp", "pl+lisp", "pl+objective-c", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+structured", "para+imperative", "para+functional", "para+objects"],
      people: ["person+tim-burks"],
      platforms: ["platf+x86", "platf+mac"],
      typeSystems: ["tsys+dynamic"],
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
    "pl+objective-cpp",
    "Objective-C++",
    {
      name: "Objective-C++",
      websites: [
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.0", kind: "stable" },
      ],
      extensions: [".h", ".m", ".mm", ".M"],
    },
    {
      implementations: ["pl+clang", "pl+gcc"],
      influences: ["pl+c", "pl+smalltalk", "pl+cpp"],
      people: ["person+brad-cox"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak"],
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
      releases: [{ version: "unknown", date: "1967-01-01", kind: "first" }],
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
    {
      name: "Obliq",
      websites: [
        { kind: "wikipedia", title: "Obliq", href: "https://en.wikipedia.org/wiki/Obliq" },
        {
          kind: "homepage",
          title: "www.cc.gatech.edu/gvu/people/Phd/Krishna/VO/VOHome.html",
          href: "http://www.cc.gatech.edu/gvu/people/Phd/Krishna/VO/VOHome.html",
        },
      ],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
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
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "2.1", date: "1994-01-01", kind: "stable" },
      ],
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
      people: ["person+fred-barnes", "person+peter-welch"],
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
      websites: [
        { kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" },
        { kind: "homepage", title: "opalang.org", href: "http://opalang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.1.1", date: "2014-03-08", kind: "stable" },
      ],
    },
    {
      influences: ["pl+erlang", "pl+ocaml", "pl+ml", "pl+javascript"],
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
        { kind: "homepage", title: "opl-dev.sourceforge.net", href: "http://opl-dev.sourceforge.net" },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "1.56", date: "2006-06-17", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+structured", "para+embedded"],
      people: ["person+colly-myers", "person+richard-harrison", "person+martin-stamp"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+open-source", "open source", {
    name: "open source",
    websites: [{ kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open_source" }],
  });

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
    releases: [{ version: "12.8", date: "2024-01-21", kind: "stable" }],
  });

  lb.define(
    "pl+openmodelica",
    "OpenModelica",
    {
      name: "OpenModelica",
      websites: [
        { kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" },
        { kind: "homepage", title: "www.openmodelica.org", href: "http://www.openmodelica.org" },
      ],
      releases: [{ version: "1.22.2", date: "2024-02-21", kind: "stable" }],
    },
    { licenses: ["lic+eclipse-public", "lic+gpl", "lic+free"] },
  );

  lb.define(
    "pl+openqasm",
    "OpenQASM",
    {
      name: "OpenQASM",
      websites: [
        { kind: "wikipedia", title: "OpenQASM", href: "https://en.wikipedia.org/wiki/OpenQASM" },
        { kind: "homepage", title: "openqasm.com", href: "https://openqasm.com/" },
      ],
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

  lb.define(
    "pl+ops5",
    "OPS5",
    { name: "OPS5", websites: [{ kind: "wikipedia", title: "OPS5", href: "https://en.wikipedia.org/wiki/OPS5" }] },
    { influences: ["pl+lisp"] },
  );

  lb.define(
    "pl+optimj",
    "OptimJ",
    {
      name: "OptimJ",
      websites: [
        { kind: "wikipedia", title: "OptimJ", href: "https://en.wikipedia.org/wiki/OptimJ" },
        { kind: "homepage", title: "www.Ateji.com", href: "http://www.ateji.com/" },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "first" }],
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
      {
        kind: "homepage",
        title: "www.oracle.com/technetwork/server-storage/developerstudio/overview",
        href: "http://www.oracle.com/technetwork/server-storage/developerstudio/overview",
      },
    ],
    releases: [
      { version: "unknown", kind: "stable" },
      { version: "12.6", date: "2017-07-05", kind: "stable" },
    ],
  });

  lb.define(
    "pl+orc",
    "Orc",
    {
      name: "Orc",
      websites: [
        { kind: "wikipedia", title: "Orc", href: "https://en.wikipedia.org/wiki/Orc_(programming_language)" },
        { kind: "homepage", title: "orc.csres.utexas.edu", href: "https://orc.csres.utexas.edu/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Orc_programming_language_logo.png" },
      ],
      releases: [{ version: "unknown", date: "2004-01-01", kind: "first" }],
    },
    {
      influences: ["pl+pict", "pl+haskell", "pl+ml", "pl+oz", "pl+smalltalk"],
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
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    },
    {
      influences: ["pl+miranda"],
      paradigms: ["para+lazy", "para+functional"],
      people: ["person+philip-wadler", "person+martin-raskovsky"],
    },
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
        {
          kind: "homepage",
          title: "elementscompiler.com/elements/oxygene/",
          href: "https://elementscompiler.com/elements/oxygene/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Chrome-128.png/121px-Chrome-128.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2005-01-01", kind: "first" },
      ],
    },
    {
      influences: ["pl+delphi", "pl+pascal", "pl+c-sharp"],
      licenses: ["lic+trialware"],
      platforms: ["platf+.net", "platf+jvm", "platf+win", "platf+linux", "platf+wasm"],
    },
  );

  lb.define(
    "pl+oz",
    "Oz",
    {
      name: "Oz",
      websites: [
        { kind: "wikipedia", title: "Oz", href: "https://en.wikipedia.org/wiki/Oz_(programming_language)" },
        { kind: "repository", title: "mozart.github.io", href: "http://mozart.github.io" },
      ],
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "1.4.0", date: "2018-09-05", kind: "stable" },
      ],
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
      people: ["person+gert-smolka"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+p",
    "P",
    {
      name: "P",
      websites: [
        { kind: "wikipedia", title: "P", href: "https://en.wikipedia.org/wiki/P_(programming_language)" },
        { kind: "repository", title: "p-org.github.io/P/", href: "https://p-org.github.io/P/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/P_logo.png/64px-P_logo.png" },
      ],
      releases: [{ version: "unknown", date: "2012-01-01", kind: "first" }],
      extensions: [".p"],
    },
    { licenses: ["lic+mit"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+p--",
    "P′′",
    {
      name: "P′′",
      websites: [{ kind: "wikipedia", title: "P′′", href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
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
    "pl+pari-slashgp",
    "PARI/GP",
    {
      name: "PARI/GP",
      websites: [
        { kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" },
        { kind: "homepage", title: "pari.math.u-bordeaux.fr", href: "http://pari.math.u-bordeaux.fr/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2.15.5", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl"], people: ["person+henri-cohen"] },
  );

  lb.define("pl+parrot-virtual-machine", "Parrot", {
    name: "Parrot",
    websites: [{ kind: "wikipedia", title: "Parrot", href: "https://en.wikipedia.org/wiki/Parrot_virtual_machine" }],
  });

  lb.define("pl+patcher", "Patcher", {
    name: "Patcher",
    websites: [{ kind: "wikipedia", title: "Patcher", href: "https://en.wikipedia.org/wiki/Patcher" }],
  });

  lb.define(
    "pl+pathscale",
    "PathScale EKOPath Compiler",
    {
      name: "PathScale EKOPath Compiler",
      websites: [
        { kind: "wikipedia", title: "PathScale", href: "https://en.wikipedia.org/wiki/PathScale" },
        {
          kind: "homepage",
          title: "www.pathscale.com",
          href: "https://web.archive.org/web/20170205003605/http://www.pathscale.com:80/",
        },
      ],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "5.0.0", date: "2013-12-05", kind: "stable" },
      ],
    },
    { platforms: ["platf+x86-64"] },
  );

  lb.define(
    "pl+pcastl",
    "PCASTL",
    {
      name: "PCASTL",
      websites: [
        { kind: "wikipedia", title: "PCASTL", href: "https://en.wikipedia.org/wiki/PCASTL" },
        { kind: "homepage", title: "www.pcosmos.ca/pcastl/", href: "http://www.pcosmos.ca/pcastl/" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "3.5", date: "2018-03-31", kind: "stable" },
      ],
    },
    {
      influences: ["pl+c", "pl+r"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+reflective"],
      people: ["person+philippe-choquette"],
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
        { kind: "homepage", title: "pdl.perl.org", href: "https://pdl.perl.org/" },
      ],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.080", date: "2022-01-01", kind: "stable" },
      ],
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
        { kind: "homepage", title: "pico.vub.ac.be", href: "http://pico.vub.ac.be" },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "2.0", date: "2007-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+scheme"],
      influences: ["pl+scheme", "pl+smalltalk"],
      paradigms: ["para+reflective", "para+imperative"],
      people: ["person+theo-d-hondt", "person+wolfgang-de-meuter"],
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
        {
          kind: "homepage",
          title: "www.cis.upenn.edu/~bcpierce/papers/pict/Html/Pict.html",
          href: "https://www.cis.upenn.edu/~bcpierce/papers/pict/Html/Pict.html",
        },
      ],
      extensions: [".pi"],
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
        { kind: "homepage", title: "pike.lysator.liu.se", href: "https://pike.lysator.liu.se/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pike_Programming_Language_Logo.svg" },
      ],
      releases: [
        { version: "unknown", date: "1994-01-01", kind: "first" },
        { version: "8.0.1738", date: "2022-01-30", kind: "stable" },
      ],
    },
    {
      influences: ["pl+lpc", "pl+c", "pl+cpp"],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mozilla-public"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative"],
      people: ["person+fredrik-hubinette"],
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
        { kind: "homepage", title: "pizzacompiler.sourceforge.net", href: "http://pizzacompiler.sourceforge.net" },
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
        { kind: "wikipedia", title: "PL/0", href: "https://en.wikipedia.org/wiki/PL/0" },
        { kind: "wikipedia", title: "PL/I", href: "https://en.wikipedia.org/wiki/PL/I" },
        { kind: "wikipedia", title: "PL/I", href: "https://en.wikipedia.org/wiki/PL/1" },
        {
          kind: "homepage",
          title: "www.ibm.com/products/pli-compiler-zos",
          href: "https://www.ibm.com/products/pli-compiler-zos",
        },
        { kind: "wikipedia", title: "PL/M", href: "https://en.wikipedia.org/wiki/PL/M" },
        { kind: "wikipedia", title: "PL/C", href: "https://en.wikipedia.org/wiki/PL/C" },
      ],
      releases: [
        { version: "unknown", date: "1964-01-01", kind: "first" },
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "7.6", date: "1977-01-01", kind: "stable" },
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1973-01-01", kind: "first" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Conway_Gries_An_Introduction_to_Programming_cover.jpg/180px-Conway_Gries_An_Introduction_to_Programming_cover.jpg",
        },
      ],
    },
    {
      influences: [
        "pl+cobol",
        "pl+fortran",
        "pl+algol",
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
    {
      name: "PL360",
      websites: [{ kind: "wikipedia", title: "PL360", href: "https://en.wikipedia.org/wiki/PL360" }],
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
    },
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
      releases: [{ version: "unknown", date: "1948-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
    },
    { licenses: ["lic+proprietary"], paradigms: ["para+imperative"], people: ["person+goran-hemdahl"] },
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
      releases: [{ version: "unknown", date: "2005-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+ibm-system-slash370", "pl+dec", "pl+pdp-11", "pl+motorola-68000"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );

  lb.define("pl+poly-slashml", "Poly/ML", {
    name: "Poly/ML",
    websites: [{ kind: "wikipedia", title: "Poly/ML", href: "https://en.wikipedia.org/wiki/Poly/ML" }],
  });

  lb.define(
    "pl+pop-11",
    "POP-11",
    {
      name: "POP-11",
      websites: [
        { kind: "wikipedia", title: "11", href: "https://en.wikipedia.org/wiki/POP-11" },
        {
          kind: "homepage",
          title: "www.cs.bham.ac.uk/research/projects/poplog/poplog.info.html",
          href: "http://www.cs.bham.ac.uk/research/projects/poplog/poplog.info.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "2020-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+lisp", "pl+pop-2"],
      licenses: ["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"],
      paradigms: ["para+multi", "para+structured", "para+reflective", "para+imperative", "para+functional", "para+dec"],
      people: ["person+robin-popplestone"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+cross-platform",
        "platf+openvms",
        "platf+unix",
        "platf+linux",
        "platf+mac",
        "platf+win",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+pop-2",
    "POP-2",
    {
      name: "POP-2",
      websites: [{ kind: "wikipedia", title: "POP-2", href: "https://en.wikipedia.org/wiki/POP-2" }],
      releases: [
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "unknown", date: "1975-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+lisp", "pl+cowsel", "pl+algol"],
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
      websites: [
        { kind: "wikipedia", title: "Poplog", href: "https://en.wikipedia.org/wiki/Poplog" },
        {
          kind: "homepage",
          title: "www.cs.bham.ac.uk/research/projects/poplog/poplog.info.html",
          href: "http://www.cs.bham.ac.uk/research/projects/poplog/poplog.info.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1982-01-01", kind: "first" },
        { version: "unknown", date: "2020-01-01", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "pcc", href: "https://en.wikipedia.org/wiki/Portable_C_Compiler" },
        {
          kind: "homepage",
          title: "web.archive.org/web/20231212090621/http://pcc.ludd.ltu.se/",
          href: "https://web.archive.org/web/20231212090621/http://pcc.ludd.ltu.se/",
        },
      ],
      releases: [
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "1.1.0", date: "2014-12-10", kind: "stable" },
      ],
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
        { kind: "homepage", title: "www.appeon.com", href: "https://www.appeon.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/PowerBuilder_2017_Logo.png/75px-PowerBuilder_2017_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "unknown", date: "2022-01-01", kind: "stable" },
      ],
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
        {
          kind: "homepage",
          title: "teamblue.unicomsi.com/products/powerhouse-4gl/",
          href: "https://teamblue.unicomsi.com/products/powerhouse-4gl/",
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
        { kind: "homepage", title: "processing.org", href: "https://processing.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [
        { version: "unknown", date: "2001-01-01", kind: "first" },
        { version: "4.3", date: "2023-07-26", kind: "stable" },
      ],
      extensions: [".pde"],
    },
    { licenses: ["lic+gpl", "lic+lgpl"], paradigms: ["para+objects"], people: ["person+casey-reas", "person+ben-fry"] },
  );

  lb.define(
    "pl+profile-scripting",
    "PSL",
    {
      name: "PSL",
      websites: [
        {
          kind: "wikipedia",
          title: "Profile Scripting Language",
          href: "https://en.wikipedia.org/wiki/Profile_Scripting_Language",
        },
      ],
      releases: [{ version: "unknown", date: "1998-01-01", kind: "first" }],
    },
    {
      influences: ["pl+mumps"],
      paradigms: ["para+imperative"],
      people: ["person+frank-sanchez"],
      platforms: ["platf+cross-platform"],
    },
  );

  lb.define(
    "pl+programming-language-for-business",
    "PL/B",
    {
      name: "PL/B",
      websites: [
        {
          kind: "wikipedia",
          title: "Programming Language for Business",
          href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business",
        },
      ],
      releases: [{ version: "unknown", date: "1972-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1983-01-01", kind: "first" }],
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
        {
          kind: "homepage",
          title: "www.microsoft.com/en-us/research/project/project-verona",
          href: "https://www.microsoft.com/en-us/research/project/project-verona",
        },
        { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
      ],
      releases: [{ version: "unknown", date: "2019-01-01", kind: "first" }],
      extensions: [".verona"],
    },
    {
      influences: ["pl+rust", "pl+cyclone"],
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
      releases: [
        { version: "unknown", date: "1984-08-16", kind: "first" },
        { version: "2.1", date: "1986-10-14", kind: "stable" },
      ],
      extensions: [".s"],
    },
    { paradigms: ["para+imperative", "para+structured"] },
  );

  lb.define(
    "pl+providex",
    "ProvideX",
    {
      name: "ProvideX",
      websites: [
        { kind: "wikipedia", title: "ProvideX", href: "https://en.wikipedia.org/wiki/ProvideX" },
        { kind: "homepage", title: "home.pvxplus.com", href: "http://home.pvxplus.com" },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "19.10", date: "2022-09-15", kind: "stable" },
      ],
      extensions: [".pvx", ".pvc", ".pvk", ".pvt"],
    },
    {
      influences: ["pl+basic"],
      people: ["person+michael-f-king"],
      platforms: ["platf+win", "platf+unix", "platf+linux", "platf+mac"],
      typeSystems: ["tsys+strong"],
    },
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
      websites: [
        { kind: "wikipedia", title: "Pure DataPure Data", href: "https://en.wikipedia.org/wiki/Pure_Data" },
        { kind: "homepage", title: "puredata.info", href: "http://puredata.info" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [
        { version: "0.53", date: "2022-03-15", kind: "stable" },
        { version: "unknown", date: "1996-01-01", kind: "first" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "PWCT", href: "https://en.wikipedia.org/wiki/PWCT" },
        { kind: "homepage", title: "doublesvsoop.sourceforge.net", href: "http://doublesvsoop.sourceforge.net/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/PWCT_1.9_-_Goal_Designer.png/300px-PWCT_1.9_-_Goal_Designer.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2005-12-26", kind: "first" },
        { version: "1.9", date: "2024-02-04", kind: "stable" },
      ],
      extensions: [".ssf"],
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
    "pl+qalb",
    "قلب",
    {
      name: "قلب",
      websites: [
        { kind: "wikipedia", title: "قلب", href: "https://en.wikipedia.org/wiki/Qalb_(programming_language)" },
        { kind: "homepage", title: "nas.sr/%D9%82%D9%84%D8%A8", href: "https://nas.sr/%D9%82%D9%84%D8%A8" },
      ],
      releases: [{ version: "unknown", date: "2012-01-01", kind: "first" }],
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
        { kind: "homepage", title: "www.qore.org", href: "http://www.qore.org" },
      ],
      releases: [{ version: "unknown", date: "2023-07-02", kind: "stable" }],
      extensions: [".q", ".qm", ".qtest"],
    },
    {
      implementations: ["pl+cpp", "pl+pthreads"],
      influences: ["pl+perl", "pl+d", "pl+cpp", "pl+java"],
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
      people: ["person+david-nichols"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+optional"],
    },
  );

  lb.define(
    "pl+qt",
    "Qt",
    {
      name: "Qt",
      websites: [
        { kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" },
        { kind: "homepage", title: "www.qt.io", href: "https://www.qt.io" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1995-05-20", kind: "first" },
        { version: "6.7.1", date: "2024-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+qml"],
      licenses: ["lic+qt-commercial", "lic+gpl", "lic+lgpl"],
      platforms: ["platf+cross-platform"],
    },
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
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
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
      websites: [
        { kind: "wikipedia", title: "Quintus Prolog", href: "https://en.wikipedia.org/wiki/Quintus_Prolog" },
        { kind: "homepage", title: "quintus.sics.se", href: "https://quintus.sics.se/" },
      ],
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+rapid",
    "RAPID",
    {
      name: "RAPID",
      websites: [{ kind: "wikipedia", title: "RAPID", href: "https://en.wikipedia.org/wiki/RAPID" }],
      releases: [{ version: "unknown", date: "1994-01-01", kind: "first" }],
    },
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
      releases: [{ version: "unknown", date: "1982-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    { influences: ["pl+fortran", "pl+c"], people: ["person+brian-kernighan"] },
  );

  lb.define(
    "pl+ratfor",
    "Ratfor",
    {
      name: "Ratfor",
      websites: [{ kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfor" }],
    },
    { influences: ["pl+fortran", "pl+speedcoding"] },
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
        { kind: "homepage", title: "react.dev", href: "https://react.dev/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2013-05-29", kind: "first" },
        { version: "18.3.1", date: "2024-01-01", kind: "stable" },
        { version: "19.0", date: "2024-04-25", kind: "preview" },
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
      releases: [{ version: "unknown", date: "1968-01-01", kind: "first" }],
    },
    {
      paradigms: ["para+pattern", "para+term"],
      people: ["person+valentin-turchin", "person+s-florentsev", "person+v-olyunin"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  lb.define(
    "pl+reia",
    "Reia",
    {
      name: "Reia",
      websites: [
        { kind: "wikipedia", title: "Reia", href: "https://en.wikipedia.org/wiki/Reia_(programming_language)" },
      ],
    },
    { influences: ["pl+erlang"] },
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
    "REXX",
    {
      name: "REXX",
      websites: [{ kind: "wikipedia", title: "REXX", href: "https://en.wikipedia.org/wiki/REXX" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Rexx-img-lg.png/220px-Rexx-img-lg.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "3.274", date: "1996-01-01", kind: "stable" },
      ],
      extensions: [".cmd", ".bat", ".exec", ".rexx", ".rex", "EXEC"],
    },
    {
      dialects: ["pl+netrexx", "pl+object-rexx", "pl+oorexx", "pl+xedit"],
      implementations: ["pl+arexx"],
      influences: ["pl+pl-slash", "pl+algol", "pl+cms-exec", "pl+exec-2"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+mike-cowlishaw"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+robotics", "Robotics", {
    name: "Robotics",
    websites: [{ kind: "wikipedia", title: "Robotics", href: "https://en.wikipedia.org/wiki/Robotics" }],
  });

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
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    },
    {
      influences: ["pl+reverse-polish-notation", "pl+forth", "pl+lisp"],
      paradigms: ["para+concatenative", "para+stack", "para+structured"],
    },
  );

  lb.define(
    "pl+rtl-slash2",
    "RTL/2",
    {
      name: "RTL/2",
      websites: [{ kind: "wikipedia", title: "RTL/2", href: "https://en.wikipedia.org/wiki/RTL/2" }],
      releases: [{ version: "unknown", date: "1972-01-01", kind: "first" }],
    },
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
      websites: [
        { kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" },
        { kind: "homepage", title: "rubini.us", href: "http://rubini.us" },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "5.0", date: "2020-05-16", kind: "stable" },
      ],
    },
    { licenses: ["lic+mozilla-public"], people: ["person+evan-phoenix", "person+brian-shirai"] },
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
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+s-plus"],
      influences: ["pl+scheme", "pl+c", "pl+apl", "pl+fortran"],
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
      websites: [
        { kind: "wikipedia", title: "S-Lang", href: "https://en.wikipedia.org/wiki/S-Lang" },
        { kind: "homepage", title: "www.jedsoft.org/slang/", href: "https://www.jedsoft.org/slang/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/JED-editor-slang-source.png/220px-JED-editor-slang-source.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2.3.3", date: "2022-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl"], people: ["person+john-e-davis"] },
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
      websites: [
        { kind: "wikipedia", title: "SAC", href: "https://en.wikipedia.org/wiki/SAC_programming_language" },
        { kind: "homepage", title: "www.sac-home.org", href: "http://www.sac-home.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/SAC_language_logo.png/121px-SAC_language_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1994-01-01", kind: "first" },
        { version: "1.3.3", date: "2023-06-14", kind: "preview" },
      ],
      extensions: [".sac"],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+apl", "pl+sisal", "pl+c"],
      licenses: ["lic+free"],
      paradigms: ["para+array", "para+functional"],
      people: ["person+sven-bodo-scholz", "person+clemens-grelck"],
      platforms: ["platf+posix", "platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define("pl+safari", "Safari", {
    name: "Safari",
    websites: [{ kind: "wikipedia", title: "Safari", href: "https://en.wikipedia.org/wiki/Safari_(web_browser)" }],
  });

  lb.define(
    "pl+sail",
    "SAIL",
    {
      name: "SAIL",
      websites: [
        { kind: "wikipedia", title: "SAIL", href: "https://en.wikipedia.org/wiki/SAIL_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
    },
    { people: ["person+dan-swinehart", "person+robert-sproull"] },
  );

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
    { influences: ["pl+pl-slash"] },
  );

  lb.define(
    "pl+sas-system",
    "SAS",
    {
      name: "SAS",
      websites: [
        { kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_System" },
        { kind: "homepage", title: "www.sas.com", href: "https://www.sas.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png/120px-%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "9.4", date: "2023-01-31", kind: "stable" },
      ],
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
      releases: [{ version: "unknown", date: "1972-01-01", kind: "first" }],
    },
    { influences: ["pl+iswim"], paradigms: ["para+functional"], people: ["person+david-turner"] },
  );

  lb.define(
    "pl+sather",
    "Sather",
    {
      name: "Sather",
      websites: [
        { kind: "wikipedia", title: "Sather", href: "https://en.wikipedia.org/wiki/Sather" },
        { kind: "homepage", title: "www.gnu.org/software/sather/", href: "https://www.gnu.org/software/sather/" },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.2.3", date: "2007-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+eiffel", "pl+clu", "pl+common-lisp", "pl+scheme"],
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
        { kind: "homepage", title: "code.google.com/archive/p/szl/", href: "https://code.google.com/archive/p/szl/" },
      ],
      releases: [{ version: "unknown", date: "2003-01-01", kind: "first" }],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define(
    "pl+sbcl",
    "SBCL",
    {
      name: "SBCL",
      websites: [
        { kind: "wikipedia", title: "SBCL", href: "https://en.wikipedia.org/wiki/SBCL" },
        { kind: "homepage", title: "www.sbcl.org", href: "http://www.sbcl.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SBCL_screenshot.png/250px-SBCL_screenshot.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.4.5", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+public-domain", "lic+mit", "lic+bsd"], platforms: ["platf+cross-platform"] },
  );

  lb.define("pl+scaleform-gfx", "Scaleform GFx", {
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  lb.define("pl+schoonschip", "Schoonschip", {
    name: "Schoonschip",
    websites: [{ kind: "wikipedia", title: "Schoonschip", href: "https://en.wikipedia.org/wiki/Schoonschip" }],
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
        { kind: "homepage", title: "people.csail.mit.edu/jaffer/SCM", href: "http://people.csail.mit.edu/jaffer/SCM" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/SCM_64.png" }],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", date: "2020-02-16", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+scheme", "pl+siod"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta"],
      people: ["person+aubrey-jaffer", "person+radey-shouman", "person+tanel-tammet"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
      typeSystems: ["tsys+strong", "tsys+dynamic", "tsys+latent"],
    },
  );

  lb.define(
    "pl+script.net",
    "Script.NET",
    {
      name: "Script.NET",
      websites: [
        { kind: "wikipedia", title: "Script.NET", href: "https://en.wikipedia.org/wiki/Script.NET" },
        { kind: "homepage", title: "www.protsyk.com/scriptdotnet", href: "http://www.protsyk.com/scriptdotnet" },
      ],
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
      releases: [{ version: "unknown", date: "1974-01-01", kind: "first" }],
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
      websites: [
        { kind: "wikipedia", title: "SenseTalk", href: "https://en.wikipedia.org/wiki/SenseTalk" },
        { kind: "homepage", title: "www.sensetalk.com", href: "http://www.sensetalk.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/ST-HelloWorld2.png/250px-ST-HelloWorld2.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "2.15", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influences: ["pl+hypertalk", "pl+xtalk"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+people", "para+multi", "para+objects"],
      people: ["person+douglas-simons"],
      typeSystems: ["tsys+duck"],
    },
  );

  lb.define(
    "pl+sequencel",
    "SequenceL",
    {
      name: "SequenceL",
      websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "first" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+parallel", "para+functional", "para+dec"],
      people: ["person+dr-daniel-cooke", "person+dr-nelson-rushton", "person+dr-brad-nemanich"],
      platforms: ["platf+x86", "platf+arm", "platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+static", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+setl",
    "SETL",
    {
      name: "SETL",
      websites: [
        { kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/SETL" },
        { kind: "homepage", title: "setl.org", href: "http://setl.org" },
      ],
      releases: [
        { version: "unknown", date: "1969-01-01", kind: "first" },
        { version: "1.1", date: "2005-01-07", kind: "stable" },
      ],
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
    { name: "SETL2", websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }] },
    { influences: ["pl+setl"] },
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

  lb.define(
    "pl+short-code",
    "Short Code",
    {
      name: "Short Code",
      websites: [
        {
          kind: "wikipedia",
          title: "Short Code",
          href: "https://en.wikipedia.org/wiki/Short_Code_(computer_language)",
        },
      ],
      releases: [{ version: "unknown", date: "1950-01-01", kind: "first" }],
    },
    { people: ["person+william-f-schmitt", "person+a-b-tonik", "person+j-r-logan"] },
  );

  lb.define("pl+siemens", "Siemens", {
    name: "Siemens",
    websites: [{ kind: "wikipedia", title: "Siemens", href: "https://en.wikipedia.org/wiki/Siemens" }],
  });

  lb.define(
    "pl+silverfrost-ftn95",
    "Silverfrost FTN95: Fortran for Windows",
    {
      name: "Silverfrost FTN95: Fortran for Windows",
      websites: [
        { kind: "wikipedia", title: "Silverfrost", href: "https://en.wikipedia.org/wiki/Silverfrost_FTN95" },
        {
          kind: "homepage",
          title: "www.silverfrost.com/11/ftn95/ftn95_fortran_95_for_windows.aspx",
          href: "https://www.silverfrost.com/11/ftn95/ftn95_fortran_95_for_windows.aspx",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Silverfrost_ftn95.jpg" }],
      releases: [{ version: "9.00", date: "2023-11-13", kind: "stable" }],
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
    },
    { influences: ["pl+algol"] },
  );

  lb.define(
    "pl+simula-67",
    "Simula",
    {
      name: "Simula",
      websites: [
        { kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" },
        { kind: "homepage", title: "www.simula67.info", href: "http://www.simula67.info" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
      releases: [{ version: "unknown", date: "1962-01-01", kind: "first" }],
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

  lb.define("pl+simula67", "Simula67", {
    name: "Simula67",
    websites: [{ kind: "wikipedia", title: "Simula67", href: "https://en.wikipedia.org/wiki/Simula67" }],
  });

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
      websites: [
        { kind: "wikipedia", title: "Simulink", href: "https://en.wikipedia.org/wiki/Simulink" },
        { kind: "homepage", title: "mathworks.com", href: "https://www.mathworks.com/products/simulink.html" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Simulink_Logo_%28non-wordmark%29.png/100px-Simulink_Logo_%28non-wordmark%29.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "10.7", date: "2023-03-16", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "SIOD", href: "https://en.wikipedia.org/wiki/SIOD" },
        {
          kind: "homepage",
          title: "people.delphiforums.com/gjc//siod.html",
          href: "http://people.delphiforums.com/gjc//siod.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "3.63", date: "2008-04-27", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta"],
      people: ["person+george-j-carrette"],
      platforms: ["platf+ia-32", "platf+cross-platform", "platf+linux", "platf+openvms", "platf+win"],
      typeSystems: ["tsys+strong", "tsys+dynamic", "tsys+latent"],
    },
  );

  lb.define(
    "pl+sisal",
    "SISAL",
    {
      name: "SISAL",
      websites: [{ kind: "wikipedia", title: "SISAL", href: "https://en.wikipedia.org/wiki/SISAL" }],
      releases: [{ version: "unknown", date: "1983-01-01", kind: "first" }],
    },
    {
      influences: ["pl+lucid", "pl+pascal", "pl+c", "pl+fortran"],
      paradigms: ["para+functional", "para+dataflow"],
      people: ["person+james-mcgraw"],
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
    {
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/SKILL" }],
      releases: [{ version: "unknown", date: "1990-01-01", kind: "first" }],
    },
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
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+fortran"],
      influences: ["pl+algol"],
      paradigms: ["para+imperative", "para+structured", "para+objects"],
      people: ["person+nevil-brownlee"],
      platforms: ["platf+dec"],
    },
  );

  lb.define(
    "pl+small-c",
    "Small-C",
    {
      name: "Small-C",
      websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    { people: ["person+ron-cain", "person+james-e-hendrix"] },
  );

  lb.define("pl+smarteiffel", "SmartEiffel", {
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  lb.define(
    "pl+snap-",
    "Snap!",
    {
      name: "Snap!",
      websites: [
        { kind: "wikipedia", title: "Snap!", href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)" },
        { kind: "homepage", title: "snap.berkeley.edu", href: "http://snap.berkeley.edu" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Snap%21.svg" }],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "9.2.17", date: "2024-04-24", kind: "stable" },
      ],
      extensions: [],
    },
    {
      implementations: ["pl+javascript"],
      influences: ["pl+apl", "pl+scratch", "pl+scheme", "pl+logo", "pl+smalltalk"],
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
      releases: [
        { version: "unknown", date: "1962-01-01", kind: "first" },
        { version: "unknown", date: "1967-01-01", kind: "stable" },
      ],
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
    {
      name: "SP/k",
      websites: [{ kind: "wikipedia", title: "SP/k", href: "https://en.wikipedia.org/wiki/SP/k" }],
      releases: [{ version: "unknown", date: "1974-01-01", kind: "first" }],
    },
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
    "Spark",
    {
      name: "Spark",
      websites: [
        { kind: "wikipedia", title: "SPARK", href: "https://en.wikipedia.org/wiki/SPARK_(programming_language)" },
        { kind: "homepage", title: "About SPARK", href: "http://www.adacore.com/about-spark" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Sparkada.jpg/250px-Sparkada.jpg" },
      ],
      releases: [{ version: "unknown", date: "2021-06-01", kind: "stable" }],
    },
    {
      influences: ["pl+ada", "pl+eiffel", "pl+rust"],
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
      websites: [
        { kind: "wikipedia", title: "SPARQL", href: "https://en.wikipedia.org/wiki/SPARQL" },
        { kind: "homepage", title: "www.w3.org/TR/sparql11-query/", href: "http://www.w3.org/TR/sparql11-query/" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "1.1", date: "2013-03-21", kind: "stable" },
      ],
    },
    { implementations: ["pl+jena", "pl+virtuoso-universal-server"], influences: ["pl+sql"], paradigms: ["para+query"] },
  );

  lb.define(
    "pl+speakeasy",
    "Speakeasy",
    {
      name: "Speakeasy",
      websites: [
        {
          kind: "wikipedia",
          title: "Speakeasy",
          href: "https://en.wikipedia.org/wiki/Speakeasy_(computational_environment)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Speakeasy_Red_Logo.png/120px-Speakeasy_Red_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "stable" },
        { version: "unknown", date: "1964-01-01", kind: "first" },
      ],
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
      releases: [{ version: "unknown", date: "1953-01-01", kind: "first" }],
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
        { kind: "homepage", title: "squirrel-lang.org", href: "http://squirrel-lang.org/" },
      ],
      releases: [
        { version: "unknown", date: "2003-09-06", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "3.2", date: "2022-01-01", kind: "stable" },
      ],
      extensions: [".nut"],
    },
    {
      influences: ["pl+cpp", "pl+javascript", "pl+lua", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+scripting", "para+imperative", "para+functional", "para+objects"],
      people: ["person+alberto-demichelis"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define(
    "pl+starlogo",
    "StarLogo",
    {
      name: "StarLogo",
      websites: [
        { kind: "wikipedia", title: "StarLogo", href: "https://en.wikipedia.org/wiki/StarLogo" },
        { kind: "homepage", title: "www.slnova.org", href: "http://www.slnova.org" },
      ],
      releases: [
        { version: "unknown", date: "2001-01-01", kind: "first" },
        { version: "2.1", date: "2018-11-24", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "Stata", href: "https://en.wikipedia.org/wiki/Stata" },
        { kind: "homepage", title: "www.stata.com", href: "https://www.stata.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Stata_logo_med_blue.png/120px-Stata_logo_med_blue.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "18.0", date: "2023-04-25", kind: "stable" },
      ],
    },
    { licenses: ["lic+proprietary"] },
  );

  lb.define(
    "pl+stoic",
    "STOIC",
    {
      name: "STOIC",
      websites: [{ kind: "wikipedia", title: "STOIC", href: "https://en.wikipedia.org/wiki/STOIC" }],
      releases: [{ version: "unknown", date: "1975-01-01", kind: "first" }],
    },
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
      websites: [
        { kind: "wikipedia", title: "Strongtalk", href: "https://en.wikipedia.org/wiki/Strongtalk" },
        { kind: "homepage", title: "www.strongtalk.org", href: "http://www.strongtalk.org" },
      ],
      releases: [
        { version: "unknown", date: "2002-07-01", kind: "first" },
        { version: "2.0", date: "2006-08-09", kind: "stable" },
      ],
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
    { influences: ["pl+common-lisp"] },
  );

  lb.define(
    "pl+superplan",
    "Superplan",
    {
      name: "Superplan",
      websites: [{ kind: "wikipedia", title: "Superplan", href: "https://en.wikipedia.org/wiki/Superplan" }],
      releases: [{ version: "unknown", date: "1951-01-01", kind: "first" }],
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
    { influences: ["pl+hypertalk"] },
  );

  lb.define("pl+symbolic-manipulation-program", "SMP", {
    name: "SMP",
    websites: [
      { kind: "wikipedia", title: "SMP", href: "https://en.wikipedia.org/wiki/Symbolic_Manipulation_Program" },
    ],
  });

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
    { licenses: ["lic+proprietary"], people: ["person+calerga-sarl"] },
  );

  lb.define(
    "pl+t",
    "T",
    {
      name: "T",
      websites: [
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_programming_language" },
        { kind: "homepage", title: "mumble.net/~jar/tproject", href: "http://mumble.net/~jar/tproject" },
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "1982-01-01", kind: "first" }],
    },
    {
      influences: ["pl+scheme"],
      paradigms: ["para+multi", "para+objects", "para+imperative", "para+functional", "para+meta"],
      people: ["person+jonathan-a-rees", "person+norman-i-adams"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+tads",
    "TADS",
    {
      name: "TADS",
      websites: [
        { kind: "wikipedia", title: "TADS", href: "https://en.wikipedia.org/wiki/TADS" },
        { kind: "homepage", title: "www.tads.org", href: "http://www.tads.org" },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "3.1.3", date: "2013-05-16", kind: "stable" },
      ],
    },
    {
      paradigms: ["para+prototypes", "para+domain"],
      people: ["person+michael-j-roberts"],
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
      releases: [{ version: "unknown", date: "1997-01-01", kind: "first" }],
    },
    {
      influences: ["pl+tcl", "pl+java", "pl+scheme"],
      paradigms: ["para+multi", "para+functional", "para+objects", "para+class"],
      people: ["person+jorge-nunes"],
    },
  );

  lb.define(
    "pl+telcomp",
    "TELCOMP",
    {
      name: "TELCOMP",
      websites: [{ kind: "wikipedia", title: "TELCOMP", href: "https://en.wikipedia.org/wiki/TELCOMP" }],
      releases: [{ version: "unknown", date: "1965-01-01", kind: "first" }],
    },
    { influences: ["pl+joss"] },
  );

  lb.define(
    "pl+tex",
    "TeX",
    {
      name: "TeX",
      websites: [
        { kind: "wikipedia", title: "TeX", href: "https://en.wikipedia.org/wiki/TeX" },
        { kind: "homepage", title: "tug.org", href: "http://tug.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/68/TeX_logo.svg" }],
      releases: [
        { version: "unknown", date: "1978-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2024-03-13", kind: "stable" },
      ],
      extensions: [],
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
        { kind: "repository", title: "github.com/oneapi-src/oneTBB", href: "https://github.com/oneapi-src/oneTBB" },
        { kind: "homepage", title: "intel.com/oneTBB", href: "http://intel.com/oneTBB" },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2021.8", date: "2023-02-17", kind: "stable" },
      ],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define(
    "pl+tk",
    "Tk",
    {
      name: "Tk",
      websites: [
        { kind: "wikipedia", title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)" },
        { kind: "homepage", title: "tcl.tk", href: "http://www.tcl.tk/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tcl-Tk_universal_scripting.svg" },
      ],
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "8.6.13", date: "2022-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+bsd-s"], platforms: ["platf+cross-platform"] },
  );

  lb.define(
    "pl+tmg",
    "TMG",
    {
      name: "TMG",
      websites: [{ kind: "wikipedia", title: "TMGUnix TMG", href: "https://en.wikipedia.org/wiki/TMG_(language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Brainfuck_to_C_translator_in_Unix_TMG.png/225px-Brainfuck_to_C_translator_in_Unix_TMG.png",
        },
      ],
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
      extensions: [".t"],
    },
    {
      dialects: ["pl+pdp-7", "pl+pdp-11"],
      influences: ["pl+algol", "pl+b", "pl+pl-slash", "pl+snobol"],
      people: ["person+robert-m-mcclure", "person+douglas-mcilroy"],
    },
  );

  lb.define(
    "pl+trac",
    "TRAC",
    {
      name: "TRAC",
      websites: [{ kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_programming_language" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
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
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
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
        { kind: "homepage", title: "livecode.com", href: "https://livecode.com/" },
      ],
      releases: [
        { version: "unknown", date: "2001-07-11", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "9.6.4", date: "2021-08-31", kind: "stable" },
        { version: "9.6.5", date: "2021-10-25", kind: "preview" },
        { version: "unknown", date: "1993-01-01", kind: "first" },
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
      releases: [
        { version: "unknown", date: "1968-01-01", kind: "first" },
        { version: "1.0", kind: "stable" },
      ],
    },
    {
      influences: ["pl+trac"],
      licenses: ["lic+mit"],
      paradigms: ["para+macros"],
      people: ["person+steven-m-caine", "person+e-kent-gordon"],
    },
  );

  lb.define(
    "pl+turing",
    "Turing",
    {
      name: "Turing",
      websites: [
        {
          kind: "wikipedia",
          title: "TuringTuring+Object-Oriented Turing",
          href: "https://en.wikipedia.org/wiki/Turing_(programming_language)",
        },
        { kind: "wikipedia", title: "Turing Plus", href: "https://en.wikipedia.org/wiki/Turing_Plus" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Turing_logo.gif/121px-Turing_logo.gif",
        },
      ],
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    {
      influences: ["pl+concurrent-euclid", "pl+sp-slashk", "pl+euclid"],
      paradigms: ["para+multi", "para+imperative", "para+objects", "para+concurrent"],
      people: ["person+ric-holt"],
      platforms: ["platf+cross-platform", "platf+mips"],
      typeSystems: ["tsys+static", "tsys+manifest"],
    },
  );

  lb.define(
    "pl+tutor",
    "TUTOR",
    {
      name: "TUTOR",
      websites: [{ kind: "wikipedia", title: "TUTOR", href: "https://en.wikipedia.org/wiki/TUTOR" }],
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
    },
    { paradigms: ["para+imperative"], people: ["person+paul-tenczar", "person+richard-blomme"] },
  );

  lb.define("pl+tweak", "Tweak", {
    name: "Tweak",
    websites: [
      { kind: "wikipedia", title: "Tweak", href: "https://en.wikipedia.org/wiki/Tweak_(programming_environment)" },
    ],
  });

  lb.define("pl+tynker", "Tynker IDE", {
    name: "Tynker IDE",
    websites: [
      { kind: "wikipedia", title: "Tynker IDE", href: "https://en.wikipedia.org/wiki/Tynker" },
      { kind: "homepage", title: "tynker.com", href: "http://tynker.com" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Tynker_logo.png/120px-Tynker_logo.png",
      },
    ],
  });

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
        { kind: "homepage", title: "unicon.sourceforge.net", href: "http://unicon.sourceforge.net/" },
      ],
    },
    {
      influences: ["pl+icon"],
      licenses: ["lic+gpl"],
      paradigms: ["para+objects", "para+imperative"],
      people: ["person+clint-jeffery"],
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
        { kind: "homepage", title: "uniface.com", href: "http://uniface.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_Payoff_RGB.svg" }],
      releases: [{ version: "10.4.01.018", date: "2022-05-22", kind: "stable" }],
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
        { kind: "homepage", title: "upc-lang.org", href: "http://upc-lang.org" },
      ],
      releases: [{ version: "2022.10.0", date: "2022-10-28", kind: "stable" }],
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
      websites: [
        { kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" },
        { kind: "repository", title: "github.com/urbiforge/urbi", href: "https://github.com/urbiforge/urbi" },
      ],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "2.7.4", date: "2011-11-17", kind: "stable" },
      ],
      extensions: [".u"],
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

  lb.define("pl+verilog-ams", "Verilog-AMS", {
    name: "Verilog-AMS",
    websites: [{ kind: "wikipedia", title: "Verilog-AMS", href: "https://en.wikipedia.org/wiki/Verilog-AMS" }],
  });

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
      websites: [
        { kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/Visual_DataFlex" },
        { kind: "homepage", title: "www.dataaccess.com/DataFlex", href: "http://www.DataAccess.com/DataFlex" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "24.0", date: "2024-03-13", kind: "stable" },
      ],
    },
    { licenses: ["lic+commercial", "lic+proprietary"], people: ["person+data-access-worldwide"] },
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
      websites: [
        { kind: "wikipedia", title: "Visual FoxPro", href: "https://en.wikipedia.org/wiki/Visual_FoxPro" },
        { kind: "homepage", title: "msdn.microsoft.com/vfoxpro", href: "http://msdn.microsoft.com/vfoxpro" },
      ],
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
    "J#",
    {
      name: "J#",
      websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/Visual_J_Sharp" }],
    },
    { influences: ["pl+java"] },
  );

  lb.define(
    "pl+visual-prolog",
    "Visual Prolog",
    {
      name: "Visual Prolog",
      websites: [
        { kind: "wikipedia", title: "Visual Prolog", href: "https://en.wikipedia.org/wiki/Visual_Prolog" },
        { kind: "homepage", title: "www.visual-prolog.com", href: "https://www.visual-prolog.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Visual_Prolog_IDE_Screenshot.png/300px-Visual_Prolog_IDE_Screenshot.png",
        },
      ],
      releases: [{ version: "unknown", date: "2024-01-11", kind: "stable" }],
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
      people: ["person+pdc-a-slashs"],
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
      websites: [
        { kind: "wikipedia", title: "VisualWorks", href: "https://en.wikipedia.org/wiki/VisualWorks" },
        { kind: "homepage", title: "www.cincomsmalltalk.com", href: "http://www.cincomsmalltalk.com" },
      ],
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

  lb.define("pl+watcom-c-compiler", "Open Watcom", {
    name: "Open Watcom",
    websites: [{ kind: "wikipedia", title: "Open Watcom", href: "https://en.wikipedia.org/wiki/Watcom_C_compiler" }],
  });

  lb.define(
    "pl+watcom-c-slashcpp",
    "Open Watcom C/C++",
    {
      name: "Open Watcom C/C++",
      websites: [
        { kind: "wikipedia", title: "Watcom C", href: "https://en.wikipedia.org/wiki/Watcom_C/C%2B%2B" },
        { kind: "homepage", title: "openwatcom.org", href: "http://openwatcom.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Watcom_logo.png" }],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "1.9", date: "2010-06-02", kind: "stable" },
        { version: "unknown", kind: "preview" },
        { version: "2.0", date: "2022-12-01", kind: "preview" },
      ],
    },
    { licenses: ["lic+sybase-open-watcom-public"], platforms: ["platf+x86", "platf+ia-32", "platf+x86-64"] },
  );

  lb.define(
    "pl+web",
    "WEB",
    {
      name: "WEB",
      websites: [
        { kind: "wikipedia", title: "CWEB", href: "https://en.wikipedia.org/wiki/WEB" },
        {
          kind: "homepage",
          title: "www-cs-faculty.stanford.edu/~uno/cweb.html",
          href: "http://www-cs-faculty.stanford.edu/~uno/cweb.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "3.67", date: "2006-10-24", kind: "stable" },
      ],
      extensions: [".w"],
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

  lb.define("pl+wolfram-mathematica", "Mathematica", {
    name: "Mathematica",
    websites: [{ kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" }],
  });

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
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "14.0.0", date: "2024-01-09", kind: "stable" },
      ],
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
      websites: [
        { kind: "wikipedia", title: "X10", href: "https://en.wikipedia.org/wiki/X10_(programming_language)" },
        { kind: "homepage", title: "x10-lang.org", href: "http://x10-lang.org" },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "unknown", date: "2019-01-08", kind: "stable" },
      ],
      extensions: [".x10"],
    },
    {
      influences: ["pl+cpp", "pl+java"],
      licenses: ["lic+eclipse-public"],
      paradigms: ["para+objects"],
      people: ["person+kemal-ebcioglu", "person+saravanan-arumugam", "person+vijay-saraswat", "person+vivek-sarkar"],
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
      websites: [
        { kind: "wikipedia", title: "Apache Xalan", href: "https://en.wikipedia.org/wiki/Xalan" },
        { kind: "homepage", title: "xalan.apache.org", href: "http://xalan.apache.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Apache_Xalan_logo.svg" }],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2.7.3", date: "2023-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+apache"] },
  );

  lb.define("pl+xbase", "xBase", {
    name: "xBase",
    websites: [{ kind: "wikipedia", title: "xBase", href: "https://en.wikipedia.org/wiki/XBase" }],
  });

  lb.define(
    "pl+xcos",
    "Xcos",
    {
      name: "Xcos",
      websites: [
        { kind: "wikipedia", title: "Scilab", href: "https://en.wikipedia.org/wiki/Xcos" },
        { kind: "homepage", title: "www.scilab.org", href: "https://www.scilab.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2024.1.0", date: "2024-01-01", kind: "stable" },
      ],
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
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2000-01-01", kind: "first" },
        { version: "1.6.8", date: "2014-04-29", kind: "stable" },
      ],
    },
    {
      influences: ["pl+tcl", "pl+otcl"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative", "para+event"],
      people: ["person+gustaf-neumann", "person+uwe-zdun"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+xpl", "XPL", {
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  lb.define("pl+xtalk", "xTalk", {
    name: "xTalk",
    websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
  });

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
    "YAP",
    {
      name: "YAP",
      websites: [
        { kind: "wikipedia", title: "YAP Prolog", href: "https://en.wikipedia.org/wiki/YAP_(Prolog)" },
        { kind: "homepage", title: "www.dcc.fc.up.pt/~vsc/yap/", href: "https://www.dcc.fc.up.pt/~vsc/yap/" },
      ],
      releases: [
        { version: "6.3.3", date: "2013-01-21", kind: "stable" },
        { version: "7.1", date: "2016-01-09", kind: "preview" },
      ],
    },
    { licenses: ["lic+artistic"] },
  );

  lb.define(
    "pl+yarv",
    "YARV",
    {
      name: "YARV",
      websites: [
        { kind: "wikipedia", title: "YARV", href: "https://en.wikipedia.org/wiki/YARV" },
        { kind: "homepage", title: "www.ruby-lang.org", href: "http://www.ruby-lang.org/" },
      ],
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
        { kind: "repository", title: "github.com/LLNL/yorick", href: "https://github.com/LLNL/yorick" },
      ],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "2.2.04", date: "2015-01-01", kind: "stable" },
      ],
      extensions: [".i"],
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
      websites: [
        { kind: "wikipedia", title: "Zend Engine", href: "https://en.wikipedia.org/wiki/Zend_Engine" },
        { kind: "homepage", title: "www.zend.com", href: "https://www.zend.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Zend_Engine_logo.png/120px-Zend_Engine_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "3.4", kind: "stable" },
      ],
    },
    { licenses: ["lic+zend", "lic+php"] },
  );

  lb.define(
    "pl+zonnon",
    "Zonnon",
    {
      name: "Zonnon",
      websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "first" }],
    },
    {
      influences: ["pl+modula", "pl+oberon-2", "pl+oberon", "pl+pascal"],
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
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    { influences: ["pl+c"], paradigms: ["para+array"] },
  );
}
