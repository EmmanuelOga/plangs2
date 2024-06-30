import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+allegro-common-lisp",
    {
      name: "Allegro Common Lisp",
      websites: [
        { kind: "wikipedia", title: "Allegro Common Lisp", href: "https://en.wikipedia.org/wiki/Allegro_Common_Lisp" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Allegro_Common_Lisp_emblem.png/121px-Allegro_Common_Lisp_emblem.png",
        },
      ],
      releases: [{ version: "11.0", date: "2024-01-01", kind: "stable" }],
      scoping: ["dynamic"],
    },
    {
      implementations: ["pl+common-lisp"],
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
      platforms: ["platf+arm", "platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+armed-bear-common-lisp",
    {
      name: "ABCL",
      websites: [
        { kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Armed_Bear_Common_Lisp" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
    },
    {
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
      influences: ["pl+interlisp", "pl+lisp", "pl+maclisp", "pl+scheme"],
      people: [
        "person+dan-weinreb",
        "person+david-a-moon",
        "person+guy-steele",
        "person+kent-pitman",
        "person+richard-p-gabriel",
        "person+scott-fahlman",
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
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+autolisp",
    {
      name: "AutoLisp",
      websites: [{ kind: "wikipedia", title: "AutoLisp", href: "https://en.wikipedia.org/wiki/AutoLisp" }],
      releases: [{ version: "unknown", date: "1995-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+lisp"],
      platforms: ["platf+ia-32", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  lb.define("pl+bbn-lisp", {
    name: "BBN LISP",
    websites: [{ kind: "wikipedia", title: "BBN LISP", href: "https://en.wikipedia.org/wiki/BBN_LISP" }],
  });

  lb.define(
    "pl+clisp",
    {
      name: "CLISP",
      websites: [{ kind: "wikipedia", title: "CLISP", href: "https://en.wikipedia.org/wiki/CLISP" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LogoCLISP.jpg" }],
      releases: [{ version: "2.49", date: "2010-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"] },
  );

  lb.define(
    "pl+common-lisp",
    {
      name: "Common Lisp",
      websites: [{ kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Common_Lisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
    },
    {
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
      influences: ["pl+interlisp", "pl+lisp", "pl+maclisp", "pl+mdl", "pl+scheme", "pl+zetalisp"],
      people: [
        "person+dan-weinreb",
        "person+david-a-moon",
        "person+guy-steele",
        "person+kent-pitman",
        "person+richard-p-gabriel",
        "person+scott-fahlman",
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
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+common-lisp-object-system",
    {
      name: "Common Lisp Object System",
      websites: [{ kind: "wikipedia", title: "CLOS", href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System" }],
    },
    { influences: ["pl+smalltalk"] },
  );

  lb.define(
    "pl+emacs-lisp",
    {
      name: "Emacs Lisp",
      websites: [{ kind: "wikipedia", title: "Emacs Lisp", href: "https://en.wikipedia.org/wiki/Emacs_Lisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" }],
      releases: [{ version: "29.1", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+maclisp"],
      people: ["person+guy-l-steele", "person+richard-stallman"],
      licenses: ["lic+gpl"],
      paradigms: ["para+functional", "para+meta", "para+reflective"],
      platforms: ["platf+emacs"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+embeddable-common-lisp",
    {
      name: "Embeddable Common Lisp",
      websites: [{ kind: "wikipedia", title: "ECL", href: "https://en.wikipedia.org/wiki/Embeddable_Common_Lisp" }],
      releases: [{ version: "23.9.9", date: "2023-01-01", kind: "stable" }],
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
      platforms: ["platf+android", "platf+arm", "platf+unix", "platf+win", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+eulisp",
    {
      name: "EuLisp",
      websites: [{ kind: "wikipedia", title: "EuLisp", href: "https://en.wikipedia.org/wiki/EuLisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png" }],
      releases: [{ version: "0.991", date: "2010-01-01", kind: "preview" }],
      scoping: ["dynamic", "static"],
    },
    {
      influences: [
        "pl+armed-bear-common-lisp",
        "pl+common-lisp",
        "pl+common-lisp-object-system",
        "pl+haskell",
        "pl+interlisp",
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

  lb.define(
    "pl+franz-lisp",
    {
      name: "Franz Lisp",
      websites: [{ kind: "wikipedia", title: "Franz Lisp", href: "https://en.wikipedia.org/wiki/Franz_Lisp" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png/300px-4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png",
        },
      ],
      scoping: ["lexical"],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+common-lisp", "pl+lisp", "pl+maclisp"],
      people: ["person+richard-fateman"],
      licenses: ["lic+freeware", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      platforms: ["platf+openvms", "platf+unix"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+gnu-common-lisp",
    {
      name: "GNU Common Lisp",
      websites: [{ kind: "wikipedia", title: "GCL", href: "https://en.wikipedia.org/wiki/GNU_Common_Lisp" }],
      releases: [{ version: "2.6.14", date: "2023-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gnu-library-gpl"] },
  );

  lb.define(
    "pl+interlisp",
    {
      name: "Interlisp",
      websites: [{ kind: "wikipedia", title: "Interlisp", href: "https://en.wikipedia.org/wiki/Interlisp" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+bbn-lisp", "pl+lisp", "pl+multilisp"],
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

  lb.define(
    "pl+islisp",
    {
      name: "ISLISP",
      websites: [{ kind: "wikipedia", title: "ISLISP", href: "https://en.wikipedia.org/wiki/ISLISP" }],
    },
    {
      dialects: ["pl+openlisp"],
      implementations: ["pl+c", "pl+c-sharp", "pl+go", "pl+java", "pl+javascript", "pl+lisp"],
      influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+eulisp", "pl+le-lisp", "pl+lelisp", "pl+scheme"],
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

  lb.define(
    "pl+le-lisp",
    {
      name: "Le Lisp",
      websites: [{ kind: "wikipedia", title: "Le Lisp", href: "https://en.wikipedia.org/wiki/Le_Lisp" }],
      releases: [{ version: "15.26.13", date: "2020-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp"],
      licenses: ["lic+bsd-s", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
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

  lb.define(
    "pl+lelisp",
    {
      name: "Le Lisp",
      websites: [{ kind: "wikipedia", title: "LeLisp", href: "https://en.wikipedia.org/wiki/LeLisp" }],
      releases: [{ version: "15.26.13", date: "2020-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp"],
      licenses: ["lic+bsd-s", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
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

  lb.define(
    "pl+lisp",
    {
      name: "Lisp",
      websites: [
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)" },
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
    },
    {
      dialects: [
        "pl+allegro-common-lisp",
        "pl+arc",
        "pl+armed-bear-common-lisp",
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
        "pl+le-lisp",
        "pl+lelisp",
        "pl+lfe",
        "pl+lispworks",
        "pl+logo",
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
      influences: ["pl+information-processing"],
      people: ["person+john-mccarthy", "person+steve-russell"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflective"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+lispworks",
    {
      name: "LispWorks",
      websites: [{ kind: "wikipedia", title: "LispWorks", href: "https://en.wikipedia.org/wiki/LispWorks" }],
      releases: [{ version: "8.0.1", date: "2022-01-01", kind: "stable" }],
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

  lb.define(
    "pl+maclisp",
    {
      name: "Maclisp",
      websites: [{ kind: "wikipedia", title: "Maclisp", href: "https://en.wikipedia.org/wiki/Maclisp" }],
      extensions: [".fasl", ".lisp"],
    },
    {
      implementations: ["pl+assembly", "pl+pl-slash"],
      people: ["person+richard-greenblatt"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+reflection"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+multilisp",
    {
      name: "MultiLisp",
      websites: [{ kind: "wikipedia", title: "MultiLisp", href: "https://en.wikipedia.org/wiki/MultiLisp" }],
    },
    {
      implementations: ["pl+interlisp"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+meta", "para+multi"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  lb.define(
    "pl+newlisp",
    {
      name: "newLISP",
      websites: [{ kind: "wikipedia", title: "newLISP", href: "https://en.wikipedia.org/wiki/NewLISP" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Nl_logo_libel_side_color_240X100.png/121px-Nl_logo_libel_side_color_240X100.png",
        },
      ],
      releases: [
        { version: "10.7.5", date: "2019-01-01", kind: "stable" },
        { version: "10.7.4", date: "2018-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"],
      licenses: ["lic+gpl"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+unix", "platf+win", "platf+x86-64"],
    },
  );

  lb.define(
    "pl+oaklisp",
    {
      name: "Oaklisp",
      websites: [{ kind: "wikipedia", title: "Oaklisp", href: "https://en.wikipedia.org/wiki/Oaklisp" }],
      releases: [{ version: "unknown", date: "2000-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+scheme", "pl+smalltalk", "pl+t"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define("pl+objvlisp", {
    name: "ObjVlisp",
    websites: [{ kind: "wikipedia", title: "ObjVlisp", href: "https://en.wikipedia.org/wiki/ObjVlisp" }],
  });

  lb.define(
    "pl+openlisp",
    {
      name: "OpenLisp",
      websites: [{ kind: "wikipedia", title: "OpenLisp", href: "https://en.wikipedia.org/wiki/OpenLisp" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OpenLisp_runnning_inside_GNU_Emacs.jpg/300px-OpenLisp_runnning_inside_GNU_Emacs.jpg",
        },
      ],
      releases: [{ version: "11.7.0", date: "2022-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+islisp", "pl+le-lisp", "pl+lelisp", "pl+lisp"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects", "para+reflection"],
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

  lb.define(
    "pl+picolisp",
    {
      name: "PicoLisp",
      websites: [{ kind: "wikipedia", title: "PicoLisp", href: "https://en.wikipedia.org/wiki/Picolisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
    },
    {
      implementations: ["pl+llvm"],
      licenses: ["lic+mit"],
      paradigms: ["para+dec", "para+functional", "para+imperative", "para+meta", "para+objects", "para+reflective"],
      platforms: ["platf+posix"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+star-lisp",
    {
      name: "*Lisp (StarLisp)",
      websites: [{ kind: "wikipedia", title: "*Lisp", href: "https://en.wikipedia.org/wiki/*Lisp" }],
      scoping: ["lexical"],
    },
    {
      implementations: ["pl+common-lisp"],
      influences: ["pl+armed-bear-common-lisp", "pl+common-lisp", "pl+lisp"],
      people: ["person+steve-omohundro"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+parallel", "para+reflection"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+zetalisp",
    {
      name: "Lisp Machine Lisp",
      websites: [{ kind: "wikipedia", title: "Lisp Machine Lisp", href: "https://en.wikipedia.org/wiki/ZetaLisp" }],
      extensions: [".lisp", ".qfasl"],
    },
    {
      implementations: ["pl+lisp"],
      influences: ["pl+interlisp", "pl+lisp", "pl+maclisp"],
      people: ["person+daniel-weinreb", "person+david-a-moon", "person+lisp-machines", "person+richard-stallman"],
    },
  );
}
