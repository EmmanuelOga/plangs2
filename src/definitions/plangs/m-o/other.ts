import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+.ql").merge({
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  /**/

  g.buildPlang("pl+a-sharp")
    .merge({
      name: "A#",
      websites: [{ kind: "wikipedia", title: "A#", href: "https://en.wikipedia.org/wiki/A_Sharp_(.NET)" }],
    })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+.net", "platf+cross-platform"]);

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
      releases: [{ name: "Adobe AIR", version: "51.0.1.3", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "AgentCubes", version: "3.0", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+agentsheets", "pl+lisp", "pl+logo", "pl+smalltalk"])
    .addPerson("person+alexander-repenning", { role: "designer" })
    .addParadigms(["para+objects", "para+educational"]);

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
      releases: [{ name: "AmbientTalk", version: "2.19", date: "2011-01-01", kind: "stable" }],
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
      releases: [{ name: "Simcenter Amesim", version: "unknown", date: "2310-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+apache-flex")
    .merge({
      name: "Apache Flex",
      websites: [{ kind: "wikipedia", title: "Apache Flex", href: "https://en.wikipedia.org/wiki/Apache_Flex" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Apache_Flex_logo.svg" }],
      releases: [{ name: "Apache Flex", version: "4.16.1", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache", "lic+mozilla-public"]);

  /**/

  g.buildPlang("pl+apache-pig")
    .merge({
      name: "Apache Pig",
      websites: [{ kind: "wikipedia", title: "Apache Pig", href: "https://en.wikipedia.org/wiki/Apache_Pig" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Apache_Pig_Logo.svg" }],
      releases: [{ name: "Apache Pig", version: "0.17.0", date: "2017-01-01", kind: "stable" }],
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
      releases: [{ name: "MIT App Inventor", version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+cc", "lic+apache"]);

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

  g.buildPlang("pl+atscript")
    .merge({
      name: "AtScript",
      websites: [{ kind: "wikipedia", title: "AtScript", href: "https://en.wikipedia.org/wiki/AtScript" }],
    })
    .addInfluences(["pl+typescript"]);

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
        { name: "Axiom", version: "unknown", date: "2015-01-01", kind: "stable" },
        { name: "Axiom", version: "unknown", date: "2022-01-01", kind: "preview" },
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
      releases: [{ name: "Axum", version: "unknown", date: "2009-01-01", kind: "stable" }],
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

  g.buildPlang("pl+bash")
    .merge({
      name: "Bash",
      websites: [{ kind: "wikipedia", title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" }],
      releases: [{ name: "Bash", version: "5.2.21", date: "2023-01-01", kind: "stable" }],
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

  g.buildPlang("pl+bitcoin")
    .merge({
      name: "Bitcoin Script",
      websites: [
        { kind: "wikipedia", title: "Bitcoin Script", href: "https://en.wikipedia.org/wiki/Bitcoin#Transactions" },
      ],
    })
    .addInfluences(["pl+forth"]);

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
      releases: [{ name: "Blockly", version: "unknown", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+web"]);

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
      releases: [{ name: "Boomerang", version: "0.2", date: "2009-01-01", kind: "stable" }],
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
    .addInfluences(["pl+common-lisp", "pl+scheme"])
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
      releases: [{ name: "Mesa[1]", version: "6.0", date: "1981-01-01", kind: "stable" }],
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
      releases: [{ name: "CH C/C++ interpreter", version: "8.0.0", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary", "lic+freeware", "lic+trialware"])
    .addPlatforms(["platf+x86"]);

  /**/

  g.buildPlang("pl+chakra").merge({
    name: "Chakra",
    websites: [{ kind: "wikipedia", title: "Chakra", href: "https://en.wikipedia.org/wiki/Chakra_(JScript_engine)" }],
  });

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
      releases: [{ name: "CHILL", version: "3.0", date: "2003-01-01", kind: "stable" }],
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

  g.buildPlang("pl+clarion")
    .merge({
      name: "Clarion",
      websites: [
        { kind: "wikipedia", title: "Clarion", href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)" },
      ],
      releases: [{ name: "Clarion", version: "unknown", date: "2018-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+ia-32", "platf+dos", "platf+win"]);

  /**/

  g.buildPlang("pl+clipper")
    .merge({
      name: "Clipper",
      websites: [
        { kind: "wikipedia", title: "Clipper", href: "https://en.wikipedia.org/wiki/Clipper_(programming_language)" },
      ],
      releases: [{ name: "Clipper", version: "5.3", date: "1997-01-01", kind: "stable" }],
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

  g.buildPlang("pl+clozure-cl")
    .merge({
      name: "Clozure CL",
      websites: [{ kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" }],
      releases: [{ name: "Clozure CL", version: "1.12.2", date: "2023-01-01", kind: "stable" }],
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
      releases: [{ name: "CMUCL", version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+public-domain"])
    .addPlatforms(["platf+cross-platform"]);

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

  g.buildPlang("pl+comtran")
    .merge({
      name: "COMTRAN",
      websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
    })
    .addInfluences(["pl+flow-matic"])
    .addPerson("person+bob-bemer", { role: "developer" });

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
      releases: [{ name: "Coq (software)", version: "8.19.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ml", "pl+ocaml"])
    .addLicenses(["lic+lgpl"]);

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

  g.buildPlang("pl+csound")
    .merge({
      name: "Csound",
      websites: [{ kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" }],
      releases: [{ name: "Csound", version: "6.18.1", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+lgpl"]);

  /**/

  g.buildPlang("pl+csp").merge({
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

  g.buildPlang("pl+cuda").merge({
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  /**/

  g.buildPlang("pl+cyclone")
    .merge({
      name: "Cyclone",
      websites: [
        { kind: "wikipedia", title: "Cyclone", href: "https://en.wikipedia.org/wiki/Cyclone_(programming_language)" },
      ],
      releases: [{ name: "Cyclone", version: "1.0", date: "2006-01-01", kind: "stable" }],
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
      releases: [{ name: "Dafny", version: "3.7.2", date: "2022-01-01", kind: "stable" }],
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
      releases: [{ name: "DataFlex", version: "24.0", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "DIBOL", version: "unknown", date: "1992-01-01", kind: "stable" }],
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
      releases: [{ name: "Dymola", version: "unknown", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+dassault-systemes", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+x86-64"]);

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
      releases: [{ name: "Easy Programming Language", version: "5.95", date: "2023-01-01", kind: "stable" }],
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
      releases: [
        { name: "ECLiPSe Constraint Logic Programming System", version: "7.0", date: "2018-01-01", kind: "stable" },
      ],
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

  g.buildPlang("pl+esoteric").merge({
    name: "FALSE",
    websites: [
      { kind: "wikipedia", title: "FALSE", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language#FALSE" },
    ],
  });

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

  g.buildPlang("pl+faust")
    .merge({
      name: "FAUST",
      websites: [
        { kind: "wikipedia", title: "FAUST", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)" },
      ],
      releases: [{ name: "FAUST", version: "2.60.3", date: "2023-01-01", kind: "stable" }],
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

  g.buildPlang("pl+flacc").merge({
    name: "FLACC",
    websites: [{ kind: "wikipedia", title: "FLACC", href: "https://en.wikipedia.org/wiki/FLACC" }],
  });

  /**/

  g.buildPlang("pl+flutter")
    .merge({
      name: "Flutter",
      websites: [{ kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
      releases: [{ name: "Flutter", version: "3.22.0", date: "2024-01-01", kind: "stable" }],
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

  g.buildPlang("pl+game-maker")
    .merge({
      name: "GameMaker",
      websites: [{ kind: "wikipedia", title: "GameMaker", href: "https://en.wikipedia.org/wiki/Game_Maker_Language" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4b/GameMaker_Logo.svg" }],
      releases: [{ name: "GameMaker", version: "2024.4.1", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

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

  g.buildPlang("pl+gforth")
    .merge({
      name: "Gforth",
      websites: [{ kind: "wikipedia", title: "Gforth", href: "https://en.wikipedia.org/wiki/Gforth" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" }],
      releases: [
        { name: "Gforth", version: "0.7.3", date: "2014-01-01", kind: "stable" },
        { name: "Gforth", version: "0.7.9", date: "2020-01-01", kind: "preview" },
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
      releases: [{ name: "GNAT", version: "9.2", date: "2019-08-12", kind: "stable" }],
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
      releases: [{ name: "GNU Data Language", version: "1.0.5", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+gnu-guile")
    .merge({
      name: "Guile",
      websites: [{ kind: "wikipedia", title: "GNU Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg" }],
      releases: [{ name: "GNU Guile", version: "3.0.9", date: "2023-01-01", kind: "stable" }],
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

  g.buildPlang("pl+gnu-octave")
    .merge({
      name: "GNU Octave",
      websites: [{ kind: "wikipedia", title: "GNU Octave", href: "https://en.wikipedia.org/wiki/GNU_Octave" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" }],
      releases: [{ name: "GNU Octave", version: "9.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+gofer").merge({
    name: "Gofer",
    websites: [
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(software)" },
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(programming_language)" },
    ],
  });

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
      releases: [{ name: "Hamilton C shell", version: "5.2", date: "2017-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial", "lic+proprietary"]);

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
      releases: [{ name: "HHVM", version: "3.15.0", date: "2016-01-01", kind: "stable" }],
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
      releases: [{ name: "HollywoodHollywood Designer", version: "6.0", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

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

  g.buildPlang("pl+inferno")
    .merge({
      name: "Inferno",
      websites: [
        { kind: "wikipedia", title: "Inferno", href: "https://en.wikipedia.org/wiki/Inferno_(operating_system)" },
      ],
    })
    .addInfluences(["pl+rc"]);

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
    releases: [{ name: "Intel Array Building Blocks", version: "1.0", date: "2011-01-01", kind: "preview" }],
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
      releases: [{ name: "Parallel Building Blocks", version: "unknown", date: "2010-01-01", kind: "stable" }],
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
      releases: [{ name: "Io", version: "unknown", date: "2017-01-01", kind: "stable" }],
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
    .addInfluences(["pl+c-sharp", "pl+java", "pl+visual-jpp"])
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

  g.buildPlang("pl+jena").merge({
    name: "Jena",
    websites: [{ kind: "wikipedia", title: "Jena", href: "https://en.wikipedia.org/wiki/Jena_(framework)" }],
  });

  /**/

  g.buildPlang("pl+jmodelica.org")
    .merge({
      name: "JModelica.org",
      websites: [{ kind: "wikipedia", title: "JModelica.org", href: "https://en.wikipedia.org/wiki/JModelica.org" }],
      releases: [{ name: "JModelica.org", version: "2.10", date: "2019-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

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

  g.buildPlang("pl+joy")
    .merge({
      name: "Joy",
      websites: [{ kind: "wikipedia", title: "Joy", href: "https://en.wikipedia.org/wiki/Joy_(programming_language)" }],
      releases: [{ name: "Joy", version: "unknown", date: "2003-01-01", kind: "stable" }],
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
      releases: [{ name: "JScript", version: "9.0", date: "2011-01-01", kind: "stable" }],
      extensions: [".asp", ".hta", ".htm", ".html", ".js", ".jse", ".wsc", ".wsf"],
    })
    .addImplementations(["pl+active-scripting", "pl+jscript-.net"])
    .addPlatforms(["platf+win"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

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
      releases: [{ name: "Kivy", version: "2.3.0", date: "2024-01-01", kind: "stable" }],
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
    releases: [{ name: "Kodu Game Lab", version: "1.6.18.0", date: "2023-01-01", kind: "stable" }],
  });

  /**/

  g.buildPlang("pl+kornshell")
    .merge({
      name: "Ksh",
      websites: [
        { kind: "wikipedia", title: "Korn Shell", href: "https://en.wikipedia.org/wiki/Korn_Shell" },
        { kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" },
      ],
    })
    .addInfluences(["pl+awk"]);

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
      releases: [{ name: "LabVIEW", version: "5.1", date: "2023-01-01", kind: "stable" }],
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

  g.buildPlang("pl+lpc")
    .merge({
      name: "LPC",
      websites: [{ kind: "wikipedia", title: "LPC", href: "https://en.wikipedia.org/wiki/LPC_(programming_language)" }],
    })
    .addInfluences(["pl+c"]);

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
      releases: [{ name: "Magma", version: "2.27", date: "2023-01-01", kind: "stable" }],
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
      releases: [{ name: "Maple", version: "unknown", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "Max", version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+maxima")
    .merge({
      name: "Maxima",
      websites: [{ kind: "wikipedia", title: "Maxima", href: "https://en.wikipedia.org/wiki/Maxima_(software)" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg" }],
      releases: [{ name: "Maxima", version: "5.47.0", date: "2023-01-01", kind: "stable" }],
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

  g.buildPlang("pl+mesa")
    .merge({
      name: "Mesa",
      websites: [
        { kind: "wikipedia", title: "Mesa", href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)" },
      ],
      releases: [{ name: "Mesa[1]", version: "6.0", date: "1981-01-01", kind: "stable" }],
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

  g.buildPlang("pl+mono").merge({
    name: "Mono",
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  /**/

  g.buildPlang("pl+moose")
    .merge({
      name: "Moose",
      websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
    })
    .addInfluences(["pl+common-lisp"]);

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

  g.buildPlang("pl+nesl")
    .merge({
      name: "NESL",
      websites: [{ kind: "wikipedia", title: "NESL", href: "https://en.wikipedia.org/wiki/NESL" }],
      releases: [{ name: "NESL", version: "3.1", date: "1995-01-01", kind: "stable" }],
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

  g.buildPlang("pl+newp")
    .merge({
      name: "NEWP",
      websites: [{ kind: "wikipedia", title: "NEWP", href: "https://en.wikipedia.org/wiki/NEWP" }],
      releases: [{ name: "NEWP", version: "17.0", date: "2015-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+executive-systems-problem-oriented", "pl+algol"])
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

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
      releases: [{ name: "Nix", version: "2.22.1", date: "2024-01-01", kind: "stable" }],
    })
    .addPlatforms(["platf+linux", "platf+unix"]);

  /**/

  g.buildPlang("pl+noweb")
    .merge({
      name: "noweb",
      websites: [{ kind: "wikipedia", title: "Noweb", href: "https://en.wikipedia.org/wiki/Noweb" }],
      releases: [{ name: "Noweb", version: "2.12", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+web"]);

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
      releases: [{ name: "Open Programming Language (OPL)", version: "1.56", date: "2006-01-01", kind: "stable" }],
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
    releases: [{ name: "OpenACC", version: "3.2", date: "2021-01-01", kind: "stable" }],
  });

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
    releases: [
      { name: "OpenEdge Advanced Business Language (ABL)", version: "12.8", date: "2024-01-01", kind: "stable" },
    ],
  });

  /**/

  g.buildPlang("pl+openmodelica")
    .merge({
      name: "OpenModelica",
      websites: [{ kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" }],
      releases: [{ name: "OpenModelica", version: "1.22.2", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "OpenMP", version: "5.2", date: "2021-01-01", kind: "stable" }],
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
    releases: [{ name: "Oracle Developer Studio", version: "12.6", date: "2017-01-01", kind: "stable" }],
  });

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
    .addInfluences(["pl+c-sharp", "pl+delphi", "pl+pascal"])
    .addLicenses(["lic+trialware"])
    .addPlatforms(["platf+.net", "platf+jvm", "platf+win", "platf+linux", "platf+wasm"]);

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
      releases: [{ name: "P4", version: "1.2.2", date: "2021-01-01", kind: "stable" }],
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

  g.buildPlang("pl+pari-slashgp")
    .merge({
      name: "PARI/GP",
      websites: [{ kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      releases: [{ name: "PARI/GP", version: "2.15.5", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "Max", version: "8.6.2", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+pathscale")
    .merge({
      name: "PathScale EKOPath Compiler",
      websites: [{ kind: "wikipedia", title: "PathScale", href: "https://en.wikipedia.org/wiki/PathScale" }],
      releases: [{ name: "PathScale EKOPath Compiler", version: "5.0.0", date: "2013-01-01", kind: "stable" }],
    })
    .addPlatforms(["platf+x86-64"]);

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

  g.buildPlang("pl+pgi-compiler").merge({
    name: "PGI",
    websites: [{ kind: "wikipedia", title: "PGI", href: "https://en.wikipedia.org/wiki/PGI_compiler" }],
  });

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
      releases: [{ name: "PL/C", version: "7.6", date: "1977-01-01", kind: "stable" }],
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
      releases: [{ name: "Standard ML", version: "unknown", date: "1997-01-01", kind: "stable" }],
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

  g.buildPlang("pl+poplog")
    .merge({
      name: "Poplog",
      websites: [{ kind: "wikipedia", title: "Poplog", href: "https://en.wikipedia.org/wiki/Poplog" }],
      releases: [{ name: "Poplog", version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"])
    .addPlatforms(["platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+portable-c-compiler")
    .merge({
      name: "Portable C Compiler",
      websites: [{ kind: "wikipedia", title: "pcc", href: "https://en.wikipedia.org/wiki/Portable_C_Compiler" }],
      releases: [{ name: "Portable C Compiler", version: "1.1.0", date: "2014-01-01", kind: "stable" }],
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
        { name: "POV-Ray", version: "unknown", date: "1991-01-01", kind: "first" },
        { name: "POV-Ray", version: "3.7.0.0", date: "2013-01-01", kind: "stable" },
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
      releases: [{ name: "Appeon PowerBuilder", version: "unknown", date: "2022-01-01", kind: "stable" }],
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

  g.buildPlang("pl+profile-scripting")
    .merge({
      name: "Profile Scripting Language",
      websites: [{ kind: "wikipedia", title: "PSL", href: "https://en.wikipedia.org/wiki/Profile_Scripting_Language" }],
    })
    .addInfluences(["pl+mumps"])
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+cross-platform"]);

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
      releases: [{ name: "PROMAL", version: "2.1", date: "1986-10-14", kind: "stable" }],
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
      releases: [{ name: "QB64", version: "2.0.2", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+win", "platf+linux", "platf+mac"]);

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

  g.buildPlang("pl+rapid")
    .merge({
      name: "RAPID",
      websites: [{ kind: "wikipedia", title: "RAPID", href: "https://en.wikipedia.org/wiki/RAPID" }],
    })
    .addInfluences(["pl+c"]);

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

  g.buildPlang("pl+react")
    .merge({
      name: "React",
      websites: [
        { kind: "wikipedia", title: "React JS", href: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" }],
      releases: [
        { name: "React", version: "18.3.1", date: "2024-01-01", kind: "stable" },
        { name: "React", version: "19.0", date: "2024-01-01", kind: "preview" },
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
      releases: [{ name: "Reason", version: "3.11.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ocaml", "pl+javascript"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+modular", "para+objects"]);

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
      releases: [{ name: ".NET Compiler Platform (Roslyn)", version: "7.0.0", date: "2022-01-01", kind: "stable" }],
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
      releases: [{ name: "S-Lang", version: "2.3.3", date: "2022-01-01", kind: "stable" }],
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
      releases: [{ name: "S-PLUS", version: "8.2", date: "2010-01-01", kind: "stable" }],
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
      releases: [{ name: "SAS", version: "9.4", date: "2023-01-01", kind: "stable" }],
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
      releases: [{ name: "SBCL", version: "2.4.5", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+public-domain", "lic+mit", "lic+bsd"])
    .addPlatforms(["platf+cross-platform"]);

  /**/

  g.buildPlang("pl+scaleform-gfx").merge({
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  /**/

  g.buildPlang("pl+scicos").merge({
    name: "Scicos",
    websites: [
      { kind: "wikipedia", title: "Scicos", href: "https://en.wikipedia.org/wiki/Scicos" },
      { kind: "homepage", title: "www.scicos.org", href: "http://www.scicos.org" },
    ],
    releases: [{ name: "Scicos", version: "4.4.1", date: "2011-01-01", kind: "stable" }],
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
      releases: [{ name: "Scilab", version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+dassault-systemes", { role: "developer" })
    .addLicenses(["lic+gpl-2", "lic+cecill"]);

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

  g.buildPlang("pl+semi-automatic-ground-environment").merge({
    name: "SAGE",
    websites: [
      { kind: "wikipedia", title: "SAGE", href: "https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment" },
    ],
  });

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
      releases: [
        { name: "Silverfrost FTN95: Fortran for Windows", version: "9.00", date: "2023-01-01", kind: "stable" },
      ],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+simscript").merge({
    name: "Simscript",
    websites: [{ kind: "wikipedia", title: "Simscript", href: "https://en.wikipedia.org/wiki/Simscript" }],
  });

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
      releases: [{ name: "SimulationX", version: "4.3", date: "2022-01-01", kind: "stable" }],
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
      releases: [{ name: "Simulink", version: "10.7", date: "2023-01-01", kind: "stable" }],
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
    .addInfluences(["pl+scheme", "pl+common-lisp"])
    .addParadigms(["para+functional", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+small-c").merge({
    name: "Small-C",
    websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
  });

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
      releases: [{ name: "Stata", version: "18.0", date: "2023-01-01", kind: "stable" }],
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
      releases: [{ name: "Stateflow", version: "unknown", date: "2018-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+x64"]);

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

  g.buildPlang("pl+subl")
    .merge({
      name: "SubL",
      websites: [{ kind: "wikipedia", title: "SubL", href: "https://en.wikipedia.org/wiki/SubL" }],
    })
    .addInfluences(["pl+common-lisp"]);

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
      releases: [{ name: "Sysquake", version: "6.5", date: "2019-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+proprietary"]);

  /**/

  g.buildPlang("pl+tads")
    .merge({
      name: "TADS",
      websites: [{ kind: "wikipedia", title: "TADS", href: "https://en.wikipedia.org/wiki/TADS" }],
      releases: [{ name: "TADS", version: "3.1.3", date: "2013-01-01", kind: "stable" }],
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
      releases: [{ name: "TeX", version: "unknown", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "Threading Building Blocks", version: "2021.8", date: "2021-01-01", kind: "stable" }],
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
      releases: [{ name: "Tom", version: "2.10", date: "2013-03-21", kind: "stable" }],
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

  g.buildPlang("pl+trueimage").merge({
    name: "TrueImage",
    websites: [{ kind: "wikipedia", title: "TrueImage", href: "https://en.wikipedia.org/wiki/TrueImage" }],
  });

  /**/

  g.buildPlang("pl+ttm")
    .merge({
      name: "TTM",
      websites: [{ kind: "wikipedia", title: "TTM", href: "https://en.wikipedia.org/wiki/TTM_(programming_language)" }],
    })
    .addInfluences(["pl+trac"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+macros"]);

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

  g.buildPlang("pl+uniface")
    .merge({
      name: "Uniface",
      websites: [
        { kind: "wikipedia", title: "Uniface", href: "https://en.wikipedia.org/wiki/Uniface_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_Payoff_RGB.svg" }],
      releases: [{ name: "Uniface", version: "10.4.01.018", date: "2022-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+commercial"]);

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

  g.buildPlang("pl+v8").merge({
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  /**/

  g.buildPlang("pl+vax")
    .merge({ name: "VAX", websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }] })
    .addInfluences(["pl+multilisp"]);

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
      releases: [{ name: "DataFlex", version: "24.0", date: "2024-01-01", kind: "stable" }],
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
        { name: "Open Watcom C/C++", version: "1.9", date: "2010-01-01", kind: "stable" },
        { name: "Open Watcom C/C++", version: "2.0", date: "2022-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+sybase-open-watcom-public"])
    .addPlatforms(["platf+x86", "platf+ia-32", "platf+x86-64"]);

  /**/

  g.buildPlang("pl+x-slashopen").merge({
    name: "X/Open",
    websites: [{ kind: "wikipedia", title: "X/Open", href: "https://en.wikipedia.org/wiki/X/Open" }],
  });

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
      releases: [{ name: "Apache Xalan", version: "2.7.3", date: "2023-01-01", kind: "stable" }],
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
      releases: [{ name: "Scilab", version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "XOD", version: "0.38.0", date: "2021-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gnu-affero-gpl"])
    .addParadigms(["para+dec", "para+dataflow", "para+functional", "para+visual"])
    .addPlatforms(["platf+arduino", "platf+rpi"]);

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
        { name: "YAP Prolog", version: "6.3.3", date: "2013-01-01", kind: "stable" },
        { name: "YAP Prolog", version: "7.1", date: "2016-01-01", kind: "preview" },
      ],
    })
    .addLicenses(["lic+artistic"]);

  /**/

  g.buildPlang("pl+yarv")
    .merge({
      name: "YARV",
      websites: [{ kind: "wikipedia", title: "YARV", href: "https://en.wikipedia.org/wiki/YARV" }],
      releases: [{ name: "YARV", version: "3.3.3", date: "2024-01-01", kind: "stable" }],
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
      releases: [{ name: "Yorick", version: "2.2.04", date: "2015-01-01", kind: "stable" }],
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
    })
    .addLicenses(["lic+zend", "lic+php"]);

  /**/

  g.buildPlang("pl+zpl")
    .merge({
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
    })
    .addInfluences(["pl+c"])
    .addParadigms(["para+array"]);

  /**/
}
