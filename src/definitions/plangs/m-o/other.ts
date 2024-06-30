import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+.net-framework").merge({
    name: ".NET Framework",
    websites: [{ kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" }],
  });

  g.buildPlang("pl+.net-framework-sdk").merge({
    name: ".NET Framework SDK",
    websites: [
      { kind: "wikipedia", title: ".NET Framework SDK", href: "https://en.wikipedia.org/wiki/.NET_Framework_SDK" },
    ],
  });

  g.buildPlang("pl+.ql").merge({
    name: ".QL",
    websites: [{ kind: "wikipedia", title: ".QL", href: "https://en.wikipedia.org/wiki/.QL" }],
  });

  g.buildPlang("pl+a-").merge({
    name: "A#",
    websites: [{ kind: "wikipedia", title: "A♯", href: "https://en.wikipedia.org/wiki/A%E2%99%AF_(Axiom)" }],
    releases: [
      { version: "unknown", date: "2008-01-01", kind: "stable" },
      { version: "unknown", date: "2014-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+a-sharp").merge({
    name: "A#",
    websites: [{ kind: "wikipedia", title: "A#", href: "https://en.wikipedia.org/wiki/A_Sharp_(.NET)" }],
  });

  g.buildPlang("pl+abap").merge({
    name: "ABAP/4",
    websites: [{ kind: "wikipedia", title: "ABAP/4", href: "https://en.wikipedia.org/wiki/ABAP" }],
    releases: [{ version: "7.58", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+abc").merge({
    name: "ABC",
    websites: [{ kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" }],
    releases: [{ version: "1.05.02", date: "1990-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+action-").merge({
    name: "Action!",
    websites: [
      { kind: "wikipedia", title: "Action!", href: "https://en.wikipedia.org/wiki/Action!_(programming_language)" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Actionscr.png/220px-Actionscr.png" },
    ],
  });

  g.buildPlang("pl+active-scripting").merge({
    name: "Active Scripting",
    websites: [
      { kind: "wikipedia", title: "Active Scripting", href: "https://en.wikipedia.org/wiki/Active_Scripting" },
    ],
  });

  g.buildPlang("pl+active-server-pages").merge({
    name: "ASP",
    websites: [{ kind: "wikipedia", title: "ASP", href: "https://en.wikipedia.org/wiki/Active_Server_Pages" }],
  });

  g.buildPlang("pl+actor-based-concurrent").merge({
    name: "ABCL",
    websites: [
      { kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Actor-Based_Concurrent_Language" },
    ],
  });

  g.buildPlang("pl+actor-model").merge({
    name: "actor model",
    websites: [{ kind: "wikipedia", title: "Actors", href: "https://en.wikipedia.org/wiki/Actor_model" }],
  });

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

  g.buildPlang("pl+adobe-air").merge({
    name: "Adobe AIR",
    websites: [{ kind: "wikipedia", title: "Adobe AIR", href: "https://en.wikipedia.org/wiki/Adobe_AIR" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Adobe_AIR_logo.svg" }],
    releases: [
      { version: "51.0.1.3", date: "2024-01-01", kind: "stable" },
      { version: "33.1.1.932", kind: "preview" },
    ],
  });

  g.buildPlang("pl+adobe-flash-player").merge({
    name: "Adobe Flash Player",
    websites: [
      { kind: "wikipedia", title: "Adobe Flash Player", href: "https://en.wikipedia.org/wiki/Adobe_Flash_Player" },
    ],
  });

  g.buildPlang("pl+advpl").merge({
    name: "AdvPL",
    websites: [{ kind: "wikipedia", title: "AdvPL", href: "https://en.wikipedia.org/wiki/AdvPL" }],
  });

  g.buildPlang("pl+agentcubes").merge({
    name: "AgentCubes",
    websites: [{ kind: "wikipedia", title: "AgentCubes", href: "https://en.wikipedia.org/wiki/AgentCubes" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AgentCubes_user_interface.png/121px-AgentCubes_user_interface.png",
      },
    ],
    releases: [{ version: "3.0", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+agentsheets").merge({
    name: "AgentSheets",
    websites: [{ kind: "wikipedia", title: "AgentSheets", href: "https://en.wikipedia.org/wiki/AgentSheets" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Agentsheets_IDE.jpg" }],
    releases: [{ version: "4.0", date: "2014-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+agora").merge({
    name: "Agora",
    websites: [
      { kind: "wikipedia", title: "Agora", href: "https://en.wikipedia.org/wiki/Agora_(programming_language)" },
    ],
  });

  g.buildPlang("pl+aimaco").merge({
    name: "AIMACO",
    websites: [{ kind: "wikipedia", title: "AIMACO", href: "https://en.wikipedia.org/wiki/AIMACO" }],
  });

  g.buildPlang("pl+akka").merge({
    name: "Akka",
    websites: [{ kind: "wikipedia", title: "Akka", href: "https://en.wikipedia.org/wiki/Akka_(toolkit)" }],
  });

  g.buildPlang("pl+aldor").merge({
    name: "Aldor",
    websites: [{ kind: "wikipedia", title: "Aldor", href: "https://en.wikipedia.org/wiki/Aldor" }],
    releases: [
      { version: "1.0.3", kind: "stable" },
      { version: "1.1.0", kind: "preview" },
    ],
  });

  g.buildPlang("pl+alef").merge({
    name: "Alef",
    websites: [{ kind: "wikipedia", title: "Alef", href: "https://en.wikipedia.org/wiki/Alef_(programming_language)" }],
  });

  g.buildPlang("pl+alf").merge({
    name: "ALF",
    websites: [{ kind: "wikipedia", title: "ALF", href: "https://en.wikipedia.org/wiki/ALF_(proof_assistant)" }],
  });

  g.buildPlang("pl+algebraic-logic-functional").merge({
    name: "ALF",
    websites: [
      {
        kind: "wikipedia",
        title: "ALF",
        href: "https://en.wikipedia.org/wiki/Algebraic_Logic_Functional_programming_language",
      },
    ],
  });

  g.buildPlang("pl+alice").merge({
    name: "Alice",
    websites: [
      { kind: "wikipedia", title: "Alice", href: "https://en.wikipedia.org/wiki/Alice_(programming_language)" },
    ],
    releases: [{ version: "1.4", date: "2007-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+alma-0").merge({
    name: "Alma-0",
    websites: [{ kind: "wikipedia", title: "Alma-0", href: "https://en.wikipedia.org/wiki/Alma-0" }],
  });

  g.buildPlang("pl+alphard").merge({
    name: "Alphard",
    websites: [
      { kind: "wikipedia", title: "Alphard", href: "https://en.wikipedia.org/wiki/Alphard_(programming_language)" },
    ],
  });

  g.buildPlang("pl+ambienttalk").merge({
    name: "AmbientTalk",
    websites: [{ kind: "wikipedia", title: "AmbientTalk", href: "https://en.wikipedia.org/wiki/AmbientTalk" }],
    releases: [{ version: "2.19", date: "2011-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+amesim").merge({
    name: "AMESim",
    websites: [{ kind: "wikipedia", title: "Simcenter Amesim", href: "https://en.wikipedia.org/wiki/AMESim" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg" }],
    releases: [{ version: "unknown", date: "2310-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ampl").merge({
    name: "AMPL",
    websites: [{ kind: "wikipedia", title: "AMPL", href: "https://en.wikipedia.org/wiki/AMPL" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/b6/AMPL_%28textbook_cover%29.jpg" }],
    releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ansi-c").merge({
    name: "ANSI C",
    websites: [{ kind: "wikipedia", title: "ANSI C", href: "https://en.wikipedia.org/wiki/ANSI_C" }],
  });

  g.buildPlang("pl+ap").merge({
    name: "A+",
    websites: [{ kind: "wikipedia", title: "A+", href: "https://en.wikipedia.org/wiki/A%2B_(programming_language)" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Aplus_logo.jpg/121px-Aplus_logo.jpg" },
    ],
    releases: [{ version: "4.22", date: "2008-01-01", kind: "stable" }],
    extensions: [".+", "..", ".a", ".m"],
  });

  g.buildPlang("pl+apache-flex").merge({
    name: "Apache Flex",
    websites: [{ kind: "wikipedia", title: "Apache Flex", href: "https://en.wikipedia.org/wiki/Apache_Flex" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Apache_Flex_logo.svg" }],
    releases: [{ version: "4.16.1", date: "2017-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+apache-groovy").merge({
    name: "Apache Groovy",
    websites: [{ kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Apache_Groovy" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
    releases: [{ version: "4.0.0", date: "2021-01-01", kind: "preview" }],
    extensions: [".groovy", ".gsh", ".gvy", ".gy"],
  });

  g.buildPlang("pl+apache-pig").merge({
    name: "Apache Pig",
    websites: [{ kind: "wikipedia", title: "Apache Pig", href: "https://en.wikipedia.org/wiki/Apache_Pig" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Apache_Pig_Logo.svg" }],
    releases: [{ version: "0.17.0", date: "2017-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+app-inventor-for-android").merge({
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
  });

  g.buildPlang("pl+applescript").merge({
    name: "AppleScript",
    websites: [{ kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" }],
    releases: [{ version: "2.8", date: "2014-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+apt").merge({
    name: "APT",
    websites: [{ kind: "wikipedia", title: "APT", href: "https://en.wikipedia.org/wiki/APT_(programming_language)" }],
  });

  g.buildPlang("pl+arexx").merge({
    name: "ARexx",
    websites: [{ kind: "wikipedia", title: "ARexx", href: "https://en.wikipedia.org/wiki/ARexx" }],
  });

  g.buildPlang("pl+argus").merge({
    name: "Argus",
    websites: [
      { kind: "wikipedia", title: "Argus", href: "https://en.wikipedia.org/wiki/Argus_(programming_language)" },
    ],
  });

  g.buildPlang("pl+arith-matic").merge({
    name: "ARITH-MATIC",
    websites: [{ kind: "wikipedia", title: "ARITH-MATIC", href: "https://en.wikipedia.org/wiki/ARITH-MATIC" }],
  });

  g.buildPlang("pl+arkts").merge({
    name: "ArkTS",
    websites: [{ kind: "wikipedia", title: "ArkTS", href: "https://en.wikipedia.org/wiki/ArkTS" }],
    releases: [{ version: "4.1.7.3", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+arm-architecture-family").merge({
    name: "ARM",
    websites: [{ kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" }],
  });

  g.buildPlang("pl+arpanet").merge({
    name: "ARPAnet",
    websites: [{ kind: "wikipedia", title: "ARPAnet", href: "https://en.wikipedia.org/wiki/ARPAnet" }],
  });

  g.buildPlang("pl+asp.net").merge({
    name: "ASP.NET",
    websites: [{ kind: "wikipedia", title: "ASP.NET (software)", href: "https://en.wikipedia.org/wiki/ASP.NET" }],
    releases: [{ version: "4.8.1", date: "2022-01-01", kind: "stable" }],
    extensions: [".aspx", ".cshtml", ".vbhtml"],
  });

  g.buildPlang("pl+atlas-autocode").merge({
    name: "Atlas Autocode",
    websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
  });

  g.buildPlang("pl+ats").merge({
    name: "ATS",
    websites: [{ kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
    releases: [{ version: "0.4.2", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+atscript").merge({
    name: "AtScript",
    websites: [{ kind: "wikipedia", title: "AtScript", href: "https://en.wikipedia.org/wiki/AtScript" }],
  });

  g.buildPlang("pl+autoit").merge({
    name: "AutoIt",
    websites: [{ kind: "wikipedia", title: "AutoIt", href: "https://en.wikipedia.org/wiki/AutoIt" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Autoitlogo.png/121px-Autoitlogo.png" },
    ],
    releases: [{ version: "3.3.16.1", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+awk").merge({
    name: "AWK",
    websites: [{ kind: "wikipedia", title: "AWK", href: "https://en.wikipedia.org/wiki/AWK" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The-AWK-Programming-Language.svg" },
    ],
    releases: [{ version: "1003.1", date: "1003-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+axiom").merge({
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
  });

  g.buildPlang("pl+b").merge({
    name: "B",
    websites: [{ kind: "wikipedia", title: "B", href: "https://en.wikipedia.org/wiki/B_(programming_language)" }],
  });

  g.buildPlang("pl+b-prolog").merge({
    name: "B-Prolog",
    websites: [{ kind: "wikipedia", title: "B-Prolog", href: "https://en.wikipedia.org/wiki/B-Prolog" }],
  });

  g.buildPlang("pl+bazel").merge({
    name: "Starlark",
    websites: [{ kind: "wikipedia", title: "Starlark", href: "https://en.wikipedia.org/wiki/Bazel_(software)" }],
  });

  g.buildPlang("pl+bc").merge({
    name: "bc",
    websites: [{ kind: "wikipedia", title: "bc", href: "https://en.wikipedia.org/wiki/Bc_(programming_language)" }],
  });

  g.buildPlang("pl+bcpl").merge({
    name: "BCPL",
    websites: [{ kind: "wikipedia", title: "BCPL", href: "https://en.wikipedia.org/wiki/BCPL" }],
  });

  g.buildPlang("pl+beanshell").merge({
    name: "BeanShell",
    websites: [{ kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" }],
    releases: [{ version: "2.1.1", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+befunge").merge({
    name: "Befunge",
    websites: [{ kind: "wikipedia", title: "Befunge", href: "https://en.wikipedia.org/wiki/Befunge" }],
  });

  g.buildPlang("pl+begriffsschrift").merge({
    name: "Begriffsschrift",
    websites: [{ kind: "wikipedia", title: "Begriffsschrift", href: "https://en.wikipedia.org/wiki/Begriffsschrift" }],
  });

  g.buildPlang("pl+beta").merge({
    name: "BETA",
    websites: [{ kind: "wikipedia", title: "BETA", href: "https://en.wikipedia.org/wiki/BETA_(programming_language)" }],
  });

  g.buildPlang("pl+bitcoin").merge({
    name: "Bitcoin Script",
    websites: [
      { kind: "wikipedia", title: "Bitcoin Script", href: "https://en.wikipedia.org/wiki/Bitcoin#Transactions" },
    ],
  });

  g.buildPlang("pl+bliss").merge({
    name: "BLISS",
    websites: [{ kind: "wikipedia", title: "BLISS", href: "https://en.wikipedia.org/wiki/BLISS" }],
  });

  g.buildPlang("pl+boo").merge({
    name: "Boo",
    websites: [{ kind: "wikipedia", title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BooLogo.png" }],
    releases: [{ version: "0.9.7", date: "2013-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+bs").merge({
    name: "bs",
    websites: [{ kind: "wikipedia", title: "bs", href: "https://en.wikipedia.org/wiki/Bs_(programming_language)" }],
  });

  g.buildPlang("pl+burroughs-b5000").merge({
    name: "Burroughs B5000",
    websites: [{ kind: "wikipedia", title: "Burroughs B5000", href: "https://en.wikipedia.org/wiki/Burroughs_B5000" }],
  });

  g.buildPlang("pl+c-shell").merge({
    name: "csh",
    websites: [{ kind: "wikipedia", title: "csh", href: "https://en.wikipedia.org/wiki/C_shell" }],
  });

  g.buildPlang("pl+c-slashal").merge({
    name: "C/AL",
    websites: [{ kind: "wikipedia", title: "C/AL", href: "https://en.wikipedia.org/wiki/C/AL" }],
  });

  g.buildPlang("pl+c-star").merge({
    name: "C*",
    websites: [{ kind: "wikipedia", title: "C*", href: "https://en.wikipedia.org/wiki/C*" }],
    releases: [{ version: "unknown", date: "1993-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+cache-objectscript").merge({
    name: "Caché ObjectScript",
    websites: [
      { kind: "wikipedia", title: "Caché ObjectScript", href: "https://en.wikipedia.org/wiki/Cach%C3%A9_ObjectScript" },
    ],
  });

  g.buildPlang("pl+cadence-skill").merge({
    name: "SKILL",
    websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/Cadence_SKILL" }],
  });

  g.buildPlang("pl+cal").merge({
    name: "CAL",
    websites: [{ kind: "wikipedia", title: "CAL", href: "https://en.wikipedia.org/wiki/CAL_(programming_language)" }],
  });

  g.buildPlang("pl+caml").merge({
    name: "Caml",
    websites: [{ kind: "wikipedia", title: "Caml", href: "https://en.wikipedia.org/wiki/Caml" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caml.gif/121px-Caml.gif" }],
    releases: [{ version: "0.75", date: "2002-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+catia").merge({
    name: "CATIA",
    websites: [{ kind: "wikipedia", title: "CATIA", href: "https://en.wikipedia.org/wiki/CATIA" }],
  });

  g.buildPlang("pl+catrobat").merge({
    name: "Catrobat",
    websites: [{ kind: "wikipedia", title: "Catrobat", href: "https://en.wikipedia.org/wiki/Catrobat" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Catrobat_logo.png/121px-Catrobat_logo.png",
      },
    ],
    releases: [{ version: "1.11", kind: "stable" }],
  });

  g.buildPlang("pl+cecil").merge({
    name: "Cecil",
    websites: [
      { kind: "wikipedia", title: "Cecil", href: "https://en.wikipedia.org/wiki/Cecil_(programming_language)" },
    ],
  });

  g.buildPlang("pl+cedar").merge({
    name: "Cedar",
    websites: [
      { kind: "wikipedia", title: "Mesa[1]", href: "https://en.wikipedia.org/wiki/Cedar_(programming_language)" },
    ],
    releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ceemac").merge({
    name: "CEEMAC",
    websites: [{ kind: "wikipedia", title: "CEEMAC", href: "https://en.wikipedia.org/wiki/CEEMAC" }],
  });

  g.buildPlang("pl+cg").merge({
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
  });

  g.buildPlang("pl+ch").merge({
    name: "CH C/C++ interpreter",
    websites: [
      {
        kind: "wikipedia",
        title: "CH C/C++ interpreter",
        href: "https://en.wikipedia.org/wiki/Ch_(computer_programming)",
      },
    ],
    releases: [{ version: "8.0.0", date: "2017-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+chakra").merge({
    name: "Chakra",
    websites: [{ kind: "wikipedia", title: "Chakra", href: "https://en.wikipedia.org/wiki/Chakra_(JScript_engine)" }],
  });

  g.buildPlang("pl+chapel").merge({
    name: "Chapel",
    websites: [
      { kind: "wikipedia", title: "Chapel", href: "https://en.wikipedia.org/wiki/Chapel_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Cray_Chapel_Logo.png" }],
    releases: [{ version: "2.0.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+charm").merge({
    name: "Charm",
    websites: [{ kind: "wikipedia", title: "Charm", href: "https://en.wikipedia.org/wiki/Charm_(language)" }],
  });

  g.buildPlang("pl+chef").merge({
    name: "Chef",
    websites: [{ kind: "wikipedia", title: "Chef", href: "https://en.wikipedia.org/wiki/Chef_(software)" }],
  });

  g.buildPlang("pl+chill").merge({
    name: "CHILL",
    websites: [{ kind: "wikipedia", title: "CHILL", href: "https://en.wikipedia.org/wiki/CHILL" }],
    releases: [{ version: "3.0", date: "2003-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+chisel").merge({
    name: "Chisel",
    websites: [
      { kind: "wikipedia", title: "Chisel", href: "https://en.wikipedia.org/wiki/Chisel_(programming_language)" },
    ],
  });

  g.buildPlang("pl+claire").merge({
    name: "Claire",
    websites: [
      { kind: "wikipedia", title: "Claire", href: "https://en.wikipedia.org/wiki/Claire_(programming_language)" },
    ],
    releases: [{ version: "3.3.46", date: "2009-01-01", kind: "stable" }],
    extensions: [".cl"],
  });

  g.buildPlang("pl+clarion").merge({
    name: "Clarion",
    websites: [
      { kind: "wikipedia", title: "Clarion", href: "https://en.wikipedia.org/wiki/Clarion_(programming_language)" },
    ],
    releases: [{ version: "unknown", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+clean").merge({
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
  });

  g.buildPlang("pl+clipper").merge({
    name: "Clipper",
    websites: [
      { kind: "wikipedia", title: "Clipper", href: "https://en.wikipedia.org/wiki/Clipper_(programming_language)" },
    ],
    releases: [{ version: "5.3", date: "1997-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+clozure-cl").merge({
    name: "Clozure CL",
    websites: [{ kind: "wikipedia", title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL" }],
    releases: [{ version: "1.12.2", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+clu").merge({
    name: "CLU",
    websites: [{ kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" }],
    releases: [{ version: "1.5", date: "1989-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+cms-2").merge({
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
  });

  g.buildPlang("pl+cms-exec").merge({
    name: "EXEC",
    websites: [{ kind: "wikipedia", title: "EXEC", href: "https://en.wikipedia.org/wiki/CMS_EXEC" }],
  });

  g.buildPlang("pl+cmucl").merge({
    name: "CMUCL",
    websites: [{ kind: "wikipedia", title: "CMUCL", href: "https://en.wikipedia.org/wiki/CMUCL" }],
    releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+cobra").merge({
    name: "Cobra",
    websites: [
      { kind: "wikipedia", title: "Cobra", href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)" },
    ],
  });

  g.buildPlang("pl+cocoa").merge({
    name: "Cocoa",
    websites: [{ kind: "wikipedia", title: "Cocoa", href: "https://en.wikipedia.org/wiki/Cocoa_(API)" }],
  });

  g.buildPlang("pl+coldfusion").merge({
    name: "Adobe ColdFusion",
    websites: [{ kind: "wikipedia", title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adobe_ColdFusion_logo_2021.svg" },
    ],
  });

  g.buildPlang("pl+comal").merge({
    name: "COMAL",
    websites: [{ kind: "wikipedia", title: "COMAL", href: "https://en.wikipedia.org/wiki/COMAL" }],
  });

  g.buildPlang("pl+combined").merge({
    name: "CPL",
    websites: [
      { kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/Combined_Programming_Language" },
    ],
  });

  g.buildPlang("pl+comit").merge({
    name: "COMIT",
    websites: [{ kind: "wikipedia", title: "COMIT", href: "https://en.wikipedia.org/wiki/COMIT" }],
  });

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

  g.buildPlang("pl+comtran").merge({
    name: "COMTRAN",
    websites: [{ kind: "wikipedia", title: "COMTRAN", href: "https://en.wikipedia.org/wiki/COMTRAN" }],
  });

  g.buildPlang("pl+concurrent-euclid").merge({
    name: "Concurrent Euclid",
    websites: [
      {
        kind: "wikipedia",
        title: "Concurrent Euclid (ConEuc)",
        href: "https://en.wikipedia.org/wiki/Concurrent_Euclid_(programming_language)",
      },
    ],
  });

  g.buildPlang("pl+concurrent-ml").merge({
    name: "Concurrent ML",
    websites: [{ kind: "wikipedia", title: "Concurrent ML", href: "https://en.wikipedia.org/wiki/Concurrent_ML" }],
  });

  g.buildPlang("pl+constraint-handling-rules").merge({
    name: "CHR",
    websites: [
      {
        kind: "wikipedia",
        title: "Constraint Handling Rules (CHR)",
        href: "https://en.wikipedia.org/wiki/Constraint_Handling_Rules",
      },
    ],
  });

  g.buildPlang("pl+contextual-query").merge({
    name: "CQL",
    websites: [{ kind: "wikipedia", title: "CQL", href: "https://en.wikipedia.org/wiki/Contextual_Query_Language" }],
  });

  g.buildPlang("pl+control").merge({
    name: "CL",
    websites: [
      { kind: "wikipedia", title: "Control Language", href: "https://en.wikipedia.org/wiki/Control_Language" },
    ],
  });

  g.buildPlang("pl+core-war").merge({
    name: "Core War",
    websites: [{ kind: "wikipedia", title: "Core War", href: "https://en.wikipedia.org/wiki/Core_War" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Core_War_PMars_Screenshot.png/220px-Core_War_PMars_Screenshot.png",
      },
    ],
  });

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

  g.buildPlang("pl+corvision").merge({
    name: "CorVision",
    websites: [{ kind: "wikipedia", title: "CorVision", href: "https://en.wikipedia.org/wiki/CorVision" }],
  });

  g.buildPlang("pl+cowsel").merge({
    name: "COWSEL",
    websites: [{ kind: "wikipedia", title: "COWSEL, POP-1", href: "https://en.wikipedia.org/wiki/COWSEL" }],
  });

  g.buildPlang("pl+cpl").merge({
    name: "CPL",
    websites: [{ kind: "wikipedia", title: "CPL", href: "https://en.wikipedia.org/wiki/CPL_(programming_language)" }],
  });

  g.buildPlang("pl+cray").merge({
    name: "Cray",
    websites: [{ kind: "wikipedia", title: "Cray", href: "https://en.wikipedia.org/wiki/Cray" }],
  });

  g.buildPlang("pl+cray-mta").merge({
    name: "Cray MTA",
    websites: [{ kind: "wikipedia", title: "Cray MTA", href: "https://en.wikipedia.org/wiki/Cray_MTA" }],
  });

  g.buildPlang("pl+cray-xmt").merge({
    name: "XMT",
    websites: [{ kind: "wikipedia", title: "XMT", href: "https://en.wikipedia.org/wiki/Cray_XMT" }],
  });

  g.buildPlang("pl+croquet-project").merge({
    name: "Croquet",
    websites: [{ kind: "wikipedia", title: "Croquet", href: "https://en.wikipedia.org/wiki/Croquet_Project" }],
  });

  g.buildPlang("pl+cuda").merge({
    name: "CUDA",
    websites: [{ kind: "wikipedia", title: "CUDA", href: "https://en.wikipedia.org/wiki/CUDA" }],
  });

  g.buildPlang("pl+cuneiform").merge({
    name: "Cuneiform",
    websites: [
      { kind: "wikipedia", title: "Cuneiform", href: "https://en.wikipedia.org/wiki/Cuneiform_(programming_language)" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/G18225.png/121px-G18225.png" },
    ],
    releases: [{ version: "3.0.4", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+curl").merge({
    name: "Curl",
    websites: [{ kind: "wikipedia", title: "Curl", href: "https://en.wikipedia.org/wiki/Curl_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5a/Curl_logo.gif" }],
    releases: [{ version: "8.0.13", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+curry").merge({
    name: "Curry",
    websites: [
      { kind: "wikipedia", title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)" },
    ],
    releases: [{ version: "3.6.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+cyclone").merge({
    name: "Cyclone",
    websites: [
      { kind: "wikipedia", title: "Cyclone", href: "https://en.wikipedia.org/wiki/Cyclone_(programming_language)" },
    ],
    releases: [{ version: "1.0", date: "2006-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+dafny").merge({
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
  });

  g.buildPlang("pl+darsimco").merge({
    name: "DARSIMCO",
    websites: [{ kind: "wikipedia", title: "DARSIMCO", href: "https://en.wikipedia.org/wiki/DARSIMCO" }],
  });

  g.buildPlang("pl+dartmouth-time-sharing-system").merge({
    name: "Dartmouth Time Sharing System",
    websites: [
      {
        kind: "wikipedia",
        title: "Dartmouth Time Sharing System",
        href: "https://en.wikipedia.org/wiki/Dartmouth_Time_Sharing_System",
      },
    ],
  });

  g.buildPlang("pl+darwin").merge({
    name: "Darwin",
    websites: [
      { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(programming_language)" },
    ],
  });

  g.buildPlang("pl+dataflow").merge({
    name: "dataflow",
    websites: [{ kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" }],
  });

  g.buildPlang("pl+dataparallel-c").merge({
    name: "Dataparallel-C",
    websites: [{ kind: "wikipedia", title: "Dataparallel-C", href: "https://en.wikipedia.org/wiki/Dataparallel-C" }],
  });

  g.buildPlang("pl+datomic").merge({
    name: "Datomic",
    websites: [{ kind: "wikipedia", title: "Datomic", href: "https://en.wikipedia.org/wiki/Datomic" }],
  });

  g.buildPlang("pl+dbase").merge({
    name: "DBase",
    websites: [{ kind: "wikipedia", title: "DBase", href: "https://en.wikipedia.org/wiki/DBase" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DBaseLogo_BlackWithRed_glass_300.png/121px-DBaseLogo_BlackWithRed_glass_300.png",
      },
    ],
    releases: [{ version: "unknown", date: "2019-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+dc").merge({
    name: "dc",
    websites: [{ kind: "wikipedia", title: "dc", href: "https://en.wikipedia.org/wiki/Dc_(computer_program)" }],
  });

  g.buildPlang("pl+ddc-i").merge({
    name: "DDC-I",
    websites: [{ kind: "wikipedia", title: "DDC-I", href: "https://en.wikipedia.org/wiki/DDC-I" }],
  });

  g.buildPlang("pl+dependent-ml").merge({
    name: "Dependent ML",
    websites: [{ kind: "wikipedia", title: "Dependent ML", href: "https://en.wikipedia.org/wiki/Dependent_ML" }],
  });

  g.buildPlang("pl+diagram").merge({
    name: "diagrams",
    websites: [{ kind: "wikipedia", title: "diagrams", href: "https://en.wikipedia.org/wiki/Diagram" }],
  });

  g.buildPlang("pl+dibol").merge({
    name: "DIBOL",
    websites: [{ kind: "wikipedia", title: "DIBOL", href: "https://en.wikipedia.org/wiki/DIBOL" }],
    releases: [{ version: "unknown", date: "1992-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+digital-command").merge({
    name: "DCL",
    websites: [{ kind: "wikipedia", title: "DCL", href: "https://en.wikipedia.org/wiki/DIGITAL_Command_Language" }],
  });

  g.buildPlang("pl+dis-virtual-machine").merge({
    name: "Dis virtual machine",
    websites: [{ kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Dis_virtual_machine" }],
  });

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

  g.buildPlang("pl+dotgnu").merge({
    name: "DotGNU",
    websites: [{ kind: "wikipedia", title: "DotGNU", href: "https://en.wikipedia.org/wiki/DotGNU" }],
  });

  g.buildPlang("pl+draco").merge({
    name: "Draco",
    websites: [
      { kind: "wikipedia", title: "Draco", href: "https://en.wikipedia.org/wiki/Draco_(programming_language)" },
    ],
  });

  g.buildPlang("pl+drakon").merge({
    name: "DRAKON",
    websites: [{ kind: "wikipedia", title: "DRAKON", href: "https://en.wikipedia.org/wiki/DRAKON" }],
  });

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

  g.buildPlang("pl+dymola").merge({
    name: "Dymola",
    websites: [{ kind: "wikipedia", title: "Dymola", href: "https://en.wikipedia.org/wiki/Dymola" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Dymola.png/100px-Dymola.png" },
    ],
    releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+e").merge({
    name: "E",
    websites: [{ kind: "wikipedia", title: "E", href: "https://en.wikipedia.org/wiki/E_(programming_language)" }],
  });

  g.buildPlang("pl+ease").merge({
    name: "Ease",
    websites: [{ kind: "wikipedia", title: "Ease", href: "https://en.wikipedia.org/wiki/Ease_(programming_language)" }],
  });

  g.buildPlang("pl+easy").merge({
    name: "Easy Programming Language",
    websites: [
      {
        kind: "wikipedia",
        title: "Easy Programming Language",
        href: "https://en.wikipedia.org/wiki/Easy_Programming_Language",
      },
    ],
    releases: [{ version: "5.95", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+eclipse").merge({
    name: "ECLiPSe",
    websites: [
      {
        kind: "wikipedia",
        title: "ECLiPSe Constraint Logic Programming System",
        href: "https://en.wikipedia.org/wiki/ECLiPSe",
      },
    ],
    releases: [{ version: "7.0", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ecmascript-harmony").merge({
    name: "ECMAScript Harmony",
    websites: [
      { kind: "wikipedia", title: "ECMAScript Harmony", href: "https://en.wikipedia.org/wiki/ECMAScript_Harmony" },
    ],
  });

  g.buildPlang("pl+ed").merge({
    name: "ed",
    websites: [{ kind: "wikipedia", title: "ed", href: "https://en.wikipedia.org/wiki/Ed_(text_editor)" }],
  });

  g.buildPlang("pl+edinburgh-imp").merge({
    name: "Edinburgh IMP",
    websites: [{ kind: "wikipedia", title: "Edinburgh IMP", href: "https://en.wikipedia.org/wiki/Edinburgh_IMP" }],
  });

  g.buildPlang("pl+egl").merge({
    name: "EGL(Enterprise Generation Language)",
    websites: [{ kind: "wikipedia", title: "EGL", href: "https://en.wikipedia.org/wiki/EGL_(programming_language)" }],
  });

  g.buildPlang("pl+eiffel").merge({
    name: "Eiffel",
    websites: [
      { kind: "wikipedia", title: "Eiffel", href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Eiffel_logo.svg" }],
    releases: [{ version: "23.09", date: "2023-01-01", kind: "stable" }],
    extensions: [".e"],
  });

  g.buildPlang("pl+eiffelstudio").merge({
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  g.buildPlang("pl+elan").merge({
    name: "Elan",
    websites: [{ kind: "wikipedia", title: "Elan", href: "https://en.wikipedia.org/wiki/ELAN_(programming_language)" }],
  });

  g.buildPlang("pl+emerald").merge({
    name: "Emerald",
    websites: [
      { kind: "wikipedia", title: "Emerald", href: "https://en.wikipedia.org/wiki/Emerald_(programming_language)" },
    ],
  });

  g.buildPlang("pl+epigram").merge({
    name: "Epigram",
    websites: [
      { kind: "wikipedia", title: "Epigram", href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)" },
    ],
    releases: [{ version: "unknown", date: "2006-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+esoteric").merge({
    name: "FALSE",
    websites: [
      { kind: "wikipedia", title: "FALSE", href: "https://en.wikipedia.org/wiki/Esoteric_programming_language#FALSE" },
    ],
  });

  g.buildPlang("pl+etoys").merge({
    name: "Etoys",
    websites: [
      { kind: "wikipedia", title: "Etoys", href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)" },
    ],
  });

  g.buildPlang("pl+euclid").merge({
    name: "Euclid",
    websites: [
      { kind: "wikipedia", title: "Euclid", href: "https://en.wikipedia.org/wiki/Euclid_(programming_language)" },
    ],
  });

  g.buildPlang("pl+euler").merge({
    name: "Euler",
    websites: [
      { kind: "wikipedia", title: "Euler", href: "https://en.wikipedia.org/wiki/Euler_(programming_language)" },
    ],
  });

  g.buildPlang("pl+exec-2").merge({
    name: "EXEC 2",
    websites: [{ kind: "wikipedia", title: "EXEC 2", href: "https://en.wikipedia.org/wiki/EXEC_2" }],
  });

  g.buildPlang("pl+executive-systems-problem-oriented").merge({
    name: "Executive Systems Problem Oriented Language",
    websites: [
      {
        kind: "wikipedia",
        title: "Executive Systems Problem Oriented Language (ESPOL)",
        href: "https://en.wikipedia.org/wiki/Executive_Systems_Problem_Oriented_Language",
      },
    ],
  });

  g.buildPlang("pl+ezhil").merge({
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
  });

  g.buildPlang("pl+f").merge({
    name: "F language",
    websites: [
      { kind: "wikipedia", title: "F language", href: "https://en.wikipedia.org/wiki/F_(programming_language)" },
    ],
  });

  g.buildPlang("pl+f-star").merge({
    name: "F*",
    websites: [{ kind: "wikipedia", title: "F*", href: "https://en.wikipedia.org/wiki/F*_(programming_language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fstar-official-logo-2015.png/128px-Fstar-official-logo-2015.png",
      },
    ],
    releases: [{ version: "2023.09.03", date: "2023-09-03", kind: "stable" }],
  });

  g.buildPlang("pl+fact-computer").merge({
    name: "FACT",
    websites: [{ kind: "wikipedia", title: "FACT", href: "https://en.wikipedia.org/wiki/FACT_computer_language" }],
  });

  g.buildPlang("pl+fanuc").merge({
    name: "FANUC",
    websites: [{ kind: "wikipedia", title: "FANUC", href: "https://en.wikipedia.org/wiki/FANUC" }],
  });

  g.buildPlang("pl+fargo").merge({
    name: "FARGO",
    websites: [
      { kind: "wikipedia", title: "FARGO", href: "https://en.wikipedia.org/wiki/FARGO_(programming_language)" },
    ],
  });

  g.buildPlang("pl+ffp").merge({
    name: "FP",
    websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FFP_(programming_language)" }],
  });

  g.buildPlang("pl+fjolnir").merge({
    name: "Fjölnir",
    websites: [
      {
        kind: "wikipedia",
        title: "Fjölnir",
        href: "https://en.wikipedia.org/wiki/Fj%C3%B6lnir_(programming_language)",
      },
    ],
  });

  g.buildPlang("pl+fl").merge({
    name: "FL",
    websites: [{ kind: "wikipedia", title: "FL", href: "https://en.wikipedia.org/wiki/FL_(programming_language)" }],
  });

  g.buildPlang("pl+flacc").merge({
    name: "FLACC",
    websites: [{ kind: "wikipedia", title: "FLACC", href: "https://en.wikipedia.org/wiki/FLACC" }],
  });

  g.buildPlang("pl+flow-matic").merge({
    name: "FLOW-MATIC",
    websites: [{ kind: "wikipedia", title: "FLOW-MATIC", href: "https://en.wikipedia.org/wiki/FLOW-MATIC" }],
  });

  g.buildPlang("pl+flutter").merge({
    name: "Flutter",
    websites: [{ kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
    releases: [{ version: "3.22.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+focal").merge({
    name: "FOCAL",
    websites: [
      { kind: "wikipedia", title: "FOCAL", href: "https://en.wikipedia.org/wiki/FOCAL_(programming_language)" },
    ],
  });

  g.buildPlang("pl+fortress").merge({
    name: "Fortress",
    websites: [
      { kind: "wikipedia", title: "Fortress", href: "https://en.wikipedia.org/wiki/Fortress_(programming_language)" },
    ],
  });

  g.buildPlang("pl+foxpro").merge({
    name: "FoxBASE+, FoxPro, Visual FoxPro",
    websites: [
      { kind: "wikipedia", title: "FoxBASE+, FoxPro, Visual FoxPro", href: "https://en.wikipedia.org/wiki/FoxPro" },
    ],
  });

  g.buildPlang("pl+fp").merge({
    name: "FP",
    websites: [{ kind: "wikipedia", title: "FP", href: "https://en.wikipedia.org/wiki/FP_(programming_language)" }],
  });

  g.buildPlang("pl+fpgac").merge({
    name: "FpgaC",
    websites: [{ kind: "wikipedia", title: "FpgaC", href: "https://en.wikipedia.org/wiki/FpgaC" }],
    releases: [{ version: "1.0", kind: "stable" }],
  });

  g.buildPlang("pl+frama-c").merge({
    name: "Frama-C",
    websites: [{ kind: "wikipedia", title: "Frama-C", href: "https://en.wikipedia.org/wiki/Frama-C" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frama-C_logo%2C_full.png/120px-Frama-C_logo%2C_full.png",
      },
    ],
  });

  g.buildPlang("pl+free-university-of-berlin").merge({
    name: "FU Berlin",
    websites: [
      { kind: "wikipedia", title: "FU Berlin", href: "https://en.wikipedia.org/wiki/Free_University_of_Berlin" },
    ],
  });

  g.buildPlang("pl+g-code").merge({
    name: "G-code",
    websites: [{ kind: "wikipedia", title: "G-code", href: "https://en.wikipedia.org/wiki/G-code" }],
  });

  g.buildPlang("pl+g95").merge({
    name: "G95",
    websites: [{ kind: "wikipedia", title: "G95", href: "https://en.wikipedia.org/wiki/G95" }],
  });

  g.buildPlang("pl+game-maker").merge({
    name: "GameMaker",
    websites: [{ kind: "wikipedia", title: "GameMaker", href: "https://en.wikipedia.org/wiki/Game_Maker_Language" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4b/GameMaker_Logo.svg" }],
    releases: [{ version: "2024.4.1", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+gcc").merge({
    name: "GCC",
    websites: [{ kind: "wikipedia", title: "GCC", href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/GNU_Compiler_Collection_logo.svg" },
    ],
    releases: [{ version: "14.1", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+gemstone").merge({
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
  });

  g.buildPlang("pl+genera").merge({
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
  });

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

  g.buildPlang("pl+generic-java").merge({
    name: "Generic Java",
    websites: [{ kind: "wikipedia", title: "Generic Java", href: "https://en.wikipedia.org/wiki/Generic_Java" }],
  });

  g.buildPlang("pl+genie").merge({
    name: "Genie",
    websites: [
      { kind: "wikipedia", title: "Genie", href: "https://en.wikipedia.org/wiki/Genie_(programming_language)" },
    ],
    releases: [{ version: "0.52.3", date: "2021-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ghostscript").merge({
    name: "Ghostscript",
    websites: [{ kind: "wikipedia", title: "Ghostscript", href: "https://en.wikipedia.org/wiki/Ghostscript" }],
  });

  g.buildPlang("pl+glasgow-haskell-compiler").merge({
    name: "GHC",
    websites: [{ kind: "wikipedia", title: "GHC", href: "https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler" }],
  });

  g.buildPlang("pl+gnu-data").merge({
    name: "GNU Data Language",
    websites: [
      { kind: "wikipedia", title: "GNU Data Language", href: "https://en.wikipedia.org/wiki/GNU_Data_Language" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/GNU_Data_Language_%28logo%29.png" },
    ],
    releases: [{ version: "1.0.5", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+gnu-m4").merge({
    name: "GNU m4",
    websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/GNU_m4" }],
  });

  g.buildPlang("pl+go-").merge({
    name: "Go!",
    websites: [{ kind: "wikipedia", title: "Go!", href: "https://en.wikipedia.org/wiki/Go!_(programming_language)" }],
    releases: [{ version: "unknown", date: "2007-01-01", kind: "preview" }],
  });

  g.buildPlang("pl+golo").merge({
    name: "Golo",
    websites: [{ kind: "wikipedia", title: "Golo", href: "https://en.wikipedia.org/wiki/Golo_(programming_language)" }],
    releases: [{ version: "3.4.0", date: "2021-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+google-apps-script").merge({
    name: "Apps Script",
    websites: [
      { kind: "wikipedia", title: "Google Apps Script", href: "https://en.wikipedia.org/wiki/Google_Apps_Script" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" }],
  });

  g.buildPlang("pl+gpss").merge({
    name: "GPSS",
    websites: [{ kind: "wikipedia", title: "GPSS", href: "https://en.wikipedia.org/wiki/GPSS" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GPSS_sine-qua-non_icon.png/121px-GPSS_sine-qua-non_icon.png",
      },
    ],
  });

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

  g.buildPlang("pl+gradle").merge({
    name: "Gradle",
    websites: [{ kind: "wikipedia", title: "Gradle", href: "https://en.wikipedia.org/wiki/Gradle" }],
  });

  g.buildPlang("pl+grails").merge({
    name: "Grails",
    websites: [{ kind: "wikipedia", title: "Grails", href: "https://en.wikipedia.org/wiki/Grails_(framework)" }],
  });

  g.buildPlang("pl+gt.m").merge({
    name: "GT.M",
    websites: [{ kind: "wikipedia", title: "GT.M", href: "https://en.wikipedia.org/wiki/GT.M" }],
  });

  g.buildPlang("pl+haas-automation").merge({
    name: "Haas",
    websites: [{ kind: "wikipedia", title: "Haas", href: "https://en.wikipedia.org/wiki/Haas_Automation" }],
  });

  g.buildPlang("pl+hamilton-c-shell").merge({
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
  });

  g.buildPlang("pl+handel-c").merge({
    name: "Handel-C",
    websites: [{ kind: "wikipedia", title: "Handel-C", href: "https://en.wikipedia.org/wiki/Handel-C" }],
    releases: [{ version: "3.0", kind: "stable" }],
  });

  g.buildPlang("pl+harbour").merge({
    name: "Harbour Project",
    websites: [{ kind: "wikipedia", title: "Harbour", href: "https://en.wikipedia.org/wiki/Harbour_(software)" }],
    releases: [
      { version: "3.0.0", date: "2011-01-01", kind: "stable" },
      { version: "3.2.0", kind: "preview" },
    ],
  });

  g.buildPlang("pl+heidenhain").merge({
    name: "Heidenhain",
    websites: [{ kind: "wikipedia", title: "Heidenhain", href: "https://en.wikipedia.org/wiki/Heidenhain" }],
  });

  g.buildPlang("pl+hhvm").merge({
    name: "HHVM",
    websites: [{ kind: "wikipedia", title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HHVM_logo.svg" }],
    releases: [{ version: "3.15.0", date: "2016-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+hitachi").merge({
    name: "Hitachi",
    websites: [{ kind: "wikipedia", title: "Hitachi", href: "https://en.wikipedia.org/wiki/Hitachi" }],
  });

  g.buildPlang("pl+hop").merge({
    name: "Hop",
    websites: [{ kind: "wikipedia", title: "Hop", href: "https://en.wikipedia.org/wiki/Hop_(software)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hop_logo.svg" }],
    releases: [{ version: "2.4.2", date: "2013-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+hope").merge({
    name: "Hope",
    websites: [{ kind: "wikipedia", title: "Hope", href: "https://en.wikipedia.org/wiki/Hope_(programming_language)" }],
  });

  g.buildPlang("pl+html").merge({
    name: "HTML",
    websites: [{ kind: "wikipedia", title: "HTML", href: "https://en.wikipedia.org/wiki/HTML" }],
  });

  g.buildPlang("pl+html5").merge({
    name: "HTML5",
    websites: [{ kind: "wikipedia", title: "HTML5", href: "https://en.wikipedia.org/wiki/HTML5" }],
  });

  g.buildPlang("pl+hugs").merge({
    name: "Hugs",
    websites: [{ kind: "wikipedia", title: "Hugs", href: "https://en.wikipedia.org/wiki/Hugs_(interpreter)" }],
  });

  g.buildPlang("pl+hume").merge({
    name: "Hume",
    websites: [{ kind: "wikipedia", title: "Hume", href: "https://en.wikipedia.org/wiki/Hume_(programming_language)" }],
    releases: [{ version: "0.8", date: "2008-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ibm").merge({
    name: "IBM",
    websites: [{ kind: "wikipedia", title: "IBM", href: "https://en.wikipedia.org/wiki/IBM" }],
  });

  g.buildPlang("pl+ibm-704").merge({
    name: "IBM 704",
    websites: [{ kind: "wikipedia", title: "IBM 704", href: "https://en.wikipedia.org/wiki/IBM_704" }],
  });

  g.buildPlang("pl+ibm-709-slash90-9pac").merge({
    name: "9PAC",
    websites: [{ kind: "wikipedia", title: "9PAC", href: "https://en.wikipedia.org/wiki/IBM_709/90_9PAC" }],
  });

  g.buildPlang("pl+ibm-7090").merge({
    name: "7090",
    websites: [{ kind: "wikipedia", title: "7090", href: "https://en.wikipedia.org/wiki/IBM_7090" }],
  });

  g.buildPlang("pl+ibm-informix-4gl").merge({
    name: "IBM Informix-4GL",
    websites: [
      { kind: "wikipedia", title: "IBM Informix-4GL", href: "https://en.wikipedia.org/wiki/IBM_Informix-4GL" },
    ],
  });

  g.buildPlang("pl+ibm-pl-slashs").merge({
    name: "PL/S",
    websites: [{ kind: "wikipedia", title: "PL/S", href: "https://en.wikipedia.org/wiki/IBM_PL/S" }],
  });

  g.buildPlang("pl+ibm-rpg").merge({
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
  });

  g.buildPlang("pl+ibm-system-slash360").merge({
    name: "S/360",
    websites: [{ kind: "wikipedia", title: "S/360", href: "https://en.wikipedia.org/wiki/IBM_System/360" }],
  });

  g.buildPlang("pl+ibm-system-slash370").merge({
    name: "IBM System/370",
    websites: [{ kind: "wikipedia", title: "S/370", href: "https://en.wikipedia.org/wiki/IBM_System/370" }],
  });

  g.buildPlang("pl+ibm-visualage").merge({
    name: "VA Smalltalk",
    websites: [{ kind: "wikipedia", title: "VisualAge", href: "https://en.wikipedia.org/wiki/IBM_VisualAge" }],
  });

  g.buildPlang("pl+id").merge({
    name: "Id",
    websites: [{ kind: "wikipedia", title: "Id", href: "https://en.wikipedia.org/wiki/Id_(programming_language)" }],
  });

  g.buildPlang("pl+idl").merge({
    name: "IDL",
    websites: [{ kind: "wikipedia", title: "IDL", href: "https://en.wikipedia.org/wiki/IDL_(programming_language)" }],
    releases: [{ version: "9.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+imp").merge({
    name: "IMP",
    websites: [{ kind: "wikipedia", title: "IMP", href: "https://en.wikipedia.org/wiki/IMP_(programming_language)" }],
    releases: [{ version: "unknown", date: "1972-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+inferno").merge({
    name: "Inferno",
    websites: [
      { kind: "wikipedia", title: "Inferno", href: "https://en.wikipedia.org/wiki/Inferno_(operating_system)" },
    ],
  });

  g.buildPlang("pl+information-processing").merge({
    name: "Information Processing Language",
    websites: [
      {
        kind: "wikipedia",
        title: "Information Processing Language (IPL)",
        href: "https://en.wikipedia.org/wiki/Information_Processing_Language",
      },
    ],
  });

  g.buildPlang("pl+inscript").merge({
    name: "InScript",
    websites: [
      { kind: "wikipedia", title: "InScript", href: "https://en.wikipedia.org/wiki/InScript_(JavaScript_engine)" },
    ],
  });

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

  g.buildPlang("pl+intel-parallel-building-blocks").merge({
    name: "Parallel Building Blocks",
    websites: [
      {
        kind: "wikipedia",
        title: "Parallel Building Blocks",
        href: "https://en.wikipedia.org/wiki/Intel_Parallel_Building_Blocks",
      },
    ],
    releases: [{ version: "unknown", date: "2010-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+interactive-fiction").merge({
    name: "interactive fiction",
    websites: [
      { kind: "wikipedia", title: "interactive fiction", href: "https://en.wikipedia.org/wiki/Interactive_fiction" },
    ],
  });

  g.buildPlang("pl+intercal").merge({
    name: "INTERCAL",
    websites: [{ kind: "wikipedia", title: "INTERCAL", href: "https://en.wikipedia.org/wiki/INTERCAL" }],
  });

  g.buildPlang("pl+interpress").merge({
    name: "Interpress",
    websites: [{ kind: "wikipedia", title: "Interpress", href: "https://en.wikipedia.org/wiki/Interpress" }],
  });

  g.buildPlang("pl+isetl").merge({
    name: "ISETL",
    websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/ISETL" }],
    releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+iswim").merge({
    name: "ISWIM",
    websites: [{ kind: "wikipedia", title: "ISWIM", href: "https://en.wikipedia.org/wiki/ISWIM" }],
  });

  g.buildPlang("pl+j-sharp").merge({
    name: "J#",
    websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/J_Sharp" }],
  });

  g.buildPlang("pl+jakarta-server-pages").merge({
    name: "JSP",
    websites: [{ kind: "wikipedia", title: "JSP", href: "https://en.wikipedia.org/wiki/Jakarta_Server_Pages" }],
  });

  g.buildPlang("pl+java-ee").merge({
    name: "Java EE",
    websites: [{ kind: "wikipedia", title: "Java EE", href: "https://en.wikipedia.org/wiki/Java_EE" }],
  });

  g.buildPlang("pl+java-object-oriented-querying").merge({
    name: "jOOQ",
    websites: [
      { kind: "wikipedia", title: "jOOQ", href: "https://en.wikipedia.org/wiki/Java_Object_Oriented_Querying" },
    ],
    releases: [{ version: "3.19.2", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+java-persistence-query").merge({
    name: "JPQL",
    websites: [
      { kind: "wikipedia", title: "JPQL", href: "https://en.wikipedia.org/wiki/Java_Persistence_Query_Language" },
    ],
  });

  g.buildPlang("pl+javascriptcore").merge({
    name: "WebKit",
    websites: [{ kind: "wikipedia", title: "JavaScriptCore", href: "https://en.wikipedia.org/wiki/JavaScriptCore" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
  });

  g.buildPlang("pl+jena").merge({
    name: "Jena",
    websites: [{ kind: "wikipedia", title: "Jena", href: "https://en.wikipedia.org/wiki/Jena_(framework)" }],
  });

  g.buildPlang("pl+jmodelica.org").merge({
    name: "JModelica.org",
    websites: [{ kind: "wikipedia", title: "JModelica.org", href: "https://en.wikipedia.org/wiki/JModelica.org" }],
    releases: [{ version: "2.10", date: "2019-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+joss").merge({
    name: "JOSS",
    websites: [{ kind: "wikipedia", title: "JOSS", href: "https://en.wikipedia.org/wiki/JOSS" }],
  });

  g.buildPlang("pl+joule").merge({
    name: "Joule",
    websites: [
      { kind: "wikipedia", title: "Joule", href: "https://en.wikipedia.org/wiki/Joule_(programming_language)" },
    ],
  });

  g.buildPlang("pl+jovial").merge({
    name: "JOVIAL",
    websites: [{ kind: "wikipedia", title: "JOVIAL", href: "https://en.wikipedia.org/wiki/JOVIAL" }],
  });

  g.buildPlang("pl+joy").merge({
    name: "Joy",
    websites: [{ kind: "wikipedia", title: "Joy", href: "https://en.wikipedia.org/wiki/Joy_(programming_language)" }],
    releases: [{ version: "unknown", date: "2003-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+jscript").merge({
    name: "JScript",
    websites: [{ kind: "wikipedia", title: "JScript", href: "https://en.wikipedia.org/wiki/JScript" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif" }],
    releases: [{ version: "9.0", date: "2011-01-01", kind: "stable" }],
    extensions: [".asp", ".hta", ".htm", ".html", ".js", ".jse", ".wsc", ".wsf"],
  });

  g.buildPlang("pl+jscript-.net").merge({
    name: "JScript .NET",
    websites: [{ kind: "wikipedia", title: "JScript .NET", href: "https://en.wikipedia.org/wiki/JScript_.NET" }],
    extensions: [".js"],
  });

  g.buildPlang("pl+jspp").merge({
    name: "JS++",
    websites: [{ kind: "wikipedia", title: "JS++", href: "https://en.wikipedia.org/wiki/JS%2B%2B" }],
  });

  g.buildPlang("pl+jython").merge({
    name: "Jython",
    websites: [{ kind: "wikipedia", title: "Jython", href: "https://en.wikipedia.org/wiki/Jython" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Jython.png" }],
    releases: [{ version: "2.7.3", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+karel").merge({
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
  });

  g.buildPlang("pl+kawa").merge({
    name: "Kawa",
    websites: [
      { kind: "wikipedia", title: "Kawa", href: "https://en.wikipedia.org/wiki/Kawa_(Scheme_implementation)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kawa-logo.svg" }],
    releases: [{ version: "3.1.1", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+kent-recursive-calculator").merge({
    name: "KRC",
    websites: [{ kind: "wikipedia", title: "KRC", href: "https://en.wikipedia.org/wiki/Kent_Recursive_Calculator" }],
  });

  g.buildPlang("pl+kivy").merge({
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
  });

  g.buildPlang("pl+kl0").merge({
    name: "KL0",
    websites: [{ kind: "wikipedia", title: "KL0", href: "https://en.wikipedia.org/wiki/KL0" }],
  });

  g.buildPlang("pl+kl1").merge({
    name: "KL1",
    websites: [{ kind: "wikipedia", title: "KL1", href: "https://en.wikipedia.org/wiki/KL1" }],
  });

  g.buildPlang("pl+kodu-game-lab").merge({
    name: "Kodu Game Lab",
    websites: [{ kind: "wikipedia", title: "Kodu Game Lab", href: "https://en.wikipedia.org/wiki/Kodu_Game_Lab" }],
    releases: [{ version: "1.6.18.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+kojo").merge({
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
  });

  g.buildPlang("pl+kornshell").merge({
    name: "Ksh",
    websites: [{ kind: "wikipedia", title: "Ksh", href: "https://en.wikipedia.org/wiki/KornShell" }],
  });

  g.buildPlang("pl+krl").merge({
    name: "KRL",
    websites: [{ kind: "wikipedia", title: "KRL", href: "https://en.wikipedia.org/wiki/KRL_(programming_language)" }],
  });

  g.buildPlang("pl+kuka-robot").merge({
    name: "KUKA Robot Language",
    websites: [
      { kind: "wikipedia", title: "KUKA Robot Language", href: "https://en.wikipedia.org/wiki/KUKA_Robot_Language" },
    ],
  });

  g.buildPlang("pl+lambda-calculus").merge({
    name: "Lambda calculus",
    websites: [{ kind: "wikipedia", title: "Lambda calculus", href: "https://en.wikipedia.org/wiki/Lambda_calculus" }],
  });

  g.buildPlang("pl+language-h").merge({
    name: "Language H",
    websites: [{ kind: "wikipedia", title: "Language H", href: "https://en.wikipedia.org/wiki/Language_H" }],
  });

  g.buildPlang("pl+language-integrated-query").merge({
    name: "LINQ",
    websites: [{ kind: "wikipedia", title: "LINQ", href: "https://en.wikipedia.org/wiki/Language_Integrated_Query" }],
  });

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

  g.buildPlang("pl+lasso").merge({
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
  });

  g.buildPlang("pl+libertyeiffel").merge({
    name: "Liberty Eiffel",
    websites: [{ kind: "wikipedia", title: "LibertyEiffel", href: "https://en.wikipedia.org/wiki/LibertyEiffel" }],
    releases: [{ version: "2016.05", date: "2016-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+limbo").merge({
    name: "Limbo",
    websites: [
      { kind: "wikipedia", title: "Limbo", href: "https://en.wikipedia.org/wiki/Limbo_(programming_language)" },
    ],
  });

  g.buildPlang("pl+lingo").merge({
    name: "Lingo",
    websites: [
      { kind: "wikipedia", title: "Lingo", href: "https://en.wikipedia.org/wiki/Lingo_(programming_language)" },
    ],
  });

  g.buildPlang("pl+linux").merge({
    name: "Linux",
    websites: [{ kind: "wikipedia", title: "Linux", href: "https://en.wikipedia.org/wiki/Linux" }],
  });

  g.buildPlang("pl+lis").merge({
    name: "LIS",
    websites: [{ kind: "wikipedia", title: "LIS", href: "https://en.wikipedia.org/wiki/LIS_(programming_language)" }],
  });

  g.buildPlang("pl+llvm").merge({
    name: "LLVM",
    websites: [{ kind: "wikipedia", title: "LLVM", href: "https://en.wikipedia.org/wiki/LLVM" }],
  });

  g.buildPlang("pl+logtalk").merge({
    name: "Logtalk",
    websites: [{ kind: "wikipedia", title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk" }],
    releases: [{ version: "3.66.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+lpc").merge({
    name: "LPC",
    websites: [{ kind: "wikipedia", title: "LPC", href: "https://en.wikipedia.org/wiki/LPC_(programming_language)" }],
  });

  g.buildPlang("pl+luajit").merge({
    name: "LuaJIT",
    websites: [{ kind: "wikipedia", title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT" }],
  });

  g.buildPlang("pl+lucid").merge({
    name: "Lucid",
    websites: [
      { kind: "wikipedia", title: "Lucid", href: "https://en.wikipedia.org/wiki/Lucid_(programming_language)" },
    ],
  });

  g.buildPlang("pl+lustre").merge({
    name: "Lustre",
    websites: [
      { kind: "wikipedia", title: "Lustre", href: "https://en.wikipedia.org/wiki/Lustre_(programming_language)" },
    ],
  });

  g.buildPlang("pl+lyapas").merge({
    name: "LYaPAS",
    websites: [{ kind: "wikipedia", title: "LYaPAS", href: "https://en.wikipedia.org/wiki/LYaPAS" }],
  });

  g.buildPlang("pl+m4").merge({
    name: "m4",
    websites: [{ kind: "wikipedia", title: "m4", href: "https://en.wikipedia.org/wiki/M4_(computer_language)" }],
  });

  g.buildPlang("pl+mac-os-x").merge({
    name: "Mac OS X",
    websites: [{ kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });

  g.buildPlang("pl+macos").merge({
    name: "macOS",
    websites: [{ kind: "wikipedia", title: "macOS", href: "https://en.wikipedia.org/wiki/MacOS" }],
  });

  g.buildPlang("pl+macsyma").merge({
    name: "Macsyma",
    websites: [{ kind: "wikipedia", title: "Macsyma", href: "https://en.wikipedia.org/wiki/Macsyma" }],
  });

  g.buildPlang("pl+mad").merge({
    name: "MAD",
    websites: [{ kind: "wikipedia", title: "MAD", href: "https://en.wikipedia.org/wiki/MAD_(programming_language)" }],
  });

  g.buildPlang("pl+magma-computer-algebra-system").merge({
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
  });

  g.buildPlang("pl+maker-culture").merge({
    name: "Maker Culture",
    websites: [{ kind: "wikipedia", title: "Maker Culture", href: "https://en.wikipedia.org/wiki/Maker_culture" }],
  });

  g.buildPlang("pl+malbolge").merge({
    name: "Malbolge",
    websites: [{ kind: "wikipedia", title: "Malbolge", href: "https://en.wikipedia.org/wiki/Malbolge" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Malbolge_cat_program.png/300px-Malbolge_cat_program.png",
      },
    ],
  });

  g.buildPlang("pl+maplesim").merge({
    name: "MapleSim",
    websites: [{ kind: "wikipedia", title: "MapleSim", href: "https://en.wikipedia.org/wiki/MapleSim" }],
  });

  g.buildPlang("pl+mariadb").merge({
    name: "MariaDB",
    websites: [{ kind: "wikipedia", title: "MariaDB", href: "https://en.wikipedia.org/wiki/MariaDB" }],
  });

  g.buildPlang("pl+math-matic").merge({
    name: "MATH-MATIC",
    websites: [{ kind: "wikipedia", title: "MATH-MATIC", href: "https://en.wikipedia.org/wiki/MATH-MATIC" }],
  });

  g.buildPlang("pl+mathematica").merge({
    name: "Mathematica",
    websites: [{ kind: "wikipedia", title: "Wolfram Mathematica", href: "https://en.wikipedia.org/wiki/Mathematica" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
  });

  g.buildPlang("pl+mblock").merge({
    name: "mBlock",
    websites: [{ kind: "wikipedia", title: "mBlock", href: "https://en.wikipedia.org/wiki/MBlock" }],
  });

  g.buildPlang("pl+mdl").merge({
    name: "MDL",
    websites: [{ kind: "wikipedia", title: "MDL", href: "https://en.wikipedia.org/wiki/MDL_(programming_language)" }],
    scoping: ["lexical"],
  });

  g.buildPlang("pl+mesa").merge({
    name: "Mesa",
    websites: [{ kind: "wikipedia", title: "Mesa", href: "https://en.wikipedia.org/wiki/Mesa_(programming_language)" }],
    releases: [{ version: "6.0", date: "1981-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+mil-std-1750a").merge({
    name: "MIL-STD-1750A",
    websites: [{ kind: "wikipedia", title: "MIL-STD-1750A", href: "https://en.wikipedia.org/wiki/MIL-STD-1750A" }],
  });

  g.buildPlang("pl+mips-architecture").merge({
    name: "MIPS",
    websites: [{ kind: "wikipedia", title: "MIPS", href: "https://en.wikipedia.org/wiki/MIPS_architecture" }],
  });

  g.buildPlang("pl+ml-slashi").merge({
    name: "ML/I",
    websites: [{ kind: "wikipedia", title: "ML/I", href: "https://en.wikipedia.org/wiki/ML/I" }],
  });

  g.buildPlang("pl+mlton").merge({
    name: "MLton",
    websites: [{ kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" }],
    releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+mono").merge({
    name: "Mono",
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  g.buildPlang("pl+moonscript").merge({
    name: "Lua",
    websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
    releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
    extensions: [".lua"],
  });

  g.buildPlang("pl+moose").merge({
    name: "Moose",
    websites: [{ kind: "wikipedia", title: "Moose", href: "https://en.wikipedia.org/wiki/Moose_(Perl)" }],
  });

  g.buildPlang("pl+morphic").merge({
    name: "Morphic",
    websites: [{ kind: "wikipedia", title: "Morphic", href: "https://en.wikipedia.org/wiki/Morphic_(software)" }],
  });

  g.buildPlang("pl+motorola-68000").merge({
    name: "Motorola 68000",
    websites: [{ kind: "wikipedia", title: "Motorola 68000", href: "https://en.wikipedia.org/wiki/Motorola_68000" }],
  });

  g.buildPlang("pl+ms-macro-assembler").merge({
    name: "Microsoft Macro Assembler",
    websites: [
      {
        kind: "wikipedia",
        title: "Microsoft Macro Assembler",
        href: "https://en.wikipedia.org/wiki/Microsoft_Macro_Assembler",
      },
    ],
    releases: [{ version: "14.16.27023.1", date: "2702-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+ms-power-fx").merge({
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
  });

  g.buildPlang("pl+ms-visual-c-sharp").merge({
    name: "Visual C#",
    websites: [
      { kind: "wikipedia", title: "Visual C#", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C_Sharp" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
    releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
    extensions: [".cs", ".csx"],
  });

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

  g.buildPlang("pl+mumps").merge({
    name: "MUMPS",
    websites: [{ kind: "wikipedia", title: "MUMPS", href: "https://en.wikipedia.org/wiki/MUMPS" }],
    releases: [{ version: "11.1", date: "1995-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+mvs").merge({
    name: "MVS",
    websites: [{ kind: "wikipedia", title: "MVS", href: "https://en.wikipedia.org/wiki/MVS" }],
  });

  g.buildPlang("pl+n1ql").merge({
    name: "N1QL",
    websites: [{ kind: "wikipedia", title: "N1QL", href: "https://en.wikipedia.org/wiki/N1QL" }],
  });

  g.buildPlang("pl+napier88").merge({
    name: "Napier88",
    websites: [{ kind: "wikipedia", title: "Napier88", href: "https://en.wikipedia.org/wiki/Napier88" }],
  });

  g.buildPlang("pl+neko").merge({
    name: "NekoVMNeko",
    websites: [
      { kind: "wikipedia", title: "NekoVMNeko", href: "https://en.wikipedia.org/wiki/Neko_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
    releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+nekovm").merge({
    name: "NekoVMNeko",
    websites: [{ kind: "wikipedia", title: "NekoVM", href: "https://en.wikipedia.org/wiki/NekoVM" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
    releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+nemerle").merge({
    name: "Nemerle",
    websites: [{ kind: "wikipedia", title: "Nemerle", href: "https://en.wikipedia.org/wiki/Nemerle" }],
    releases: [{ version: "1.2.507.0", date: "2016-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+nesl").merge({
    name: "NESL",
    websites: [{ kind: "wikipedia", title: "NESL", href: "https://en.wikipedia.org/wiki/NESL" }],
    releases: [{ version: "3.1", date: "1995-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+netlogo").merge({
    name: "NetLogo",
    websites: [{ kind: "wikipedia", title: "NetLogo", href: "https://en.wikipedia.org/wiki/NetLogo" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/NetLogo_%28logo%29.png/280px-NetLogo_%28logo%29.png",
      },
    ],
    releases: [{ version: "6.4.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+netrexx").merge({
    name: "NetRexx",
    websites: [{ kind: "wikipedia", title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NETREXX.gif" }],
    releases: [{ version: "4.06", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+netwide-assembler").merge({
    name: "NASM",
    websites: [{ kind: "wikipedia", title: "NASM", href: "https://en.wikipedia.org/wiki/Netwide_Assembler" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Netwide_Assembler.svg" }],
    releases: [{ version: "2.16.03", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+newp").merge({
    name: "NEWP",
    websites: [{ kind: "wikipedia", title: "NEWP", href: "https://en.wikipedia.org/wiki/NEWP" }],
    releases: [{ version: "17.0", date: "2015-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+newspeak").merge({
    name: "Newspeak",
    websites: [
      { kind: "wikipedia", title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)" },
    ],
    releases: [{ version: "unknown", date: "2013-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+newsqueak").merge({
    name: "Newsqueak",
    websites: [{ kind: "wikipedia", title: "Newsqueak", href: "https://en.wikipedia.org/wiki/Newsqueak" }],
  });

  g.buildPlang("pl+newtonscript").merge({
    name: "NewtonScript",
    websites: [{ kind: "wikipedia", title: "NewtonScript", href: "https://en.wikipedia.org/wiki/NewtonScript" }],
  });

  g.buildPlang("pl+nial").merge({
    name: "Nial",
    websites: [{ kind: "wikipedia", title: "Nial", href: "https://en.wikipedia.org/wiki/Nial" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/NialLogo.jpg" }],
    releases: [{ version: "7.0", date: "2017-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+niklaus-wirth").merge({
    name: "Wirth",
    websites: [{ kind: "wikipedia", title: "Wirth", href: "https://en.wikipedia.org/wiki/Niklaus_Wirth" }],
  });

  g.buildPlang("pl+nix-package-manager").merge({
    name: "Nix",
    websites: [{ kind: "wikipedia", title: "Nix", href: "https://en.wikipedia.org/wiki/Nix_package_manager" }],
    releases: [{ version: "2.22.1", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+nord").merge({
    name: "Nord Programming Language",
    websites: [
      {
        kind: "wikipedia",
        title: "Nord Programming Language",
        href: "https://en.wikipedia.org/wiki/NORD_Programming_Language",
      },
    ],
  });

  g.buildPlang("pl+noweb").merge({
    name: "noweb",
    websites: [{ kind: "wikipedia", title: "Noweb", href: "https://en.wikipedia.org/wiki/Noweb" }],
    releases: [{ version: "2.12", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+nu").merge({
    name: "Nu",
    websites: [{ kind: "wikipedia", title: "Nu", href: "https://en.wikipedia.org/wiki/Nu_(programming_language)" }],
    releases: [{ version: "2.3.0", date: "2019-01-01", kind: "stable" }],
  });

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

  g.buildPlang("pl+object-rexx").merge({
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
  });

  g.buildPlang("pl+objectlogo").merge({
    name: "Logo",
    websites: [{ kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/ObjectLOGO" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
      },
    ],
  });

  g.buildPlang("pl+obliq").merge({
    name: "Obliq",
    websites: [{ kind: "wikipedia", title: "Obliq", href: "https://en.wikipedia.org/wiki/Obliq" }],
  });

  g.buildPlang("pl+occam").merge({
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
  });

  g.buildPlang("pl+occam--").merge({
    name: "occam-π",
    websites: [{ kind: "wikipedia", title: "occam-π", href: "https://en.wikipedia.org/wiki/Occam-%CF%80" }],
  });

  g.buildPlang("pl+odra").merge({
    name: "Odra ALGOL 68",
    websites: [{ kind: "wikipedia", title: "Odra ALGOL 68", href: "https://en.wikipedia.org/wiki/Odra_(computer)" }],
  });

  g.buildPlang("pl+okuma-corporation").merge({
    name: "Okuma",
    websites: [{ kind: "wikipedia", title: "Okuma", href: "https://en.wikipedia.org/wiki/Okuma_Corporation" }],
  });

  g.buildPlang("pl+oorexx").merge({
    name: "ooREXX",
    websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/OoREXX" }],
  });

  g.buildPlang("pl+opa").merge({
    name: "Opa",
    websites: [{ kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
    releases: [{ version: "1.1.1", date: "2014-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+open").merge({
    name: "Open Programming Language (OPL)",
    websites: [
      {
        kind: "wikipedia",
        title: "Open Programming Language (OPL)",
        href: "https://en.wikipedia.org/wiki/Open_Programming_Language",
      },
    ],
    releases: [{ version: "1.56", date: "2006-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+open-source").merge({
    name: "open source",
    websites: [{ kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open_source" }],
  });

  g.buildPlang("pl+opencl").merge({
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
  });

  g.buildPlang("pl+openmodelica").merge({
    name: "OpenModelica",
    websites: [{ kind: "wikipedia", title: "OpenModelica", href: "https://en.wikipedia.org/wiki/OpenModelica" }],
    releases: [{ version: "1.22.2", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+openqasm").merge({
    name: "OpenQASM",
    websites: [{ kind: "wikipedia", title: "OpenQASM", href: "https://en.wikipedia.org/wiki/OpenQASM" }],
    extensions: [".qasm"],
  });

  g.buildPlang("pl+openvera").merge({
    name: "OpenVera",
    websites: [{ kind: "wikipedia", title: "OpenVera", href: "https://en.wikipedia.org/wiki/OpenVera" }],
  });

  g.buildPlang("pl+openvms").merge({
    name: "OpenVMS",
    websites: [{ kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" }],
  });

  g.buildPlang("pl+ops5").merge({
    name: "OPS5",
    websites: [{ kind: "wikipedia", title: "OPS5", href: "https://en.wikipedia.org/wiki/OPS5" }],
  });

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

  g.buildPlang("pl+orc").merge({
    name: "Orc",
    websites: [{ kind: "wikipedia", title: "Orc", href: "https://en.wikipedia.org/wiki/Orc_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Orc_programming_language_logo.png" }],
  });

  g.buildPlang("pl+oriel").merge({
    name: "Oriel",
    websites: [{ kind: "wikipedia", title: "Oriel", href: "https://en.wikipedia.org/wiki/Oriel_(scripting_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/9/97/The_Oriel_for_Windows_Logo.png" }],
  });

  g.buildPlang("pl+orwell").merge({
    name: "Orwell",
    websites: [
      { kind: "wikipedia", title: "Orwell", href: "https://en.wikipedia.org/wiki/Orwell_(programming_language)" },
    ],
  });

  g.buildPlang("pl+otcl").merge({
    name: "OTcl",
    websites: [{ kind: "wikipedia", title: "OTcl", href: "https://en.wikipedia.org/wiki/OTcl" }],
  });

  g.buildPlang("pl+oxygene").merge({
    name: "Oxygene",
    websites: [
      { kind: "wikipedia", title: "Oxygene", href: "https://en.wikipedia.org/wiki/Oxygene_(programming_language)" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Chrome-128.png/121px-Chrome-128.png" },
    ],
  });

  g.buildPlang("pl+oz").merge({
    name: "Oz",
    websites: [{ kind: "wikipedia", title: "Oz", href: "https://en.wikipedia.org/wiki/Oz_(programming_language)" }],
    releases: [{ version: "1.4.0", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+p").merge({
    name: "P",
    websites: [{ kind: "wikipedia", title: "P", href: "https://en.wikipedia.org/wiki/P_(programming_language)" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/P_logo.png/64px-P_logo.png" },
    ],
  });

  g.buildPlang("pl+p--").merge({
    name: "P′′",
    websites: [{ kind: "wikipedia", title: "P′′", href: "https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2" }],
  });

  g.buildPlang("pl+pact-i").merge({
    name: "PACT I",
    websites: [{ kind: "wikipedia", title: "PACT I", href: "https://en.wikipedia.org/wiki/PACT_I" }],
  });

  g.buildPlang("pl+pari-slashgp").merge({
    name: "PARI/GP",
    websites: [{ kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
    releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+parrot-virtual-machine").merge({
    name: "Parrot",
    websites: [{ kind: "wikipedia", title: "Parrot", href: "https://en.wikipedia.org/wiki/Parrot_virtual_machine" }],
  });

  g.buildPlang("pl+patcher").merge({
    name: "Patcher",
    websites: [{ kind: "wikipedia", title: "Max", href: "https://en.wikipedia.org/wiki/Patcher" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
      },
    ],
    releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pathscale").merge({
    name: "PathScale EKOPath Compiler",
    websites: [{ kind: "wikipedia", title: "PathScale", href: "https://en.wikipedia.org/wiki/PathScale" }],
    releases: [{ version: "5.0.0", date: "2013-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pcastl").merge({
    name: "PCASTL",
    websites: [{ kind: "wikipedia", title: "PCASTL", href: "https://en.wikipedia.org/wiki/PCASTL" }],
    releases: [{ version: "3.5", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pdp-11").merge({
    name: "PDP-11",
    websites: [{ kind: "wikipedia", title: "PDP-11", href: "https://en.wikipedia.org/wiki/PDP-11" }],
  });

  g.buildPlang("pl+pdp-7").merge({
    name: "PDP-7",
    websites: [{ kind: "wikipedia", title: "PDP-7", href: "https://en.wikipedia.org/wiki/PDP-7" }],
  });

  g.buildPlang("pl+perl-data").merge({
    name: "Perl Data Language (PDL)",
    websites: [
      {
        kind: "wikipedia",
        title: "Perl Data Language (PDL)",
        href: "https://en.wikipedia.org/wiki/Perl_Data_Language",
      },
    ],
    releases: [{ version: "2.080", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pgi-compiler").merge({
    name: "PGI",
    websites: [{ kind: "wikipedia", title: "PGI", href: "https://en.wikipedia.org/wiki/PGI_compiler" }],
  });

  g.buildPlang("pl+pico").merge({
    name: "Pico",
    websites: [{ kind: "wikipedia", title: "Pico", href: "https://en.wikipedia.org/wiki/Pico_(programming_language)" }],
    releases: [{ version: "2.0", date: "2007-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pict").merge({
    name: "Pict",
    websites: [{ kind: "wikipedia", title: "Pict", href: "https://en.wikipedia.org/wiki/Pict_(programming_language)" }],
  });

  g.buildPlang("pl+pike").merge({
    name: "Pike",
    websites: [{ kind: "wikipedia", title: "Pike", href: "https://en.wikipedia.org/wiki/Pike_(programming_language)" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pike_Programming_Language_Logo.svg" },
    ],
    releases: [{ version: "8.0.1738", date: "1738-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pipeline").merge({
    name: "Pipeline (Unix)",
    websites: [{ kind: "wikipedia", title: "Pipeline (Unix)", href: "https://en.wikipedia.org/wiki/Pipeline_(Unix)" }],
  });

  g.buildPlang("pl+pizza").merge({
    name: "Pizza",
    websites: [
      { kind: "wikipedia", title: "Pizza", href: "https://en.wikipedia.org/wiki/Pizza_(programming_language)" },
    ],
  });

  g.buildPlang("pl+pl-6").merge({
    name: "PL-6",
    websites: [{ kind: "wikipedia", title: "PL-6", href: "https://en.wikipedia.org/wiki/PL-6" }],
  });

  g.buildPlang("pl+pl-slash").merge({
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
  });

  g.buildPlang("pl+pl.8").merge({
    name: "PL.8",
    websites: [{ kind: "wikipedia", title: "PL.8", href: "https://en.wikipedia.org/wiki/PL.8" }],
  });

  g.buildPlang("pl+pl360").merge({
    name: "PL360",
    websites: [{ kind: "wikipedia", title: "PL360", href: "https://en.wikipedia.org/wiki/PL360" }],
  });

  g.buildPlang("pl+planc").merge({
    name: "PLANC",
    websites: [{ kind: "wikipedia", title: "PLANC", href: "https://en.wikipedia.org/wiki/PLANC" }],
  });

  g.buildPlang("pl+plankalkul").merge({
    name: "Plankalkül",
    websites: [{ kind: "wikipedia", title: "Plankalkül", href: "https://en.wikipedia.org/wiki/Plankalk%C3%BCl" }],
  });

  g.buildPlang("pl+planner").merge({
    name: "Planner",
    websites: [
      { kind: "wikipedia", title: "Planner", href: "https://en.wikipedia.org/wiki/Planner_(programming_language)" },
    ],
  });

  g.buildPlang("pl+plex").merge({
    name: "Plex",
    websites: [{ kind: "wikipedia", title: "PLEX", href: "https://en.wikipedia.org/wiki/PLEX_(programming_language)" }],
  });

  g.buildPlang("pl+plus").merge({
    name: "Plus",
    websites: [{ kind: "wikipedia", title: "Plus", href: "https://en.wikipedia.org/wiki/Plus_(programming_language)" }],
  });

  g.buildPlang("pl+poly-slashml").merge({
    name: "Poly/ML",
    websites: [{ kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Poly/ML" }],
    releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+polyphonic-c-sharp").merge({
    name: "Polyphonic C#",
    websites: [{ kind: "wikipedia", title: "Polyphonic C#", href: "https://en.wikipedia.org/wiki/Polyphonic_C_Sharp" }],
  });

  g.buildPlang("pl+pop-11").merge({
    name: "POP-11",
    websites: [{ kind: "wikipedia", title: "POP-11", href: "https://en.wikipedia.org/wiki/POP-11" }],
    releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pop-2").merge({
    name: "POP-2",
    websites: [{ kind: "wikipedia", title: "POP-2", href: "https://en.wikipedia.org/wiki/POP-2" }],
    releases: [{ version: "unknown", date: "1975-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+poplog").merge({
    name: "Poplog",
    websites: [{ kind: "wikipedia", title: "Poplog", href: "https://en.wikipedia.org/wiki/Poplog" }],
    releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+portable-c-compiler").merge({
    name: "Portable C Compiler",
    websites: [{ kind: "wikipedia", title: "pcc", href: "https://en.wikipedia.org/wiki/Portable_C_Compiler" }],
    releases: [{ version: "1.1.0", date: "2014-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+portable-document-format").merge({
    name: "PDF",
    websites: [{ kind: "wikipedia", title: "PDF", href: "https://en.wikipedia.org/wiki/Portable_Document_Format" }],
  });

  g.buildPlang("pl+powerbuilder").merge({
    name: "Appeon PowerBuilder",
    websites: [{ kind: "wikipedia", title: "Appeon PowerBuilder", href: "https://en.wikipedia.org/wiki/PowerBuilder" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/PowerBuilder_2017_Logo.png/75px-PowerBuilder_2017_Logo.png",
      },
    ],
    releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+powerhouse").merge({
    name: "UNICOM PowerHouse",
    websites: [
      {
        kind: "wikipedia",
        title: "UNICOM PowerHouse",
        href: "https://en.wikipedia.org/wiki/Powerhouse_(programming_language)",
      },
    ],
  });

  g.buildPlang("pl+powerpc").merge({
    name: "PowerPC",
    websites: [{ kind: "wikipedia", title: "PowerPC", href: "https://en.wikipedia.org/wiki/PowerPC" }],
  });

  g.buildPlang("pl+ppc64").merge({
    name: "ppc64",
    websites: [{ kind: "wikipedia", title: "ppc64", href: "https://en.wikipedia.org/wiki/Ppc64" }],
  });

  g.buildPlang("pl+processing.js").merge({
    name: "ProcessingProcessing IDE",
    websites: [
      { kind: "wikipedia", title: "ProcessingProcessing IDE", href: "https://en.wikipedia.org/wiki/Processing.js" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
    releases: [{ version: "4.3", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+profile-scripting").merge({
    name: "Profile Scripting Language",
    websites: [{ kind: "wikipedia", title: "PSL", href: "https://en.wikipedia.org/wiki/Profile_Scripting_Language" }],
  });

  g.buildPlang("pl+programming-language-for-business").merge({
    name: "Programming Language for Business",
    websites: [
      { kind: "wikipedia", title: "PL/B", href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business" },
    ],
    extensions: [".cb", ".pgm", ".pls", ".ps", ".rl"],
  });

  g.buildPlang("pl+prograph").merge({
    name: "Prograph",
    websites: [{ kind: "wikipedia", title: "Prograph", href: "https://en.wikipedia.org/wiki/Prograph" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Prograph_cpx_logo.PNG/150px-Prograph_cpx_logo.PNG",
      },
    ],
  });

  g.buildPlang("pl+promal").merge({
    name: "PROMAL",
    websites: [{ kind: "wikipedia", title: "PROMAL", href: "https://en.wikipedia.org/wiki/PROMAL" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/PROMAL_logo.png/121px-PROMAL_logo.png",
      },
    ],
    releases: [{ version: "2.1", date: "1986-10-14", kind: "stable" }],
  });

  g.buildPlang("pl+ptc").merge({
    name: "PTC",
    websites: [{ kind: "wikipedia", title: "PTC", href: "https://en.wikipedia.org/wiki/PTC_(software_company)" }],
  });

  g.buildPlang("pl+pthreads").merge({
    name: "Pthreads",
    websites: [{ kind: "wikipedia", title: "Pthreads", href: "https://en.wikipedia.org/wiki/Pthreads" }],
  });

  g.buildPlang("pl+puppet").merge({
    name: "Puppet",
    websites: [{ kind: "wikipedia", title: "Puppet", href: "https://en.wikipedia.org/wiki/Puppet_(software)" }],
  });

  g.buildPlang("pl+pure-data").merge({
    name: "Pure DataPure Data",
    websites: [{ kind: "wikipedia", title: "Pure DataPure Data", href: "https://en.wikipedia.org/wiki/Pure_Data" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
    releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+pwct").merge({
    name: "PWCT",
    websites: [{ kind: "wikipedia", title: "PWCT", href: "https://en.wikipedia.org/wiki/PWCT" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/PWCT_1.9_-_Goal_Designer.png/300px-PWCT_1.9_-_Goal_Designer.png",
      },
    ],
    releases: [{ version: "1.9", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+q-sharp").merge({
    name: "Q#",
    websites: [{ kind: "wikipedia", title: "Q#", href: "https://en.wikipedia.org/wiki/Q_Sharp" }],
  });

  g.buildPlang("pl+qalb").merge({
    name: "قلب",
    websites: [{ kind: "wikipedia", title: "قلب", href: "https://en.wikipedia.org/wiki/Qalb_(programming_language)" }],
  });

  g.buildPlang("pl+qore").merge({
    name: "Qore",
    websites: [{ kind: "wikipedia", title: "Qore", href: "https://en.wikipedia.org/wiki/Qore_(programming_language)" }],
    releases: [{ version: "1.16.1", date: "2023-01-01", kind: "stable" }],
    extensions: [".q", ".qm", ".qtest"],
  });

  g.buildPlang("pl+qt").merge({
    name: "Qt",
    websites: [{ kind: "wikipedia", title: "Qt", href: "https://en.wikipedia.org/wiki/Qt_(framework)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Qt_logo_neon_2022.svg" }],
    releases: [{ version: "6.7.1", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+qtscript").merge({
    name: "QtScript",
    websites: [{ kind: "wikipedia", title: "QtScript", href: "https://en.wikipedia.org/wiki/QtScript" }],
  });

  g.buildPlang("pl+quakec").merge({
    name: "QuakeC",
    websites: [{ kind: "wikipedia", title: "QuakeC", href: "https://en.wikipedia.org/wiki/QuakeC" }],
  });

  g.buildPlang("pl+quercus").merge({
    name: "Quercus",
    websites: [{ kind: "wikipedia", title: "Quercus", href: "https://en.wikipedia.org/wiki/Quercus_(software)" }],
  });

  g.buildPlang("pl+query").merge({
    name: "Query language",
    websites: [{ kind: "wikipedia", title: "Query language", href: "https://en.wikipedia.org/wiki/Query_language" }],
  });

  g.buildPlang("pl+quintus-prolog").merge({
    name: "Quintus Prolog",
    websites: [{ kind: "wikipedia", title: "Quintus Prolog", href: "https://en.wikipedia.org/wiki/Quintus_Prolog" }],
  });

  g.buildPlang("pl+rapid").merge({
    name: "RAPID",
    websites: [{ kind: "wikipedia", title: "RAPID", href: "https://en.wikipedia.org/wiki/RAPID" }],
  });

  g.buildPlang("pl+rapira").merge({
    name: "Rapira",
    websites: [{ kind: "wikipedia", title: "Rapira", href: "https://en.wikipedia.org/wiki/Rapira" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RAPIRA_example.png/300px-RAPIRA_example.png",
      },
    ],
  });

  g.buildPlang("pl+ravenscar-profile").merge({
    name: "Ravenscar profile",
    websites: [
      { kind: "wikipedia", title: "Ravenscar profile", href: "https://en.wikipedia.org/wiki/Ravenscar_profile" },
    ],
  });

  g.buildPlang("pl+react").merge({
    name: "React",
    websites: [
      { kind: "wikipedia", title: "React JS", href: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" }],
    releases: [
      { version: "18.3.1", date: "2024-01-01", kind: "stable" },
      { version: "19.0", date: "2024-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+redux").merge({
    name: "Redux",
    websites: [{ kind: "wikipedia", title: "Redux", href: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" }],
  });

  g.buildPlang("pl+reia").merge({
    name: "Elixir",
    websites: [{ kind: "wikipedia", title: "Reia", href: "https://en.wikipedia.org/wiki/Reia_(programming_language)" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
    ],
    releases: [{ version: "1.16.3", date: "2024-01-01", kind: "stable" }],
  });

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

  g.buildPlang("pl+reverse-polish-notation").merge({
    name: "RPN",
    websites: [{ kind: "wikipedia", title: "RPN", href: "https://en.wikipedia.org/wiki/Reverse_Polish_Notation" }],
  });

  g.buildPlang("pl+rexx").merge({
    name: "Rexx",
    websites: [{ kind: "wikipedia", title: "REXX", href: "https://en.wikipedia.org/wiki/REXX" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Rexx-img-lg.png/220px-Rexx-img-lg.png",
      },
    ],
    releases: [{ version: "3.274", date: "1996-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+robotics").merge({
    name: "Robotics",
    websites: [{ kind: "wikipedia", title: "Robotics", href: "https://en.wikipedia.org/wiki/Robotics" }],
  });

  g.buildPlang("pl+roslyn").merge({
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
  });

  g.buildPlang("pl+rpl").merge({
    name: "RPL",
    websites: [{ kind: "wikipedia", title: "RPL", href: "https://en.wikipedia.org/wiki/RPL_(programming_language)" }],
  });

  g.buildPlang("pl+rtl-slash2").merge({
    name: "RTL/2",
    websites: [{ kind: "wikipedia", title: "RTL/2", href: "https://en.wikipedia.org/wiki/RTL/2" }],
  });

  g.buildPlang("pl+rubinius").merge({
    name: "Rubinius",
    websites: [{ kind: "wikipedia", title: "Rubinius", href: "https://en.wikipedia.org/wiki/Rubinius" }],
    releases: [{ version: "5.0", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+s-lang").merge({
    name: "S-Lang",
    websites: [{ kind: "wikipedia", title: "S-Lang", href: "https://en.wikipedia.org/wiki/S-Lang" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/JED-editor-slang-source.png/220px-JED-editor-slang-source.png",
      },
    ],
    releases: [{ version: "2.3.3", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+s-plus").merge({
    name: "S-PLUS",
    websites: [{ kind: "wikipedia", title: "S-PLUS", href: "https://en.wikipedia.org/wiki/S-PLUS" }],
    releases: [{ version: "8.2", date: "2010-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+s3").merge({
    name: "S3",
    websites: [{ kind: "wikipedia", title: "S3", href: "https://en.wikipedia.org/wiki/S3_(programming_language)" }],
  });

  g.buildPlang("pl+sac").merge({
    name: "SAC",
    websites: [{ kind: "wikipedia", title: "SAC", href: "https://en.wikipedia.org/wiki/SAC_programming_language" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/SAC_language_logo.png/121px-SAC_language_logo.png",
      },
    ],
  });

  g.buildPlang("pl+safari").merge({
    name: "Safari",
    websites: [{ kind: "wikipedia", title: "Safari", href: "https://en.wikipedia.org/wiki/Safari_(web_browser)" }],
  });

  g.buildPlang("pl+sail").merge({
    name: "SAIL",
    websites: [{ kind: "wikipedia", title: "SAIL", href: "https://en.wikipedia.org/wiki/SAIL_(programming_language)" }],
  });

  g.buildPlang("pl+sas").merge({
    name: "SAS",
    websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_language" }],
  });

  g.buildPlang("pl+sas-system").merge({
    name: "SAS",
    websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_System" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png/120px-%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png",
      },
    ],
    releases: [{ version: "9.4", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+sasl").merge({
    name: "SASL",
    websites: [{ kind: "wikipedia", title: "SASL", href: "https://en.wikipedia.org/wiki/SASL_(programming_language)" }],
  });

  g.buildPlang("pl+sather").merge({
    name: "Sather",
    websites: [{ kind: "wikipedia", title: "Sather", href: "https://en.wikipedia.org/wiki/Sather" }],
    releases: [{ version: "1.2.3", date: "2007-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+sawzall").merge({
    name: "Sawzall",
    websites: [
      { kind: "wikipedia", title: "Sawzall", href: "https://en.wikipedia.org/wiki/Sawzall_(programming_language)" },
    ],
  });

  g.buildPlang("pl+sbcl").merge({
    name: "SBCL",
    websites: [{ kind: "wikipedia", title: "SBCL", href: "https://en.wikipedia.org/wiki/SBCL" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SBCL_screenshot.png/250px-SBCL_screenshot.png",
      },
    ],
    releases: [{ version: "2.4.5", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+scaleform-gfx").merge({
    name: "Scaleform GFx",
    websites: [{ kind: "wikipedia", title: "Scaleform GFx", href: "https://en.wikipedia.org/wiki/Scaleform_GFx" }],
  });

  g.buildPlang("pl+scm").merge({
    name: "SCM",
    websites: [{ kind: "wikipedia", title: "SCM", href: "https://en.wikipedia.org/wiki/SCM_(Scheme_implementation)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/SCM_64.png" }],
    releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+script.net").merge({
    name: "Script.NET",
    websites: [{ kind: "wikipedia", title: "Script.NET", href: "https://en.wikipedia.org/wiki/Script.NET" }],
  });

  g.buildPlang("pl+scripting").merge({
    name: "Scripting language",
    websites: [
      { kind: "wikipedia", title: "Scripting language", href: "https://en.wikipedia.org/wiki/Scripting_language" },
    ],
  });

  g.buildPlang("pl+sed").merge({
    name: "sed",
    websites: [{ kind: "wikipedia", title: "sed", href: "https://en.wikipedia.org/wiki/Sed" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sed_stream_editor_cropped1.jpg/300px-Sed_stream_editor_cropped1.jpg",
      },
    ],
  });

  g.buildPlang("pl+seed7").merge({
    name: "Seed7",
    websites: [{ kind: "wikipedia", title: "Seed7", href: "https://en.wikipedia.org/wiki/Seed7" }],
    releases: [{ version: "unknown", date: "2023-05-29", kind: "stable" }],
  });

  g.buildPlang("pl+semi-automatic-ground-environment").merge({
    name: "SAGE",
    websites: [
      { kind: "wikipedia", title: "SAGE", href: "https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment" },
    ],
  });

  g.buildPlang("pl+sensetalk").merge({
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
  });

  g.buildPlang("pl+sequencel").merge({
    name: "SequenceL",
    websites: [{ kind: "wikipedia", title: "SequenceL", href: "https://en.wikipedia.org/wiki/SequenceL" }],
  });

  g.buildPlang("pl+setl").merge({
    name: "SETL",
    websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/SETL" }],
    releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+setl2").merge({
    name: "SETL2",
    websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }],
    releases: [{ version: "1.1", date: "2005-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+shading").merge({
    name: "shading language",
    websites: [
      { kind: "wikipedia", title: "shading language", href: "https://en.wikipedia.org/wiki/Shading_language" },
    ],
  });

  g.buildPlang("pl+short-code").merge({
    name: "Short Code",
    websites: [
      { kind: "wikipedia", title: "Short Code", href: "https://en.wikipedia.org/wiki/Short_Code_(computer_language)" },
    ],
  });

  g.buildPlang("pl+siemens").merge({
    name: "Siemens",
    websites: [{ kind: "wikipedia", title: "Siemens", href: "https://en.wikipedia.org/wiki/Siemens" }],
  });

  g.buildPlang("pl+silverfrost-ftn95").merge({
    name: "Silverfrost FTN95: Fortran for Windows",
    websites: [{ kind: "wikipedia", title: "Silverfrost", href: "https://en.wikipedia.org/wiki/Silverfrost_FTN95" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a1/Silverfrost_ftn95.jpg" }],
    releases: [{ version: "9.00", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+simscript").merge({
    name: "Simscript",
    websites: [{ kind: "wikipedia", title: "Simscript", href: "https://en.wikipedia.org/wiki/Simscript" }],
  });

  g.buildPlang("pl+simula").merge({
    name: "Simula",
    websites: [{ kind: "wikipedia", title: "Simula", href: "https://en.wikipedia.org/wiki/Simula" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
  });

  g.buildPlang("pl+simula-67").merge({
    name: "Simula",
    websites: [{ kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
  });

  g.buildPlang("pl+simula67").merge({
    name: "Simula",
    websites: [{ kind: "wikipedia", title: "Simula67", href: "https://en.wikipedia.org/wiki/Simula67" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
  });

  g.buildPlang("pl+simulink").merge({
    name: "Simulink",
    websites: [{ kind: "wikipedia", title: "Simulink", href: "https://en.wikipedia.org/wiki/Simulink" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Simulink_Logo_%28non-wordmark%29.png/100px-Simulink_Logo_%28non-wordmark%29.png",
      },
    ],
    releases: [{ version: "10.7", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+singularity").merge({
    name: "Singularity",
    websites: [
      { kind: "wikipedia", title: "Singularity", href: "https://en.wikipedia.org/wiki/Singularity_(operating_system)" },
    ],
  });

  g.buildPlang("pl+siod").merge({
    name: "SIOD",
    websites: [{ kind: "wikipedia", title: "SIOD", href: "https://en.wikipedia.org/wiki/SIOD" }],
    releases: [{ version: "3.63", date: "2008-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+sisal").merge({
    name: "SISAL",
    websites: [{ kind: "wikipedia", title: "SISAL", href: "https://en.wikipedia.org/wiki/SISAL" }],
  });

  g.buildPlang("pl+sketchpad").merge({
    name: "Sketchpad",
    websites: [{ kind: "wikipedia", title: "Sketchpad", href: "https://en.wikipedia.org/wiki/Sketchpad" }],
  });

  g.buildPlang("pl+skill").merge({
    name: "SKILL",
    websites: [{ kind: "wikipedia", title: "SKILL", href: "https://en.wikipedia.org/wiki/SKILL" }],
  });

  g.buildPlang("pl+small").merge({
    name: "Small Machine Algol Like Language",
    websites: [
      { kind: "wikipedia", title: "Small Machine Algol Like Language", href: "https://en.wikipedia.org/wiki/SMALL" },
    ],
  });

  g.buildPlang("pl+small-c").merge({
    name: "Small-C",
    websites: [{ kind: "wikipedia", title: "Small-C", href: "https://en.wikipedia.org/wiki/Small-C" }],
  });

  g.buildPlang("pl+smarteiffel").merge({
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  g.buildPlang("pl+snap-").merge({
    name: "Snap!",
    websites: [
      { kind: "wikipedia", title: "Snap!", href: "https://en.wikipedia.org/wiki/Snap!_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Snap%21.svg" }],
    releases: [{ version: "9.2.17", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+sp-slashk").merge({
    name: "SP/k",
    websites: [{ kind: "wikipedia", title: "SP/k", href: "https://en.wikipedia.org/wiki/SP/k" }],
  });

  g.buildPlang("pl+sparc").merge({
    name: "SPARC",
    websites: [{ kind: "wikipedia", title: "SPARC", href: "https://en.wikipedia.org/wiki/SPARC" }],
  });

  g.buildPlang("pl+sparql").merge({
    name: "SPARQL",
    websites: [{ kind: "wikipedia", title: "SPARQL", href: "https://en.wikipedia.org/wiki/SPARQL" }],
    releases: [{ version: "1.1", date: "2013-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+speakeasy").merge({
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
  });

  g.buildPlang("pl+speedcoding").merge({
    name: "Speedcoding",
    websites: [{ kind: "wikipedia", title: "Speedcoding", href: "https://en.wikipedia.org/wiki/Speedcoding" }],
  });

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

  g.buildPlang("pl+spitbol").merge({
    name: "SPITBOL",
    websites: [{ kind: "wikipedia", title: "SPITBOL", href: "https://en.wikipedia.org/wiki/SPITBOL" }],
  });

  g.buildPlang("pl+squirrel").merge({
    name: "Squirrel",
    websites: [
      { kind: "wikipedia", title: "Squirrel", href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)" },
    ],
    releases: [{ version: "3.2", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+starlogo").merge({
    name: "StarLogo",
    websites: [{ kind: "wikipedia", title: "StarLogo", href: "https://en.wikipedia.org/wiki/StarLogo" }],
    releases: [{ version: "2.1", date: "2018-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+stata").merge({
    name: "Stata",
    websites: [{ kind: "wikipedia", title: "Stata", href: "https://en.wikipedia.org/wiki/Stata" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Stata_logo_med_blue.png/120px-Stata_logo_med_blue.png",
      },
    ],
    releases: [{ version: "18.0", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+stoic").merge({
    name: "STOIC",
    websites: [{ kind: "wikipedia", title: "STOIC", href: "https://en.wikipedia.org/wiki/STOIC" }],
  });

  g.buildPlang("pl+strand").merge({
    name: "Strand",
    websites: [
      { kind: "wikipedia", title: "Strand", href: "https://en.wikipedia.org/wiki/Strand_(programming_language)" },
    ],
  });

  g.buildPlang("pl+strongtalk").merge({
    name: "Strongtalk",
    websites: [{ kind: "wikipedia", title: "Strongtalk", href: "https://en.wikipedia.org/wiki/Strongtalk" }],
    releases: [{ version: "2.0", date: "2006-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+subl").merge({
    name: "SubL",
    websites: [{ kind: "wikipedia", title: "SubL", href: "https://en.wikipedia.org/wiki/SubL" }],
  });

  g.buildPlang("pl+superplan").merge({
    name: "Superplan",
    websites: [{ kind: "wikipedia", title: "Superplan", href: "https://en.wikipedia.org/wiki/Superplan" }],
  });

  g.buildPlang("pl+supertalk").merge({
    name: "SuperTalk",
    websites: [{ kind: "wikipedia", title: "SuperTalk", href: "https://en.wikipedia.org/wiki/SuperTalk" }],
  });

  g.buildPlang("pl+sympl").merge({
    name: "SYMPL",
    websites: [{ kind: "wikipedia", title: "SYMPL", href: "https://en.wikipedia.org/wiki/SYMPL" }],
  });

  g.buildPlang("pl+tads").merge({
    name: "TADS",
    websites: [{ kind: "wikipedia", title: "TADS", href: "https://en.wikipedia.org/wiki/TADS" }],
    releases: [{ version: "3.1.3", date: "2013-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+tail-call").merge({
    name: "properly tail recursive",
    websites: [
      { kind: "wikipedia", title: "properly tail recursive", href: "https://en.wikipedia.org/wiki/Tail_call" },
    ],
  });

  g.buildPlang("pl+telcomp").merge({
    name: "TELCOMP",
    websites: [{ kind: "wikipedia", title: "TELCOMP", href: "https://en.wikipedia.org/wiki/TELCOMP" }],
  });

  g.buildPlang("pl+tex").merge({
    name: "TeX",
    websites: [{ kind: "wikipedia", title: "TeX", href: "https://en.wikipedia.org/wiki/TeX" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/68/TeX_logo.svg" }],
    releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    extensions: [".tex"],
  });

  g.buildPlang("pl+threading-building-blocks").merge({
    name: "Threading Building Blocks",
    websites: [
      {
        kind: "wikipedia",
        title: "Threading Building Blocks",
        href: "https://en.wikipedia.org/wiki/Threading_Building_Blocks",
      },
    ],
    releases: [{ version: "2021.8", date: "2021-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+tk").merge({
    name: "Tk",
    websites: [{ kind: "wikipedia", title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tcl-Tk_universal_scripting.svg" },
    ],
    releases: [{ version: "8.6.13", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+tmg").merge({
    name: "TMGUnix TMG",
    websites: [{ kind: "wikipedia", title: "TMG", href: "https://en.wikipedia.org/wiki/TMG_(language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Brainfuck_to_C_translator_in_Unix_TMG.png/225px-Brainfuck_to_C_translator_in_Unix_TMG.png",
      },
    ],
  });

  g.buildPlang("pl+transaction-application").merge({
    name: "Transaction Programming Language (TAL)",
    websites: [
      {
        kind: "wikipedia",
        title: "Transaction Programming Language (TAL)",
        href: "https://en.wikipedia.org/wiki/Transaction_Application_Language",
      },
    ],
  });

  g.buildPlang("pl+transcript").merge({
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
  });

  g.buildPlang("pl+trueimage").merge({
    name: "TrueImage",
    websites: [{ kind: "wikipedia", title: "TrueImage", href: "https://en.wikipedia.org/wiki/TrueImage" }],
  });

  g.buildPlang("pl+ttm").merge({
    name: "TTM",
    websites: [{ kind: "wikipedia", title: "TTM", href: "https://en.wikipedia.org/wiki/TTM_(programming_language)" }],
    releases: [{ version: "1.0", kind: "stable" }],
  });

  g.buildPlang("pl+turtlestitch").merge({
    name: "TurtleStitch",
    websites: [{ kind: "wikipedia", title: "Turtlestitch", href: "https://en.wikipedia.org/wiki/Turtlestitch" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turtlestitch_Logo.png/121px-Turtlestitch_Logo.png",
      },
    ],
    releases: [{ version: "2.7.7", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+tutor").merge({
    name: "TUTOR",
    websites: [{ kind: "wikipedia", title: "TUTOR", href: "https://en.wikipedia.org/wiki/TUTOR" }],
  });

  g.buildPlang("pl+tweak").merge({
    name: "Tweak",
    websites: [
      { kind: "wikipedia", title: "Tweak", href: "https://en.wikipedia.org/wiki/Tweak_(programming_environment)" },
    ],
  });

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

  g.buildPlang("pl+ucblogo").merge({
    name: "UCBLogo",
    websites: [{ kind: "wikipedia", title: "UCBLogo", href: "https://en.wikipedia.org/wiki/UCBLogo" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ubclogo_spiral.png/121px-Ubclogo_spiral.png",
      },
    ],
    releases: [{ version: "6.2.1", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+uefn").merge({
    name: "UEFN",
    websites: [{ kind: "wikipedia", title: "UEFN", href: "https://en.wikipedia.org/wiki/UEFN" }],
  });

  g.buildPlang("pl+uml").merge({
    name: "UML",
    websites: [{ kind: "wikipedia", title: "UML", href: "https://en.wikipedia.org/wiki/Unified_Modeling_Language" }],
  });

  g.buildPlang("pl+unicon").merge({
    name: "Unicon",
    websites: [
      { kind: "wikipedia", title: "Unicon", href: "https://en.wikipedia.org/wiki/Unicon_(programming_language)" },
    ],
  });

  g.buildPlang("pl+uniface").merge({
    name: "Uniface",
    websites: [
      { kind: "wikipedia", title: "Uniface", href: "https://en.wikipedia.org/wiki/Uniface_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_Payoff_RGB.svg" }],
    releases: [{ version: "10.4.01.018", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+unified-parallel-c").merge({
    name: "Unified Parallel C (UPC)",
    websites: [
      { kind: "wikipedia", title: "Unified Parallel C", href: "https://en.wikipedia.org/wiki/Unified_Parallel_C" },
    ],
    releases: [{ version: "2022.10.0", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+univac-1108").merge({
    name: "UNIVAC 1108",
    websites: [{ kind: "wikipedia", title: "UNIVAC 1108", href: "https://en.wikipedia.org/wiki/UNIVAC_1108" }],
  });

  g.buildPlang("pl+unix-shell").merge({
    name: "Unix shell",
    websites: [{ kind: "wikipedia", title: "Unix shell", href: "https://en.wikipedia.org/wiki/Unix_shell" }],
  });

  g.buildPlang("pl+urbiscript").merge({
    name: "urbiscript",
    websites: [{ kind: "wikipedia", title: "urbiscript", href: "https://en.wikipedia.org/wiki/Urbiscript" }],
    releases: [{ version: "2.7.4", date: "2011-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+v8").merge({
    name: "V8",
    websites: [{ kind: "wikipedia", title: "V8", href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" }],
  });

  g.buildPlang("pl+vax").merge({
    name: "VAX",
    websites: [{ kind: "wikipedia", title: "VAX", href: "https://en.wikipedia.org/wiki/VAX" }],
  });

  g.buildPlang("pl+vhdl-ams").merge({
    name: "VHDL-AMS",
    websites: [{ kind: "wikipedia", title: "VHDL-AMS", href: "https://en.wikipedia.org/wiki/VHDL-AMS" }],
  });

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

  g.buildPlang("pl+visual-dataflex").merge({
    name: "DataFlex",
    websites: [{ kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/Visual_DataFlex" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
      },
    ],
    releases: [{ version: "24.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+visual-eiffel").merge({
    name: "Visual Eiffel",
    websites: [{ kind: "wikipedia", title: "Visual Eiffel", href: "https://en.wikipedia.org/wiki/Visual_Eiffel" }],
  });

  g.buildPlang("pl+visual-foxpro").merge({
    name: "Visual FoxPro",
    websites: [{ kind: "wikipedia", title: "Visual FoxPro", href: "https://en.wikipedia.org/wiki/Visual_FoxPro" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/VisualFoxProScreenshot.png/220px-VisualFoxProScreenshot.png",
      },
    ],
  });

  g.buildPlang("pl+visual-j-sharp").merge({
    name: "Visual J#",
    websites: [{ kind: "wikipedia", title: "J#", href: "https://en.wikipedia.org/wiki/Visual_J_Sharp" }],
  });

  g.buildPlang("pl+visual-jpp").merge({
    name: "Visual J++",
    websites: [{ kind: "wikipedia", title: "J++", href: "https://en.wikipedia.org/wiki/Visual_J%2B%2B" }],
  });

  g.buildPlang("pl+visual-prolog").merge({
    name: "Visual Prolog",
    websites: [{ kind: "wikipedia", title: "Visual Prolog", href: "https://en.wikipedia.org/wiki/Visual_Prolog" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Visual_Prolog_IDE_Screenshot.png/300px-Visual_Prolog_IDE_Screenshot.png",
      },
    ],
    releases: [{ version: "unknown", date: "1105-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+visual-studio-code").merge({
    name: "Visual Studio Code",
    websites: [
      { kind: "wikipedia", title: "Visual Studio Code", href: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
    ],
  });

  g.buildPlang("pl+visualworks").merge({
    name: "VisualWorks",
    websites: [{ kind: "wikipedia", title: "VisualWorks", href: "https://en.wikipedia.org/wiki/VisualWorks" }],
  });

  g.buildPlang("pl+vp-info").merge({
    name: "VP-Info",
    websites: [{ kind: "wikipedia", title: "VP-Info", href: "https://en.wikipedia.org/wiki/VP-Info" }],
  });

  g.buildPlang("pl+vue.js").merge({
    name: "Vue",
    websites: [{ kind: "wikipedia", title: "Vue", href: "https://en.wikipedia.org/wiki/Vue.js#Official_libraries" }],
  });

  g.buildPlang("pl+watbol").merge({
    name: "WATBOL",
    websites: [{ kind: "wikipedia", title: "WATBOL", href: "https://en.wikipedia.org/wiki/WATBOL" }],
  });

  g.buildPlang("pl+watcom-c-compiler").merge({
    name: "Open Watcom C/C++",
    websites: [{ kind: "wikipedia", title: "Open Watcom", href: "https://en.wikipedia.org/wiki/Watcom_C_compiler" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Watcom_logo.png" }],
    releases: [
      { version: "1.9", date: "2010-01-01", kind: "stable" },
      { version: "2.0", date: "2022-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+web").merge({
    name: "WEB",
    websites: [{ kind: "wikipedia", title: "CWEB", href: "https://en.wikipedia.org/wiki/WEB" }],
    releases: [{ version: "3.67", date: "2006-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+wolfram").merge({
    name: "Wolfram Language",
    websites: [
      { kind: "wikipedia", title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_Language" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/1/17/Wolfram_Language_Logo_2016.svg" }],
    releases: [{ version: "14.0.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+wolfram-mathematica").merge({
    name: "Wolfram Mathematica",
    websites: [{ kind: "wikipedia", title: "Mathematica", href: "https://en.wikipedia.org/wiki/Wolfram_Mathematica" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg" }],
  });

  g.buildPlang("pl+x-slashopen").merge({
    name: "X/Open",
    websites: [{ kind: "wikipedia", title: "X/Open", href: "https://en.wikipedia.org/wiki/X/Open" }],
  });

  g.buildPlang("pl+x10").merge({
    name: "X10",
    websites: [{ kind: "wikipedia", title: "X10", href: "https://en.wikipedia.org/wiki/X10_(programming_language)" }],
    releases: [{ version: "2.6.2", date: "2019-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+x86").merge({
    name: "x86",
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  g.buildPlang("pl+xalan").merge({
    name: "Xalan",
    websites: [{ kind: "wikipedia", title: "Apache Xalan", href: "https://en.wikipedia.org/wiki/Xalan" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Apache_Xalan_logo.svg" }],
    releases: [{ version: "2.7.3", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+xbase").merge({
    name: "xBase",
    websites: [{ kind: "wikipedia", title: "xBase", href: "https://en.wikipedia.org/wiki/XBase" }],
  });

  g.buildPlang("pl+xcos").merge({
    name: "Scilab",
    websites: [{ kind: "wikipedia", title: "Xcos", href: "https://en.wikipedia.org/wiki/Xcos" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
      },
    ],
    releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+xedit").merge({
    name: "KEXX",
    websites: [{ kind: "wikipedia", title: "KEXX", href: "https://en.wikipedia.org/wiki/XEDIT#KEXX" }],
  });

  g.buildPlang("pl+xharbour").merge({
    name: "xHarbour",
    websites: [{ kind: "wikipedia", title: "xHarbour", href: "https://en.wikipedia.org/wiki/XHarbour" }],
  });

  g.buildPlang("pl+xpl").merge({
    name: "XPL",
    websites: [{ kind: "wikipedia", title: "XPL", href: "https://en.wikipedia.org/wiki/XPL" }],
  });

  g.buildPlang("pl+xtalk").merge({
    name: "HyperTalk",
    websites: [{ kind: "wikipedia", title: "xTalk", href: "https://en.wikipedia.org/wiki/XTalk" }],
  });

  g.buildPlang("pl+yacc").merge({
    name: "Yacc",
    websites: [{ kind: "wikipedia", title: "Yacc", href: "https://en.wikipedia.org/wiki/Yacc" }],
  });

  g.buildPlang("pl+yamazaki-mazak-corporation").merge({
    name: "Mazak",
    websites: [{ kind: "wikipedia", title: "Mazak", href: "https://en.wikipedia.org/wiki/Yamazaki_Mazak_Corporation" }],
  });

  g.buildPlang("pl+yap").merge({
    name: "YAP Prolog",
    websites: [{ kind: "wikipedia", title: "YAP", href: "https://en.wikipedia.org/wiki/YAP_(Prolog)" }],
    releases: [
      { version: "6.3.3", date: "2013-01-01", kind: "stable" },
      { version: "7.1", date: "2016-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+yarv").merge({
    name: "YARV",
    websites: [{ kind: "wikipedia", title: "YARV", href: "https://en.wikipedia.org/wiki/YARV" }],
    releases: [{ version: "3.3.3", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+yhc").merge({
    name: "Yhc",
    websites: [{ kind: "wikipedia", title: "Yhc", href: "https://en.wikipedia.org/wiki/Yhc" }],
  });

  g.buildPlang("pl+yorick").merge({
    name: "Yorick",
    websites: [
      { kind: "wikipedia", title: "Yorick", href: "https://en.wikipedia.org/wiki/Yorick_(programming_language)" },
    ],
    releases: [{ version: "2.2.04", date: "2015-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+z-machine").merge({
    name: "ZIL",
    websites: [{ kind: "wikipedia", title: "ZIL", href: "https://en.wikipedia.org/wiki/Z-machine" }],
  });

  g.buildPlang("pl+z-notation").merge({
    name: "Z",
    websites: [{ kind: "wikipedia", title: "Z", href: "https://en.wikipedia.org/wiki/Z_notation" }],
  });

  g.buildPlang("pl+zend-engine").merge({
    name: "Zend Engine",
    websites: [{ kind: "wikipedia", title: "Zend Engine", href: "https://en.wikipedia.org/wiki/Zend_Engine" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Zend_Engine_logo.png/120px-Zend_Engine_logo.png",
      },
    ],
    releases: [{ version: "3.4", kind: "stable" }],
  });

  g.buildPlang("pl+zonnon").merge({
    name: "Zonnon",
    websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
  });
}
