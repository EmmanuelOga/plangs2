import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+c",
    "C",
    {
      name: "C",
      websites: [
        { kind: "wikipedia", title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        { kind: "homepage", title: "www.iso.org/standard/74528.html", href: "https://www.iso.org/standard/74528.html" },
        {
          kind: "homepage",
          title: "www.open-std.org/jtc1/sc22/wg14/",
          href: "http://www.open-std.org/jtc1/sc22/wg14/",
        },
        { kind: "wikipedia", title: "C", href: "https://en.wikipedia.org/wiki/List_of_C-based_programming_languages" },
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
    },
    {
      dialects: [
        "pl+objective-c",
        "pl+c-plus-plus",
        "pl+carbon",
        "pl+opencl-apiopencl-c-slashc-plus-plus-and-c-plus-plus-for-opencl",
      ],
      implementations: [
        "pl+pcc",
        "pl+gcc",
        "pl+clang",
        "pl+intel-c",
        "pl+c-plus-plusbuilder",
        "pl+microsoft-visual-c-plus-plus",
        "pl+watcom-c",
      ],
      influenced: [
        "pl+sisal",
        "pl+wolfram-language",
        "pl+bcpl",
        "pl+objective-c",
        "pl+swift",
        "pl+claire",
        "pl+embeddable-common-lisp",
        "pl+whiley",
        "pl+zpl",
        "pl+chapel",
        "pl+c-plus-plus",
        "pl+ec",
        "pl+fortran",
        "pl+c--",
        "pl+go",
        "pl+alef",
        "pl+vala",
        "pl+newlisp",
        "pl+ecmascript",
        "pl+algol",
        "pl+split-c",
        "pl+ocaml",
        "pl+charm",
        "pl+ampl",
        "pl+pcastl",
        "pl+s",
        "pl+pike",
        "pl+php",
        "pl+transaction-programming-language-(tal)",
        "pl+quakec",
        "pl+newsqueak",
        "pl+crystal",
        "pl+awk",
        "pl+bs",
        "pl+cg-slashhlsl",
        "pl+cyclone",
        "pl+draco",
        "pl+dart",
        "pl+promal",
        "pl+godot-enginegdscript",
        "pl+ratfor",
        "pl+algol-60",
        "pl+speedcoding",
        "pl+seed7",
        "pl+ring",
        "pl+rapid",
        "pl+handel-c",
        "pl+freebasic",
        "pl+cython",
        "pl+unified-parallel-c-(upc)",
        "pl+js-plus-plus",
        "pl+perl",
        "pl+limbo",
        "pl+cilkopencilkcilk-plus",
        "pl+sac",
        "pl+verilog",
        "pl+python",
        "pl+d-programming-language",
        "pl+b",
      ],
      influences: [
        "pl+b",
        "pl+bcpl",
        "pl+cpl",
        "pl+algol-68",
        "pl+pl-slashi",
        "pl+fortran",
        "pl+numerous",
        "pl+ampl",
        "pl+awk",
        "pl+csh",
        "pl+c-plus-plus",
        "pl+c--",
        "pl+c-sharp",
        "pl+objective-c",
        "pl+d",
        "pl+go",
        "pl+java",
        "pl+javascript",
        "pl+js-plus-plus",
        "pl+julia",
        "pl+limbo",
        "pl+lpc",
        "pl+perl",
        "pl+php",
        "pl+pike",
        "pl+processing",
        "pl+python",
        "pl+rust",
        "pl+seed7",
        "pl+v-(vlang)",
        "pl+vala",
        "pl+verilog",
        "pl+nim",
        "pl+zig",
      ],
      paradigms: ["para+multi-paradigm", "para+imperative", "para+structured"],
      people: [["person+dennis-ritchie", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+c-plus-plus",
    "C++",
    {
      name: "C++",
      websites: [
        { kind: "wikipedia", title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B" },
        { kind: "homepage", title: "isocpp.org", href: "https://isocpp.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" }],
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
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
      extensions: [".C", ".cc", ".cpp", ".cxx", ".c++", ".h", ".H", ".hh", ".hpp", ".hxx", ".ixx"],
    },
    {
      dialects: ["pl+c-plus-plusbuilder"],
      implementations: [
        "pl+gcc",
        "pl+llvm-clang",
        "pl+microsoft-visual-c-plus-plus",
        "pl+embarcadero-c-plus-plusbuilder",
        "pl+intel-c-plus-plus-compiler",
        "pl+ibm-xl-c-plus-plus",
        "pl+edg",
      ],
      influenced: [
        "pl+nim",
        "pl+wolfram-language",
        "pl+haxe",
        "pl+qore",
        "pl+ada",
        "pl+java",
        "pl+umple",
        "pl+x10",
        "pl+chapel",
        "pl+amiga-e",
        "pl+gnu-e",
        "pl+clojure",
        "pl+squirrel",
        "pl+ec",
        "pl+cobol",
        "pl+solidity",
        "pl+ruby",
        "pl+vala",
        "pl+lua",
        "pl+ml",
        "pl+urbiscript",
        "pl+pike",
        "pl+php",
        "pl+apl",
        "pl+systemverilog",
        "pl+rust",
        "pl+dart",
        "pl+godot-enginegdscript",
        "pl+seed7",
        "pl+c",
        "pl+js-plus-plus",
        "pl+perl",
        "pl+clu",
        "pl+c-plus-plusbuilder",
        "pl+python",
        "pl+d-programming-language",
        "pl+ats",
      ],
      influences: [
        "pl+ada",
        "pl+algol-68",
        "pl+bcpl",
        "pl+c",
        "pl+clu",
        "pl+f-sharp",
        "pl+ml",
        "pl+mesa",
        "pl+modula-2",
        "pl+simula",
        "pl+smalltalk",
        "pl+ada-95",
        "pl+c-sharp",
        "pl+c99",
        "pl+carbon",
        "pl+chapel",
        "pl+clojure",
        "pl+d",
        "pl+java",
        "pl+js-plus-plus",
        "pl+lua",
        "pl+nim",
        "pl+objective-c-plus-plus",
        "pl+perl",
        "pl+php",
        "pl+python",
        "pl+rust",
        "pl+seed7",
      ],
      paradigms: [
        "para+multi-paradigm",
        "para+imperative",
        "para+functional",
        "para+objects",
        "para+generic",
        "para+modular",
      ],
      people: [["person+bjarne-stroustrup", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+nominative", "tsys+inferred"],
    },
  );

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
        "pl+haxe",
        "pl+java",
        "pl+object-pascal",
        "pl+chapel",
        "pl+nemerle",
        "pl+clojure",
        "pl+c-plus-plus",
        "pl+cobra",
        "pl+vala",
        "pl+ballerina",
        "pl+fantom",
        "pl+arkts",
        "pl+modula-3",
        "pl+oxygene",
        "pl+scala",
        "pl+crystal",
        "pl+eiffel",
        "pl+rust",
        "pl+gosu",
        "pl+dart",
        "pl+ring",
        "pl+pascal",
        "pl+c",
        "pl+js-plus-plus",
        "pl+hack",
        "pl+powershell",
        "pl+typescript",
        "pl+kotlin",
        "pl+boo",
        "pl+d-programming-language",
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
      typeSystems: ["tsys+static", "tsys+nominative", "tsys+inferred"],
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
      influences: ["pl+java", "pl+scala", "pl+smalltalk", "pl+ml", "pl+lisp", "pl+whiley"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+objects"],
      people: [["person+gavin-king", "designer"]],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
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
      licenses: ["lic+mac", "lic+linux", "lic+windows", "lic+gpl-2", "lic+ios"],
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
      paradigms: ["para+logic", "para+functional", "para+modular", "para+objects"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+macos", "platf+windows"],
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

  lb.define(
    "pl+clojure",
    "Clojure",
    {
      name: "Clojure",
      websites: [
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure" },
        { kind: "wikipedia", title: "Clojure", href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)" },
        { kind: "homepage", title: "clojure.org", href: "https://clojure.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" }],
      references: {
        paradigm: [
          { href: "https://clojure.org/about/concurrent_programming", title: "Concurrent Programming" },
          { href: "https://github.com/clojure/core.async", title: "core.async" },
          { href: "https://clojure.org/about/functional_programming", title: "Functional Programming" },
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
      extensions: [],
    },
    {
      dialects: ["pl+lisp"],
      influenced: [
        "pl+hy",
        "pl+wolfram-language",
        "pl+lfe",
        "pl+elixir",
        "pl+java",
        "pl+scheme",
        "pl+c-plus-plus",
        "pl+erlang",
        "pl+ruby",
        "pl+ml",
        "pl+prolog",
        "pl+common-lisp",
        "pl+racket",
      ],
      influences: [
        "pl+c-sharp",
        "pl+c-plus-plus",
        "pl+common-lisp",
        "pl+erlang",
        "pl+haskell",
        "pl+java",
        "pl+ml",
        "pl+prolog",
        "pl+racket",
        "pl+ruby",
        "pl+scheme",
        "pl+wolfram-language",
        "pl+elixir",
        "pl+hy",
        "pl+lfe",
      ],
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
      people: [["person+rich-hickey", "designer"]],
      platforms: ["platf+jvm", "platf+.net"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
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
      influenced: ["pl+ruby", "pl+ecmascript", "pl+livescript", "pl+javascript", "pl+python"],
      influences: ["pl+moonscript", "pl+livescript"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+prototypes", "para+functional", "para+imperative", "para+scripting"],
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
        "pl+allegro-cl",
        "pl+abcl",
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
        "pl+hy",
        "pl+lfe",
        "pl+-starlisp-(starlisp)",
        "pl+sather",
        "pl+scheme",
        "pl+embeddable-common-lisp",
        "pl+maclisp",
        "pl+mdl",
        "pl+clojure",
        "pl+franz-lisp",
        "pl+lisp-machine-lisp",
        "pl+newlisp",
        "pl+scala",
        "pl+lispworks",
        "pl+emacs-lisp",
        "pl+eulisp",
        "pl+islisp",
        "pl+skill",
      ],
      influences: [
        "pl+lisp",
        "pl+lisp-machine-lisp",
        "pl+maclisp",
        "pl+scheme",
        "pl+interlisp",
        "pl+clojure",
        "pl+dylan",
        "pl+emacs-lisp",
        "pl+eulisp",
        "pl+islisp",
        "pl+-starlisp",
        "pl+autolisp",
        "pl+julia",
        "pl+moose",
        "pl+r",
        "pl+skill",
        "pl+subl",
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
      people: [
        ["person+scott-fahlman", "designer"],
        ["person+richard-p-gabriel", "designer"],
        ["person+david-a-moon", "designer"],
        ["person+kent-pitman", "designer"],
        ["person+guy-steele", "designer"],
        ["person+dan-weinreb", "designer"],
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
    { influenced: ["pl+idris", "pl+ocaml", "pl+ml", "pl+f-star", "pl+agda", "pl+lean"] },
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
      influences: ["pl+ruby", "pl+c", "pl+rust", "pl+go", "pl+c-sharp", "pl+python"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+objects", "para+concurrent"],
      people: [
        ["person+ary-borenszweig", "designer"],
        ["person+juan-wajnerman", "designer"],
        ["person+brian-cardiff", "designer"],
      ],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+aarch64",
        "platf+linux",
        "platf+macos",
        "platf+bsd",
        "platf+windows",
      ],
      typeSystems: ["tsys+static", "tsys+inferred", "tsys+nominative", "tsys+duck"],
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
    { influenced: ["pl+newsqueak", "pl+handel-c", "pl+limbo"] },
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
      platforms: ["platf+windows", "platf+macos", "platf+linux"],
    },
  );
}
