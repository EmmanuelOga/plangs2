import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+.net").merge({
    name: "CLI",
    websites: [
      { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
    ],
  });

  /**/

  g.buildPlang("pl+.net-framework").merge({
    name: ".NET Framework",
    websites: [{ kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" }],
  });

  /**/

  g.buildPlang("pl+.net-framework-sdk").merge({
    name: ".NET Framework SDK",
    websites: [
      { kind: "wikipedia", title: ".NET Framework SDK", href: "https://en.wikipedia.org/wiki/.NET_Framework_SDK" },
    ],
  });

  /**/

  g.buildPlang("pl+.ql").merge({
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  /**/

  g.buildPlang("pl+a-")
    .merge({
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A♯", href: "https://en.wikipedia.org/wiki/A%E2%99%AF_(Axiom)" }],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "stable" },
        { version: "unknown", date: "2014-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+pascal", "pl+haskell"])
    .addPerson("person+stephen-m-watt", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+multi", "para+objects", "para+functional"])
    .addPlatforms([
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
    ]);

  /**/

  g.buildPlang("pl+a-sharp")
    .merge({
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A#", href: "https://en.wikipedia.org/wiki/A_Sharp_(.NET)" }],
    })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+.net", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+abap")
    .merge({
      name: "ABAP/4",
      websites: [{ kind: "wikipedia", title: "ABAP/4", href: "https://en.wikipedia.org/wiki/ABAP" }],
      releases: [{ version: "7.58", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+sap"])
    .addParadigms(["para+objects", "para+structured", "para+imperative"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+abc")
    .merge({
      name: "ABC",
      websites: [{ kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" }],
      releases: [{ version: "1.05.02", date: "1990-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+setl", "pl+isetl", "pl+setl2"])
    .addInfluence("pl+algol", {
      refs: [
        {
          href: "https://books.google.com/books?q=He-was-clearly-influenced-by-ALGOL-68",
          title: "Masterminds of Programming: Conversations with the Creators of Major Programming Languages",
        },
      ],
    })
    .addPerson("person+lambert-meertens", { role: "designer" })
    .addPerson("person+steven-pemberton", { role: "designer" })
    .addPerson("person+centrum-wiskunde", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addPlatforms(["platf+unix", "platf+win", "platf+mac", "platf+atari"])
    .addTypeSystems(["tsys+strong", "tsys+polymorphic"]);

  /**/

  g.buildPlang("pl+action-")
    .merge({
      name: "Action!",
      websites: [
        { kind: "wikipedia", title: "Action!", href: "https://en.wikipedia.org/wiki/Action!_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Actionscr.png/220px-Actionscr.png",
        },
      ],
    })
    .addPlatforms(["platf+atari"]);

  /**/

  g.buildPlang("pl+actionscript")
    .merge({
      name: "ActionScript",
      websites: [
        { kind: "wikipedia", title: "ActionScript", href: "https://en.wikipedia.org/wiki/ActionScript" },
        {
          kind: "homepage",
          title: "adobe.com/devnet/actionscript/",
          href: "https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/ActionScript_icon.png/121px-ActionScript_icon.png",
        },
      ],
      releases: [{ version: "3.0", date: "2006-01-01", kind: "stable" }],
      extensions: [".as"],
    })
    .addImplementations(["pl+adobe-flash-player", "pl+adobe-air", "pl+apache-flex", "pl+scaleform-gfx"])
    .addInfluences(["pl+hypertalk", "pl+javascript", "pl+java", "pl+xtalk"])
    .addPerson("person+gary-grossman", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+objects",
      "para+prototypes",
      "para+functional",
      "para+imperative",
      "para+scripting",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+active-scripting").merge({
    name: "Active Scripting",
    websites: [
      { kind: "wikipedia", title: "Active Scripting", href: "https://en.wikipedia.org/wiki/Active_Scripting" },
    ],
  });

  /**/

  g.buildPlang("pl+active-server-pages")
    .merge({
      name: "ASP",
      websites: [{ kind: "wikipedia", title: "ASP", href: "https://en.wikipedia.org/wiki/Active_Server_Pages" }],
    })
    .addInfluences(["pl+php"]);

  /**/

  g.buildPlang("pl+actor-based-concurrent").merge({
    name: "ABCL",
    websites: [
      { kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Actor-Based_Concurrent_Language" },
    ],
  });

  /**/

  g.buildPlang("pl+actor-model")
    .merge({
      name: "actor model",
      websites: [{ kind: "wikipedia", title: "Actors", href: "https://en.wikipedia.org/wiki/Actor_model" }],
    })
    .addInfluences(["pl+mdl"]);

  /**/

  g.buildPlang("pl+actor-model-middle-history").merge({
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

  g.buildPlang("pl+ada")
    .merge({
      name: "Ada",
      websites: [{ kind: "wikipedia", title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ada_horizon_green_logo_with_slogan.svg",
        },
      ],
      releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
    })
    .addDialects(["pl+spark", "pl+ravenscar-profile"])
    .addImplementations(["pl+ddc-i"])
    .addImplementation("pl+gnat", {
      refs: [{ href: "https://www.adacore.com/download", title: "Commercial software solutions for Ada, C and C++" }],
    })
    .addImplementation("pl+ptc", {
      refs: [{ href: "http://www.ptc.com/developer-tools/objectada", title: "PTC ObjectAda" }],
    })
    .addInfluences([
      "pl+algol",
      "pl+pascal",
      "pl+simula-67",
      "pl+cpp",
      "pl+smalltalk",
      "pl+modula",
      "pl+java",
      "pl+eiffel",
      "pl+clu",
    ])
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+imperative",
      "para+objects",
      "para+concurrent",
      "para+array",
      "para+distributed",
      "para+generic",
      "para+meta",
    ])
    .addParadigm("para+aspect", {
      refs: [
        {
          href: "https://web.archive.org/web/20160418132340/http://www.adacore.com/uploads/technical-papers/Ada2012_Rational_Introducion.pdf",
          title: "Ada2012 Rationale",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+adobe-air")
    .merge({
      name: "Adobe AIR",
      websites: [{ kind: "wikipedia", title: "Adobe AIR", href: "https://en.wikipedia.org/wiki/Adobe_AIR" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Adobe_AIR_logo.svg" }],
      releases: [
        { version: "51.0.1.3", date: "2024-01-01", kind: "stable" },
        { version: "33.1.1.932", kind: "preview" },
      ],
    })
    .addLicense("lic+proprietary", {
      refs: [{ href: "https://www.adobe.com/products/eulas/pdfs/Adobe_AIR.pdf", title: "Adobe AIR 1.1 EULA" }],
    })
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+arm", "platf+mips"]);

  /**/

  g.buildPlang("pl+adobe-flash-player").merge({
    name: "Adobe Flash Player",
    websites: [
      { kind: "wikipedia", title: "Adobe Flash Player", href: "https://en.wikipedia.org/wiki/Adobe_Flash_Player" },
    ],
  });

  /**/

  g.buildPlang("pl+advpl")
    .merge({
      name: "AdvPL",
      websites: [{ kind: "wikipedia", title: "AdvPL", href: "https://en.wikipedia.org/wiki/AdvPL" }],
    })
    .addInfluence("pl+xbase", {
      refs: [
        {
          href: "https://tdn.totvs.com/pages/viewpage.action?pageId=27675886",
          title: "What is AdvPL? - TOTVS Technology - TDN",
        },
      ],
    });

  /**/

  g.buildPlang("pl+agda")
    .merge({
      name: "Agda",
      websites: [
        { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(programming_language)" },
        { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Agda%27s_official_logo.svg" }],
      releases: [{ version: "2.6.3", date: "2023-01-01", kind: "stable" }],
      extensions: [".agda", ".lagda"],
    })
    .addImplementations(["pl+haskell"])
    .addInfluences(["pl+coq", "pl+epigram", "pl+haskell"])
    .addLicense("lic+bsd-s", { refs: [{ href: "http://code.haskell.org/Agda/LICENSE", title: "Agda license file" }] })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems([
      "tsys+strong",
      "tsys+static",
      "tsys+dependent",
      "tsys+nominative",
      "tsys+manifest",
      "tsys+inferred",
    ]);

  /**/

  g.buildPlang("pl+agentcubes")
    .merge({
      name: "AgentCubes",
      websites: [{ kind: "wikipedia", title: "AgentCubes", href: "https://en.wikipedia.org/wiki/AgentCubes" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AgentCubes_user_interface.png/121px-AgentCubes_user_interface.png",
        },
      ],
      releases: [{ version: "3.0", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+agentsheets", "pl+lisp", "pl+logo", "pl+smalltalk"])
    .addPerson("person+alexander-repenning", { role: "designer" })
    .addParadigms(["para+objects", "para+educational"]);

  /**/

  g.buildPlang("pl+agentsheets")
    .merge({
      name: "AgentSheets",
      websites: [{ kind: "wikipedia", title: "AgentSheets", href: "https://en.wikipedia.org/wiki/AgentSheets" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Agentsheets_IDE.jpg" }],
      releases: [{ version: "4.0", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+logo", "pl+smalltalk", "pl+karel", "pl+objectlogo"])
    .addPerson("person+alexander-repenning", { role: "designer" })
    .addParadigms(["para+objects", "para+educational"])
    .addPlatforms(["platf+jvm"]);

  /**/

  g.buildPlang("pl+agilent-vee")
    .merge({
      name: "Keysight VEE",
      websites: [
        { kind: "wikipedia", title: "Keysight VEE", href: "https://en.wikipedia.org/wiki/Agilent_VEE" },
        {
          kind: "homepage",
          title: "https://www.keysight.com/us/en/product/W4000D/vee-pro-9-33.html",
          href: "https://www.keysight.com/us/en/product/W4000D/vee-pro-9-33.html",
        },
      ],
    })
    .addLicenses(["lic+proprietary", "lic+commercial"]);

  /**/

  g.buildPlang("pl+agora")
    .merge({
      name: "Agora",
      websites: [
        { kind: "wikipedia", title: "Agora", href: "https://en.wikipedia.org/wiki/Agora_(programming_language)" },
      ],
    })
    .addInfluences(["pl+self"]);

  /**/

  g.buildPlang("pl+aimaco")
    .merge({
      name: "AIMACO",
      websites: [{ kind: "wikipedia", title: "AIMACO", href: "https://en.wikipedia.org/wiki/AIMACO" }],
    })
    .addInfluences(["pl+flow-matic", "pl+comtran"])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+aimms").merge({
    name: "AIMMS",
    websites: [
      { kind: "wikipedia", title: "AIMMS", href: "https://en.wikipedia.org/wiki/AIMMS" },
      { kind: "homepage", title: "AIMMS home page", href: "http://www.aimms.com" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/AIMMS_logo.png/121px-AIMMS_logo.png" },
    ],
  });

  /**/

  g.buildPlang("pl+akka")
    .merge({
      name: "Akka",
      websites: [{ kind: "wikipedia", title: "Akka", href: "https://en.wikipedia.org/wiki/Akka_(toolkit)" }],
    })
    .addInfluences(["pl+erlang"]);

  /**/

  g.buildPlang("pl+aldor")
    .merge({
      name: "Aldor",
      websites: [{ kind: "wikipedia", title: "Aldor", href: "https://en.wikipedia.org/wiki/Aldor" }],
      releases: [
        { version: "1.0.3", kind: "stable" },
        { version: "1.1.0", kind: "preview" },
      ],
    })
    .addImplementations(["pl+axiom"])
    .addInfluences(["pl+a-", "pl+pascal", "pl+haskell"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative", "para+dependent", "para+logic"])
    .addPlatforms(["platf+axiom", "platf+linux", "platf+win"]);

  /**/

  g.buildPlang("pl+alef")
    .merge({
      name: "Alef",
      websites: [
        { kind: "wikipedia", title: "Alef", href: "https://en.wikipedia.org/wiki/Alef_(programming_language)" },
      ],
    })
    .addInfluences(["pl+c", "pl+newsqueak"])
    .addParadigms(["para+compiled", "para+concurrent", "para+structured"])
    .addPlatforms(["platf+plan9"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+alf").merge({
    name: "ALF",
    websites: [{ kind: "wikipedia", title: "ALF", href: "https://en.wikipedia.org/wiki/ALF_(proof_assistant)" }],
  });

  /**/

  g.buildPlang("pl+algebraic-logic-functional")
    .merge({
      name: "ALF",
      websites: [
        {
          kind: "wikipedia",
          title: "ALF",
          href: "https://en.wikipedia.org/wiki/Algebraic_Logic_Functional_programming_language",
        },
      ],
    })
    .addInfluences(["pl+prolog"])
    .addParadigms(["para+multi", "para+logic", "para+functional"]);

  /**/

  g.buildPlang("pl+alice")
    .merge({
      name: "Alice",
      websites: [
        { kind: "wikipedia", title: "Alice", href: "https://en.wikipedia.org/wiki/Alice_(programming_language)" },
      ],
      releases: [{ version: "1.4", date: "2007-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ml", "pl+oz"])
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+functional",
      "para+distributed",
      "para+concurrent",
      "para+constraint",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+alma-0")
    .merge({
      name: "Alma-0",
      websites: [{ kind: "wikipedia", title: "Alma-0", href: "https://en.wikipedia.org/wiki/Alma-0" }],
    })
    .addInfluences(["pl+modula"])
    .addPerson("person+krzysztof-apt", { role: "designer" })
    .addPerson("person+centrum-wiskunde", { role: "developer" })
    .addParadigms(["para+multi", "para+constraint", "para+imperative", "para+logic"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+alphard").merge({
    name: "Alphard",
    websites: [
      { kind: "wikipedia", title: "Alphard", href: "https://en.wikipedia.org/wiki/Alphard_(programming_language)" },
    ],
  });

  /**/

  g.buildPlang("pl+ambienttalk")
    .merge({
      name: "AmbientTalk",
      websites: [{ kind: "wikipedia", title: "AmbientTalk", href: "https://en.wikipedia.org/wiki/AmbientTalk" }],
      releases: [{ version: "2.19", date: "2011-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+smalltalk", "pl+self", "pl+scheme", "pl+e", "pl+actor-based-concurrent"])
    .addParadigms(["para+objects", "para+prototypes", "para+concurrent", "para+event", "para+reflection"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+amesim")
    .merge({
      name: "AMESim",
      websites: [{ kind: "wikipedia", title: "Simcenter Amesim", href: "https://en.wikipedia.org/wiki/AMESim" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg" }],
      releases: [{ version: "unknown", date: "2310-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+amiga-e")
    .merge({
      name: "Amiga E",
      websites: [
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E#PortablE" },
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E" },
      ],
    })
    .addInfluences(["pl+ada", "pl+cpp", "pl+lisp"])
    .addLicenses(["lic+freeware"])
    .addParadigms(["para+multi", "para+functional", "para+objects", "para+imperative"])
    .addPlatforms(["platf+amiga"]);

  /**/

  g.buildPlang("pl+ampl")
    .merge({
      name: "AMPL",
      websites: [{ kind: "wikipedia", title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL" }],
      images: [
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/b/b6/AMPL_%28textbook_cover%29.jpg" },
      ],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+awk", "pl+c"])
    .addPerson("person+robert-fourer", { role: "designer" })
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+free-and-open-source"])
    .addParadigms(["para+multi", "para+dec", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"]);

  /**/

  g.buildPlang("pl+ansi-c").merge({
    name: "ANSI C",
    websites: [{ kind: "wikipedia", title: "ANSI C", href: "https://en.wikipedia.org/wiki/ANSI_C" }],
  });

  /**/

  g.buildPlang("pl+ap")
    .merge({
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
    })
    .addInfluences(["pl+apl"])
    .addPerson("person+arthur-whitney", { role: "designer" })
    .addPerson("person+morgan-stanley", { role: "developer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+array"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+apache-flex")
    .merge({
      name: "Apache Flex",
      websites: [{ kind: "wikipedia", title: "Apache Flex", href: "https://en.wikipedia.org/wiki/Apache_Flex" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Apache_Flex_logo.svg" }],
      releases: [{ version: "4.16.1", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache", "lic+mozilla-public"]);

  /**/

  g.buildPlang("pl+apache-groovy")
    .merge({
      name: "Apache Groovy",
      websites: [{ kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Apache_Groovy" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
    })
    .addImplementations(["pl+gradle", "pl+grails"])
    .addInfluences(["pl+java", "pl+python", "pl+ruby", "pl+smalltalk"])
    .addPerson("person+james-strachan", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+functional", "para+aspect", "para+scripting"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+duck"]);

  /**/

  g.buildPlang("pl+apache-pig")
    .merge({
      name: "Apache Pig",
      websites: [{ kind: "wikipedia", title: "Apache Pig", href: "https://en.wikipedia.org/wiki/Apache_Pig" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Apache_Pig_Logo.svg" }],
      releases: [{ version: "0.17.0", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache"]);

  /**/

  g.buildPlang("pl+apl")
    .merge({
      name: "APL",
      websites: [
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_(programming_language)" },
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ version: "unknown", date: "1375-01-01", kind: "stable" }],
    })
    .addPerson("person+larry-breed", { role: "developer" })
    .addPerson("person+dick-lathwell", { role: "developer" })
    .addPerson("person+roger-moore", { role: "developer" })
    .addLicenses(["lic+proprietary", "lic+open-source"])
    .addParadigms(["para+array", "para+functional", "para+structured", "para+modular"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+app-inventor-for-android")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/App_Inventor_2.png/220px-App_Inventor_2.png",
        },
      ],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+cc", "lic+apache"]);

  /**/

  g.buildPlang("pl+applescript")
    .merge({
      name: "AppleScript",
      websites: [{ kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" }],
      releases: [{ version: "2.8", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+hypertalk", "pl+smalltalk", "pl+xtalk"])
    .addLicenses(["lic+proprietary", "lic+apple-public-source"])
    .addParadigms(["para+natural", "para+scripting"])
    .addPlatforms(["platf+mac"])
    .addTypeSystems(["tsys+weak", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+apt")
    .merge({
      name: "APT",
      websites: [{ kind: "wikipedia", title: "APT", href: "https://en.wikipedia.org/wiki/APT_(programming_language)" }],
    })
    .addPerson("person+douglas-t-ross", { role: "designer" })
    .addParadigms(["para+numerical"]);

  /**/

  g.buildPlang("pl+arc")
    .merge({
      name: "Arc",
      websites: [{ kind: "wikipedia", title: "Arc", href: "https://en.wikipedia.org/wiki/Arc_(programming_language)" }],
      releases: [{ version: "3.2", date: "2018-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+racket"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addPerson("person+paul-graham", { role: "designer" })
    .addLicenses(["lic+artistic"])
    .addParadigms(["para+multi", "para+functional", "para+meta", "para+imperative"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+arexx").merge({
    name: "ARexx",
    websites: [{ kind: "wikipedia", title: "ARexx", href: "https://en.wikipedia.org/wiki/ARexx" }],
  });

  /**/

  g.buildPlang("pl+argus")
    .merge({
      name: "Argus",
      websites: [
        { kind: "wikipedia", title: "Argus", href: "https://en.wikipedia.org/wiki/Argus_(programming_language)" },
      ],
    })
    .addInfluences(["pl+clu"]);

  /**/

  g.buildPlang("pl+arith-matic").merge({
    name: "ARITH-MATIC",
    websites: [{ kind: "wikipedia", title: "ARITH-MATIC", href: "https://en.wikipedia.org/wiki/ARITH-MATIC" }],
  });

  /**/

  g.buildPlang("pl+arkts")
    .merge({
      name: "ArkTS",
      websites: [{ kind: "wikipedia", title: "ArkTS", href: "https://en.wikipedia.org/wiki/ArkTS" }],
      releases: [{ version: "4.1.7.3", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences([
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
    ])
    .addLicenses(["lic+apache", "lic+proprietary"])
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"])
    .addPlatforms(["platf+mac", "platf+win", "platf+android", "platf+ios"])
    .addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+structural"]);

  /**/

  g.buildPlang("pl+arm-architecture-family").merge({
    name: "ARM",
    websites: [{ kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" }],
  });

  /**/

  g.buildPlang("pl+arpanet").merge({
    name: "ARPAnet",
    websites: [{ kind: "wikipedia", title: "ARPAnet", href: "https://en.wikipedia.org/wiki/ARPAnet" }],
  });

  /**/

  g.buildPlang("pl+asp.net")
    .merge({
      name: "ASP.NET",
      websites: [{ kind: "wikipedia", title: "ASP.NET (software)", href: "https://en.wikipedia.org/wiki/ASP.NET" }],
      releases: [{ version: "4.8.1", date: "2022-01-01", kind: "stable" }],
      extensions: [".aspx", ".cshtml", ".vbhtml"],
    })
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://web.archive.org/web/20150402161923/https://msdn.microsoft.com/en-us/library/ms994405.aspx",
          title: "Microsoft .NET Framework Redistributable EULA",
        },
      ],
    })
    .addPlatforms(["platf+.net"]);

  /**/

  g.buildPlang("pl+atlas-autocode")
    .merge({
      name: "Atlas Autocode",
      websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
    })
    .addImplementations(["pl+algol", "pl+edinburgh-imp"])
    .addInfluences(["pl+algol"])
    .addPerson("person+tony-brooker", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+ats")
    .merge({
      name: "ATS",
      websites: [{ kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
      releases: [{ version: "0.4.2", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+dependent-ml", "pl+ml", "pl+ocaml", "pl+cpp"])
    .addLicenses(["lic+gpl"])
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+concurrent",
      "para+modular",
    ])
    .addTypeSystems(["tsys+static", "tsys+dependent"]);

  /**/

  g.buildPlang("pl+atscript")
    .merge({
      name: "AtScript",
      websites: [{ kind: "wikipedia", title: "AtScript", href: "https://en.wikipedia.org/wiki/AtScript" }],
    })
    .addInfluences(["pl+typescript"]);

  /**/

  g.buildPlang("pl+autoit")
    .merge({
      name: "AutoIt",
      websites: [{ kind: "wikipedia", title: "AutoIt", href: "https://en.wikipedia.org/wiki/AutoIt" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Autoitlogo.png/121px-Autoitlogo.png",
        },
      ],
      releases: [{ version: "3.3.16.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+freeware"])
    .addParadigms(["para+imperative", "para+functional", "para+reflective"])
    .addPlatforms(["platf+ia-32", "platf+x64", "platf+win"]);

  /**/

  g.buildPlang("pl+awk")
    .merge({
      name: "AWK",
      websites: [{ kind: "wikipedia", title: "AWK", href: "https://en.wikipedia.org/wiki/AWK" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The-AWK-Programming-Language.svg",
        },
      ],
      releases: [{ version: "1003.1", date: "1003-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+sed", "pl+snobol"])
    .addPerson("person+alfred-aho", { role: "designer" })
    .addPerson("person+peter-weinberger", { role: "designer" })
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addParadigms(["para+scripting", "para+imperative"])
    .addParadigm("para+data", {
      refs: [
        {
          href: "https://web.archive.org/web/20150427143548/https://www6.software.ibm.com/developerworks/education/au-gawk/au-gawk-a4.pdf",
          title: "Get started with GAWK: AWK language fundamentals",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+axiom")
    .merge({
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
    })
    .addLicenses(["lic+bsd-s"]);

  /**/

  g.buildPlang("pl+axum")
    .merge({
      name: "Axum",
      websites: [
        { kind: "wikipedia", title: "Axum", href: "https://en.wikipedia.org/wiki/Axum_(programming_language)" },
        { kind: "homepage", title: "Axum at DevLabs", href: "http://msdn.microsoft.com/en-us/devlabs/dd795202.aspx" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Axum_Banner.png/150px-Axum_Banner.png",
        },
      ],
      releases: [{ version: "unknown", date: "2009-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+closed-source"])
    .addPlatforms(["platf+x86", "platf+x86-64", "platf+win"]);

  /**/

  g.buildPlang("pl+b")
    .merge({
      name: "B",
      websites: [{ kind: "wikipedia", title: "B", href: "https://en.wikipedia.org/wiki/B_(programming_language)" }],
    })
    .addInfluences(["pl+bcpl", "pl+pl-slash", "pl+tmg"])
    .addPerson("person+ken-thompson", { role: "designer" })
    .addPerson("person+dennis-ritchie", { role: "developer" });

  /**/

  g.buildPlang("pl+b-prolog").merge({
    name: "B-Prolog",
    websites: [{ kind: "wikipedia", title: "B-Prolog", href: "https://en.wikipedia.org/wiki/B-Prolog" }],
  });

  /**/

  g.buildPlang("pl+ballerina")
    .merge({
      name: "Ballerina",
      websites: [
        {
          kind: "wikipedia",
          title: "Ballerina",
          href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
        },
      ],
    })
    .addInfluences(["pl+java", "pl+javascript", "pl+go", "pl+rust", "pl+c-sharp"])
    .addPerson("person+sanjiva-weerawarana", { role: "designer" })
    .addPerson("person+james-clark", { role: "designer" })
    .addPerson("person+frank-leymann", { role: "designer" })
    .addLicense("lic+apache", {
      refs: [
        { href: "https://github.com/ballerina-platform/ballerina-lang/blob/master/LICENSE", title: "WSO2 / LICENSE" },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+structural", "tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+bash")
    .merge({
      name: "Bash",
      websites: [{ kind: "wikipedia", title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" }],
      releases: [{ version: "5.2.21", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+gnu"]);

  /**/

  g.buildPlang("pl+bazel").merge({
    name: "Starlark",
    websites: [{ kind: "wikipedia", title: "Starlark", href: "https://en.wikipedia.org/wiki/Bazel_(software)" }],
  });

  /**/

  g.buildPlang("pl+bc")
    .merge({
      name: "bc",
      websites: [{ kind: "wikipedia", title: "bc", href: "https://en.wikipedia.org/wiki/Bc_(programming_language)" }],
    })
    .addPerson("person+robert-morris", { role: "developer" })
    .addPerson("person+lorinda-cherry", { role: "developer" })
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+bcpl")
    .merge({
      name: "BCPL",
      websites: [{ kind: "wikipedia", title: "BCPL", href: "https://en.wikipedia.org/wiki/BCPL" }],
    })
    .addInfluences(["pl+cpl", "pl+combined"])
    .addPerson("person+martin-richards", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"]);

  /**/

  g.buildPlang("pl+beanshell")
    .merge({
      name: "BeanShell",
      websites: [{ kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" }],
      releases: [{ version: "2.1.1", date: "2022-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+java"])
    .addInfluences(["pl+java", "pl+javascript", "pl+perl"])
    .addLicenses(["lic+apache", "lic+sun-public", "lic+lgpl"])
    .addParadigms(["para+objects", "para+scripting"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+befunge")
    .merge({
      name: "Befunge",
      websites: [{ kind: "wikipedia", title: "Befunge", href: "https://en.wikipedia.org/wiki/Befunge" }],
    })
    .addInfluences(["pl+forth", "pl+esoteric"]);

  /**/

  g.buildPlang("pl+begriffsschrift").merge({
    name: "Begriffsschrift",
    websites: [{ kind: "wikipedia", title: "Begriffsschrift", href: "https://en.wikipedia.org/wiki/Begriffsschrift" }],
  });

  /**/

  g.buildPlang("pl+beta")
    .merge({
      name: "BETA",
      websites: [
        { kind: "wikipedia", title: "BETA", href: "https://en.wikipedia.org/wiki/BETA_(programming_language)" },
      ],
    })
    .addInfluences(["pl+simula", "pl+simula-67", "pl+simula67"])
    .addPerson("person+birger-m-ller-pedersen", { role: "designer" })
    .addPerson("person+kristen-nygaard", { role: "designer" })
    .addParadigms(["para+objects"]);

  /**/

  g.buildPlang("pl+bitcoin")
    .merge({
      name: "Bitcoin Script",
      websites: [
        { kind: "wikipedia", title: "Bitcoin Script", href: "https://en.wikipedia.org/wiki/Bitcoin#Transactions" },
      ],
    })
    .addInfluences(["pl+forth"]);

  /**/

  g.buildPlang("pl+bliss")
    .merge({
      name: "BLISS",
      websites: [{ kind: "wikipedia", title: "BLISS", href: "https://en.wikipedia.org/wiki/BLISS" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+w-a-wulf", { role: "designer" })
    .addPerson("person+a-n-habermann", { role: "designer" })
    .addParadigms(["para+structured", "para+imperative"])
    .addPlatforms(["platf+dec", "platf+mips", "platf+ia-32", "platf+ia-64", "platf+x86-64", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+blockly")
    .merge({
      name: "Blockly",
      websites: [{ kind: "wikipedia", title: "Blockly", href: "https://en.wikipedia.org/wiki/Blockly" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Blockly-Demo.png/220px-Blockly-Demo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+web"]);

  /**/

  g.buildPlang("pl+boo")
    .merge({
      name: "Boo",
      websites: [{ kind: "wikipedia", title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BooLogo.png" }],
      releases: [{ version: "0.9.7", date: "2013-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c-sharp"])
    .addInfluences(["pl+c-sharp", "pl+python"])
    .addLicense("lic+bsd-s", {
      refs: [{ href: "https://github.com/bamboo/boo/blob/master/license.txt", title: "license.txt" }],
    })
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+.net", "platf+mono"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred", "tsys+duck"]);

  /**/

  g.buildPlang("pl+boomerang")
    .merge({
      name: "Boomerang",
      websites: [
        {
          kind: "wikipedia",
          title: "Boomerang",
          href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)",
        },
      ],
      releases: [{ version: "0.2", date: "2009-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ocaml"])
    .addPlatforms(["platf+linux", "platf+mac"]);

  /**/

  g.buildPlang("pl+bosque")
    .merge({
      name: "Bosque",
      websites: [
        { kind: "wikipedia", title: "Bosque", href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png",
        },
      ],
    })
    .addInfluences(["pl+javascript", "pl+typescript", "pl+ml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+typed"]);

  /**/

  g.buildPlang("pl+bourne-shell").merge({
    name: "Bourne shell",
    websites: [{ kind: "wikipedia", title: "Bourne shell", href: "https://en.wikipedia.org/wiki/Bourne_shell" }],
    images: [
      {
        kind: "screenshot",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png/220px-Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png",
      },
    ],
  });

  /**/

  g.buildPlang("pl+brainfuck")
    .merge({
      name: "Brainfuck",
      websites: [{ kind: "wikipedia", title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck" }],
    })
    .addInfluences(["pl+p--", "pl+esoteric"])
    .addParadigms(["para+esoteric", "para+imperative", "para+structured"]);

  /**/

  g.buildPlang("pl+bs")
    .merge({
      name: "bs",
      websites: [{ kind: "wikipedia", title: "bs", href: "https://en.wikipedia.org/wiki/Bs_(programming_language)" }],
    })
    .addInfluences(["pl+basic", "pl+snobol", "pl+c"])
    .addPlatforms(["platf+unix"]);

  /**/

  g.buildPlang("pl+burroughs-b5000").merge({
    name: "Burroughs B5000",
    websites: [{ kind: "wikipedia", title: "Burroughs B5000", href: "https://en.wikipedia.org/wiki/Burroughs_B5000" }],
  });

  /**/

  g.buildPlang("pl+c-sharp")
    .merge({
      name: "C#",
      websites: [
        { kind: "wikipedia", title: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
      releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
      extensions: [".cs", ".csx"],
    })
    .addDialects(["pl+c-", "pl+polyphonic-c-sharp", "pl+nemerle"])
    .addImplementations(["pl+ms-visual-c-sharp", "pl+.net", "pl+mono", "pl+win", "pl+.net-framework", "pl+dotgnu"])
    .addInfluences([
      "pl+c",
      "pl+cpp",
      "pl+c-",
      "pl+eiffel",
      "pl+f-sharp",
      "pl+haskell",
      "pl+scala",
      "pl+icon",
      "pl+j-sharp",
      "pl+visual-jpp",
      "pl+java",
      "pl+ml",
      "pl+modula",
      "pl+basic",
      "pl+d",
    ])
    .addInfluence("pl+pascal", {
      refs: [
        {
          href: "https://web.archive.org/web/20100324124903/http://www.computerworld.com.au/article/261958/a-z_programming_languages_c_/?pp=7",
          title: "The A-Z of Programming Languages: C#",
        },
      ],
    })
    .addPerson("person+anders-hejlsberg", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+imperative",
      "para+objects",
      "para+event",
      "para+the",
      "para+functional",
      "para+generic",
      "para+reflective",
      "para+concurrent",
    ])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+inferred"])
    .addTypeSystem("tsys+dynamic", {
      refs: [
        {
          href: "https://web.archive.org/web/20120103195731/http://code.msdn.microsoft.com/csharpfuture/Release/ProjectReleases.aspx?ReleaseId=1686",
          title: "New features in C# 4.0",
        },
      ],
    });

  /**/

  g.buildPlang("pl+c-shell")
    .merge({
      name: "csh",
      websites: [{ kind: "wikipedia", title: "csh", href: "https://en.wikipedia.org/wiki/C_shell" }],
    })
    .addInfluences(["pl+c"]);

  /**/

  g.buildPlang("pl+c-slashal")
    .merge({
      name: "C/AL",
      websites: [{ kind: "wikipedia", title: "C/AL", href: "https://en.wikipedia.org/wiki/C/AL" }],
    })
    .addInfluences(["pl+pascal"])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+c-star")
    .merge({
      name: "C*",
      websites: [{ kind: "wikipedia", title: "C*", href: "https://en.wikipedia.org/wiki/C*" }],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ansi-c", "pl+star-lisp"])
    .addPerson("person+thinking-machines", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+parallel"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+cache-objectscript")
    .merge({
      name: "Caché ObjectScript",
      websites: [
        {
          kind: "wikipedia",
          title: "Caché ObjectScript",
          href: "https://en.wikipedia.org/wiki/Cach%C3%A9_ObjectScript",
        },
      ],
    })
    .addInfluences(["pl+mumps"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+cadence-skill")
    .merge({
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/Cadence_SKILL" }],
    })
    .addInfluences(["pl+armed-bear-common-lisp", "pl+scheme", "pl+common-lisp", "pl+common-lisp-object-system"])
    .addParadigms(["para+functional", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+cal")
    .merge({
      name: "CAL",
      websites: [{ kind: "wikipedia", title: "CAL", href: "https://en.wikipedia.org/wiki/CAL_(programming_language)" }],
    })
    .addInfluences(["pl+joss"]);

  /**/

  g.buildPlang("pl+caml")
    .merge({
      name: "Caml",
      websites: [{ kind: "wikipedia", title: "Caml", href: "https://en.wikipedia.org/wiki/Caml" }],
      images: [
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caml.gif/121px-Caml.gif" },
      ],
      releases: [{ version: "0.75", date: "2002-01-01", kind: "stable" }],
    })
    .addDialects(["pl+ats", "pl+f-sharp", "pl+f-star", "pl+ocaml", "pl+reason"])
    .addInfluences(["pl+ml"])
    .addPerson("person+gerard-huet", { role: "designer" })
    .addPerson("person+xavier-leroy", { role: "designer" })
    .addLicenses(["lic+q-public", "lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+carbon")
    .merge({
      name: "Carbon",
      websites: [
        { kind: "wikipedia", title: "Carbon", href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
        },
      ],
      extensions: [".carbon"],
    })
    .addImplementations(["pl+cpp"])
    .addInfluences(["pl+cpp"])
    .addLicenses(["lic+apache"])
    .addTypeSystems(["tsys+static", "tsys+nominative", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+catia").merge({
    name: "CATIA",
    websites: [{ kind: "wikipedia", title: "CATIA", href: "https://en.wikipedia.org/wiki/CATIA" }],
  });

  /**/

  g.buildPlang("pl+catrobat")
    .merge({
      name: "Catrobat",
      websites: [{ kind: "wikipedia", title: "Catrobat", href: "https://en.wikipedia.org/wiki/Catrobat" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Catrobat_logo.png/121px-Catrobat_logo.png",
        },
      ],
      releases: [{ version: "1.11", kind: "stable" }],
    })
    .addInfluence("pl+scratch", { refs: [{ href: "https://catrobat.org/", title: "Catrobat Home" }] })
    .addLicenses(["lic+gnu-affero-gpl"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+cecil")
    .merge({
      name: "Cecil",
      websites: [
        { kind: "wikipedia", title: "Cecil", href: "https://en.wikipedia.org/wiki/Cecil_(programming_language)" },
      ],
    })
    .addPerson("person+craig-chambers", { role: "designer" })
    .addParadigms(["para+objects"]);

  /**/

  g.buildPlang("pl+cedar")
    .merge({
      name: "Cedar",
      websites: [
        { kind: "wikipedia", title: "Mesa[1]", href: "https://en.wikipedia.org/wiki/Cedar_(programming_language)" },
      ],
      releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol", "pl+cedar", "pl+mesa"]);

  /**/

  g.buildPlang("pl+ceemac").merge({
    name: "CEEMAC",
    websites: [{ kind: "wikipedia", title: "CEEMAC", href: "https://en.wikipedia.org/wiki/CEEMAC" }],
  });

  /**/

  g.buildPlang("pl+ceylon")
    .merge({
      name: "Ceylon",
      websites: [
        { kind: "wikipedia", title: "Ceylon", href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
        },
      ],
      releases: [{ version: "1.3.3", date: "2017-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+scala", "pl+smalltalk"])
    .addInfluence("pl+java", {
      refs: [
        {
          href: "http://ceylon-lang.org/documentation/1.2/faq/#what_is_ceylon",
          title: "Frequently Asked Questions: What is Ceylon?",
        },
      ],
    })
    .addInfluence("pl+ml", {
      refs: [{ href: "https://gitter.im/ceylon/user?at=5660a7242cbea1d7054de9d9", title: "ceylon/user - Gitter" }],
    })
    .addInfluence("pl+lisp", {
      refs: [{ href: "https://gitter.im/ceylon/user?at=5660a90e5057376520db6f8b", title: "ceylon/user - Gitter" }],
    })
    .addInfluence("pl+whiley", {
      refs: [
        {
          href: "https://jaxenter.com/top-10-ceylon-language-features-java-wishes-it-had-108003.html",
          title: "Top 10 Ceylon language features Java wishes it had",
        },
      ],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+jvm", "platf+javascript"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/

  g.buildPlang("pl+cg")
    .merge({
      name: "Cg/HLSL",
      websites: [
        { kind: "wikipedia", title: "Cg/HLSL", href: "https://en.wikipedia.org/wiki/Cg_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HLSL-Examples-1.PNG/300px-HLSL-Examples-1.PNG",
        },
      ],
    })
    .addInfluences(["pl+c", "pl+renderman-shading"]);

  /**/

  g.buildPlang("pl+ch")
    .merge({
      name: "CH C/C++ interpreter",
      websites: [
        {
          kind: "wikipedia",
          title: "CH C/C++ interpreter",
          href: "https://en.wikipedia.org/wiki/Ch_(computer_programming)",
        },
      ],
      releases: [{ version: "8.0.0", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary", "lic+freeware", "lic+trialware"])
    .addPlatforms(["platf+x86"]);

  /**/

  g.buildPlang("pl+chakra").merge({
    name: "Chakra",
    websites: [{ kind: "wikipedia", title: "Chakra", href: "https://en.wikipedia.org/wiki/Chakra_(JScript_engine)" }],
  });

  /**/

  g.buildPlang("pl+chapel")
    .merge({
      name: "Chapel",
      websites: [
        { kind: "wikipedia", title: "Chapel", href: "https://en.wikipedia.org/wiki/Chapel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Cray_Chapel_Logo.png" }],
      releases: [{ version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+cray-mta"])
    .addInfluence("pl+ada", {
      refs: [
        {
          href: "https://ghostarchive.org/archive/20221009/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20180624150422/https://chapel-lang.org/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgments)",
        },
        { href: "http://chapel-lang.org/spec/spec-0.98.pdf", title: "Chapel spec (Acknowledgments)" },
      ],
    })
    .addInfluence("pl+fortran", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+zpl", {
      refs: [{ href: "http://chapel.cray.com/spec/spec-0.98.pdf", title: "Chapel spec (Acknowledgements)" }],
    })
    .addInfluence("pl+cray-xmt", {
      refs: [{ href: "http://chapel-lang.org/papers/BriefOverviewChapel.pdf", title: "A Brief Overview of Chapel" }],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgments)",
        },
      ],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects", "para+partitioned", "para+parallel"])
    .addPlatforms(["platf+aws", "platf+mac", "platf+linux", "platf+posix", "platf+win", "platf+cygwin", "platf+bsd"])
    .addTypeSystems(["tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+charm")
    .merge({
      name: "Charm",
      websites: [{ kind: "wikipedia", title: "Charm", href: "https://en.wikipedia.org/wiki/Charm_(language)" }],
    })
    .addInfluences(["pl+rtl-slash2", "pl+c", "pl+pascal"])
    .addParadigms(["para+structured"])
    .addPlatforms(["platf+risc-os"]);

  /**/

  g.buildPlang("pl+chef").merge({
    name: "Chef",
    websites: [{ kind: "wikipedia", title: "Chef", href: "https://en.wikipedia.org/wiki/Chef_(software)" }],
  });

  /**/

  g.buildPlang("pl+chill")
    .merge({
      name: "CHILL",
      websites: [{ kind: "wikipedia", title: "CHILL", href: "https://en.wikipedia.org/wiki/CHILL" }],
      releases: [{ version: "3.0", date: "2003-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cobol", "pl+pl-slash"])
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+chisel")
    .merge({
      name: "Chisel",
      websites: [
        { kind: "wikipedia", title: "Chisel", href: "https://en.wikipedia.org/wiki/Chisel_(programming_language)" },
      ],
    })
    .addInfluences(["pl+scala"]);

  /**/

  g.buildPlang("pl+chuck")
    .merge({
      name: "ChucK",
      websites: [{ kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" }],
      releases: [{ version: "1.5.2.4", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+ge-wang", { role: "designer" })
    .addLicenses(["lic+mac-os-x", "lic+linux", "lic+win", "lic+gpl", "lic+ios"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+ciao")
    .merge({
      name: "Ciao",
      websites: [
        { kind: "wikipedia", title: "Ciao", href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
        },
      ],
    })
    .addInfluences(["pl+prolog"])
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms(["para+logic", "para+functional", "para+modular", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+win"]);

  /**/

  g.buildPlang("pl+cilk")
    .merge({
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
    })
    .addInfluences(["pl+c"])
    .addParadigms(["para+imperative", "para+structured", "para+parallel"])
    .addPlatforms(["platf+unix", "platf+mac"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+cilk-plus")
    .merge({
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
    })
    .addInfluences(["pl+c"])
    .addParadigms(["para+imperative", "para+structured", "para+parallel"])
    .addPlatforms(["platf+unix", "platf+mac"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+claire")
    .merge({
      name: "Claire",
      websites: [
        { kind: "wikipedia", title: "Claire", href: "https://en.wikipedia.org/wiki/Claire_(programming_language)" },
      ],
      releases: [{ version: "3.3.46", date: "2009-01-01", kind: "stable" }],
      extensions: [".cl"],
    })
    .addInfluences(["pl+smalltalk", "pl+setl", "pl+ops5", "pl+lisp", "pl+ml", "pl+c"])
    .addLicenses(["lic+permissive-free-licence"])
    .addParadigms(["para+multi", "para+functional", "para+objects", "para+class", "para+production", "para+reflection"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+clang")
    .merge({
      name: "Clang",
      websites: [{ kind: "wikipedia", title: "Clang", href: "https://en.wikipedia.org/wiki/Clang" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Clang_13.0.1_version_information_screenshot.png/220px-Clang_13.0.1_version_information_screenshot.png",
        },
      ],
      releases: [{ version: "18.1.6", date: "2024-01-01", kind: "stable" }],
    })
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://web.archive.org/web/20201111220059/https://releases.llvm.org/9.0.0/LICENSE.TXT",
          title: "LICENSE.TXT",
        },
      ],
    })
    .addPlatforms(["platf+aarch64", "platf+arm", "platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+clarion")
    .merge({
      name: "Clarion",
      websites: [
        { kind: "wikipedia", title: "Clarion", href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2018-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+ia-32", "platf+dos", "platf+win"]);

  /**/

  g.buildPlang("pl+clean")
    .merge({
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
    })
    .addInfluences(["pl+miranda", "pl+haskell", "pl+iswim"])
    .addLicense("lic+bsd-s", {
      refs: [{ href: "https://clean.cs.ru.nl/Download_Clean#Clean_3.0_License", title: "Download Clean" }],
    })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+clipper")
    .merge({
      name: "Clipper",
      websites: [
        { kind: "wikipedia", title: "Clipper", href: "https://en.wikipedia.org/wiki/Clipper_(programming_language)" },
      ],
      releases: [{ version: "5.3", date: "1997-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+dbase"])
    .addPlatforms(["platf+dos"]);

  /**/

  g.buildPlang("pl+clips")
    .merge({
      name: "CLIPS",
      websites: [
        { kind: "wikipedia", title: "CLIPS", href: "https://en.wikipedia.org/wiki/CLIPS_(programming_language)" },
        { kind: "homepage", title: "https://clipsrules.net", href: "https://clipsrules.net" },
      ],
    })
    .addParadigms(["para+expert"]);

  /**/

  g.buildPlang("pl+clojure")
    .merge({
      name: "Clojure",
      websites: [
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure" },
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" }],
      releases: [{ version: "1.11.2", date: "2024-01-01", kind: "stable" }],
      extensions: [".clj", ".cljc", ".cljd", ".cljr", ".cljs", ".edn"],
    })
    .addInfluences([
      "pl+armed-bear-common-lisp",
      "pl+common-lisp",
      "pl+java",
      "pl+ml",
      "pl+prolog",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
    ])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey/",
          title: "Rich Hickey Q&A",
        },
      ],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey",
          title: "Rich Hickey Q&A by Michael Fogus",
        },
      ],
    })
    .addInfluence("pl+erlang", {
      refs: [
        {
          href: "http://radar.oreilly.com/2011/06/clojure-java-lisp-jvm.html",
          title: "Clojure: Lisp meets Java, with a side of Erlang - O'Reilly Radar",
        },
      ],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey",
          title: "Rich Hickey Q&A by Michael Fogus",
        },
      ],
    })
    .addPerson("person+rich-hickey", { role: "designer" })
    .addLicenses(["lic+eclipse-public"])
    .addParadigms(["para+multi"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+clozure-cl")
    .merge({
      name: "Clozure CL",
      websites: [{ kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" }],
      releases: [{ version: "1.12.2", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+lgpl"])
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://lists.clozure.com/pipermail/openmcl-devel/2016-January/011174.html",
          title: "Clozure CL now Apache 2 licensed",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+clu")
    .merge({
      name: "CLU",
      websites: [{ kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" }],
      releases: [{ version: "1.5", date: "1989-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol", "pl+lisp", "pl+simula", "pl+alphard", "pl+simula-67", "pl+simula67"])
    .addPerson("person+barbara-liskov", { role: "designer" })
    .addParadigms(["para+multi", "para+objects", "para+imperative"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+cms-2")
    .merge({
      name: "CMS-2",
      websites: [
        { kind: "wikipedia", title: "CMS-2", href: "https://en.wikipedia.org/wiki/CMS-2_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/CMS-2Y_Programmers_Reference_Manual_for_the_AN_UYK-7_and_AN_UYK-43_Oct86.jpg/121px-CMS-2Y_Programmers_Reference_Manual_for_the_AN_UYK-7_and_AN_UYK-43_Oct86.jpg",
        },
      ],
    })
    .addInfluences(["pl+fortran", "pl+jovial", "pl+pl-slash"])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+cms-exec").merge({
    name: "EXEC",
    websites: [{ kind: "wikipedia", title: "EXEC", href: "https://en.wikipedia.org/wiki/CMS_EXEC" }],
  });

  /**/

  g.buildPlang("pl+cmucl")
    .merge({
      name: "CMUCL",
      websites: [{ kind: "wikipedia", title: "CMUCL", href: "https://en.wikipedia.org/wiki/CMUCL" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+public-domain"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+cobol")
    .merge({
      name: "COBOL",
      websites: [
        { kind: "wikipedia", title: "COBOL", href: "https://en.wikipedia.org/wiki/COBOL" },
        { kind: "wikipedia", title: "CobolScript", href: "https://en.wikipedia.org/wiki/CobolScript" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/COBOL_Report_Apr60.djvu/page1-121px-COBOL_Report_Apr60.djvu.jpg",
        },
      ],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "stable" }],
      extensions: [".cbl", ".cob", ".cpy"],
    })
    .addDialects(["pl+watbol"])
    .addDialect("pl+x-slashopen", {
      refs: [
        {
          href: "https://pubs.opengroup.org/onlinepubs/009680799/toc.pdf",
          title: "Technical Standard, COBOL Language",
        },
      ],
    })
    .addInfluences([
      "pl+aimaco",
      "pl+comtran",
      "pl+fact-computer",
      "pl+flow-matic",
      "pl+cpp",
      "pl+eiffel",
      "pl+smalltalk",
    ])
    .addInfluence("pl+cobol", {
      refs: [
        {
          href: "http://dblp1.uni-trier.de/db/conf/edoc/edoc2000.html",
          title: "Enterprise Distributed Object Computing Conference",
        },
      ],
    })
    .addParadigms(["para+imperative", "para+objects", "para+generic"])
    .addTypeSystems(["tsys+weak", "tsys+static"]);

  /**/

  g.buildPlang("pl+cobra")
    .merge({
      name: "Cobra",
      websites: [
        { kind: "wikipedia", title: "Cobra", href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)" },
      ],
    })
    .addInfluences(["pl+python", "pl+eiffel", "pl+c-sharp", "pl+objective-c"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+objects"])
    .addPlatforms(["platf+.net", "platf+mono"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+cocoa").merge({
    name: "Cocoa",
    websites: [{ kind: "wikipedia", title: "Cocoa", href: "https://en.wikipedia.org/wiki/Cocoa_(API)" }],
  });

  /**/

  g.buildPlang("pl+coffeescript")
    .merge({
      name: "CoffeeScript",
      websites: [{ kind: "wikipedia", title: "CoffeeScript", href: "https://en.wikipedia.org/wiki/CoffeeScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg" }],
      releases: [{ version: "2.7.0", date: "2022-01-01", kind: "stable" }],
      extensions: [".coffee"],
    })
    .addInfluences(["pl+javascript", "pl+ruby"])
    .addInfluence("pl+python", {
      refs: [{ href: "https://web.archive.org/web/20200612100004/http://coffeescript.org/", title: "CoffeeScript" }],
    })
    .addPerson("person+jeremy-ashkenas", { role: "designer" })
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+prototypes", "para+functional", "para+imperative", "para+scripting"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+coldfusion").merge({
    name: "Adobe ColdFusion",
    websites: [{ kind: "wikipedia", title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adobe_ColdFusion_logo_2021.svg" },
    ],
  });

  /**/

  g.buildPlang("pl+comal")
    .merge({
      name: "COMAL",
      websites: [{ kind: "wikipedia", title: "COMAL", href: "https://en.wikipedia.org/wiki/COMAL" }],
    })
    .addInfluences(["pl+basic", "pl+pascal"])
    .addParadigms(["para+structured"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+combined")
    .merge({
      name: "CPL",
      websites: [
        { kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Combined_Programming_Language" },
      ],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+christopher-strachey", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+functional"]);

  /**/

  g.buildPlang("pl+comit")
    .merge({
      name: "COMIT",
      websites: [{ kind: "wikipedia", title: "COMIT", href: "https://en.wikipedia.org/wiki/COMIT" }],
    })
    .addPerson("person+victor-yngve", { role: "designer" });

  /**/

  g.buildPlang("pl+communicating-sequential-processes").merge({
    name: "Communicating sequential processes",
    websites: [
      {
        kind: "wikipedia",
        title: "Communicating Sequential Processes",
        href: "https://en.wikipedia.org/wiki/Communicating_Sequential_Processes",
      },
    ],
  });

  /**/

  g.buildPlang("pl+comtran")
    .merge({
      name: "COMTRAN",
      websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
    })
    .addInfluences(["pl+flow-matic"])
    .addPerson("person+bob-bemer", { role: "developer" });

  /**/

  g.buildPlang("pl+concurrent-euclid")
    .merge({
      name: "Concurrent Euclid",
      websites: [
        {
          kind: "wikipedia",
          title: "Concurrent Euclid (ConEuc)",
          href: "https://en.wikipedia.org/wiki/Concurrent_Euclid_(programming_language)",
        },
      ],
    })
    .addInfluences(["pl+euclid", "pl+communicating-sequential-processes"])
    .addPerson("person+james-cordy", { role: "designer" })
    .addPerson("person+ric-holt", { role: "designer" })
    .addParadigms(["para+multi", "para+structured", "para+imperative", "para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+concurrent-ml").merge({
    name: "Concurrent ML",
    websites: [{ kind: "wikipedia", title: "Concurrent ML", href: "https://en.wikipedia.org/wiki/Concurrent_ML" }],
  });

  /**/

  g.buildPlang("pl+constraint-handling-rules")
    .merge({
      name: "CHR",
      websites: [
        {
          kind: "wikipedia",
          title: "Constraint Handling Rules (CHR)",
          href: "https://en.wikipedia.org/wiki/Constraint_Handling_Rules",
        },
      ],
    })
    .addInfluences(["pl+prolog"])
    .addParadigms(["para+constraint", "para+dec"]);

  /**/

  g.buildPlang("pl+contextual-query")
    .merge({
      name: "CQL",
      websites: [{ kind: "wikipedia", title: "CQL", href: "https://en.wikipedia.org/wiki/Contextual_Query_Language" }],
    })
    .addInfluences(["pl+sql"]);

  /**/

  g.buildPlang("pl+control")
    .merge({
      name: "CL",
      websites: [
        { kind: "wikipedia", title: "Control Language", href: "https://en.wikipedia.org/wiki/Control_Language" },
      ],
    })
    .addInfluences(["pl+pl-slash"]);

  /**/

  g.buildPlang("pl+coq")
    .merge({
      name: "Coq",
      websites: [{ kind: "wikipedia", title: "Coq", href: "https://en.wikipedia.org/wiki/Coq_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Coq_logo.png" }],
      releases: [{ version: "8.19.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ml", "pl+ocaml"])
    .addLicenses(["lic+lgpl"]);

  /**/

  g.buildPlang("pl+coral")
    .merge({
      name: "Coral 66",
      websites: [
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/Coral_66" },
        { kind: "wikipedia", title: "Coral 66", href: "https://en.wikipedia.org/wiki/CORAL" },
      ],
    })
    .addImplementations(["pl+bcpl"])
    .addInfluences(["pl+algol", "pl+jovial", "pl+fortran"])
    .addPerson("person+philip-woodward", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms([
      "platf+dec",
      "platf+x86",
      "platf+intel-8080",
      "platf+zilog-z80",
      "platf+bsd",
      "platf+unix",
      "platf+linux",
    ])
    .addPlatform("platf+openvms", {
      refs: [
        {
          href: "https://web.archive.org/web/20210123102547/https://assets1.dxc.technology/manufacturing/downloads/MD_6841a-18_Coral_Offer_Overview_v4.pdf",
          title: "Gain the advantage with CORAL, CORAL+ and Context",
        },
      ],
    })
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+core-war")
    .merge({
      name: "Core War",
      websites: [{ kind: "wikipedia", title: "Core War", href: "https://en.wikipedia.org/wiki/Core_War" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Core_War_PMars_Screenshot.png/220px-Core_War_PMars_Screenshot.png",
        },
      ],
    })
    .addPerson("person+a-k-dewdney", { role: "developer" });

  /**/

  g.buildPlang("pl+cornell-university").merge({
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

  g.buildPlang("pl+corvision")
    .merge({
      name: "CorVision",
      websites: [{ kind: "wikipedia", title: "CorVision", href: "https://en.wikipedia.org/wiki/CorVision" }],
    })
    .addInfluences(["pl+inform"]);

  /**/

  g.buildPlang("pl+cowsel")
    .merge({
      name: "COWSEL",
      websites: [{ kind: "wikipedia", title: "COWSEL, POP-1", href: "https://en.wikipedia.org/wiki/COWSEL" }],
    })
    .addImplementations(["pl+assembly"])
    .addInfluences(["pl+cpl", "pl+lisp"])
    .addPerson("person+robin-popplestone", { role: "designer" })
    .addPerson("person+rod-burstall", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+structured", "para+reflective", "para+imperative"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+cpl")
    .merge({
      name: "CPL",
      websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/CPL_(programming_language)" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+christopher-strachey", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+functional"]);

  /**/

  g.buildPlang("pl+cray").merge({
    name: "Cray",
    websites: [{ kind: "wikipedia", title: "Cray", href: "https://en.wikipedia.org/wiki/Cray" }],
  });

  /**/

  g.buildPlang("pl+cray-mta").merge({
    name: "Cray MTA",
    websites: [{ kind: "wikipedia", title: "Cray MTA", href: "https://en.wikipedia.org/wiki/Cray_MTA" }],
  });

  /**/

  g.buildPlang("pl+cray-xmt").merge({
    name: "XMT",
    websites: [{ kind: "wikipedia", title: "XMT", href: "https://en.wikipedia.org/wiki/Cray_XMT" }],
  });

  /**/

  g.buildPlang("pl+croquet-project")
    .merge({
      name: "Croquet",
      websites: [{ kind: "wikipedia", title: "Croquet", href: "https://en.wikipedia.org/wiki/Croquet_Project" }],
    })
    .addInfluences(["pl+etoys", "pl+squeak"]);

  /**/

  g.buildPlang("pl+cryptol").merge({
    name: "Cryptol",
    websites: [{ kind: "wikipedia", title: "Cryptol", href: "https://en.wikipedia.org/wiki/Cryptol" }],
  });

  /**/

  g.buildPlang("pl+crystal")
    .merge({
      name: "Crystal",
      websites: [
        { kind: "wikipedia", title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg" }],
      releases: [{ version: "1.12.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+ruby", "pl+c", "pl+rust", "pl+go", "pl+python", "pl+ms-visual-c-sharp"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+concurrent"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+linux", "platf+mac", "platf+bsd"])
    .addPlatform("platf+aarch64", {
      refs: [{ href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" }],
    })
    .addPlatform("platf+win", {
      refs: [{ href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" }],
    })
    .addTypeSystems(["tsys+static", "tsys+inferred", "tsys+nominative", "tsys+duck"]);

  /**/

  g.buildPlang("pl+csound")
    .merge({
      name: "Csound",
      websites: [{ kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" }],
      releases: [{ version: "6.18.1", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+lgpl"]);

  /**/

  g.buildPlang("pl+cuda").merge({
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  /**/

  g.buildPlang("pl+cuneiform")
    .merge({
      name: "Cuneiform",
      websites: [
        {
          kind: "wikipedia",
          title: "Cuneiform",
          href: "https://en.wikipedia.org/wiki/Cuneiform_(programming_language)",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/G18225.png/121px-G18225.png",
        },
      ],
      releases: [{ version: "3.0.4", date: "2018-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+erlang"])
    .addInfluences(["pl+swift"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+scientific"])
    .addPlatforms(["platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+curl")
    .merge({
      name: "Curl",
      websites: [
        { kind: "wikipedia", title: "Curl", href: "https://en.wikipedia.org/wiki/Curl_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Curl_logo.gif" }],
      releases: [{ version: "8.0.13", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+html", "pl+javascript", "pl+lisp"])
    .addPerson("person+steve-ward", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+objects", "para+markup"])
    .addPlatforms(["platf+win"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+curry")
    .merge({
      name: "Curry",
      websites: [
        { kind: "wikipedia", title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)" },
      ],
      releases: [{ version: "3.6.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+prolog", "pl+c", "pl+haskell"])
    .addInfluences(["pl+haskell", "pl+prolog"])
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+functional", "para+logic"])
    .addPlatforms(["platf+x86-64", "platf+cross-platform", "platf+linux"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+cyclone")
    .merge({
      name: "Cyclone",
      websites: [
        { kind: "wikipedia", title: "Cyclone", href: "https://en.wikipedia.org/wiki/Cyclone_(programming_language)" },
      ],
      releases: [{ version: "1.0", date: "2006-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+ml"]);

  /**/

  g.buildPlang("pl+d")
    .merge({
      name: "D",
      websites: [
        { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)" },
        { kind: "wikipedia", title: "D programming language", href: "https://en.wikipedia.org/wiki/D_language" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg" },
      ],
      releases: [{ version: "2.108.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+ada",
      "pl+c",
      "pl+cpp",
      "pl+c-sharp",
      "pl+java",
      "pl+python",
      "pl+ms-visual-c-sharp",
      "pl+ruby",
    ])
    .addInfluence("pl+basic", {
      refs: [{ href: "https://news.ycombinator.com/item?id=33846139", title: "On: Show HN: A nice C string API" }],
    })
    .addInfluence("pl+eiffel", {
      refs: [{ href: "https://archive.org/details/dprogramminglang00alex", title: "The D programming language" }],
    })
    .addPerson("person+walter-bright", { role: "designer" })
    .addPerson("person+andrei-alexandrescu", { role: "designer" })
    .addLicense("lic+boost", {
      refs: [
        {
          href: "http://forum.dlang.org/post/lndgp4$hiq$1@digitalmars.com",
          title: "dmd front end now switched to Boost license",
        },
      ],
    })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects"])
    .addPlatforms(["platf+bsd", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+dafny")
    .merge({
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
    })
    .addLicenses(["lic+mit"])
    .addParadigms(["para+imperative", "para+functional"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/

  g.buildPlang("pl+darsimco")
    .merge({
      name: "DARSIMCO",
      websites: [{ kind: "wikipedia", title: "DARSIMCO", href: "https://en.wikipedia.org/wiki/DARSIMCO" }],
    })
    .addImplementations(["pl+assembly"])
    .addPerson("person+john-g-kemeny", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+dart")
    .merge({
      name: "Dart",
      websites: [
        { kind: "wikipedia", title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
      ],
      releases: [{ version: "3.4.3", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+flutter"])
    .addInfluences(["pl+c", "pl+cpp", "pl+erlang", "pl+java", "pl+javascript", "pl+ruby", "pl+smalltalk"])
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://ghostarchive.org/varchive/youtube/20211221/huawCRlo9H4",
          title: "Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013",
        },
      ],
    })
    .addInfluence("pl+strongtalk", {
      refs: [
        {
          href: "https://www.youtube.com/watch?v=huawCRlo9H4&t=30m10s",
          title: "Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013",
        },
      ],
    })
    .addInfluence("pl+typescript", {
      refs: [
        {
          href: "https://news.dartlang.org/2012/10/the-dart-team-welcomes-typescript.html",
          title: "The Dart Team Welcomes TypeScript",
        },
      ],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://ghostarchive.org/varchive/youtube/20211221/huawCRlo9H4",
          title: "Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013",
        },
      ],
    })
    .addPerson("person+lars-bak", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects"])
    .addParadigm("para+reflective", {
      refs: [
        {
          href: "https://books.google.com/books?id=EcvjAwAAQBAJ&q=dart%20multi-paradigm&pg=PA56",
          title: "Dart for Absolute Beginners",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+optional", "tsys+static", "tsys+strong"])
    .addTypeSystem("tsys+inferred", {
      refs: [{ href: "https://dart.dev/guides/language/sound-dart", title: "The Dart type system" }],
    });

  /**/

  g.buildPlang("pl+dartmouth-time-sharing-system")
    .merge({
      name: "Dartmouth Time Sharing System",
      websites: [
        {
          kind: "wikipedia",
          title: "Dartmouth Time Sharing System",
          href: "https://en.wikipedia.org/wiki/Dartmouth_Time_Sharing_System",
        },
      ],
    })
    .addInfluences(["pl+algol"]);

  /**/

  g.buildPlang("pl+darwin")
    .merge({
      name: "Darwin",
      websites: [
        { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(programming_language)" },
      ],
    })
    .addInfluences(["pl+maple"])
    .addPerson("person+gaston-gonnet", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+dataflex")
    .merge({
      name: "DataFlex",
      websites: [{ kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/DataFlex" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      releases: [{ version: "24.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial"])
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://www.dataaccess.com/resources/licensing/dataflex-studio-license-978",
          title: "“DataFlex License Info”",
        },
      ],
    });

  /**/

  g.buildPlang("pl+dataflow").merge({
    name: "dataflow",
    websites: [{ kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" }],
  });

  /**/

  g.buildPlang("pl+datalog")
    .merge({
      name: "Datalog",
      websites: [{ kind: "wikipedia", title: "Datalog", href: "https://en.wikipedia.org/wiki/Datalog" }],
    })
    .addDialects(["pl+datomic", "pl+.ql", "pl+souffle"])
    .addInfluences(["pl+prolog"])
    .addParadigms(["para+logic", "para+dec"])
    .addTypeSystems(["tsys+weak"]);

  /**/

  g.buildPlang("pl+dataparallel-c")
    .merge({
      name: "Dataparallel-C",
      websites: [{ kind: "wikipedia", title: "Dataparallel-C", href: "https://en.wikipedia.org/wiki/Dataparallel-C" }],
    })
    .addInfluences(["pl+c-star"]);

  /**/

  g.buildPlang("pl+datomic").merge({
    name: "Datomic",
    websites: [{ kind: "wikipedia", title: "Datomic", href: "https://en.wikipedia.org/wiki/Datomic" }],
  });

  /**/

  g.buildPlang("pl+dbase")
    .merge({
      name: "DBase",
      websites: [{ kind: "wikipedia", title: "DBase", href: "https://en.wikipedia.org/wiki/DBase" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DBaseLogo_BlackWithRed_glass_300.png/121px-DBaseLogo_BlackWithRed_glass_300.png",
        },
      ],
      releases: [{ version: "unknown", date: "2019-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addPerson("person+cecil-wayne-ratliff", {
      role: "developer",
      refs: [
        {
          href: "http://www.foxprohistory.org/interview_wayne_ratliff.htm",
          title: "The FoxPro History - Interview with Wayne Ratliff",
        },
      ],
    })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative", "para+dec"])
    .addPlatforms(["platf+dos", "platf+win"]);

  /**/

  g.buildPlang("pl+dc")
    .merge({
      name: "dc",
      websites: [{ kind: "wikipedia", title: "dc", href: "https://en.wikipedia.org/wiki/Dc_(computer_program)" }],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+ddc-i").merge({
    name: "DDC-I",
    websites: [{ kind: "wikipedia", title: "DDC-I", href: "https://en.wikipedia.org/wiki/DDC-I" }],
  });

  /**/

  g.buildPlang("pl+dec").merge({
    name: "DEC",
    websites: [
      { kind: "wikipedia", title: "SRC", href: "https://en.wikipedia.org/wiki/DEC_Systems_Research_Center" },
      { kind: "wikipedia", title: "DEC", href: "https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" },
    ],
  });

  /**/

  g.buildPlang("pl+dependent-ml")
    .merge({
      name: "Dependent ML",
      websites: [{ kind: "wikipedia", title: "Dependent ML", href: "https://en.wikipedia.org/wiki/Dependent_ML" }],
    })
    .addDialects(["pl+ats"]);

  /**/

  g.buildPlang("pl+diagram").merge({
    name: "diagrams",
    websites: [{ kind: "wikipedia", title: "diagrams", href: "https://en.wikipedia.org/wiki/Diagram" }],
  });

  /**/

  g.buildPlang("pl+dibol")
    .merge({
      name: "DIBOL",
      websites: [{ kind: "wikipedia", title: "DIBOL", href: "https://en.wikipedia.org/wiki/DIBOL" }],
      releases: [{ version: "unknown", date: "1992-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic", "pl+fortran", "pl+cobol"])
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+digital-command").merge({
    name: "DCL",
    websites: [{ kind: "wikipedia", title: "DCL", href: "https://en.wikipedia.org/wiki/DIGITAL_Command_Language" }],
  });

  /**/

  g.buildPlang("pl+dis-virtual-machine")
    .merge({
      name: "Dis virtual machine",
      websites: [{ kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" }],
    })
    .addImplementations(["pl+dis-virtual-machine"])
    .addInfluences(["pl+c", "pl+pascal", "pl+communicating-sequential-processes", "pl+alef", "pl+newsqueak"])
    .addPerson("person+rob-pike", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+domain-specific").merge({
    name: "Domain-specific language",
    websites: [
      {
        kind: "wikipedia",
        title: "Domain-specific language",
        href: "https://en.wikipedia.org/wiki/Domain-specific_language",
      },
    ],
  });

  /**/

  g.buildPlang("pl+dotgnu").merge({
    name: "DotGNU",
    websites: [{ kind: "wikipedia", title: "DotGNU", href: "https://en.wikipedia.org/wiki/DotGNU" }],
  });

  /**/

  g.buildPlang("pl+draco")
    .merge({
      name: "Draco",
      websites: [
        { kind: "wikipedia", title: "Draco", href: "https://en.wikipedia.org/wiki/Draco_(programming_language)" },
      ],
    })
    .addInfluences(["pl+algol", "pl+pascal", "pl+c"])
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+amiga"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+drakon")
    .merge({
      name: "DRAKON",
      websites: [{ kind: "wikipedia", title: "DRAKON", href: "https://en.wikipedia.org/wiki/DRAKON" }],
    })
    .addParadigms(["para+visual"]);

  /**/

  g.buildPlang("pl+dsssl").merge({
    name: "DSSSL",
    websites: [
      {
        kind: "wikipedia",
        title: "Document Style Semantics and Specification Language",
        href: "https://en.wikipedia.org/wiki/DSSSL",
      },
    ],
  });

  /**/

  g.buildPlang("pl+dylan")
    .merge({
      name: "Dylan",
      websites: [
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)" },
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
        },
      ],
      releases: [{ version: "2022.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+armed-bear-common-lisp",
      "pl+common-lisp",
      "pl+common-lisp-object-system",
      "pl+algol",
      "pl+scheme",
      "pl+eulisp",
      "pl+oaklisp",
      "pl+smalltalk",
    ])
    .addParadigms(["para+multi", "para+functional", "para+objects"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+dymola")
    .merge({
      name: "Dymola",
      websites: [{ kind: "wikipedia", title: "Dymola", href: "https://en.wikipedia.org/wiki/Dymola" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Dymola.png/100px-Dymola.png",
        },
      ],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+dassault-systemes", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+x86-64"]);

  /**/

  g.buildPlang("pl+e")
    .merge({
      name: "E",
      websites: [{ kind: "wikipedia", title: "E", href: "https://en.wikipedia.org/wiki/E_(programming_language)" }],
    })
    .addInfluences(["pl+joule", "pl+java"])
    .addPerson("person+mark-s-miller", { role: "designer" })
    .addLicenses(["lic+free"])
    .addParadigms(["para+multi", "para+objects", "para+message"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+ease")
    .merge({
      name: "Ease",
      websites: [
        { kind: "wikipedia", title: "Ease", href: "https://en.wikipedia.org/wiki/Ease_(programming_language)" },
      ],
    })
    .addInfluences(["pl+occam"])
    .addParadigms(["para+concurrent", "para+csp"])
    .addPlatforms(["platf+parallel-computing"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+easy")
    .merge({
      name: "Easy Programming Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Easy Programming Language",
          href: "https://en.wikipedia.org/wiki/Easy_Programming_Language",
        },
      ],
      releases: [{ version: "5.95", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+compiled", "para+imperative", "para+objects", "para+functional"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+easytrieve").merge({
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

  g.buildPlang("pl+ec")
    .merge({
      name: "eC",
      websites: [{ kind: "wikipedia", title: "eC", href: "https://en.wikipedia.org/wiki/EC_(programming_language)" }],
      releases: [{ version: "0.44.15", date: "2016-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+cpp", "pl+python"])
    .addLicenses(["lic+bsd-3"])
    .addParadigms(["para+multi", "para+imperative", "para+objects", "para+generic"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+nominative", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+eclipse")
    .merge({
      name: "ECLiPSe",
      websites: [
        {
          kind: "wikipedia",
          title: "ECLiPSe Constraint Logic Programming System",
          href: "https://en.wikipedia.org/wiki/ECLiPSe",
        },
      ],
      releases: [{ version: "7.0", date: "2018-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+mozilla-public-licence"]);

  /**/

  g.buildPlang("pl+ecmascript")
    .merge({
      name: "ECMAScript",
      websites: [
        { kind: "wikipedia", title: "ECMAScript", href: "https://en.wikipedia.org/wiki/ECMAScript" },
        {
          kind: "homepage",
          title: "Standards",
          href: "https://www.ecma-international.org/publications-and-standards/standards/",
        },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg" }],
      extensions: [".es"],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "other" }],
    })
    .addDialects(["pl+haxe"])
    .addImplementations([
      "pl+javascript",
      "pl+actionscript",
      "pl+jscript",
      "pl+qtscript",
      "pl+inscript",
      "pl+google-apps-script",
    ])
    .addInfluences([
      "pl+self",
      "pl+hypertalk",
      "pl+awk",
      "pl+c",
      "pl+coffeescript",
      "pl+perl",
      "pl+python",
      "pl+java",
      "pl+scheme",
      "pl+xtalk",
    ])
    .addPerson("person+brendan-eich", { role: "designer" })
    .addParadigms(["para+multi", "para+prototypes", "para+functional", "para+imperative"])
    .addTypeSystems(["tsys+weak", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+ecmascript-harmony")
    .merge({
      name: "ECMAScript Harmony",
      websites: [
        { kind: "wikipedia", title: "ECMAScript Harmony", href: "https://en.wikipedia.org/wiki/ECMAScript_Harmony" },
      ],
    })
    .addInfluences(["pl+ambienttalk"]);

  /**/

  g.buildPlang("pl+ed").merge({
    name: "ed",
    websites: [{ kind: "wikipedia", title: "ed", href: "https://en.wikipedia.org/wiki/Ed_(text_editor)" }],
  });

  /**/

  g.buildPlang("pl+edinburgh-imp")
    .merge({
      name: "Edinburgh IMP",
      websites: [{ kind: "wikipedia", title: "Edinburgh IMP", href: "https://en.wikipedia.org/wiki/Edinburgh_IMP" }],
    })
    .addImplementations(["pl+atlas-autocode"])
    .addInfluences(["pl+algol", "pl+atlas-autocode"])
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+x86", "platf+dos", "platf+win", "platf+linux"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+egl")
    .merge({
      name: "EGL(Enterprise Generation Language)",
      websites: [{ kind: "wikipedia", title: "EGL", href: "https://en.wikipedia.org/wiki/EGL_(programming_language)" }],
    })
    .addInfluence("pl+cobol", {
      refs: [
        {
          href: "https://web.archive.org/web/20190113063021/https://www.omg.org/adm/EGLOverviewtoOMG.pdf",
          title: "Introduction to EGL",
        },
      ],
    })
    .addLicenses(["lic+eclipse-public"]);

  /**/

  g.buildPlang("pl+eiffel")
    .merge({
      name: "Eiffel",
      websites: [
        { kind: "wikipedia", title: "Eiffel", href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Eiffel_logo.svg" }],
      releases: [{ version: "23.09", date: "2023-01-01", kind: "stable" }],
      extensions: [".e"],
    })
    .addImplementations(["pl+eiffelstudio", "pl+libertyeiffel", "pl+smarteiffel", "pl+visual-eiffel"])
    .addInfluences(["pl+simula", "pl+z-notation", "pl+simula-67", "pl+simula67"])
    .addInfluence("pl+ada", {
      refs: [{ href: "https://cs.nyu.edu/~goldberg/griffin.html", title: "The Griffin Project" }],
    })
    .addPerson("person+bertrand-meyer", { role: "designer" })
    .addParadigms(["para+objects", "para+class", "para+generic", "para+concurrent"])
    .addPlatforms(["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+eiffelstudio").merge({
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  /**/

  g.buildPlang("pl+elan")
    .merge({
      name: "Elan",
      websites: [
        { kind: "wikipedia", title: "Elan", href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)" },
      ],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+cha-koster", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+zilog-z80"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+elixir")
    .merge({
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Elixir", href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [{ version: "1.16.3", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+clojure", "pl+erlang", "pl+ruby"])
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://github.com/elixir-lang/elixir/blob/master/LICENSE",
          title: "elixir/LICENSE at master · elixir-lang/elixir · GitHub",
        },
      ],
    })
    .addParadigms(["para+multi", "para+functional", "para+concurrent", "para+distributed", "para+process"])
    .addPlatforms(["platf+erlang"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+elm")
    .merge({
      name: "Elm",
      websites: [{ kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      releases: [{ version: "0.19.1", date: "2019-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+haskell", "pl+sml", "pl+ocaml", "pl+f-sharp", "pl+ml", "pl+poly-slashml"])
    .addLicenses(["lic+permissive"])
    .addLicense("lic+bsd", {
      refs: [{ href: "https://github.com/elm/compiler/blob/master/LICENSE", title: "elm/compiler" }],
    })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+x86-64", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+emerald")
    .merge({
      name: "Emerald",
      websites: [
        { kind: "wikipedia", title: "Emerald", href: "https://en.wikipedia.org/wiki/Emerald_(programming_language)" },
      ],
    })
    .addInfluences(["pl+pascal", "pl+simula", "pl+smalltalk", "pl+simula-67", "pl+simula67"])
    .addPerson("person+henry-m-levy", { role: "designer" })
    .addParadigms(["para+objects"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+epigram")
    .merge({
      name: "Epigram",
      websites: [
        { kind: "wikipedia", title: "Epigram", href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2006-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+alf"])
    .addPerson("person+conor-mcbride", { role: "designer" })
    .addLicense("lic+mit", {
      refs: [{ href: "https://code.google.com/p/epigram/", title: "Epigram – Official website" }],
    })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dependent"]);

  /**/

  g.buildPlang("pl+erlang")
    .merge({
      name: "Erlang",
      websites: [
        { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg" }],
      releases: [{ version: "26.2.5", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+lfe"])
    .addInfluences(["pl+lisp", "pl+prolog", "pl+smalltalk", "pl+ml"])
    .addInfluence("pl+plex", {
      refs: [
        {
          href: "https://vimeo.com/97329186",
          title:
            "Joe Armstrong - Functional Programming the Long Road to Enlightenment: a Historical and Personal Narrative",
        },
      ],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+concurrent", "para+functional", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+esoteric").merge({
    name: "FALSE",
    websites: [
      { kind: "wikipedia", title: "FALSE", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language#FALSE" },
    ],
  });

  /**/

  g.buildPlang("pl+etoys")
    .merge({
      name: "Etoys",
      websites: [
        { kind: "wikipedia", title: "Etoys", href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)" },
      ],
    })
    .addImplementations(["pl+squeak", "pl+morphic", "pl+tweak"])
    .addInfluences([
      "pl+agentsheets",
      "pl+logo",
      "pl+smalltalk",
      "pl+hypercard",
      "pl+starlogo",
      "pl+objectlogo",
      "pl+squeak",
      "pl+ucblogo",
    ])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+ted-kaehler", { role: "developer" })
    .addPerson("person+andreas-raab", { role: "developer" })
    .addPerson("person+dan-ingalls", {
      role: "developer",
      refs: [{ href: "https://computerhistory.org/profile/dan-ingalls-2/", title: "Dan Ingalls" }],
    })
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", {
      refs: [{ href: "http://www.squeakland.org/download/license.jsp", title: "Squeakland : Download : License" }],
    })
    .addParadigms(["para+objects", "para+prototypes", "para+educational"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+euclid")
    .merge({
      name: "Euclid",
      websites: [
        { kind: "wikipedia", title: "Euclid", href: "https://en.wikipedia.org/wiki/Euclid_(programming_language)" },
      ],
    })
    .addInfluences(["pl+pascal", "pl+mesa", "pl+alphard", "pl+clu", "pl+bcpl", "pl+modula", "pl+lis"])
    .addPerson("person+butler-lampson", { role: "designer" })
    .addPerson("person+james-g-mitchell", { role: "designer" })
    .addPerson("person+jim-horning", { role: "designer" })
    .addPerson("person+gerald-j-popek", { role: "designer" })
    .addPerson("person+ric-holt", { role: "developer" })
    .addPerson("person+james-cordy", { role: "developer" })
    .addParadigms(["para+multi", "para+structured", "para+imperative", "para+functional"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+euler")
    .merge({
      name: "Euler",
      websites: [
        { kind: "wikipedia", title: "Euler", href: "https://en.wikipedia.org/wiki/Euler_(programming_language)" },
      ],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+euphoria")
    .merge({
      name: "Euphoria",
      websites: [
        { kind: "wikipedia", title: "Euphoria", href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png" }],
      releases: [{ version: "4.1.0", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+linux", "platf+mac", "platf+bsd"]);

  /**/

  g.buildPlang("pl+excel").merge({
    name: "Excel macros",
    websites: [
      { kind: "wikipedia", title: "Excel functions", href: "https://en.wikipedia.org/wiki/Excel_function" },
      { kind: "wikipedia", title: "Excel macros", href: "https://en.wikipedia.org/wiki/Excel_macro" },
    ],
  });

  /**/

  g.buildPlang("pl+exec-2").merge({
    name: "EXEC 2",
    websites: [{ kind: "wikipedia", title: "EXEC 2", href: "https://en.wikipedia.org/wiki/EXEC_2" }],
  });

  /**/

  g.buildPlang("pl+executive-systems-problem-oriented")
    .merge({
      name: "Executive Systems Problem Oriented Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Executive Systems Problem Oriented Language (ESPOL)",
          href: "https://en.wikipedia.org/wiki/Executive_Systems_Problem_Oriented_Language",
        },
      ],
    })
    .addInfluences(["pl+algol"])
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+ezhil")
    .merge({
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
    })
    .addInfluences(["pl+logo", "pl+basic", "pl+python"])
    .addPerson("person+google-scholar", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+interpreted", "para+imperative", "para+structured"])
    .addPlatforms(["platf+linux", "platf+win", "platf+mac", "platf+python", "platf+pip"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+f")
    .merge({
      name: "F language",
      websites: [
        { kind: "wikipedia", title: "F language", href: "https://en.wikipedia.org/wiki/F_(programming_language)" },
      ],
    })
    .addInfluences(["pl+fortran"])
    .addParadigms(["para+array", "para+imperative", "para+modular"])
    .addTypeSystems(["tsys+static", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+f-sharp")
    .merge({
      name: "F#",
      websites: [
        { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/F_Sharp_logo.svg" }],
      releases: [{ version: "8.0.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+c-sharp",
      "pl+erlang",
      "pl+haskell",
      "pl+ml",
      "pl+python",
      "pl+scala",
      "pl+ms-visual-c-sharp",
      "pl+poly-slashml",
      "pl+sml",
    ])
    .addInfluence("pl+ocaml", {
      refs: [
        {
          href: "https://www.microsoft.com/en-us/research/project/f-at-microsoft-research/",
          title: "F# Historical Acknowledgements",
        },
      ],
    })
    .addPerson("person+don-syme", { role: "designer" })
    .addLicense("lic+mit", {
      refs: [
        { href: "https://github.com/fsharp/fsharp/blob/master/License.txt", title: "F# Software Foundation's License" },
      ],
    })
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+agent",
      "para+meta",
      "para+reflective",
      "para+concurrent",
    ])
    .addPlatforms(["platf+cross-platform", "platf+.net", "platf+mono"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+f-star")
    .merge({
      name: "F*",
      websites: [{ kind: "wikipedia", title: "F*", href: "https://en.wikipedia.org/wiki/F*_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fstar-official-logo-2015.png/128px-Fstar-official-logo-2015.png",
        },
      ],
      releases: [{ version: "2023.09.03", date: "2023-09-03", kind: "stable" }],
    })
    .addInfluences(["pl+f-sharp", "pl+coq", "pl+dafny", "pl+lean", "pl+ocaml", "pl+sml", "pl+ml", "pl+poly-slashml"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+fact-computer")
    .merge({
      name: "FACT",
      websites: [{ kind: "wikipedia", title: "FACT", href: "https://en.wikipedia.org/wiki/FACT_computer_language" }],
    })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+factor")
    .merge({
      name: "Factor",
      websites: [
        { kind: "wikipedia", title: "Factor", href: "https://en.wikipedia.org/wiki/Factor_(programming_language)" },
        { kind: "homepage", title: "factorcode.org", href: "http://factorcode.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/NewFactorLogo.png/200px-NewFactorLogo.png",
        },
      ],
      releases: [{ version: "0.99", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+joy", "pl+forth", "pl+lisp", "pl+self"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+multi", "para+concatenative", "para+stack", "para+functional", "para+objects"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+fantom")
    .merge({
      name: "Fantom",
      websites: [
        { kind: "wikipedia", title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png" }],
      releases: [{ version: "1.0.79", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+java", "pl+scala", "pl+ruby", "pl+erlang"])
    .addLicense("lic+academic-free", {
      refs: [{ href: "http://fantom.org/doc/docIntro/Faq.html", title: "FAQ of Fandoc language website" }],
    })
    .addParadigms(["para+multi"])
    .addTypeSystems(["tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+fanuc").merge({
    name: "FANUC",
    websites: [{ kind: "wikipedia", title: "FANUC", href: "https://en.wikipedia.org/wiki/FANUC" }],
  });

  /**/

  g.buildPlang("pl+fargo").merge({
    name: "FARGO",
    websites: [
      { kind: "wikipedia", title: "FARGO", href: "https://en.wikipedia.org/wiki/FARGO_(programming_language)" },
    ],
  });

  /**/

  g.buildPlang("pl+faust")
    .merge({
      name: "FAUST",
      websites: [
        { kind: "wikipedia", title: "FAUST", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)" },
      ],
      releases: [{ version: "2.60.3", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+ffp")
    .merge({
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FFP_(programming_language)" }],
    })
    .addInfluence("pl+apl", {
      refs: [
        {
          href: "https://web.archive.org/web/20160311204021/http://haskell.cs.yale.edu/wp-content/uploads/2011/01/cs.pdf",
          title: "The Conception, Evolution, and Application of Functional Programming Languages",
        },
      ],
    })
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+function"]);

  /**/

  g.buildPlang("pl+fjolnir")
    .merge({
      name: "Fjölnir",
      websites: [
        {
          kind: "wikipedia",
          title: "Fjölnir",
          href: "https://en.wikipedia.org/wiki/Fj%C3%B6lnir_(programming_language)",
        },
      ],
    })
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+dos"]);

  /**/

  g.buildPlang("pl+fl")
    .merge({
      name: "FL",
      websites: [{ kind: "wikipedia", title: "FL", href: "https://en.wikipedia.org/wiki/FL_(programming_language)" }],
    })
    .addInfluences(["pl+ffp", "pl+fp"])
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+function", "para+functional"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+flacc").merge({
    name: "FLACC",
    websites: [{ kind: "wikipedia", title: "FLACC", href: "https://en.wikipedia.org/wiki/FLACC" }],
  });

  /**/

  g.buildPlang("pl+flix")
    .merge({
      name: "Flix",
      websites: [
        { kind: "wikipedia", title: "Flix", href: "https://en.wikipedia.org/wiki/Flix_(programming_language)" },
      ],
      extensions: [".flix"],
    })
    .addInfluences(["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"])
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/flix/flix/blob/master/LICENSE.md", title: "Apache License 2.0" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+logic"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  /**/

  g.buildPlang("pl+flow-matic")
    .merge({
      name: "FLOW-MATIC",
      websites: [{ kind: "wikipedia", title: "FLOW-MATIC", href: "https://en.wikipedia.org/wiki/FLOW-MATIC" }],
    })
    .addInfluences(["pl+arith-matic", "pl+laning-and-zierler-system"])
    .addPerson("person+remington-rand", { role: "designer" })
    .addPerson("person+grace-hopper", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+flutter")
    .merge({
      name: "Flutter",
      websites: [{ kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
      releases: [{ version: "3.22.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+bsd-n"])
    .addPlatforms([
      "platf+android",
      "platf+ios",
      "platf+fuchsia",
      "platf+web",
      "platf+linux",
      "platf+mac",
      "platf+win",
    ]);

  /**/

  g.buildPlang("pl+focal")
    .merge({
      name: "FOCAL",
      websites: [
        { kind: "wikipedia", title: "FOCAL", href: "https://en.wikipedia.org/wiki/FOCAL_(programming_language)" },
      ],
    })
    .addInfluences(["pl+joss"])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+forth")
    .merge({
      name: "Forth",
      websites: [
        { kind: "wikipedia", title: "Forth", href: "https://en.wikipedia.org/wiki/Forth_(programming_language)" },
      ],
    })
    .addImplementations(["pl+gforth"])
    .addPerson("person+charles-h-moore", { role: "designer" })
    .addParadigms(["para+concatenative", "para+stack", "para+imperative", "para+reflective"]);

  /**/

  g.buildPlang("pl+fortress")
    .merge({
      name: "Fortress",
      websites: [
        { kind: "wikipedia", title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)" },
      ],
    })
    .addInfluences(["pl+fortran", "pl+scala", "pl+haskell"])
    .addLicenses(["lic+bsd-s"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+foxpro")
    .merge({
      name: "FoxBASE+, FoxPro, Visual FoxPro",
      websites: [
        { kind: "wikipedia", title: "FoxBASE+, FoxPro, Visual FoxPro", href: "https://en.wikipedia.org/wiki/FoxPro" },
      ],
    })
    .addInfluences(["pl+dbase"]);

  /**/

  g.buildPlang("pl+fp")
    .merge({
      name: "FP",
      websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FP_(programming_language)" }],
    })
    .addInfluence("pl+apl", {
      refs: [
        {
          href: "https://web.archive.org/web/20160311204021/http://haskell.cs.yale.edu/wp-content/uploads/2011/01/cs.pdf",
          title: "The Conception, Evolution, and Application of Functional Programming Languages",
        },
      ],
    })
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+function"]);

  /**/

  g.buildPlang("pl+fpgac")
    .merge({
      name: "FpgaC",
      websites: [{ kind: "wikipedia", title: "FpgaC", href: "https://en.wikipedia.org/wiki/FpgaC" }],
      releases: [{ version: "1.0", kind: "stable" }],
    })
    .addInfluences(["pl+c"])
    .addPlatforms(["platf+fpga"]);

  /**/

  g.buildPlang("pl+frama-c")
    .merge({
      name: "Frama-C",
      websites: [{ kind: "wikipedia", title: "Frama-C", href: "https://en.wikipedia.org/wiki/Frama-C" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frama-C_logo%2C_full.png/120px-Frama-C_logo%2C_full.png",
        },
      ],
    })
    .addLicenses(["lic+lgpl", "lic+bsd-s"]);

  /**/

  g.buildPlang("pl+free-university-of-berlin").merge({
    name: "FU Berlin",
    websites: [
      { kind: "wikipedia", title: "FU Berlin", href: "https://en.wikipedia.org/wiki/Free_University_of_Berlin" },
    ],
  });

  /**/

  g.buildPlang("pl+futhark")
    .merge({
      name: "Futhark",
      websites: [
        { kind: "wikipedia", title: "Futhark", href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)" },
      ],
    })
    .addInfluences(["pl+apl", "pl+haskell", "pl+nesl", "pl+sml"])
    .addLicenses(["lic+isc"])
    .addParadigms(["para+array", "para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness", "tsys+dependent"]);

  /**/

  g.buildPlang("pl+g-code")
    .merge({
      name: "G-code",
      websites: [{ kind: "wikipedia", title: "G-code", href: "https://en.wikipedia.org/wiki/G-code" }],
    })
    .addImplementations([
      "pl+siemens",
      "pl+fanuc",
      "pl+haas-automation",
      "pl+heidenhain",
      "pl+yamazaki-mazak-corporation",
      "pl+okuma-corporation",
    ])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+g95")
    .merge({ name: "G95", websites: [{ kind: "wikipedia", title: "G95", href: "https://en.wikipedia.org/wiki/G95" }] })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+gambit")
    .merge({
      name: "Gambit",
      websites: [
        { kind: "wikipedia", title: "Gambit", href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)" },
      ],
      releases: [{ version: "4.9.5", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+scheme", "pl+multilisp"])
    .addLicenses(["lic+lgpl", "lic+apache"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  /**/

  g.buildPlang("pl+game-maker")
    .merge({
      name: "GameMaker",
      websites: [{ kind: "wikipedia", title: "GameMaker", href: "https://en.wikipedia.org/wiki/Game_Maker_Language" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4b/GameMaker_Logo.svg" }],
      releases: [{ version: "2024.4.1", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+gcc")
    .merge({
      name: "GCC",
      websites: [{ kind: "wikipedia", title: "GCC", href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/GNU_Compiler_Collection_logo.svg" },
      ],
      releases: [{ version: "14.1", date: "2024-01-01", kind: "stable" }],
    })
    .addLicense("lic+gpl", {
      refs: [
        {
          href: "https://web.archive.org/web/20230331220440/https://www.gnu.org/licenses/gcc-exception-3.1",
          title: "GCC Runtime Library Exception",
        },
      ],
    })
    .addPlatforms(["platf+gnu"]);

  /**/

  g.buildPlang("pl+gemstone")
    .merge({
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
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk"])
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addParadigms(["para+objects", "para+distributed", "para+in", "para+process"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+genera")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Symbolics-document-examiner.png/300px-Symbolics-document-examiner.png",
        },
      ],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+general-algebraic-modeling-system").merge({
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

  g.buildPlang("pl+generic-java")
    .merge({
      name: "Generic Java",
      websites: [{ kind: "wikipedia", title: "Generic Java", href: "https://en.wikipedia.org/wiki/Generic_Java" }],
    })
    .addInfluences(["pl+pizza"]);

  /**/

  g.buildPlang("pl+genie")
    .merge({
      name: "Genie",
      websites: [
        { kind: "wikipedia", title: "Genie", href: "https://en.wikipedia.org/wiki/Genie_(programming_language)" },
      ],
      releases: [{ version: "0.52.3", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+boo", "pl+d", "pl+pascal"])
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20200601133216/https://wiki.gnome.org/action/show/Projects/Genie",
          title: "The Genie Programming Language Tutorial",
        },
      ],
    })
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+glib"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+gforth")
    .merge({
      name: "Gforth",
      websites: [{ kind: "wikipedia", title: "Gforth", href: "https://en.wikipedia.org/wiki/Gforth" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" }],
      releases: [
        { version: "0.7.3", date: "2014-01-01", kind: "stable" },
        { version: "0.7.9", date: "2020-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+ghostscript").merge({
    name: "Ghostscript",
    websites: [{ kind: "wikipedia", title: "Ghostscript", href: "https://en.wikipedia.org/wiki/Ghostscript" }],
  });

  /**/

  g.buildPlang("pl+glasgow-haskell-compiler").merge({
    name: "GHC",
    websites: [{ kind: "wikipedia", title: "GHC", href: "https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler" }],
  });

  /**/

  g.buildPlang("pl+gleam")
    .merge({
      name: "Gleam",
      websites: [
        { kind: "wikipedia", title: "Gleam", href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
        },
      ],
      releases: [{ version: "1.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+rust"])
    .addInfluences(["pl+elixir", "pl+reia"])
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/gleam-lang/gleam/blob/main/LICENCE", title: "Gleam License File" }],
    })
    .addParadigms(["para+multi", "para+functional"])
    .addParadigm("para+concurrent", { refs: [{ href: "https://gleam.run/", title: "Gleam Homepage" }] })
    .addPlatforms(["platf+bsd", "platf+linux", "platf+mac"])
    .addPlatform("platf+win", {
      refs: [{ href: "https://gleam.run/getting-started/installing/", title: "Installing Gleam" }],
    })
    .addTypeSystems(["tsys+safe", "tsys+static"])
    .addTypeSystem("tsys+inferred", { refs: [{ href: "https://gleam.run/", title: "Gleam Homepage" }] });

  /**/

  g.buildPlang("pl+glsl")
    .merge({
      name: "GLSL",
      websites: [{ kind: "wikipedia", title: "GLSL", href: "https://en.wikipedia.org/wiki/GLSL" }],
    })
    .addInfluences(["pl+cg"]);

  /**/

  g.buildPlang("pl+gnat")
    .merge({
      name: "GNAT",
      websites: [{ kind: "wikipedia", title: "GNAT", href: "https://en.wikipedia.org/wiki/GNAT" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      releases: [{ version: "9.2", date: "2019-08-12", kind: "stable" }],
    })
    .addLicense("lic+gpl", {
      refs: [{ href: "https://www.gnu.org/licenses/gcc-exception.html", title: "GCC Runtime Library Exception" }],
    });

  /**/

  g.buildPlang("pl+gnu-data")
    .merge({
      name: "GNU Data Language",
      websites: [
        { kind: "wikipedia", title: "GNU Data Language", href: "https://en.wikipedia.org/wiki/GNU_Data_Language" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/GNU_Data_Language_%28logo%29.png" },
      ],
      releases: [{ version: "1.0.5", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+gnu-e")
    .merge({
      name: "GNU E",
      websites: [
        { kind: "wikipedia", title: "GNU E", href: "https://en.wikipedia.org/wiki/GNU_E" },
        { kind: "homepage", title: "ftp://ftp.cs.wisc.edu/exodus/E/", href: "ftp://ftp.cs.wisc.edu/exodus/E/" },
      ],
      releases: [{ version: "2.3.3", date: "1993-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+gnu-guile")
    .merge({
      name: "Guile",
      websites: [{ kind: "wikipedia", title: "GNU Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg" }],
      releases: [{ version: "3.0.9", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+scheme", "pl+scm", "pl+siod"])
    .addLicenses(["lic+lgpl"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+aarch64",
      "platf+arm",
      "platf+mips",
      "platf+linux",
      "platf+bsd",
      "platf+win",
      "platf+mingw",
      "platf+cygwin",
    ]);

  /**/

  g.buildPlang("pl+gnu-m4")
    .merge({
      name: "GNU m4",
      websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }],
    })
    .addImplementations(["pl+gnu-m4"])
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addPerson("person+dennis-ritchie", { role: "designer" })
    .addParadigms(["para+macros"]);

  /**/

  g.buildPlang("pl+gnu-octave")
    .merge({
      name: "GNU Octave",
      websites: [{ kind: "wikipedia", title: "GNU Octave", href: "https://en.wikipedia.org/wiki/GNU_Octave" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" }],
      releases: [{ version: "9.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+gnu-prolog")
    .merge({
      name: "GNU Prolog",
      websites: [{ kind: "wikipedia", title: "GNU Prolog", href: "https://en.wikipedia.org/wiki/GNU_Prolog" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      releases: [{ version: "1.5.0", date: "2021-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl", "lic+lgpl"]);

  /**/

  g.buildPlang("pl+go")
    .merge({
      name: "Go",
      websites: [{ kind: "wikipedia", title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" }],
      releases: [{ version: "1.22.4", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+assembly", "pl+cpp"])
    .addInfluences([
      "pl+alef",
      "pl+c",
      "pl+d",
      "pl+dis-virtual-machine",
      "pl+erlang",
      "pl+limbo",
      "pl+modula",
      "pl+newsqueak",
      "pl+oberon",
      "pl+oberon-2",
      "pl+occam",
      "pl+python",
      "pl+smalltalk",
    ])
    .addInfluence("pl+bcpl", {
      refs: [{ href: "https://talks.golang.org/2014/hellogophers.slide#21", title: "Hello Gophers" }],
    })
    .addPerson("person+robert-griesemer", { role: "designer" })
    .addPerson("person+rob-pike", { role: "designer" })
    .addPerson("person+ken-thompson", {
      role: "designer",
      refs: [{ href: "https://golang.org/doc/go_faq.html", title: "Language Design FAQ" }],
    })
    .addLicense("lic+bsd-c", { refs: [{ href: "https://golang.org/LICENSE", title: "Text file LICENSE" }] })
    .addLicense("lic+patents", { refs: [{ href: "https://golang.org/PATENTS", title: "Additional IP Rights Grant" }] })
    .addParadigms(["para+multi", "para+concurrent", "para+imperative"])
    .addParadigm("para+functional", {
      refs: [{ href: "https://go.dev/doc/codewalk/functions/", title: "Codewalk: First-Class Functions in Go" }],
    })
    .addParadigm("para+objects", {
      refs: [
        {
          href: "https://golang.org/doc/faq#Is_Go_an_object-oriented_language",
          title: "Is Go an object-oriented language?",
        },
      ],
    })
    .addPlatforms(["platf+linux", "platf+mac", "platf+win"])
    .addPlatform("platf+bsd", { refs: [{ href: "http://ports.su/lang/go", title: "lang/go: go-1.4" }] })
    .addPlatform("platf+plan9", { refs: [{ href: "http://go-lang.cat-v.org/os-ports", title: "Go Porting Efforts" }] })
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+nominative"])
    .addTypeSystem("tsys+strong", {
      refs: [
        {
          href: "https://go.dev/ref/spec#Introduction",
          title: "The Go Programming Language Specification - the Go Programming Language",
        },
      ],
    })
    .addTypeSystem("tsys+structural", {
      refs: [
        {
          href: "https://golang.org/doc/faq#implements_interface",
          title: 'Why doesn\'t Go have "implements" declarations?',
        },
      ],
    });

  /**/

  g.buildPlang("pl+go-")
    .merge({
      name: "Go!",
      websites: [{ kind: "wikipedia", title: "Go!", href: "https://en.wikipedia.org/wiki/Go!_(programming_language)" }],
      releases: [{ version: "unknown", date: "2007-01-01", kind: "preview" }],
    })
    .addInfluence("pl+prolog", {
      refs: [
        {
          href: "https://web.archive.org/web/20100722010320/http://www.informationweek.com/news/software/web_services/showArticle.jhtml?articleID=221601351",
          title: "Google 'Go' Name Brings Accusations Of 'Evil'",
        },
      ],
    })
    .addPerson("person+keith-clark", { role: "designer" })
    .addLicenses(["lic+gpl-2"])
    .addParadigms(["para+multi", "para+concurrent", "para+logic", "para+functional", "para+imperative", "para+objects"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+godel")
    .merge({
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
    })
    .addParadigms(["para+dec", "para+logic"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+gofer").merge({
    name: "Gofer",
    websites: [
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(software)" },
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(programming_language)" },
    ],
  });

  /**/

  g.buildPlang("pl+golo")
    .merge({
      name: "Golo",
      websites: [
        { kind: "wikipedia", title: "Golo", href: "https://en.wikipedia.org/wiki/Golo_(programming_language)" },
      ],
      releases: [{ version: "3.4.0", date: "2021-01-01", kind: "stable" }],
    })
    .addPerson("person+insa-lyon", { role: "developer" })
    .addLicenses(["lic+eclipse-public"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  /**/

  g.buildPlang("pl+google-apps-script").merge({
    name: "Apps Script",
    websites: [
      { kind: "wikipedia", title: "Google Apps Script", href: "https://en.wikipedia.org/wiki/Google_Apps_Script" },
    ],
    images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" }],
  });

  /**/

  g.buildPlang("pl+gosu")
    .merge({
      name: "Gosu",
      websites: [
        { kind: "wikipedia", title: "Gosu", href: "https://en.wikipedia.org/wiki/Gosu_(programming_language)" },
      ],
      releases: [{ version: "1.17.10", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+java", "pl+c-sharp"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+gpss")
    .merge({
      name: "GPSS",
      websites: [{ kind: "wikipedia", title: "GPSS", href: "https://en.wikipedia.org/wiki/GPSS" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GPSS_sine-qua-non_icon.png/121px-GPSS_sine-qua-non_icon.png",
        },
      ],
    })
    .addPerson("person+geoffrey-gordon", { role: "designer" });

  /**/

  g.buildPlang("pl+graalvm").merge({
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

  g.buildPlang("pl+gradle").merge({
    name: "Gradle",
    websites: [{ kind: "wikipedia", title: "Gradle", href: "https://en.wikipedia.org/wiki/Gradle" }],
  });

  /**/

  g.buildPlang("pl+grails").merge({
    name: "Grails",
    websites: [{ kind: "wikipedia", title: "Grails", href: "https://en.wikipedia.org/wiki/Grails_(framework)" }],
  });

  /**/

  g.buildPlang("pl+groovy")
    .merge({
      name: "Groovy",
      websites: [
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
    })
    .addImplementations(["pl+gradle", "pl+grails"])
    .addInfluences(["pl+java", "pl+python", "pl+ruby", "pl+smalltalk", "pl+objective-cpp", "pl+objective-c"])
    .addPerson("person+james-strachan", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+functional", "para+aspect", "para+scripting"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+duck"]);

  /**/

  g.buildPlang("pl+gt.m")
    .merge({
      name: "GT.M",
      websites: [{ kind: "wikipedia", title: "GT.M", href: "https://en.wikipedia.org/wiki/GT.M" }],
    })
    .addInfluences(["pl+mumps"]);

  /**/

  g.buildPlang("pl+haas-automation").merge({
    name: "Haas",
    websites: [{ kind: "wikipedia", title: "Haas", href: "https://en.wikipedia.org/wiki/Haas_Automation" }],
  });

  /**/

  g.buildPlang("pl+hack")
    .merge({
      name: "Hack",
      websites: [
        { kind: "wikipedia", title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ version: "4.172", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+php", "pl+ocaml", "pl+scala", "pl+haskell", "pl+ms-visual-c-sharp"])
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://web.archive.org/web/20150213220946/http://www.infoworld.com/article/2610885/facebook-q-a--hack-brings-static-typing-to-php-world.html",
          title: "Facebook Q&A: Hack brings static typing to PHP world",
        },
      ],
    })
    .addPerson("person+meta-platforms", { role: "developer" })
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://web.archive.org/web/20190107074308/https://github.com/facebook/hhvm/blob/master/hphp/hack/LICENSE%20",
          title: "facebook/hhvm: hhvm / hphp / hack / LICENSE",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+weak", "tsys+gradual"]);

  /**/

  g.buildPlang("pl+hamilton-c-shell")
    .merge({
      name: "Hamilton C shell",
      websites: [
        { kind: "wikipedia", title: "Hamilton C shell", href: "https://en.wikipedia.org/wiki/Hamilton_C_shell" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Hamilton_C_shell_x64_on_Windows_7.png/300px-Hamilton_C_shell_x64_on_Windows_7.png",
        },
      ],
      releases: [{ version: "5.2", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial", "lic+proprietary"]);

  /**/

  g.buildPlang("pl+handel-c")
    .merge({
      name: "Handel-C",
      websites: [{ kind: "wikipedia", title: "Handel-C", href: "https://en.wikipedia.org/wiki/Handel-C" }],
      releases: [{ version: "3.0", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+communicating-sequential-processes", "pl+occam"])
    .addPerson("person+siemens-eda", { role: "developer" })
    .addParadigms(["para+imperative", "para+structured", "para+concurrent"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+manifest", "tsys+nominative", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+harbour")
    .merge({
      name: "Harbour Project",
      websites: [{ kind: "wikipedia", title: "Harbour", href: "https://en.wikipedia.org/wiki/Harbour_(software)" }],
      releases: [
        { version: "3.0.0", date: "2011-01-01", kind: "stable" },
        { version: "3.2.0", kind: "preview" },
      ],
    })
    .addInfluences(["pl+dbase"])
    .addLicenses(["lic+open-source"])
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+safe", "tsys+strong"]);

  /**/

  g.buildPlang("pl+hartmann-pipeline")
    .merge({
      name: "Pipelines",
      websites: [
        { kind: "wikipedia", title: "Pipelines", href: "https://en.wikipedia.org/wiki/Hartmann_pipeline" },
        { kind: "homepage", title: "http://vm.marist.edu/~pipeline", href: "http://vm.marist.edu/~pipeline" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/0/0c/Pipjarg1.jpeg" }],
      releases: [{ version: "1.1.12", date: "2020-06-03", kind: "stable" }],
    })
    .addInfluences(["pl+pipeline"])
    .addParadigms(["para+dataflow"])
    .addPlatforms(["platf+z-slashvm"]);

  /**/

  g.buildPlang("pl+haskell")
    .merge({
      name: "Haskell",
      websites: [
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)" },
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "stable" },
        { version: "unknown", date: "2020-01-01", kind: "preview" },
      ],
    })
    .addDialects(["pl+elm", "pl+gofer", "pl+hume"])
    .addImplementations(["pl+glasgow-haskell-compiler", "pl+hugs", "pl+yhc"])
    .addInfluences([
      "pl+clean",
      "pl+ffp",
      "pl+fp",
      "pl+gofer",
      "pl+hope",
      "pl+id",
      "pl+iswim",
      "pl+kent-recursive-calculator",
      "pl+lisp",
      "pl+miranda",
      "pl+ml",
      "pl+sml",
      "pl+orwell",
      "pl+sasl",
      "pl+scheme",
      "pl+sisal",
      "pl+poly-slashml",
    ])
    .addInfluence("pl+raku", {
      refs: [
        {
          href: "http://pugs.blogs.com/pugs/2010/04/how-to-implement-perl-6-in-10.html",
          title: "How to Implement Perl 6 in '10",
        },
      ],
    })
    .addPerson("person+lennart-augustsson", { role: "designer" })
    .addPerson("person+paul-hudak", { role: "designer" })
    .addPerson("person+john-hughes", { role: "designer" })
    .addPerson("person+simon-peyton-jones", { role: "designer" })
    .addPerson("person+john-launchbury", { role: "designer" })
    .addPerson("person+erik-meijer", { role: "designer" })
    .addPerson("person+philip-wadler", { role: "designer" })
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+haxe")
    .merge({
      name: "Haxe",
      websites: [{ kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
      releases: [{ version: "4.3.4", date: "2024-01-01", kind: "stable" }],
      scoping: ["lexical"],
    })
    .addImplementations(["pl+ocaml"])
    .addInfluences([
      "pl+actionscript",
      "pl+ecmascript",
      "pl+javascript",
      "pl+ocaml",
      "pl+java",
      "pl+cpp",
      "pl+php",
      "pl+c-sharp",
      "pl+python",
      "pl+lua",
      "pl+nekovm",
    ])
    .addLicenses(["lic+gpl", "lic+mit"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+generic"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+aarch64",
      "platf+arm",
      "platf+mips",
      "platf+android",
      "platf+ios",
      "platf+linux",
      "platf+mac",
      "platf+win",
    ])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+heidenhain").merge({
    name: "Heidenhain",
    websites: [{ kind: "wikipedia", title: "Heidenhain", href: "https://en.wikipedia.org/wiki/Heidenhain" }],
  });

  /**/

  g.buildPlang("pl+hhvm")
    .merge({
      name: "HHVM",
      websites: [{ kind: "wikipedia", title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HHVM_logo.svg" }],
      releases: [{ version: "3.15.0", date: "2016-01-01", kind: "stable" }],
    })
    .addPerson("person+meta-platforms", { role: "developer" })
    .addLicenses(["lic+php"])
    .addLicense("lic+zend", {
      refs: [{ href: "https://github.com/facebook/hhvm#license", title: "facebook/hhvm: License" }],
    });

  /**/

  g.buildPlang("pl+hitachi").merge({
    name: "Hitachi",
    websites: [{ kind: "wikipedia", title: "Hitachi", href: "https://en.wikipedia.org/wiki/Hitachi" }],
  });

  /**/

  g.buildPlang("pl+hollywood")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hollywood-ide3.jpg/220px-Hollywood-ide3.jpg",
        },
      ],
      releases: [{ version: "6.0", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+hop")
    .merge({
      name: "Hop",
      websites: [{ kind: "wikipedia", title: "Hop", href: "https://en.wikipedia.org/wiki/Hop_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hop_logo.svg" }],
      releases: [{ version: "2.4.2", date: "2013-01-01", kind: "stable" }],
    })
    .addInfluence("pl+scheme", {
      refs: [
        {
          href: "http://hop.inria.fr/usr/local/lib/hop/2.2.0/weblets/home/articles/hop-lang/article.html",
          title: "http://hop.inria.fr/usr/local/lib/hop/2.2.0/weblets/home/articles/hop-lang/article.html",
        },
      ],
    })
    .addPerson("person+manuel-serrano", { role: "designer" })
    .addLicenses(["lic+gpl-3"])
    .addParadigms(["para+multi"]);

  /**/

  g.buildPlang("pl+hope").merge({
    name: "Hope",
    websites: [{ kind: "wikipedia", title: "Hope", href: "https://en.wikipedia.org/wiki/Hope_(programming_language)" }],
  });

  /**/

  g.buildPlang("pl+hotspot")
    .merge({
      name: "HotSpot",
      websites: [
        { kind: "wikipedia", title: "HotSpot", href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)" },
      ],
    })
    .addInfluences(["pl+strongtalk"]);

  /**/

  g.buildPlang("pl+html").merge({
    name: "HTML",
    websites: [{ kind: "wikipedia", title: "HTML", href: "https://en.wikipedia.org/wiki/HTML" }],
  });

  /**/

  g.buildPlang("pl+html5").merge({
    name: "HTML5",
    websites: [{ kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" }],
  });

  /**/

  g.buildPlang("pl+hugs").merge({
    name: "Hugs",
    websites: [{ kind: "wikipedia", title: "Hugs", href: "https://en.wikipedia.org/wiki/Hugs_(interpreter)" }],
  });

  /**/

  g.buildPlang("pl+hume")
    .merge({
      name: "Hume",
      websites: [
        { kind: "wikipedia", title: "Hume", href: "https://en.wikipedia.org/wiki/Hume_(programming_language)" },
      ],
      releases: [{ version: "0.8", date: "2008-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+haskell"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+ia-32", "platf+mac", "platf+red-hat", "platf+linux"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+hy")
    .merge({
      name: "Hy",
      websites: [{ kind: "wikipedia", title: "Hy", href: "https://en.wikipedia.org/wiki/Hy_(programming_language)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hy_Cuddles.png/121px-Hy_Cuddles.png",
        },
      ],
      releases: [
        { version: "0.29.0", date: "2024-01-01", kind: "stable" },
        { version: "1.0", date: "2022-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+kawa", "pl+clojure", "pl+common-lisp"])
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
      "para+reflective",
      "para+generic",
    ])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+hypercard")
    .merge({
      name: "HyperCard",
      websites: [{ kind: "wikipedia", title: "HyperCard", href: "https://en.wikipedia.org/wiki/HyperCard" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/e/ee/HyperCard_2-icon.png" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+mac"]);

  /**/

  g.buildPlang("pl+hypertalk")
    .merge({
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
    })
    .addInfluences(["pl+pascal"])
    .addParadigms(["para+imperative", "para+event"]);

  /**/

  g.buildPlang("pl+ibm").merge({
    name: "IBM",
    websites: [{ kind: "wikipedia", title: "IBM", href: "https://en.wikipedia.org/wiki/IBM" }],
  });

  /**/

  g.buildPlang("pl+ibm-704").merge({
    name: "IBM 704",
    websites: [{ kind: "wikipedia", title: "IBM 704", href: "https://en.wikipedia.org/wiki/IBM_704" }],
  });

  /**/

  g.buildPlang("pl+ibm-709-slash90-9pac").merge({
    name: "9PAC",
    websites: [{ kind: "wikipedia", title: "9PAC", href: "https://en.wikipedia.org/wiki/IBM_709/90_9PAC" }],
  });

  /**/

  g.buildPlang("pl+ibm-7090").merge({
    name: "7090",
    websites: [{ kind: "wikipedia", title: "7090", href: "https://en.wikipedia.org/wiki/IBM_7090" }],
  });

  /**/

  g.buildPlang("pl+ibm-informix-4gl").merge({
    name: "IBM Informix-4GL",
    websites: [
      { kind: "wikipedia", title: "IBM Informix-4GL", href: "https://en.wikipedia.org/wiki/IBM_Informix-4GL" },
    ],
  });

  /**/

  g.buildPlang("pl+ibm-pl-slashs")
    .merge({
      name: "PL/S",
      websites: [{ kind: "wikipedia", title: "PL/S", href: "https://en.wikipedia.org/wiki/IBM_PL/S" }],
    })
    .addInfluences(["pl+pl-slash"]);

  /**/

  g.buildPlang("pl+ibm-rpg")
    .merge({
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
    })
    .addDialects(["pl+rpg"])
    .addInfluences(["pl+ibm-709-slash90-9pac", "pl+fargo"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+z-slashos", "platf+vse", "platf+openvms", "platf+dos", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+ibm-system-slash360").merge({
    name: "S/360",
    websites: [{ kind: "wikipedia", title: "S/360", href: "https://en.wikipedia.org/wiki/IBM_System/360" }],
  });

  /**/

  g.buildPlang("pl+ibm-system-slash370").merge({
    name: "IBM System/370",
    websites: [{ kind: "wikipedia", title: "S/370", href: "https://en.wikipedia.org/wiki/IBM_System/370" }],
  });

  /**/

  g.buildPlang("pl+ibm-visualage")
    .merge({
      name: "VA Smalltalk",
      websites: [{ kind: "wikipedia", title: "VisualAge", href: "https://en.wikipedia.org/wiki/IBM_VisualAge" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+icon")
    .merge({
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
    })
    .addDialects(["pl+unicon"])
    .addInfluences(["pl+snobol", "pl+algol"])
    .addPerson("person+ralph-griswold", { role: "designer" })
    .addParadigms(["para+multi", "para+structured"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+id").merge({
    name: "Id",
    websites: [{ kind: "wikipedia", title: "Id", href: "https://en.wikipedia.org/wiki/Id_(programming_language)" }],
  });

  /**/

  g.buildPlang("pl+idl")
    .merge({
      name: "IDL",
      websites: [{ kind: "wikipedia", title: "IDL", href: "https://en.wikipedia.org/wiki/IDL_(programming_language)" }],
      releases: [{ version: "9.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+gnu-data"])
    .addInfluences(["pl+fortran"])
    .addParadigms(["para+array"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+idris")
    .merge({
      name: "Idris",
      websites: [
        { kind: "wikipedia", title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)" },
      ],
      releases: [
        { version: "1.3.4", date: "2021-01-01", kind: "stable" },
        { version: "0.7.0", date: "2023-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+agda", "pl+epigram", "pl+f-sharp"])
    .addInfluence("pl+clean", {
      refs: [
        {
          href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html",
          title: "Idris - Uniqueness Types",
        },
      ],
    })
    .addInfluence("pl+coq", {
      refs: [{ href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" }],
    })
    .addInfluence("pl+haskell", {
      refs: [{ href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" }],
    })
    .addInfluence("pl+ml", {
      refs: [{ href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" }],
    })
    .addInfluence("pl+rust", {
      refs: [
        { href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html", title: "Uniqueness Types" },
      ],
    })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+imp")
    .merge({
      name: "IMP",
      websites: [{ kind: "wikipedia", title: "IMP", href: "https://en.wikipedia.org/wiki/IMP_(programming_language)" }],
      releases: [{ version: "unknown", date: "1972-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+algol"])
    .addInfluences(["pl+algol"])
    .addPerson("person+national-security-agency", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+extensible"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+inferno")
    .merge({
      name: "Inferno",
      websites: [
        { kind: "wikipedia", title: "Inferno", href: "https://en.wikipedia.org/wiki/Inferno_(operating_system)" },
      ],
    })
    .addInfluences(["pl+rc"]);

  /**/

  g.buildPlang("pl+information-processing")
    .merge({
      name: "Information Processing Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Information Processing Language (IPL)",
          href: "https://en.wikipedia.org/wiki/Information_Processing_Language",
        },
      ],
    })
    .addPerson("person+allen-newell", { role: "designer" })
    .addPerson("person+cliff-shaw", { role: "designer" })
    .addPerson("person+herbert-a-simon", { role: "designer" })
    .addParadigms(["para+assembly"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+inscript").merge({
    name: "InScript",
    websites: [
      { kind: "wikipedia", title: "InScript", href: "https://en.wikipedia.org/wiki/InScript_(JavaScript_engine)" },
    ],
  });

  /**/

  g.buildPlang("pl+intel-array-building-blocks").merge({
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

  /**/

  g.buildPlang("pl+intel-parallel-building-blocks")
    .merge({
      name: "Parallel Building Blocks",
      websites: [
        {
          kind: "wikipedia",
          title: "Parallel Building Blocks",
          href: "https://en.wikipedia.org/wiki/Intel_Parallel_Building_Blocks",
        },
      ],
      releases: [{ version: "unknown", date: "2010-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cilk-plus", "pl+threading-building-blocks", "pl+intel-array-building-blocks"])
    .addParadigms(["para+imperative", "para+structured", "para+parallel"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+interactive-fiction")
    .merge({
      name: "interactive fiction",
      websites: [
        { kind: "wikipedia", title: "interactive fiction", href: "https://en.wikipedia.org/wiki/Interactive_fiction" },
      ],
    })
    .addInfluences(["pl+mdl"]);

  /**/

  g.buildPlang("pl+intercal").merge({
    name: "INTERCAL",
    websites: [{ kind: "wikipedia", title: "INTERCAL", href: "https://en.wikipedia.org/wiki/INTERCAL" }],
  });

  /**/

  g.buildPlang("pl+interpress").merge({
    name: "Interpress",
    websites: [{ kind: "wikipedia", title: "Interpress", href: "https://en.wikipedia.org/wiki/Interpress" }],
  });

  /**/

  g.buildPlang("pl+io")
    .merge({
      name: "Io",
      websites: [{ kind: "wikipedia", title: "Io", href: "https://en.wikipedia.org/wiki/Io_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg" }],
      releases: [{ version: "unknown", date: "2017-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+smalltalk",
      "pl+newtonscript",
      "pl+self",
      "pl+lua",
      "pl+lisp",
      "pl+python",
      "pl+actor-model-middle-history",
    ])
    .addParadigms(["para+objects", "para+prototypes"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+isetl")
    .merge({
      name: "ISETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/ISETL" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol", "pl+isetl", "pl+setl", "pl+setl2"])
    .addPerson("person+jacob-t-schwartz", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+iswim")
    .merge({
      name: "ISWIM",
      websites: [{ kind: "wikipedia", title: "ISWIM", href: "https://en.wikipedia.org/wiki/ISWIM" }],
    })
    .addInfluences(["pl+algol", "pl+lisp"])
    .addPerson("person+peter-landin", { role: "designer" })
    .addParadigms(["para+imperative", "para+functional"]);

  /**/

  g.buildPlang("pl+j")
    .merge({
      name: "J",
      websites: [{ kind: "wikipedia", title: "J", href: "https://en.wikipedia.org/wiki/J_(programming_language)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
        },
      ],
      releases: [{ version: "9.5", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+fl", "pl+apl"])
    .addPerson("person+roger-hui", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms([
      "para+array",
      "para+functional",
      "para+objects",
      "para+class",
      "para+prototypes",
      "para+function",
      "para+tacit",
    ])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+linux", "platf+mac", "platf+android", "platf+ios"])
    .addPlatform("platf+rpi", { refs: [{ href: "https://www.jsoftware.com/#/README", title: "Jsoftware" }] })
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+j-sharp")
    .merge({
      name: "J#",
      websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/J_Sharp" }],
    })
    .addInfluences(["pl+c-sharp", "pl+java", "pl+visual-jpp", "pl+ms-visual-c-sharp"])
    .addParadigms(["para+objects", "para+structured", "para+imperative"])
    .addPlatforms(["platf+.net"]);

  /**/

  g.buildPlang("pl+jakarta-server-pages")
    .merge({
      name: "JSP",
      websites: [{ kind: "wikipedia", title: "JSP", href: "https://en.wikipedia.org/wiki/Jakarta_Server_Pages" }],
    })
    .addInfluences(["pl+php"]);

  /**/

  g.buildPlang("pl+janus")
    .merge({
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
    })
    .addParadigms(["para+logic", "para+imperative", "para+reversible"]);

  /**/

  g.buildPlang("pl+java")
    .merge({
      name: "Java",
      websites: [
        { kind: "wikipedia", title: "Java", href: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      ],
    })
    .addInfluences([
      "pl+ada",
      "pl+c",
      "pl+cedar",
      "pl+emerald",
      "pl+clu",
      "pl+simula67",
      "pl+lisp",
      "pl+smalltalk",
      "pl+mdl",
      "pl+oaklisp",
      "pl+objective-cpp",
      "pl+strongtalk",
    ])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20210527025512/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PA133",
          title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
        },
        {
          href: "https://web.archive.org/web/20230929040943/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PAPA133#v=onepage&q&f=false",
          title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
        },
      ],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20110319065438/http://www.barrycornelius.com/papers/java5/",
          title: "[1]",
        },
      ],
    })
    .addInfluence("pl+eiffel", {
      refs: [
        {
          href: "https://web.archive.org/web/20140506214653/http://www.oracle.com/technetwork/java/langenv-140151.html",
          title: "The Java Language Environment",
        },
      ],
    })
    .addInfluence("pl+mesa", {
      refs: [
        {
          href: "https://web.archive.org/web/20110805051057/http://java.sun.com/docs/books/jls/second_edition/html/intro.doc.html#237601",
          title: "The Java Language Specification, 2nd Edition",
        },
      ],
    })
    .addInfluence("pl+modula", {
      refs: [
        {
          href: "https://web.archive.org/web/20090105145818/http://www.computerworld.com.au/index.php/id%3B1422447371%3Bpp%3B3%3Bfp%3B4194304%3Bfpid%3B1",
          title: "The A-Z of Programming Languages: Modula-3",
        },
      ],
    })
    .addInfluence("pl+oberon", {
      refs: [
        {
          href: "https://web.archive.org/web/20201201054813/http://www.delphikingdom.com/asp/viewitem.asp?catalogid=1155",
          title: "Niklaus Wirth's lecture at the Polytechnic Museum in Moscow",
        },
      ],
    })
    .addInfluence("pl+objective-c", {
      refs: [
        {
          href: "https://web.archive.org/web/20110713014816/http://cs.gmu.edu/~sean/stuff/java-objc.html",
          title: "[3]",
        },
      ],
    })
    .addInfluence("pl+pascal", {
      refs: [
        {
          href: "https://web.archive.org/web/20101229090912/http://www.fscript.org/prof/javapassport.pdf",
          title: "History of Java",
        },
        {
          href: "https://web.archive.org/web/20120627043929/http://java.sun.com/docs/white/delegates.html",
          title: 'About Microsoft\'s "Delegates"',
        },
      ],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20110319065438/http://www.barrycornelius.com/papers/java5/",
          title: "[1]",
        },
      ],
    })
    .addPerson("person+james-gosling", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+generic",
      "para+objects",
      "para+class",
      "para+functional",
      "para+imperative",
      "para+reflection",
      "para+concurrent",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+java-ee")
    .merge({
      name: "Java EE",
      websites: [{ kind: "wikipedia", title: "Java EE", href: "https://en.wikipedia.org/wiki/Java_EE" }],
    })
    .addInfluences(["pl+gemstone"]);

  /**/

  g.buildPlang("pl+java-object-oriented-querying")
    .merge({
      name: "jOOQ",
      websites: [
        { kind: "wikipedia", title: "jOOQ", href: "https://en.wikipedia.org/wiki/Java_Object_Oriented_Querying" },
      ],
      releases: [{ version: "3.19.2", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+sql"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+jvm"]);

  /**/

  g.buildPlang("pl+java-persistence-query")
    .merge({
      name: "JPQL",
      websites: [
        { kind: "wikipedia", title: "JPQL", href: "https://en.wikipedia.org/wiki/Java_Persistence_Query_Language" },
      ],
    })
    .addInfluences(["pl+sql"]);

  /**/

  g.buildPlang("pl+javafx-script")
    .merge({
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
    })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+javascript")
    .merge({
      name: "JavaScript",
      websites: [
        { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
        {
          kind: "wikipedia",
          title: "Javascript",
          href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "2025-01-01", kind: "preview" },
      ],
      extensions: [".cjs", ".js", ".mjs[4]"],
    })
    .addDialects(["pl+assemblyscript"])
    .addImplementations(["pl+v8", "pl+javascriptcore", "pl+spidermonkey", "pl+chakra"])
    .addInfluences(["pl+c", "pl+xtalk"])
    .addInfluence("pl+hypertalk", {
      refs: [{ href: "https://archive.org/details/javascriptbible000good", title: "JavaScript Bible" }],
    })
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://web.archive.org/web/20201224233514/https://books.google.com/books?id=nneBa6-mWfgC&q=The+immediate+concern+at+Netscape+was+it+must+look+like+Java.&pg=PA141",
          title: "Coders at Work: Reflections on the Craft of Programming",
        },
      ],
    })
    .addInfluence("pl+scheme", {
      refs: [
        {
          href: "https://web.archive.org/web/20200227184037/https://speakingjs.com/es5/ch04.html",
          title: "Chapter 4. How JavaScript Was Created",
        },
      ],
    })
    .addInfluence("pl+self", {
      refs: [{ href: "https://brendaneich.com/2008/04/popularity/", title: "Popularity – Brendan Eich" }],
    })
    .addInfluence("pl+awk", {
      refs: [
        {
          href: "https://web.archive.org/web/20200829024704/https://www.youtube.com/watch?v=1EyRscXrehw",
          title: "Brendan Eich: An Introduction to JavaScript, JSConf 2010",
        },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20181226141121/http://2ality.com/2013/02/javascript-influences.html%0A",
          title: "Perl and Python influences in JavaScript",
        },
      ],
    })
    .addPerson("person+brendan-eich", { role: "designer" })
    .addParadigms(["para+multi", "para+event", "para+functional", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/

  g.buildPlang("pl+javascriptcore")
    .merge({
      name: "WebKit",
      websites: [{ kind: "wikipedia", title: "JavaScriptCore", href: "https://en.wikipedia.org/wiki/JavaScriptCore" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
    })
    .addLicenses(["lic+lgpl"])
    .addLicense("lic+bsd-s", {
      refs: [{ href: "https://webkit.org/licensing-webkit/", title: "Licensing WebKit | WebKit" }],
    });

  /**/

  g.buildPlang("pl+jena").merge({
    name: "Jena",
    websites: [{ kind: "wikipedia", title: "Jena", href: "https://en.wikipedia.org/wiki/Jena_(framework)" }],
  });

  /**/

  g.buildPlang("pl+jmodelica.org")
    .merge({
      name: "JModelica.org",
      websites: [{ kind: "wikipedia", title: "JModelica.org", href: "https://en.wikipedia.org/wiki/JModelica.org" }],
      releases: [{ version: "2.10", date: "2019-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+join-java")
    .merge({
      name: "Join Java",
      websites: [
        { kind: "wikipedia", title: "Join Java", href: "https://en.wikipedia.org/wiki/Join_Java" },
        { kind: "homepage", title: "joinjava.unisa.edu.au", href: "http://joinjava.unisa.edu.au/" },
      ],
    })
    .addInfluences(["pl+java"])
    .addParadigms(["para+imperative", "para+reflective"]);

  /**/

  g.buildPlang("pl+joss")
    .merge({
      name: "JOSS",
      websites: [{ kind: "wikipedia", title: "JOSS", href: "https://en.wikipedia.org/wiki/JOSS" }],
    })
    .addDialects(["pl+focal"])
    .addImplementations(["pl+assembly"])
    .addPerson("person+cliff-shaw", { role: "designer" })
    .addParadigms(["para+non", "para+imperative"]);

  /**/

  g.buildPlang("pl+joule")
    .merge({
      name: "Joule",
      websites: [
        { kind: "wikipedia", title: "Joule", href: "https://en.wikipedia.org/wiki/Joule_(programming_language)" },
      ],
    })
    .addInfluences(["pl+actor-model", "pl+t"])
    .addParadigms(["para+multi", "para+objects", "para+distributed", "para+dataflow"]);

  /**/

  g.buildPlang("pl+jovial")
    .merge({
      name: "JOVIAL",
      websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
    })
    .addImplementations([
      "pl+mvs",
      "pl+openvms",
      "pl+macos",
      "pl+win",
      "pl+linux",
      "pl+sparc",
      "pl+powerpc",
      "pl+mil-std-1750a",
    ])
    .addInfluences(["pl+algol", "pl+semi-automatic-ground-environment"])
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+structural"]);

  /**/

  g.buildPlang("pl+joy")
    .merge({
      name: "Joy",
      websites: [{ kind: "wikipedia", title: "Joy", href: "https://en.wikipedia.org/wiki/Joy_(programming_language)" }],
      releases: [{ version: "unknown", date: "2003-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ffp", "pl+forth", "pl+fp", "pl+scheme"])
    .addParadigms(["para+multi", "para+functional", "para+concatenative", "para+stack"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+jq")
    .merge({
      name: "jq",
      websites: [{ kind: "wikipedia", title: "jq", href: "https://en.wikipedia.org/wiki/Jq_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg" }],
      releases: [{ version: "1.7.1", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c", "pl+go", "pl+rust"])
    .addInfluences(["pl+icon"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+json", "para+tacit"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+jscript")
    .merge({
      name: "JScript",
      websites: [{ kind: "wikipedia", title: "JScript", href: "https://en.wikipedia.org/wiki/JScript" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif" }],
      releases: [{ version: "9.0", date: "2011-01-01", kind: "stable" }],
      extensions: [".asp", ".hta", ".htm", ".html", ".js", ".jse", ".wsc", ".wsf"],
    })
    .addImplementations(["pl+active-scripting", "pl+jscript-.net"])
    .addPlatforms(["platf+win"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/

  g.buildPlang("pl+jscript-.net")
    .merge({
      name: "JScript .NET",
      websites: [{ kind: "wikipedia", title: "JScript .NET", href: "https://en.wikipedia.org/wiki/JScript_.NET" }],
      extensions: [".js"],
    })
    .addInfluences(["pl+jscript", "pl+ecmascript"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+duck", "tsys+weak", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+json")
    .merge({
      name: "JSON",
      websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }],
    })
    .addInfluence("pl+rebol", {
      refs: [{ href: "https://www.youtube.com/watch?v=-C-JoyNuQJs", title: "The JSON Saga" }],
    });

  /**/

  g.buildPlang("pl+jspp")
    .merge({
      name: "JS++",
      websites: [{ kind: "wikipedia", title: "JS++", href: "https://en.wikipedia.org/wiki/JS%2B%2B" }],
    })
    .addInfluences(["pl+c", "pl+java", "pl+javascript", "pl+c-sharp"])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20200511095442/https://www.onux.com/jspp/blog/scaling-jspp-abstraction-performance-and-readability/",
          title: "Scaling JS++: Abstraction, Performance, and Readability",
        },
      ],
    })
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+imperative", "para+structured", "para+objects", "para+functional", "para+generic"])
    .addTypeSystems(["tsys+gradual", "tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+julia")
    .merge({
      name: "Julia",
      websites: [
        { kind: "wikipedia", title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
        },
      ],
      releases: [
        { version: "1.10.3", date: "2024-01-01", kind: "stable" },
        { version: "1.11.0", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addImplementations(["pl+c", "pl+cpp", "pl+scheme"])
    .addImplementation("pl+llvm", {
      refs: [
        {
          href: "https://github.com/JuliaLang/julia/blob/master/doc/src/devdocs/build/build.md#required-build-tools-and-external-libraries",
          title: "Building Julia (Detailed)",
        },
      ],
    })
    .addInfluences(["pl+armed-bear-common-lisp", "pl+c", "pl+common-lisp", "pl+scheme"])
    .addInfluence("pl+dylan", {
      refs: [
        {
          href: "https://increment.com/programming-languages/goldilocks-language-history-of-julia/",
          title: "Julia: The Goldilocks language",
        },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20200502144010/https://julialang.org/blog/2012/02/why-we-created-julia/",
          title: "Why We Created Julia",
        },
      ],
    })
    .addInfluence("pl+r", {
      refs: [
        {
          href: "https://web.archive.org/web/20180620172516/https://docs.julialang.org/en/stable/manual/introduction/#man-introduction-1",
          title: "Introduction",
        },
      ],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20180816025550/https://docs.julialang.org/en/stable/",
          title: "Julia 1.0 Documentation: Introduction",
        },
      ],
    })
    .addPerson("person+jeff-bezanson", { role: "designer" })
    .addPerson("person+alan-edelman", { role: "designer" })
    .addPerson("person+stefan-karpinski", { role: "designer" })
    .addPerson("person+viral-b-shah", {
      role: "designer",
      refs: [{ href: "https://github.com/JuliaLang/julia/blob/master/LICENSE.md", title: "LICENSE.md" }],
    })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+functional",
      "para+array",
      "para+imperative",
      "para+structured",
      "para+reflective",
      "para+meta",
    ])
    .addParadigm("para+multi", {
      refs: [
        {
          href: "https://medium.com/@acidflask/smoothing-data-with-julia-s-generated-functions-c80e240e05f3#.615wk3dle",
          title: "Smoothing data with Julia's @generated functions",
        },
      ],
    })
    .addParadigm("para+objects", {
      refs: [
        {
          href: "https://www.oreilly.com/library/view/beginning-julia-programming/9781484231715/A458482_1_En_2_Chapter.html",
          title: "2. Object-Oriented Programming - Beginning Julia Programming: For Engineers and Scientists [Book]",
        },
      ],
    })
    .addPlatforms([
      "platf+x86-64",
      "platf+ia-32",
      "platf+mac",
      "platf+64-bit-computing",
      "platf+aarch64",
      "platf+bsd",
      "platf+arm",
      "platf+rocm",
      "platf+oneapi",
      "platf+linux",
      "platf+win",
    ])
    .addPlatform("platf+cuda", { refs: [{ href: "https://juliagpu.org/cuda/", title: "NVIDIA CUDA ⋅ JuliaGPU" }] })
    .addTypeSystems(["tsys+inferred", "tsys+optional", "tsys+nominative", "tsys+parametric"])
    .addTypeSystem("tsys+dynamic", {
      refs: [
        {
          href: "https://erik-engheim.medium.com/dynamically-typed-languages-are-not-what-you-think-ac8d1392b803",
          title: "Dynamically Typed Languages Are Not What You Think",
        },
      ],
    })
    .addTypeSystem("tsys+strong", {
      refs: [
        {
          href: "https://erik-engheim.medium.com/dynamically-typed-languages-are-not-what-you-think-ac8d1392b803",
          title: "Dynamically Typed Languages Are Not What You Think",
        },
      ],
    });

  /**/

  g.buildPlang("pl+k")
    .merge({
      name: "k",
      websites: [{ kind: "wikipedia", title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)" }],
    })
    .addInfluences(["pl+ap", "pl+apl", "pl+scheme"])
    .addPerson("person+arthur-whitney", { role: "designer" })
    .addParadigms(["para+array", "para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+karel")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/NikiExample.jpg/220px-NikiExample.jpg",
        },
      ],
    })
    .addInfluences(["pl+pascal"])
    .addPerson("person+richard-e-pattis", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+kawa")
    .merge({
      name: "Kawa",
      websites: [
        { kind: "wikipedia", title: "Kawa", href: "https://en.wikipedia.org/wiki/Kawa_(Scheme_implementation)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kawa-logo.svg" }],
      releases: [{ version: "3.1.1", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+java", "pl+scheme"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"]);

  /**/

  g.buildPlang("pl+kent-recursive-calculator")
    .merge({
      name: "KRC",
      websites: [{ kind: "wikipedia", title: "KRC", href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator" }],
    })
    .addInfluences(["pl+sasl"])
    .addPerson("person+david-turner", { role: "designer" })
    .addParadigms(["para+functional"]);

  /**/

  g.buildPlang("pl+kivy")
    .merge({
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
    })
    .addLicenses(["lic+mit", "lic+free"]);

  /**/

  g.buildPlang("pl+kl0")
    .merge({ name: "KL0", websites: [{ kind: "wikipedia", title: "KL0", href: "https://en.wikipedia.org/wiki/KL0" }] })
    .addInfluences(["pl+prolog"]);

  /**/

  g.buildPlang("pl+kl1")
    .merge({ name: "KL1", websites: [{ kind: "wikipedia", title: "KL1", href: "https://en.wikipedia.org/wiki/KL1" }] })
    .addInfluences(["pl+prolog"]);

  /**/

  g.buildPlang("pl+kodu-game-lab").merge({
    name: "Kodu Game Lab",
    websites: [{ kind: "wikipedia", title: "Kodu Game Lab", href: "https://en.wikipedia.org/wiki/Kodu_Game_Lab" }],
    releases: [{ version: "1.6.18.0", date: "2023-01-01", kind: "stable" }],
  });

  /**/

  g.buildPlang("pl+kojo")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kojo-screenshot.png/300px-Kojo-screenshot.png",
        },
      ],
      releases: [{ version: "2.9.24", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+logo", "pl+processing"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+structured", "para+functional", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+korn-shell")
    .merge({
      name: "Korn Shell",
      websites: [{ kind: "wikipedia", title: "Korn Shell", href: "https://en.wikipedia.org/wiki/Korn_Shell" }],
    })
    .addInfluences(["pl+awk"]);

  /**/

  g.buildPlang("pl+kornshell").merge({
    name: "Ksh",
    websites: [{ kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" }],
  });

  /**/

  g.buildPlang("pl+kotlin")
    .merge({
      name: "Kotlin",
      websites: [
        { kind: "wikipedia", title: "Kotlin", href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg" }],
      releases: [{ version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+apache-groovy",
      "pl+c-sharp",
      "pl+gosu",
      "pl+groovy",
      "pl+java",
      "pl+ms-visual-c-sharp",
      "pl+ml",
      "pl+scala",
    ])
    .addLicenses(["lic+apache"])
    .addParadigms([
      "para+multi",
      "para+objects",
      "para+functional",
      "para+imperative",
      "para+block",
      "para+dec",
      "para+generic",
      "para+reflection",
      "para+concurrent",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+krl")
    .merge({
      name: "KRL",
      websites: [{ kind: "wikipedia", title: "KRL", href: "https://en.wikipedia.org/wiki/KRL_(programming_language)" }],
    })
    .addParadigms(["para+knowledge"]);

  /**/

  g.buildPlang("pl+kuka-robot")
    .merge({
      name: "KUKA Robot Language",
      websites: [
        { kind: "wikipedia", title: "KUKA Robot Language", href: "https://en.wikipedia.org/wiki/KUKA_Robot_Language" },
      ],
    })
    .addInfluences(["pl+pascal"]);

  /**/

  g.buildPlang("pl+labview")
    .merge({
      name: "LabVIEW",
      websites: [{ kind: "wikipedia", title: "LabVIEW", href: "https://en.wikipedia.org/wiki/LabVIEW" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/LabVIEW_Logo.jpg/300px-LabVIEW_Logo.jpg",
        },
      ],
      releases: [{ version: "5.1", date: "2023-01-01", kind: "stable" }],
    })
    .addPerson("person+national-instruments", { role: "developer" })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+lambda-calculus").merge({
    name: "Lambda calculus",
    websites: [{ kind: "wikipedia", title: "Lambda calculus", href: "https://en.wikipedia.org/wiki/Lambda_calculus" }],
  });

  /**/

  g.buildPlang("pl+language-h")
    .merge({
      name: "Language H",
      websites: [{ kind: "wikipedia", title: "Language H", href: "https://en.wikipedia.org/wiki/Language_H" }],
    })
    .addInfluences(["pl+cobol"])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+language-integrated-query")
    .merge({
      name: "LINQ",
      websites: [{ kind: "wikipedia", title: "LINQ", href: "https://en.wikipedia.org/wiki/Language_Integrated_Query" }],
    })
    .addInfluences(["pl+sql"]);

  /**/

  g.buildPlang("pl+laning-and-zierler-system").merge({
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

  g.buildPlang("pl+lasso")
    .merge({
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
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+dylan", "pl+smalltalk", "pl+scala"])
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+structured", "para+objects", "para+meta", "para+reflection"])
    .addPlatforms(["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"])
    .addTypeSystems(["tsys+dynamic", "tsys+nominative", "tsys+duck"]);

  /**/

  g.buildPlang("pl+lean")
    .merge({
      name: "Lean",
      websites: [{ kind: "wikipedia", title: "Lean", href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg" }],
      releases: [
        { version: "4.7.0", date: "2024-01-01", kind: "stable" },
        { version: "4.8.0", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addImplementations(["pl+cpp"])
    .addInfluences(["pl+ml", "pl+coq", "pl+haskell"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+imperative"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+lfe")
    .merge({
      name: "LFE",
      websites: [{ kind: "wikipedia", title: "LFE", href: "https://en.wikipedia.org/wiki/LFE_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
        },
      ],
      releases: [{ version: "2.1.1", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+erlang"])
    .addInfluences([
      "pl+elixir",
      "pl+erlang",
      "pl+common-lisp",
      "pl+maclisp",
      "pl+scheme",
      "pl+clojure",
      "pl+hy",
      "pl+reia",
    ])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+concurrent", "para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+libertyeiffel")
    .merge({
      name: "Liberty Eiffel",
      websites: [{ kind: "wikipedia", title: "LibertyEiffel", href: "https://en.wikipedia.org/wiki/LibertyEiffel" }],
      releases: [{ version: "2016.05", date: "2016-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+limbo")
    .merge({
      name: "Limbo",
      websites: [
        { kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Limbo_(programming_language)" },
      ],
    })
    .addImplementations(["pl+dis-virtual-machine"])
    .addInfluences(["pl+alef", "pl+c", "pl+pascal", "pl+communicating-sequential-processes", "pl+newsqueak"])
    .addPerson("person+rob-pike", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+lingo")
    .merge({
      name: "Lingo",
      websites: [
        { kind: "wikipedia", title: "Lingo", href: "https://en.wikipedia.org/wiki/Lingo_(programming_language)" },
      ],
    })
    .addInfluences(["pl+hypertalk", "pl+xtalk"]);

  /**/

  g.buildPlang("pl+linux").merge({
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  /**/

  g.buildPlang("pl+lis").merge({
    name: "LIS",
    websites: [{ kind: "wikipedia", title: "LIS", href: "https://en.wikipedia.org/wiki/LIS_(programming_language)" }],
  });

  /**/

  g.buildPlang("pl+little-b")
    .merge({
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
    })
    .addImplementations(["pl+linux", "pl+mac-os-x", "pl+win"])
    .addInfluences(["pl+lisp"])
    .addParadigms(["para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+livecode")
    .merge({
      name: "LiveCode",
      websites: [{ kind: "wikipedia", title: "LiveCode", href: "https://en.wikipedia.org/wiki/LiveCode" }],
      releases: [
        { version: "9.6.4", date: "2021-01-01", kind: "stable" },
        { version: "9.6.5", date: "2021-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+hypertalk", "pl+xtalk"])
    .addLicenses(["lic+proprietary", "lic+gpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+unix", "platf+rpi"]);

  /**/

  g.buildPlang("pl+livescript")
    .merge({
      name: "LiveScript",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveScript",
          href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
        },
      ],
      releases: [{ version: "1.6.1", date: "2020-01-01", kind: "stable" }],
      extensions: [".ls"],
    })
    .addInfluences(["pl+coffeescript", "pl+f-sharp", "pl+javascript", "pl+haskell"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  /**/

  g.buildPlang("pl+llvm").merge({
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  /**/

  g.buildPlang("pl+logo")
    .merge({
      name: "Logo",
      websites: [
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    })
    .addDialects(["pl+starlogo", "pl+netlogo"])
    .addImplementations(["pl+ucblogo"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+wally-feurzeig", { role: "designer" })
    .addPerson("person+seymour-papert", { role: "designer" })
    .addPerson("person+cynthia-solomon", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflective"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+logtalk")
    .merge({
      name: "Logtalk",
      websites: [{ kind: "wikipedia", title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk" }],
      releases: [{ version: "3.66.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog", "pl+smalltalk", "pl+objective-c"])
    .addLicenses(["lic+artistic-2", "lic+apache"])
    .addParadigms(["para+logic", "para+objects", "para+prototypes"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+lpc")
    .merge({
      name: "LPC",
      websites: [{ kind: "wikipedia", title: "LPC", href: "https://en.wikipedia.org/wiki/LPC_(programming_language)" }],
    })
    .addInfluences(["pl+c"]);

  /**/

  g.buildPlang("pl+lua")
    .merge({
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    })
    .addImplementations(["pl+ansi-c", "pl+luajit"])
    .addInfluences(["pl+awk", "pl+clu", "pl+modula", "pl+scheme", "pl+self"])
    .addInfluence("pl+cpp", {
      refs: [
        { href: "https://www.lua.org/history.html", title: "The evolution of an extension language: a history of Lua" },
      ],
    })
    .addInfluence("pl+snobol", {
      refs: [
        {
          href: "https://www.lua.org/doc/hopl.pdf",
          title: "Proceedings of the third ACM SIGPLAN conference on History of programming languages",
        },
      ],
    })
    .addPerson("person+roberto-ierusalimschy", { role: "designer" })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+scripting",
      "para+imperative",
      "para+prototypes",
      "para+objects",
      "para+functional",
      "para+meta",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/

  g.buildPlang("pl+luajit").merge({
    name: "LuaJIT",
    websites: [{ kind: "wikipedia", title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT" }],
  });

  /**/

  g.buildPlang("pl+lucid")
    .merge({
      name: "Lucid",
      websites: [
        { kind: "wikipedia", title: "Lucid", href: "https://en.wikipedia.org/wiki/Lucid_(programming_language)" },
      ],
    })
    .addInfluences(["pl+iswim"])
    .addParadigms(["para+dataflow"]);

  /**/

  g.buildPlang("pl+lustre")
    .merge({
      name: "Lustre",
      websites: [
        { kind: "wikipedia", title: "Lustre", href: "https://en.wikipedia.org/wiki/Lustre_(programming_language)" },
      ],
    })
    .addInfluences(["pl+lucid"]);

  /**/

  g.buildPlang("pl+lyapas")
    .merge({
      name: "LYaPAS",
      websites: [{ kind: "wikipedia", title: "LYaPAS", href: "https://en.wikipedia.org/wiki/LYaPAS" }],
    })
    .addParadigms(["para+functional", "para+structured", "para+modular"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+m-sharp")
    .merge({
      name: "M#",
      websites: [
        { kind: "wikipedia", title: "M#", href: "https://en.wikipedia.org/wiki/M_Sharp_(programming_language)" },
        { kind: "homepage", title: "http://www.msharp.co.uk/", href: "http://www.msharp.co.uk/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Msharp_logo.png" }],
    })
    .addImplementations(["pl+ms-visual-c-sharp", "pl+.net-framework", "pl+asp.net", "pl+domain-specific"])
    .addParadigms(["para+multi", "para+structured", "para+objects", "para+event", "para+imperative", "para+meta"])
    .addTypeSystems(["tsys+static", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+m4")
    .merge({
      name: "m4",
      websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/M4_(computer_language)" }],
    })
    .addImplementations(["pl+gnu-m4"])
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addPerson("person+dennis-ritchie", { role: "designer" })
    .addParadigms(["para+macros"]);

  /**/

  g.buildPlang("pl+mac-os-x").merge({
    name: "Mac OS X",
    websites: [{ kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  /**/

  g.buildPlang("pl+macos").merge({
    name: "macOS",
    websites: [{ kind: "wikipedia", title: "macOS", href: "https://en.wikipedia.org/wiki/MacOS" }],
  });

  /**/

  g.buildPlang("pl+macsyma").merge({
    name: "Macsyma",
    websites: [{ kind: "wikipedia", title: "Macsyma", href: "https://en.wikipedia.org/wiki/Macsyma" }],
  });

  /**/

  g.buildPlang("pl+mad")
    .merge({
      name: "MAD",
      websites: [{ kind: "wikipedia", title: "MAD", href: "https://en.wikipedia.org/wiki/MAD_(programming_language)" }],
    })
    .addImplementations([
      "pl+ibm-704",
      "pl+ibm-7090",
      "pl+ibm-system-slash360",
      "pl+ibm-system-slash370",
      "pl+univac-1108",
    ])
    .addInfluences(["pl+algol"])
    .addPerson("person+bernard-galler", { role: "designer" })
    .addPerson("person+bruce-arden", { role: "designer" })
    .addPerson("person+robert-m-graham", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+magma-computer-algebra-system")
    .merge({
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
    })
    .addPerson("person+school-of-mathematics", { role: "developer" });

  /**/

  g.buildPlang("pl+maker-culture").merge({
    name: "Maker Culture",
    websites: [{ kind: "wikipedia", title: "Maker Culture", href: "https://en.wikipedia.org/wiki/Maker_culture" }],
  });

  /**/

  g.buildPlang("pl+malbolge")
    .merge({
      name: "Malbolge",
      websites: [{ kind: "wikipedia", title: "Malbolge", href: "https://en.wikipedia.org/wiki/Malbolge" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Malbolge_cat_program.png/300px-Malbolge_cat_program.png",
        },
      ],
    })
    .addInfluences(["pl+brainfuck", "pl+intercal", "pl+befunge"]);

  /**/

  g.buildPlang("pl+maple")
    .merge({
      name: "Maple",
      websites: [{ kind: "wikipedia", title: "Maple", href: "https://en.wikipedia.org/wiki/Maple_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg" }],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+waterloo-maple", { role: "developer" })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"]);

  /**/

  g.buildPlang("pl+maplesim").merge({
    name: "MapleSim",
    websites: [{ kind: "wikipedia", title: "MapleSim", href: "https://en.wikipedia.org/wiki/MapleSim" }],
  });

  /**/

  g.buildPlang("pl+mariadb").merge({
    name: "MariaDB",
    websites: [{ kind: "wikipedia", title: "MariaDB", href: "https://en.wikipedia.org/wiki/MariaDB" }],
  });

  /**/

  g.buildPlang("pl+math-matic")
    .merge({
      name: "MATH-MATIC",
      websites: [{ kind: "wikipedia", title: "MATH-MATIC", href: "https://en.wikipedia.org/wiki/MATH-MATIC" }],
    })
    .addInfluences(["pl+flow-matic"])
    .addPerson("person+remington-rand", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+mathematica")
    .merge({
      name: "Mathematica",
      websites: [
        { kind: "wikipedia", title: "Wolfram Mathematica", href: "https://en.wikipedia.org/wiki/Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+mac", "platf+linux"])
    .addPlatform("platf+win", {
      refs: [
        {
          href: "https://www.wolfram.com/mathematica/system-requirements.html",
          title: "Mathematica 12 System Requirements and Platform Availability",
        },
      ],
    })
    .addPlatform("platf+rpi", {
      refs: [
        {
          href: "https://web.archive.org/web/20140509213354/http://www.theverge.com/2013/11/21/5130394/raspberry-pi-includes-mathematica-wolfram-language-free",
          title: "Raspberry Pi Includes Mathematica for Free",
        },
      ],
    });

  /**/

  g.buildPlang("pl+matlab")
    .merge({
      name: "MATLAB",
      websites: [{ kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/121px-Matlab_Logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+gnu-octave", "pl+sysquake"])
    .addInfluences(["pl+fortran"])
    .addInfluence("pl+speakeasy", {
      refs: [
        {
          href: "http://archive.computerhistory.org/resources/access/text/2013/12/102746804-05-01-acc.pdf",
          title:
            "An interview with CLEVE MOLER Conducted by Thomas Haigh On 8 and 9 March, 2004 Santa Barbara, California",
        },
      ],
    })
    .addPerson("person+cleve-moler", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects", "para+array"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+arm"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  /**/

  g.buildPlang("pl+max")
    .merge({
      name: "Max",
      websites: [{ kind: "wikipedia", title: "Max", href: "https://en.wikipedia.org/wiki/Max_(software)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
        },
      ],
      releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+maxima")
    .merge({
      name: "Maxima",
      websites: [{ kind: "wikipedia", title: "Maxima", href: "https://en.wikipedia.org/wiki/Maxima_(software)" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg" }],
      releases: [{ version: "5.47.0", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+mblock")
    .merge({
      name: "mBlock",
      websites: [{ kind: "wikipedia", title: "mBlock", href: "https://en.wikipedia.org/wiki/MBlock" }],
    })
    .addInfluences(["pl+scratch"]);

  /**/

  g.buildPlang("pl+mdl")
    .merge({
      name: "MDL",
      websites: [{ kind: "wikipedia", title: "MDL", href: "https://en.wikipedia.org/wiki/MDL_(programming_language)" }],
      scoping: ["lexical"],
    })
    .addInfluences(["pl+lisp"])
    .addPerson("person+gerald-sussman", { role: "designer" })
    .addPerson("person+carl-hewitt", { role: "designer" })
    .addPerson("person+bruce-daniels", { role: "designer" })
    .addLicenses(["lic+open-source"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"])
    .addPlatforms(["platf+bsd"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+mercury")
    .merge({
      name: "Mercury",
      websites: [
        { kind: "wikipedia", title: "Mercury", href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Mercury",
          href: "https://en.wikipedia.org/wiki/Mercury_(RemObjects_BASIC_programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Mercury_%28programming_language%29_logo.jpg/121px-Mercury_%28programming_language%29_logo.jpg",
        },
      ],
      releases: [{ version: "22.01.8", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog", "pl+hope", "pl+haskell", "pl+basic"])
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+jvm",
      "platf+.net",
      "platf+cross-platform",
      "platf+unix",
      "platf+linux",
      "platf+mac",
      "platf+bsd",
      "platf+win",
      "platf+android",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+polymorphic"]);

  /**/

  g.buildPlang("pl+mesa")
    .merge({
      name: "Mesa",
      websites: [
        { kind: "wikipedia", title: "Mesa", href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)" },
      ],
      releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol"]);

  /**/

  g.buildPlang("pl+mil-std-1750a").merge({
    name: "MIL-STD-1750A",
    websites: [{ kind: "wikipedia", title: "MIL-STD-1750A", href: "https://en.wikipedia.org/wiki/MIL-STD-1750A" }],
  });

  /**/

  g.buildPlang("pl+mips-architecture").merge({
    name: "MIPS",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  /**/

  g.buildPlang("pl+mirah")
    .merge({
      name: "Mirah",
      websites: [
        { kind: "wikipedia", title: "Mirah", href: "https://en.wikipedia.org/wiki/Mirah_(programming_language)" },
        { kind: "homepage", title: "https://mirah.org/", href: "https://mirah.org/" },
      ],
      releases: [{ version: "0.2.1", date: "2016-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ruby", "pl+java", "pl+boo"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects", "para+imperative"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+miranda")
    .merge({
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
    })
    .addInfluences(["pl+iswim", "pl+kent-recursive-calculator", "pl+ml", "pl+sasl", "pl+hope"])
    .addPerson("person+david-turner", { role: "designer" })
    .addParadigms(["para+lazy", "para+functional", "para+dec"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+ml")
    .merge({
      name: "ML",
      websites: [{ kind: "wikipedia", title: "ML", href: "https://en.wikipedia.org/wiki/ML_(programming_language)" }],
    })
    .addDialects([
      "pl+alice",
      "pl+ats",
      "pl+caml",
      "pl+f-sharp",
      "pl+f-star",
      "pl+futhark",
      "pl+ocaml",
      "pl+sml",
      "pl+mlton",
      "pl+poly-slashml",
      "pl+reason",
    ])
    .addInfluences(["pl+iswim"])
    .addPerson("person+robin-milner", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+ml-slashi")
    .merge({
      name: "ML/I",
      websites: [{ kind: "wikipedia", title: "ML/I", href: "https://en.wikipedia.org/wiki/ML/I" }],
    })
    .addInfluence("pl+trac", {
      refs: [
        {
          href: "https://web.archive.org/web/20090813125040/http://hopl.murdoch.edu.au/showlanguage.prx?exp=276",
          title: "TRAC – A man-machine string manipulating language",
        },
      ],
    });

  /**/

  g.buildPlang("pl+mlton")
    .merge({
      name: "MLton",
      websites: [{ kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" }],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+sml"])
    .addLicense("lic+hpnd", { refs: [{ href: "http://mlton.org/License", title: "License" }] })
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+modelica")
    .merge({
      name: "Modelica",
      websites: [
        { kind: "wikipedia", title: "Modelica", href: "https://en.wikipedia.org/wiki/Modelica" },
        { kind: "homepage", title: "www.modelica.org", href: "https://www.modelica.org/" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Modelica_Language.png/300px-Modelica_Language.png",
        },
      ],
      releases: [{ version: "3.6", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations([
      "pl+amesim",
      "pl+catia",
      "pl+dymola",
      "pl+jmodelica.org",
      "pl+maplesim",
      "pl+wolfram-systemmodeler",
      "pl+openmodelica",
      "pl+scicos",
      "pl+simulationx",
      "pl+xcos",
    ])
    .addLicenses(["lic+ccs"])
    .addParadigms(["para+dec"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+mojo")
    .merge({
      name: "Mojo",
      websites: [
        { kind: "wikipedia", title: "Mojo", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)" },
      ],
      releases: [{ version: "24.4", date: "2024-01-01", kind: "preview" }],
      extensions: [".mojo", ".🔥"],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20230505064554/https://www.infoworld.com/article/3695588/mojo-language-marries-python-and-mlir-for-ai-development.html",
          title: "Mojo language marries Python and MLIR for AI development",
        },
      ],
    })
    .addPerson("person+chris-lattner", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+affine"]);

  /**/

  g.buildPlang("pl+mono").merge({
    name: "Mono",
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  /**/

  g.buildPlang("pl+moonscript")
    .merge({
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    })
    .addImplementations(["pl+ansi-c", "pl+luajit"])
    .addInfluences(["pl+coffeescript", "pl+cpp", "pl+clu", "pl+modula", "pl+scheme", "pl+snobol"])
    .addPerson("person+roberto-ierusalimschy", { role: "designer" })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+scripting",
      "para+imperative",
      "para+prototypes",
      "para+objects",
      "para+functional",
      "para+meta",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/

  g.buildPlang("pl+moose")
    .merge({
      name: "Moose",
      websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
    })
    .addInfluences(["pl+armed-bear-common-lisp", "pl+common-lisp"]);

  /**/

  g.buildPlang("pl+morphic").merge({
    name: "Morphic",
    websites: [{ kind: "wikipedia", title: "Morphic", href: "https://en.wikipedia.org/wiki/Morphic_(software)" }],
  });

  /**/

  g.buildPlang("pl+motorola-68000").merge({
    name: "Motorola 68000",
    websites: [{ kind: "wikipedia", title: "Motorola 68000", href: "https://en.wikipedia.org/wiki/Motorola_68000" }],
  });

  /**/

  g.buildPlang("pl+ms-power-fx")
    .merge({
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
    })
    .addInfluences(["pl+excel", "pl+pascal", "pl+mathematica", "pl+miranda"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+low", "para+general", "para+imperative", "para+strongly", "para+dec", "para+functional"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+ms-visual-c-sharp")
    .merge({
      name: "Visual C#",
      websites: [
        { kind: "wikipedia", title: "Visual C#", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C_Sharp" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
      releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
      extensions: [".cs", ".csx"],
    })
    .addDialects(["pl+c-", "pl+polyphonic-c-sharp"])
    .addImplementations(["pl+ms-visual-c-sharp", "pl+.net", "pl+mono", "pl+win", "pl+.net-framework", "pl+dotgnu"])
    .addInfluences([
      "pl+cpp",
      "pl+c-",
      "pl+eiffel",
      "pl+f-sharp",
      "pl+haskell",
      "pl+scala",
      "pl+icon",
      "pl+j-sharp",
      "pl+visual-jpp",
      "pl+java",
      "pl+ml",
      "pl+modula",
      "pl+basic",
    ])
    .addInfluence("pl+pascal", {
      refs: [
        {
          href: "https://web.archive.org/web/20100324124903/http://www.computerworld.com.au/article/261958/a-z_programming_languages_c_/?pp=7",
          title: "The A-Z of Programming Languages: C#",
        },
      ],
    })
    .addPerson("person+anders-hejlsberg", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+imperative",
      "para+objects",
      "para+event",
      "para+the",
      "para+functional",
      "para+generic",
      "para+reflective",
      "para+concurrent",
    ])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+inferred"])
    .addTypeSystem("tsys+dynamic", {
      refs: [
        {
          href: "https://web.archive.org/web/20120103195731/http://code.msdn.microsoft.com/csharpfuture/Release/ProjectReleases.aspx?ReleaseId=1686",
          title: "New features in C# 4.0",
        },
      ],
    });

  /**/

  g.buildPlang("pl+ms-visual-studio").merge({
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

  g.buildPlang("pl+mumps")
    .merge({
      name: "MUMPS",
      websites: [{ kind: "wikipedia", title: "MUMPS", href: "https://en.wikipedia.org/wiki/MUMPS" }],
      releases: [{ version: "11.1", date: "1995-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+fortran", "pl+joss", "pl+speedcoding", "pl+telcomp"])
    .addPerson("person+neil-pappalardo", { role: "designer" })
    .addPerson("person+robert-a-greenes", { role: "designer" })
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+mvs").merge({
    name: "MVS",
    websites: [{ kind: "wikipedia", title: "MVS", href: "https://en.wikipedia.org/wiki/MVS" }],
  });

  /**/

  g.buildPlang("pl+n1ql")
    .merge({
      name: "N1QL",
      websites: [{ kind: "wikipedia", title: "N1QL", href: "https://en.wikipedia.org/wiki/N1QL" }],
    })
    .addInfluences(["pl+sql"]);

  /**/

  g.buildPlang("pl+napier88")
    .merge({
      name: "Napier88",
      websites: [{ kind: "wikipedia", title: "Napier88", href: "https://en.wikipedia.org/wiki/Napier88" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+ron-morrison", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"]);

  /**/

  g.buildPlang("pl+neko")
    .merge({
      name: "NekoVMNeko",
      websites: [
        { kind: "wikipedia", title: "NekoVMNeko", href: "https://en.wikipedia.org/wiki/Neko_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+ocaml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+nekovm")
    .merge({
      name: "NekoVMNeko",
      websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+ocaml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+objects", "para+structured", "para+prototypes", "para+scripting"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+nemerle")
    .merge({
      name: "Nemerle",
      websites: [{ kind: "wikipedia", title: "Nemerle", href: "https://en.wikipedia.org/wiki/Nemerle" }],
      releases: [{ version: "1.2.507.0", date: "2016-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+ms-visual-c-sharp", "pl+ml", "pl+lisp"])
    .addParadigms([
      "para+multi",
      "para+aspect",
      "para+event",
      "para+functional",
      "para+generic",
      "para+imperative",
      "para+meta",
      "para+objects",
      "para+reflective",
    ])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+nesl")
    .merge({
      name: "NESL",
      websites: [{ kind: "wikipedia", title: "NESL", href: "https://en.wikipedia.org/wiki/NESL" }],
      releases: [{ version: "3.1", date: "1995-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+isc", "lic+mit"])
    .addParadigms(["para+functional", "para+array"]);

  /**/

  g.buildPlang("pl+net.data")
    .merge({
      name: "Net.Data",
      websites: [
        { kind: "wikipedia", title: "Net.Data", href: "https://en.wikipedia.org/wiki/Net.Data" },
        {
          kind: "homepage",
          title: "http://www-306.ibm.com/software/data/net.data/",
          href: "http://www-306.ibm.com/software/data/net.data/",
        },
      ],
    })
    .addPlatforms(["platf+z-slashos", "platf+win", "platf+unix"]);

  /**/

  g.buildPlang("pl+netlogo")
    .merge({
      name: "NetLogo",
      websites: [{ kind: "wikipedia", title: "NetLogo", href: "https://en.wikipedia.org/wiki/NetLogo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/NetLogo_%28logo%29.png/280px-NetLogo_%28logo%29.png",
        },
      ],
      releases: [{ version: "6.4.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+scala", "pl+java"])
    .addInfluences(["pl+logo", "pl+starlogo", "pl+objectlogo", "pl+ucblogo"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi", "para+educational", "para+imperative", "para+computer", "para+simulation"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+jvm"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+netrexx")
    .merge({
      name: "NetRexx",
      websites: [{ kind: "wikipedia", title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NETREXX.gif" }],
      releases: [{ version: "4.06", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+pl-slash", "pl+rexx", "pl+object-rexx", "pl+java"])
    .addPerson("person+mike-cowlishaw", { role: "designer" })
    .addLicense("lic+icu", {
      refs: [{ href: "https://kenai.com/projects/netrexx/pages/License", title: "ICU License - ICU 1.8.1 and later" }],
    })
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+structured"])
    .addPlatforms([
      "platf+cross-platform",
      "platf+linux",
      "platf+win",
      "platf+mac",
      "platf+z-slashos",
      "platf+z-slashvm",
      "platf+android",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+newp")
    .merge({
      name: "NEWP",
      websites: [{ kind: "wikipedia", title: "NEWP", href: "https://en.wikipedia.org/wiki/NEWP" }],
      releases: [{ version: "17.0", date: "2015-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+executive-systems-problem-oriented", "pl+algol"])
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+newspeak")
    .merge({
      name: "Newspeak",
      websites: [
        { kind: "wikipedia", title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+cpp", "pl+javascript"])
    .addInfluences(["pl+smalltalk", "pl+self", "pl+beta", "pl+e"])
    .addPerson("person+gilad-bracha", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects", "para+functional"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+android", "platf+web"])
    .addTypeSystems(["tsys+dynamic", "tsys+optional"]);

  /**/

  g.buildPlang("pl+newsqueak")
    .merge({
      name: "Newsqueak",
      websites: [{ kind: "wikipedia", title: "Newsqueak", href: "https://en.wikipedia.org/wiki/Newsqueak" }],
    })
    .addInfluences(["pl+c", "pl+communicating-sequential-processes"])
    .addPerson("person+rob-pike", { role: "designer" })
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+newtonscript")
    .merge({
      name: "NewtonScript",
      websites: [{ kind: "wikipedia", title: "NewtonScript", href: "https://en.wikipedia.org/wiki/NewtonScript" }],
    })
    .addInfluences(["pl+self", "pl+dylan", "pl+smalltalk"])
    .addParadigms(["para+prototypes", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+nial")
    .merge({
      name: "Nial",
      websites: [{ kind: "wikipedia", title: "Nial", href: "https://en.wikipedia.org/wiki/Nial" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/NialLogo.jpg" }],
      releases: [{ version: "7.0", date: "2017-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+apl", "pl+lisp"])
    .addLicenses(["lic+gpl-3"])
    .addParadigms(["para+array"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+niklaus-wirth")
    .merge({
      name: "Wirth",
      websites: [{ kind: "wikipedia", title: "Wirth", href: "https://en.wikipedia.org/wiki/Niklaus_Wirth" }],
    })
    .addDialects([
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
    ]);

  /**/

  g.buildPlang("pl+nim")
    .merge({
      name: "Nim",
      websites: [{ kind: "wikipedia", title: "Nim", href: "https://en.wikipedia.org/wiki/Nim_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg" }],
      releases: [{ version: "2.0.4", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ada", "pl+c", "pl+lisp", "pl+pascal", "pl+python", "pl+oberon", "pl+rust", "pl+oberon-2"])
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20170711004631/https://nim-lang.org/faq.html",
          title: "FAQ Nim Programming Language",
        },
      ],
    })
    .addInfluence("pl+modula", {
      refs: [{ href: "http://nim-lang.org/question.html", title: "Frequently Asked Questions" }],
    })
    .addInfluence("pl+parasail", {
      refs: [{ href: "https://nim-lang.org/araq/destructors.html", title: "Nim without GC" }],
    })
    .addParadigms([
      "para+multi",
      "para+compiled",
      "para+concurrent",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
    ])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+arm", "platf+aarch64", "platf+risc-v"])
    .addPlatform("platf+cross-platform", {
      refs: [{ href: "https://nim-lang.org/install.html", title: "Install Nim" }],
    })
    .addTypeSystems(["tsys+inferred", "tsys+structural"])
    .addTypeSystem("tsys+static", { refs: [{ href: "https://nim-by-example.github.io/", title: "Nim by example" }] })
    .addTypeSystem("tsys+strong", {
      refs: [{ href: "https://ibob.github.io/slides/nimrodbg/#/", title: "Метапрограмиране с Nimrod" }],
    });

  /**/

  g.buildPlang("pl+nix-package-manager")
    .merge({
      name: "Nix",
      websites: [{ kind: "wikipedia", title: "Nix", href: "https://en.wikipedia.org/wiki/Nix_package_manager" }],
      releases: [{ version: "2.22.1", date: "2024-01-01", kind: "stable" }],
    })
    .addPlatforms(["platf+linux", "platf+unix"]);

  /**/

  g.buildPlang("pl+nord")
    .merge({
      name: "Nord Programming Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Nord Programming Language",
          href: "https://en.wikipedia.org/wiki/NORD_Programming_Language",
        },
      ],
    })
    .addPerson("person+norsk-data", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+noweb")
    .merge({
      name: "noweb",
      websites: [{ kind: "wikipedia", title: "Noweb", href: "https://en.wikipedia.org/wiki/Noweb" }],
      releases: [{ version: "2.12", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+web"]);

  /**/

  g.buildPlang("pl+nu")
    .merge({
      name: "Nu",
      websites: [{ kind: "wikipedia", title: "Nu", href: "https://en.wikipedia.org/wiki/Nu_(programming_language)" }],
      releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+objective-c", "pl+objective-cpp"])
    .addInfluence("pl+ruby", {
      refs: [
        { href: "https://web.archive.org/web/20181225131630/http://programming.nu/about%0A%20", title: "About Nu™" },
      ],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+structured", "para+imperative", "para+functional", "para+objects"])
    .addPlatforms(["platf+x86", "platf+mac"]);

  /**/

  g.buildPlang("pl+numerical-algorithms-group").merge({
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

  g.buildPlang("pl+object-rexx")
    .merge({
      name: "Object REXX",
      websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/Object_REXX" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rexx3_orig_size_transparent.gif/121px-Rexx3_orig_size_transparent.gif",
        },
      ],
      releases: [
        { version: "5.0.0", date: "2023-01-01", kind: "stable" },
        { version: "5.1.0", kind: "preview" },
      ],
    })
    .addImplementations(["pl+cpp"])
    .addInfluences(["pl+rexx"])
    .addInfluence("pl+smalltalk", {
      refs: [
        {
          href: "https://blog.smartbear.com/programming/7-reasons-that-rexx-still-matters/",
          title: "7 Reasons that Rexx Still Matters",
        },
      ],
    })
    .addLicenses(["lic+common-public", "lic+gpl"])
    .addParadigms(["para+objects", "para+class"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+cross-platform",
      "platf+linux",
      "platf+win",
      "platf+mac",
      "platf+bsd",
    ]);

  /**/

  g.buildPlang("pl+objective-c")
    .merge({
      name: "Objective-C",
      websites: [
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
      ],
      releases: [{ version: "2.0", kind: "stable" }],
    })
    .addImplementations(["pl+clang", "pl+gcc"])
    .addInfluences(["pl+c", "pl+smalltalk"])
    .addPerson("person+brad-cox", { role: "designer" })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+weak"]);

  /**/

  g.buildPlang("pl+objectlogo")
    .merge({
      name: "Logo",
      websites: [{ kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/ObjectLOGO" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    })
    .addDialects(["pl+starlogo", "pl+netlogo"])
    .addImplementations(["pl+ucblogo"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+wally-feurzeig", { role: "designer" })
    .addPerson("person+seymour-papert", { role: "designer" })
    .addPerson("person+cynthia-solomon", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflective"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+obliq")
    .merge({
      name: "Obliq",
      websites: [{ kind: "wikipedia", title: "Obliq", href: "https://en.wikipedia.org/wiki/Obliq" }],
    })
    .addImplementations(["pl+modula"])
    .addInfluences(["pl+modula", "pl+self", "pl+oberon"])
    .addPerson("person+luca-cardelli", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+structured",
      "para+modular",
      "para+objects",
      "para+prototypes",
      "para+parallel",
    ])
    .addPlatforms(["platf+ia-32"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+ocaml")
    .merge({
      name: "OCaml",
      websites: [{ kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" }],
      releases: [{ version: "5.2.0", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+ats", "pl+f-sharp", "pl+f-star", "pl+reason"])
    .addImplementations(["pl+c"])
    .addInfluences(["pl+caml", "pl+ml", "pl+modula", "pl+c", "pl+pascal", "pl+sml", "pl+poly-slashml"])
    .addPerson("person+xavier-leroy", { role: "designer" })
    .addPerson("person+damien-doligez", { role: "designer" })
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects"])
    .addParadigm("para+modular", {
      refs: [{ href: "https://ocaml.org/learn/tutorials/modules.html", title: "Modules" }],
    })
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+power-isa",
      "platf+arm",
      "platf+risc-v",
      "platf+cross-platform",
      "platf+linux",
      "platf+unix",
      "platf+mac",
      "platf+win",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  /**/

  g.buildPlang("pl+occam")
    .merge({
      name: "occam",
      websites: [
        { kind: "wikipedia", title: "occam", href: "https://en.wikipedia.org/wiki/Occam_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/1983_1988_Trademark_occam_and_occam_2_INMOS_Limited.jpg/121px-1983_1988_Trademark_occam_and_occam_2_INMOS_Limited.jpg",
        },
      ],
      releases: [{ version: "2.1", date: "1994-01-01", kind: "stable" }],
    })
    .addDialects(["pl+occam--"])
    .addInfluences(["pl+communicating-sequential-processes"])
    .addPerson("person+david-may", { role: "designer" })
    .addParadigms(["para+imperative", "para+concurrent"]);

  /**/

  g.buildPlang("pl+occam--")
    .merge({
      name: "occam-π",
      websites: [{ kind: "wikipedia", title: "occam-π", href: "https://en.wikipedia.org/wiki/Occam-%CF%80" }],
    })
    .addInfluences(["pl+occam"])
    .addParadigms(["para+imperative", "para+concurrent"])
    .addPlatforms(["platf+ia-32", "platf+arduino"]);

  /**/

  g.buildPlang("pl+odra").merge({
    name: "Odra ALGOL 68",
    websites: [{ kind: "wikipedia", title: "Odra ALGOL 68", href: "https://en.wikipedia.org/wiki/Odra_(computer)" }],
  });

  /**/

  g.buildPlang("pl+okuma-corporation").merge({
    name: "Okuma",
    websites: [{ kind: "wikipedia", title: "Okuma", href: "https://en.wikipedia.org/wiki/Okuma_Corporation" }],
  });

  /**/

  g.buildPlang("pl+oorexx").merge({
    name: "ooREXX",
    websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/OoREXX" }],
  });

  /**/

  g.buildPlang("pl+opa")
    .merge({
      name: "Opa",
      websites: [{ kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
      releases: [{ version: "1.1.1", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+erlang", "pl+javascript", "pl+ml", "pl+ocaml"])
    .addLicenses(["lic+mit", "lic+affero-gpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addPlatforms(["platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+open")
    .merge({
      name: "Open Programming Language (OPL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Open Programming Language (OPL)",
          href: "https://en.wikipedia.org/wiki/Open_Programming_Language",
        },
      ],
      releases: [{ version: "1.56", date: "2006-01-01", kind: "stable" }],
    })
    .addLicense("lic+lgpl", { refs: [{ href: "http://opl-dev.sourceforge.net/lgpl.txt", title: "License" }] })
    .addParadigms(["para+imperative", "para+structured", "para+embedded"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+open-source").merge({
    name: "open source",
    websites: [{ kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open_source" }],
  });

  /**/

  g.buildPlang("pl+openacc").merge({
    name: "OpenACC",
    websites: [{ kind: "wikipedia", title: "OpenACC", href: "https://en.wikipedia.org/wiki/OpenACC" }],
    releases: [{ version: "3.2", date: "2021-01-01", kind: "stable" }],
  });

  /**/

  g.buildPlang("pl+opencl")
    .merge({
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
    })
    .addInfluences(["pl+c99", "pl+cuda", "pl+cpp14", "pl+cpp17"])
    .addParadigms(["para+imperative", "para+structured", "para+objects", "para+generic"])
    .addPlatforms(["platf+ia-32", "platf+x86-64"])
    .addPlatform("platf+arm", {
      refs: [
        {
          href: "https://www.khronos.org/conformance/adopters/conformant-products/opencl",
          title: "Conformant Products",
        },
      ],
    })
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+openedge-advanced-business").merge({
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

  /**/

  g.buildPlang("pl+openmodelica")
    .merge({
      name: "OpenModelica",
      websites: [{ kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" }],
      releases: [{ version: "1.22.2", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+eclipse-public", "lic+gpl", "lic+free"]);

  /**/

  g.buildPlang("pl+openmp")
    .merge({
      name: "OpenMP",
      websites: [{ kind: "wikipedia", title: "OpenMP", href: "https://en.wikipedia.org/wiki/OpenMP" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/180px-OpenMP_logo.png",
        },
      ],
      releases: [{ version: "5.2", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluence("pl+cilk-plus", {
      refs: [{ href: "https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.221.2775", title: "10.1.1.221.2775" }],
    })
    .addInfluence("pl+cilk", {
      refs: [{ href: "https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.221.2775", title: "10.1.1.221.2775" }],
    });

  /**/

  g.buildPlang("pl+openqasm")
    .merge({
      name: "OpenQASM",
      websites: [{ kind: "wikipedia", title: "OpenQASM", href: "https://en.wikipedia.org/wiki/OpenQASM" }],
      extensions: [".qasm"],
    })
    .addLicenses(["lic+apache"]);

  /**/

  g.buildPlang("pl+openvera").merge({
    name: "OpenVera",
    websites: [{ kind: "wikipedia", title: "OpenVera", href: "https://en.wikipedia.org/wiki/OpenVera" }],
  });

  /**/

  g.buildPlang("pl+openvms").merge({
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  /**/

  g.buildPlang("pl+ops5").merge({
    name: "OPS5",
    websites: [{ kind: "wikipedia", title: "OPS5", href: "https://en.wikipedia.org/wiki/OPS5" }],
  });

  /**/

  g.buildPlang("pl+optimj")
    .merge({
      name: "OptimJ",
      websites: [
        { kind: "wikipedia", title: "OptimJ", href: "https://en.wikipedia.org/wiki/OptimJ" },
        { kind: "homepage", title: "www.Ateji.com", href: "http://www.ateji.com/" },
      ],
    })
    .addInfluences(["pl+java"])
    .addParadigms(["para+objects"]);

  /**/

  g.buildPlang("pl+oracle-solaris-studio").merge({
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

  /**/

  g.buildPlang("pl+orc")
    .merge({
      name: "Orc",
      websites: [{ kind: "wikipedia", title: "Orc", href: "https://en.wikipedia.org/wiki/Orc_(programming_language)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Orc_programming_language_logo.png" },
      ],
    })
    .addInfluences(["pl+haskell", "pl+ml", "pl+oz", "pl+smalltalk", "pl+pict"])
    .addPerson("person+jayadev-misra", { role: "designer" })
    .addPerson("person+william-r-cook", { role: "developer" })
    .addLicenses(["lic+bsd-n"])
    .addParadigms(["para+concurrent", "para+nondeterministic"]);

  /**/

  g.buildPlang("pl+oriel")
    .merge({
      name: "Oriel",
      websites: [
        { kind: "wikipedia", title: "Oriel", href: "https://en.wikipedia.org/wiki/Oriel_(scripting_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/9/97/The_Oriel_for_Windows_Logo.png" }],
    })
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+win"]);

  /**/

  g.buildPlang("pl+orwell")
    .merge({
      name: "Orwell",
      websites: [
        { kind: "wikipedia", title: "Orwell", href: "https://en.wikipedia.org/wiki/Orwell_(programming_language)" },
      ],
    })
    .addInfluences(["pl+miranda"])
    .addPerson("person+philip-wadler", { role: "designer" })
    .addParadigms(["para+lazy", "para+functional"]);

  /**/

  g.buildPlang("pl+otcl").merge({
    name: "OTcl",
    websites: [{ kind: "wikipedia", title: "OTcl", href: "https://en.wikipedia.org/wiki/OTcl" }],
  });

  /**/

  g.buildPlang("pl+oxygene")
    .merge({
      name: "Oxygene",
      websites: [
        { kind: "wikipedia", title: "Oxygene", href: "https://en.wikipedia.org/wiki/Oxygene_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Chrome-128.png/121px-Chrome-128.png",
        },
      ],
    })
    .addInfluences(["pl+c-sharp", "pl+ms-visual-c-sharp", "pl+delphi", "pl+pascal"])
    .addLicenses(["lic+trialware"])
    .addPlatforms(["platf+.net", "platf+jvm", "platf+win", "platf+linux", "platf+wasm"]);

  /**/

  g.buildPlang("pl+oz")
    .merge({
      name: "Oz",
      websites: [{ kind: "wikipedia", title: "Oz", href: "https://en.wikipedia.org/wiki/Oz_(programming_language)" }],
      releases: [{ version: "1.4.0", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+erlang", "pl+lisp", "pl+prolog"])
    .addLicense("lic+mit", {
      refs: [{ href: "https://mozart.github.io/license-info/", title: "Mozart Oz License Info" }],
    })
    .addParadigms([
      "para+multi",
      "para+logic",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+constraint",
      "para+distributed",
      "para+concurrent",
    ])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+p")
    .merge({
      name: "P",
      websites: [{ kind: "wikipedia", title: "P", href: "https://en.wikipedia.org/wiki/P_(programming_language)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/P_logo.png/64px-P_logo.png" },
      ],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+p--")
    .merge({
      name: "P′′",
      websites: [{ kind: "wikipedia", title: "P′′", href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2" }],
    })
    .addDialects(["pl+brainfuck"])
    .addPerson("person+corrado-bohm", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"]);

  /**/

  g.buildPlang("pl+p4")
    .merge({
      name: "P4",
      websites: [{ kind: "wikipedia", title: "P4", href: "https://en.wikipedia.org/wiki/P4_(programming_language)" }],
      releases: [{ version: "1.2.2", date: "2021-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+compiled", "para+domain", "para+imperative"]);

  /**/

  g.buildPlang("pl+pact-i")
    .merge({
      name: "PACT I",
      websites: [{ kind: "wikipedia", title: "PACT I", href: "https://en.wikipedia.org/wiki/PACT_I" }],
    })
    .addInfluences(["pl+fortran", "pl+speedcoding"]);

  /**/

  g.buildPlang("pl+parasail")
    .merge({
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
    })
    .addInfluences(["pl+ada", "pl+modula", "pl+pascal", "pl+ml"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+compiled", "para+concurrent", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+x86", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/

  g.buildPlang("pl+pari-slashgp")
    .merge({
      name: "PARI/GP",
      websites: [{ kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+henri-cohen", { role: "developer" })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+parrot-virtual-machine").merge({
    name: "Parrot",
    websites: [{ kind: "wikipedia", title: "Parrot", href: "https://en.wikipedia.org/wiki/Parrot_virtual_machine" }],
  });

  /**/

  g.buildPlang("pl+patcher")
    .merge({
      name: "Patcher",
      websites: [{ kind: "wikipedia", title: "Max", href: "https://en.wikipedia.org/wiki/Patcher" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
        },
      ],
      releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+pathscale")
    .merge({
      name: "PathScale EKOPath Compiler",
      websites: [{ kind: "wikipedia", title: "PathScale", href: "https://en.wikipedia.org/wiki/PathScale" }],
      releases: [{ version: "5.0.0", date: "2013-01-01", kind: "stable" }],
    })
    .addPlatforms(["platf+x86-64"]);

  /**/

  g.buildPlang("pl+pcastl")
    .merge({
      name: "PCASTL",
      websites: [{ kind: "wikipedia", title: "PCASTL", href: "https://en.wikipedia.org/wiki/PCASTL" }],
      releases: [{ version: "3.5", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+r"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+imperative", "para+reflective"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+pdp-11").merge({
    name: "PDP-11",
    websites: [{ kind: "wikipedia", title: "PDP-11", href: "https://en.wikipedia.org/wiki/PDP-11" }],
  });

  /**/

  g.buildPlang("pl+pdp-7").merge({
    name: "PDP-7",
    websites: [{ kind: "wikipedia", title: "PDP-7", href: "https://en.wikipedia.org/wiki/PDP-7" }],
  });

  /**/

  g.buildPlang("pl+peachpie")
    .merge({
      name: "PeachPie",
      websites: [{ kind: "wikipedia", title: "PeachPie", href: "https://en.wikipedia.org/wiki/PeachPie" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peachpie-logo.png/150px-Peachpie-logo.png",
        },
      ],
    })
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://github.com/peachpiecompiler/peachpie/blob/master/LICENSE.txt",
          title: "iolevel/peachpie: License",
        },
      ],
    });

  /**/

  g.buildPlang("pl+perl")
    .merge({
      name: "Perl",
      websites: [{ kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
      releases: [
        { version: "5.40.0", date: "2024-01-01", kind: "stable" },
        { version: "5.39.10", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addDialects(["pl+raku"])
    .addImplementations(["pl+c"])
    .addInfluences(["pl+awk", "pl+c", "pl+cpp", "pl+basic", "pl+lisp", "pl+sed"])
    .addInfluence("pl+unix-shell", {
      refs: [
        {
          href: "https://web.archive.org/web/20170728023959/http://www.perl.com/pub/2007/12/06/soto-11.html",
          title: "Programming is Hard, Let's Go Scripting...",
        },
      ],
    })
    .addInfluence("pl+raku", {
      refs: [
        {
          href: "http://pugs.blogs.com/pugs/2010/04/how-to-implement-perl-6-in-10.html",
          title: "How to Implement Perl 6 in '10",
        },
      ],
    })
    .addPerson("person+larry-wall", { role: "designer" })
    .addLicenses(["lic+artistic"])
    .addLicense("lic+gpl", {
      refs: [
        { href: "https://web.archive.org/web/20110122175123/http://dev.perl.org/licenses/", title: "Perl Licensing" },
      ],
    })
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+perl-data")
    .merge({
      name: "Perl Data Language (PDL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Perl Data Language (PDL)",
          href: "https://en.wikipedia.org/wiki/Perl_Data_Language",
        },
      ],
      releases: [{ version: "2.080", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+apl", "pl+idl", "pl+perl"])
    .addPerson("person+karl-glazebrook", { role: "developer" })
    .addLicenses(["lic+gpl", "lic+artistic"])
    .addParadigms(["para+array"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+pgi-compiler").merge({
    name: "PGI",
    websites: [{ kind: "wikipedia", title: "PGI", href: "https://en.wikipedia.org/wiki/PGI_compiler" }],
  });

  /**/

  g.buildPlang("pl+pharo")
    .merge({
      name: "Pharo",
      websites: [{ kind: "wikipedia", title: "Pharo", href: "https://en.wikipedia.org/wiki/Pharo" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg" }],
      releases: [{ version: "12.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk", "pl+squeak"])
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", { refs: [{ href: "https://pharo.org/license", title: "Pharo license information" }] })
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+arm", "platf+ia-32", "platf+x86-64", "platf+win", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+php")
    .merge({
      name: "PHP",
      websites: [
        { kind: "wikipedia", title: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
        { kind: "homepage", title: "https://thephp.foundation", href: "https://thephp.foundation" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }],
      releases: [{ version: "8.3.8", date: "2024-01-01", kind: "stable" }],
      extensions: [".phar", ".php", ".phps", ".pht", ".phtml"],
    })
    .addImplementations([
      "pl+c",
      "pl+cpp",
      "pl+zend-engine",
      "pl+hhvm",
      "pl+peachpie",
      "pl+quercus",
      "pl+parrot-virtual-machine",
    ])
    .addInfluences(["pl+c", "pl+cpp", "pl+perl", "pl+smalltalk"])
    .addInfluence("pl+java", {
      refs: [{ href: "https://www.php.net/manual/en/preface.php", title: "PHP: Preface – Manual" }],
    })
    .addInfluence("pl+tcl", {
      refs: [
        {
          href: "https://web.archive.org/web/20190106230504/http://web.archive.org/web/20130729204354id_/http://itc.conversationsnetwork.org/shows/detail3298.html",
          title:
            "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
        },
        {
          href: "http://itc.conversationsnetwork.org/shows/detail3298.html",
          title:
            "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
        },
      ],
    })
    .addInfluence("pl+javascript", {
      refs: [
        {
          href: "https://x.com/dstogov/status/672864802474229760",
          title:
            "It's not a secret that some #PHP7 optimization ideas came from HHVM, LuaJIT and V8. Thank you @HipHopVM @SaraMG. #php7thankyou",
        },
      ],
    })
    .addPerson("person+rasmus-lerdorf", { role: "designer" })
    .addLicenses(["lic+php", "lic+zend"])
    .addLicense("lic+gpl", {
      refs: [{ href: "https://museum.php.net/php3/", title: "PHP: Release Archives (museum)" }],
    })
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"])
    .addPlatforms(["platf+unix", "platf+win", "platf+mac", "platf+openvms"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"])
    .addTypeSystem("tsys+gradual", {
      refs: [
        {
          href: "https://secure.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict",
          title: "PHP: Function arguments – Manual",
        },
      ],
    });

  /**/

  g.buildPlang("pl+pico")
    .merge({
      name: "Pico",
      websites: [
        { kind: "wikipedia", title: "Pico", href: "https://en.wikipedia.org/wiki/Pico_(programming_language)" },
      ],
      releases: [{ version: "2.0", date: "2007-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+scheme"])
    .addInfluences(["pl+scheme", "pl+smalltalk"])
    .addParadigms(["para+reflective", "para+imperative"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+mac", "platf+linux", "platf+bsd", "platf+win"]);

  /**/

  g.buildPlang("pl+pict")
    .merge({
      name: "Pict",
      websites: [
        { kind: "wikipedia", title: "Pict", href: "https://en.wikipedia.org/wiki/Pict_(programming_language)" },
      ],
    })
    .addInfluences(["pl+ml"])
    .addPerson("person+benjamin-c-pierce", { role: "developer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+pike")
    .merge({
      name: "Pike",
      websites: [
        { kind: "wikipedia", title: "Pike", href: "https://en.wikipedia.org/wiki/Pike_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pike_Programming_Language_Logo.svg" },
      ],
      releases: [{ version: "8.0.1738", date: "1738-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+lpc", "pl+cpp"])
    .addLicenses(["lic+gpl", "lic+lgpl", "lic+mozilla-public"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative"])
    .addPlatforms(["platf+unix", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+pipeline").merge({
    name: "Pipeline (Unix)",
    websites: [{ kind: "wikipedia", title: "Pipeline (Unix)", href: "https://en.wikipedia.org/wiki/Pipeline_(Unix)" }],
  });

  /**/

  g.buildPlang("pl+pizza")
    .merge({
      name: "Pizza",
      websites: [
        { kind: "wikipedia", title: "Pizza", href: "https://en.wikipedia.org/wiki/Pizza_(programming_language)" },
      ],
    })
    .addInfluences(["pl+java"])
    .addParadigms(["para+generic", "para+algebraic"]);

  /**/

  g.buildPlang("pl+pl-6")
    .merge({
      name: "PL-6",
      websites: [{ kind: "wikipedia", title: "PL-6", href: "https://en.wikipedia.org/wiki/PL-6" }],
    })
    .addInfluences(["pl+pl-slash"]);

  /**/

  g.buildPlang("pl+pl-slash")
    .merge({
      name: "PL/I",
      websites: [
        { kind: "wikipedia", title: "PL/I", href: "https://en.wikipedia.org/wiki/PL/I" },
        { kind: "wikipedia", title: "PL/1", href: "https://en.wikipedia.org/wiki/PL/1" },
        { kind: "wikipedia", title: "PL/M", href: "https://en.wikipedia.org/wiki/PL/M" },
        { kind: "wikipedia", title: "PL/C", href: "https://en.wikipedia.org/wiki/PL/C" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Conway_Gries_An_Introduction_to_Programming_cover.jpg/180px-Conway_Gries_An_Introduction_to_Programming_cover.jpg",
        },
      ],
      releases: [{ version: "7.6", date: "1977-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol", "pl+fortran", "pl+pl-slash", "pl+cornell-university", "pl+xpl", "pl+speedcoding"])
    .addInfluence("pl+cobol", {
      refs: [{ href: "https://doi.org/10.1145%2F800025.1198410", title: "10.1145/800025.1198410" }],
    })
    .addPerson("person+gary-kildall", {
      role: "developer",
      refs: [
        {
          href: "https://web.archive.org/web/20190726193738/http://www.drdobbs.com/architecture-and-design/gary-kildall-and-collegial-entrepreneurs/184410428",
          title: "Gary Kildall and Collegial Entrepreneurship",
        },
      ],
    })
    .addParadigms(["para+imperative", "para+structured", "para+educational"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+pl.8")
    .merge({
      name: "PL.8",
      websites: [{ kind: "wikipedia", title: "PL.8", href: "https://en.wikipedia.org/wiki/PL.8" }],
    })
    .addInfluences(["pl+pl-slash"]);

  /**/

  g.buildPlang("pl+pl360")
    .merge({
      name: "PL360",
      websites: [{ kind: "wikipedia", title: "PL360", href: "https://en.wikipedia.org/wiki/PL360" }],
    })
    .addImplementations(["pl+algol"])
    .addInfluences(["pl+algol", "pl+executive-systems-problem-oriented"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+planc")
    .merge({
      name: "PLANC",
      websites: [{ kind: "wikipedia", title: "PLANC", href: "https://en.wikipedia.org/wiki/PLANC" }],
    })
    .addPerson("person+norsk-data", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+x86"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+plankalkul")
    .merge({
      name: "Plankalkül",
      websites: [{ kind: "wikipedia", title: "Plankalkül", href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl" }],
    })
    .addImplementations(["pl+free-university-of-berlin"])
    .addInfluence("pl+begriffsschrift", {
      refs: [
        {
          href: "https://web.archive.org/web/20231102214019/https://web.stanford.edu/class/cs208e/cgi-bin/main.cgi/static/lectures/17-ProgrammingEarlyDays/EarlyProgrammingLanguages.pdf",
          title: "Early Programming Languages / CS208e: Great Ideas in Computer Science",
        },
      ],
    })
    .addPerson("person+konrad-zuse", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+planner")
    .merge({
      name: "Planner",
      websites: [
        { kind: "wikipedia", title: "Planner", href: "https://en.wikipedia.org/wiki/Planner_(programming_language)" },
      ],
    })
    .addInfluences(["pl+mdl"])
    .addPerson("person+carl-hewitt", { role: "designer" })
    .addParadigms(["para+multi", "para+logic", "para+imperative"]);

  /**/

  g.buildPlang("pl+plex")
    .merge({
      name: "Plex",
      websites: [
        { kind: "wikipedia", title: "PLEX", href: "https://en.wikipedia.org/wiki/PLEX_(programming_language)" },
      ],
    })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+plexil")
    .merge({
      name: "PLEXIL",
      websites: [
        { kind: "wikipedia", title: "PLEXIL", href: "https://en.wikipedia.org/wiki/PLEXIL" },
        { kind: "homepage", title: "http://plexil.sourceforge.net/", href: "http://plexil.sourceforge.net/" },
      ],
    })
    .addImplementations(["pl+robotics"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+static", "tsys+safe", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+plus")
    .merge({
      name: "Plus",
      websites: [
        { kind: "wikipedia", title: "Plus", href: "https://en.wikipedia.org/wiki/Plus_(programming_language)" },
      ],
    })
    .addImplementations(["pl+ibm-system-slash370", "pl+dec", "pl+pdp-11", "pl+motorola-68000"])
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/

  g.buildPlang("pl+poly-slashml")
    .merge({
      name: "Poly/ML",
      websites: [{ kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Poly/ML" }],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
    })
    .addDialects(["pl+alice", "pl+concurrent-ml", "pl+dependent-ml"])
    .addImplementations(["pl+sml", "pl+mlton", "pl+poly-slashml"])
    .addInfluences(["pl+ml", "pl+hope", "pl+pascal"])
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addParadigm("para+modular", {
      refs: [
        {
          href: "https://www.cs.cmu.edu/~rwh/introsml/modules/subfun.htm",
          title: "Programming in Standard ML: Hierarchies and Parameterization",
        },
      ],
    })
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+polyphonic-c-sharp").merge({
    name: "Polyphonic C#",
    websites: [{ kind: "wikipedia", title: "Polyphonic C#", href: "https://en.wikipedia.org/wiki/Polyphonic_C_Sharp" }],
  });

  /**/

  g.buildPlang("pl+pop-11")
    .merge({
      name: "POP-11",
      websites: [{ kind: "wikipedia", title: "POP-11", href: "https://en.wikipedia.org/wiki/POP-11" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+pop-2"])
    .addPerson("person+robin-popplestone", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"])
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+reflective",
      "para+imperative",
      "para+functional",
      "para+dec",
    ])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+cross-platform",
      "platf+openvms",
      "platf+unix",
      "platf+linux",
      "platf+mac",
      "platf+win",
    ])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+pop-2")
    .merge({
      name: "POP-2",
      websites: [{ kind: "wikipedia", title: "POP-2", href: "https://en.wikipedia.org/wiki/POP-2" }],
      releases: [{ version: "unknown", date: "1975-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+assembly"])
    .addInfluences(["pl+cowsel", "pl+lisp", "pl+algol"])
    .addPerson("person+robin-popplestone", { role: "designer" })
    .addPerson("person+rod-burstall", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+structured", "para+reflective", "para+imperative"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+poplog")
    .merge({
      name: "Poplog",
      websites: [{ kind: "wikipedia", title: "Poplog", href: "https://en.wikipedia.org/wiki/Poplog" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"])
    .addPlatforms(["platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+portable-c-compiler")
    .merge({
      name: "Portable C Compiler",
      websites: [{ kind: "wikipedia", title: "pcc", href: "https://en.wikipedia.org/wiki/Portable_C_Compiler" }],
      releases: [{ version: "1.1.0", date: "2014-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+bsd"]);

  /**/

  g.buildPlang("pl+portable-document-format")
    .merge({
      name: "PDF",
      websites: [{ kind: "wikipedia", title: "PDF", href: "https://en.wikipedia.org/wiki/Portable_Document_Format" }],
    })
    .addInfluences(["pl+postscript"]);

  /**/

  g.buildPlang("pl+postscript")
    .merge({
      name: "PostScript",
      websites: [{ kind: "wikipedia", title: "PostScript", href: "https://en.wikipedia.org/wiki/PostScript" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg" },
      ],
      releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
      extensions: [".ps"],
    })
    .addImplementations(["pl+trueimage", "pl+ghostscript"])
    .addInfluences(["pl+interpress", "pl+lisp"])
    .addInfluence("pl+cedar", { refs: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }] })
    .addInfluence("pl+mesa", { refs: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }] })
    .addPerson("person+john-warnock", { role: "designer" })
    .addPerson("person+chuck-geschke", { role: "designer" })
    .addPerson("person+bill-paxton", { role: "designer" })
    .addParadigms(["para+multi", "para+concatenative", "para+stack", "para+imperative"]);

  /**/

  g.buildPlang("pl+pov-ray")
    .merge({
      name: "POV-Ray",
      websites: [{ kind: "wikipedia", title: "POV-Ray", href: "https://en.wikipedia.org/wiki/POV-Ray" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Povray_logo_sphere.png/120px-Povray_logo_sphere.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "3.7.0.0", date: "2013-01-01", kind: "stable" },
      ],
    })
    .addLicense("lic+gnu-affero-gpl", {
      refs: [{ href: "http://www.povray.org/povlegal.html", title: "POV-Ray License" }],
    });

  /**/

  g.buildPlang("pl+powerbuilder")
    .merge({
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
    })
    .addLicenses(["lic+commerce"]);

  /**/

  g.buildPlang("pl+powerhouse")
    .merge({
      name: "UNICOM PowerHouse",
      websites: [
        {
          kind: "wikipedia",
          title: "UNICOM PowerHouse",
          href: "https://en.wikipedia.org/wiki/Powerhouse_(programming_language)",
        },
      ],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+powerpc").merge({
    name: "PowerPC",
    websites: [{ kind: "wikipedia", title: "PowerPC", href: "https://en.wikipedia.org/wiki/PowerPC" }],
  });

  /**/

  g.buildPlang("pl+powershell")
    .merge({
      name: "PowerShell",
      websites: [
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/PowerShell" },
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/Windows_PowerShell" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
        },
      ],
      releases: [{ version: "7.4.2", date: "2024-01-01", kind: "stable" }],
      extensions: [".cdxml", ".ps1", ".ps1xml", ".psc1", ".psd1", ".psm1", ".psrc", ".pssc"],
    })
    .addImplementations(["pl+c-sharp"])
    .addInfluences([
      "pl+python",
      "pl+kornshell",
      "pl+perl",
      "pl+c-sharp",
      "pl+control",
      "pl+digital-command",
      "pl+chef",
      "pl+puppet",
    ])
    .addInfluence("pl+sql", {
      refs: [
        {
          href: "https://arstechnica.com/business/news/2005/10/msh.ars/4",
          title: "A guided tour of the Microsoft Command Shell",
        },
      ],
    })
    .addInfluence("pl+tcl", {
      refs: [
        {
          href: "https://web.archive.org/web/20081225093003/http://blogs.msdn.com/powershell/archive/2008/05/25/powershell-and-wpf-wtf.aspx",
          title: "PowerShell and WPF: WTF",
        },
      ],
    })
    .addInfluence("pl+tk", {
      refs: [
        {
          href: "https://blogs.msdn.microsoft.com/powershell/2008/05/25/powershell-and-wpf-wtf/",
          title: "PowerShell and WPF: WTF",
        },
      ],
    })
    .addPerson("person+jeffrey-snover", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addLicense("lic+mit", {
      refs: [{ href: "https://github.com/PowerShell/PowerShell", title: "PowerShell for every system!" }],
    })
    .addParadigms(["para+imperative", "para+pipeline", "para+objects", "para+functional", "para+reflective"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+strong", "tsys+safe", "tsys+inferred", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+ppc64").merge({
    name: "ppc64",
    websites: [{ kind: "wikipedia", title: "ppc64", href: "https://en.wikipedia.org/wiki/Ppc64" }],
  });

  /**/

  g.buildPlang("pl+processing")
    .merge({
      name: "ProcessingProcessing IDE",
      websites: [
        {
          kind: "wikipedia",
          title: "Processing",
          href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ version: "4.3", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c"])
    .addPerson("person+casey-reas", { role: "designer" })
    .addPerson("person+ben-fry", { role: "designer" })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms(["para+objects"]);

  /**/

  g.buildPlang("pl+processing.js")
    .merge({
      name: "ProcessingProcessing IDE",
      websites: [
        { kind: "wikipedia", title: "ProcessingProcessing IDE", href: "https://en.wikipedia.org/wiki/Processing.js" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ version: "4.3", date: "2023-01-01", kind: "stable" }],
    })
    .addPerson("person+casey-reas", { role: "designer" })
    .addPerson("person+ben-fry", { role: "designer" })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms(["para+objects"]);

  /**/

  g.buildPlang("pl+profile-scripting")
    .merge({
      name: "Profile Scripting Language",
      websites: [{ kind: "wikipedia", title: "PSL", href: "https://en.wikipedia.org/wiki/Profile_Scripting_Language" }],
    })
    .addInfluences(["pl+mumps"])
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+programming-language-for-business")
    .merge({
      name: "Programming Language for Business",
      websites: [
        { kind: "wikipedia", title: "PL/B", href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business" },
      ],
      extensions: [".cb", ".pgm", ".pls", ".ps", ".rl"],
    })
    .addInfluence("pl+cobol", {
      refs: [
        {
          href: "https://www.sysmaker.com/infopro/x3j15/whatart.htm#why",
          title: "What is PL/B - The Programming Language for Business?",
        },
      ],
    })
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+static"])
    .addTypeSystem("tsys+strong", {
      refs: [{ href: "http://www.sysmaker.com/infopro/plb.htm", title: "Programming Language for Business" }],
    });

  /**/

  g.buildPlang("pl+prograph")
    .merge({
      name: "Prograph",
      websites: [{ kind: "wikipedia", title: "Prograph", href: "https://en.wikipedia.org/wiki/Prograph" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Prograph_cpx_logo.PNG/150px-Prograph_cpx_logo.PNG",
        },
      ],
    })
    .addInfluences(["pl+dataflow", "pl+diagram"])
    .addParadigms(["para+multi", "para+objects", "para+visual", "para+dataflow"])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+mac"]);

  /**/

  g.buildPlang("pl+project-verona")
    .merge({
      name: "Project Verona",
      websites: [
        { kind: "wikipedia", title: "Project Verona", href: "https://en.wikipedia.org/wiki/Project_Verona" },
        { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
      ],
    })
    .addInfluences(["pl+rust"])
    .addInfluence("pl+cyclone", {
      refs: [
        {
          href: "https://www.zdnet.com/article/microsoft-opens-up-rust-inspired-project-verona-programming-language-on-github/",
          title: "Microsoft opens up Rust-inspired Project Verona programming language on GitHub",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"]);

  /**/

  g.buildPlang("pl+prolog")
    .merge({
      name: "Prolog",
      websites: [{ kind: "wikipedia", title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog" }],
      releases: [{ version: "unknown", date: "1995-01-01", kind: "stable" }],
      extensions: [".P", ".pl", ".pro"],
    })
    .addDialects(["pl+datalog"])
    .addImplementations([
      "pl+b-prolog",
      "pl+ciao",
      "pl+eclipse",
      "pl+gnu-prolog",
      "pl+poplog",
      "pl+quintus-prolog",
      "pl+swi-prolog",
      "pl+xsb",
      "pl+yap",
    ])
    .addInfluences(["pl+mdl", "pl+planner"])
    .addPerson("person+alain-colmerauer", { role: "designer" })
    .addParadigms(["para+logic"]);

  /**/

  g.buildPlang("pl+promal")
    .merge({
      name: "PROMAL",
      websites: [{ kind: "wikipedia", title: "PROMAL", href: "https://en.wikipedia.org/wiki/PROMAL" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/PROMAL_logo.png/121px-PROMAL_logo.png",
        },
      ],
      releases: [{ version: "2.1", date: "1986-10-14", kind: "stable" }],
    })
    .addParadigms(["para+imperative", "para+structured"]);

  /**/

  g.buildPlang("pl+ptc").merge({
    name: "PTC",
    websites: [{ kind: "wikipedia", title: "PTC", href: "https://en.wikipedia.org/wiki/PTC_(software_company)" }],
  });

  /**/

  g.buildPlang("pl+pthreads").merge({
    name: "Pthreads",
    websites: [{ kind: "wikipedia", title: "Pthreads", href: "https://en.wikipedia.org/wiki/Pthreads" }],
  });

  /**/

  g.buildPlang("pl+puppet").merge({
    name: "Puppet",
    websites: [{ kind: "wikipedia", title: "Puppet", href: "https://en.wikipedia.org/wiki/Puppet_(software)" }],
  });

  /**/

  g.buildPlang("pl+pure")
    .merge({
      name: "Pure",
      websites: [
        { kind: "wikipedia", title: "Pure", href: "https://en.wikipedia.org/wiki/Pure_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
        },
      ],
      releases: [{ version: "0.68", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+q", "pl+haskell", "pl+lisp", "pl+alice", "pl+matlab"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+functional", "para+dec", "para+term"])
    .addPlatforms(["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+pure-data")
    .merge({
      name: "Pure DataPure Data",
      websites: [{ kind: "wikipedia", title: "Pure DataPure Data", href: "https://en.wikipedia.org/wiki/Pure_Data" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+patcher"])
    .addPerson("person+miller-s-puckette", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+dataflow"])
    .addPlatforms(["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"]);

  /**/

  g.buildPlang("pl+puredata")
    .merge({
      name: "Pure DataPure Data",
      websites: [{ kind: "wikipedia", title: "PureData", href: "https://en.wikipedia.org/wiki/PureData" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lucid", "pl+patcher"])
    .addPerson("person+miller-s-puckette", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+dataflow"])
    .addPlatforms(["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"]);

  /**/

  g.buildPlang("pl+purescript")
    .merge({
      name: "PureScript",
      websites: [{ kind: "wikipedia", title: "PureScript", href: "https://en.wikipedia.org/wiki/PureScript" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png",
        },
      ],
      releases: [{ version: "0.15.15", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+haskell", "pl+javascript"])
    .addLicense("lic+bsd-m", {
      refs: [{ href: "https://github.com/purescript/purescript/blob/master/LICENSE", title: "purescript/purescript" }],
    })
    .addParadigms(["para+functional"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+pwct")
    .merge({
      name: "PWCT",
      websites: [{ kind: "wikipedia", title: "PWCT", href: "https://en.wikipedia.org/wiki/PWCT" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/PWCT_1.9_-_Goal_Designer.png/300px-PWCT_1.9_-_Goal_Designer.png",
        },
      ],
      releases: [{ version: "1.9", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+visual-foxpro"])
    .addPerson("person+mahmoud-samir-fayed", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi", "para+visual", "para+imperative", "para+objects"])
    .addPlatforms(["platf+win"]);

  /**/

  g.buildPlang("pl+q")
    .merge({
      name: "q",
      websites: [
        {
          kind: "wikipedia",
          title: "Q",
          href: "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)",
        },
      ],
      releases: [{ version: "4.0", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+k", "pl+ap", "pl+apl", "pl+scheme"])
    .addPerson("person+arthur-whitney", { role: "designer" })
    .addParadigms(["para+array", "para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+q-sharp")
    .merge({
      name: "Q#",
      websites: [{ kind: "wikipedia", title: "Q#", href: "https://en.wikipedia.org/wiki/Q_Sharp" }],
    })
    .addInfluences(["pl+c-sharp", "pl+f-sharp", "pl+python"])
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://courses.cs.washington.edu/courses/cse490q/20au/hws/qsharp-intro.pdf",
          title: "Introduction to Q#",
        },
      ],
    })
    .addParadigms(["para+quantum", "para+functional", "para+imperative"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+qalb")
    .merge({
      name: "قلب",
      websites: [
        { kind: "wikipedia", title: "قلب", href: "https://en.wikipedia.org/wiki/Qalb_(programming_language)" },
      ],
    })
    .addInfluences(["pl+scheme"])
    .addParadigms(["para+functional"]);

  /**/

  g.buildPlang("pl+qb64")
    .merge({
      name: "QB64",
      websites: [{ kind: "wikipedia", title: "QB64", href: "https://en.wikipedia.org/wiki/QB64" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg" },
      ],
      releases: [{ version: "2.0.2", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+win", "platf+linux", "platf+mac"]);

  /**/

  g.buildPlang("pl+qml")
    .merge({
      name: "QML",
      websites: [{ kind: "wikipedia", title: "QML", href: "https://en.wikipedia.org/wiki/QML" }],
      releases: [{ version: "6.4", date: "2022-01-01", kind: "stable" }],
      extensions: [".qml"],
    })
    .addInfluences(["pl+json", "pl+javascript", "pl+qt"])
    .addInfluence("pl+xaml", {
      refs: [
        { href: "https://www.scriptol.com/ajax/ajax-xul-xaml.php", title: "Which interface for a modern application?" },
      ],
    })
    .addParadigms(["para+multi", "para+dec", "para+reactive", "para+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+qore")
    .merge({
      name: "Qore",
      websites: [
        { kind: "wikipedia", title: "Qore", href: "https://en.wikipedia.org/wiki/Qore_(programming_language)" },
      ],
      releases: [{ version: "1.16.1", date: "2023-01-01", kind: "stable" }],
      extensions: [".q", ".qm", ".qtest"],
    })
    .addImplementations(["pl+cpp", "pl+pthreads"])
    .addInfluences(["pl+d", "pl+perl", "pl+cpp", "pl+java"])
    .addLicenses(["lic+mit", "lic+gpl", "lic+lgpl"])
    .addParadigms([
      "para+multi",
      "para+thread",
      "para+parallel",
      "para+shared",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+class",
    ])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+qt")
    .merge({
      name: "Qt",
      websites: [{ kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
      releases: [{ version: "6.7.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+qml"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+qtscript").merge({
    name: "QtScript",
    websites: [{ kind: "wikipedia", title: "QtScript", href: "https://en.wikipedia.org/wiki/QtScript" }],
  });

  /**/

  g.buildPlang("pl+quakec")
    .merge({
      name: "QuakeC",
      websites: [{ kind: "wikipedia", title: "QuakeC", href: "https://en.wikipedia.org/wiki/QuakeC" }],
    })
    .addInfluences(["pl+c"])
    .addPerson("person+john-carmack", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+quercus").merge({
    name: "Quercus",
    websites: [{ kind: "wikipedia", title: "Quercus", href: "https://en.wikipedia.org/wiki/Quercus_(software)" }],
  });

  /**/

  g.buildPlang("pl+query")
    .merge({
      name: "Query language",
      websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
    })
    .addDialects(["pl+sql"]);

  /**/

  g.buildPlang("pl+quintus-prolog")
    .merge({
      name: "Quintus Prolog",
      websites: [{ kind: "wikipedia", title: "Quintus Prolog", href: "https://en.wikipedia.org/wiki/Quintus_Prolog" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+r")
    .merge({
      name: "R",
      websites: [{ kind: "wikipedia", title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" }],
      releases: [{ version: "4.4.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+s", "pl+scheme"])
    .addPerson("person+ross-ihaka", { role: "designer" })
    .addPerson("person+robert-gentleman", { role: "designer" })
    .addLicense("lic+gpl", {
      refs: [{ href: "https://directory.fsf.org/wiki/R#tab=Details", title: "R - Free Software Directory" }],
    })
    .addParadigms(["para+multi", "para+imperative", "para+objects", "para+functional", "para+reflective"])
    .addParadigm("para+array", {
      refs: [
        {
          href: "https://doi.org/10.1007/978-3-642-31057-7_6",
          title: "Evaluating the design of the R language: objects and functions for data analysis",
        },
      ],
    })
    .addPlatforms(["platf+arm", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+racket")
    .merge({
      name: "Racket",
      websites: [
        { kind: "wikipedia", title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg" }],
      releases: [{ version: "8.13", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+scheme"])
    .addInfluence("pl+eiffel", {
      refs: [
        {
          href: "http://www.ccs.neu.edu/racket/pubs/dls10-sf.pdf",
          title: "DLS 2010: Contracts for First-Class Classes",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://blog.racket-lang.org/2019/11/completing-racket-s-relicensing-effort.html",
          title: "Completing Racket's relicensing effort",
        },
      ],
    })
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+logic",
      "para+meta",
      "para+modular",
      "para+objects",
      "para+reflective",
    ])
    .addPlatforms(["platf+x86", "platf+mips", "platf+arm", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+rapid")
    .merge({
      name: "RAPID",
      websites: [{ kind: "wikipedia", title: "RAPID", href: "https://en.wikipedia.org/wiki/RAPID" }],
    })
    .addInfluences(["pl+c"]);

  /**/

  g.buildPlang("pl+rapira")
    .merge({
      name: "Rapira",
      websites: [{ kind: "wikipedia", title: "Rapira", href: "https://en.wikipedia.org/wiki/Rapira" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RAPIRA_example.png/300px-RAPIRA_example.png",
        },
      ],
    })
    .addInfluences(["pl+algol", "pl+pop-2", "pl+setl"])
    .addPerson("person+andrey-ershov", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+intel-8080", "platf+zilog-z80"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+ratfiv")
    .merge({
      name: "Ratfor",
      websites: [
        { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfiv" },
        {
          kind: "homepage",
          title: "sepwww.stanford.edu",
          href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
        },
      ],
    })
    .addInfluences(["pl+fortran", "pl+c"])
    .addPerson("person+brian-kernighan", { role: "developer" });

  /**/

  g.buildPlang("pl+ratfor")
    .merge({
      name: "Ratfor",
      websites: [
        { kind: "wikipedia", title: "Ratfor", href: "https://en.wikipedia.org/wiki/Ratfor" },
        {
          kind: "homepage",
          title: "sepwww.stanford.edu",
          href: "http://sepwww.stanford.edu/doku.php?id=sep:software:ratfor",
        },
      ],
    })
    .addInfluences(["pl+fortran", "pl+c", "pl+speedcoding"])
    .addPerson("person+brian-kernighan", { role: "developer" });

  /**/

  g.buildPlang("pl+ravenscar-profile").merge({
    name: "Ravenscar profile",
    websites: [
      { kind: "wikipedia", title: "Ravenscar profile", href: "https://en.wikipedia.org/wiki/Ravenscar_profile" },
    ],
  });

  /**/

  g.buildPlang("pl+rc")
    .merge({
      name: "rc",
      websites: [{ kind: "wikipedia", title: "rc", href: "https://en.wikipedia.org/wiki/Rc_(Unix_shell)" }],
    })
    .addInfluences(["pl+bourne-shell"])
    .addPerson("person+tom-duff", { role: "designer" })
    .addParadigms(["para+imperative", "para+pipeline"])
    .addPlatforms(["platf+cross-platform", "platf+plan9"])
    .addTypeSystems(["tsys+weak"]);

  /**/

  g.buildPlang("pl+react")
    .merge({
      name: "React",
      websites: [
        { kind: "wikipedia", title: "React JS", href: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" }],
      releases: [
        { version: "18.3.1", date: "2024-01-01", kind: "stable" },
        { version: "19.0", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+php"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+web"]);

  /**/

  g.buildPlang("pl+reason")
    .merge({
      name: "Reason",
      websites: [
        { kind: "wikipedia", title: "Reason", href: "https://en.wikipedia.org/wiki/Reason_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Reason-logo.svg" }],
      releases: [{ version: "3.11.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ocaml", "pl+javascript"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+modular", "para+objects"]);

  /**/

  g.buildPlang("pl+rebol")
    .merge({
      name: "Rebol",
      websites: [{ kind: "wikipedia", title: "Rebol", href: "https://en.wikipedia.org/wiki/Rebol" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png" }],
      releases: [
        { version: "2.7.8", date: "2011-01-01", kind: "stable" },
        { version: "2.101.0", date: "2012-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+forth", "pl+logo", "pl+objectlogo", "pl+self", "pl+lisp", "pl+ucblogo"])
    .addPerson("person+carl-sassenrath", { role: "designer" })
    .addLicense("lic+freely-redistributable", {
      refs: [{ href: "http://www.rebol.com/license.html", title: "license" }],
    })
    .addLicense("lic+apache", { refs: [{ href: "https://github.com/rebol/r3", title: "R3 source" }] })
    .addParadigms(["para+language", "para+data", "para+functional", "para+prototypes", "para+imperative"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+red")
    .merge({
      name: "Red",
      websites: [{ kind: "wikipedia", title: "Red", href: "https://en.wikipedia.org/wiki/Red_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png",
        },
      ],
      releases: [{ version: "0.6.5", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+rebol", "pl+lisp", "pl+scala", "pl+lua"])
    .addLicenses(["lic+bsd-m", "lic+boost"])
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+symbolic"])
    .addPlatforms(["platf+linux", "platf+win", "platf+mac"]);

  /**/

  g.buildPlang("pl+redux")
    .merge({
      name: "Redux",
      websites: [
        { kind: "wikipedia", title: "Redux", href: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" },
      ],
    })
    .addInfluence("pl+elm", {
      refs: [{ href: "https://redux.js.org/introduction/prior-art", title: "Prior Art - Redux" }],
    });

  /**/

  g.buildPlang("pl+refal")
    .merge({
      name: "Refal",
      websites: [
        { kind: "wikipedia", title: "Refal", href: "https://en.wikipedia.org/wiki/REFAL" },
        { kind: "homepage", title: "http://www.refal.net", href: "http://www.refal.net" },
      ],
    })
    .addPerson("person+valentin-turchin", { role: "designer" })
    .addParadigms(["para+pattern", "para+term"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+reia")
    .merge({
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Reia", href: "https://en.wikipedia.org/wiki/Reia_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [{ version: "1.16.3", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+erlang", "pl+clojure", "pl+ruby"])
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://github.com/elixir-lang/elixir/blob/master/LICENSE",
          title: "elixir/LICENSE at master · elixir-lang/elixir · GitHub",
        },
      ],
    })
    .addParadigms(["para+multi", "para+functional", "para+concurrent", "para+distributed", "para+process"])
    .addPlatforms(["platf+erlang"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+renderman-shading").merge({
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

  g.buildPlang("pl+reverse-polish-notation").merge({
    name: "RPN",
    websites: [{ kind: "wikipedia", title: "RPN", href: "https://en.wikipedia.org/wiki/Reverse_Polish_Notation" }],
  });

  /**/

  g.buildPlang("pl+rexx")
    .merge({
      name: "Rexx",
      websites: [{ kind: "wikipedia", title: "REXX", href: "https://en.wikipedia.org/wiki/REXX" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Rexx-img-lg.png/220px-Rexx-img-lg.png",
        },
      ],
      releases: [{ version: "3.274", date: "1996-01-01", kind: "stable" }],
    })
    .addDialects(["pl+netrexx", "pl+object-rexx", "pl+oorexx", "pl+xedit"])
    .addImplementation("pl+arexx", {
      refs: [{ href: "http://regina-rexx.sourceforge.net", title: "Regina Rexx Interpreter" }],
    })
    .addInfluences(["pl+pl-slash", "pl+algol", "pl+cms-exec", "pl+exec-2"])
    .addPerson("person+mike-cowlishaw", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"]);

  /**/

  g.buildPlang("pl+ring")
    .merge({
      name: "Ring",
      websites: [
        { kind: "wikipedia", title: "Ring", href: "https://en.wikipedia.org/wiki/Ring_(programming_language)" },
        { kind: "homepage", title: "http://ring-lang.net", href: "http://ring-lang.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
        },
      ],
      releases: [{ version: "1.20", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lua", "pl+c", "pl+c-sharp", "pl+basic", "pl+xbase"])
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
          title: "Ring and other languages",
        },
      ],
    })
    .addInfluence("pl+qml", {
      refs: [
        {
          href: "http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
          title: "The Ring programming language and other languages",
        },
      ],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
          title: "Ring and other languages",
        },
      ],
    })
    .addPerson("person+mahmoud-samir-fayed", {
      role: "designer",
      refs: [
        {
          href: "https://link.springer.com/content/pdf/bbm%3A978-1-4842-5833-0%2F1.pdf",
          title: "A Dialogue with Mahmoud Fayed",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+objects",
      "para+imperative",
      "para+functional",
      "para+reflective",
      "para+dec",
      "para+natural",
    ])
    .addPlatforms(["platf+win", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+robotics").merge({
    name: "Robotics",
    websites: [{ kind: "wikipedia", title: "Robotics", href: "https://en.wikipedia.org/wiki/Robotics" }],
  });

  /**/

  g.buildPlang("pl+roslyn")
    .merge({
      name: "Roslyn Compiler",
      websites: [
        {
          kind: "wikipedia",
          title: ".NET Compiler Platform (Roslyn)",
          href: "https://en.wikipedia.org/wiki/Roslyn_(compiler)",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Roslyn.png/120px-Roslyn.png",
        },
      ],
      releases: [{ version: "7.0.0", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+rpg").merge({
    name: "RPG IV",
    websites: [
      { kind: "wikipedia", title: "RPG II", href: "https://en.wikipedia.org/wiki/RPG_II" },
      { kind: "wikipedia", title: "RPG III", href: "https://en.wikipedia.org/wiki/RPG_III" },
      { kind: "wikipedia", title: "RPG IV", href: "https://en.wikipedia.org/wiki/RPG_IV" },
    ],
  });

  /**/

  g.buildPlang("pl+rpl")
    .merge({
      name: "RPL",
      websites: [{ kind: "wikipedia", title: "RPL", href: "https://en.wikipedia.org/wiki/RPL_(programming_language)" }],
    })
    .addInfluences(["pl+forth", "pl+reverse-polish-notation"])
    .addInfluence("pl+lisp", {
      refs: [
        {
          href: "https://web.archive.org/web/20111206105511/http://www.hpl.hp.com/hpjournal/pdfs/IssuePDFs/1987-08.pdf",
          title: "Computation for Handheld Calculators",
        },
      ],
    })
    .addParadigms(["para+concatenative", "para+structured"])
    .addParadigm("para+stack", {
      refs: [
        {
          href: "https://web.archive.org/web/20211203131528/https://www.hpmuseum.org/forum/showthread.php?mode=linear&tid=15509&pid=135732",
          title: "The Joy of Programming?",
        },
      ],
    });

  /**/

  g.buildPlang("pl+rtl-slash2")
    .merge({
      name: "RTL/2",
      websites: [{ kind: "wikipedia", title: "RTL/2", href: "https://en.wikipedia.org/wiki/RTL/2" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+jgp-barnes", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+real"])
    .addPlatforms(["platf+cross-platform", "platf+openvms"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+structural"]);

  /**/

  g.buildPlang("pl+rust")
    .merge({
      name: "Rust",
      websites: [
        { kind: "wikipedia", title: "Rust", href: "https://en.wikipedia.org/wiki/Rust_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        },
      ],
      releases: [{ version: "1.78.0", date: "2024-01-01", kind: "stable" }],
      extensions: [".rlib", ".rs"],
    })
    .addDialects(["pl+project-verona"])
    .addInfluences(["pl+alef", "pl+c", "pl+cyclone", "pl+dis-virtual-machine", "pl+limbo", "pl+ml"])
    .addInfluence("pl+cpp", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    })
    .addInfluence("pl+cilk-plus", {
      refs: [
        {
          href: "https://github.com/rayon-rs/rayon/blob/master/FAQ.md#how-does-rayon-balance-work-between-threads",
          title: "Rayon FAQ",
        },
      ],
    })
    .addInfluence("pl+cilk", {
      refs: [
        {
          href: "https://github.com/rayon-rs/rayon/blob/master/FAQ.md#how-does-rayon-balance-work-between-threads",
          title: "Rayon FAQ",
        },
      ],
    })
    .addInfluence("pl+elm", {
      refs: [{ href: "https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html", title: "Uniqueness Types" }],
    })
    .addInfluence("pl+erlang", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    })
    .addInfluence("pl+modula", {
      refs: [
        {
          href: "https://www.reddit.com/r/rust/comments/cycjou/i_just_learned_about_modula3_a_language_that_had/",
          title:
            "R/Rust - I just learned about Modula-3, a language that had a lot of similar goals to Rust, and there was even an experimental OS that relied on the safety provided by the language",
        },
      ],
    })
    .addInfluence("pl+newsqueak", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+ocaml", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+poly-slashml", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+racket", {
      refs: [{ href: "https://mail.mozilla.org/pipermail/rust-dev/2013-May/003947.html", title: "Planet2 questions" }],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    })
    .addInfluence("pl+scheme", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+sml", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+swift", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addLicenses(["lic+mit", "lic+apache"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+affine"]);

  /**/

  g.buildPlang("pl+s")
    .merge({
      name: "S",
      websites: [
        { kind: "wikipedia", title: "S", href: "https://en.wikipedia.org/wiki/S_(programming_language)" },
        {
          kind: "homepage",
          title: "ect.bell-labs.com/sl/S/",
          href: "https://web.archive.org/web/20181014111802/http://ect.bell-labs.com/sl/S/",
        },
      ],
    })
    .addImplementations(["pl+s-plus"])
    .addInfluences(["pl+c", "pl+apl", "pl+fortran", "pl+scheme"])
    .addPerson("person+john-chambers", { role: "developer" })
    .addPerson("person+william-s-cleveland", { role: "developer" })
    .addPerson("person+trevor-hastie", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+s-lang")
    .merge({
      name: "S-Lang",
      websites: [{ kind: "wikipedia", title: "S-Lang", href: "https://en.wikipedia.org/wiki/S-Lang" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/JED-editor-slang-source.png/220px-JED-editor-slang-source.png",
        },
      ],
      releases: [{ version: "2.3.3", date: "2022-01-01", kind: "stable" }],
    })
    .addLicense("lic+gpl", {
      refs: [
        {
          href: "https://web.archive.org/web/20200601011204/http://jedsoft.org/slang/license.html",
          title: "S-Lang Software License Information",
        },
      ],
    });

  /**/

  g.buildPlang("pl+s-plus")
    .merge({
      name: "S-PLUS",
      websites: [{ kind: "wikipedia", title: "S-PLUS", href: "https://en.wikipedia.org/wiki/S-PLUS" }],
      releases: [{ version: "8.2", date: "2010-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+s3")
    .merge({
      name: "S3",
      websites: [{ kind: "wikipedia", title: "S3", href: "https://en.wikipedia.org/wiki/S3_(programming_language)" }],
    })
    .addInfluences(["pl+algol"])
    .addParadigms(["para+structured", "para+imperative"]);

  /**/

  g.buildPlang("pl+sac")
    .merge({
      name: "SAC",
      websites: [{ kind: "wikipedia", title: "SAC", href: "https://en.wikipedia.org/wiki/SAC_programming_language" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/SAC_language_logo.png/121px-SAC_language_logo.png",
        },
      ],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+apl", "pl+sisal", "pl+c"])
    .addLicenses(["lic+free"])
    .addParadigms(["para+array", "para+functional"])
    .addPlatforms(["platf+posix", "platf+unix"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+safari").merge({
    name: "Safari",
    websites: [{ kind: "wikipedia", title: "Safari", href: "https://en.wikipedia.org/wiki/Safari_(web_browser)" }],
  });

  /**/

  g.buildPlang("pl+sail").merge({
    name: "SAIL",
    websites: [{ kind: "wikipedia", title: "SAIL", href: "https://en.wikipedia.org/wiki/SAIL_(programming_language)" }],
  });

  /**/

  g.buildPlang("pl+sap").merge({
    name: "SAP S/4HANA",
    websites: [
      { kind: "wikipedia", title: "SAP R/2", href: "https://en.wikipedia.org/wiki/SAP_R/2" },
      { kind: "wikipedia", title: "SAP R/3", href: "https://en.wikipedia.org/wiki/SAP_R/3" },
      { kind: "wikipedia", title: "SAP S/4HANA", href: "https://en.wikipedia.org/wiki/SAP_S/4HANA" },
    ],
  });

  /**/

  g.buildPlang("pl+sas")
    .merge({
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_language" }],
    })
    .addInfluences(["pl+pl-slash"])
    .addPerson("person+anthony-james-barr", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addParadigms(["para+multi", "para+data", "para+imperative"])
    .addPlatforms(["platf+win", "platf+mac"]);

  /**/

  g.buildPlang("pl+sas-system")
    .merge({
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_System" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png/120px-%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png",
        },
      ],
      releases: [{ version: "9.4", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+sasl")
    .merge({
      name: "SASL",
      websites: [
        { kind: "wikipedia", title: "SASL", href: "https://en.wikipedia.org/wiki/SASL_(programming_language)" },
      ],
    })
    .addInfluences(["pl+iswim"])
    .addPerson("person+david-turner", { role: "designer" })
    .addParadigms(["para+functional"]);

  /**/

  g.buildPlang("pl+sather")
    .merge({
      name: "Sather",
      websites: [{ kind: "wikipedia", title: "Sather", href: "https://en.wikipedia.org/wiki/Sather" }],
      releases: [{ version: "1.2.3", date: "2007-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+clu", "pl+eiffel", "pl+common-lisp", "pl+scheme"])
    .addPerson("person+steve-omohundro", { role: "designer" })
    .addParadigms(["para+objects", "para+functional"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+sawzall")
    .merge({
      name: "Sawzall",
      websites: [
        { kind: "wikipedia", title: "Sawzall", href: "https://en.wikipedia.org/wiki/Sawzall_(programming_language)" },
      ],
    })
    .addLicenses(["lic+apache"]);

  /**/

  g.buildPlang("pl+sbcl")
    .merge({
      name: "SBCL",
      websites: [{ kind: "wikipedia", title: "SBCL", href: "https://en.wikipedia.org/wiki/SBCL" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SBCL_screenshot.png/250px-SBCL_screenshot.png",
        },
      ],
      releases: [{ version: "2.4.5", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+public-domain", "lic+mit", "lic+bsd"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+scala")
    .merge({
      name: "Scala",
      websites: [
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_(programming_language)" },
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_programming_language" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" }],
      releases: [{ version: "3.4.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+eiffel", "pl+erlang", "pl+ml", "pl+oz", "pl+poly-slashml", "pl+f-sharp", "pl+smalltalk"])
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addInfluence("pl+ocaml", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addInfluence("pl+pizza", {
      refs: [
        { href: "http://www.artima.com/scalazine/articles/origins_of_scala.html", title: "The Origins of Scala" },
        {
          href: "https://web.archive.org/web/20200709211816/https://www.scala-lang.org/docu/files/ScalaOverview.pdf",
          title: "An Overview of the Scala Programming Language",
        },
      ],
    })
    .addInfluence("pl+common-lisp", { refs: [{ href: "http://scalamacros.org", title: "Scala Macros" }] })
    .addInfluence("pl+haskell", {
      refs: [
        { href: "http://blog.fogus.me/2010/08/06/martinodersky-take5-tolist/", title: "MartinOdersky take(5) toList" },
      ],
    })
    .addInfluence("pl+scheme", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addInfluence("pl+sml", {
      refs: [
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
      ],
    })
    .addPerson("person+martin-odersky", { role: "designer" })
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/scala/scala/blob/2.13.x/NOTICE", title: "Notice file" }],
    })
    .addParadigms(["para+multi", "para+concurrent", "para+functional", "para+imperative", "para+objects"])
    .addPlatforms(["platf+jvm", "platf+javascript", "platf+llvm"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  /**/

  g.buildPlang("pl+scaleform-gfx").merge({
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  /**/

  g.buildPlang("pl+scheme")
    .merge({
      name: "Scheme",
      websites: [
        { kind: "wikipedia", title: "Scheme", href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" }],
      releases: [{ version: "unknown", date: "2013-01-01", kind: "stable" }],
    })
    .addDialects(["pl+dsssl"])
    .addInfluences(["pl+algol", "pl+mdl", "pl+lisp"])
    .addInfluence("pl+racket", {
      refs: [{ href: "http://www.r6rs.org", title: "Revised6 Report on the Algorithmic Language Scheme (R6RS)" }],
    })
    .addPerson("person+guy-l-steele", { role: "designer" })
    .addPerson("person+gerald-jay-sussman", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  /**/

  g.buildPlang("pl+scicos").merge({
    name: "Scicos",
    websites: [
      { kind: "wikipedia", title: "Scicos", href: "https://en.wikipedia.org/wiki/Scicos" },
      { kind: "homepage", title: "www.scicos.org", href: "http://www.scicos.org" },
    ],
    releases: [{ version: "4.4.1", date: "2011-01-01", kind: "stable" }],
  });

  /**/

  g.buildPlang("pl+scilab")
    .merge({
      name: "Scilab",
      websites: [{ kind: "wikipedia", title: "Scilab", href: "https://en.wikipedia.org/wiki/Scilab" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
        },
      ],
      releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+dassault-systemes", { role: "developer" })
    .addLicenses(["lic+gpl-2", "lic+cecill"]);

  /**/

  g.buildPlang("pl+scm")
    .merge({
      name: "SCM",
      websites: [
        { kind: "wikipedia", title: "SCM", href: "https://en.wikipedia.org/wiki/SCM_(Scheme_implementation)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/SCM_64.png" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp", "pl+scheme", "pl+siod"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic", "tsys+latent"]);

  /**/

  g.buildPlang("pl+script.net")
    .merge({
      name: "Script.NET",
      websites: [{ kind: "wikipedia", title: "Script.NET", href: "https://en.wikipedia.org/wiki/Script.NET" }],
    })
    .addInfluences(["pl+javascript"])
    .addParadigms(["para+imperative", "para+meta", "para+scripting"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+scripting")
    .merge({
      name: "Scripting language",
      websites: [
        { kind: "wikipedia", title: "Scripting language", href: "https://en.wikipedia.org/wiki/Scripting_language" },
      ],
    })
    .addDialects(["pl+sensetalk"]);

  /**/

  g.buildPlang("pl+sed")
    .merge({
      name: "sed",
      websites: [{ kind: "wikipedia", title: "sed", href: "https://en.wikipedia.org/wiki/Sed" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sed_stream_editor_cropped1.jpg/300px-Sed_stream_editor_cropped1.jpg",
        },
      ],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+ed"])
    .addPerson("person+lee-e-mcmahon", { role: "designer" })
    .addParadigms(["para+scripting"]);

  /**/

  g.buildPlang("pl+seed7")
    .merge({
      name: "Seed7",
      websites: [{ kind: "wikipedia", title: "Seed7", href: "https://en.wikipedia.org/wiki/Seed7" }],
      releases: [{ version: "unknown", date: "2023-05-29", kind: "stable" }],
    })
    .addImplementations(["pl+open-source"])
    .addInfluences(["pl+c", "pl+cpp", "pl+java", "pl+modula", "pl+pascal", "pl+algol"])
    .addInfluence("pl+ada", { refs: [{ href: "https://www.sparforte.com/", title: "SparForte Programming Language" }] })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms([
      "para+multi",
      "para+extensible",
      "para+objects",
      "para+imperative",
      "para+structured",
      "para+generic",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+unix", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+self")
    .merge({
      name: "Self",
      websites: [
        { kind: "wikipedia", title: "Self", href: "https://en.wikipedia.org/wiki/Self_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg" }],
      releases: [{ version: "2017.1", date: "2017-01-01", kind: "stable" }],
    })
    .addDialects(["pl+newspeak"])
    .addInfluences(["pl+smalltalk"])
    .addInfluence("pl+apl", {
      refs: [{ href: "https://doi.org/10.1145%2F1238844.1238853", title: "10.1145/1238844.1238853" }],
    })
    .addPerson("person+david-ungar", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+objects", "para+prototypes"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+semi-automatic-ground-environment").merge({
    name: "SAGE",
    websites: [
      { kind: "wikipedia", title: "SAGE", href: "https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment" },
    ],
  });

  /**/

  g.buildPlang("pl+sensetalk")
    .merge({
      name: "SenseTalk",
      websites: [{ kind: "wikipedia", title: "SenseTalk", href: "https://en.wikipedia.org/wiki/SenseTalk" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/ST-HelloWorld2.png/250px-ST-HelloWorld2.png",
        },
      ],
      releases: [{ version: "2.15", date: "2024-01-01", kind: "stable" }],
      extensions: [".script", ".st"],
    })
    .addInfluences(["pl+hypertalk", "pl+xtalk"])
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+people", "para+multi", "para+objects"])
    .addTypeSystems(["tsys+duck"]);

  /**/

  g.buildPlang("pl+sequencel")
    .merge({
      name: "SequenceL",
      websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
    })
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://web.archive.org/web/20170202045317/https://texasmulticore.com/products/sequencel-licenses/",
          title: "SequenceL Licensing",
        },
      ],
    })
    .addParadigms(["para+parallel", "para+functional", "para+dec"])
    .addPlatforms(["platf+x86", "platf+arm", "platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+setl")
    .merge({
      name: "SETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/SETL" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+jacob-t-schwartz", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+setl2")
    .merge({
      name: "SETL2",
      websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }],
      releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+isetl", "pl+setl", "pl+algol", "pl+setl2"])
    .addPerson("person+jacob-t-schwartz", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+shading")
    .merge({
      name: "shading language",
      websites: [
        { kind: "wikipedia", title: "shading language", href: "https://en.wikipedia.org/wiki/Shading_language" },
      ],
    })
    .addDialects(["pl+cg"]);

  /**/

  g.buildPlang("pl+short-code").merge({
    name: "Short Code",
    websites: [
      { kind: "wikipedia", title: "Short Code", href: "https://en.wikipedia.org/wiki/Short_Code_(computer_language)" },
    ],
  });

  /**/

  g.buildPlang("pl+siemens").merge({
    name: "Siemens",
    websites: [{ kind: "wikipedia", title: "Siemens", href: "https://en.wikipedia.org/wiki/Siemens" }],
  });

  /**/

  g.buildPlang("pl+silverfrost-ftn95")
    .merge({
      name: "Silverfrost FTN95: Fortran for Windows",
      websites: [{ kind: "wikipedia", title: "Silverfrost", href: "https://en.wikipedia.org/wiki/Silverfrost_FTN95" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Silverfrost_ftn95.jpg" }],
      releases: [{ version: "9.00", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+simscript").merge({
    name: "Simscript",
    websites: [{ kind: "wikipedia", title: "Simscript", href: "https://en.wikipedia.org/wiki/Simscript" }],
  });

  /**/

  g.buildPlang("pl+simula")
    .merge({
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula", href: "https://en.wikipedia.org/wiki/Simula" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    })
    .addImplementations(["pl+algol", "pl+simscript"])
    .addInfluences(["pl+algol", "pl+simscript"])
    .addPerson("person+ole-johan-dahl", { role: "designer" })
    .addPerson("person+kristen-nygaard", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+unix", "platf+win", "platf+z-slashos"])
    .addTypeSystems(["tsys+static", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+simula-67")
    .merge({
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    })
    .addImplementations(["pl+algol", "pl+simscript"])
    .addInfluences(["pl+algol", "pl+simscript"])
    .addPerson("person+ole-johan-dahl", { role: "designer" })
    .addPerson("person+kristen-nygaard", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+unix", "platf+win", "platf+z-slashos"])
    .addTypeSystems(["tsys+static", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+simula67")
    .merge({
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula67", href: "https://en.wikipedia.org/wiki/Simula67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    })
    .addImplementations(["pl+algol", "pl+simscript"])
    .addInfluences(["pl+algol", "pl+simscript"])
    .addPerson("person+ole-johan-dahl", { role: "designer" })
    .addPerson("person+kristen-nygaard", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+unix", "platf+win", "platf+z-slashos"])
    .addTypeSystems(["tsys+static", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+simulationx")
    .merge({
      name: "SimulationX",
      websites: [
        { kind: "wikipedia", title: "SimulationX", href: "https://en.wikipedia.org/wiki/SimulationX" },
        { kind: "homepage", title: "SimulationX product page", href: "http://www.simulationx.com" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SimulationX_by_ESI_color_rgb.png/120px-SimulationX_by_ESI_color_rgb.png",
        },
      ],
      releases: [{ version: "4.3", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addPlatforms(["platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+simulink")
    .merge({
      name: "Simulink",
      websites: [{ kind: "wikipedia", title: "Simulink", href: "https://en.wikipedia.org/wiki/Simulink" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Simulink_Logo_%28non-wordmark%29.png/100px-Simulink_Logo_%28non-wordmark%29.png",
        },
      ],
      releases: [{ version: "10.7", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+singularity")
    .merge({
      name: "Singularity",
      websites: [
        {
          kind: "wikipedia",
          title: "Singularity",
          href: "https://en.wikipedia.org/wiki/Singularity_(operating_system)",
        },
      ],
    })
    .addInfluences(["pl+emerald"]);

  /**/

  g.buildPlang("pl+siod")
    .merge({
      name: "SIOD",
      websites: [{ kind: "wikipedia", title: "SIOD", href: "https://en.wikipedia.org/wiki/SIOD" }],
      releases: [{ version: "3.63", date: "2008-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addPlatforms(["platf+ia-32", "platf+cross-platform", "platf+linux", "platf+openvms", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic", "tsys+latent"]);

  /**/

  g.buildPlang("pl+sisal")
    .merge({
      name: "SISAL",
      websites: [{ kind: "wikipedia", title: "SISAL", href: "https://en.wikipedia.org/wiki/SISAL" }],
    })
    .addInfluences(["pl+lucid", "pl+pascal", "pl+c", "pl+fortran"])
    .addParadigms(["para+functional", "para+dataflow"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+sketchpad").merge({
    name: "Sketchpad",
    websites: [{ kind: "wikipedia", title: "Sketchpad", href: "https://en.wikipedia.org/wiki/Sketchpad" }],
  });

  /**/

  g.buildPlang("pl+skill")
    .merge({
      name: "SKILL",
      websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/SKILL" }],
    })
    .addInfluences(["pl+scheme", "pl+common-lisp", "pl+common-lisp-object-system"])
    .addParadigms(["para+functional", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+small")
    .merge({
      name: "Small Machine Algol Like Language",
      websites: [
        { kind: "wikipedia", title: "Small Machine Algol Like Language", href: "https://en.wikipedia.org/wiki/SMALL" },
      ],
    })
    .addImplementations(["pl+fortran"])
    .addInfluences(["pl+algol"])
    .addParadigms(["para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+dec"]);

  /**/

  g.buildPlang("pl+small-c").merge({
    name: "Small-C",
    websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
  });

  /**/

  g.buildPlang("pl+smarteiffel").merge({
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  /**/

  g.buildPlang("pl+sml")
    .merge({
      name: "SML/NJ",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
      ],
      releases: [
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
    })
    .addDialects(["pl+alice", "pl+mlton", "pl+sml", "pl+concurrent-ml", "pl+dependent-ml"])
    .addImplementations(["pl+sml", "pl+c", "pl+mlton", "pl+poly-slashml"])
    .addInfluences(["pl+ml", "pl+sml", "pl+hope", "pl+pascal"])
    .addLicense("lic+permissive", {
      refs: [{ href: "http://www.smlnj.org/license.html", title: "Standard ML of New Jersey License" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addParadigm("para+modular", {
      refs: [
        {
          href: "https://www.cs.cmu.edu/~rwh/introsml/modules/subfun.htm",
          title: "Programming in Standard ML: Hierarchies and Parameterization",
        },
      ],
    })
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+snap-")
    .merge({
      name: "Snap!",
      websites: [
        { kind: "wikipedia", title: "Snap!", href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Snap%21.svg" }],
      releases: [{ version: "9.2.17", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+javascript"])
    .addInfluences(["pl+scheme", "pl+logo", "pl+smalltalk", "pl+apl"])
    .addInfluence("pl+scratch", {
      refs: [{ href: "https://snap.berkeley.edu/", title: "Snap! Build Your Own Blocks" }],
    })
    .addPerson("person+brian-harvey", { role: "designer" })
    .addLicenses(["lic+affero-gpl"])
    .addParadigms(["para+objects", "para+educational", "para+event"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+snobol")
    .merge({
      name: "SNOBOL",
      websites: [
        { kind: "wikipedia", title: "SNOBOL", href: "https://en.wikipedia.org/wiki/SNOBOL" },
        { kind: "homepage", title: "https://www.regressive.org/snobol4/", href: "https://www.regressive.org/snobol4/" },
      ],
      releases: [{ version: "unknown", date: "1967-01-01", kind: "stable" }],
    })
    .addDialects(["pl+icon"])
    .addImplementations(["pl+spitbol"])
    .addInfluences(["pl+comit"])
    .addPerson("person+david-j-farber", { role: "designer" })
    .addPerson("person+ralph-griswold", { role: "designer" })
    .addParadigms(["para+imperative", "para+unstructured"]);

  /**/

  g.buildPlang("pl+solidity")
    .merge({
      name: "Solidity",
      websites: [{ kind: "wikipedia", title: "Solidity", href: "https://en.wikipedia.org/wiki/Solidity" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" }],
      releases: [{ version: "0.8.26", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementation("pl+cpp", { refs: [{ href: "https://github.com/", title: "Build software better, together" }] })
    .addInfluences(["pl+javascript", "pl+cpp", "pl+python"])
    .addPerson("person+gavin-wood", { role: "designer" })
    .addLicense("lic+gpl", {
      refs: [
        {
          href: "https://github.com/ethereum/solidity/blob/bca3fb8ffd7c57a3f6920fd5a115a9a0fc0edb21/LICENSE.txt",
          title: "The Solidity Contract-Oriented Programming Language",
        },
      ],
    })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+souffle").merge({
    name: "Soufflé",
    websites: [
      {
        kind: "wikipedia",
        title: "Soufflé",
        href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
      },
    ],
  });

  /**/

  g.buildPlang("pl+source")
    .merge({
      name: "Source",
      websites: [
        { kind: "wikipedia", title: "Source", href: "https://en.wikipedia.org/wiki/Source_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+safari"])
    .addImplementation("pl+tail-call", { refs: [{ href: "https://sourceacademy.org", title: "Source Academy" }] })
    .addInfluences(["pl+javascript", "pl+scheme"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+scripting", "para+imperative", "para+functional"])
    .addPlatforms(["platf+web"])
    .addTypeSystems(["tsys+dynamic", "tsys+duck"]);

  /**/

  g.buildPlang("pl+sp-slashk")
    .merge({
      name: "SP/k",
      websites: [{ kind: "wikipedia", title: "SP/k", href: "https://en.wikipedia.org/wiki/SP/k" }],
    })
    .addInfluences(["pl+pl-slash"])
    .addPerson("person+rc-holt", { role: "designer" })
    .addPerson("person+jr-cordy", { role: "designer" })
    .addParadigms(["para+structured", "para+imperative"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+sparc").merge({
    name: "SPARC",
    websites: [{ kind: "wikipedia", title: "SPARC", href: "https://en.wikipedia.org/wiki/SPARC" }],
  });

  /**/

  g.buildPlang("pl+spark")
    .merge({
      name: "SPARK",
      websites: [
        { kind: "wikipedia", title: "SPARK", href: "https://en.wikipedia.org/wiki/SPARK_(programming_language)" },
        { kind: "homepage", title: "About SPARK", href: "http://www.adacore.com/about-spark" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Sparkada.jpg/250px-Sparkada.jpg",
        },
      ],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ada", "pl+eiffel"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+sparql")
    .merge({
      name: "SPARQL",
      websites: [{ kind: "wikipedia", title: "SPARQL", href: "https://en.wikipedia.org/wiki/SPARQL" }],
      releases: [{ version: "1.1", date: "2013-01-01", kind: "stable" }],
    })
    .addImplementation("pl+jena", {
      refs: [{ href: "https://archive.org/details/isbn_9780470418017/page/406", title: "Semantic Web Programming" }],
    })
    .addImplementation("pl+virtuoso-universal-server", {
      refs: [{ href: "https://archive.org/details/isbn_9780470418017/page/406", title: "Semantic Web Programming" }],
    })
    .addInfluences(["pl+sql"])
    .addParadigms(["para+query"]);

  /**/

  g.buildPlang("pl+speakeasy")
    .merge({
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
    })
    .addInfluence("pl+apl", {
      refs: [
        {
          href: "http://www.cs.nyu.edu/media/publications/rubinsteyn_alex.pdf",
          title: "Runtime Compilation of Array-Oriented Python Programs",
        },
      ],
    })
    .addPerson("person+stanley-cohen", { role: "designer" })
    .addLicenses(["lic+trialware"])
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+speedcoding")
    .merge({
      name: "Speedcoding",
      websites: [{ kind: "wikipedia", title: "Speedcoding", href: "https://en.wikipedia.org/wiki/Speedcoding" }],
    })
    .addInfluences(["pl+assembly"])
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+structured", "para+generic"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+spidermonkey").merge({
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

  g.buildPlang("pl+spitbol").merge({
    name: "SPITBOL",
    websites: [{ kind: "wikipedia", title: "SPITBOL", href: "https://en.wikipedia.org/wiki/SPITBOL" }],
  });

  /**/

  g.buildPlang("pl+split-c")
    .merge({
      name: "Split-C",
      websites: [
        { kind: "wikipedia", title: "Split-C", href: "https://en.wikipedia.org/wiki/Split-C" },
        {
          kind: "homepage",
          title: "Split-C project website",
          href: "http://www.eecs.berkeley.edu/Research/Projects/CS/parallel/castle/split-c/",
        },
      ],
    })
    .addInfluences(["pl+c"])
    .addParadigms(["para+imperative", "para+structured", "para+parallel"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+squeak")
    .merge({
      name: "Squeak",
      websites: [{ kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addDialects(["pl+pharo", "pl+croquet-project", "pl+newspeak"])
    .addImplementations(["pl+croquet-project"])
    .addInfluences(["pl+self", "pl+smalltalk", "pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+dan-ingalls", { role: "designer" })
    .addPerson("person+adele-goldberg", { role: "designer" })
    .addLicenses(["lic+mit", "lic+apache"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+ios", "platf+win"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+squirrel")
    .merge({
      name: "Squirrel",
      websites: [
        { kind: "wikipedia", title: "Squirrel", href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)" },
      ],
      releases: [{ version: "3.2", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp", "pl+javascript", "pl+lua", "pl+python"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+scripting", "para+imperative", "para+functional", "para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+starlogo")
    .merge({
      name: "StarLogo",
      websites: [{ kind: "wikipedia", title: "StarLogo", href: "https://en.wikipedia.org/wiki/StarLogo" }],
      releases: [{ version: "2.1", date: "2018-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+java", "pl+c"])
    .addInfluences(["pl+logo"])
    .addPerson("person+mitchel-resnick", { role: "designer" })
    .addPerson("person+media-lab", { role: "developer" })
    .addParadigms(["para+multi", "para+educational", "para+imperative", "para+agent", "para+simulation"])
    .addPlatforms(["platf+jvm", "platf+win", "platf+mac"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+stata")
    .merge({
      name: "Stata",
      websites: [{ kind: "wikipedia", title: "Stata", href: "https://en.wikipedia.org/wiki/Stata" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Stata_logo_med_blue.png/120px-Stata_logo_med_blue.png",
        },
      ],
      releases: [{ version: "18.0", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+stateflow")
    .merge({
      name: "Stateflow",
      websites: [
        { kind: "wikipedia", title: "Stateflow", href: "https://en.wikipedia.org/wiki/Stateflow" },
        {
          kind: "homepage",
          title: "Stateflow product page",
          href: "http://www.mathworks.com/products/stateflow?s_cid=wiki_stateflow_2",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Automatic_Transmission_Logic.png/220px-Automatic_Transmission_Logic.png",
        },
      ],
      releases: [{ version: "unknown", date: "2018-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+x64"]);

  /**/

  g.buildPlang("pl+stoic")
    .merge({
      name: "STOIC",
      websites: [{ kind: "wikipedia", title: "STOIC", href: "https://en.wikipedia.org/wiki/STOIC" }],
    })
    .addInfluences(["pl+forth", "pl+reverse-polish-notation"])
    .addPerson("person+jonathan-sachs", { role: "developer" })
    .addParadigms(["para+concatenative", "para+stack", "para+imperative"])
    .addPlatforms(["platf+openvms"]);

  /**/

  g.buildPlang("pl+strand")
    .merge({
      name: "Strand",
      websites: [
        { kind: "wikipedia", title: "Strand", href: "https://en.wikipedia.org/wiki/Strand_(programming_language)" },
      ],
    })
    .addInfluences(["pl+prolog"]);

  /**/

  g.buildPlang("pl+strongtalk")
    .merge({
      name: "Strongtalk",
      websites: [{ kind: "wikipedia", title: "Strongtalk", href: "https://en.wikipedia.org/wiki/Strongtalk" }],
      releases: [{ version: "2.0", date: "2006-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk", "pl+self"])
    .addPerson("person+gilad-bracha", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+ia-32", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

  /**/

  g.buildPlang("pl+subl")
    .merge({
      name: "SubL",
      websites: [{ kind: "wikipedia", title: "SubL", href: "https://en.wikipedia.org/wiki/SubL" }],
    })
    .addInfluences(["pl+armed-bear-common-lisp", "pl+common-lisp"]);

  /**/

  g.buildPlang("pl+supercollider")
    .merge({
      name: "SuperCollider",
      websites: [{ kind: "wikipedia", title: "SuperCollider", href: "https://en.wikipedia.org/wiki/SuperCollider" }],
    })
    .addInfluence("pl+j", {
      refs: [
        {
          href: "http://doc.sccode.org/Reference/Adverbs.html",
          title: "SuperCollider documentation, Adverbs for Binary Operators",
        },
      ],
    });

  /**/

  g.buildPlang("pl+superplan")
    .merge({
      name: "Superplan",
      websites: [{ kind: "wikipedia", title: "Superplan", href: "https://en.wikipedia.org/wiki/Superplan" }],
    })
    .addInfluences(["pl+plankalkul"])
    .addPerson("person+heinz-rutishauser", { role: "designer" });

  /**/

  g.buildPlang("pl+supertalk")
    .merge({
      name: "SuperTalk",
      websites: [{ kind: "wikipedia", title: "SuperTalk", href: "https://en.wikipedia.org/wiki/SuperTalk" }],
    })
    .addInfluences(["pl+hypertalk", "pl+xtalk"]);

  /**/

  g.buildPlang("pl+swi-prolog")
    .merge({
      name: "SWI-Prolog",
      websites: [{ kind: "wikipedia", title: "SWI-Prolog", href: "https://en.wikipedia.org/wiki/SWI-Prolog" }],
      releases: [
        { version: "9.2.2", date: "2024-01-01", kind: "stable" },
        { version: "9.3.2", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+bsd-s", "lic+lgpl"]);

  /**/

  g.buildPlang("pl+swift")
    .merge({
      name: "Swift",
      websites: [
        { kind: "wikipedia", title: "Swift", href: "https://en.wikipedia.org/wiki/Swift_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Swift (parallel scripting language)",
          href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
      ],
      releases: [
        { version: "0.96.2", date: "2015-01-01", kind: "stable" },
        { version: "5.10.1", date: "2024-01-01", kind: "stable" },
        { version: "6.0", kind: "preview" },
      ],
    })
    .addInfluences(["pl+smalltalk", "pl+c", "pl+rust", "pl+haskell"])
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+clu", {
      refs: [
        { href: "http://nondot.org/sabre/", title: "Chris Lattner's Homepage" },
        { href: "http://nondot.org/sabre", title: "Chris Lattner's Homepage" },
      ],
    })
    .addInfluence("pl+d", {
      refs: [
        {
          href: "https://developer.apple.com/swift/blog/?id=15",
          title: "Building assert() in Swift, Part 2: __FILE__ and __LINE__",
        },
      ],
    })
    .addInfluence("pl+ms-visual-c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+objective-cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20140604061001/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+objective-c", {
      refs: [
        {
          href: "https://web.archive.org/web/20140604061001/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
        { href: "http://nondot.org/sabre/", title: "Chris Lattner's Homepage" },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addPerson("person+chris-lattner", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://www.drdobbs.com/architecture-and-design/swift-objectively/240168424",
          title: "Swift, Objectively",
        },
      ],
    })
    .addParadigms([
      "para+dataflow",
      "para+distributed",
      "para+grid",
      "para+concurrent",
      "para+scientific",
      "para+scripting",
      "para+multi",
      "para+interface",
      "para+objects",
      "para+functional",
      "para+imperative",
      "para+block",
      "para+dec",
    ])
    .addPlatforms([
      "platf+cross-platform",
      "platf+jvm",
      "platf+mac",
      "platf+ios",
      "platf+dos",
      "platf+tvos",
      "platf+visionos",
      "platf+watchos",
      "platf+linux",
      "platf+win",
      "platf+android",
      "platf+z-slashos",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+sympl")
    .merge({
      name: "SYMPL",
      websites: [{ kind: "wikipedia", title: "SYMPL", href: "https://en.wikipedia.org/wiki/SYMPL" }],
    })
    .addInfluences(["pl+jovial"]);

  /**/

  g.buildPlang("pl+sysquake")
    .merge({
      name: "Sysquake",
      websites: [
        { kind: "wikipedia", title: "Sysquake", href: "https://en.wikipedia.org/wiki/Sysquake" },
        { kind: "homepage", title: "Sysquake product page", href: "http://www.calerga.com/products/Sysquake/" },
      ],
      releases: [{ version: "6.5", date: "2019-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+t")
    .merge({
      name: "T",
      websites: [
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_(programming_language)" },
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_programming_language" },
      ],
    })
    .addInfluences(["pl+scheme"])
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+functional", "para+meta"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+tads")
    .merge({
      name: "TADS",
      websites: [{ kind: "wikipedia", title: "TADS", href: "https://en.wikipedia.org/wiki/TADS" }],
      releases: [{ version: "3.1.3", date: "2013-01-01", kind: "stable" }],
    })
    .addParadigms(["para+prototypes", "para+domain"])
    .addPlatforms(["platf+amiga", "platf+dos", "platf+win", "platf+unix", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+tail-call").merge({
    name: "properly tail recursive",
    websites: [
      { kind: "wikipedia", title: "properly tail recursive", href: "https://en.wikipedia.org/wiki/Tail_call" },
    ],
  });

  /**/

  g.buildPlang("pl+tcl")
    .merge({
      name: "Tcl",
      websites: [{ kind: "wikipedia", title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg" }],
      releases: [{ version: "8.6.14", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+awk", "pl+lisp"])
    .addPerson("person+john-ousterhout", { role: "designer" })
    .addLicense("lic+bsd-s", {
      refs: [{ href: "http://www.tcl-lang.org/software/tcltk/license.html", title: "Tcl/Tk License Terms" }],
    })
    .addParadigms(["para+multi", "para+event", "para+functional", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+tea")
    .merge({
      name: "Tea",
      websites: [
        { kind: "wikipedia", title: "Tea", href: "https://en.wikipedia.org/wiki/Tea_(programming_language)" },
        { kind: "repository", title: "Tea", href: "https://github.com/jorgefranconunes/tea" },
      ],
    })
    .addInfluences(["pl+java", "pl+scheme"])
    .addInfluence("pl+tcl", {
      refs: [{ href: "https://fossil-scm.org/home/doc/trunk/www/th1.md", title: "TH1 Scripts" }],
    })
    .addParadigms(["para+multi", "para+functional", "para+objects", "para+class"]);

  /**/

  g.buildPlang("pl+telcomp")
    .merge({
      name: "TELCOMP",
      websites: [{ kind: "wikipedia", title: "TELCOMP", href: "https://en.wikipedia.org/wiki/TELCOMP" }],
    })
    .addInfluences(["pl+joss"]);

  /**/

  g.buildPlang("pl+tex")
    .merge({
      name: "TeX",
      websites: [{ kind: "wikipedia", title: "TeX", href: "https://en.wikipedia.org/wiki/TeX" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/68/TeX_logo.svg" }],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
      extensions: [".tex"],
    })
    .addPerson("person+donald-knuth", { role: "developer" })
    .addLicenses(["lic+permissive-free"]);

  /**/

  g.buildPlang("pl+threading-building-blocks")
    .merge({
      name: "Threading Building Blocks",
      websites: [
        {
          kind: "wikipedia",
          title: "Threading Building Blocks",
          href: "https://en.wikipedia.org/wiki/Threading_Building_Blocks",
        },
      ],
      releases: [{ version: "2021.8", date: "2021-01-01", kind: "stable" }],
    })
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://software.intel.com/en-us/free_tools_and_libraries",
          title: "No Cost Options for Intel Support yourself, Royalty-Free",
        },
      ],
    });

  /**/

  g.buildPlang("pl+tk")
    .merge({
      name: "Tk",
      websites: [{ kind: "wikipedia", title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tcl-Tk_universal_scripting.svg",
        },
      ],
      releases: [{ version: "8.6.13", date: "2022-01-01", kind: "stable" }],
    })
    .addLicense("lic+bsd-s", {
      refs: [{ href: "http://www.tcl.tk/software/tcltk/license.html", title: "Tcl/Tk Licensing Terms" }],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+tmg")
    .merge({
      name: "TMGUnix TMG",
      websites: [{ kind: "wikipedia", title: "TMG", href: "https://en.wikipedia.org/wiki/TMG_(language)" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Brainfuck_to_C_translator_in_Unix_TMG.png/225px-Brainfuck_to_C_translator_in_Unix_TMG.png",
        },
      ],
    })
    .addDialects(["pl+pdp-7", "pl+pdp-11"])
    .addInfluences(["pl+b", "pl+pl-slash"])
    .addInfluence("pl+algol", {
      refs: [{ href: "https://www.bell-labs.com/usr/dmr/www/chist.pdf", title: "The Development of the C Language" }],
    })
    .addInfluence("pl+snobol", {
      refs: [
        {
          href: "https://amakukha.github.io/tmg/TMG_Manual_McIlroy_1972.html",
          title: "A Manual for the Tmg Compiler-writing Language",
        },
      ],
    })
    .addPerson("person+douglas-mcilroy", { role: "developer" });

  /**/

  g.buildPlang("pl+tom")
    .merge({
      name: "Tom",
      websites: [
        { kind: "wikipedia", title: "Tom", href: "https://en.wikipedia.org/wiki/Tom_(pattern_matching_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Tom_%28pattern_matching_language%29_logo.png",
        },
      ],
      releases: [{ version: "2.10", date: "2013-03-21", kind: "stable" }],
    })
    .addLicenses(["lic+gpl", "lic+bsd-s"]);

  /**/

  g.buildPlang("pl+trac")
    .merge({
      name: "TRAC",
      websites: [
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_(programming_language)" },
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_programming_language" },
      ],
    })
    .addPerson("person+calvin-mooers", { role: "designer" })
    .addParadigms(["para+macros"]);

  /**/

  g.buildPlang("pl+transaction-application")
    .merge({
      name: "Transaction Programming Language (TAL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Transaction Programming Language (TAL)",
          href: "https://en.wikipedia.org/wiki/Transaction_Application_Language",
        },
      ],
    })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addPlatforms(["platf+x86-64"]);

  /**/

  g.buildPlang("pl+transcript")
    .merge({
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
    })
    .addInfluences(["pl+hypertalk"])
    .addLicenses(["lic+proprietary", "lic+gpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+unix", "platf+rpi"]);

  /**/

  g.buildPlang("pl+trueimage").merge({
    name: "TrueImage",
    websites: [{ kind: "wikipedia", title: "TrueImage", href: "https://en.wikipedia.org/wiki/TrueImage" }],
  });

  /**/

  g.buildPlang("pl+ttm")
    .merge({
      name: "TTM",
      websites: [{ kind: "wikipedia", title: "TTM", href: "https://en.wikipedia.org/wiki/TTM_(programming_language)" }],
      releases: [{ version: "1.0", kind: "stable" }],
    })
    .addInfluences(["pl+trac"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+macros"]);

  /**/

  g.buildPlang("pl+turing")
    .merge({
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
    })
    .addInfluences(["pl+concurrent-euclid", "pl+euclid", "pl+sp-slashk"])
    .addPerson("person+ric-holt", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+objects", "para+concurrent"])
    .addPlatforms(["platf+cross-platform", "platf+mips"])
    .addTypeSystems(["tsys+static", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+turtlestitch")
    .merge({
      name: "TurtleStitch",
      websites: [{ kind: "wikipedia", title: "Turtlestitch", href: "https://en.wikipedia.org/wiki/Turtlestitch" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turtlestitch_Logo.png/121px-Turtlestitch_Logo.png",
        },
      ],
      releases: [{ version: "2.7.7", date: "2022-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+javascript"])
    .addInfluences(["pl+scratch", "pl+snap-", "pl+logo", "pl+maker-culture"])
    .addLicenses(["lic+affero-gpl"])
    .addParadigms(["para+objects", "para+educational", "para+event"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+tutor")
    .merge({
      name: "TUTOR",
      websites: [{ kind: "wikipedia", title: "TUTOR", href: "https://en.wikipedia.org/wiki/TUTOR" }],
    })
    .addParadigms(["para+imperative"]);

  /**/

  g.buildPlang("pl+tweak").merge({
    name: "Tweak",
    websites: [
      { kind: "wikipedia", title: "Tweak", href: "https://en.wikipedia.org/wiki/Tweak_(programming_environment)" },
    ],
  });

  /**/

  g.buildPlang("pl+txl")
    .merge({
      name: "TXL",
      websites: [{ kind: "wikipedia", title: "TXL", href: "https://en.wikipedia.org/wiki/TXL_(programming_language)" }],
    })
    .addPerson("person+james-cordy", { role: "designer" })
    .addParadigms(["para+pattern", "para+term"]);

  /**/

  g.buildPlang("pl+tynker").merge({
    name: "Tynker IDE",
    websites: [{ kind: "wikipedia", title: "Tynker IDE", href: "https://en.wikipedia.org/wiki/Tynker" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Tynker_logo.png/120px-Tynker_logo.png",
      },
    ],
  });

  /**/

  g.buildPlang("pl+typescript")
    .merge({
      name: "TypeScript",
      websites: [{ kind: "wikipedia", title: "TypeScript", href: "https://en.wikipedia.org/wiki/TypeScript" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" }],
      releases: [{ version: "5.4.2", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+assemblyscript"])
    .addInfluences(["pl+c-sharp", "pl+javascript", "pl+ms-visual-c-sharp", "pl+java"])
    .addInfluence("pl+actionscript", {
      refs: [
        {
          href: "https://javascript.plainenglish.io/how-actionscript-foreshadowed-typescript-149cdb764de9",
          title: "How ActionScript foreshadowed TypeScript",
        },
      ],
    })
    .addInfluence("pl+f-sharp", {
      refs: [{ href: "https://fsharp.org/history/hopl-final/hopl-fsharp.pdf", title: "The Early History of F#" }],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+duck", "tsys+gradual"])
    .addTypeSystem("tsys+structural", {
      refs: [
        { href: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html", title: "Type Compatibility" },
      ],
    });

  /**/

  g.buildPlang("pl+ucblogo")
    .merge({
      name: "UCBLogo",
      websites: [{ kind: "wikipedia", title: "UCBLogo", href: "https://en.wikipedia.org/wiki/UCBLogo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ubclogo_spiral.png/121px-Ubclogo_spiral.png",
        },
      ],
      releases: [{ version: "6.2.1", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+brian-harvey", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflection"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+uefn").merge({
    name: "UEFN",
    websites: [{ kind: "wikipedia", title: "UEFN", href: "https://en.wikipedia.org/wiki/UEFN" }],
  });

  /**/

  g.buildPlang("pl+uml").merge({
    name: "UML",
    websites: [{ kind: "wikipedia", title: "UML", href: "https://en.wikipedia.org/wiki/Unified_Modeling_Language" }],
  });

  /**/

  g.buildPlang("pl+umple")
    .merge({
      name: "Umple",
      websites: [{ kind: "wikipedia", title: "Umple", href: "https://en.wikipedia.org/wiki/Umple" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Umple_Logo.png/200px-Umple_Logo.png",
        },
      ],
      releases: [{ version: "1.34.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+java", "pl+cpp", "pl+uml", "pl+ruby", "pl+php"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+jvm"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+unicon")
    .merge({
      name: "Unicon",
      websites: [
        { kind: "wikipedia", title: "Unicon", href: "https://en.wikipedia.org/wiki/Unicon_(programming_language)" },
      ],
    })
    .addInfluences(["pl+icon"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+objects", "para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+unix"]);

  /**/

  g.buildPlang("pl+uniface")
    .merge({
      name: "Uniface",
      websites: [
        { kind: "wikipedia", title: "Uniface", href: "https://en.wikipedia.org/wiki/Uniface_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_Payoff_RGB.svg" }],
      releases: [{ version: "10.4.01.018", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial"]);

  /**/

  g.buildPlang("pl+unified-parallel-c")
    .merge({
      name: "Unified Parallel C (UPC)",
      websites: [
        { kind: "wikipedia", title: "Unified Parallel C", href: "https://en.wikipedia.org/wiki/Unified_Parallel_C" },
      ],
      releases: [{ version: "2022.10.0", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+split-c"])
    .addParadigms(["para+parallel", "para+message", "para+imperative", "para+structured"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/

  g.buildPlang("pl+univac-1108").merge({
    name: "UNIVAC 1108",
    websites: [{ kind: "wikipedia", title: "UNIVAC 1108", href: "https://en.wikipedia.org/wiki/UNIVAC_1108" }],
  });

  /**/

  g.buildPlang("pl+unix-shell").merge({
    name: "Unix shell",
    websites: [{ kind: "wikipedia", title: "Unix shell", href: "https://en.wikipedia.org/wiki/Unix_shell" }],
  });

  /**/

  g.buildPlang("pl+urbiscript")
    .merge({
      name: "urbiscript",
      websites: [{ kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" }],
      releases: [{ version: "2.7.4", date: "2011-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp"])
    .addInfluence("pl+self", {
      refs: [
        {
          href: "http://www.rfc1149.net/download/documents/scpr2008-08-Baillie.pdf",
          title: "The Urbi Universal Platform for Robotics",
        },
      ],
    })
    .addInfluence("pl+io", {
      refs: [
        {
          href: "http://www.rfc1149.net/download/documents/scpr2008-08-Baillie.pdf",
          title: "The Urbi Universal Platform for Robotics",
        },
      ],
    })
    .addPerson("person+jean-christophe-baillie", { role: "designer" })
    .addLicense("lic+bsd-s", {
      refs: [
        {
          href: "http://www.roboticmagazine.com/software-ai/urbi-the-open-source-operating-system-for-robots",
          title: "Urbi, the open source operating system for robots",
        },
      ],
    })
    .addParadigms(["para+multi", "para+objects", "para+event", "para+imperative", "para+functional", "para+reflective"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+v")
    .merge({
      name: "V",
      websites: [
        { kind: "wikipedia", title: "V (Vlang)", href: "https://en.wikipedia.org/wiki/V_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" }],
      releases: [{ version: "0.4.5", date: "2024-01-01", kind: "stable" }],
      extensions: [".v", ".vsh"],
    })
    .addInfluences(["pl+c", "pl+go", "pl+kotlin", "pl+oberon", "pl+python", "pl+rust"])
    .addInfluence("pl+swift", {
      refs: [
        {
          href: "https://github.com/vlang/v/blob/master/doc/docs.md#introduction",
          title: "influenced by - V documentation",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+structured", "para+concurrent"])
    .addPlatforms(["platf+x86-64", "platf+linux", "platf+mac", "platf+win", "platf+bsd"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+v8").merge({
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  /**/

  g.buildPlang("pl+vala")
    .merge({
      name: "Vala",
      websites: [
        { kind: "wikipedia", title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg" }],
      releases: [{ version: "0.57.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+boo", "pl+c", "pl+c-sharp", "pl+d", "pl+java", "pl+ms-visual-c-sharp", "pl+cpp"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+glib"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"]);

  /**/

  g.buildPlang("pl+vax")
    .merge({ name: "VAX", websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }] })
    .addInfluences(["pl+multilisp"]);

  /**/

  g.buildPlang("pl+verse")
    .merge({
      name: "Verse",
      websites: [
        { kind: "wikipedia", title: "Verse", href: "https://en.wikipedia.org/wiki/Verse_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
        },
      ],
      extensions: [".verse"],
    })
    .addImplementations(["pl+uefn", "pl+visual-studio-code"])
    .addInfluences(["pl+lambda-calculus"])
    .addPerson("person+simon-peyton-jones", { role: "designer" })
    .addPerson("person+tim-sweeney", { role: "designer" })
    .addPerson("person+lennart-augustsson", { role: "designer" })
    .addPerson("person+guy-steele", { role: "designer" })
    .addParadigms(["para+objects"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+vhdl")
    .merge({
      name: "VHDL",
      websites: [
        { kind: "wikipedia", title: "VHDL", href: "https://en.wikipedia.org/wiki/VHDL" },
        { kind: "homepage", title: "IEEE VASG", href: "https://opensource.ieee.org/vasg" },
      ],
      releases: [{ version: "unknown", date: "1076-01-01", kind: "stable" }],
    })
    .addDialects(["pl+vhdl-ams"])
    .addInfluences(["pl+pascal"])
    .addInfluence("pl+ada", {
      refs: [{ href: "https://books.google.com/books?id=IxZqlbYMJCIC&q=Ada", title: "The VHDL Handbook" }],
    })
    .addParadigms(["para+concurrent", "para+reactive", "para+dataflow"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+vhdl-ams").merge({
    name: "VHDL-AMS",
    websites: [{ kind: "wikipedia", title: "VHDL-AMS", href: "https://en.wikipedia.org/wiki/VHDL-AMS" }],
  });

  /**/

  g.buildPlang("pl+virtuoso-universal-server").merge({
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

  g.buildPlang("pl+visual-dataflex")
    .merge({
      name: "DataFlex",
      websites: [{ kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/Visual_DataFlex" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      releases: [{ version: "24.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial"])
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://www.dataaccess.com/resources/licensing/dataflex-studio-license-978",
          title: "“DataFlex License Info”",
        },
      ],
    });

  /**/

  g.buildPlang("pl+visual-eiffel").merge({
    name: "Visual Eiffel",
    websites: [{ kind: "wikipedia", title: "Visual Eiffel", href: "https://en.wikipedia.org/wiki/Visual_Eiffel" }],
  });

  /**/

  g.buildPlang("pl+visual-foxpro")
    .merge({
      name: "Visual FoxPro",
      websites: [{ kind: "wikipedia", title: "Visual FoxPro", href: "https://en.wikipedia.org/wiki/Visual_FoxPro" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/VisualFoxProScreenshot.png/220px-VisualFoxProScreenshot.png",
        },
      ],
    })
    .addLicenses(["lic+commercial", "lic+proprietary"])
    .addPlatform("platf+ia-32", {
      refs: [{ href: "http://msdn.microsoft.com/en-us/vfoxpro/bb190289", title: "Frequently Asked Questions" }],
    });

  /**/

  g.buildPlang("pl+visual-j-sharp")
    .merge({
      name: "Visual J#",
      websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/Visual_J_Sharp" }],
    })
    .addInfluences(["pl+java", "pl+visual-jpp"])
    .addParadigms(["para+objects", "para+structured", "para+imperative"])
    .addPlatforms(["platf+.net"]);

  /**/

  g.buildPlang("pl+visual-jpp").merge({
    name: "Visual J++",
    websites: [{ kind: "wikipedia", title: "J++", href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B" }],
  });

  /**/

  g.buildPlang("pl+visual-prolog")
    .merge({
      name: "Visual Prolog",
      websites: [{ kind: "wikipedia", title: "Visual Prolog", href: "https://en.wikipedia.org/wiki/Visual_Prolog" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Visual_Prolog_IDE_Screenshot.png/300px-Visual_Prolog_IDE_Screenshot.png",
        },
      ],
      releases: [{ version: "unknown", date: "1105-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog"])
    .addParadigms([
      "para+multi",
      "para+logic",
      "para+functional",
      "para+objects",
      "para+imperative",
      "para+dec",
      "para+generic",
      "para+concurrent",
    ])
    .addPlatforms(["platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+visual-studio-code").merge({
    name: "Visual Studio Code",
    websites: [
      { kind: "wikipedia", title: "Visual Studio Code", href: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    ],
  });

  /**/

  g.buildPlang("pl+visualworks")
    .merge({
      name: "VisualWorks",
      websites: [{ kind: "wikipedia", title: "VisualWorks", href: "https://en.wikipedia.org/wiki/VisualWorks" }],
    })
    .addInfluences(["pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+dan-ingalls", { role: "designer" })
    .addPerson("person+adele-goldberg", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+linux", "platf+win"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+vp-info")
    .merge({
      name: "VP-Info",
      websites: [{ kind: "wikipedia", title: "VP-Info", href: "https://en.wikipedia.org/wiki/VP-Info" }],
    })
    .addInfluences(["pl+dbase"]);

  /**/

  g.buildPlang("pl+vue.js")
    .merge({
      name: "Vue",
      websites: [{ kind: "wikipedia", title: "Vue", href: "https://en.wikipedia.org/wiki/Vue.js#Official_libraries" }],
    })
    .addInfluence("pl+elm", {
      refs: [
        {
          href: "https://vuejs.org/v2/guide/comparison.html#Scale",
          title: "Comparison with Other Frameworks — Vue.js",
        },
      ],
    });

  /**/

  g.buildPlang("pl+watbol").merge({
    name: "WATBOL",
    websites: [{ kind: "wikipedia", title: "WATBOL", href: "https://en.wikipedia.org/wiki/WATBOL" }],
  });

  /**/

  g.buildPlang("pl+watcom-c-compiler")
    .merge({
      name: "Open Watcom C/C++",
      websites: [{ kind: "wikipedia", title: "Open Watcom", href: "https://en.wikipedia.org/wiki/Watcom_C_compiler" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Watcom_logo.png" }],
      releases: [
        { version: "1.9", date: "2010-01-01", kind: "stable" },
        { version: "2.0", date: "2022-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+sybase-open-watcom-public"])
    .addPlatforms(["platf+x86", "platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+web")
    .merge({
      name: "WEB",
      websites: [{ kind: "wikipedia", title: "CWEB", href: "https://en.wikipedia.org/wiki/WEB" }],
      releases: [{ version: "3.67", date: "2006-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+web", "pl+tex"])
    .addPerson("person+donald-knuth", { role: "designer" })
    .addLicenses(["lic+free"])
    .addParadigms(["para+literate", "para+imperative", "para+structured"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"]);

  /**/

  g.buildPlang("pl+whiley")
    .merge({
      name: "Whiley",
      websites: [
        { kind: "wikipedia", title: "Whiley", href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)" },
      ],
      releases: [{ version: "0.6.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+java", "pl+c", "pl+python", "pl+rust"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+imperative", "para+functional"])
    .addTypeSystems(["tsys+strong", "tsys+safe", "tsys+structural", "tsys+flow-sensitive"]);

  /**/

  g.buildPlang("pl+wolfram")
    .merge({
      name: "Wolfram Language",
      websites: [
        { kind: "wikipedia", title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_Language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/1/17/Wolfram_Language_Logo_2016.svg" }],
      releases: [{ version: "14.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+wolfram-mathematica"])
    .addPerson("person+stephen-wolfram", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+term", "para+functional", "para+imperative", "para+array"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+wolfram-mathematica")
    .merge({
      name: "Wolfram Mathematica",
      websites: [
        { kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+mac", "platf+linux"])
    .addPlatform("platf+win", {
      refs: [
        {
          href: "https://www.wolfram.com/mathematica/system-requirements.html",
          title: "Mathematica 12 System Requirements and Platform Availability",
        },
      ],
    })
    .addPlatform("platf+rpi", {
      refs: [
        {
          href: "https://web.archive.org/web/20140509213354/http://www.theverge.com/2013/11/21/5130394/raspberry-pi-includes-mathematica-wolfram-language-free",
          title: "Raspberry Pi Includes Mathematica for Free",
        },
      ],
    });

  /**/

  g.buildPlang("pl+wolfram-systemmodeler")
    .merge({
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
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+x-slashopen").merge({
    name: "X/Open",
    websites: [{ kind: "wikipedia", title: "X/Open", href: "https://en.wikipedia.org/wiki/X/Open" }],
  });

  /**/

  g.buildPlang("pl+x10")
    .merge({
      name: "X10",
      websites: [{ kind: "wikipedia", title: "X10", href: "https://en.wikipedia.org/wiki/X10_(programming_language)" }],
      releases: [{ version: "2.6.2", date: "2019-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp", "pl+java"])
    .addLicenses(["lic+eclipse-public"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/

  g.buildPlang("pl+x86").merge({
    name: "x86",
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  /**/

  g.buildPlang("pl+xalan")
    .merge({
      name: "Xalan",
      websites: [{ kind: "wikipedia", title: "Apache Xalan", href: "https://en.wikipedia.org/wiki/Xalan" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Apache_Xalan_logo.svg" }],
      releases: [{ version: "2.7.3", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache"]);

  /**/

  g.buildPlang("pl+xaml").merge({
    name: "XAML",
    websites: [{ kind: "wikipedia", title: "XAML", href: "https://en.wikipedia.org/wiki/XAML" }],
  });

  /**/

  g.buildPlang("pl+xbase").merge({
    name: "xBase",
    websites: [{ kind: "wikipedia", title: "xBase", href: "https://en.wikipedia.org/wiki/XBase" }],
  });

  /**/

  g.buildPlang("pl+xcos")
    .merge({
      name: "Scilab",
      websites: [{ kind: "wikipedia", title: "Xcos", href: "https://en.wikipedia.org/wiki/Xcos" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
        },
      ],
      releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+dassault-systemes", { role: "developer" })
    .addLicenses(["lic+gpl-2", "lic+cecill"]);

  /**/

  g.buildPlang("pl+xedit").merge({
    name: "KEXX",
    websites: [{ kind: "wikipedia", title: "KEXX", href: "https://en.wikipedia.org/wiki/XEDIT#KEXX" }],
  });

  /**/

  g.buildPlang("pl+xharbour")
    .merge({
      name: "xHarbour",
      websites: [{ kind: "wikipedia", title: "xHarbour", href: "https://en.wikipedia.org/wiki/XHarbour" }],
    })
    .addInfluences(["pl+harbour"]);

  /**/

  g.buildPlang("pl+xod")
    .merge({
      name: "XOD",
      websites: [{ kind: "wikipedia", title: "XOD", href: "https://en.wikipedia.org/wiki/XOD_(programming_language)" }],
      releases: [{ version: "0.38.0", date: "2021-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gnu-affero-gpl"])
    .addParadigms(["para+dec", "para+dataflow", "para+functional", "para+visual"])
    .addPlatforms(["platf+arduino", "platf+rpi"]);

  /**/

  g.buildPlang("pl+xotcl")
    .merge({
      name: "XOTcl",
      websites: [
        { kind: "wikipedia", title: "XOTcl", href: "https://en.wikipedia.org/wiki/XOTcl" },
        { kind: "homepage", title: "media.wu-wien.ac.at", href: "http://media.wu-wien.ac.at/" },
      ],
      releases: [{ version: "1.6.8", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+tcl", "pl+otcl"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative", "para+event"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+xpl").merge({
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  /**/

  g.buildPlang("pl+xsb")
    .merge({
      name: "XSB",
      websites: [
        { kind: "wikipedia", title: "XSB", href: "https://en.wikipedia.org/wiki/XSB" },
        { kind: "homepage", title: "Sourceforge.net", href: "https://xsb.sourceforge.net/" },
      ],
      releases: [{ version: "5.0", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog"])
    .addParadigms(["para+logic"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+xtalk")
    .merge({
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
    })
    .addInfluences(["pl+pascal"])
    .addParadigms(["para+imperative", "para+event"]);

  /**/

  g.buildPlang("pl+xtend")
    .merge({
      name: "Xtend",
      websites: [{ kind: "wikipedia", title: "Xtend", href: "https://en.wikipedia.org/wiki/Xtend" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png" }],
      releases: [{ version: "2.25.0", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+java", "pl+scala", "pl+groovy", "pl+smalltalk"])
    .addLicenses(["lic+eclipse-public"])
    .addParadigms(["para+objects", "para+imperative", "para+functional"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/

  g.buildPlang("pl+yacc")
    .merge({
      name: "Yacc",
      websites: [{ kind: "wikipedia", title: "Yacc", href: "https://en.wikipedia.org/wiki/Yacc" }],
    })
    .addInfluences(["pl+tmg"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+yamazaki-mazak-corporation").merge({
    name: "Mazak",
    websites: [{ kind: "wikipedia", title: "Mazak", href: "https://en.wikipedia.org/wiki/Yamazaki_Mazak_Corporation" }],
  });

  /**/

  g.buildPlang("pl+yap")
    .merge({
      name: "YAP Prolog",
      websites: [{ kind: "wikipedia", title: "YAP", href: "https://en.wikipedia.org/wiki/YAP_(Prolog)" }],
      releases: [
        { version: "6.3.3", date: "2013-01-01", kind: "stable" },
        { version: "7.1", date: "2016-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+artistic"]);

  /**/

  g.buildPlang("pl+yarv")
    .merge({
      name: "YARV",
      websites: [{ kind: "wikipedia", title: "YARV", href: "https://en.wikipedia.org/wiki/YARV" }],
      releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+koichi-sasada", { role: "developer" })
    .addLicenses(["lic+ruby"]);

  /**/

  g.buildPlang("pl+yhc").merge({
    name: "Yhc",
    websites: [{ kind: "wikipedia", title: "Yhc", href: "https://en.wikipedia.org/wiki/Yhc" }],
  });

  /**/

  g.buildPlang("pl+yorick")
    .merge({
      name: "Yorick",
      websites: [
        { kind: "wikipedia", title: "Yorick", href: "https://en.wikipedia.org/wiki/Yorick_(programming_language)" },
      ],
      releases: [{ version: "2.2.04", date: "2015-01-01", kind: "stable" }],
    })
    .addPerson("person+david-h-munro", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addPlatforms(["platf+unix", "platf+mac", "platf+win"]);

  /**/

  g.buildPlang("pl+z-machine")
    .merge({
      name: "ZIL",
      websites: [{ kind: "wikipedia", title: "ZIL", href: "https://en.wikipedia.org/wiki/Z-machine" }],
    })
    .addInfluences(["pl+mdl"]);

  /**/

  g.buildPlang("pl+z-notation").merge({
    name: "Z",
    websites: [{ kind: "wikipedia", title: "Z", href: "https://en.wikipedia.org/wiki/Z_notation" }],
  });

  /**/

  g.buildPlang("pl+zend-engine")
    .merge({
      name: "Zend Engine",
      websites: [{ kind: "wikipedia", title: "Zend Engine", href: "https://en.wikipedia.org/wiki/Zend_Engine" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Zend_Engine_logo.png/120px-Zend_Engine_logo.png",
        },
      ],
      releases: [{ version: "3.4", kind: "stable" }],
    })
    .addLicenses(["lic+zend", "lic+php"]);

  /**/

  g.buildPlang("pl+zig")
    .merge({
      name: "Zig",
      websites: [{ kind: "wikipedia", title: "Zig", href: "https://en.wikipedia.org/wiki/Zig_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg" }],
      releases: [{ version: "0.13.0", date: "2024-01-01", kind: "preview" }],
    })
    .addInfluences(["pl+c"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+imperative", "para+concurrent", "para+functional"])
    .addPlatforms([
      "platf+x86-64",
      "platf+aarch64",
      "platf+wasm",
      "platf+arm",
      "platf+ia-32",
      "platf+risc-v",
      "platf+mips",
      "platf+power-isa",
      "platf+cross-platform",
      "platf+linux",
      "platf+bsd",
      "platf+win",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural", "tsys+generic"]);

  /**/

  g.buildPlang("pl+zonnon")
    .merge({
      name: "Zonnon",
      websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
    })
    .addInfluences(["pl+modula", "pl+oberon", "pl+oberon-2", "pl+pascal"])
    .addPerson("person+jurg-gutknecht", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+modular", "para+objects"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/
}
