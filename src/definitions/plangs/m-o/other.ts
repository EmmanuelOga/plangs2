import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+.net", "CLI", {
    name: "CLI",
    websites: [
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
    ],
  });

  /**/

  lb.define("pl+.ql", ".QL", {
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  /**/

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
      influences: ["pl+haskell", "pl+pascal"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+multi", "para+objects"],
      people: [["person+stephen-m-watt", "designer"]],
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

  /**/

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
        { version: "7.58", date: "2023-10-26", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://web.archive.org/web/20201024224303/https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abennews-75.htm",
            title: "Changes in Releases 7.5x",
          },
        ],
      },
    },
    {
      implementations: ["pl+sap-r-slash2", "pl+sap-r-slash3", "pl+sap-s-slash4hana"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+active-scripting", "Active Scripting", {
    name: "Active Scripting",
    websites: [
      { kind: "wikipedia", title: "Active Scripting", href: "https://en.wikipedia.org/wiki/Active_Scripting" },
    ],
  });

  /**/

  lb.define(
    "pl+active-server-pages",
    "ASP",
    {
      name: "ASP",
      websites: [{ kind: "wikipedia", title: "ASP", href: "https://en.wikipedia.org/wiki/Active_Server_Pages" }],
    },
    { influences: ["pl+php"] },
  );

  /**/

  lb.define("pl+actor-based-concurrent", "ABCL", {
    name: "ABCL",
    websites: [
      { kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Actor-Based_Concurrent_Language" },
    ],
  });

  /**/

  lb.define(
    "pl+actor-model",
    "Actors",
    {
      name: "Actors",
      websites: [{ kind: "wikipedia", title: "actor model", href: "https://en.wikipedia.org/wiki/Actor_model" }],
    },
    { influences: ["pl+mdl"] },
  );

  /**/

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

  /**/

  lb.define("pl+adobe-flash-player", "Adobe Flash Player", {
    name: "Adobe Flash Player",
    websites: [
      { kind: "wikipedia", title: "Adobe Flash Player", href: "https://en.wikipedia.org/wiki/Adobe_Flash_Player" },
    ],
  });

  /**/

  lb.define(
    "pl+advpl",
    "AdvPL",
    {
      name: "AdvPL",
      websites: [{ kind: "wikipedia", title: "AdvPL", href: "https://en.wikipedia.org/wiki/AdvPL" }],
      references: {
        designed_by: [
          {
            href: "https://tdn.totvs.com/pages/viewpage.action?pageId=27675886",
            title: "What is AdvPL? - TOTVS Technology - TDN",
          },
        ],
        influenced_by: [
          {
            href: "https://tdn.totvs.com/pages/viewpage.action?pageId=27675886",
            title: "What is AdvPL? - TOTVS Technology - TDN",
          },
        ],
      },
    },
    { influences: ["pl+xbase"] },
  );

  /**/

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
      paradigms: ["para+educational", "para+objects"],
      people: [["person+alexander-repenning", "designer"]],
    },
  );

  /**/

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
      influences: ["pl+karel", "pl+lisp", "pl+logo", "pl+objectlogo", "pl+smalltalk"],
      paradigms: ["para+educational", "para+objects"],
      people: [["person+alexander-repenning", "designer"]],
      platforms: ["platf+jvm"],
    },
  );

  /**/

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
    { licenses: ["lic+commercial", "lic+proprietary"] },
  );

  /**/

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

  /**/

  lb.define(
    "pl+aimaco",
    "AIMACO",
    {
      name: "AIMACO",
      websites: [{ kind: "wikipedia", title: "AIMACO", href: "https://en.wikipedia.org/wiki/AIMACO" }],
      releases: [{ version: "unknown", date: "1959-01-01", kind: "first" }],
    },
    { influences: ["pl+comtran", "pl+flow-matic"], paradigms: ["para+imperative"] },
  );

  /**/

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
      references: {
        developer: [
          {
            href: "https://web.archive.org/web/20131029190618/http://business.aimms.com/moving-forward-now-can-call-us-aimms/",
            title: "AIMMS",
          },
        ],
      },
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    {
      people: [
        ["person+johannes-j-bisschop", "designer"],
        ["person+marcel-roelofs", "designer"],
      ],
    },
  );

  /**/

  lb.define(
    "pl+akka",
    "Akka",
    {
      name: "Akka",
      websites: [{ kind: "wikipedia", title: "Akka", href: "https://en.wikipedia.org/wiki/Akka_(toolkit)" }],
    },
    { influences: ["pl+erlang"] },
  );

  /**/

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

  /**/

  lb.define("pl+alf", "ALF", {
    name: "ALF",
    websites: [{ kind: "wikipedia", title: "ALF", href: "https://en.wikipedia.org/wiki/ALF_(proof_assistant)" }],
  });

  /**/

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
    { influences: ["pl+prolog"], paradigms: ["para+functional", "para+logic", "para+multi"] },
  );

  /**/

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
      references: { website: [{ href: "http://www.ps.uni-saarland.de/alice/", title: "Alice" }] },
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

  /**/

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
      influences: ["pl+modula", "pl+modula-2"],
      paradigms: ["para+constraint", "para+imperative", "para+logic", "para+multi"],
      people: [
        ["person+centrum-wiskunde", "developer"],
        ["person+krzysztof-apt", "designer"],
      ],
      typeSystems: ["tsys+static"],
    },
  );

  /**/

  lb.define("pl+alphard", "Alphard", {
    name: "Alphard",
    websites: [
      { kind: "wikipedia", title: "Alphard", href: "https://en.wikipedia.org/wiki/Alphard_(programming_language)" },
    ],
  });

  /**/

  lb.define(
    "pl+amber-smalltalk",
    "Amber",
    {
      name: "Amber",
      websites: [
        { kind: "wikipedia", title: "Amber Smalltalk", href: "https://en.wikipedia.org/wiki/Amber_Smalltalk" },
        { kind: "homepage", title: "www.amber-lang.net", href: "http://www.amber-lang.net" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/f/fb/Amber_Smalltalk_Logo.svg" }],
      releases: [
        { version: "unknown", date: "2011-09-13", kind: "first" },
        { version: "0.30.0", date: "2021-02-23", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://lolg.it/amber/amber/commit/d0643e241c2ba97a9d8ab37a03bff29e04aef6c2",
            title: "Release version 0.30.0",
          },
        ],
      },
    },
    { licenses: ["lic+mit"], platforms: ["platf+web"] },
  );

  /**/

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
      influences: ["pl+actor-based-concurrent", "pl+e", "pl+scheme", "pl+self", "pl+smalltalk"],
      paradigms: ["para+concurrent", "para+event", "para+objects", "para+prototypes", "para+reflection"],
      people: [
        ["person+jessie-dedecker", "designer"],
        ["person+tom-van-cutsem", "designer"],
        ["person+wolfgang-de-meuter", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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

  /**/

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
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [["person+wouter-van-oortmerssen", "designer"]],
      platforms: ["platf+amiga"],
    },
  );

  /**/

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
      licenses: ["lic+free-and-open-source", "lic+proprietary"],
      paradigms: ["para+dec", "para+imperative", "para+multi"],
      people: [
        ["person+brian-kernighan", "designer"],
        ["person+robert-fourer", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  /**/

  lb.define("pl+ansi-c", "ANSI C", {
    name: "ANSI C",
    websites: [{ kind: "wikipedia", title: "ANSI C", href: "https://en.wikipedia.org/wiki/ANSI_C" }],
  });

  /**/

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
      references: { written_in: [{ href: "https://github.com/apache/flex-sdk", title: "Apache Flex SDK - GitHub" }] },
    },
    { licenses: ["lic+apache", "lic+mozilla-public"] },
  );

  /**/

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

  /**/

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
      licenses: ["lic+freeware", "lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+modular", "para+objects", "para+structured"],
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
    { licenses: ["lic+apache", "lic+cc"] },
  );

  /**/

  lb.define(
    "pl+apt",
    "APT",
    {
      name: "APT",
      websites: [{ kind: "wikipedia", title: "APT", href: "https://en.wikipedia.org/wiki/APT_(programming_language)" }],
      releases: [{ version: "unknown", date: "1956-01-01", kind: "first" }],
    },
    { paradigms: ["para+numerical"], people: [["person+douglas-t-ross", "designer"]] },
  );

  /**/

  lb.define("pl+arexx", "ARexx", {
    name: "ARexx",
    websites: [{ kind: "wikipedia", title: "ARexx", href: "https://en.wikipedia.org/wiki/ARexx" }],
  });

  /**/

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

  /**/

  lb.define("pl+arith-matic", "ARITH-MATIC", {
    name: "ARITH-MATIC",
    websites: [{ kind: "wikipedia", title: "ARITH-MATIC", href: "https://en.wikipedia.org/wiki/ARITH-MATIC" }],
  });

  /**/

  lb.define("pl+arm-architecture-family", "ARM", {
    name: "ARM",
    websites: [{ kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" }],
  });

  /**/

  lb.define("pl+arpanet", "ARPAnet", {
    name: "ARPAnet",
    websites: [{ kind: "wikipedia", title: "ARPAnet", href: "https://en.wikipedia.org/wiki/ARPAnet" }],
  });

  /**/

  lb.define(
    "pl+asm.js",
    "asm.js",
    {
      name: "asm.js",
      websites: [
        { kind: "wikipedia", title: "asm.js", href: "https://en.wikipedia.org/wiki/Asm.js" },
        { kind: "homepage", title: "asmjs.org", href: "http://asmjs.org" },
      ],
      references: {
        first_appeared: [
          {
            href: "https://blog.mozilla.org/luke/2013/03/21/asm-js-in-firefox-nightly/",
            title: "asm.js in Firefox Nightly",
          },
        ],
      },
      releases: [{ version: "unknown", date: "2013-03-21", kind: "first" }],
    },
    { influences: ["pl+javascript"], platforms: ["platf+cross-platform"] },
  );

  /**/

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
        { version: "4.8.1", date: "2022-08-09", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://dotnet.microsoft.com/en-us/download/dotnet-framework/net481",
            title: ".net framework download page",
          },
        ],
        license: [
          {
            href: "https://web.archive.org/web/20150402161923/https://msdn.microsoft.com/en-us/library/ms994405.aspx",
            title: "Microsoft .NET Framework Redistributable EULA",
          },
        ],
      },
      extensions: [".aspx"],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+.net"] },
  );

  /**/

  lb.define(
    "pl+atlas-autocode",
    "Atlas Autocode",
    {
      name: "Atlas Autocode",
      websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
      releases: [{ version: "unknown", date: "1963-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+algol-60", "pl+edinburgh-imp"],
      influences: ["pl+algol-60"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+tony-brooker", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+atscript",
    "AtScript",
    {
      name: "AtScript",
      websites: [{ kind: "wikipedia", title: "AtScript", href: "https://en.wikipedia.org/wiki/AtScript" }],
    },
    { influences: ["pl+typescript"] },
  );

  /**/

  lb.define(
    "pl+awk",
    "AWK",
    {
      name: "AWK",
      websites: [{ kind: "wikipedia", title: "AWK", href: "https://en.wikipedia.org/wiki/AWK" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The-AWK-Programming-Language.svg" },
      ],
      references: {
        paradigm: [
          {
            href: "https://web.archive.org/web/20150427143548/https://www6.software.ibm.com/developerworks/education/au-gawk/au-gawk-a4.pdf",
            title: "Get started with GAWK: AWK language fundamentals",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "unknown", date: "1985-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+c", "pl+sed", "pl+snobol"],
      paradigms: ["para+data", "para+imperative", "para+scripting"],
      people: [
        ["person+alfred-aho", "designer"],
        ["person+brian-kernighan", "designer"],
        ["person+peter-weinberger", "designer"],
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define(
    "pl+axiom",
    "Axiom computer algebra system",
    {
      name: "Axiom computer algebra system",
      websites: [
        { kind: "wikipedia", title: "Axiom", href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)" },
        { kind: "homepage", title: "www.axiom-developer.org", href: "http://www.axiom-developer.org" },
      ],
      references: { stable_release: [{ href: "https://hub.docker.com/r/daly/axiom/tags", title: "daly/axiom Tags" }] },
      releases: [
        { version: "unknown", date: "2015-11-13", kind: "stable" },
        { version: "unknown", date: "2022-02-06", kind: "preview" },
      ],
    },
    { licenses: ["lic+bsd-s"] },
  );

  /**/

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
    { licenses: ["lic+closed-source"], platforms: ["platf+win", "platf+x86", "platf+x86-64"] },
  );

  /**/

  lb.define(
    "pl+b",
    "B",
    {
      name: "B",
      websites: [{ kind: "wikipedia", title: "B", href: "https://en.wikipedia.org/wiki/B_(programming_language)" }],
      references: {
        first_appeared: [
          { href: "http://www.britannica.com/EBchecked/topic/1663863/B", title: "B - computer programming language" },
        ],
      },
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
      extensions: [".b"],
    },
    {
      influences: ["pl+bcpl", "pl+pl-slashi", "pl+tmg"],
      people: [
        ["person+dennis-ritchie", "developer"],
        ["person+ken-thompson", "designer"],
      ],
    },
  );

  /**/

  lb.define("pl+b-prolog", "B-Prolog", {
    name: "B-Prolog",
    websites: [{ kind: "wikipedia", title: "B-Prolog", href: "https://en.wikipedia.org/wiki/B-Prolog" }],
  });

  /**/

  lb.define(
    "pl+bally-astrocade",
    "Astro BASIC",
    {
      name: "Astro BASIC",
      websites: [
        { kind: "wikipedia", title: "Astro BASIC", href: "https://en.wikipedia.org/wiki/Bally_Astrocade#Astro_BASIC" },
      ],
    },
    { influences: ["pl+tiny-basic"] },
  );

  /**/

  lb.define("pl+bazel", "Starlark", {
    name: "Starlark",
    websites: [{ kind: "wikipedia", title: "Starlark", href: "https://en.wikipedia.org/wiki/Bazel_(software)" }],
  });

  /**/

  lb.define(
    "pl+bc",
    "bc",
    {
      name: "bc",
      websites: [{ kind: "wikipedia", title: "bc", href: "https://en.wikipedia.org/wiki/Bc_(programming_language)" }],
      releases: [{ version: "unknown", date: "1975-01-01", kind: "first" }],
    },
    {
      people: [
        ["person+lorinda-cherry", "developer"],
        ["person+robert-morris", "developer"],
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define(
    "pl+bcpl",
    "BCPL",
    {
      name: "BCPL",
      websites: [{ kind: "wikipedia", title: "BCPL", href: "https://en.wikipedia.org/wiki/BCPL" }],
      references: {
        first_appeared: [
          {
            href: "https://archive.today/20171124083723/https://www.computer.org/web/awards/pioneer-martin-richards",
            title: "Martin Richards (2003 Computer Pioneer Award)",
          },
        ],
        influenced: [{ href: "https://talks.golang.org/2014/hellogophers.slide#21", title: "Hello Gophers" }],
      },
      releases: [{ version: "unknown", date: "1967-01-01", kind: "first" }],
    },
    {
      influences: ["pl+combined", "pl+cpl"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+martin-richards", "designer"]],
    },
  );

  /**/

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
    { influences: ["pl+esoteric", "pl+forth"], people: [["person+chris-pressey", "developer"]] },
  );

  /**/

  lb.define("pl+begriffsschrift", "Begriffsschrift", {
    name: "Begriffsschrift",
    websites: [{ kind: "wikipedia", title: "Begriffsschrift", href: "https://en.wikipedia.org/wiki/Begriffsschrift" }],
  });

  /**/

  lb.define("pl+berkeley-software-distribution", "BSD", {
    name: "BSD",
    websites: [
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/Berkeley_Software_Distribution" },
    ],
  });

  /**/

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
      people: [
        ["person+birger-m-ller-pedersen", "designer"],
        ["person+kristen-nygaard", "designer"],
      ],
    },
  );

  /**/

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

  /**/

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
      paradigms: ["para+imperative", "para+structured"],
      people: [
        ["person+a-n-habermann", "designer"],
        ["person+w-a-wulf", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+dec", "platf+ia-32", "platf+ia-64", "platf+mips", "platf+x86-64"],
    },
  );

  /**/

  lb.define(
    "pl+bs",
    "bs",
    {
      name: "bs",
      websites: [{ kind: "wikipedia", title: "bs", href: "https://en.wikipedia.org/wiki/Bs_(programming_language)" }],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    {
      influences: ["pl+basic", "pl+c", "pl+snobol"],
      people: [["person+richard-c-haight", "designer"]],
      platforms: ["platf+unix"],
    },
  );

  /**/

  lb.define("pl+burroughs-b5000", "Burroughs B5000", {
    name: "Burroughs B5000",
    websites: [{ kind: "wikipedia", title: "Burroughs B5000", href: "https://en.wikipedia.org/wiki/Burroughs_B5000" }],
  });

  /**/

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
      people: [["person+simon-peyton-jones", "designer"]],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );

  /**/

  lb.define(
    "pl+c-shell",
    "csh",
    { name: "csh", websites: [{ kind: "wikipedia", title: "csh", href: "https://en.wikipedia.org/wiki/C_shell" }] },
    { influences: ["pl+c"] },
  );

  /**/

  lb.define(
    "pl+c-slashal",
    "C/AL",
    { name: "C/AL", websites: [{ kind: "wikipedia", title: "C/AL", href: "https://en.wikipedia.org/wiki/C/AL" }] },
    {
      influences: ["pl+object-pascal", "pl+pascal"],
      paradigms: ["para+imperative"],
      people: [["person+michael-nielsen", "designer"]],
    },
  );

  /**/

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
      paradigms: ["para+imperative", "para+multi", "para+parallel"],
      people: [["person+thinking-machines", "designer"]],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+cadence-skill",
    "SKILL",
    {
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/Cadence_SKILL" }],
    },
    { influences: ["pl+common-lisp"] },
  );

  /**/

  lb.define(
    "pl+cal",
    "CAL",
    {
      name: "CAL",
      websites: [{ kind: "wikipedia", title: "CAL", href: "https://en.wikipedia.org/wiki/CAL_(programming_language)" }],
    },
    { influences: ["pl+joss"] },
  );

  /**/

  lb.define("pl+catia", "CATIA", {
    name: "CATIA",
    websites: [{ kind: "wikipedia", title: "CATIA", href: "https://en.wikipedia.org/wiki/CATIA" }],
  });

  /**/

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
      people: [["person+wolfgang-slany", "designer"]],
      platforms: ["platf+android", "platf+ios"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define("pl+cdc-6000", "CDC 6000", {
    name: "CDC 6000",
    websites: [{ kind: "wikipedia", title: "CDC 6000", href: "https://en.wikipedia.org/wiki/CDC_6000" }],
  });

  /**/

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
    { paradigms: ["para+objects"], people: [["person+craig-chambers", "designer"]], typeSystems: ["tsys+dynamic"] },
  );

  /**/

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

  /**/

  lb.define(
    "pl+ceemac",
    "CEEMAC",
    {
      name: "CEEMAC",
      websites: [{ kind: "wikipedia", title: "CEEMAC", href: "https://en.wikipedia.org/wiki/CEEMAC" }],
    },
    {
      people: [
        ["person+brooke-boering", "designer"],
        ["person+vagabondo-enterprises", "developer"],
      ],
    },
  );

  /**/

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

  /**/

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
    { licenses: ["lic+freeware", "lic+proprietary", "lic+trialware"], platforms: ["platf+x86"] },
  );

  /**/

  lb.define("pl+chakra", "Chakra", {
    name: "Chakra",
    websites: [{ kind: "wikipedia", title: "Chakra", href: "https://en.wikipedia.org/wiki/Chakra_(JScript_engine)" }],
  });

  /**/

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
      influences: ["pl+c", "pl+pascal", "pl+rtl-slash2"],
      paradigms: ["para+structured"],
      people: [["person+p-nowosad", "designer"]],
      platforms: ["platf+risc-os"],
    },
  );

  /**/

  lb.define("pl+chef", "Chef", {
    name: "Chef",
    websites: [{ kind: "wikipedia", title: "Chef", href: "https://en.wikipedia.org/wiki/Chef_(software)" }],
  });

  /**/

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
      influences: ["pl+cobol", "pl+pl-slash1"],
      paradigms: ["para+imperative"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+cilk", "Cilk", {
    name: "Cilk",
    websites: [{ kind: "wikipedia", title: "Cilk", href: "https://en.wikipedia.org/wiki/Cilk" }],
  });

  /**/

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
      implementations: ["pl+reference-implementation"],
      influences: ["pl+c", "pl+lisp", "pl+ml", "pl+ops5", "pl+setl", "pl+smalltalk"],
      licenses: ["lic+permissive-free-licence"],
      paradigms: ["para+class", "para+functional", "para+multi", "para+objects", "para+production", "para+reflection"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+dos", "platf+ia-32", "platf+win"],
    },
  );

  /**/

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

  /**/

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

  /**/

  lb.define(
    "pl+clozure-cl",
    "Clozure CL",
    {
      name: "Clozure CL",
      websites: [
        { kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" },
        { kind: "homepage", title: "ccl.clozure.com", href: "http://ccl.clozure.com" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/Clozure/ccl/releases/tag/v1.12.2", title: "Release Clozure CL 1.12.2" },
        ],
        license: [
          {
            href: "https://lists.clozure.com/pipermail/openmcl-devel/2016-January/011174.html",
            title: "Clozure CL now Apache 2 licensed",
          },
        ],
      },
      releases: [{ version: "1.12.2", date: "2023-08-08", kind: "stable" }],
    },
    {
      licenses: ["lic+apache", "lic+lgpl"],
      people: [["person+clozure-associates", "developer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

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
    { influences: ["pl+fortran", "pl+fortran-95", "pl+jovial", "pl+pl-slashi"], paradigms: ["para+imperative"] },
  );

  /**/

  lb.define("pl+cms-exec", "EXEC", {
    name: "EXEC",
    websites: [{ kind: "wikipedia", title: "EXEC", href: "https://en.wikipedia.org/wiki/CMS_EXEC" }],
  });

  /**/

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
        { version: "unknown", date: "2023-05-14", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://gitlab.common-lisp.net/cmucl/cmucl/wikis/home",
            title: "Home · Wiki · cmucl / cmucl · GitLab",
          },
        ],
      },
    },
    { licenses: ["lic+public-domain"], platforms: ["platf+cross-platform"] },
  );

  /**/

  lb.define(
    "pl+cobolscript",
    "CobolScript",
    {
      name: "CobolScript",
      websites: [{ kind: "wikipedia", title: "CobolScript", href: "https://en.wikipedia.org/wiki/CobolScript" }],
    },
    { influences: ["pl+cobol"] },
  );

  /**/

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
      influences: ["pl+c-sharp", "pl+eiffel", "pl+objective-c", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+objects"],
      people: [
        ["person+charles-esterbrook", "designer"],
        ["person+cobra-language-llc", "developer"],
      ],
      platforms: ["platf+.net", "platf+mono"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+cocoa", "Cocoa", {
    name: "Cocoa",
    websites: [{ kind: "wikipedia", title: "Cocoa", href: "https://en.wikipedia.org/wiki/Cocoa_(API)" }],
  });

  /**/

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

  /**/

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
      people: [
        ["person+b-rge-r-christensen", "designer"],
        ["person+benedict-l-fstedt", "designer"],
      ],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

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
      influences: ["pl+algol-60"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
      people: [["person+christopher-strachey", "designer"]],
    },
  );

  /**/

  lb.define(
    "pl+comit",
    "COMIT",
    {
      name: "COMIT",
      websites: [{ kind: "wikipedia", title: "COMIT", href: "https://en.wikipedia.org/wiki/COMIT" }],
      releases: [{ version: "unknown", date: "1957-01-01", kind: "first" }],
    },
    { people: [["person+victor-yngve", "designer"]] },
  );

  /**/

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

  /**/

  lb.define(
    "pl+computer-aided-manufacturing",
    "Computer-aided manufacturing",
    {
      name: "Computer-aided manufacturing",
      websites: [
        {
          kind: "wikipedia",
          title: "Computer-aided manufacturing",
          href: "https://en.wikipedia.org/wiki/Computer-aided_manufacturing",
        },
      ],
    },
    { influences: ["pl+apt"] },
  );

  /**/

  lb.define(
    "pl+comtran",
    "COMTRAN",
    {
      name: "COMTRAN",
      websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
      releases: [{ version: "unknown", date: "1957-01-01", kind: "first" }],
    },
    { influences: ["pl+flow-matic"], people: [["person+bob-bemer", "developer"]] },
  );

  /**/

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
      influences: ["pl+communicating-sequential-processes", "pl+euclid"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+james-cordy", "designer"],
        ["person+ric-holt", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+concurrent-ml", "Concurrent ML", {
    name: "Concurrent ML",
    websites: [{ kind: "wikipedia", title: "Concurrent ML", href: "https://en.wikipedia.org/wiki/Concurrent_ML" }],
  });

  /**/

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
    {
      influences: ["pl+prolog"],
      paradigms: ["para+constraint", "para+dec"],
      people: [["person+thom-fruhwirth", "designer"]],
    },
  );

  /**/

  lb.define(
    "pl+contextual-query",
    "CQL",
    {
      name: "CQL",
      websites: [{ kind: "wikipedia", title: "CQL", href: "https://en.wikipedia.org/wiki/Contextual_Query_Language" }],
    },
    { influences: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+control",
    "CL",
    {
      name: "CL",
      websites: [
        { kind: "wikipedia", title: "Control Language", href: "https://en.wikipedia.org/wiki/Control_Language" },
      ],
    },
    { influences: ["pl+pl-slash1"] },
  );

  /**/

  lb.define(
    "pl+coral",
    "Coral 66",
    {
      name: "Coral 66",
      websites: [{ kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
      references: {
        os: [
          {
            href: "https://web.archive.org/web/20210123102547/https://assets1.dxc.technology/manufacturing/downloads/MD_6841a-18_Coral_Offer_Overview_v4.pdf",
            title: "Gain the advantage with CORAL, CORAL+ and Context",
          },
        ],
      },
    },
    {
      implementations: ["pl+bcpl"],
      influences: ["pl+algol", "pl+fortran", "pl+jovial"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+philip-woodward", "designer"]],
      platforms: [
        "platf+bsd",
        "platf+dec",
        "platf+intel-8080",
        "platf+linux",
        "platf+openvms",
        "platf+unix",
        "platf+x86",
        "platf+zilog-z80",
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+coral-66",
    "Coral 66",
    {
      name: "Coral 66",
      websites: [{ kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" }],
    },
    { influences: ["pl+jovial"] },
  );

  /**/

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
    { people: [["person+a-k-dewdney", "developer"]] },
  );

  /**/

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

  /**/

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

  /**/

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
      influences: ["pl+cpl", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+multi", "para+reflective", "para+structured"],
      people: [
        ["person+robin-popplestone", "designer"],
        ["person+rod-burstall", "designer"],
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define("pl+cpl", "CPL", {
    name: "CPL",
    websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/CPL_(programming_language)" }],
  });

  /**/

  lb.define(
    "pl+cpp11",
    "C++11",
    {
      name: "C++11",
      websites: [{ kind: "wikipedia", title: "C++11", href: "https://en.wikipedia.org/wiki/C%2B%2B11" }],
    },
    { influences: ["pl+d"] },
  );

  /**/

  lb.define(
    "pl+cpp14",
    "C++14",
    {
      name: "C++14",
      websites: [{ kind: "wikipedia", title: "C++14", href: "https://en.wikipedia.org/wiki/C%2B%2B14" }],
    },
    { influences: ["pl+d"] },
  );

  /**/

  lb.define(
    "pl+cpp17",
    "C++17",
    {
      name: "C++17",
      websites: [{ kind: "wikipedia", title: "C++17", href: "https://en.wikipedia.org/wiki/C%2B%2B17" }],
    },
    { influences: ["pl+d"] },
  );

  /**/

  lb.define(
    "pl+cpp20",
    "C++20",
    {
      name: "C++20",
      websites: [{ kind: "wikipedia", title: "C++20", href: "https://en.wikipedia.org/wiki/C%2B%2B20" }],
    },
    { influences: ["pl+d"] },
  );

  /**/

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
      references: {
        os: [
          {
            href: "http://docwiki.embarcadero.com/RADStudio/Sydney/en/Installation_Notes#Operating_System_Requirements",
            title: "Installation Notes - Operating System Requirements",
          },
        ],
      },
    },
    {
      influences: ["pl+cpp", "pl+delphi"],
      licenses: ["lic+trialware"],
      paradigms: ["para+functional", "para+objects", "para+strongly"],
      platforms: ["platf+win", "platf+x64"],
    },
  );

  /**/

  lb.define("pl+cray", "Cray", {
    name: "Cray",
    websites: [{ kind: "wikipedia", title: "Cray", href: "https://en.wikipedia.org/wiki/Cray" }],
  });

  /**/

  lb.define("pl+cray-mta", "Cray MTA", {
    name: "Cray MTA",
    websites: [{ kind: "wikipedia", title: "Cray MTA", href: "https://en.wikipedia.org/wiki/Cray_MTA" }],
  });

  /**/

  lb.define("pl+cray-xmt", "XMT", {
    name: "XMT",
    websites: [{ kind: "wikipedia", title: "XMT", href: "https://en.wikipedia.org/wiki/Cray_XMT" }],
  });

  /**/

  lb.define(
    "pl+croquet-project",
    "Croquet",
    {
      name: "Croquet",
      websites: [{ kind: "wikipedia", title: "Croquet", href: "https://en.wikipedia.org/wiki/Croquet_Project" }],
    },
    { influences: ["pl+etoys", "pl+squeak"] },
  );

  /**/

  lb.define("pl+cuda", "CUDA", {
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  /**/

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
      people: [["person+jorgen-brandt", "designer"]],
      platforms: ["platf+linux", "platf+mac"],
      typeSystems: ["tsys+static"],
    },
  );

  /**/

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
      paradigms: ["para+markup", "para+multi", "para+objects"],
      people: [["person+steve-ward", "designer"]],
      platforms: ["platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

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
    { influences: ["pl+c", "pl+ml"] },
  );

  /**/

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
      paradigms: ["para+functional", "para+imperative"],
      people: [["person+k-rustan-m-leino", "designer"]],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+darsimco",
    "DARSIMCO",
    {
      name: "DARSIMCO",
      websites: [{ kind: "wikipedia", title: "DARSIMCO", href: "https://en.wikipedia.org/wiki/DARSIMCO" }],
      releases: [{ version: "unknown", date: "1956-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+assembly"],
      paradigms: ["para+imperative"],
      people: [["person+john-g-kemeny", "designer"]],
    },
  );

  /**/

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
    { influences: ["pl+dartmouth-algol-30"] },
  );

  /**/

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
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      people: [["person+gaston-gonnet", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+dataflow", "dataflow", {
    name: "dataflow",
    websites: [{ kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" }],
  });

  /**/

  lb.define(
    "pl+dataparallel-c",
    "Dataparallel-C",
    {
      name: "Dataparallel-C",
      websites: [{ kind: "wikipedia", title: "Dataparallel-C", href: "https://en.wikipedia.org/wiki/Dataparallel-C" }],
    },
    { influences: ["pl+c-star"] },
  );

  /**/

  lb.define("pl+datomic", "Datomic", {
    name: "Datomic",
    websites: [{ kind: "wikipedia", title: "Datomic", href: "https://en.wikipedia.org/wiki/Datomic" }],
  });

  /**/

  lb.define(
    "pl+dc",
    "dc",
    {
      name: "dc",
      websites: [{ kind: "wikipedia", title: "dc", href: "https://en.wikipedia.org/wiki/Dc_(computer_program)" }],
    },
    { platforms: ["platf+cross-platform"] },
  );

  /**/

  lb.define("pl+ddc-i", "DDC-I", {
    name: "DDC-I",
    websites: [{ kind: "wikipedia", title: "DDC-I", href: "https://en.wikipedia.org/wiki/DDC-I" }],
  });

  /**/

  lb.define("pl+dec", "SRC", {
    name: "SRC",
    websites: [
      { kind: "wikipedia", title: "DEC", href: "https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" },
      { kind: "wikipedia", title: "SRC", href: "https://en.wikipedia.org/wiki/DEC_Systems_Research_Center" },
    ],
  });

  /**/

  lb.define(
    "pl+dependent-ml",
    "Dependent ML",
    {
      name: "Dependent ML",
      websites: [{ kind: "wikipedia", title: "Dependent ML", href: "https://en.wikipedia.org/wiki/Dependent_ML" }],
    },
    { dialects: ["pl+ats"] },
  );

  /**/

  lb.define("pl+diagram", "diagrams", {
    name: "diagrams",
    websites: [{ kind: "wikipedia", title: "diagrams", href: "https://en.wikipedia.org/wiki/Diagram" }],
  });

  /**/

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
      influences: ["pl+basic", "pl+cobol", "pl+fortran"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+static"],
    },
  );

  /**/

  lb.define("pl+digital-command", "DCL", {
    name: "DCL",
    websites: [{ kind: "wikipedia", title: "DCL", href: "https://en.wikipedia.org/wiki/DIGITAL_Command_Language" }],
  });

  /**/

  lb.define("pl+dis-virtual-machine", "Dis virtual machine", {
    name: "Dis virtual machine",
    websites: [
      { kind: "wikipedia", title: "Dis virtual machine", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" },
    ],
  });

  /**/

  lb.define(
    "pl+dope",
    "DOPE (Dartmouth Oversimplified Programming Experiment)",
    {
      name: "DOPE (Dartmouth Oversimplified Programming Experiment)",
      websites: [
        {
          kind: "wikipedia",
          title: "DOPE",
          href: "https://en.wikipedia.org/wiki/DOPE_(Dartmouth_Oversimplified_Programming_Experiment)",
        },
      ],
      releases: [{ version: "unknown", date: "1962-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+assembly"],
      influences: ["pl+darsimco", "pl+dartmouth-algol-30", "pl+fortran", "pl+fortran-95"],
      paradigms: ["para+imperative"],
      people: [
        ["person+john-g-kemeny", "designer"],
        ["person+sidney-marshall", "developer"],
      ],
    },
  );

  /**/

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
      influences: ["pl+algol-68", "pl+c", "pl+pascal"],
      paradigms: ["para+imperative", "para+structured"],
      platforms: ["platf+amiga"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      references: {
        influenced: [
          {
            href: "http://laser.inf.ethz.ch/2014/material/terekhov/terekhov_report.pdf",
            title:
              "Terekhov, Andrey; Bryksin, Timofey; Litvinov, Yurii. How to make visual modeling more attractive to software developers / 11th LASER Summer School on Software Engineering. Leading-Edge Software Engineering. September 7-13, 2014 - Elba Island, Italy",
          },
        ],
      },
    },
    { paradigms: ["para+visual"] },
  );

  /**/

  lb.define(
    "pl+dsssl",
    "Document Style Semantics and Specification Language",
    {
      name: "Document Style Semantics and Specification Language",
      websites: [{ kind: "wikipedia", title: "DSSSL", href: "https://en.wikipedia.org/wiki/DSSSL" }],
    },
    { paradigms: ["para+style", "para+transformation"] },
  );

  /**/

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
    { licenses: ["lic+proprietary"], people: [["person+dassault-systemes", "developer"]], platforms: ["platf+x86-64"] },
  );

  /**/

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
      influences: ["pl+java", "pl+joule"],
      licenses: ["lic+free"],
      paradigms: ["para+message", "para+multi", "para+objects"],
      people: [["person+mark-s-miller", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      people: [["person+steven-ericsson-zenith", "designer"]],
      platforms: ["platf+parallel-computing"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

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
      paradigms: ["para+compiled", "para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

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

  /**/

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

  /**/

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

  /**/

  lb.define("pl+ed", "ed", {
    name: "ed",
    websites: [{ kind: "wikipedia", title: "ed", href: "https://en.wikipedia.org/wiki/Ed_(text_editor)" }],
  });

  /**/

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
      influences: ["pl+algol-60", "pl+atlas-autocode"],
      paradigms: ["para+imperative", "para+structured"],
      people: [
        ["person+david-rees", "designer"],
        ["person+hamish-dewar", "designer"],
        ["person+m-m-barritt", "designer"],
        ["person+peter-d-schofield", "designer"],
        ["person+peter-d-stephens", "designer"],
        ["person+peter-robertson", "designer"],
        ["person+roderick-mcleod", "designer"],
      ],
      platforms: ["platf+dos", "platf+linux", "platf+win", "platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+edison-design-group", "EDG", {
    name: "EDG",
    websites: [{ kind: "wikipedia", title: "EDG", href: "https://en.wikipedia.org/wiki/Edison_Design_Group" }],
  });

  /**/

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

  /**/

  lb.define("pl+eiffelstudio", "EiffelStudio", {
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  /**/

  lb.define("pl+eispack", "EISPACK", {
    name: "EISPACK",
    websites: [{ kind: "wikipedia", title: "EISPACK", href: "https://en.wikipedia.org/wiki/EISPACK" }],
  });

  /**/

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
      influences: ["pl+algol-68"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+cha-koster", "designer"]],
      platforms: ["platf+zilog-z80"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      influences: ["pl+pascal", "pl+simula", "pl+simula-67", "pl+smalltalk"],
      paradigms: ["para+objects"],
      people: [["person+henry-m-levy", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      references: { license: [{ href: "https://code.google.com/p/epigram/", title: "Epigram – Official website" }] },
    },
    {
      influences: ["pl+alf"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional"],
      people: [["person+conor-mcbride", "designer"]],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dependent", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+esoteric", "FALSE", {
    name: "FALSE",
    websites: [
      { kind: "wikipedia", title: "FALSE", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language#FALSE" },
    ],
  });

  /**/

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
      influences: ["pl+alphard", "pl+bcpl", "pl+clu", "pl+lis", "pl+mesa", "pl+modula", "pl+pascal"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+butler-lampson", "designer"],
        ["person+gerald-j-popek", "designer"],
        ["person+james-cordy", "developer"],
        ["person+james-g-mitchell", "designer"],
        ["person+jim-horning", "designer"],
        ["person+ric-holt", "developer"],
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      influences: ["pl+algol-60"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [["person+niklaus-wirth", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define("pl+excel-function", "Excel functions", {
    name: "Excel functions",
    websites: [{ kind: "wikipedia", title: "Excel functions", href: "https://en.wikipedia.org/wiki/Excel_function" }],
  });

  /**/

  lb.define("pl+excel-macro", "Excel macros", {
    name: "Excel macros",
    websites: [{ kind: "wikipedia", title: "Excel macros", href: "https://en.wikipedia.org/wiki/Excel_macro" }],
  });

  /**/

  lb.define("pl+exec-2", "EXEC 2", {
    name: "EXEC 2",
    websites: [{ kind: "wikipedia", title: "EXEC 2", href: "https://en.wikipedia.org/wiki/EXEC_2" }],
  });

  /**/

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
      influences: ["pl+algol-60"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      influences: ["pl+fortran-95"],
      paradigms: ["para+array", "para+imperative", "para+modular"],
      typeSystems: ["tsys+manifest", "tsys+static"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+fanuc", "FANUC", {
    name: "FANUC",
    websites: [{ kind: "wikipedia", title: "FANUC", href: "https://en.wikipedia.org/wiki/FANUC" }],
  });

  /**/

  lb.define("pl+fargo", "FARGO", {
    name: "FARGO",
    websites: [
      { kind: "wikipedia", title: "FARGO", href: "https://en.wikipedia.org/wiki/FARGO_(programming_language)" },
    ],
  });

  /**/

  lb.define(
    "pl+ffp",
    "FP",
    {
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FFP_(programming_language)" }],
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
      references: {
        influenced_by: [
          {
            href: "https://web.archive.org/web/20160311204021/http://haskell.cs.yale.edu/wp-content/uploads/2011/01/cs.pdf",
            title: "The Conception, Evolution, and Application of Functional Programming Languages",
          },
        ],
      },
    },
    { influences: ["pl+apl"], paradigms: ["para+function"], people: [["person+john-backus", "designer"]] },
  );

  /**/

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
      people: [["person+snorri-agnarsson", "designer"]],
      platforms: ["platf+dos"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      people: [["person+john-backus", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define("pl+flacc", "FLACC", {
    name: "FLACC",
    websites: [{ kind: "wikipedia", title: "FLACC", href: "https://en.wikipedia.org/wiki/FLACC" }],
  });

  /**/

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
      people: [
        ["person+grace-hopper", "designer"],
        ["person+remington-rand", "designer"],
      ],
    },
  );

  /**/

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
    { influences: ["pl+joss"], paradigms: ["para+imperative"], people: [["person+richard-merrill", "designer"]] },
  );

  /**/

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
      influences: ["pl+fortran", "pl+fortran-95", "pl+haskell", "pl+scala"],
      licenses: ["lic+bsd-s"],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+static"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+fp",
    "FP",
    {
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FP_(programming_language)" }],
    },
    { influences: ["pl+apl"] },
  );

  /**/

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
    { influences: ["pl+c"], people: [["person+john-bass", "developer"]], platforms: ["platf+fpga"] },
  );

  /**/

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
    { licenses: ["lic+bsd-s", "lic+lgpl"] },
  );

  /**/

  lb.define("pl+free-university-of-berlin", "FU Berlin", {
    name: "FU Berlin",
    websites: [
      { kind: "wikipedia", title: "FU Berlin", href: "https://en.wikipedia.org/wiki/Free_University_of_Berlin" },
    ],
  });

  /**/

  lb.define("pl+functional-logic-programming", "Functional logic programming", {
    name: "Functional logic programming",
    websites: [
      {
        kind: "wikipedia",
        title: "Functional logic programming",
        href: "https://en.wikipedia.org/wiki/Functional_logic_programming",
      },
    ],
  });

  /**/

  lb.define("pl+functional-programming", "functional programming", {
    name: "functional programming",
    websites: [
      {
        kind: "wikipedia",
        title: "functional programming",
        href: "https://en.wikipedia.org/wiki/Functional_programming",
      },
    ],
  });

  /**/

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

  /**/

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

  /**/

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
        "platf+amazon-firetv",
        "platf+android",
        "platf+ios",
        "platf+linux",
        "platf+mac",
        "platf+nintendo-switch",
        "platf+playstation",
        "platf+web",
        "platf+win",
        "platf+xbox",
      ],
    },
  );

  /**/

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
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+distributed", "para+in", "para+objects", "para+process"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+linux", "platf+mac", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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

  /**/

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

  /**/

  lb.define(
    "pl+generic-java",
    "Generic Java",
    {
      name: "Generic Java",
      websites: [{ kind: "wikipedia", title: "Generic Java", href: "https://en.wikipedia.org/wiki/Generic_Java" }],
    },
    { influences: ["pl+pizza"] },
  );

  /**/

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
      influences: ["pl+boo", "pl+d", "pl+object-pascal", "pl+python"],
      licenses: ["lic+lgpl"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [["person+jamie-mccracken", "designer"]],
      platforms: ["platf+cross-platform", "platf+glib"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+ghostscript", "Ghostscript", {
    name: "Ghostscript",
    websites: [{ kind: "wikipedia", title: "Ghostscript", href: "https://en.wikipedia.org/wiki/Ghostscript" }],
  });

  /**/

  lb.define("pl+glasgow-haskell-compiler", "GHC", {
    name: "GHC",
    websites: [{ kind: "wikipedia", title: "GHC", href: "https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler" }],
  });

  /**/

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
        { version: "1.0.5", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/gnudatalanguage/gdl/releases/tag/v1.0.5", title: "Release 1.0.5" },
        ],
      },
    },
    { licenses: ["lic+gpl"], people: [["person+marc-schellens", "developer"]] },
  );

  /**/

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

  /**/

  lb.define("pl+gnu-m4", "GNU m4", {
    name: "GNU m4",
    websites: [{ kind: "wikipedia", title: "GNU m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }],
  });

  /**/

  lb.define(
    "pl+gnu-smalltalk",
    "GNU Smalltalk",
    {
      name: "GNU Smalltalk",
      websites: [
        { kind: "wikipedia", title: "GNU Smalltalk", href: "https://en.wikipedia.org/wiki/GNU_Smalltalk" },
        {
          kind: "homepage",
          title: "https://www.gnu.org/software/smalltalk/",
          href: "https://www.gnu.org/software/smalltalk/",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/GNU_Smalltalk_logo.svg" }],
      releases: [
        { version: "unknown", date: "2003-01-12", kind: "first" },
        { version: "unknown", date: "2013-04-08", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl", "lic+lgpl"] },
  );

  /**/

  lb.define("pl+gnucobol", "GnuCOBOL", {
    name: "GnuCOBOL",
    websites: [{ kind: "wikipedia", title: "GnuCOBOL", href: "https://en.wikipedia.org/wiki/GnuCOBOL" }],
  });

  /**/

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
      references: {
        influenced_by: [
          {
            href: "https://web.archive.org/web/20100722010320/http://www.informationweek.com/news/software/web_services/showArticle.jhtml?articleID=221601351",
            title: "Google 'Go' Name Brings Accusations Of 'Evil'",
          },
        ],
      },
    },
    {
      influences: ["pl+prolog"],
      licenses: ["lic+gpl-2"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+logic", "para+multi", "para+objects"],
      people: [["person+keith-clark", "designer"]],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

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
      people: [
        ["person+john-lloyd", "designer"],
        ["person+patricia-hill", "designer"],
      ],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

  lb.define("pl+gofer", "Gofer", {
    name: "Gofer",
    websites: [
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(software)" },
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(programming_language)" },
    ],
  });

  /**/

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
      people: [["person+insa-lyon", "developer"]],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  /**/

  lb.define("pl+google-apps-script", "Apps Script", {
    name: "Apps Script",
    websites: [
      { kind: "wikipedia", title: "Google Apps Script", href: "https://en.wikipedia.org/wiki/Google_Apps_Script" },
      { kind: "homepage", title: "script.google.com", href: "https://script.google.com" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" }],
    references: {
      initial_release: [
        { href: "http://news.cnet.com/8301-1001_3-10314002-92.html", title: "Google Apps Script gets green light" },
      ],
    },
    releases: [{ version: "unknown", date: "2009-08-19", kind: "first" }],
  });

  /**/

  lb.define("pl+google-native-client", "PNaCl", {
    name: "PNaCl",
    websites: [{ kind: "wikipedia", title: "PNaCl", href: "https://en.wikipedia.org/wiki/Google_Native_Client" }],
  });

  /**/

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
    { people: [["person+geoffrey-gordon", "designer"]] },
  );

  /**/

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

  /**/

  lb.define("pl+gradle", "Gradle", {
    name: "Gradle",
    websites: [{ kind: "wikipedia", title: "Gradle", href: "https://en.wikipedia.org/wiki/Gradle" }],
  });

  /**/

  lb.define("pl+grails", "Grails", {
    name: "Grails",
    websites: [{ kind: "wikipedia", title: "Grails", href: "https://en.wikipedia.org/wiki/Grails_(framework)" }],
  });

  /**/

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

  /**/

  lb.define("pl+green-hills-software", "Green Hills Software", {
    name: "Green Hills Software",
    websites: [
      { kind: "wikipedia", title: "Green Hills Software", href: "https://en.wikipedia.org/wiki/Green_Hills_Software" },
    ],
  });

  /**/

  lb.define(
    "pl+gt.m",
    "GT.M",
    { name: "GT.M", websites: [{ kind: "wikipedia", title: "GT.M", href: "https://en.wikipedia.org/wiki/GT.M" }] },
    { influences: ["pl+mumps"] },
  );

  /**/

  lb.define("pl+haas-automation", "Haas", {
    name: "Haas",
    websites: [{ kind: "wikipedia", title: "Haas", href: "https://en.wikipedia.org/wiki/Haas_Automation" }],
  });

  /**/

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

  /**/

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
      paradigms: ["para+concurrent", "para+imperative", "para+structured"],
      people: [["person+siemens-eda", "developer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+manifest", "tsys+nominative", "tsys+static"],
    },
  );

  /**/

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
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      people: [
        ["person+antonio-linares", "designer"],
        ["person+viktor-szakats", "developer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+safe", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+heidenhain", "Heidenhain", {
    name: "Heidenhain",
    websites: [{ kind: "wikipedia", title: "Heidenhain", href: "https://en.wikipedia.org/wiki/Heidenhain" }],
  });

  /**/

  lb.define("pl+hitachi", "Hitachi", {
    name: "Hitachi",
    websites: [{ kind: "wikipedia", title: "Hitachi", href: "https://en.wikipedia.org/wiki/Hitachi" }],
  });

  /**/

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
    { licenses: ["lic+proprietary"], people: [["person+andreas-falkenhahn", "developer"]] },
  );

  /**/

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
      references: {
        influenced_by: [
          {
            href: "http://hop.inria.fr/usr/local/lib/hop/2.2.0/weblets/home/articles/hop-lang/article.html",
            title: "http://hop.inria.fr/usr/local/lib/hop/2.2.0/weblets/home/articles/hop-lang/article.html",
          },
        ],
      },
    },
    {
      influences: ["pl+scheme"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+multi"],
      people: [["person+manuel-serrano", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+hope", "Hope", {
    name: "Hope",
    websites: [{ kind: "wikipedia", title: "Hope", href: "https://en.wikipedia.org/wiki/Hope_(programming_language)" }],
  });

  /**/

  lb.define("pl+html", "HTML", {
    name: "HTML",
    websites: [{ kind: "wikipedia", title: "HTML", href: "https://en.wikipedia.org/wiki/HTML" }],
  });

  /**/

  lb.define("pl+html5", "HTML5", {
    name: "HTML5",
    websites: [{ kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" }],
  });

  /**/

  lb.define("pl+hugs", "Hugs", {
    name: "Hugs",
    websites: [{ kind: "wikipedia", title: "Hugs", href: "https://en.wikipedia.org/wiki/Hugs_(interpreter)" }],
  });

  /**/

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
      people: [
        ["person+andrew-ireland", "designer"],
        ["person+andy-wallace", "designer"],
        ["person+greg-michaelson", "designer"],
      ],
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+red-hat"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+ibm", "IBM", {
    name: "IBM",
    websites: [{ kind: "wikipedia", title: "IBM", href: "https://en.wikipedia.org/wiki/IBM" }],
  });

  /**/

  lb.define("pl+ibm-704", "IBM 704", {
    name: "IBM 704",
    websites: [{ kind: "wikipedia", title: "IBM 704", href: "https://en.wikipedia.org/wiki/IBM_704" }],
  });

  /**/

  lb.define("pl+ibm-709-slash90-9pac", "9PAC", {
    name: "9PAC",
    websites: [{ kind: "wikipedia", title: "9PAC", href: "https://en.wikipedia.org/wiki/IBM_709/90_9PAC" }],
  });

  /**/

  lb.define("pl+ibm-7090", "7090", {
    name: "7090",
    websites: [{ kind: "wikipedia", title: "7090", href: "https://en.wikipedia.org/wiki/IBM_7090" }],
  });

  /**/

  lb.define("pl+ibm-cobol", "IBM COBOL", {
    name: "IBM COBOL",
    websites: [{ kind: "wikipedia", title: "IBM COBOL", href: "https://en.wikipedia.org/wiki/IBM_COBOL" }],
  });

  /**/

  lb.define("pl+ibm-informix-4gl", "IBM Informix-4GL", {
    name: "IBM Informix-4GL",
    websites: [
      { kind: "wikipedia", title: "IBM Informix-4GL", href: "https://en.wikipedia.org/wiki/IBM_Informix-4GL" },
    ],
    references: {
      initial_release: [
        {
          href: "https://books.google.com/books?id=QKWy2rYxAQQC&pg=PA12",
          title: "RDS announces SQL-based fourth-generation language: Targets application development on Unix",
        },
      ],
    },
    releases: [{ version: "unknown", date: "1986-01-01", kind: "first" }],
  });

  /**/

  lb.define(
    "pl+ibm-pl-slashs",
    "PL/S",
    { name: "PL/S", websites: [{ kind: "wikipedia", title: "PL/S", href: "https://en.wikipedia.org/wiki/IBM_PL/S" }] },
    { influences: ["pl+pl-slash1"] },
  );

  /**/

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
      dialects: ["pl+rpg-ii", "pl+rpg-iii", "pl+rpg-iv"],
      influences: ["pl+fargo", "pl+ibm-709-slash90-9pac"],
      paradigms: ["para+multi"],
      platforms: ["platf+dos", "platf+openvms", "platf+vse", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+ibm-system-slash360", "S/360", {
    name: "S/360",
    websites: [{ kind: "wikipedia", title: "S/360", href: "https://en.wikipedia.org/wiki/IBM_System/360" }],
  });

  /**/

  lb.define("pl+ibm-system-slash370", "S/370", {
    name: "S/370",
    websites: [{ kind: "wikipedia", title: "IBM System/370", href: "https://en.wikipedia.org/wiki/IBM_System/370" }],
  });

  /**/

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

  /**/

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

  /**/

  lb.define("pl+ict-1900-series", "ICL 1900", {
    name: "ICL 1900",
    websites: [{ kind: "wikipedia", title: "ICL 1900", href: "https://en.wikipedia.org/wiki/ICT_1900_series" }],
  });

  /**/

  lb.define("pl+id", "Id", {
    name: "Id",
    websites: [{ kind: "wikipedia", title: "Id", href: "https://en.wikipedia.org/wiki/Id_(programming_language)" }],
  });

  /**/

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
      influences: ["pl+fortran-95"],
      paradigms: ["para+array"],
      people: [["person+david-stern", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
      implementations: ["pl+algol-60"],
      influences: ["pl+algol-60"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+extensible", "para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+edgar-t-irons", "designer"],
        ["person+national-security-agency", "developer"],
      ],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  /**/

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
      people: [
        ["person+allen-newell", "designer"],
        ["person+cliff-shaw", "designer"],
        ["person+herbert-a-simon", "designer"],
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define("pl+inscript", "InScript", {
    name: "InScript",
    websites: [
      { kind: "wikipedia", title: "InScript", href: "https://en.wikipedia.org/wiki/InScript_(JavaScript_engine)" },
    ],
  });

  /**/

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

  /**/

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
      references: {
        stable_release: [
          {
            href: "https://software.intel.com/content/www/us/en/develop/articles/oneapi-standalone-components.html#compilerclassic",
            title: "Intel® C++ Compiler Classic",
          },
        ],
      },
      releases: [{ version: "2021.10.0", date: "2021-01-01", kind: "stable" }],
    },
    { licenses: ["lic+freeware", "lic+proprietary"] },
  );

  /**/

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
      influences: ["pl+cilk-plus", "pl+intel-array-building-blocks", "pl+threading-building-blocks"],
      paradigms: ["para+imperative", "para+parallel", "para+structured"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+intercal", "INTERCAL", {
    name: "INTERCAL",
    websites: [{ kind: "wikipedia", title: "INTERCAL", href: "https://en.wikipedia.org/wiki/INTERCAL" }],
  });

  /**/

  lb.define(
    "pl+intermediate",
    "Intermediate programming language",
    {
      name: "Intermediate programming language",
      websites: [
        {
          kind: "wikipedia",
          title: "Intermediate programming language",
          href: "https://en.wikipedia.org/wiki/Intermediate_programming_language",
        },
      ],
    },
    { influences: ["pl+short-code"] },
  );

  /**/

  lb.define("pl+interpress", "Interpress", {
    name: "Interpress",
    websites: [{ kind: "wikipedia", title: "Interpress", href: "https://en.wikipedia.org/wiki/Interpress" }],
  });

  /**/

  lb.define(
    "pl+intlab",
    "INTLAB",
    {
      name: "INTLAB",
      websites: [{ kind: "wikipedia", title: "INTLAB", href: "https://en.wikipedia.org/wiki/INTLAB" }],
    },
    { influences: ["pl+matlab"] },
  );

  /**/

  lb.define(
    "pl+isetl",
    "ISETL",
    { name: "ISETL", websites: [{ kind: "wikipedia", title: "ISETL", href: "https://en.wikipedia.org/wiki/ISETL" }] },
    { influences: ["pl+setl"] },
  );

  /**/

  lb.define(
    "pl+iswim",
    "ISWIM",
    {
      name: "ISWIM",
      websites: [{ kind: "wikipedia", title: "ISWIM", href: "https://en.wikipedia.org/wiki/ISWIM" }],
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol-60", "pl+lisp"],
      paradigms: ["para+functional", "para+imperative"],
      people: [["person+peter-landin", "designer"]],
    },
  );

  /**/

  lb.define(
    "pl+jakarta-server-pages",
    "JSP",
    {
      name: "JSP",
      websites: [{ kind: "wikipedia", title: "JSP", href: "https://en.wikipedia.org/wiki/Jakarta_Server_Pages" }],
    },
    { influences: ["pl+php"] },
  );

  /**/

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
      people: [
        ["person+christopher-lutz", "designer"],
        ["person+howard-derby", "designer"],
        ["person+robert-gluck", "designer"],
        ["person+tetsuo-yokoyama", "designer"],
      ],
    },
  );

  /**/

  lb.define(
    "pl+java-ee",
    "Java EE",
    {
      name: "Java EE",
      websites: [{ kind: "wikipedia", title: "Java EE", href: "https://en.wikipedia.org/wiki/Java_EE" }],
    },
    { influences: ["pl+gemstone"] },
  );

  /**/

  lb.define(
    "pl+java-object-oriented-querying",
    "jOOQ",
    {
      name: "jOOQ",
      websites: [
        { kind: "wikipedia", title: "jOOQ", href: "https://en.wikipedia.org/wiki/Java_Object_Oriented_Querying" },
        { kind: "homepage", title: "www.jooq.org", href: "https://www.jooq.org/" },
      ],
      references: { stable_release: [{ href: "https://github.com/jOOQ/jOOQ/tags", title: "Tags · jOOQ/jOOQ" }] },
      releases: [{ version: "3.19.2", date: "2024-01-12", kind: "stable" }],
    },
    {
      influences: ["pl+sql"],
      licenses: ["lic+apache"],
      people: [["person+data-geekery-gmbh", "developer"]],
      platforms: ["platf+jvm"],
    },
  );

  /**/

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

  /**/

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
    { licenses: ["lic+gpl"], platforms: ["platf+cross-platform", "platf+jvm"] },
  );

  /**/

  lb.define("pl+jena", "Jena", {
    name: "Jena",
    websites: [{ kind: "wikipedia", title: "Jena", href: "https://en.wikipedia.org/wiki/Jena_(framework)" }],
  });

  /**/

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
    { licenses: ["lic+proprietary"], people: [["person+modelon-ab", "developer"]] },
  );

  /**/

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

  /**/

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
      paradigms: ["para+imperative", "para+non"],
      people: [["person+cliff-shaw", "designer"]],
    },
  );

  /**/

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
      influences: ["pl+actor-model", "pl+logic-programming", "pl+t"],
      paradigms: ["para+dataflow", "para+distributed", "para+multi", "para+objects"],
      people: [["person+e-dean-tribble", "designer"]],
    },
  );

  /**/

  lb.define(
    "pl+jovial",
    "JOVIAL",
    {
      name: "JOVIAL",
      websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
      references: {
        developer: [{ href: "http://www.seadeo.com/", title: "Software Engineering Associates, Inc. (SEA)" }],
      },
      releases: [{ version: "unknown", date: "1960-01-01", kind: "first" }],
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

  /**/

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
      influences: ["pl+ffp", "pl+forth", "pl+fp", "pl+scheme"],
      paradigms: ["para+concatenative", "para+functional", "para+multi", "para+stack"],
      people: [
        ["person+john-cowan", "developer"],
        ["person+manfred-von-thun", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      references: {
        filename_extensions: [
          { href: "https://msdn.microsoft.com/en-us/library/67w03h17(v=VS.85).aspx", title: "Types of Script Files" },
        ],
      },
      extensions: [".jse", ".wsc (", ")"],
    },
    {
      implementations: ["pl+active-scripting", "pl+jscript-.net"],
      platforms: ["platf+win"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  /**/

  lb.define(
    "pl+jscript-.net",
    "JScript .NET",
    {
      name: "JScript .NET",
      websites: [{ kind: "wikipedia", title: "JScript .NET", href: "https://en.wikipedia.org/wiki/JScript_.NET" }],
      extensions: [],
    },
    {
      influences: ["pl+ecmascript", "pl+jscript"],
      paradigms: ["para+multi"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  /**/

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
      influences: ["pl+c", "pl+c-sharp", "pl+cpp", "pl+java", "pl+javascript"],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+objects", "para+structured"],
      people: [
        ["person+anton-rapetov", "designer"],
        ["person+roger-poon", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+static"],
    },
  );

  /**/

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
      references: {
        initial_release: [{ href: "https://hg.python.org/jython/file/tip/NEWS", title: "jython: 3d8067c56a1d NEWS" }],
        stable_release: [{ href: "https://github.com/jython/jython/releases/tag/v2.7.3", title: "Release v2.7.3" }],
      },
      releases: [
        { version: "unknown", date: "2001-01-17", kind: "first" },
        { version: "2.7.3", date: "2022-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+python-foundation"], platforms: ["platf+jvm"] },
  );

  /**/

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
    { influences: ["pl+pascal"], paradigms: ["para+imperative"], people: [["person+richard-e-pattis", "designer"]] },
  );

  /**/

  lb.define(
    "pl+kent-recursive-calculator",
    "KRC",
    {
      name: "KRC",
      websites: [{ kind: "wikipedia", title: "KRC", href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator" }],
      releases: [{ version: "unknown", date: "1981-01-01", kind: "first" }],
    },
    { influences: ["pl+sasl"], paradigms: ["para+functional"], people: [["person+david-turner", "designer"]] },
  );

  /**/

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
      references: {
        initial_release: [{ href: "https://kivy.org/#changelog", title: "Kivy changelog" }],
        stable_release: [{ href: "https://github.com/kivy/kivy/releases/tag/2.3.0", title: "Kivy 2.3.0" }],
      },
      releases: [
        { version: "unknown", date: "2011-02-01", kind: "first" },
        { version: "2.3.0", date: "2024-01-05", kind: "stable" },
      ],
    },
    { licenses: ["lic+free", "lic+mit"] },
  );

  /**/

  lb.define(
    "pl+kl0",
    "KL0",
    { name: "KL0", websites: [{ kind: "wikipedia", title: "KL0", href: "https://en.wikipedia.org/wiki/KL0" }] },
    { influences: ["pl+prolog"] },
  );

  /**/

  lb.define(
    "pl+kl1",
    "KL1",
    { name: "KL1", websites: [{ kind: "wikipedia", title: "KL1", href: "https://en.wikipedia.org/wiki/KL1" }] },
    { influences: ["pl+prolog"] },
  );

  /**/

  lb.define("pl+kodu-game-lab", "Kodu Game Lab", {
    name: "Kodu Game Lab",
    websites: [
      { kind: "wikipedia", title: "Kodu Game Lab", href: "https://en.wikipedia.org/wiki/Kodu_Game_Lab" },
      { kind: "homepage", title: "kodugamelab.com", href: "http://kodugamelab.com" },
    ],
    references: {
      initial_release: [
        {
          href: "http://catalog.create.msdn.com/en-US/GameDetails.aspx?catalogEntryId=57f1e907-089a-4b5e-a4d4-4392385051f7&type=2",
          title: "App Hub - game details",
        },
      ],
      stable_release: [
        { href: "https://github.com/scoy/KoduGameLab/commits/main", title: "Commits · scoy/KoduGameLab" },
      ],
    },
    releases: [
      { version: "unknown", date: "2009-06-30", kind: "first" },
      { version: "1.6.18.0", date: "2023-04-09", kind: "stable" },
    ],
  });

  /**/

  lb.define("pl+kornshell", "Ksh", {
    name: "Ksh",
    websites: [{ kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" }],
  });

  /**/

  lb.define(
    "pl+krl",
    "KRL",
    {
      name: "KRL",
      websites: [{ kind: "wikipedia", title: "KRL", href: "https://en.wikipedia.org/wiki/KRL_(programming_language)" }],
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    {
      paradigms: ["para+knowledge"],
      people: [
        ["person+daniel-g-bobrow", "developer"],
        ["person+terry-winograd", "developer"],
      ],
    },
  );

  /**/

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

  /**/

  lb.define("pl+lambda-calculus", "Lambda calculus", {
    name: "Lambda calculus",
    websites: [{ kind: "wikipedia", title: "Lambda calculus", href: "https://en.wikipedia.org/wiki/Lambda_calculus" }],
  });

  /**/

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

  /**/

  lb.define(
    "pl+language-integrated-query",
    "LINQ",
    {
      name: "LINQ",
      websites: [{ kind: "wikipedia", title: "LINQ", href: "https://en.wikipedia.org/wiki/Language_Integrated_Query" }],
    },
    { influences: ["pl+sql"] },
  );

  /**/

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

  /**/

  lb.define("pl+li-chen-wang", "Palo Alto Tiny BASIC", {
    name: "Palo Alto Tiny BASIC",
    websites: [
      { kind: "wikipedia", title: "Palo Alto Tiny BASIC", href: "https://en.wikipedia.org/wiki/Li-Chen_Wang" },
    ],
  });

  /**/

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

  /**/

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
      influences: ["pl+alef", "pl+c", "pl+communicating-sequential-processes", "pl+newsqueak", "pl+pascal"],
      licenses: ["lic+gpl"],
      paradigms: ["para+concurrent"],
      people: [["person+rob-pike", "designer"]],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+linpack", "LINPACK", {
    name: "LINPACK",
    websites: [{ kind: "wikipedia", title: "LINPACK", href: "https://en.wikipedia.org/wiki/LINPACK" }],
  });

  /**/

  lb.define("pl+linux", "Linux", {
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  /**/

  lb.define("pl+lis", "LIS", {
    name: "LIS",
    websites: [{ kind: "wikipedia", title: "LIS", href: "https://en.wikipedia.org/wiki/LIS_(programming_language)" }],
  });

  /**/

  lb.define(
    "pl+list-of-c-based-programming-languages",
    "C",
    {
      name: "C",
      websites: [
        { kind: "wikipedia", title: "C", href: "https://en.wikipedia.org/wiki/List_of_C-based_programming_languages" },
      ],
    },
    { dialects: ["pl+opencl"] },
  );

  /**/

  lb.define(
    "pl+list-of-object-oriented-programming-languages",
    "object-oriented programming languages",
    {
      name: "object-oriented programming languages",
      websites: [
        {
          kind: "wikipedia",
          title: "object-oriented programming languages",
          href: "https://en.wikipedia.org/wiki/List_of_object-oriented_programming_languages",
        },
      ],
    },
    { influences: ["pl+simula-67"] },
  );

  /**/

  lb.define("pl+list-of-relational-database-management-systems", "Many", {
    name: "Many",
    websites: [
      {
        kind: "wikipedia",
        title: "Many",
        href: "https://en.wikipedia.org/wiki/List_of_relational_database_management_systems",
      },
    ],
  });

  /**/

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
      people: [["person+aneil-mallavarapu", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+llvm", "LLVM", {
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  /**/

  lb.define("pl+logic-programming", "Concurrent Logic Programming", {
    name: "Concurrent Logic Programming",
    websites: [
      {
        kind: "wikipedia",
        title: "Concurrent Logic Programming",
        href: "https://en.wikipedia.org/wiki/Logic_Programming#Concurrent_logic_programming",
      },
    ],
  });

  /**/

  lb.define("pl+logic-programming-associates", "LPA Prolog", {
    name: "LPA Prolog",
    websites: [
      { kind: "wikipedia", title: "LPA Prolog", href: "https://en.wikipedia.org/wiki/Logic_Programming_Associates" },
    ],
  });

  /**/

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
      influences: ["pl+objective-c", "pl+prolog", "pl+smalltalk"],
      licenses: ["lic+apache", "lic+artistic-2"],
      paradigms: ["para+logic", "para+objects", "para+prototypes"],
      people: [["person+paulo-moura", "designer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define(
    "pl+lpc",
    "LPC",
    {
      name: "LPC",
      websites: [{ kind: "wikipedia", title: "LPC", href: "https://en.wikipedia.org/wiki/LPC_(programming_language)" }],
    },
    { influences: ["pl+c"] },
  );

  /**/

  lb.define("pl+luajit", "LuaJIT", {
    name: "LuaJIT",
    websites: [{ kind: "wikipedia", title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT" }],
  });

  /**/

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
      people: [
        ["person+edward-a-ashcroft", "designer"],
        ["person+william-w-wadge", "designer"],
      ],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+lyapas",
    "LYaPAS",
    {
      name: "LYaPAS",
      websites: [{ kind: "wikipedia", title: "LYaPAS", href: "https://en.wikipedia.org/wiki/LYaPAS" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
    },
    {
      paradigms: ["para+functional", "para+modular", "para+structured"],
      people: [["person+arkady-dzakrevskij", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
      people: [
        ["person+brian-kernighan", "designer"],
        ["person+dennis-ritchie", "designer"],
      ],
    },
  );

  /**/

  lb.define("pl+mac-os-x", "Mac OS X", {
    name: "Mac OS X",
    websites: [{ kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  /**/

  lb.define("pl+machine-code", "machine code", {
    name: "machine code",
    websites: [{ kind: "wikipedia", title: "machine code", href: "https://en.wikipedia.org/wiki/Machine_code" }],
  });

  /**/

  lb.define("pl+macos", "macOS", {
    name: "macOS",
    websites: [{ kind: "wikipedia", title: "macOS", href: "https://en.wikipedia.org/wiki/MacOS" }],
  });

  /**/

  lb.define("pl+macsyma", "Macsyma", {
    name: "Macsyma",
    websites: [{ kind: "wikipedia", title: "Macsyma", href: "https://en.wikipedia.org/wiki/Macsyma" }],
  });

  /**/

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
        "pl+philco",
        "pl+univac-1108",
      ],
      influences: ["pl+algol-58"],
      paradigms: ["para+imperative", "para+structured"],
      people: [
        ["person+bernard-galler", "designer"],
        ["person+bruce-arden", "designer"],
        ["person+robert-m-graham", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      references: {
        stable_release: [
          {
            href: "http://magma.maths.usyd.edu.au/magma/releasenotes/2/27/8/",
            title: "Summary of New Features in Magma V2.27-8",
          },
        ],
        written_in: [
          {
            href: "https://mathstats.uncg.edu/sites/number-theory/summerschool/2016/magma-general/magma-general-4.pdf",
            title: "What is Magma?",
          },
        ],
      },
      releases: [{ version: "2.27", date: "2023-02-22", kind: "stable" }],
    },
    { people: [["person+school-of-mathematics", "developer"]] },
  );

  /**/

  lb.define("pl+maker-culture", "Maker Culture", {
    name: "Maker Culture",
    websites: [{ kind: "wikipedia", title: "Maker Culture", href: "https://en.wikipedia.org/wiki/Maker_culture" }],
  });

  /**/

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
      references: {
        designed_by: [{ href: "https://esolangs.org/wiki/Malbolge", title: "Malbolge - Esolang" }],
        developer: [{ href: "https://esolangs.org/wiki/Malbolge", title: "Malbolge - Esolang" }],
      },
      releases: [{ version: "unknown", date: "1998-01-01", kind: "first" }],
      extensions: [".mal", ".mb"],
    },
    { influences: ["pl+befunge", "pl+brainfuck", "pl+intercal"], people: [["person+ben-olmstead", "designer"]] },
  );

  /**/

  lb.define("pl+maplesim", "MapleSim", {
    name: "MapleSim",
    websites: [{ kind: "wikipedia", title: "MapleSim", href: "https://en.wikipedia.org/wiki/MapleSim" }],
  });

  /**/

  lb.define("pl+mariadb", "MariaDB", {
    name: "MariaDB",
    websites: [{ kind: "wikipedia", title: "MariaDB", href: "https://en.wikipedia.org/wiki/MariaDB" }],
  });

  /**/

  lb.define(
    "pl+math-matic",
    "MATH-MATIC",
    {
      name: "MATH-MATIC",
      websites: [{ kind: "wikipedia", title: "MATH-MATIC", href: "https://en.wikipedia.org/wiki/MATH-MATIC" }],
      releases: [{ version: "unknown", date: "1957-01-01", kind: "first" }],
    },
    { influences: ["pl+flow-matic"], paradigms: ["para+imperative"], people: [["person+remington-rand", "designer"]] },
  );

  /**/

  lb.define("pl+mathematical-notation", "Mathematical notation", {
    name: "Mathematical notation",
    websites: [
      {
        kind: "wikipedia",
        title: "Mathematical notation",
        href: "https://en.wikipedia.org/wiki/Mathematical_notation",
      },
    ],
  });

  /**/

  lb.define(
    "pl+mblock",
    "mBlock",
    {
      name: "mBlock",
      websites: [{ kind: "wikipedia", title: "mBlock", href: "https://en.wikipedia.org/wiki/MBlock" }],
    },
    { influences: ["pl+scratch"] },
  );

  /**/

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
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      people: [
        ["person+bruce-daniels", "designer"],
        ["person+carl-hewitt", "designer"],
        ["person+gerald-sussman", "designer"],
      ],
      platforms: ["platf+bsd"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+mesa",
    "Mesa",
    {
      name: "Mesa",
      websites: [
        { kind: "wikipedia", title: "Mesa", href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)" },
      ],
      references: {
        first_appeared: [{ href: "http://www.softwarepreservation.org/projects/lang/mesa", title: "Mesa" }],
        influenced: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }],
      },
      releases: [
        { version: "unknown", date: "1976-01-01", kind: "first" },
        { version: "6.0", date: "1981-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+algol"], typeSystems: ["tsys+static", "tsys+strong"] },
  );

  /**/

  lb.define("pl+micro-focus", "Micro Focus", {
    name: "Micro Focus",
    websites: [{ kind: "wikipedia", title: "Micro Focus", href: "https://en.wikipedia.org/wiki/Micro_Focus" }],
  });

  /**/

  lb.define("pl+mil-std-1750a", "MIL-STD-1750A", {
    name: "MIL-STD-1750A",
    websites: [{ kind: "wikipedia", title: "MIL-STD-1750A", href: "https://en.wikipedia.org/wiki/MIL-STD-1750A" }],
  });

  /**/

  lb.define("pl+mips-architecture", "MIPS", {
    name: "MIPS",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  /**/

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
      influences: ["pl+boo", "pl+java", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+charles-oliver-nutter", "designer"]],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+ml-slashi",
    "ML/I",
    { name: "ML/I", websites: [{ kind: "wikipedia", title: "ML/I", href: "https://en.wikipedia.org/wiki/ML/I" }] },
    { influences: ["pl+trac"] },
  );

  /**/

  lb.define(
    "pl+mlton",
    "MLton",
    {
      name: "MLton",
      websites: [
        { kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" },
        { kind: "homepage", title: "mlton.org", href: "http://mlton.org" },
      ],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20070629215827/http://mlton.org/pages/References/attachments/060916-mlton.pdf",
            title: "Whole-Program Compilation in MLton",
          },
        ],
        license: [{ href: "http://mlton.org/License", title: "License" }],
      },
      releases: [
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "unknown", date: "2021-01-17", kind: "stable" },
      ],
      extensions: [".sml"],
    },
    {
      influences: ["pl+sml"],
      licenses: ["lic+hpnd"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+moonscript",
    "MoonScript",
    {
      name: "MoonScript",
      websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
    },
    { influences: ["pl+coffeescript"] },
  );

  /**/

  lb.define(
    "pl+moose",
    "Moose",
    {
      name: "Moose",
      websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
    },
    { influences: ["pl+common-lisp"] },
  );

  /**/

  lb.define("pl+morphic", "Morphic", {
    name: "Morphic",
    websites: [{ kind: "wikipedia", title: "Morphic", href: "https://en.wikipedia.org/wiki/Morphic_(software)" }],
  });

  /**/

  lb.define("pl+mos-6502", "6502", {
    name: "6502",
    websites: [{ kind: "wikipedia", title: "6502", href: "https://en.wikipedia.org/wiki/MOS_6502" }],
  });

  /**/

  lb.define("pl+motorola-68000", "Motorola 68000", {
    name: "Motorola 68000",
    websites: [{ kind: "wikipedia", title: "Motorola 68000", href: "https://en.wikipedia.org/wiki/Motorola_68000" }],
  });

  /**/

  lb.define(
    "pl+ms-excel",
    "Excel",
    {
      name: "Excel",
      websites: [{ kind: "wikipedia", title: "Excel", href: "https://en.wikipedia.org/wiki/Microsoft_Excel" }],
    },
    { influences: ["pl+lisp"] },
  );

  /**/

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

  /**/

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
      references: {
        written_in: [
          {
            href: "https://archive.today/20120530/http://www.lextrait.com/Vincent/implementations.html",
            title: "The Programming Languages Beacon, v10.0",
          },
        ],
      },
    },
    { licenses: ["lic+freeware", "lic+trialware"], platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"] },
  );

  /**/

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

  /**/

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
      influences: ["pl+fortran-95", "pl+joss", "pl+speedcoding", "pl+telcomp"],
      paradigms: ["para+imperative"],
      people: [
        ["person+neil-pappalardo", "designer"],
        ["person+robert-a-greenes", "designer"],
      ],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define("pl+mvs", "MVS", {
    name: "MVS",
    websites: [{ kind: "wikipedia", title: "MVS", href: "https://en.wikipedia.org/wiki/MVS" }],
  });

  /**/

  lb.define(
    "pl+n1ql",
    "N1QL",
    { name: "N1QL", websites: [{ kind: "wikipedia", title: "N1QL", href: "https://en.wikipedia.org/wiki/N1QL" }] },
    { influences: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+napier88",
    "Napier88",
    {
      name: "Napier88",
      websites: [{ kind: "wikipedia", title: "Napier88", href: "https://en.wikipedia.org/wiki/Napier88" }],
      releases: [{ version: "unknown", date: "1988-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol-60", "pl+ps-algol", "pl+s-algol"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [["person+ron-morrison", "designer"]],
    },
  );

  /**/

  lb.define("pl+natural-language-programming", "Natural-language programming", {
    name: "Natural-language programming",
    websites: [
      {
        kind: "wikipedia",
        title: "Natural language programming",
        href: "https://en.wikipedia.org/wiki/Natural_language_programming",
      },
      {
        kind: "wikipedia",
        title: "Natural-language programming",
        href: "https://en.wikipedia.org/wiki/Natural-language_programming",
      },
    ],
  });

  /**/

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
      paradigms: ["para+multi", "para+objects", "para+prototypes", "para+scripting", "para+structured"],
      people: [
        ["person+motion-twin", "developer"],
        ["person+nicolas-cannasse", "designer"],
      ],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define("pl+nekovm", "NekoVM", {
    name: "NekoVM",
    websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
  });

  /**/

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
        { version: "1.2.507.0", date: "2016-08-06", kind: "stable" },
      ],
      references: { stable_release: [{ href: "http://nemerle.org/Downloads", title: "Nemerle 1.2.507.0" }] },
      extensions: [".n"],
    },
    {
      influences: ["pl+c-sharp", "pl+lisp", "pl+ml"],
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

  /**/

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
    { licenses: ["lic+isc", "lic+mit"], paradigms: ["para+array", "para+functional"] },
  );

  /**/

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
    { platforms: ["platf+unix", "platf+win", "platf+z-slashos"] },
  );

  /**/

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
        { version: "2.16.03", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/netwide-assembler/nasm/releases/tag/nasm-2.16.03", title: "Release 2.16.03" },
        ],
        written_in: [{ href: "https://github.com/netwide-assembler/nasm", title: "NASM, the Netwide Assembler" }],
      },
    },
    { licenses: ["lic+bsd-s"], people: [["person+h-peter-anvin", "developer"]] },
  );

  /**/

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
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+newsqueak",
    "Newsqueak",
    {
      name: "Newsqueak",
      websites: [{ kind: "wikipedia", title: "Newsqueak", href: "https://en.wikipedia.org/wiki/Newsqueak" }],
      references: {
        influenced: [
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
    },
    {
      influences: ["pl+c", "pl+communicating-sequential-processes"],
      paradigms: ["para+concurrent"],
      people: [["person+rob-pike", "designer"]],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+newtonscript",
    "NewtonScript",
    {
      name: "NewtonScript",
      websites: [{ kind: "wikipedia", title: "NewtonScript", href: "https://en.wikipedia.org/wiki/NewtonScript" }],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    {
      influences: ["pl+dylan", "pl+self", "pl+smalltalk"],
      paradigms: ["para+objects", "para+prototypes"],
      people: [["person+walter-smith", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
      people: [["person+mike-jenkins", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
        "pl+component-pascal",
        "pl+concurrent-pascal",
        "pl+euler",
        "pl+modula",
        "pl+modula-2",
        "pl+modula-2p",
        "pl+modula-3",
        "pl+oberon",
        "pl+oberon-2",
        "pl+object-oberon",
        "pl+object-pascal",
        "pl+obliq",
        "pl+pascal",
        "pl+pl360",
        "pl+zonnon",
      ],
    },
  );

  /**/

  lb.define("pl+nil", "NIL", {
    name: "NIL",
    websites: [{ kind: "wikipedia", title: "NIL", href: "https://en.wikipedia.org/wiki/NIL_(programming_language)" }],
  });

  /**/

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
        { version: "2.22.1", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/NixOS/nix/releases/tag/2.22.1", title: "Release 2.22.1" }],
        written_in: [
          {
            href: "https://openhub.net/p/nix/analyses/latest/languages_summary",
            title: "The Nix Open Source Project on Open Hub: Languages Page",
          },
        ],
        license: [{ href: "https://github.com/NixOS/nix/blob/master/COPYING", title: "nix/COPYING at master" }],
      },
    },
    { platforms: ["platf+linux", "platf+unix"] },
  );

  /**/

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
      people: [["person+norsk-data", "developer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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
        { version: "2.12", date: "2018-06-28", kind: "stable" },
      ],
      references: { stable_release: [{ href: "https://www.cs.tufts.edu/~nr/noweb/", title: "Noweb home page" }] },
    },
    { influences: ["pl+web"] },
  );

  /**/

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
      influences: ["pl+lisp", "pl+objective-c", "pl+objective-cpp", "pl+ruby"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative", "para+objects", "para+structured"],
      people: [["person+tim-burks", "designer"]],
      platforms: ["platf+mac", "platf+x86"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+object-oriented-programming", "Object oriented programming", {
    name: "Object oriented programming",
    websites: [
      {
        kind: "wikipedia",
        title: "Object oriented programming",
        href: "https://en.wikipedia.org/wiki/Object_oriented_programming",
      },
    ],
  });

  /**/

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
      dialects: ["pl+netlogo", "pl+starlogo"],
      implementations: ["pl+ucblogo"],
      influences: ["pl+lisp"],
      paradigms: ["para+educational", "para+functional", "para+imperative", "para+multi", "para+reflective"],
      people: [
        ["person+cynthia-solomon", "designer"],
        ["person+seymour-papert", "designer"],
        ["person+wally-feurzeig", "designer"],
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
      implementations: ["pl+modula-3"],
      influences: ["pl+modula-3", "pl+oberon", "pl+self"],
      paradigms: [
        "para+imperative",
        "para+modular",
        "para+multi",
        "para+objects",
        "para+parallel",
        "para+prototypes",
        "para+structured",
      ],
      people: [["person+luca-cardelli", "designer"]],
      platforms: ["platf+ia-32"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      paradigms: ["para+concurrent", "para+imperative"],
      people: [["person+david-may", "designer"]],
    },
  );

  /**/

  lb.define(
    "pl+occam--",
    "occam-π",
    {
      name: "occam-π",
      websites: [{ kind: "wikipedia", title: "occam-π", href: "https://en.wikipedia.org/wiki/Occam-%CF%80" }],
    },
    {
      influences: ["pl+occam"],
      paradigms: ["para+concurrent", "para+imperative"],
      people: [
        ["person+fred-barnes", "designer"],
        ["person+peter-welch", "designer"],
      ],
      platforms: ["platf+arduino", "platf+ia-32"],
    },
  );

  /**/

  lb.define("pl+odra", "Odra ALGOL 68", {
    name: "Odra ALGOL 68",
    websites: [{ kind: "wikipedia", title: "Odra ALGOL 68", href: "https://en.wikipedia.org/wiki/Odra_(computer)" }],
  });

  /**/

  lb.define("pl+okuma-corporation", "Okuma", {
    name: "Okuma",
    websites: [{ kind: "wikipedia", title: "Okuma", href: "https://en.wikipedia.org/wiki/Okuma_Corporation" }],
  });

  /**/

  lb.define("pl+oorexx", "ooREXX", {
    name: "ooREXX",
    websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/OoREXX" }],
  });

  /**/

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
      references: { license: [{ href: "http://opl-dev.sourceforge.net/lgpl.txt", title: "License" }] },
    },
    {
      licenses: ["lic+lgpl"],
      paradigms: ["para+embedded", "para+imperative", "para+structured"],
      people: [
        ["person+colly-myers", "designer"],
        ["person+martin-stamp", "designer"],
        ["person+richard-harrison", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+open-source", "open source", {
    name: "open source",
    websites: [{ kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open_source" }],
  });

  /**/

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

  /**/

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
    { licenses: ["lic+eclipse-public", "lic+free", "lic+gpl"] },
  );

  /**/

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

  /**/

  lb.define("pl+openvera", "OpenVera", {
    name: "OpenVera",
    websites: [{ kind: "wikipedia", title: "OpenVera", href: "https://en.wikipedia.org/wiki/OpenVera" }],
  });

  /**/

  lb.define("pl+openvms", "OpenVMS", {
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  /**/

  lb.define(
    "pl+ops5",
    "OPS5",
    { name: "OPS5", websites: [{ kind: "wikipedia", title: "OPS5", href: "https://en.wikipedia.org/wiki/OPS5" }] },
    { influences: ["pl+lisp"] },
  );

  /**/

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

  /**/

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
    references: {
      stable_release: [
        {
          href: "https://blogs.oracle.com/solaris/http%3awwworaclecomtechnetworkserver-storagedeveloperstudiooverviewindexhtml",
          title: "Announcing Oracle Developer Studio 12.6!",
        },
      ],
      operating_system: [
        {
          href: "https://www.theregister.co.uk/2011/12/19/oracle_studio_compilers_tuxedo/",
          title: "Oracle gooses Studio compilers for Solaris, Linux",
        },
      ],
    },
    releases: [{ version: "12.6", date: "2017-07-05", kind: "stable" }],
  });

  /**/

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
      influences: ["pl+haskell", "pl+ml", "pl+oz", "pl+pict", "pl+smalltalk"],
      licenses: ["lic+bsd-n"],
      paradigms: ["para+concurrent", "para+nondeterministic"],
      people: [
        ["person+jayadev-misra", "designer"],
        ["person+william-r-cook", "developer"],
      ],
    },
  );

  /**/

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

  /**/

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
      paradigms: ["para+functional", "para+lazy"],
      people: [
        ["person+martin-raskovsky", "developer"],
        ["person+philip-wadler", "designer"],
      ],
    },
  );

  /**/

  lb.define("pl+otcl", "OTcl", {
    name: "OTcl",
    websites: [{ kind: "wikipedia", title: "OTcl", href: "https://en.wikipedia.org/wiki/OTcl" }],
  });

  /**/

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
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20180105180341/https://www.elementscompiler.com/elements/oxygene/history.aspx",
            title: "Evolution of the Oxygene Language | Oxygene | Elements",
          },
        ],
      },
      releases: [{ version: "unknown", date: "2005-01-01", kind: "first" }],
    },
    {
      influences: ["pl+c-sharp", "pl+delphi", "pl+object-pascal", "pl+pascal"],
      licenses: ["lic+trialware"],
      platforms: ["platf+.net", "platf+jvm", "platf+linux", "platf+wasm", "platf+win"],
    },
  );

  /**/

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
      references: { license: [{ href: "https://mozart.github.io/license-info/", title: "Mozart Oz License Info" }] },
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
      people: [["person+gert-smolka", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+p--",
    "P′′",
    {
      name: "P′′",
      websites: [{ kind: "wikipedia", title: "P′′", href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
    },
    {
      dialects: ["pl+brainfuck"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+corrado-bohm", "designer"]],
    },
  );

  /**/

  lb.define(
    "pl+pact-i",
    "PACT I",
    {
      name: "PACT I",
      websites: [{ kind: "wikipedia", title: "PACT I", href: "https://en.wikipedia.org/wiki/PACT_I" }],
    },
    { influences: ["pl+fortran-95", "pl+speedcoding"] },
  );

  /**/

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
      references: {
        stable_release: [
          {
            href: "https://pari.math.u-bordeaux.fr/archives/pari-announce-24/msg00000.html",
            title: "pari-2.15.5 (STABLE) released",
          },
        ],
      },
      releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], people: [["person+henri-cohen", "developer"]] },
  );

  /**/

  lb.define("pl+parrot-virtual-machine", "Parrot", {
    name: "Parrot",
    websites: [{ kind: "wikipedia", title: "Parrot", href: "https://en.wikipedia.org/wiki/Parrot_virtual_machine" }],
  });

  /**/

  lb.define("pl+patcher", "Patcher", {
    name: "Patcher",
    websites: [{ kind: "wikipedia", title: "Patcher", href: "https://en.wikipedia.org/wiki/Patcher" }],
  });

  /**/

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

  /**/

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
      people: [["person+philippe-choquette", "designer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define("pl+pdp-10", "PDP-10", {
    name: "PDP-10",
    websites: [{ kind: "wikipedia", title: "PDP-10", href: "https://en.wikipedia.org/wiki/PDP-10" }],
  });

  /**/

  lb.define("pl+pdp-11", "PDP-11", {
    name: "PDP-11",
    websites: [{ kind: "wikipedia", title: "PDP-11", href: "https://en.wikipedia.org/wiki/PDP-11" }],
  });

  /**/

  lb.define("pl+pdp-7", "PDP-7", {
    name: "PDP-7",
    websites: [{ kind: "wikipedia", title: "PDP-7", href: "https://en.wikipedia.org/wiki/PDP-7" }],
  });

  /**/

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
        { version: "2.080", date: "2022-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://github.com/PDLPorters/pdl/releases/tag/2.080",
            title: "https://github.com/PDLPorters/pdl/releases/tag/2.080",
          },
        ],
      },
    },
    {
      influences: ["pl+apl", "pl+idl", "pl+perl"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+array"],
      people: [["person+karl-glazebrook", "developer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

  lb.define("pl+pgi-compiler", "PGI", {
    name: "PGI",
    websites: [{ kind: "wikipedia", title: "PGI", href: "https://en.wikipedia.org/wiki/PGI_compiler" }],
  });

  /**/

  lb.define("pl+philco", "Philco", {
    name: "Philco",
    websites: [{ kind: "wikipedia", title: "Philco", href: "https://en.wikipedia.org/wiki/Philco" }],
  });

  /**/

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
      paradigms: ["para+imperative", "para+reflective"],
      people: [
        ["person+theo-d-hondt", "designer"],
        ["person+wolfgang-de-meuter", "designer"],
      ],
      platforms: ["platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
    },
  );

  /**/

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
      people: [["person+benjamin-c-pierce", "developer"]],
      typeSystems: ["tsys+static"],
    },
  );

  /**/

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
      influences: ["pl+c", "pl+cpp", "pl+lpc"],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mozilla-public"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [["person+fredrik-hubinette", "designer"]],
      platforms: ["platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+manifest", "tsys+static"],
    },
  );

  /**/

  lb.define("pl+pipeline", "Pipeline (Unix)", {
    name: "Pipeline (Unix)",
    websites: [{ kind: "wikipedia", title: "Pipeline (Unix)", href: "https://en.wikipedia.org/wiki/Pipeline_(Unix)" }],
  });

  /**/

  lb.define(
    "pl+pizza",
    "Pizza",
    {
      name: "Pizza",
      websites: [
        { kind: "wikipedia", title: "Pizza", href: "https://en.wikipedia.org/wiki/Pizza_(programming_language)" },
        { kind: "homepage", title: "pizzacompiler.sourceforge.net", href: "http://pizzacompiler.sourceforge.net" },
      ],
      references: {
        influenced: [
          { href: "http://www.artima.com/scalazine/articles/origins_of_scala.html", title: "The Origins of Scala" },
        ],
      },
    },
    { influences: ["pl+java"], paradigms: ["para+algebraic", "para+generic"] },
  );

  /**/

  lb.define(
    "pl+pl-6",
    "PL-6",
    { name: "PL-6", websites: [{ kind: "wikipedia", title: "PL-6", href: "https://en.wikipedia.org/wiki/PL-6" }] },
    { influences: ["pl+pl-slash1"] },
  );

  /**/

  lb.define("pl+pl-slash0", "PL/0", {
    name: "PL/0",
    websites: [{ kind: "wikipedia", title: "PL/0", href: "https://en.wikipedia.org/wiki/PL/0" }],
  });

  /**/

  lb.define(
    "pl+pl-slash1",
    "PL/1",
    {
      name: "PL/1",
      websites: [
        { kind: "wikipedia", title: "PL/I", href: "https://en.wikipedia.org/wiki/PL/1" },
        {
          kind: "homepage",
          title: "www.ibm.com/products/pli-compiler-zos",
          href: "https://www.ibm.com/products/pli-compiler-zos",
        },
      ],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
    },
    { influences: ["pl+algol-60", "pl+cobol", "pl+fortran"], paradigms: ["para+imperative", "para+structured"] },
  );

  /**/

  lb.define(
    "pl+pl-slashc",
    "PL/C",
    {
      name: "PL/C",
      websites: [{ kind: "wikipedia", title: "PL/C", href: "https://en.wikipedia.org/wiki/PL/C" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Conway_Gries_An_Introduction_to_Programming_cover.jpg/180px-Conway_Gries_An_Introduction_to_Programming_cover.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "7.6", date: "1977-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+cornell-university", "pl+pl-slashi"],
      paradigms: ["para+educational", "para+imperative", "para+structured"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+pl-slashi",
    "PL/I",
    { name: "PL/I", websites: [{ kind: "wikipedia", title: "PL/I", href: "https://en.wikipedia.org/wiki/PL/I" }] },
    { influences: ["pl+algol", "pl+algol-60", "pl+cobol", "pl+fortran-95", "pl+speedcoding"] },
  );

  /**/

  lb.define(
    "pl+pl-slashm",
    "PL/M",
    {
      name: "PL/M",
      websites: [{ kind: "wikipedia", title: "PL/M", href: "https://en.wikipedia.org/wiki/PL/M" }],
      references: {
        developer: [
          {
            href: "https://web.archive.org/web/20190726193738/http://www.drdobbs.com/architecture-and-design/gary-kildall-and-collegial-entrepreneurs/184410428",
            title: "Gary Kildall and Collegial Entrepreneurship",
          },
        ],
        first_appeared: [
          {
            href: "https://web.archive.org/web/20191003055634/https://computerhistory.org/blog/in-his-own-words-gary-kildall/?key=in-his-own-words-gary-kildall",
            title: "In His Own Words: Gary Kildall",
          },
          {
            href: "http://www.computerhistory.org/atchm/computer-history-museum-license-agreement-for-the-kildall-manuscript/",
            title:
              "Computer Connections: People, Places, and Events in the Evolution of the Personal Computer Industry",
          },
        ],
      },
      releases: [{ version: "unknown", date: "1973-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol", "pl+pl-slash1", "pl+pl-slashi", "pl+xpl"],
      people: [["person+gary-kildall", "developer"]],
    },
  );

  /**/

  lb.define(
    "pl+pl.8",
    "PL.8",
    { name: "PL.8", websites: [{ kind: "wikipedia", title: "PL.8", href: "https://en.wikipedia.org/wiki/PL.8" }] },
    { influences: ["pl+pl-slash1"] },
  );

  /**/

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
      people: [["person+niklaus-wirth", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+planc",
    "PLANC",
    { name: "PLANC", websites: [{ kind: "wikipedia", title: "PLANC", href: "https://en.wikipedia.org/wiki/PLANC" }] },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+norsk-data", "developer"]],
      platforms: ["platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+plankalkul",
    "Plankalkül",
    {
      name: "Plankalkül",
      websites: [{ kind: "wikipedia", title: "Plankalkül", href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl" }],
      releases: [{ version: "unknown", date: "1948-01-01", kind: "first" }],
      references: {
        influenced_by: [
          {
            href: "https://web.archive.org/web/20231102214019/https://web.stanford.edu/class/cs208e/cgi-bin/main.cgi/static/lectures/17-ProgrammingEarlyDays/EarlyProgrammingLanguages.pdf",
            title: "Early Programming Languages / CS208e: Great Ideas in Computer Science",
          },
        ],
        influenced: [{ href: "https://de.wikipedia.org/wiki/Ulf_Hashagen", title: "Hashagen, Ulf" }],
      },
    },
    {
      implementations: ["pl+free-university-of-berlin"],
      influences: ["pl+begriffsschrift"],
      paradigms: ["para+imperative"],
      people: [["person+konrad-zuse", "designer"]],
    },
  );

  /**/

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
      paradigms: ["para+imperative", "para+logic", "para+multi"],
      people: [["person+carl-hewitt", "designer"]],
    },
  );

  /**/

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
    { licenses: ["lic+proprietary"], paradigms: ["para+imperative"], people: [["person+goran-hemdahl", "developer"]] },
  );

  /**/

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
      implementations: ["pl+robotics", "pl+space-missions"],
      paradigms: ["para+multi"],
      platforms: ["platf+linux", "platf+mac"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static"],
    },
  );

  /**/

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
      implementations: ["pl+dec", "pl+ibm-system-slash370", "pl+motorola-68000", "pl+pdp-11"],
      paradigms: ["para+imperative", "para+structured"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+poly-slashml", "Poly/ML", {
    name: "Poly/ML",
    websites: [{ kind: "wikipedia", title: "Poly/ML", href: "https://en.wikipedia.org/wiki/Poly/ML" }],
  });

  /**/

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
      licenses: ["lic+mit", "lic+open-source", "lic+proprietary", "lic+xfree86"],
      paradigms: ["para+dec", "para+functional", "para+imperative", "para+multi", "para+reflective", "para+structured"],
      people: [["person+robin-popplestone", "designer"]],
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

  /**/

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
      influences: ["pl+algol-60", "pl+cowsel", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative", "para+multi", "para+reflective", "para+structured"],
      people: [
        ["person+robin-popplestone", "designer"],
        ["person+rod-burstall", "designer"],
      ],
      platforms: ["platf+unix"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
      licenses: ["lic+mit", "lic+open-source", "lic+proprietary", "lic+xfree86"],
      platforms: ["platf+ia-32", "platf+x86-64"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+portable-document-format",
    "PDF",
    {
      name: "PDF",
      websites: [{ kind: "wikipedia", title: "PDF", href: "https://en.wikipedia.org/wiki/Portable_Document_Format" }],
    },
    { influences: ["pl+postscript"] },
  );

  /**/

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

  /**/

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

  /**/

  lb.define("pl+powerpc", "PowerPC", {
    name: "PowerPC",
    websites: [{ kind: "wikipedia", title: "PowerPC", href: "https://en.wikipedia.org/wiki/PowerPC" }],
  });

  /**/

  lb.define("pl+ppc64", "ppc64", {
    name: "ppc64",
    websites: [{ kind: "wikipedia", title: "ppc64", href: "https://en.wikipedia.org/wiki/Ppc64" }],
  });

  /**/

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
    {
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+objects"],
      people: [
        ["person+ben-fry", "designer"],
        ["person+casey-reas", "designer"],
      ],
    },
  );

  /**/

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
      people: [["person+frank-sanchez", "designer"]],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/

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
      references: {
        typing_discipline: [
          { href: "http://www.sysmaker.com/infopro/plb.htm", title: "Programming Language for Business" },
        ],
      },
      extensions: [".rl", ".ps", ".cb", ".pls", ".pgm"],
    },
    { influences: ["pl+cobol"], paradigms: ["para+imperative"], typeSystems: ["tsys+static", "tsys+strong"] },
  );

  /**/

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
      influences: ["pl+dataflow", "pl+diagram", "pl+functional-programming"],
      paradigms: ["para+dataflow", "para+multi", "para+objects", "para+visual"],
      platforms: ["platf+cross-platform", "platf+mac", "platf+win"],
    },
  );

  /**/

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

  /**/

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
      influences: ["pl+business-basic"],
      people: [["person+michael-f-king", "designer"]],
      platforms: ["platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/

  lb.define("pl+ptc", "PTC", {
    name: "PTC",
    websites: [{ kind: "wikipedia", title: "PTC", href: "https://en.wikipedia.org/wiki/PTC_(software_company)" }],
  });

  /**/

  lb.define("pl+pthreads", "Pthreads", {
    name: "Pthreads",
    websites: [{ kind: "wikipedia", title: "Pthreads", href: "https://en.wikipedia.org/wiki/Pthreads" }],
  });

  /**/

  lb.define("pl+puppet", "Puppet", {
    name: "Puppet",
    websites: [{ kind: "wikipedia", title: "Puppet", href: "https://en.wikipedia.org/wiki/Puppet_(software)" }],
  });

  /**/

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
      people: [["person+miller-s-puckette", "designer"]],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  /**/

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
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+visual"],
      people: [["person+mahmoud-samir-fayed", "designer"]],
      platforms: ["platf+win"],
    },
  );

  /**/

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

  /**/

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
      people: [["person+david-nichols", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+optional"],
    },
  );

  /**/

  lb.define("pl+qtscript", "QtScript", {
    name: "QtScript",
    websites: [{ kind: "wikipedia", title: "QtScript", href: "https://en.wikipedia.org/wiki/QtScript" }],
  });

  /**/

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
      people: [["person+john-carmack", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+quercus", "Quercus", {
    name: "Quercus",
    websites: [{ kind: "wikipedia", title: "Quercus", href: "https://en.wikipedia.org/wiki/Quercus_(software)" }],
  });

  /**/

  lb.define(
    "pl+query",
    "Query language",
    {
      name: "Query language",
      websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

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

  /**/

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

  /**/

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
      people: [["person+andrey-ershov", "designer"]],
      platforms: ["platf+intel-8080", "platf+zilog-z80"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
    { influences: ["pl+c", "pl+fortran"], people: [["person+brian-kernighan", "developer"]] },
  );

  /**/

  lb.define(
    "pl+ratfor",
    "Ratfor",
    {
      name: "Ratfor",
      websites: [{ kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfor" }],
    },
    { influences: ["pl+fortran-95", "pl+speedcoding"] },
  );

  /**/

  lb.define("pl+ravenscar-profile", "Ravenscar profile", {
    name: "Ravenscar profile",
    websites: [
      { kind: "wikipedia", title: "Ravenscar profile", href: "https://en.wikipedia.org/wiki/Ravenscar_profile" },
    ],
  });

  /**/

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

  /**/

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
      people: [
        ["person+s-florentsev", "developer"],
        ["person+v-olyunin", "developer"],
        ["person+valentin-turchin", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+reference-implementation", "reference implementation", {
    name: "reference implementation",
    websites: [
      {
        kind: "wikipedia",
        title: "reference implementation",
        href: "https://en.wikipedia.org/wiki/Reference_implementation",
      },
    ],
  });

  /**/

  lb.define(
    "pl+regency-systems-r2c",
    "Regency Systems",
    {
      name: "Regency Systems",
      websites: [
        { kind: "wikipedia", title: "Regency Systems", href: "https://en.wikipedia.org/wiki/Regency_Systems_R2C" },
      ],
    },
    { influences: ["pl+tutor"] },
  );

  /**/

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

  /**/

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

  /**/

  lb.define("pl+reverse-polish-notation", "RPN", {
    name: "RPN",
    websites: [{ kind: "wikipedia", title: "RPN", href: "https://en.wikipedia.org/wiki/Reverse_Polish_Notation" }],
  });

  /**/

  lb.define("pl+robotics", "Robotics", {
    name: "Robotics",
    websites: [{ kind: "wikipedia", title: "Robotics", href: "https://en.wikipedia.org/wiki/Robotics" }],
  });

  /**/

  lb.define("pl+rpg-ii", "RPG II", {
    name: "RPG II",
    websites: [{ kind: "wikipedia", title: "RPG II", href: "https://en.wikipedia.org/wiki/RPG_II" }],
  });

  /**/

  lb.define("pl+rpg-iii", "RPG III", {
    name: "RPG III",
    websites: [{ kind: "wikipedia", title: "RPG III", href: "https://en.wikipedia.org/wiki/RPG_III" }],
  });

  /**/

  lb.define("pl+rpg-iv", "RPG IV", {
    name: "RPG IV",
    websites: [{ kind: "wikipedia", title: "RPG IV", href: "https://en.wikipedia.org/wiki/RPG_IV" }],
  });

  /**/

  lb.define(
    "pl+rpl",
    "RPL",
    {
      name: "RPL",
      websites: [{ kind: "wikipedia", title: "RPL", href: "https://en.wikipedia.org/wiki/RPL_(programming_language)" }],
      references: {
        paradigm: [
          {
            href: "https://web.archive.org/web/20211203131528/https://www.hpmuseum.org/forum/showthread.php?mode=linear&tid=15509&pid=135732",
            title: "The Joy of Programming?",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20111206105511/http://www.hpl.hp.com/hpjournal/pdfs/IssuePDFs/1987-08.pdf",
            title: "Computation for Handheld Calculators",
          },
        ],
      },
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    },
    {
      influences: ["pl+forth", "pl+lisp", "pl+reverse-polish-notation"],
      paradigms: ["para+concatenative", "para+stack", "para+structured"],
    },
  );

  /**/

  lb.define(
    "pl+rtl-slash2",
    "RTL/2",
    {
      name: "RTL/2",
      websites: [{ kind: "wikipedia", title: "RTL/2", href: "https://en.wikipedia.org/wiki/RTL/2" }],
      releases: [{ version: "unknown", date: "1972-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol-68"],
      paradigms: ["para+imperative", "para+multi", "para+real", "para+structured"],
      people: [["person+jgp-barnes", "designer"]],
      platforms: ["platf+cross-platform", "platf+openvms"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/

  lb.define(
    "pl+rubinius",
    "Rubinius",
    {
      name: "Rubinius",
      websites: [
        { kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" },
        { kind: "homepage", title: "rubini.us", href: "http://rubini.us" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/rubinius/rubinius/releases", title: "Releases - rubinius/rubinius" },
        ],
      },
      releases: [{ version: "5.0", date: "2020-05-16", kind: "stable" }],
    },
    {
      licenses: ["lic+mozilla-public"],
      people: [
        ["person+brian-shirai", "developer"],
        ["person+evan-phoenix", "developer"],
      ],
    },
  );

  /**/

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
      influences: ["pl+apl", "pl+c", "pl+fortran", "pl+scheme"],
      paradigms: ["para+imperative", "para+multi", "para+objects"],
      people: [
        ["person+john-chambers", "developer"],
        ["person+trevor-hastie", "developer"],
        ["person+william-s-cleveland", "developer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+s3",
    "S3",
    {
      name: "S3",
      websites: [{ kind: "wikipedia", title: "S3", href: "https://en.wikipedia.org/wiki/S3_(programming_language)" }],
    },
    { influences: ["pl+algol-68"], paradigms: ["para+imperative", "para+structured"] },
  );

  /**/

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
      influences: ["pl+apl", "pl+c", "pl+sisal"],
      licenses: ["lic+free"],
      paradigms: ["para+array", "para+functional"],
      people: [
        ["person+clemens-grelck", "designer"],
        ["person+sven-bodo-scholz", "designer"],
      ],
      platforms: ["platf+posix", "platf+unix"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+safari", "Safari", {
    name: "Safari",
    websites: [{ kind: "wikipedia", title: "Safari", href: "https://en.wikipedia.org/wiki/Safari_(web_browser)" }],
  });

  /**/

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
    {
      people: [
        ["person+dan-swinehart", "designer"],
        ["person+robert-sproull", "designer"],
      ],
    },
  );

  /**/

  lb.define("pl+sap-r-slash2", "SAP R/2", {
    name: "SAP R/2",
    websites: [{ kind: "wikipedia", title: "SAP R/2", href: "https://en.wikipedia.org/wiki/SAP_R/2" }],
  });

  /**/

  lb.define("pl+sap-r-slash3", "SAP R/3", {
    name: "SAP R/3",
    websites: [{ kind: "wikipedia", title: "SAP R/3", href: "https://en.wikipedia.org/wiki/SAP_R/3" }],
  });

  /**/

  lb.define("pl+sap-s-slash4hana", "SAP S/4HANA", {
    name: "SAP S/4HANA",
    websites: [{ kind: "wikipedia", title: "SAP S/4HANA", href: "https://en.wikipedia.org/wiki/SAP_S/4HANA" }],
  });

  /**/

  lb.define(
    "pl+sas",
    "SAS",
    {
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_language" }],
    },
    { influences: ["pl+pl-slash1"] },
  );

  /**/

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

  /**/

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
    { influences: ["pl+iswim"], paradigms: ["para+functional"], people: [["person+david-turner", "designer"]] },
  );

  /**/

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
        { version: "1.2.3", date: "2007-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://directory.fsf.org/wiki/sather", title: "https://directory.fsf.org/wiki/sather" },
        ],
      },
    },
    {
      influences: ["pl+clu", "pl+common-lisp", "pl+eiffel", "pl+scheme"],
      paradigms: ["para+functional", "para+objects"],
      people: [["person+steve-omohundro", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  /**/

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
        { version: "2.4.5", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://sourceforge.net/p/sbcl/mailman/message/58777623/", title: "sbcl-2.4.5 released" },
        ],
      },
    },
    { licenses: ["lic+bsd", "lic+mit", "lic+public-domain"], platforms: ["platf+cross-platform"] },
  );

  /**/

  lb.define("pl+scaleform-gfx", "Scaleform GFx", {
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  /**/

  lb.define("pl+schoonschip", "Schoonschip", {
    name: "Schoonschip",
    websites: [{ kind: "wikipedia", title: "Schoonschip", href: "https://en.wikipedia.org/wiki/Schoonschip" }],
  });

  /**/

  lb.define("pl+scicos", "Scicos", {
    name: "Scicos",
    websites: [
      { kind: "wikipedia", title: "Scicos", href: "https://en.wikipedia.org/wiki/Scicos" },
      { kind: "homepage", title: "www.scicos.org", href: "http://www.scicos.org" },
    ],
    releases: [{ version: "4.4.1", date: "2011-01-01", kind: "stable" }],
  });

  /**/

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

  /**/

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

  /**/

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
      people: [["person+lee-e-mcmahon", "designer"]],
    },
  );

  /**/

  lb.define("pl+semi-automatic-ground-environment", "SAGE", {
    name: "SAGE",
    websites: [
      { kind: "wikipedia", title: "SAGE", href: "https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment" },
    ],
  });

  /**/

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
      paradigms: ["para+multi", "para+objects", "para+people"],
      people: [["person+douglas-simons", "designer"]],
      typeSystems: ["tsys+duck"],
    },
  );

  /**/

  lb.define(
    "pl+sequencel",
    "SequenceL",
    {
      name: "SequenceL",
      websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "first" }],
      references: {
        license: [
          {
            href: "https://web.archive.org/web/20170202045317/https://texasmulticore.com/products/sequencel-licenses/",
            title: "SequenceL Licensing",
          },
        ],
      },
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+dec", "para+functional", "para+parallel"],
      people: [
        ["person+dr-brad-nemanich", "designer"],
        ["person+dr-daniel-cooke", "designer"],
        ["person+dr-nelson-rushton", "designer"],
      ],
      platforms: ["platf+arm", "platf+linux", "platf+mac", "platf+win", "platf+x86"],
      typeSystems: ["tsys+inferred", "tsys+static"],
    },
  );

  /**/

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
      influences: ["pl+algol-60"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [["person+jacob-t-schwartz", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define(
    "pl+setl2",
    "SETL2",
    { name: "SETL2", websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }] },
    { influences: ["pl+setl"] },
  );

  /**/

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

  /**/

  lb.define(
    "pl+sharp-pc-1211",
    "Sharp PC-1211 BASIC",
    {
      name: "Sharp PC-1211 BASIC",
      websites: [
        { kind: "wikipedia", title: "Sharp PC-1211 BASIC", href: "https://en.wikipedia.org/wiki/Sharp_PC-1211" },
      ],
    },
    { influences: ["pl+tiny-basic"] },
  );

  /**/

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
    {
      people: [
        ["person+a-b-tonik", "developer"],
        ["person+j-r-logan", "developer"],
        ["person+william-f-schmitt", "developer"],
      ],
    },
  );

  /**/

  lb.define("pl+siemens", "Siemens", {
    name: "Siemens",
    websites: [{ kind: "wikipedia", title: "Siemens", href: "https://en.wikipedia.org/wiki/Siemens" }],
  });

  /**/

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

  /**/

  lb.define("pl+simscript", "Simscript", {
    name: "Simscript",
    websites: [{ kind: "wikipedia", title: "Simscript", href: "https://en.wikipedia.org/wiki/Simscript" }],
  });

  /**/

  lb.define(
    "pl+simula",
    "Simula",
    {
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula", href: "https://en.wikipedia.org/wiki/Simula" }],
    },
    { influences: ["pl+algol", "pl+algol-60"] },
  );

  /**/

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
      implementations: ["pl+algol-60", "pl+simscript"],
      influences: ["pl+algol-60", "pl+simscript"],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [
        ["person+kristen-nygaard", "developer"],
        ["person+ole-johan-dahl", "designer"],
      ],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+nominative", "tsys+static"],
    },
  );

  /**/

  lb.define("pl+simula67", "Simula67", {
    name: "Simula67",
    websites: [{ kind: "wikipedia", title: "Simula67", href: "https://en.wikipedia.org/wiki/Simula67" }],
  });

  /**/

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
    { licenses: ["lic+commercial", "lic+proprietary"], platforms: ["platf+ia-32", "platf+x86-64"] },
  );

  /**/

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
      references: {
        operating_system: [
          {
            href: "http://www.mathworks.com/products/simulink/requirements.html?s_cid=wiki_simulink_1",
            title: "System Requirements and Platform Availability by Product",
          },
        ],
      },
    },
    { licenses: ["lic+proprietary"] },
  );

  /**/

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

  /**/

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
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [["person+george-j-carrette", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+linux", "platf+openvms", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+sisal",
    "SISAL",
    {
      name: "SISAL",
      websites: [{ kind: "wikipedia", title: "SISAL", href: "https://en.wikipedia.org/wiki/SISAL" }],
      releases: [{ version: "unknown", date: "1983-01-01", kind: "first" }],
    },
    {
      influences: ["pl+c", "pl+fortran", "pl+lucid", "pl+pascal"],
      paradigms: ["para+dataflow", "para+functional"],
      people: [["person+james-mcgraw", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+sketchpad", "Sketchpad", {
    name: "Sketchpad",
    websites: [{ kind: "wikipedia", title: "Sketchpad", href: "https://en.wikipedia.org/wiki/Sketchpad" }],
  });

  /**/

  lb.define(
    "pl+skill",
    "SKILL",
    {
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/SKILL" }],
      releases: [{ version: "unknown", date: "1990-01-01", kind: "first" }],
    },
    {
      influences: ["pl+common-lisp", "pl+common-lisp-object-system", "pl+scheme"],
      paradigms: ["para+functional", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

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
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      people: [["person+nevil-brownlee", "designer"]],
      platforms: ["platf+dec"],
    },
  );

  /**/

  lb.define(
    "pl+small-c",
    "Small-C",
    {
      name: "Small-C",
      websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    {
      people: [
        ["person+james-e-hendrix", "developer"],
        ["person+ron-cain", "developer"],
      ],
    },
  );

  /**/

  lb.define("pl+smarteiffel", "SmartEiffel", {
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  /**/

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
      references: {
        influenced: [
          {
            href: "https://www.lua.org/doc/hopl.pdf",
            title: "Proceedings of the third ACM SIGPLAN conference on History of programming languages",
          },
        ],
      },
    },
    {
      dialects: ["pl+icon"],
      implementations: ["pl+spitbol"],
      influences: ["pl+comit"],
      paradigms: ["para+imperative", "para+unstructured"],
      people: [
        ["person+david-j-farber", "designer"],
        ["person+ralph-griswold", "designer"],
      ],
    },
  );

  /**/

  lb.define(
    "pl+sp-slashk",
    "SP/k",
    {
      name: "SP/k",
      websites: [{ kind: "wikipedia", title: "SP/k", href: "https://en.wikipedia.org/wiki/SP/k" }],
      releases: [{ version: "unknown", date: "1974-01-01", kind: "first" }],
    },
    {
      influences: ["pl+pl-slashi"],
      paradigms: ["para+imperative", "para+structured"],
      people: [
        ["person+jr-cordy", "designer"],
        ["person+rc-holt", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+space-missions", "Space missions", {
    name: "Space missions",
    websites: [{ kind: "wikipedia", title: "Space missions", href: "https://en.wikipedia.org/wiki/Space_missions" }],
  });

  /**/

  lb.define("pl+sparc", "SPARC", {
    name: "SPARC",
    websites: [{ kind: "wikipedia", title: "SPARC", href: "https://en.wikipedia.org/wiki/SPARC" }],
  });

  /**/

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
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      references: {
        major_implementations: [
          { href: "https://archive.org/details/isbn_9780470418017/page/406", title: "Semantic Web Programming" },
        ],
      },
    },
    { implementations: ["pl+jena", "pl+virtuoso-universal-server"], influences: ["pl+sql"], paradigms: ["para+query"] },
  );

  /**/

  lb.define(
    "pl+speedcoding",
    "Speedcoding",
    {
      name: "Speedcoding",
      websites: [{ kind: "wikipedia", title: "Speedcoding", href: "https://en.wikipedia.org/wiki/Speedcoding" }],
      releases: [{ version: "unknown", date: "1953-01-01", kind: "first" }],
    },
    {
      influences: ["pl+assembly", "pl+machine-code"],
      paradigms: ["para+generic", "para+structured"],
      people: [["person+john-backus", "designer"]],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define("pl+spitbol", "SPITBOL", {
    name: "SPITBOL",
    websites: [{ kind: "wikipedia", title: "SPITBOL", href: "https://en.wikipedia.org/wiki/SPITBOL" }],
  });

  /**/

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
      paradigms: ["para+imperative", "para+parallel", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  /**/

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
      implementations: ["pl+c", "pl+java"],
      influences: ["pl+logo"],
      paradigms: ["para+agent", "para+educational", "para+imperative", "para+multi", "para+simulation"],
      people: [
        ["person+media-lab", "developer"],
        ["person+mitchel-resnick", "designer"],
      ],
      platforms: ["platf+jvm", "platf+mac", "platf+win"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      references: {
        original_authors: [
          {
            href: "https://journals.sagepub.com/doi/pdf/10.1177/1536867X0500500103",
            title: "A conversation with William Gould",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "18.0", date: "2023-04-25", kind: "stable" },
      ],
    },
    { licenses: ["lic+proprietary"] },
  );

  /**/

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
      paradigms: ["para+concatenative", "para+imperative", "para+stack"],
      people: [["person+jonathan-sachs", "developer"]],
      platforms: ["platf+openvms"],
    },
  );

  /**/

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

  /**/

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
      influences: ["pl+self", "pl+smalltalk"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects"],
      people: [["person+gilad-bracha", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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

  /**/

  lb.define(
    "pl+subl",
    "SubL",
    { name: "SubL", websites: [{ kind: "wikipedia", title: "SubL", href: "https://en.wikipedia.org/wiki/SubL" }] },
    { influences: ["pl+common-lisp"] },
  );

  /**/

  lb.define(
    "pl+superplan",
    "Superplan",
    {
      name: "Superplan",
      websites: [{ kind: "wikipedia", title: "Superplan", href: "https://en.wikipedia.org/wiki/Superplan" }],
      releases: [{ version: "unknown", date: "1951-01-01", kind: "first" }],
    },
    { influences: ["pl+plankalkul"], people: [["person+heinz-rutishauser", "designer"]] },
  );

  /**/

  lb.define(
    "pl+supertalk",
    "SuperTalk",
    {
      name: "SuperTalk",
      websites: [{ kind: "wikipedia", title: "SuperTalk", href: "https://en.wikipedia.org/wiki/SuperTalk" }],
    },
    { influences: ["pl+hypertalk"] },
  );

  /**/

  lb.define("pl+symbolic-manipulation-program", "SMP", {
    name: "SMP",
    websites: [
      { kind: "wikipedia", title: "SMP", href: "https://en.wikipedia.org/wiki/Symbolic_Manipulation_Program" },
    ],
  });

  /**/

  lb.define(
    "pl+sympl",
    "SYMPL",
    { name: "SYMPL", websites: [{ kind: "wikipedia", title: "SYMPL", href: "https://en.wikipedia.org/wiki/SYMPL" }] },
    { influences: ["pl+jovial"] },
  );

  /**/

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
    { licenses: ["lic+proprietary"], people: [["person+calerga-sarl", "developer"]] },
  );

  /**/

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
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects"],
      people: [
        ["person+jonathan-a-rees", "designer"],
        ["person+norman-i-adams", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      paradigms: ["para+domain", "para+prototypes"],
      people: [["person+michael-j-roberts", "designer"]],
      platforms: ["platf+amiga", "platf+dos", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+tail-call", "properly tail recursive", {
    name: "properly tail recursive",
    websites: [
      { kind: "wikipedia", title: "properly tail recursive", href: "https://en.wikipedia.org/wiki/Tail_call" },
    ],
  });

  /**/

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
      influences: ["pl+java", "pl+scheme", "pl+tcl"],
      paradigms: ["para+class", "para+functional", "para+multi", "para+objects"],
      people: [["person+jorge-nunes", "developer"]],
    },
  );

  /**/

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

  /**/

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
        { version: "unknown", date: "2024-03-13", kind: "stable" },
      ],
      references: { stable_release: [{ href: "https://tug.org/texlive/", title: "TeX Live - TeX Users Group" }] },
      extensions: [],
    },
    { licenses: ["lic+permissive-free"], people: [["person+donald-knuth", "developer"]] },
  );

  /**/

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
      references: {
        stable_release: [
          {
            href: "https://github.com/oneapi-src/oneTBB/releases",
            title: "oneAPI Threading Building Blocks Github Releases",
          },
        ],
        license: [
          {
            href: "https://software.intel.com/en-us/free_tools_and_libraries",
            title: "No Cost Options for Intel Support yourself, Royalty-Free",
          },
        ],
      },
      releases: [{ version: "2021.8", date: "2023-02-17", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  /**/

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
      references: {
        developers: [{ href: "http://www.tcl.tk/community/coreteam", title: "Tcl/Tk Core Development" }],
        stable_release: [
          {
            href: "https://sourceforge.net/p/tcl/mailman/message/37738603/",
            title: "[TCLCORE] Tcl/Tk 8.6.13 RELEASED",
          },
        ],
        license: [{ href: "http://www.tcl.tk/software/tcltk/license.html", title: "Tcl/Tk Licensing Terms" }],
      },
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "8.6.13", date: "2022-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+bsd-s"], platforms: ["platf+cross-platform"] },
  );

  /**/

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
      references: {
        influenced_by: [
          { href: "https://www.bell-labs.com/usr/dmr/www/chist.pdf", title: "The Development of the C Language" },
          {
            href: "https://amakukha.github.io/tmg/TMG_Manual_McIlroy_1972.html",
            title: "A Manual for the Tmg Compiler-writing Language",
          },
        ],
      },
    },
    {
      dialects: ["pl+pdp-11", "pl+pdp-7"],
      influences: ["pl+algol-68", "pl+b", "pl+pl-slashi", "pl+snobol"],
      people: [
        ["person+douglas-mcilroy", "developer"],
        ["person+robert-m-mcclure", "designer"],
      ],
    },
  );

  /**/

  lb.define(
    "pl+trac",
    "TRAC",
    {
      name: "TRAC",
      websites: [{ kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_programming_language" }],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
      references: {
        influenced_by: [
          {
            href: "https://web.archive.org/web/20090813125040/http://hopl.murdoch.edu.au/showlanguage.prx?exp=276",
            title: "TRAC – A man-machine string manipulating language",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20090813125040/http://hopl.murdoch.edu.au/showlanguage.prx?exp=276",
            title: "TRAC – A man-machine string manipulating language",
          },
        ],
      },
    },
    { paradigms: ["para+macros"], people: [["person+calvin-mooers", "designer"]] },
  );

  /**/

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
    { licenses: ["lic+commercial", "lic+proprietary"], platforms: ["platf+x86-64"] },
  );

  /**/

  lb.define("pl+trueimage", "TrueImage", {
    name: "TrueImage",
    websites: [{ kind: "wikipedia", title: "TrueImage", href: "https://en.wikipedia.org/wiki/TrueImage" }],
  });

  /**/

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
      people: [
        ["person+e-kent-gordon", "designer"],
        ["person+steven-m-caine", "designer"],
      ],
    },
  );

  /**/

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
      influences: ["pl+euclid", "pl+sp-slashk"],
      paradigms: ["para+concurrent", "para+imperative", "para+multi", "para+objects"],
      people: [["person+ric-holt", "designer"]],
      platforms: ["platf+cross-platform", "platf+mips"],
      typeSystems: ["tsys+manifest", "tsys+static"],
    },
  );

  /**/

  lb.define(
    "pl+turing-plus",
    "Turing Plus",
    {
      name: "Turing Plus",
      websites: [{ kind: "wikipedia", title: "Turing Plus", href: "https://en.wikipedia.org/wiki/Turing_Plus" }],
    },
    { influences: ["pl+concurrent-euclid"] },
  );

  /**/

  lb.define(
    "pl+tutor",
    "TUTOR",
    {
      name: "TUTOR",
      websites: [{ kind: "wikipedia", title: "TUTOR", href: "https://en.wikipedia.org/wiki/TUTOR" }],
      releases: [{ version: "unknown", date: "1969-01-01", kind: "first" }],
    },
    {
      paradigms: ["para+imperative"],
      people: [
        ["person+paul-tenczar", "designer"],
        ["person+richard-blomme", "designer"],
      ],
    },
  );

  /**/

  lb.define("pl+tweak", "Tweak", {
    name: "Tweak",
    websites: [
      { kind: "wikipedia", title: "Tweak", href: "https://en.wikipedia.org/wiki/Tweak_(programming_environment)" },
    ],
  });

  /**/

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

  /**/

  lb.define("pl+uefn", "UEFN", {
    name: "UEFN",
    websites: [{ kind: "wikipedia", title: "UEFN", href: "https://en.wikipedia.org/wiki/UEFN" }],
  });

  /**/

  lb.define("pl+uml", "UML", {
    name: "UML",
    websites: [{ kind: "wikipedia", title: "UML", href: "https://en.wikipedia.org/wiki/Unified_Modeling_Language" }],
  });

  /**/

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
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+clint-jeffery", "designer"]],
      platforms: ["platf+cross-platform", "platf+unix", "platf+win"],
    },
  );

  /**/

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

  /**/

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
      paradigms: ["para+imperative", "para+message", "para+parallel", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );

  /**/

  lb.define("pl+univac-1108", "UNIVAC 1108", {
    name: "UNIVAC 1108",
    websites: [{ kind: "wikipedia", title: "UNIVAC 1108", href: "https://en.wikipedia.org/wiki/UNIVAC_1108" }],
  });

  /**/

  lb.define("pl+unix-shell", "Unix shell", {
    name: "Unix shell",
    websites: [{ kind: "wikipedia", title: "Unix shell", href: "https://en.wikipedia.org/wiki/Unix_shell" }],
  });

  /**/

  lb.define("pl+v8", "V8", {
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  /**/

  lb.define(
    "pl+vax",
    "VAX",
    { name: "VAX", websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }] },
    { influences: ["pl+multilisp"] },
  );

  /**/

  lb.define("pl+verilog-ams", "Verilog-AMS", {
    name: "Verilog-AMS",
    websites: [{ kind: "wikipedia", title: "Verilog-AMS", href: "https://en.wikipedia.org/wiki/Verilog-AMS" }],
  });

  /**/

  lb.define("pl+vhdl-ams", "VHDL-AMS", {
    name: "VHDL-AMS",
    websites: [{ kind: "wikipedia", title: "VHDL-AMS", href: "https://en.wikipedia.org/wiki/VHDL-AMS" }],
  });

  /**/

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

  /**/

  lb.define("pl+visual-eiffel", "Visual Eiffel", {
    name: "Visual Eiffel",
    websites: [{ kind: "wikipedia", title: "Visual Eiffel", href: "https://en.wikipedia.org/wiki/Visual_Eiffel" }],
  });

  /**/

  lb.define(
    "pl+visual-j-sharp",
    "J#",
    {
      name: "J#",
      websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/Visual_J_Sharp" }],
    },
    { influences: ["pl+java"] },
  );

  /**/

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
        "para+concurrent",
        "para+dec",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+logic",
        "para+multi",
        "para+objects",
      ],
      people: [["person+pdc-a-slashs", "developer"]],
      platforms: ["platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+visual-studio-code", "Visual Studio Code", {
    name: "Visual Studio Code",
    websites: [
      { kind: "wikipedia", title: "Visual Studio Code", href: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    ],
  });

  /**/

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
      influences: ["pl+lisp", "pl+logo", "pl+simula", "pl+sketchpad"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", "designer"],
        ["person+alan-kay", "designer"],
        ["person+dan-ingalls", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define(
    "pl+vp-info",
    "VP-Info",
    {
      name: "VP-Info",
      websites: [{ kind: "wikipedia", title: "VP-Info", href: "https://en.wikipedia.org/wiki/VP-Info" }],
    },
    { influences: ["pl+dbase"] },
  );

  /**/

  lb.define(
    "pl+vue.js",
    "Vue",
    {
      name: "Vue",
      websites: [{ kind: "wikipedia", title: "Vue", href: "https://en.wikipedia.org/wiki/Vue.js#Official_libraries" }],
    },
    { influences: ["pl+elm"] },
  );

  /**/

  lb.define("pl+watbol", "WATBOL", {
    name: "WATBOL",
    websites: [{ kind: "wikipedia", title: "WATBOL", href: "https://en.wikipedia.org/wiki/WATBOL" }],
  });

  /**/

  lb.define("pl+watcom-c-compiler", "Open Watcom", {
    name: "Open Watcom",
    websites: [{ kind: "wikipedia", title: "Open Watcom", href: "https://en.wikipedia.org/wiki/Watcom_C_compiler" }],
  });

  /**/

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
        { version: "2.0", date: "2022-12-01", kind: "preview" },
      ],
      references: {
        preview_release: [
          {
            href: "https://github.com/open-watcom/open-watcom-v2/releases/tag/2022-12-01-Build",
            title: "Release 2022-12-01 Build · open-watcom/open-watcom-v2",
          },
        ],
      },
    },
    { licenses: ["lic+sybase-open-watcom-public"], platforms: ["platf+ia-32", "platf+x86", "platf+x86-64"] },
  );

  /**/

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
      influences: ["pl+tex", "pl+web"],
      licenses: ["lic+free"],
      paradigms: ["para+imperative", "para+literate", "para+structured"],
      people: [["person+donald-knuth", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+static", "tsys+weak"],
    },
  );

  /**/

  lb.define("pl+wolfram-mathematica", "Mathematica", {
    name: "Mathematica",
    websites: [{ kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" }],
  });

  /**/

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
      references: {
        stable_release: [
          {
            href: "https://www.wolfram.com/system-modeler/quick-revision-history.html",
            title: "System Modeler Quick Revision History",
          },
        ],
      },
      releases: [{ version: "14.0.0", date: "2024-01-09", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );

  /**/

  lb.define("pl+x-slashopen", "X/Open", {
    name: "X/Open",
    websites: [{ kind: "wikipedia", title: "X/Open", href: "https://en.wikipedia.org/wiki/X/Open" }],
  });

  /**/

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
      people: [
        ["person+kemal-ebcioglu", "designer"],
        ["person+saravanan-arumugam", "designer"],
        ["person+vijay-saraswat", "designer"],
        ["person+vivek-sarkar", "designer"],
      ],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+x86", "x86", {
    name: "x86",
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  /**/

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
      references: {
        stable_release: [
          {
            href: "https://marc.info/?l=xalan-dev&m=168033300326762&w=2",
            title: "'[ANNOUNCEMENT] Apache XalanJ 2.7.3' - MARC",
          },
        ],
      },
      releases: [{ version: "2.7.3", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"] },
  );

  /**/

  lb.define("pl+xbase", "xBase", {
    name: "xBase",
    websites: [{ kind: "wikipedia", title: "xBase", href: "https://en.wikipedia.org/wiki/XBase" }],
  });

  /**/

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
      references: {
        stable_release: [{ href: "https://www.scilab.org/download/scilab-2024.1.0", title: "Scilab 2024.1.0" }],
      },
      releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+cecill", "lic+gpl-2"], people: [["person+dassault-systemes", "developer"]] },
  );

  /**/

  lb.define("pl+xedit", "KEXX", {
    name: "KEXX",
    websites: [{ kind: "wikipedia", title: "KEXX", href: "https://en.wikipedia.org/wiki/XEDIT#KEXX" }],
  });

  /**/

  lb.define(
    "pl+xharbour",
    "xHarbour",
    {
      name: "xHarbour",
      websites: [{ kind: "wikipedia", title: "xHarbour", href: "https://en.wikipedia.org/wiki/XHarbour" }],
    },
    { influences: ["pl+harbour"] },
  );

  /**/

  lb.define(
    "pl+xotcl",
    "XOTcl",
    {
      name: "XOTcl",
      websites: [
        { kind: "wikipedia", title: "XOTcl", href: "https://en.wikipedia.org/wiki/XOTcl" },
        { kind: "homepage", title: "media.wu-wien.ac.at", href: "http://media.wu-wien.ac.at/" },
      ],
      references: {
        first_appeared: [
          {
            href: "http://nm.wu-wien.ac.at/research/publications/xotcl-tclconf.ps",
            title: "XOTcl, an Object-Oriented Scripting Language",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2000-01-01", kind: "first" },
        { version: "1.6.8", date: "2014-04-29", kind: "stable" },
      ],
    },
    {
      influences: ["pl+otcl", "pl+tcl"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [
        ["person+gustaf-neumann", "designer"],
        ["person+uwe-zdun", "designer"],
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define("pl+xpl", "XPL", {
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  /**/

  lb.define("pl+xtalk", "xTalk", {
    name: "xTalk",
    websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
  });

  /**/

  lb.define(
    "pl+yacc",
    "Yacc",
    { name: "Yacc", websites: [{ kind: "wikipedia", title: "Yacc", href: "https://en.wikipedia.org/wiki/Yacc" }] },
    { influences: ["pl+tmg"], licenses: ["lic+mit"], platforms: ["platf+cross-platform"] },
  );

  /**/

  lb.define("pl+yamazaki-mazak-corporation", "Mazak", {
    name: "Mazak",
    websites: [{ kind: "wikipedia", title: "Mazak", href: "https://en.wikipedia.org/wiki/Yamazaki_Mazak_Corporation" }],
  });

  /**/

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

  /**/

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
      references: {
        written_in: [
          { href: "http://www.atdot.net/yarv/oopsla2005eabstract-rc1.pdf", title: "YARV: yet another RubyVM" },
        ],
      },
    },
    { licenses: ["lic+ruby"], people: [["person+koichi-sasada", "developer"]] },
  );

  /**/

  lb.define("pl+yhc", "Yhc", {
    name: "Yhc",
    websites: [{ kind: "wikipedia", title: "Yhc", href: "https://en.wikipedia.org/wiki/Yhc" }],
  });

  /**/

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
    {
      licenses: ["lic+bsd-s"],
      people: [["person+david-h-munro", "designer"]],
      platforms: ["platf+mac", "platf+unix", "platf+win"],
    },
  );

  /**/

  lb.define(
    "pl+z-machine",
    "ZIL",
    { name: "ZIL", websites: [{ kind: "wikipedia", title: "ZIL", href: "https://en.wikipedia.org/wiki/Z-machine" }] },
    { influences: ["pl+mdl"] },
  );

  /**/

  lb.define("pl+z-notation", "Z", {
    name: "Z",
    websites: [{ kind: "wikipedia", title: "Z", href: "https://en.wikipedia.org/wiki/Z_notation" }],
  });

  /**/

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
      references: {
        repository: [
          {
            href: "https://news-web.php.net/php.internals/113838",
            title: "php.internals: Changes to Git commit workflow",
          },
        ],
      },
    },
    { licenses: ["lic+php", "lic+zend"] },
  );

  /**/

  lb.define(
    "pl+zonnon",
    "Zonnon",
    {
      name: "Zonnon",
      websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "first" }],
    },
    {
      influences: ["pl+modula-2", "pl+oberon", "pl+oberon-2", "pl+pascal"],
      paradigms: ["para+imperative", "para+modular", "para+objects", "para+structured"],
      people: [["person+jurg-gutknecht", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      references: {
        influenced: [{ href: "http://chapel.cray.com/spec/spec-0.98.pdf", title: "Chapel spec (Acknowledgements)" }],
      },
    },
    { influences: ["pl+c"], paradigms: ["para+array"] },
  );

  /**/
}
