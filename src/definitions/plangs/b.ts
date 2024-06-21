import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ballerina",
    "Ballerina",
    {
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
          { href: "https://github.com/ballerina-platform/ballerina-lang", title: "Ballerina source code" },
        ],
        license: [
          { href: "https://github.com/ballerina-platform/ballerina-lang/blob/master/LICENSE", title: "WSO2 / LICENSE" },
        ],
      },
      releases: [{ version: "unknown", date: "2017-01-01", kind: "first" }],
    },
    {
      influences: ["pl+java", "pl+javascript", "pl+go", "pl+rust", "pl+c-sharp"],
      licenses: ["lic+apache"],
      people: [
        ["person+sanjiva-weerawarana", "designer"],
        ["person+james-clark", "designer"],
        ["person+frank-leymann", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+structural", "tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+bash",
    "Bash",
    {
      name: "Bash",
      websites: [
        { kind: "wikipedia", title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
        { kind: "homepage", title: "www.gnu.org/software/bash/", href: "https://www.gnu.org/software/bash/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" }],
      releases: [
        { version: "unknown", date: "1989-01-01", kind: "first" },
        { version: "5.2.21", date: "2023-01-01", kind: "stable" },
      ],
      references: { stable_release: [{ href: "https://ftp.gnu.org/gnu/bash/", title: "bash-5.2.21.tar.gz" }] },
    },
    {
      licenses: ["lic+gpl-3", "lic+gpl-2", "lic+gpl-1"],
      people: [["person+chet-ramey", "designer"]],
      platforms: ["platf+gnu"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+basic",
    "BASIC",
    {
      name: "BASIC",
      websites: [{ kind: "wikipedia", title: "BASIC", href: "https://en.wikipedia.org/wiki/BASIC" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AtariBASIC.png/300px-AtariBASIC.png",
        },
      ],
      releases: [{ version: "unknown", date: "1964-05-01", kind: "first" }],
    },
    {
      dialects: ["pl+atari-basic", "pl+vilnius-basic", "pl+open-programming-language-(opl)"],
      implementations: [
        "pl+dartmouth-basic",
        "pl+tiny-basic",
        "pl+applesoft-basic",
        "pl+atari-basic",
        "pl+sinclair-basic",
        "pl+commodore-basic",
        "pl+bbc-basic",
        "pl+ti-basic",
        "pl+casio-basic",
        "pl+microsoft-basic",
        "pl+qb64",
        "pl+freebasic",
        "pl+liberty-basic",
        "pl+powerbasic",
        "pl+quickbasic",
      ],
      influenced: [
        "pl+comal",
        "pl+autoit",
        "pl+fortran",
        "pl+ruby",
        "pl+ezhil",
        "pl+dibol",
        "pl+bs",
        "pl+visual-basic",
        "pl+euphoria",
        "pl+speedcoding",
        "pl+ring",
        "pl+perl",
        "pl+d-programming-language",
      ],
      influences: [
        "pl+algol-60",
        "pl+fortran-ii",
        "pl+joss",
        "pl+comal",
        "pl+visual-basic",
        "pl+visual-basic-.net",
        "pl+grass",
        "pl+xojo",
      ],
      paradigms: ["para+non-structured", "para+imperative", "para+objects"],
      people: [
        ["person+john-g-kemeny", "designer"],
        ["person+thomas-e-kurtz", "designer"],
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+blockly",
    "Blockly",
    {
      name: "Blockly",
      websites: [
        { kind: "wikipedia", title: "Blockly", href: "https://en.wikipedia.org/wiki/Blockly" },
        { kind: "homepage", title: "developers.google.com/blockly", href: "http://developers.google.com/blockly" },
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
    },
    { licenses: ["lic+apache-2"], platforms: ["platf+web"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+boomerang",
    "Boomerang",
    {
      name: "Boomerang",
      websites: [
        {
          kind: "wikipedia",
          title: "Boomerang",
          href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)",
        },
        { kind: "homepage", title: "www.seas.upenn.edu/~harmony/", href: "http://www.seas.upenn.edu/~harmony/" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "0.2", date: "2009-09-02", kind: "stable" },
      ],
    },
    {
      influences: ["pl+ocaml", "pl+xslt"],
      people: [
        ["person+nate-foster", "designer"],
        ["person+benjamin-c-pierce", "designer"],
      ],
      platforms: ["platf+linux", "platf+macos"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+bosque",
    "Bosque",
    {
      name: "Bosque",
      websites: [
        { kind: "wikipedia", title: "Bosque", href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)" },
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
        first_appeared: [{ href: "https://github.com/Microsoft/BosqueLanguage", title: "BosqueLanguage" }],
        filename_extensions: [
          { href: "https://bosque-lang.com/docs/using-bosque/", title: "Using Bosque - Bosque Programming Language" },
        ],
      },
      releases: [{ version: "unknown", date: "2019-03-03", kind: "first" }],
      extensions: [".bsq"],
    },
    {
      influences: ["pl+javascript", "pl+typescript", "pl+ml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+typed-language"],
      people: [["person+mark-marron", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+bourne-shell",
    "Bourne shell",
    {
      name: "Bourne shell",
      websites: [{ kind: "wikipedia", title: "Bourne shell", href: "https://en.wikipedia.org/wiki/Bourne_shell" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png/220px-Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png",
        },
      ],
      releases: [{ version: "unknown", date: "1979-01-01", kind: "first" }],
    },
    { influenced: ["pl+rc"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+brainfuck",
    "Brainfuck",
    {
      name: "Brainfuck",
      websites: [{ kind: "wikipedia", title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck" }],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
      extensions: [".b", ".bf"],
    },
    {
      dialects: ["pl+p--"],
      influenced: ["pl+p--", "pl+malbolge"],
      influences: ["pl+p--", "pl+false", "pl+malbolge"],
      paradigms: ["para+esoteric", "para+imperative", "para+structured"],
      people: [["person+urban-muller", "designer"]],
    },
  );
}
