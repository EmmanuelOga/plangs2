import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+C", "C", {
    name: "C",
    websites: [
      {
        kind: "wikipedia",
        title: "C",
        href: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      {
        kind: "homepage",
        title: "www.iso.org/standard/74528.html",
        href: "https://www.iso.org/standard/74528.html",
      },
      {
        kind: "homepage",
        title: "www.open-std.org/jtc1/sc22/wg14/",
        href: "http://www.open-std.org/jtc1/sc22/wg14/",
      },
      {
        kind: "wikipedia",
        title: "C",
        href: "https://en.wikipedia.org/wiki/List_of_C-based_programming_languages",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "1972-01-01", kind: "first" },
      { version: "unknown", date: "2018-01-01", kind: "stable" },
      { version: "unknown", date: "2024-02-21", kind: "preview" },
    ],
    references: {
      preview_release: [
        {
          href: "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3221.htm",
          title: "N3221 - Editor's Report, Post January 2024 Strasbourg France Meeting",
        },
      ],
      influenced: [
        {
          href: "https://web.archive.org/web/20131106064022/http://cs.anu.edu.au/courses/ENGN3213/lectures/lecture6_VERILOG_2010.pdf",
          title: "Verilog HDL (and C)",
        },
      ],
    },
    extensions: [".c", ".h"],
    people: [["person+Dennis-Ritchie", "designer"]],
    paradigms: ["para+multi-paradigm", "para+imperative", "para+structured"],
    typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    platforms: ["platf+cross-platform"],
    implementations: [
      "pl+pcc",
      "pl+GCC",
      "pl+Clang",
      "pl+Intel-C",
      "pl+C-Plus-PlusBuilder",
      "pl+Microsoft-Visual-C-Plus-Plus",
      "pl+Watcom-C",
    ],
    dialects: [
      "pl+Objective-C",
      "pl+C-Plus-Plus",
      "pl+Carbon",
      "pl+OpenCL-APIOpenCL-C-SlashC-Plus-Plus-and-C-Plus-Plus-for-OpenCL",
    ],
    influences: [
      "pl+B",
      "pl+BCPL",
      "pl+CPL",
      "pl+ALGOL-68",
      "pl+PL-SlashI",
      "pl+FORTRAN",
      "pl+Numerous",
      "pl+AMPL",
      "pl+AWK",
      "pl+csh",
      "pl+C-Plus-Plus",
      "pl+C--",
      "pl+C-Sharp",
      "pl+Objective-C",
      "pl+D",
      "pl+Go",
      "pl+Java",
      "pl+JavaScript",
      "pl+JS-Plus-Plus",
      "pl+Julia",
      "pl+Limbo",
      "pl+LPC",
      "pl+Perl",
      "pl+PHP",
      "pl+Pike",
      "pl+Processing",
      "pl+Python",
      "pl+Rust",
      "pl+Seed7",
      "pl+V-(Vlang)",
      "pl+Vala",
      "pl+Verilog",
      "pl+Nim",
      "pl+Zig",
    ],
    influenced: [
      "pl+SISAL",
      "pl+Wolfram-Language",
      "pl+BCPL",
      "pl+Objective-C",
      "pl+Swift",
      "pl+Claire",
      "pl+Embeddable-Common-Lisp",
      "pl+Whiley",
      "pl+ZPL",
      "pl+Chapel",
      "pl+C-Plus-Plus",
      "pl+eC",
      "pl+Fortran",
      "pl+C--",
      "pl+Go",
      "pl+Alef",
      "pl+Vala",
      "pl+newLISP",
      "pl+ECMAScript",
      "pl+ALGOL",
      "pl+Split-C",
      "pl+OCaml",
      "pl+Charm",
      "pl+AMPL",
      "pl+PCASTL",
      "pl+S",
      "pl+Pike",
      "pl+PHP",
      "pl+Transaction-Programming-Language-(TAL)",
      "pl+QuakeC",
      "pl+Newsqueak",
      "pl+Crystal",
      "pl+AWK",
      "pl+bs",
      "pl+Cg-SlashHLSL",
      "pl+Cyclone",
      "pl+Draco",
      "pl+Dart",
      "pl+PROMAL",
      "pl+Godot-EngineGDScript",
      "pl+Ratfor",
      "pl+ALGOL-60",
      "pl+Speedcoding",
      "pl+Seed7",
      "pl+Ring",
      "pl+RAPID",
      "pl+Handel-C",
      "pl+FreeBASIC",
      "pl+Cython",
      "pl+Unified-Parallel-C-(UPC)",
      "pl+JS-Plus-Plus",
      "pl+Perl",
      "pl+Limbo",
      "pl+CilkOpenCilkCilk-Plus",
      "pl+SAC",
      "pl+Verilog",
      "pl+Python",
      "pl+D-programming-language",
      "pl+B",
    ],
  });

  lb.define("pl+C-Plus-Plus", "C++", {
    name: "C++",
    websites: [
      { kind: "wikipedia", title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B" },
      { kind: "homepage", title: "isocpp.org", href: "https://isocpp.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "1985-01-01", kind: "first" },
      { version: "unknown", date: "2020-12-15", kind: "stable" },
      { version: "unknown", date: "2023-03-19", kind: "preview" },
    ],
    references: {
      filename_extensions: [
        {
          href: "https://learn.microsoft.com/en-us/cpp/cpp/modules-cpp?view=msvc-170",
          title: "Overview of modules in C++",
        },
      ],
      influenced_by: [
        { href: "https://doi.org/10.1145%2F234286.1057836", title: "10.1145/234286.1057836" },
        {
          href: "https://web.archive.org/web/20211230092718/https://www.youtube.com/watch?v=15QF2q66NhU",
          title: "C++20: Reaching for the Aims of C++ - Bjarne Stroustrup - CppCon 2021",
        },
        {
          href: "https://doi.org/10.1145%2F3386320",
          title: "Thriving in a crowded and changing world: C++ 2006–2020",
        },
      ],
      influenced: [
        {
          href: "https://web.archive.org/web/20180624150422/https://chapel-lang.org/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey/",
          title: "Rich Hickey Q&A",
        },
        {
          href: "https://web.archive.org/web/20210527025512/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PA133",
          title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
        },
        {
          href: "https://web.archive.org/web/20200511095442/https://www.onux.com/jspp/blog/scaling-jspp-abstraction-performance-and-readability/",
          title: "Scaling JS++: Abstraction, Performance, and Readability",
        },
        {
          href: "https://www.lua.org/history.html",
          title: "The evolution of an extension language: a history of Lua",
        },
        {
          href: "https://web.archive.org/web/20170711004631/https://nim-lang.org/faq.html",
          title: "FAQ Nim Programming Language",
        },
        {
          href: "https://web.archive.org/web/20121023030209/http://docs.python.org/tutorial/classes.html",
          title: "9. Classes — Python 3.6.4 documentation",
        },
        {
          href: "https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    },
    extensions: [".C", ".cc", ".cpp", ".cxx", ".c++", ".h", ".H", ".hh", ".hpp", ".hxx", ".ixx"],
    people: [["person+Bjarne-Stroustrup", "designer"]],
    paradigms: [
      "para+multi-paradigm",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+generic",
      "para+modular",
    ],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+nominative", "tsys+inferred"],
    platforms: ["platf+cross-platform"],
    implementations: [
      "pl+GCC",
      "pl+LLVM-Clang",
      "pl+Microsoft-Visual-C-Plus-Plus",
      "pl+Embarcadero-C-Plus-PlusBuilder",
      "pl+Intel-C-Plus-Plus-Compiler",
      "pl+IBM-XL-C-Plus-Plus",
      "pl+EDG",
    ],
    dialects: ["pl+C-Plus-PlusBuilder"],
    influences: [
      "pl+Ada",
      "pl+ALGOL-68",
      "pl+BCPL",
      "pl+C",
      "pl+CLU",
      "pl+F-Sharp",
      "pl+ML",
      "pl+Mesa",
      "pl+Modula-2",
      "pl+Simula",
      "pl+Smalltalk",
      "pl+Ada-95",
      "pl+C-Sharp",
      "pl+C99",
      "pl+Carbon",
      "pl+Chapel",
      "pl+Clojure",
      "pl+D",
      "pl+Java",
      "pl+JS-Plus-Plus",
      "pl+Lua",
      "pl+Nim",
      "pl+Objective-C-Plus-Plus",
      "pl+Perl",
      "pl+PHP",
      "pl+Python",
      "pl+Rust",
      "pl+Seed7",
    ],
    influenced: [
      "pl+Nim",
      "pl+Wolfram-Language",
      "pl+Haxe",
      "pl+Qore",
      "pl+Ada",
      "pl+Java",
      "pl+Umple",
      "pl+X10",
      "pl+Chapel",
      "pl+Amiga-E",
      "pl+GNU-E",
      "pl+Clojure",
      "pl+Squirrel",
      "pl+eC",
      "pl+COBOL",
      "pl+Solidity",
      "pl+Ruby",
      "pl+Vala",
      "pl+Lua",
      "pl+ML",
      "pl+urbiscript",
      "pl+Pike",
      "pl+PHP",
      "pl+APL",
      "pl+SystemVerilog",
      "pl+Rust",
      "pl+Dart",
      "pl+Godot-EngineGDScript",
      "pl+Seed7",
      "pl+C",
      "pl+JS-Plus-Plus",
      "pl+Perl",
      "pl+CLU",
      "pl+C-Plus-PlusBuilder",
      "pl+Python",
      "pl+D-programming-language",
      "pl+ATS",
    ],
  });

  lb.define("pl+C-Sharp", "C#", {
    name: "C#",
    websites: [
      {
        kind: "wikipedia",
        title: "C#",
        href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      },
    ],
    dialects: ["pl+Nemerle"],
    influenced: [
      "pl+Haxe",
      "pl+Java",
      "pl+Object-Pascal",
      "pl+Chapel",
      "pl+Nemerle",
      "pl+Clojure",
      "pl+C-Plus-Plus",
      "pl+Cobra",
      "pl+Vala",
      "pl+Ballerina",
      "pl+Fantom",
      "pl+ArkTS",
      "pl+Modula-3",
      "pl+Oxygene",
      "pl+Scala",
      "pl+Crystal",
      "pl+Eiffel",
      "pl+Rust",
      "pl+Gosu",
      "pl+Dart",
      "pl+Ring",
      "pl+Pascal",
      "pl+C",
      "pl+JS-Plus-Plus",
      "pl+Hack",
      "pl+PowerShell",
      "pl+TypeScript",
      "pl+Kotlin",
      "pl+Boo",
      "pl+D-programming-language",
    ],
  });

  lb.define("pl+C99", "C99", {
    name: "C99",
    websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }],
    influenced: [
      "pl+C-Plus-Plus",
      "pl+OpenCL-APIOpenCL-C-SlashC-Plus-Plus-and-C-Plus-Plus-for-OpenCL",
    ],
  });

  lb.define("pl+Carbon", "Carbon", {
    name: "Carbon",
    websites: [
      {
        kind: "wikipedia",
        title: "Carbon",
        href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)",
      },
      {
        kind: "repository",
        title: "github.com/carbon-language",
        href: "https://github.com/carbon-language",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
      },
    ],
    extensions: [".carbon"],
    licenses: ["lic+apache-2-with-llvm-exception"],
    typeSystems: ["tsys+static", "tsys+nominative", "tsys+inferred"],
    implementations: ["pl+C-Plus-Plus"],
    influenced: ["pl+C-Plus-Plus"],
  });

  lb.define("pl+Ceylon", "Ceylon", {
    name: "Ceylon",
    websites: [
      {
        kind: "wikipedia",
        title: "Ceylon",
        href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)",
      },
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
        {
          href: "https://gitter.im/ceylon/user?at=5660a7242cbea1d7054de9d9",
          title: "ceylon/user - Gitter",
        },
        {
          href: "https://gitter.im/ceylon/user?at=5660a90e5057376520db6f8b",
          title: "ceylon/user - Gitter",
        },
        {
          href: "https://jaxenter.com/top-10-ceylon-language-features-java-wishes-it-had-108003.html",
          title: "Top 10 Ceylon language features Java wishes it had",
        },
      ],
    },
    extensions: [".ceylon"],
    people: [["person+Gavin-King", "designer"]],
    licenses: ["lic+apache-2"],
    paradigms: ["para+objects"],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    platforms: ["platf+jvm"],
    influences: ["pl+Java", "pl+Scala", "pl+Smalltalk", "pl+ML", "pl+Lisp", "pl+Whiley"],
    influenced: ["pl+Scala"],
  });

  lb.define("pl+ChucK", "ChucK", {
    name: "ChucK",
    websites: [
      { kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" },
      { kind: "homepage", title: "chuck.cs.princeton.edu", href: "http://chuck.cs.princeton.edu" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" },
    ],
    references: {
      first_appeared: [
        {
          href: "https://books.google.com/books?id=96ymxXy3wjMC&pg=PA57",
          title: "The Oxford handbook of computer music",
        },
      ],
      stable_release: [
        {
          href: "https://github.com/ccrma/chuck/blob/main/notes/VERSIONS",
          title: "github.com/ccrma/chuck",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "2003-01-01", kind: "first" },
      { version: "1.5.2.4", date: "2024-01-01", kind: "stable" },
    ],
    people: [["person+Ge-Wang", "designer"]],
    licenses: ["lic+mac", "lic+linux", "lic+windows", "lic+gpl-2", "lic+ios"],
    paradigms: ["para+multi-paradigm"],
    typeSystems: ["tsys+strong"],
    platforms: ["platf+cross-platform"],
  });

  lb.define("pl+Ciao", "Ciao", {
    name: "Ciao",
    websites: [
      {
        kind: "wikipedia",
        title: "Ciao",
        href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)",
      },
      { kind: "homepage", title: "www.ciao-lang.org", href: "http://www.ciao-lang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Logo_for_Ciao_programming_language.png/121px-Logo_for_Ciao_programming_language.png",
      },
    ],
    releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    licenses: ["lic+gpl", "lic+lgpl"],
    paradigms: ["para+logic", "para+functional", "para+modular", "para+objects"],
    platforms: ["platf+cross-platform", "platf+unix", "platf+macos", "platf+windows"],
    influences: ["pl+Prolog"],
  });

  lb.define("pl+Clang", "Clang", {
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
        {
          href: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.6",
          title: "LLVM 18.1.6",
        },
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
    licenses: ["lic+apache-2"],
    platforms: ["platf+aarch64", "platf+arm", "platf+ia-32", "platf+x86-64"],
  });

  lb.define("pl+Clojure", "Clojure", {
    name: "Clojure",
    websites: [
      { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure" },
      {
        kind: "wikipedia",
        title: "Clojure",
        href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)",
      },
      { kind: "homepage", title: "clojure.org", href: "https://clojure.org" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" },
    ],
    references: {
      paradigm: [
        {
          href: "https://clojure.org/about/concurrent_programming",
          title: "Concurrent Programming",
        },
        { href: "https://github.com/clojure/core.async", title: "core.async" },
        {
          href: "https://clojure.org/about/functional_programming",
          title: "Functional Programming",
        },
        { href: "https://github.com/clojure/core.logic/", title: "core.logic" },
        { href: "https://clojure.org/guides/threading_macros", title: "Threading Macros Guide" },
      ],
      influenced_by: [
        {
          href: "https://web.archive.org/web/20170111184835/http://www.codequarterly.com/2011/rich-hickey/",
          title: "Rich Hickey Q&A",
        },
        { href: "https://youtube.com/watch?v=LKtk3HCgTa8", title: "Simple Made Easy" },
        {
          href: "http://cdn.oreilly.com/oreilly/booksamplers/9781449394707_sampler.pdf",
          title: "Clojure Programming",
        },
        {
          href: "https://web.archive.org/web/20171003001051/https://www.amazon.com/gp/richpub/listmania/fullview/R3LG3ZBZS4GCTH",
          title: "Clojure Bookshelf",
        },
      ],
      influenced: [
        { href: "https://janet-lang.org/", title: "Janet Language" },
        { href: "https://www.pixielang.org/", title: "Pixie" },
        { href: "https://github.com/artagnon/rhine-ml", title: "Rhine" },
      ],
    },
    releases: [
      { version: "unknown", date: "2007-01-01", kind: "first" },
      { version: "1.11.2", date: "2024-03-08", kind: "stable" },
    ],
    people: [["person+Rich-Hickey", "designer"]],
    licenses: ["lic+eclipse-public"],
    paradigms: [
      "para+multi-paradigm",
      "para+agent-based",
      "para+concurrent",
      "para+functional",
      "para+logic",
      "para+macros",
      "para+pipeline",
    ],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    platforms: ["platf+jvm", "platf+.net"],
    dialects: ["pl+Lisp"],
    influences: [
      "pl+C-Sharp",
      "pl+C-Plus-Plus",
      "pl+Common-Lisp",
      "pl+Erlang",
      "pl+Haskell",
      "pl+Java",
      "pl+ML",
      "pl+Prolog",
      "pl+Racket",
      "pl+Ruby",
      "pl+Scheme",
      "pl+Wolfram-Language",
      "pl+Elixir",
      "pl+Hy",
      "pl+LFE",
    ],
    influenced: [
      "pl+Hy",
      "pl+Wolfram-Language",
      "pl+LFE",
      "pl+Elixir",
      "pl+Java",
      "pl+Scheme",
      "pl+C-Plus-Plus",
      "pl+Erlang",
      "pl+Ruby",
      "pl+ML",
      "pl+Prolog",
      "pl+Common-Lisp",
      "pl+Racket",
    ],
  });

  lb.define("pl+ClojureScript", "ClojureScript", {
    name: "ClojureScript",
    dialects: ["pl+Clojure"],
  });

  lb.define("pl+CLOS", "CLOS", {
    name: "CLOS",
    websites: [
      {
        kind: "wikipedia",
        title: "CLOS",
        href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System",
      },
    ],
    influenced: ["pl+Dylan", "pl+EuLisp", "pl+SKILL"],
  });

  lb.define("pl+CoffeeScript", "CoffeeScript", {
    name: "CoffeeScript",
    websites: [
      {
        kind: "wikipedia",
        title: "CoffeeScript",
        href: "https://en.wikipedia.org/wiki/CoffeeScript",
      },
      { kind: "homepage", title: "coffeescript.org", href: "https://coffeescript.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "2009-12-13", kind: "first" },
      { version: "2.7.0", date: "2022-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://github.com/jashkenas/coffeescript/releases/tag/2.7.0", title: "2.7.0" },
      ],
    },
    people: [["person+Jeremy-Ashkenas", "designer"]],
    licenses: ["lic+mit"],
    paradigms: [
      "para+multi-paradigm",
      "para+prototypes",
      "para+functional",
      "para+imperative",
      "para+scripting",
    ],
    typeSystems: ["tsys+dynamic"],
    platforms: ["platf+cross-platform"],
    influences: ["pl+MoonScript", "pl+LiveScript"],
    influenced: ["pl+Ruby", "pl+ECMAScript", "pl+LiveScript", "pl+JavaScript", "pl+Python"],
  });

  lb.define("pl+Common-Lisp", "Common Lisp", {
    name: "Common Lisp",
    websites: [
      {
        kind: "wikipedia",
        title: "Common Lisp",
        href: "https://en.wikipedia.org/wiki/Common_Lisp",
      },
      { kind: "homepage", title: "common-lisp.net", href: "http://common-lisp.net" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" },
    ],
    releases: [{ version: "unknown", date: "1984-01-01", kind: "first" }],
    scoping: ["dynamic"],
    extensions: [".lisp", ".lsp", ".l", ".cl", ".fasl"],
    people: [
      ["person+Scott-Fahlman", "designer"],
      ["person+Richard-P-Gabriel", "designer"],
      ["person+David-A-Moon", "designer"],
      ["person+Kent-Pitman", "designer"],
      ["person+Guy-Steele", "designer"],
      ["person+Dan-Weinreb", "designer"],
    ],
    paradigms: [
      "para+multi-paradigm",
      "para+imperative",
      "para+functional",
      "para+objects",
      "para+meta",
      "para+reflective",
      "para+generic",
    ],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    platforms: ["platf+cross-platform"],
    implementations: [
      "pl+Allegro-CL",
      "pl+ABCL",
      "pl+CLISP",
      "pl+Clozure-CL",
      "pl+CMUCL",
      "pl+ECL",
      "pl+GCL",
      "pl+LispWorks",
      "pl+SBCL",
      "pl+Symbolics-Common-Lisp",
    ],
    dialects: ["pl+Lisp"],
    influences: [
      "pl+Lisp",
      "pl+Lisp-Machine-Lisp",
      "pl+Maclisp",
      "pl+Scheme",
      "pl+Interlisp",
      "pl+Clojure",
      "pl+Dylan",
      "pl+Emacs-Lisp",
      "pl+EuLisp",
      "pl+ISLISP",
      "pl+-StarLisp",
      "pl+AutoLisp",
      "pl+Julia",
      "pl+Moose",
      "pl+R",
      "pl+SKILL",
      "pl+SubL",
    ],
    influenced: [
      "pl+Hy",
      "pl+LFE",
      "pl+-StarLisp-(StarLisp)",
      "pl+Sather",
      "pl+Scheme",
      "pl+Embeddable-Common-Lisp",
      "pl+Maclisp",
      "pl+MDL",
      "pl+Clojure",
      "pl+Franz-Lisp",
      "pl+Lisp-Machine-Lisp",
      "pl+newLISP",
      "pl+Scala",
      "pl+LispWorks",
      "pl+Emacs-Lisp",
      "pl+EuLisp",
      "pl+ISLISP",
      "pl+SKILL",
    ],
  });

  lb.define("pl+Common-Lisp-Object-System", "Common Lisp Object System", {
    name: "Common Lisp Object System",
    websites: [
      {
        kind: "wikipedia",
        title: "Common Lisp Object System",
        href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System",
      },
    ],
    influenced: ["pl+Smalltalk"],
  });

  lb.define("pl+Coq", "Coq", {
    name: "Coq",
    websites: [
      { kind: "wikipedia", title: "Coq", href: "https://en.wikipedia.org/wiki/Coq_(software)" },
    ],
    influenced: ["pl+Idris", "pl+OCaml", "pl+ML", "pl+F-Star", "pl+Agda", "pl+Lean"],
  });

  lb.define("pl+CPython", "CPython", {
    name: "CPython",
    websites: [
      { kind: "wikipedia", title: "CPython", href: "https://en.wikipedia.org/wiki/CPython" },
      { kind: "homepage", title: "www.python.org", href: "https://www.python.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
      },
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
    licenses: ["lic+python-software-foundation"],
  });

  lb.define("pl+Cryptol", "Cryptol", {
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

  lb.define("pl+Crystal", "Crystal", {
    name: "Crystal",
    websites: [
      {
        kind: "wikipedia",
        title: "Crystal",
        href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)",
      },
      { kind: "homepage", title: "crystal-lang.org", href: "https://crystal-lang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg",
      },
    ],
    references: {
      first_appeared: [
        {
          href: "https://crystal-lang.org/2014/06/19/crystal-0.1.0-released.html",
          title: "Crystal 0.1.0 released!",
        },
      ],
      stable_release: [
        {
          href: "https://github.com/crystal-lang/crystal/releases/tag/1.12.1",
          title: "Release 1.12.1",
        },
      ],
      platform: [
        {
          href: "https://crystal-lang.org/reference/platform_support.html",
          title: "Crystal Platform Support",
        },
      ],
      os: [
        {
          href: "https://crystal-lang.org/reference/platform_support.html",
          title: "Crystal Platform Support",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "2014-06-19", kind: "first" },
      { version: "1.12.1", date: "2024-01-01", kind: "stable" },
    ],
    extensions: [".cr"],
    people: [
      ["person+Ary-Borenszweig", "designer"],
      ["person+Juan-Wajnerman", "designer"],
      ["person+Brian-Cardiff", "designer"],
    ],
    licenses: ["lic+apache-2"],
    paradigms: ["para+multi-paradigm", "para+objects", "para+concurrent"],
    typeSystems: ["tsys+static", "tsys+inferred", "tsys+nominative", "tsys+duck"],
    platforms: [
      "platf+ia-32",
      "platf+x86-64",
      "platf+aarch64",
      "platf+linux",
      "platf+macos",
      "platf+bsd",
      "platf+windows",
    ],
    influences: ["pl+Ruby", "pl+C", "pl+Rust", "pl+Go", "pl+C-Sharp", "pl+Python"],
    influenced: ["pl+Go", "pl+Ruby"],
  });

  lb.define("pl+Csound", "Csound", {
    name: "Csound",
    websites: [
      { kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" },
      { kind: "homepage", title: "csound.com", href: "http://csound.com" },
    ],
    references: {
      initial_release: [
        {
          href: "http://csound.com/csound30/papersessions.pdf",
          title:
            "Dr. Richard Boulanger - Three Decades with Csound: The Roots, Birth, and Early Years",
        },
      ],
      stable_release: [
        { href: "https://github.com/csound/csound/releases", title: "Releases · csound/csound" },
      ],
    },
    releases: [
      { version: "unknown", date: "1986-01-01", kind: "first" },
      { version: "6.18.1", date: "2022-11-24", kind: "stable" },
    ],
    licenses: ["lic+lgpl-2.1"],
  });

  lb.define("pl+CSP", "CSP", {
    name: "CSP",
    websites: [
      {
        kind: "wikipedia",
        title: "CSP",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
    influenced: ["pl+Newsqueak", "pl+Handel-C", "pl+Limbo"],
  });

  lb.define("pl+Cython", "Cython", {
    name: "Cython",
    websites: [
      { kind: "wikipedia", title: "Cython", href: "https://en.wikipedia.org/wiki/Cython" },
      { kind: "homepage", title: "cython.org", href: "https://cython.org" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cython_logo.svg" },
    ],
    references: {
      first_appeared: [
        {
          href: "http://www.behnel.de/cythonEP2008/cython-ep2008.html",
          title: "The Cython Compiler for C-Extensions in Python",
        },
      ],
      stable_release: [
        { href: "https://github.com/cython/cython/releases/tag/3.0.10", title: "Release 3.0.10" },
      ],
      preview_release: [
        {
          href: "https://github.com/cython/cython/blob/61c079e/CHANGES.rst",
          title: "Cython Changelog",
        },
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
    people: [
      ["person+Robert-Bradshaw", "designer"],
      ["person+Stefan-Behnel", "designer"],
    ],
    licenses: ["lic+apache-2"],
    platforms: ["platf+windows", "platf+macos", "platf+linux"],
    implementations: ["pl+Python"],
    dialects: ["pl+Python"],
    influences: ["pl+C", "pl+Python"],
  });
}
