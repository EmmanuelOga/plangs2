import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+allegro-common-lisp",
    "Allegro CL",
    {
      name: "Allegro CL",
      websites: [
        { kind: "wikipedia", title: "Allegro Common Lisp", href: "https://en.wikipedia.org/wiki/Allegro_Common_Lisp" },
        {
          kind: "homepage",
          title: "franz.com/products/allegro-common-lisp",
          href: "http://franz.com/products/allegro-common-lisp",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Allegro_Common_Lisp_emblem.png/121px-Allegro_Common_Lisp_emblem.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "11.0", date: "2024-01-09", kind: "stable" },
      ],
      scoping: ["dynamic"],
    },
    {
      implementations: ["pl+common-lisp"],
      influenced: ["pl+franz-lisp"],
      influences: ["pl+franz-lisp", "pl+lisp", "pl+maclisp", "pl+macsyma"],
      licenses: ["lic+freeware", "lic+proprietary"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      people: [["person+john-foderaro", "designer"]],
      platforms: ["platf+arm", "platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define("pl+armed-bear-common-lisp", "ABCL", {
    name: "ABCL",
    websites: [{ kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Armed_Bear_Common_Lisp" }],
  });

  /**/

  lb.define(
    "pl+autolisp",
    "AutoLISP",
    {
      name: "AutoLISP",
      websites: [{ kind: "wikipedia", title: "AutoLISP", href: "https://en.wikipedia.org/wiki/AutoLISP" }],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", date: "1995-01-01", kind: "stable" },
      ],
      scoping: ["dynamic"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+common-lisp"],
      influences: ["pl+lisp"],
      people: [["person+david-betz", "designer"]],
      platforms: ["platf+ia-32", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define(
    "pl+bbn-lisp",
    "BBN LISP",
    {
      name: "BBN LISP",
      websites: [{ kind: "wikipedia", title: "BBN LISP", href: "https://en.wikipedia.org/wiki/BBN_LISP" }],
    },
    { influenced: ["pl+interlisp"] },
  );

  /**/

  lb.define(
    "pl+clisp",
    "CLISP",
    {
      name: "CLISP",
      websites: [
        { kind: "wikipedia", title: "CLISP", href: "https://en.wikipedia.org/wiki/CLISP" },
        { kind: "homepage", title: "www.gnu.org/software/clisp/", href: "https://www.gnu.org/software/clisp/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LogoCLISP.jpg" }],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "2.49", date: "2010-07-07", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl"] },
  );

  /**/

  lb.define(
    "pl+common-lisp",
    "Common Lisp",
    {
      name: "Common Lisp",
      websites: [
        { kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Common_Lisp" },
        { kind: "homepage", title: "common-lisp.net", href: "http://common-lisp.net" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
      scoping: ["dynamic"],
      extensions: [".lisp", ".lsp", ".l", ".cl", ".fasl"],
    },
    {
      dialects: ["pl+lisp"],
      implementations: [
        "pl+allegro-common-lisp",
        "pl+armed-bear-common-lisp",
        "pl+clisp",
        "pl+clozure-cl",
        "pl+cmucl",
        "pl+embeddable-common-lisp",
        "pl+genera",
        "pl+gnu-common-lisp",
        "pl+lispworks",
        "pl+sbcl",
      ],
      influenced: [
        "pl+clojure",
        "pl+emacs-lisp",
        "pl+embeddable-common-lisp",
        "pl+eulisp",
        "pl+franz-lisp",
        "pl+hy",
        "pl+islisp",
        "pl+lfe",
        "pl+lispworks",
        "pl+maclisp",
        "pl+mdl",
        "pl+newlisp",
        "pl+sather",
        "pl+scala",
        "pl+scheme",
        "pl+skill",
        "pl+star-lisp",
        "pl+zetalisp",
      ],
      influences: [
        "pl+autolisp",
        "pl+cadence-skill",
        "pl+clojure",
        "pl+dylan",
        "pl+emacs-lisp",
        "pl+eulisp",
        "pl+interlisp",
        "pl+islisp",
        "pl+julia",
        "pl+lisp",
        "pl+lisp-machine-lisp",
        "pl+maclisp",
        "pl+moose",
        "pl+r",
        "pl+scheme",
        "pl+star-lisp",
        "pl+subl",
      ],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      people: [
        ["person+dan-weinreb", "designer"],
        ["person+david-a-moon", "designer"],
        ["person+guy-steele", "designer"],
        ["person+kent-pitman", "designer"],
        ["person+richard-p-gabriel", "designer"],
        ["person+scott-fahlman", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+common-lisp-object-system",
    "Common Lisp Object System",
    {
      name: "Common Lisp Object System",
      websites: [{ kind: "wikipedia", title: "CLOS", href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System" }],
    },
    { influenced: ["pl+dylan", "pl+eulisp", "pl+skill", "pl+smalltalk"] },
  );

  /**/

  lb.define(
    "pl+emacs-lisp",
    "Emacs Lisp",
    {
      name: "Emacs Lisp",
      websites: [
        { kind: "wikipedia", title: "Emacs Lisp", href: "https://en.wikipedia.org/wiki/Emacs_Lisp" },
        { kind: "homepage", title: "www.gnu.org/software/emacs", href: "http://www.gnu.org/software/emacs" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" }],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "29.1", date: "2023-07-30", kind: "stable" },
      ],
      scoping: ["lexical"],
      extensions: [".el", ".elc", ".eln"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+common-lisp"],
      influences: ["pl+common-lisp", "pl+maclisp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+functional", "para+meta", "para+reflective"],
      people: [
        ["person+guy-l-steele", "designer"],
        ["person+richard-stallman", "designer"],
      ],
      platforms: ["platf+emacs"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+embeddable-common-lisp",
    "ECL",
    {
      name: "ECL",
      websites: [
        {
          kind: "wikipedia",
          title: "Embeddable Common Lisp",
          href: "https://en.wikipedia.org/wiki/Embeddable_Common_Lisp",
        },
        { kind: "homepage", title: "ecl.common-lisp.dev", href: "https://ecl.common-lisp.dev" },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "23.9.9", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://ecl.common-lisp.dev/posts/ECL-2399-release.html", title: "ECL 23.9.9 release" },
        ],
      },
    },
    {
      implementations: ["pl+c", "pl+common-lisp"],
      influences: ["pl+c", "pl+common-lisp", "pl+lisp"],
      licenses: ["lic+lgpl"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      people: [
        ["person+daniel-kochmanski", "designer"],
        ["person+giuseppe-attardi", "designer"],
        ["person+marius-gerbershagen", "designer"],
      ],
      platforms: ["platf+android", "platf+arm", "platf+unix", "platf+win", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+eulisp",
    "EuLisp",
    {
      name: "EuLisp",
      websites: [{ kind: "wikipedia", title: "EuLisp", href: "https://en.wikipedia.org/wiki/EuLisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png" }],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "0.991", date: "2010-01-01", kind: "preview" },
      ],
      references: {
        preview_release: [
          {
            href: "https://web.archive.org/web/20120306014143/http://henry.github.com/EuLisp/Doc/EuLisp-0.991/eulisp.pdf",
            title: "Eulisp",
          },
        ],
        major_implementations: [{ href: "https://github.com/Henry/EuLisp", title: "Eulisp" }],
      },
      scoping: ["static", "dynamic"],
      extensions: [".em"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+common-lisp", "pl+dylan", "pl+islisp", "pl+oaklisp", "pl+scheme", "pl+t"],
      influences: [
        "pl+common-lisp",
        "pl+common-lisp-object-system",
        "pl+dylan",
        "pl+haskell",
        "pl+interlisp",
        "pl+islisp",
        "pl+lelisp",
        "pl+oaklisp",
        "pl+objvlisp",
        "pl+scheme",
        "pl+sml",
        "pl+t",
      ],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects"],
      platforms: ["platf+linux"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+franz-lisp",
    "Franz Lisp",
    {
      name: "Franz Lisp",
      websites: [{ kind: "wikipedia", title: "Franz Lisp", href: "https://en.wikipedia.org/wiki/Franz_Lisp" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png/300px-4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png",
        },
      ],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
      scoping: ["lexical"],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+c"],
      influenced: ["pl+allegro-common-lisp"],
      influences: ["pl+allegro-common-lisp", "pl+common-lisp", "pl+lisp", "pl+maclisp"],
      licenses: ["lic+freeware", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      people: [["person+richard-fateman", "designer"]],
      platforms: ["platf+openvms", "platf+unix"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+gnu-common-lisp",
    "GCL",
    {
      name: "GCL",
      websites: [
        { kind: "wikipedia", title: "GNU Common Lisp", href: "https://en.wikipedia.org/wiki/GNU_Common_Lisp" },
        { kind: "homepage", title: "www.gnu.org/software/gcl/", href: "https://www.gnu.org/software/gcl/" },
      ],
      references: {
        stable_release: [
          { href: "https://www.gnu.org/software/gcl/", title: "GCL – an implementation of Common Lisp" },
        ],
        license: [{ href: "http://directory.fsf.org/wiki/gcl", title: "GNU Common Lisp" }],
      },
      releases: [{ version: "2.6.14", date: "2023-01-13", kind: "stable" }],
    },
    { licenses: ["lic+gnu-library-gpl"] },
  );

  /**/

  lb.define(
    "pl+interlisp",
    "InterLisp",
    {
      name: "InterLisp",
      websites: [{ kind: "wikipedia", title: "Interlisp", href: "https://en.wikipedia.org/wiki/Interlisp" }],
      releases: [{ version: "unknown", date: "1968-01-01", kind: "first" }],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+c"],
      influenced: ["pl+common-lisp", "pl+eulisp", "pl+multilisp", "pl+zetalisp"],
      influences: ["pl+bbn-lisp", "pl+lisp", "pl+lisp-machine-lisp"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+dec",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+6502", "platf+atari"],
    },
  );

  /**/

  lb.define(
    "pl+islisp",
    "ISLISP",
    {
      name: "ISLISP",
      websites: [{ kind: "wikipedia", title: "ISLISP", href: "https://en.wikipedia.org/wiki/ISLISP" }],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+c", "pl+c-sharp", "pl+go", "pl+java", "pl+javascript", "pl+lisp"],
      influenced: ["pl+common-lisp", "pl+eulisp", "pl+lelisp", "pl+openlisp"],
      influences: ["pl+common-lisp", "pl+eulisp", "pl+le-lisp", "pl+scheme"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects", "para+reflection"],
      platforms: [
        "platf+android",
        "platf+bsd",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+qnx",
        "platf+win",
        "platf+x86-64",
      ],
    },
  );

  /**/

  lb.define(
    "pl+le-lisp",
    "Le Lisp",
    {
      name: "Le Lisp",
      websites: [{ kind: "wikipedia", title: "Le Lisp", href: "https://en.wikipedia.org/wiki/Le_Lisp" }],
    },
    { influenced: ["pl+islisp"] },
  );

  /**/

  lb.define(
    "pl+lelisp",
    "LeLisp",
    {
      name: "LeLisp",
      websites: [
        { kind: "wikipedia", title: "LeLisp", href: "https://en.wikipedia.org/wiki/LeLisp" },
        { kind: "homepage", title: "www.eligis.com/lelisp", href: "http://www.eligis.com/lelisp" },
      ],
      releases: [
        { version: "unknown", date: "1981-01-01", kind: "first" },
        { version: "15.26.13", date: "2020-01-08", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+c"],
      influenced: ["pl+eulisp"],
      influences: ["pl+islisp", "pl+lisp", "pl+openlisp"],
      licenses: ["lic+bsd-s", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      people: [
        ["person+emmanuel-st-james", "designer"],
        ["person+jean-marie-hullot", "designer"],
        ["person+jerome-chailloux", "designer"],
        ["person+matthieu-devin", "designer"],
      ],
      platforms: [
        "platf+bsd",
        "platf+dec",
        "platf+linux",
        "platf+mac",
        "platf+mips",
        "platf+openvms",
        "platf+unix",
        "platf+win",
        "platf+x86",
      ],
    },
  );

  /**/

  lb.define(
    "pl+lisp",
    "Lisp",
    {
      name: "Lisp",
      websites: [
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)" },
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
      releases: [{ version: "unknown", date: "1960-01-01", kind: "first" }],
      references: {
        influenced: [
          {
            href: "https://web.archive.org/web/20160408134008/http://julia.readthedocs.org/en/latest/manual/introduction/",
            title: "Introduction",
          },
          { href: "https://www.wolfram.com/language/faq/", title: "Wolfram Language Q&A" },
        ],
      },
    },
    {
      dialects: [
        "pl+allegro-common-lisp",
        "pl+arc",
        "pl+autolisp",
        "pl+clojure",
        "pl+common-lisp",
        "pl+cowsel",
        "pl+emacs-lisp",
        "pl+embeddable-common-lisp",
        "pl+eulisp",
        "pl+franz-lisp",
        "pl+gambit",
        "pl+game-oriented-assembly-lisp",
        "pl+gnu-guile",
        "pl+hy",
        "pl+interlisp",
        "pl+islisp",
        "pl+kawa",
        "pl+lelisp",
        "pl+lfe",
        "pl+lispworks",
        "pl+maclisp",
        "pl+mdl",
        "pl+multilisp",
        "pl+netlogo",
        "pl+newlisp",
        "pl+objectlogo",
        "pl+openlisp",
        "pl+pico",
        "pl+picolisp",
        "pl+pop-11",
        "pl+pop-2",
        "pl+racket",
        "pl+scheme",
        "pl+scm",
        "pl+siod",
        "pl+star-lisp",
        "pl+starlogo",
        "pl+t",
        "pl+ucblogo",
        "pl+zetalisp",
      ],
      influenced: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+allegro-common-lisp",
        "pl+amiga-e",
        "pl+arc",
        "pl+autolisp",
        "pl+ceylon",
        "pl+claire",
        "pl+clu",
        "pl+common-lisp",
        "pl+cowsel",
        "pl+curl",
        "pl+embeddable-common-lisp",
        "pl+erlang",
        "pl+factor",
        "pl+franz-lisp",
        "pl+gambit",
        "pl+game-oriented-assembly-lisp",
        "pl+gnu-guile",
        "pl+haskell",
        "pl+information-processing",
        "pl+interlisp",
        "pl+io",
        "pl+iswim",
        "pl+java",
        "pl+julia",
        "pl+kawa",
        "pl+lelisp",
        "pl+lispworks",
        "pl+little-b",
        "pl+mdl",
        "pl+multilisp",
        "pl+nemerle",
        "pl+nial",
        "pl+nim",
        "pl+nu",
        "pl+objectlogo",
        "pl+openlisp",
        "pl+oz",
        "pl+perl",
        "pl+pop-2",
        "pl+postscript",
        "pl+pure",
        "pl+python",
        "pl+r",
        "pl+rebol",
        "pl+red",
        "pl+rpl",
        "pl+ruby",
        "pl+scheme",
        "pl+scm",
        "pl+siod",
        "pl+smalltalk",
        "pl+squeak",
        "pl+star-lisp",
        "pl+tcl",
        "pl+ucblogo",
        "pl+visualworks",
        "pl+webassembly",
        "pl+wolfram",
        "pl+zetalisp",
      ],
      influences: [
        "pl+clips",
        "pl+clu",
        "pl+cowsel",
        "pl+dylan",
        "pl+elixir",
        "pl+forth",
        "pl+haskell",
        "pl+information-processing",
        "pl+io",
        "pl+javascript",
        "pl+julia",
        "pl+logo",
        "pl+lua",
        "pl+ml",
        "pl+ms-excel",
        "pl+nim",
        "pl+nu",
        "pl+ops5",
        "pl+perl",
        "pl+pop-11",
        "pl+pop-2",
        "pl+python",
        "pl+r",
        "pl+rebol",
        "pl+red",
        "pl+ruby",
        "pl+scala",
        "pl+smalltalk",
        "pl+swift",
        "pl+tcl",
        "pl+wolfram",
      ],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflective"],
      people: [
        ["person+john-mccarthy", "designer"],
        ["person+steve-russell", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+lisp-machine-lisp",
    "Lisp Machine Lisp",
    {
      name: "Lisp Machine Lisp",
      websites: [
        { kind: "wikipedia", title: "Lisp Machine Lisp", href: "https://en.wikipedia.org/wiki/Lisp_Machine_Lisp" },
      ],
    },
    { influenced: ["pl+common-lisp", "pl+interlisp"] },
  );

  /**/

  lb.define(
    "pl+lispworks",
    "LispWorks",
    {
      name: "LispWorks",
      websites: [
        { kind: "wikipedia", title: "LispWorks", href: "https://en.wikipedia.org/wiki/LispWorks" },
        { kind: "homepage", title: "lispworks.com", href: "http://lispworks.com" },
      ],
      releases: [
        { version: "unknown", date: "1989-01-01", kind: "first" },
        { version: "8.0.1", date: "2022-06-28", kind: "stable" },
      ],
      scoping: ["dynamic"],
    },
    {
      implementations: ["pl+common-lisp"],
      influences: ["pl+common-lisp", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: [
        "platf+android",
        "platf+arm",
        "platf+bsd",
        "platf+ia-32",
        "platf+ios",
        "platf+linux",
        "platf+mac",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+maclisp",
    "Maclisp",
    {
      name: "Maclisp",
      websites: [{ kind: "wikipedia", title: "Maclisp", href: "https://en.wikipedia.org/wiki/Maclisp" }],
      releases: [{ version: "unknown", date: "1966-01-01", kind: "first" }],
      extensions: [".fasl"],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+assembly", "pl+pl-slashi"],
      influenced: [
        "pl+allegro-common-lisp",
        "pl+common-lisp",
        "pl+emacs-lisp",
        "pl+franz-lisp",
        "pl+lfe",
        "pl+zetalisp",
      ],
      influences: ["pl+common-lisp"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      people: [["person+richard-greenblatt", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+multilisp",
    "MultiLisp",
    {
      name: "MultiLisp",
      websites: [{ kind: "wikipedia", title: "MultiLisp", href: "https://en.wikipedia.org/wiki/MultiLisp" }],
      releases: [{ version: "unknown", date: "1980-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+interlisp"],
      influenced: ["pl+scheme"],
      influences: ["pl+gambit", "pl+interlisp", "pl+lisp", "pl+scheme", "pl+vax"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [["person+robert-h-halstead-jr", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+newlisp",
    "newLISP",
    {
      name: "newLISP",
      websites: [
        { kind: "wikipedia", title: "newLISP", href: "https://en.wikipedia.org/wiki/NewLISP" },
        { kind: "homepage", title: "www.newlisp.org", href: "http://www.newlisp.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Nl_logo_libel_side_color_240X100.png/121px-Nl_logo_libel_side_color_240X100.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "10.7.5", date: "2019-05-12", kind: "stable" },
        { version: "10.7.4", date: "2018-09-10", kind: "preview" },
      ],
      references: {
        stable_release: [{ href: "http://www.newlisp.org/", title: "newLISP" }],
        preview_release: [{ href: "http://www.newlisp.org/", title: "newLISP" }],
      },
    },
    {
      dialects: ["pl+lisp"],
      influences: ["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"],
      licenses: ["lic+gpl"],
      people: [["person+lutz-mueller", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+unix", "platf+win", "platf+x86-64"],
    },
  );

  /**/

  lb.define(
    "pl+oaklisp",
    "Oaklisp",
    {
      name: "Oaklisp",
      websites: [{ kind: "wikipedia", title: "Oaklisp", href: "https://en.wikipedia.org/wiki/Oaklisp" }],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", date: "2000-01-01", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+eulisp"],
      influences: ["pl+dylan", "pl+eulisp", "pl+java", "pl+scheme", "pl+smalltalk", "pl+t"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+objvlisp",
    "ObjVlisp",
    {
      name: "ObjVlisp",
      websites: [{ kind: "wikipedia", title: "ObjVlisp", href: "https://en.wikipedia.org/wiki/ObjVlisp" }],
    },
    { influenced: ["pl+eulisp"] },
  );

  /**/

  lb.define(
    "pl+openlisp",
    "OpenLisp",
    {
      name: "OpenLisp",
      websites: [
        { kind: "wikipedia", title: "OpenLisp", href: "https://en.wikipedia.org/wiki/OpenLisp" },
        { kind: "homepage", title: "www.eligis.com", href: "http://www.eligis.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OpenLisp_runnning_inside_GNU_Emacs.jpg/300px-OpenLisp_runnning_inside_GNU_Emacs.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "11.7.0", date: "2022-12-13", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+islisp"],
      implementations: ["pl+c"],
      influenced: ["pl+lelisp"],
      influences: ["pl+islisp", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects", "para+reflection"],
      people: [["person+christian-jullien", "designer"]],
      platforms: [
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cygwin",
        "platf+dec",
        "platf+dos",
        "platf+ia-64",
        "platf+linux",
        "platf+mac",
        "platf+mips",
        "platf+openvms",
        "platf+pocket-pc",
        "platf+qnx",
        "platf+risc-v",
        "platf+unix",
        "platf+win",
        "platf+x86",
        "platf+x86-64",
        "platf+z-slashos",
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+picolisp",
    "PicoLisp",
    {
      name: "PicoLisp",
      websites: [
        { kind: "wikipedia", title: "Picolisp", href: "https://en.wikipedia.org/wiki/Picolisp" },
        { kind: "homepage", title: "picolisp.com", href: "http://picolisp.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
      releases: [{ version: "unknown", date: "1988-01-01", kind: "first" }],
      extensions: [".l"],
      references: { dialects: [{ href: "https://software-lab.de/down.html", title: "PicoLisp Download" }] },
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+llvm"],
      licenses: ["lic+mit"],
      paradigms: ["para+dec", "para+functional", "para+imperative", "para+meta", "para+objects", "para+reflective"],
      people: [["person+alexander-burger", "designer"]],
      platforms: ["platf+posix"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+portable-standard-lisp",
    "Portable Standard Lisp",
    {
      name: "Portable Standard Lisp",
      websites: [
        {
          kind: "wikipedia",
          title: "Portable Standard Lisp",
          href: "https://en.wikipedia.org/wiki/Portable_Standard_Lisp",
        },
      ],
    },
    { dialects: ["pl+lisp"] },
  );

  /**/

  lb.define(
    "pl+spice-lisp",
    "Spice Lisp",
    {
      name: "Spice Lisp",
      websites: [{ kind: "wikipedia", title: "Spice Lisp", href: "https://en.wikipedia.org/wiki/Spice_Lisp" }],
    },
    { dialects: ["pl+lisp"] },
  );

  /**/

  lb.define(
    "pl+star-lisp",
    "*Lisp",
    {
      name: "*Lisp",
      websites: [{ kind: "wikipedia", title: "*Lisp", href: "https://en.wikipedia.org/wiki/*Lisp" }],
      releases: [{ version: "unknown", date: "1986-01-01", kind: "first" }],
      scoping: ["lexical"],
    },
    {
      implementations: ["pl+common-lisp"],
      influenced: ["pl+c-star", "pl+common-lisp"],
      influences: ["pl+c-star", "pl+common-lisp", "pl+lisp"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+parallel", "para+reflection"],
      people: [["person+steve-omohundro", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+zetalisp",
    "Lisp Machine Lisp",
    {
      name: "Lisp Machine Lisp",
      websites: [{ kind: "wikipedia", title: "Zetalisp", href: "https://en.wikipedia.org/wiki/Zetalisp" }],
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
      extensions: [".qfasl"],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+lisp"],
      influences: ["pl+common-lisp", "pl+interlisp", "pl+lisp", "pl+maclisp"],
      people: [
        ["person+daniel-weinreb", "designer"],
        ["person+david-a-moon", "designer"],
        ["person+lisp-machines", "designer"],
        ["person+richard-stallman", "designer"],
      ],
      platforms: ["platf+lisp-machine"],
    },
  );

  /**/
}
