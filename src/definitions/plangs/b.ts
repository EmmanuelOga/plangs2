import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+Ballerina", "Ballerina", {
    name: "Ballerina",
    websites: [
      {
        kind: "wikipedia",
        title: "Ballerina",
        href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)",
      },
      { kind: "homepage", title: "ballerina.io", href: "http://ballerina.io/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
      },
    ],
    references: {
      designed_by: [
        {
          href: "https://web.archive.org/web/20200811095205/https://ballerina.io/spec/",
          title: "Ballerina Language Specification",
        },
      ],
      implementation_language: [
        {
          href: "https://github.com/ballerina-platform/ballerina-lang",
          title: "Ballerina source code",
        },
      ],
      license: [
        {
          href: "https://github.com/ballerina-platform/ballerina-lang/blob/master/LICENSE",
          title: "WSO2 / LICENSE",
        },
      ],
    },
    releases: [{ version: "unknown", date: "2017-01-01", kind: "first" }],
    people: [
      ["person+Sanjiva-Weerawarana", "designer"],
      ["person+James-Clark", "designer"],
      ["person+Frank-Leymann", "designer"],
    ],
    licenses: ["lic+apache"],
    typeSystems: ["tsys+structural", "tsys+strong", "tsys+static", "tsys+inferred"],
    platforms: ["platf+cross-platform"],
    influences: ["pl+Java", "pl+Javascript", "pl+Go", "pl+Rust", "pl+C-Sharp"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Bash", "Bash", {
    name: "Bash",
    websites: [
      { kind: "wikipedia", title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
      {
        kind: "homepage",
        title: "www.gnu.org/software/bash/",
        href: "https://www.gnu.org/software/bash/",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "1989-01-01", kind: "first" },
      { version: "5.2.21", date: "2023-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [{ href: "https://ftp.gnu.org/gnu/bash/", title: "bash-5.2.21.tar.gz" }],
    },
    people: [["person+Chet-Ramey", "designer"]],
    licenses: ["lic+gpl-3", "lic+gpl-2", "lic+gpl-1"],
    platforms: ["platf+gnu"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+BASIC", "BASIC", {
    name: "BASIC",
    websites: [{ kind: "wikipedia", title: "BASIC", href: "https://en.wikipedia.org/wiki/BASIC" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AtariBASIC.png/300px-AtariBASIC.png",
      },
    ],
    releases: [{ version: "unknown", date: "1964-05-01", kind: "first" }],
    people: [
      ["person+John-G-Kemeny", "designer"],
      ["person+Thomas-E-Kurtz", "designer"],
    ],
    paradigms: ["para+non-structured", "para+imperative", "para+objects"],
    implementations: [
      "pl+Dartmouth-BASIC",
      "pl+Tiny-BASIC",
      "pl+Applesoft-BASIC",
      "pl+Atari-BASIC",
      "pl+Sinclair-BASIC",
      "pl+Commodore-BASIC",
      "pl+BBC-BASIC",
      "pl+TI-BASIC",
      "pl+Casio-BASIC",
      "pl+Microsoft-BASIC",
      "pl+QB64",
      "pl+FreeBASIC",
      "pl+Liberty-BASIC",
      "pl+PowerBASIC",
      "pl+QuickBASIC",
    ],
    dialects: ["pl+Atari-BASIC", "pl+Vilnius-Basic", "pl+Open-Programming-Language-(OPL)"],
    influences: [
      "pl+ALGOL-60",
      "pl+FORTRAN-II",
      "pl+JOSS",
      "pl+COMAL",
      "pl+Visual-Basic",
      "pl+Visual-Basic-.NET",
      "pl+GRASS",
      "pl+Xojo",
    ],
    influenced: [
      "pl+COMAL",
      "pl+AutoIt",
      "pl+Fortran",
      "pl+Ezhil",
      "pl+DIBOL",
      "pl+bs",
      "pl+Visual-Basic",
      "pl+Euphoria",
      "pl+Speedcoding",
      "pl+Ring",
      "pl+Perl",
      "pl+D-programming-language",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Basic", "Basic", {
    name: "Basic",
    websites: [{ kind: "wikipedia", title: "Basic", href: "https://en.wikipedia.org/wiki/BASIC" }],
    influenced: ["pl+Ruby"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Blockly", "Blockly", {
    name: "Blockly",
    websites: [
      { kind: "wikipedia", title: "Blockly", href: "https://en.wikipedia.org/wiki/Blockly" },
      {
        kind: "homepage",
        title: "developers.google.com/blockly",
        href: "http://developers.google.com/blockly",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Blockly-Demo.png/220px-Blockly-Demo.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2012-01-01", kind: "first" },
      { version: "unknown", date: "2022-06-08", kind: "stable" },
    ],
    references: {
      stable_release: [
        {
          href: "https://github.com/google/blockly/releases/tag/blockly-v8.0.3",
          title: "Release Q1 2022 Patch 3 · google/Blockly",
        },
      ],
    },
    licenses: ["lic+apache-2"],
    platforms: ["platf+web"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Boomerang", "Boomerang", {
    name: "Boomerang",
    websites: [
      {
        kind: "wikipedia",
        title: "Boomerang",
        href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)",
      },
      {
        kind: "homepage",
        title: "www.seas.upenn.edu/~harmony/",
        href: "http://www.seas.upenn.edu/~harmony/",
      },
    ],
    releases: [
      { version: "unknown", date: "2008-01-01", kind: "first" },
      { version: "0.2", date: "2009-09-02", kind: "stable" },
    ],
    people: [
      ["person+Nate-Foster", "designer"],
      ["person+Benjamin-C-Pierce", "designer"],
    ],
    platforms: ["platf+linux", "platf+macos"],
    influences: ["pl+OCaml", "pl+XSLT"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Bosque", "Bosque", {
    name: "Bosque",
    websites: [
      {
        kind: "wikipedia",
        title: "Bosque",
        href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)",
      },
      {
        kind: "homepage",
        title: "www.microsoft.com/en-us/research/project/bosque-programming-language/",
        href: "https://www.microsoft.com/en-us/research/project/bosque-programming-language/",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png",
      },
    ],
    references: {
      first_appeared: [
        { href: "https://github.com/Microsoft/BosqueLanguage", title: "BosqueLanguage" },
      ],
      filename_extensions: [
        {
          href: "https://bosque-lang.com/docs/using-bosque/",
          title: "Using Bosque - Bosque Programming Language",
        },
      ],
    },
    releases: [{ version: "unknown", date: "2019-03-03", kind: "first" }],
    extensions: [".bsq"],
    people: [["person+Mark-Marron", "designer"]],
    licenses: ["lic+mit"],
    paradigms: ["para+multi-paradigm", "para+functional", "para+typed-language"],
    influences: ["pl+JavaScript", "pl+TypeScript", "pl+ML"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Bourne-shell", "Bourne shell", {
    name: "Bourne shell",
    websites: [
      {
        kind: "wikipedia",
        title: "Bourne shell",
        href: "https://en.wikipedia.org/wiki/Bourne_shell",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png/220px-Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png",
      },
    ],
    releases: [{ version: "unknown", date: "1979-01-01", kind: "first" }],
    influenced: ["pl+rc"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Brainfuck", "Brainfuck", {
    name: "Brainfuck",
    websites: [
      { kind: "wikipedia", title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck" },
    ],
    releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    extensions: [".b", ".bf"],
    people: [["person+Urban-Muller", "designer"]],
    paradigms: ["para+esoteric", "para+imperative", "para+structured"],
    dialects: ["pl+P--"],
    influences: ["pl+P--", "pl+FALSE", "pl+Malbolge"],
    influenced: ["pl+P--", "pl+Malbolge"],
  });
}
