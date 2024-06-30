import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
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
  g.buildPlang("pl+dataflow").merge({
    name: "dataflow",
    websites: [{ kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" }],
  });

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
  g.buildPlang("pl+jython")
    .merge({
      name: "Jython",
      websites: [{ kind: "wikipedia", title: "Jython", href: "https://en.wikipedia.org/wiki/Jython" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Jython.png" }],
      releases: [{ version: "2.7.3", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+python-foundation"])
    .addPlatforms(["platf+jvm"]);

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
  g.buildPlang("pl+kornshell").merge({
    name: "Ksh",
    websites: [{ kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" }],
  });

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
  g.buildPlang("pl+llvm").merge({
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

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
  g.buildPlang("pl+ms-macro-assembler")
    .merge({
      name: "Microsoft Macro Assembler",
      websites: [
        {
          kind: "wikipedia",
          title: "Microsoft Macro Assembler",
          href: "https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler",
        },
      ],
      releases: [{ version: "14.16.27023.1", date: "2702-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial", "lic+proprietary"]);

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
  g.buildPlang("pl+netwide-assembler")
    .merge({
      name: "NASM",
      websites: [{ kind: "wikipedia", title: "NASM", href: "https://en.wikipedia.org/wiki/Netwide_Assembler" }],
      images: [
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Netwide_Assembler.svg" },
      ],
      releases: [{ version: "2.16.03", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+h-peter-anvin", { role: "developer" })
    .addLicenses(["lic+bsd-s"]);

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
  g.buildPlang("pl+openmodelica")
    .merge({
      name: "OpenModelica",
      websites: [{ kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" }],
      releases: [{ version: "1.22.2", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+eclipse-public", "lic+gpl", "lic+free"]);

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
  g.buildPlang("pl+pact-i")
    .merge({
      name: "PACT I",
      websites: [{ kind: "wikipedia", title: "PACT I", href: "https://en.wikipedia.org/wiki/PACT_I" }],
    })
    .addInfluences(["pl+fortran", "pl+speedcoding"]);

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
  g.buildPlang("pl+ppc64").merge({
    name: "ppc64",
    websites: [{ kind: "wikipedia", title: "ppc64", href: "https://en.wikipedia.org/wiki/Ppc64" }],
  });

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
  g.buildPlang("pl+ravenscar-profile").merge({
    name: "Ravenscar profile",
    websites: [
      { kind: "wikipedia", title: "Ravenscar profile", href: "https://en.wikipedia.org/wiki/Ravenscar_profile" },
    ],
  });

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
  g.buildPlang("pl+rubinius")
    .merge({
      name: "Rubinius",
      websites: [{ kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" }],
      releases: [{ version: "5.0", date: "2020-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+mozilla-public"]);

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
  g.buildPlang("pl+scaleform-gfx").merge({
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

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
  g.buildPlang("pl+sympl")
    .merge({
      name: "SYMPL",
      websites: [{ kind: "wikipedia", title: "SYMPL", href: "https://en.wikipedia.org/wiki/SYMPL" }],
    })
    .addInfluences(["pl+jovial"]);

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
  g.buildPlang("pl+v8").merge({
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  /**/
  g.buildPlang("pl+vax")
    .merge({ name: "VAX", websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }] })
    .addInfluences(["pl+multilisp"]);

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
  g.buildPlang("pl+xpl").merge({
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  /**/
  g.buildPlang("pl+xtalk")
    .merge({
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
    })
    .addInfluences(["pl+pascal"])
    .addParadigms(["para+imperative", "para+event"]);

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
