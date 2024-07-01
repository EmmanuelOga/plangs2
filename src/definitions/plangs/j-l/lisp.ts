import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+autolisp")
    .merge({
      name: "AutoLisp",
      websites: [{ kind: "wikipedia", title: "AutoLisp", href: "https://en.wikipedia.org/wiki/AutoLisp" }],
      releases: [{ name: "AutoLISP", version: "unknown", date: "1995-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+common-lisp", "pl+lisp"])
    .addPlatforms(["platf+ia-32", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+bbn-lisp").merge({
    name: "BBN LISP",
    websites: [{ kind: "wikipedia", title: "BBN LISP", href: "https://en.wikipedia.org/wiki/BBN_LISP" }],
  });

  /**/

  g.buildPlang("pl+clisp")
    .merge({
      name: "CLISP",
      websites: [{ kind: "wikipedia", title: "CLISP", href: "https://en.wikipedia.org/wiki/CLISP" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LogoCLISP.jpg" }],
      releases: [{ name: "CLISP", version: "2.49", date: "2010-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+common-lisp")
    .merge({
      name: "Common Lisp",
      websites: [
        { kind: "wikipedia", title: "Allegro Common Lisp", href: "https://en.wikipedia.org/wiki/Allegro_Common_Lisp" },
        { kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Common_Lisp" },
        { kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Armed_Bear_Common_Lisp" },
        { kind: "wikipedia", title: "ECL", href: "https://en.wikipedia.org/wiki/Embeddable_Common_Lisp" },
        { kind: "wikipedia", title: "GCL", href: "https://en.wikipedia.org/wiki/GNU_Common_Lisp" },
        { kind: "wikipedia", title: "CLOS", href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Allegro_Common_Lisp_emblem.png/121px-Allegro_Common_Lisp_emblem.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" },
      ],
      releases: [
        { name: "Allegro Common Lisp", version: "11.0", date: "2024-01-01", kind: "stable" },
        { name: "Embeddable Common Lisp", version: "23.9.9", date: "2023-01-01", kind: "stable" },
        { name: "GNU Common Lisp", version: "2.6.14", date: "2023-01-01", kind: "stable" },
      ],
      scoping: ["dynamic"],
    })
    .addImplementations([
      "pl+common-lisp",
      "pl+clisp",
      "pl+clozure-cl",
      "pl+cmucl",
      "pl+lispworks",
      "pl+sbcl",
      "pl+genera",
      "pl+c",
    ])
    .addInfluences([
      "pl+lisp",
      "pl+maclisp",
      "pl+macsyma",
      "pl+franz-lisp",
      "pl+scheme",
      "pl+interlisp",
      "pl+common-lisp",
      "pl+c",
      "pl+mdl",
      "pl+smalltalk",
      "pl+zetalisp",
    ])
    .addPerson("person+scott-fahlman", { role: "designer" })
    .addPerson("person+richard-p-gabriel", { role: "designer" })
    .addPerson("person+david-a-moon", { role: "designer" })
    .addPerson("person+kent-pitman", { role: "designer" })
    .addPerson("person+guy-steele", { role: "designer" })
    .addPerson("person+dan-weinreb", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+freeware", "lic+lgpl"])
    .addLicense("lic+gnu-library-gpl", {
      refs: [{ href: "http://directory.fsf.org/wiki/gcl", title: "GNU Common Lisp" }],
    })
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
      "para+reflective",
      "para+generic",
    ])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+win",
      "platf+mac",
      "platf+linux",
      "platf+bsd",
      "platf+cross-platform",
      "platf+x86",
      "platf+unix",
      "platf+android",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+emacs-lisp")
    .merge({
      name: "Emacs Lisp",
      websites: [{ kind: "wikipedia", title: "Emacs Lisp", href: "https://en.wikipedia.org/wiki/Emacs_Lisp" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" }],
      releases: [{ name: "Emacs Lisp", version: "29.1", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+common-lisp", "pl+maclisp"])
    .addPerson("person+richard-stallman", { role: "designer" })
    .addPerson("person+guy-l-steele", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+functional", "para+meta", "para+reflective"])
    .addPlatforms(["platf+emacs"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+eulisp")
    .merge({
      name: "EuLisp",
      websites: [{ kind: "wikipedia", title: "EuLisp", href: "https://en.wikipedia.org/wiki/EuLisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png" }],
      releases: [{ name: "EuLisp", version: "0.991", date: "2010-01-01", kind: "preview" }],
      scoping: ["dynamic", "static"],
    })
    .addInfluences([
      "pl+common-lisp",
      "pl+interlisp",
      "pl+lelisp",
      "pl+scheme",
      "pl+t",
      "pl+objvlisp",
      "pl+oaklisp",
      "pl+sml",
      "pl+haskell",
    ])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta", "para+objects"])
    .addPlatforms(["platf+linux"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+franz-lisp")
    .merge({
      name: "Franz Lisp",
      websites: [{ kind: "wikipedia", title: "Franz Lisp", href: "https://en.wikipedia.org/wiki/Franz_Lisp" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png/300px-4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png",
        },
      ],
      scoping: ["lexical"],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp", "pl+maclisp", "pl+common-lisp"])
    .addPerson("person+richard-fateman", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+freeware"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"])
    .addPlatforms(["platf+openvms", "platf+unix"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+interlisp")
    .merge({
      name: "Interlisp",
      websites: [{ kind: "wikipedia", title: "Interlisp", href: "https://en.wikipedia.org/wiki/Interlisp" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp", "pl+bbn-lisp", "pl+multilisp"])
    .addLicenses(["lic+proprietary"])
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+dec",
      "para+reflective",
      "para+meta",
    ])
    .addPlatforms(["platf+6502", "platf+atari"]);

  /**/

  g.buildPlang("pl+islisp")
    .merge({
      name: "ISLISP",
      websites: [{ kind: "wikipedia", title: "ISLISP", href: "https://en.wikipedia.org/wiki/ISLISP" }],
    })
    .addDialects(["pl+openlisp"])
    .addImplementations(["pl+c", "pl+c-sharp", "pl+go", "pl+java", "pl+javascript", "pl+lisp"])
    .addInfluences(["pl+common-lisp", "pl+eulisp", "pl+le-lisp", "pl+scheme", "pl+lelisp"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflection", "para+meta"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+win",
      "platf+mac",
      "platf+linux",
      "platf+bsd",
      "platf+android",
      "platf+qnx",
    ]);

  /**/

  g.buildPlang("pl+le-lisp")
    .merge({
      name: "Le Lisp",
      websites: [{ kind: "wikipedia", title: "Le Lisp", href: "https://en.wikipedia.org/wiki/Le_Lisp" }],
      releases: [{ name: "Le Lisp", version: "15.26.13", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp"])
    .addLicenses(["lic+proprietary", "lic+bsd-s"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"])
    .addPlatforms([
      "platf+x86",
      "platf+mips",
      "platf+dec",
      "platf+openvms",
      "platf+win",
      "platf+unix",
      "platf+linux",
      "platf+mac",
      "platf+bsd",
    ]);

  /**/

  g.buildPlang("pl+lelisp")
    .merge({
      name: "Le Lisp",
      websites: [{ kind: "wikipedia", title: "LeLisp", href: "https://en.wikipedia.org/wiki/LeLisp" }],
      releases: [{ name: "Le Lisp", version: "15.26.13", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp"])
    .addLicenses(["lic+proprietary", "lic+bsd-s"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"])
    .addPlatforms([
      "platf+x86",
      "platf+mips",
      "platf+dec",
      "platf+openvms",
      "platf+win",
      "platf+unix",
      "platf+linux",
      "platf+mac",
      "platf+bsd",
    ]);

  /**/

  g.buildPlang("pl+lisp")
    .merge({
      name: "Lisp",
      websites: [
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)" },
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
    })
    .addDialects([
      "pl+common-lisp",
      "pl+arc",
      "pl+autolisp",
      "pl+clojure",
      "pl+cowsel",
      "pl+emacs-lisp",
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
    ])
    .addInfluences(["pl+information-processing"])
    .addPerson("person+john-mccarthy", { role: "designer" })
    .addPerson("person+steve-russell", { role: "developer" })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflective", "para+meta"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+lispworks")
    .merge({
      name: "LispWorks",
      websites: [{ kind: "wikipedia", title: "LispWorks", href: "https://en.wikipedia.org/wiki/LispWorks" }],
      releases: [{ name: "LispWorks", version: "8.0.1", date: "2022-01-01", kind: "stable" }],
      scoping: ["dynamic"],
    })
    .addImplementations(["pl+common-lisp"])
    .addInfluences(["pl+lisp", "pl+common-lisp"])
    .addLicenses(["lic+proprietary"])
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
      "para+reflective",
      "para+generic",
    ])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+win",
      "platf+mac",
      "platf+linux",
      "platf+bsd",
      "platf+android",
      "platf+ios",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+maclisp")
    .merge({
      name: "Maclisp",
      websites: [{ kind: "wikipedia", title: "Maclisp", href: "https://en.wikipedia.org/wiki/Maclisp" }],
      extensions: [".fasl", ".lisp"],
    })
    .addImplementations(["pl+assembly", "pl+pl-slash"])
    .addPerson("person+richard-greenblatt", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+multilisp")
    .merge({
      name: "MultiLisp",
      websites: [{ kind: "wikipedia", title: "MultiLisp", href: "https://en.wikipedia.org/wiki/MultiLisp" }],
    })
    .addImplementations(["pl+interlisp"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+concurrent", "para+meta"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  /**/

  g.buildPlang("pl+newlisp")
    .merge({
      name: "newLISP",
      websites: [{ kind: "wikipedia", title: "newLISP", href: "https://en.wikipedia.org/wiki/NewLISP" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Nl_logo_libel_side_color_240X100.png/121px-Nl_logo_libel_side_color_240X100.png",
        },
      ],
      releases: [
        { name: "newLISP", version: "10.7.5", date: "2019-01-01", kind: "stable" },
        { name: "newLISP", version: "10.7.4", date: "2018-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"])
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+unix", "platf+win"]);

  /**/

  g.buildPlang("pl+oaklisp")
    .merge({
      name: "Oaklisp",
      websites: [{ kind: "wikipedia", title: "Oaklisp", href: "https://en.wikipedia.org/wiki/Oaklisp" }],
      releases: [{ name: "Oaklisp", version: "unknown", date: "2000-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+scheme", "pl+t", "pl+smalltalk"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+objvlisp").merge({
    name: "ObjVlisp",
    websites: [{ kind: "wikipedia", title: "ObjVlisp", href: "https://en.wikipedia.org/wiki/ObjVlisp" }],
  });

  /**/

  g.buildPlang("pl+openlisp")
    .merge({
      name: "OpenLisp",
      websites: [{ kind: "wikipedia", title: "OpenLisp", href: "https://en.wikipedia.org/wiki/OpenLisp" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OpenLisp_runnning_inside_GNU_Emacs.jpg/300px-OpenLisp_runnning_inside_GNU_Emacs.jpg",
        },
      ],
      releases: [{ name: "OpenLisp", version: "11.7.0", date: "2022-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+le-lisp", "pl+lelisp", "pl+lisp", "pl+islisp"])
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflection", "para+meta"])
    .addPlatforms([
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
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+picolisp")
    .merge({
      name: "PicoLisp",
      websites: [{ kind: "wikipedia", title: "PicoLisp", href: "https://en.wikipedia.org/wiki/Picolisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
    })
    .addImplementations(["pl+llvm"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+imperative", "para+objects", "para+dec", "para+reflective", "para+meta"])
    .addPlatforms(["platf+posix"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+star-lisp")
    .merge({
      name: "*Lisp (StarLisp)",
      websites: [{ kind: "wikipedia", title: "*Lisp", href: "https://en.wikipedia.org/wiki/*Lisp" }],
      scoping: ["lexical"],
    })
    .addImplementations(["pl+common-lisp"])
    .addInfluences(["pl+common-lisp", "pl+lisp"])
    .addPerson("person+steve-omohundro", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+reflection", "para+meta", "para+parallel"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+zetalisp")
    .merge({
      name: "Lisp Machine Lisp",
      websites: [{ kind: "wikipedia", title: "Lisp Machine Lisp", href: "https://en.wikipedia.org/wiki/ZetaLisp" }],
      extensions: [".lisp", ".qfasl"],
    })
    .addImplementations(["pl+lisp"])
    .addInfluences(["pl+lisp", "pl+maclisp", "pl+interlisp"])
    .addPerson("person+david-a-moon", { role: "designer" })
    .addPerson("person+richard-stallman", { role: "designer" })
    .addPerson("person+daniel-weinreb", { role: "designer" })
    .addPerson("person+lisp-machines", { role: "developer" });

  /**/
}
