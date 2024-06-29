import type { PlangsGraph } from "../../../entities/plangs_graph";

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
      influences: ["pl+franz-lisp", "pl+lisp", "pl+maclisp", "pl+macsyma"],
      licenses: ["lic+proprietary", "lic+freeware"],
      paradigms: [
        "para+multi",
        "para+imperative",
        "para+functional",
        "para+objects",
        "para+meta",
        "para+reflective",
        "para+generic",
      ],
      people: ["person+john-foderaro"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+arm", "platf+win", "platf+mac", "platf+linux", "platf+bsd"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+armed-bear-common-lisp", "ABCL", {
    name: "ABCL",
    websites: [{ kind: "wikipedia", title: "ABCL", href: "https://en.wikipedia.org/wiki/Armed_Bear_Common_Lisp" }],
  });

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
      influences: ["pl+common-lisp", "pl+lisp"],
      people: ["person+david-betz"],
      platforms: ["platf+ia-32", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+bbn-lisp", "BBN LISP", {
    name: "BBN LISP",
    websites: [{ kind: "wikipedia", title: "BBN LISP", href: "https://en.wikipedia.org/wiki/BBN_LISP" }],
  });

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
      implementations: [
        "pl+allegro-common-lisp",
        "pl+armed-bear-common-lisp",
        "pl+clisp",
        "pl+clozure-cl",
        "pl+cmucl",
        "pl+embeddable-common-lisp",
        "pl+gnu-common-lisp",
        "pl+lispworks",
        "pl+sbcl",
        "pl+genera",
      ],
      influences: ["pl+scheme", "pl+maclisp", "pl+mdl", "pl+zetalisp", "pl+lisp", "pl+interlisp"],
      paradigms: [
        "para+multi",
        "para+imperative",
        "para+functional",
        "para+objects",
        "para+meta",
        "para+reflective",
        "para+generic",
      ],
      people: [
        "person+scott-fahlman",
        "person+richard-p-gabriel",
        "person+david-a-moon",
        "person+kent-pitman",
        "person+guy-steele",
        "person+dan-weinreb",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+common-lisp-object-system",
    "Common Lisp Object System",
    {
      name: "Common Lisp Object System",
      websites: [{ kind: "wikipedia", title: "CLOS", href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System" }],
    },
    { influences: ["pl+smalltalk"] },
  );

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
      influences: ["pl+common-lisp", "pl+maclisp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+functional", "para+meta", "para+reflective"],
      people: ["person+richard-stallman", "person+guy-l-steele"],
      platforms: ["platf+emacs"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

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
        { version: "unknown", kind: "stable" },
        { version: "23.9.9", date: "2023-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c", "pl+common-lisp"],
      influences: ["pl+lisp", "pl+common-lisp", "pl+c"],
      licenses: ["lic+lgpl"],
      paradigms: [
        "para+multi",
        "para+imperative",
        "para+functional",
        "para+objects",
        "para+meta",
        "para+reflective",
        "para+generic",
      ],
      people: ["person+giuseppe-attardi", "person+daniel-kochmanski", "person+marius-gerbershagen"],
      platforms: ["platf+arm", "platf+x86", "platf+unix", "platf+android", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+eulisp",
    "EuLisp",
    {
      name: "EuLisp",
      websites: [{ kind: "wikipedia", title: "EuLisp", href: "https://en.wikipedia.org/wiki/EuLisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png" }],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", kind: "preview" },
        { version: "0.991", date: "2010-01-01", kind: "preview" },
      ],
      scoping: ["static", "dynamic"],
      extensions: [".em"],
    },
    {
      influences: [
        "pl+t",
        "pl+scheme",
        "pl+common-lisp",
        "pl+interlisp",
        "pl+lelisp",
        "pl+common-lisp-object-system",
        "pl+objvlisp",
        "pl+oaklisp",
        "pl+sml",
        "pl+haskell",
      ],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta", "para+objects"],
      platforms: ["platf+linux"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

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
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+maclisp", "pl+common-lisp"],
      licenses: ["lic+proprietary", "lic+freeware"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"],
      people: ["person+richard-fateman"],
      platforms: ["platf+openvms", "platf+unix"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+gnu-common-lisp",
    "GCL",
    {
      name: "GCL",
      websites: [
        { kind: "wikipedia", title: "GNU Common Lisp", href: "https://en.wikipedia.org/wiki/GNU_Common_Lisp" },
        { kind: "homepage", title: "www.gnu.org/software/gcl/", href: "https://www.gnu.org/software/gcl/" },
      ],
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "2.6.14", date: "2023-01-13", kind: "stable" },
      ],
    },
    { licenses: ["lic+gnu-library-gpl"] },
  );

  lb.define(
    "pl+interlisp",
    "InterLisp",
    {
      name: "InterLisp",
      websites: [{ kind: "wikipedia", title: "Interlisp", href: "https://en.wikipedia.org/wiki/Interlisp" }],
      releases: [{ version: "unknown", date: "1968-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+bbn-lisp", "pl+multilisp"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+multi",
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+dec",
        "para+reflective",
        "para+meta",
      ],
      platforms: ["platf+6502", "platf+atari"],
    },
  );

  lb.define(
    "pl+islisp",
    "ISLISP",
    {
      name: "ISLISP",
      websites: [{ kind: "wikipedia", title: "ISLISP", href: "https://en.wikipedia.org/wiki/ISLISP" }],
    },
    {
      dialects: ["pl+openlisp"],
      implementations: ["pl+c", "pl+c-sharp", "pl+go", "pl+java", "pl+javascript", "pl+lisp"],
      influences: ["pl+lelisp", "pl+common-lisp", "pl+eulisp", "pl+le-lisp", "pl+scheme"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflection", "para+meta"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+win",
        "platf+mac",
        "platf+linux",
        "platf+bsd",
        "platf+android",
        "platf+qnx",
      ],
    },
  );

  lb.define("pl+le-lisp", "Le Lisp", {
    name: "Le Lisp",
    websites: [{ kind: "wikipedia", title: "Le Lisp", href: "https://en.wikipedia.org/wiki/Le_Lisp" }],
  });

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
      implementations: ["pl+c"],
      influences: ["pl+lisp"],
      licenses: ["lic+proprietary", "lic+bsd-s"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"],
      people: [
        "person+jerome-chailloux",
        "person+emmanuel-st-james",
        "person+matthieu-devin",
        "person+jean-marie-hullot",
      ],
      platforms: [
        "platf+x86",
        "platf+mips",
        "platf+dec",
        "platf+openvms",
        "platf+win",
        "platf+unix",
        "platf+linux",
        "platf+mac",
        "platf+bsd",
      ],
    },
  );

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
    },
    {
      dialects: [
        "pl+t",
        "pl+hy",
        "pl+lfe",
        "pl+star-lisp",
        "pl+scm",
        "pl+scheme",
        "pl+embeddable-common-lisp",
        "pl+siod",
        "pl+arc",
        "pl+autolisp",
        "pl+clojure",
        "pl+common-lisp",
        "pl+emacs-lisp",
        "pl+eulisp",
        "pl+franz-lisp",
        "pl+game-oriented-assembly-lisp",
        "pl+interlisp",
        "pl+islisp",
        "pl+lelisp",
        "pl+maclisp",
        "pl+mdl",
        "pl+newlisp",
        "pl+nil",
        "pl+picolisp",
        "pl+portable-standard-lisp",
        "pl+racket",
        "pl+rpl",
        "pl+cadence-skill",
        "pl+spice-lisp",
        "pl+zetalisp",
        "pl+netlogo",
        "pl+gambit",
        "pl+cowsel",
        "pl+kawa",
        "pl+objectlogo",
        "pl+lispworks",
        "pl+openlisp",
        "pl+allegro-common-lisp",
        "pl+multilisp",
        "pl+pop-11",
        "pl+starlogo",
        "pl+ucblogo",
        "pl+pop-2",
        "pl+gnu-guile",
        "pl+pico",
      ],
      influences: ["pl+information-processing"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+reflective", "para+meta"],
      people: ["person+john-mccarthy", "person+steve-russell"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

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
      influences: ["pl+lisp", "pl+common-lisp"],
      licenses: ["lic+proprietary"],
      paradigms: [
        "para+multi",
        "para+imperative",
        "para+functional",
        "para+objects",
        "para+meta",
        "para+reflective",
        "para+generic",
      ],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+arm",
        "platf+win",
        "platf+mac",
        "platf+linux",
        "platf+bsd",
        "platf+android",
        "platf+ios",
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

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
      implementations: ["pl+assembly", "pl+pl-slash"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"],
      people: ["person+richard-greenblatt"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

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
      influences: ["pl+scheme", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+concurrent", "para+meta"],
      people: ["person+robert-h-halstead-jr"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

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
        { version: "unknown", kind: "stable" },
        { version: "10.7.5", date: "2019-05-12", kind: "stable" },
        { version: "10.7.4", date: "2018-09-10", kind: "preview" },
      ],
    },
    {
      influences: ["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"],
      licenses: ["lic+gpl"],
      people: ["person+lutz-mueller"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+unix", "platf+win"],
    },
  );

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
      influences: ["pl+scheme", "pl+t", "pl+smalltalk"],
      paradigms: ["para+multi", "para+objects", "para+functional", "para+imperative"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+objvlisp", "ObjVlisp", {
    name: "ObjVlisp",
    websites: [{ kind: "wikipedia", title: "ObjVlisp", href: "https://en.wikipedia.org/wiki/ObjVlisp" }],
  });

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
      implementations: ["pl+c"],
      influences: ["pl+lelisp", "pl+lisp", "pl+islisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflection", "para+meta"],
      people: ["person+christian-jullien"],
      platforms: [
        "platf+x86",
        "platf+x86-64",
        "platf+ia-64",
        "platf+mips",
        "platf+dec",
        "platf+arm",
        "platf+aarch64",
        "platf+risc-v",
        "platf+win",
        "platf+unix",
        "platf+linux",
        "platf+mac",
        "platf+bsd",
        "platf+qnx",
        "platf+dos",
        "platf+pocket-pc",
        "platf+openvms",
        "platf+z-slashos",
        "platf+cygwin",
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

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
    },
    {
      implementations: ["pl+llvm"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+objects", "para+dec", "para+reflective", "para+meta"],
      people: ["person+alexander-burger"],
      platforms: ["platf+posix"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+portable-standard-lisp", "Portable Standard Lisp", {
    name: "Portable Standard Lisp",
    websites: [
      {
        kind: "wikipedia",
        title: "Portable Standard Lisp",
        href: "https://en.wikipedia.org/wiki/Portable_Standard_Lisp",
      },
    ],
  });

  lb.define("pl+spice-lisp", "Spice Lisp", {
    name: "Spice Lisp",
    websites: [{ kind: "wikipedia", title: "Spice Lisp", href: "https://en.wikipedia.org/wiki/Spice_Lisp" }],
  });

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
      influences: ["pl+lisp", "pl+common-lisp"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta", "para+parallel"],
      people: ["person+steve-omohundro"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

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
      implementations: ["pl+lisp"],
      influences: ["pl+lisp", "pl+maclisp", "pl+interlisp"],
      people: ["person+david-a-moon", "person+richard-stallman", "person+daniel-weinreb", "person+lisp-machines"],
    },
  );
}
