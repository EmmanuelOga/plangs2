import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+c-sharp",
    "C#",
    {
      name: "C#",
      websites: [
        { kind: "wikipedia", title: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
      ],
    },
    {
      dialects: ["pl+nemerle"],
      influenced: [
        "pl+arkts",
        "pl+ballerina",
        "pl+boo",
        "pl+c",
        "pl+c-plus-plus",
        "pl+chapel",
        "pl+clojure",
        "pl+cobra",
        "pl+crystal",
        "pl+d-programming-language",
        "pl+dart",
        "pl+eiffel",
        "pl+fantom",
        "pl+gosu",
        "pl+hack",
        "pl+haxe",
        "pl+java",
        "pl+js-plus-plus",
        "pl+kotlin",
        "pl+modula-3",
        "pl+nemerle",
        "pl+object-pascal",
        "pl+oxygene",
        "pl+pascal",
        "pl+powershell",
        "pl+ring",
        "pl+rust",
        "pl+scala",
        "pl+typescript",
        "pl+vala",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+c99",
    "C99",
    { name: "C99", websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }] },
    { influenced: ["pl+c-plus-plus", "pl+opencl-apiopencl-c-slashc-plus-plus-and-c-plus-plus-for-opencl"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+carbon",
    "Carbon",
    {
      name: "Carbon",
      websites: [
        { kind: "wikipedia", title: "Carbon", href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)" },
        { kind: "repository", title: "github.com/carbon-language", href: "https://github.com/carbon-language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
        },
      ],
      extensions: [".carbon"],
    },
    {
      implementations: ["pl+c-plus-plus"],
      influenced: ["pl+c-plus-plus"],
      licenses: ["lic+apache-2-with-llvm-exception"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ceylon",
    "Ceylon",
    {
      name: "Ceylon",
      websites: [
        { kind: "wikipedia", title: "Ceylon", href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)" },
        { kind: "homepage", title: "ceylon-lang.org", href: "http://ceylon-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "1.3.3", date: "2017-08-21", kind: "stable" },
      ],
      references: {
        filename_extensions: [
          {
            href: "http://ceylon-lang.org/documentation/1.2/spec/html_single/#compilationunitstructure",
            title: "The Ceylon Language: §4.1 Compilation unit structure",
          },
        ],
        influenced_by: [
          {
            href: "http://ceylon-lang.org/documentation/1.2/faq/#what_is_ceylon",
            title: "Frequently Asked Questions: What is Ceylon?",
          },
          { href: "https://gitter.im/ceylon/user?at=5660a7242cbea1d7054de9d9", title: "ceylon/user - Gitter" },
          { href: "https://gitter.im/ceylon/user?at=5660a90e5057376520db6f8b", title: "ceylon/user - Gitter" },
          {
            href: "https://jaxenter.com/top-10-ceylon-language-features-java-wishes-it-had-108003.html",
            title: "Top 10 Ceylon language features Java wishes it had",
          },
        ],
      },
      extensions: [".ceylon"],
    },
    {
      influenced: ["pl+scala"],
      influences: ["pl+java", "pl+lisp", "pl+ml", "pl+scala", "pl+smalltalk", "pl+whiley"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+objects"],
      people: [["person+gavin-king", "designer"]],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+chuck",
    "ChucK",
    {
      name: "ChucK",
      websites: [
        { kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" },
        { kind: "homepage", title: "chuck.cs.princeton.edu", href: "http://chuck.cs.princeton.edu" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" }],
      references: {
        first_appeared: [
          {
            href: "https://books.google.com/books?id=96ymxXy3wjMC&pg=PA57",
            title: "The Oxford handbook of computer music",
          },
        ],
        stable_release: [
          { href: "https://github.com/ccrma/chuck/blob/main/notes/VERSIONS", title: "github.com/ccrma/chuck" },
        ],
      },
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "1.5.2.4", date: "2024-01-01", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+gpl-2", "lic+ios", "lic+linux", "lic+mac", "lic+windows"],
      paradigms: ["para+multi-paradigm"],
      people: [["person+ge-wang", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ciao",
    "Ciao",
    {
      name: "Ciao",
      websites: [
        { kind: "wikipedia", title: "Ciao", href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)" },
        { kind: "homepage", title: "www.ciao-lang.org", href: "http://www.ciao-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
        },
      ],
      releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    },
    {
      influences: ["pl+prolog"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+functional", "para+logic", "para+modular", "para+objects"],
      platforms: ["platf+cross-platform", "platf+macos", "platf+unix", "platf+windows"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+clang",
    "Clang",
    {
      name: "Clang",
      websites: [
        { kind: "wikipedia", title: "Clang", href: "https://en.wikipedia.org/wiki/Clang" },
        { kind: "homepage", title: "clang.llvm.org", href: "https://clang.llvm.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Clang_13.0.1_version_information_screenshot.png/220px-Clang_13.0.1_version_information_screenshot.png",
        },
      ],
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20161117042311/http://llvm.org/releases/2.1/docs/ReleaseNotes.html",
            title: "LLVM 2.1 Release Notes",
          },
        ],
        stable_release: [
          { href: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.6", title: "LLVM 18.1.6" },
        ],
        platform: [
          {
            href: "https://web.archive.org/web/20210912214255/https://github.com/llvm/llvm-project/releases",
            title: "Releases",
          },
        ],
        license: [
          {
            href: "https://web.archive.org/web/20201111220059/https://releases.llvm.org/9.0.0/LICENSE.TXT",
            title: "LICENSE.TXT",
          },
          {
            href: "https://web.archive.org/web/20121113204817/https://www.llvm.org/docs/DeveloperPolicy.html#copyright-license-and-patents",
            title: "LLVM Developer Policy",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-09-26", kind: "first" },
        { version: "18.1.6", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+apache-2"], platforms: ["platf+aarch64", "platf+arm", "platf+ia-32", "platf+x86-64"] },
  );

  //-------------------------------------------------------------------------------

  lb.define("pl+clojurescript", "ClojureScript", { name: "ClojureScript" }, { dialects: ["pl+clojure"] });

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+clos",
    "CLOS",
    {
      name: "CLOS",
      websites: [{ kind: "wikipedia", title: "CLOS", href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System" }],
    },
    { influenced: ["pl+dylan", "pl+eulisp", "pl+skill"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+coffeescript",
    "CoffeeScript",
    {
      name: "CoffeeScript",
      websites: [
        { kind: "wikipedia", title: "CoffeeScript", href: "https://en.wikipedia.org/wiki/CoffeeScript" },
        { kind: "homepage", title: "coffeescript.org", href: "https://coffeescript.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg" }],
      releases: [
        { version: "unknown", date: "2009-12-13", kind: "first" },
        { version: "2.7.0", date: "2022-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jashkenas/coffeescript/releases/tag/2.7.0", title: "2.7.0" }],
      },
    },
    {
      influenced: ["pl+ecmascript", "pl+javascript", "pl+livescript", "pl+python", "pl+ruby"],
      influences: ["pl+livescript", "pl+moonscript"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+prototypes", "para+scripting"],
      people: [["person+jeremy-ashkenas", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

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
        "pl+abcl",
        "pl+allegro-cl",
        "pl+clisp",
        "pl+clozure-cl",
        "pl+cmucl",
        "pl+ecl",
        "pl+gcl",
        "pl+lispworks",
        "pl+sbcl",
        "pl+symbolics-common-lisp",
      ],
      influenced: [
        "pl+-starlisp-(starlisp)",
        "pl+clojure",
        "pl+emacs-lisp",
        "pl+embeddable-common-lisp",
        "pl+eulisp",
        "pl+franz-lisp",
        "pl+hy",
        "pl+islisp",
        "pl+lfe",
        "pl+lisp-machine-lisp",
        "pl+lispworks",
        "pl+maclisp",
        "pl+mdl",
        "pl+newlisp",
        "pl+sather",
        "pl+scala",
        "pl+scheme",
        "pl+skill",
      ],
      influences: [
        "pl+-starlisp",
        "pl+autolisp",
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
        "pl+skill",
        "pl+subl",
      ],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi-paradigm",
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

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+common-lisp-object-system",
    "Common Lisp Object System",
    {
      name: "Common Lisp Object System",
      websites: [
        {
          kind: "wikipedia",
          title: "Common Lisp Object System",
          href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System",
        },
      ],
    },
    { influenced: ["pl+smalltalk"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+coq",
    "Coq",
    {
      name: "Coq",
      websites: [{ kind: "wikipedia", title: "Coq", href: "https://en.wikipedia.org/wiki/Coq_(software)" }],
    },
    { influenced: ["pl+agda", "pl+f-star", "pl+idris", "pl+lean", "pl+ml", "pl+ocaml"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+cpython",
    "CPython",
    {
      name: "CPython",
      websites: [
        { kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" },
        { kind: "homepage", title: "www.python.org", href: "https://www.python.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" },
      ],
      releases: [
        { version: "unknown", date: "1994-01-26", kind: "first" },
        { version: "3.12.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://discuss.python.org/t/python-3-12-0-final-is-here/35186",
            title: "Python 3.12.0 (final) is here",
          },
        ],
      },
    },
    { licenses: ["lic+python-software-foundation"] },
  );

  //-------------------------------------------------------------------------------

  lb.define("pl+cryptol", "Cryptol", {
    name: "Cryptol",
    websites: [
      { kind: "wikipedia", title: "Cryptol", href: "https://en.wikipedia.org/wiki/Cryptol" },
      {
        kind: "repository",
        title: "galoisinc.github.io/cryptol/master/RefMan.html",
        href: "https://galoisinc.github.io/cryptol/master/RefMan.html",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+crystal",
    "Crystal",
    {
      name: "Crystal",
      websites: [
        { kind: "wikipedia", title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)" },
        { kind: "homepage", title: "crystal-lang.org", href: "https://crystal-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg" }],
      references: {
        first_appeared: [
          { href: "https://crystal-lang.org/2014/06/19/crystal-0.1.0-released.html", title: "Crystal 0.1.0 released!" },
        ],
        stable_release: [
          { href: "https://github.com/crystal-lang/crystal/releases/tag/1.12.1", title: "Release 1.12.1" },
        ],
        platform: [
          { href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" },
        ],
        os: [{ href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" }],
      },
      releases: [
        { version: "unknown", date: "2014-06-19", kind: "first" },
        { version: "1.12.1", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".cr"],
    },
    {
      influenced: ["pl+go", "pl+ruby"],
      influences: ["pl+c", "pl+c-sharp", "pl+go", "pl+python", "pl+ruby", "pl+rust"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+concurrent", "para+multi-paradigm", "para+objects"],
      people: [
        ["person+ary-borenszweig", "designer"],
        ["person+brian-cardiff", "designer"],
        ["person+juan-wajnerman", "designer"],
      ],
      platforms: [
        "platf+aarch64",
        "platf+bsd",
        "platf+ia-32",
        "platf+linux",
        "platf+macos",
        "platf+windows",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+duck", "tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+csound",
    "Csound",
    {
      name: "Csound",
      websites: [
        { kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" },
        { kind: "homepage", title: "csound.com", href: "http://csound.com" },
      ],
      references: {
        initial_release: [
          {
            href: "http://csound.com/csound30/papersessions.pdf",
            title: "Dr. Richard Boulanger - Three Decades with Csound: The Roots, Birth, and Early Years",
          },
        ],
        stable_release: [{ href: "https://github.com/csound/csound/releases", title: "Releases · csound/csound" }],
      },
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "6.18.1", date: "2022-11-24", kind: "stable" },
      ],
    },
    { licenses: ["lic+lgpl-2.1"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+csp",
    "CSP",
    {
      name: "CSP",
      websites: [
        { kind: "wikipedia", title: "CSP", href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes" },
      ],
    },
    { influenced: ["pl+handel-c", "pl+limbo", "pl+newsqueak"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+cython",
    "Cython",
    {
      name: "Cython",
      websites: [
        { kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" },
        { kind: "homepage", title: "cython.org", href: "https://cython.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "http://www.behnel.de/cythonEP2008/cython-ep2008.html",
            title: "The Cython Compiler for C-Extensions in Python",
          },
        ],
        stable_release: [{ href: "https://github.com/cython/cython/releases/tag/3.0.10", title: "Release 3.0.10" }],
        preview_release: [
          { href: "https://github.com/cython/cython/blob/61c079e/CHANGES.rst", title: "Cython Changelog" },
        ],
        filename_extensions: [
          {
            href: "https://cython.readthedocs.io/en/latest/src/userguide/language_basics.html#cython-file-types",
            title: "Language Basics — Cython 3.0.0a9 documentation",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2007-07-28", kind: "first" },
        { version: "3.0.10", date: "2024-01-01", kind: "stable" },
        { version: "3.0.0", date: "2023-03-27", kind: "preview" },
      ],
      extensions: [".pyx", ".pxd", ".pxi"],
    },
    {
      dialects: ["pl+python"],
      implementations: ["pl+python"],
      influences: ["pl+c", "pl+python"],
      licenses: ["lic+apache-2"],
      people: [
        ["person+robert-bradshaw", "designer"],
        ["person+stefan-behnel", "designer"],
      ],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
    },
  );
}
