import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+J", "J", {
    name: "J",
    websites: [
      {
        kind: "wikipedia",
        title: "J",
        href: "https://en.wikipedia.org/wiki/J_(programming_language)",
      },
      { kind: "homepage", title: "www.jsoftware.com", href: "http://www.jsoftware.com" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
      },
    ],
    releases: [
      { version: "unknown", date: "1990-01-01", kind: "first" },
      { version: "9.5", date: "2023-12-20", kind: "stable" },
    ],
    references: {
      stable_release: [
        {
          href: "https://code.jsoftware.com/wiki/System/ReleaseNotes/J9.5",
          title: "Release Notes J9.5",
        },
      ],
      os: [{ href: "https://www.jsoftware.com/#/README", title: "Jsoftware" }],
      influenced: [
        {
          href: "https://traims.tumblr.com/post/33883718232/python-for-data-analysis-18-oct-2012-london",
          title: "Wes McKinney at 2012 meeting Python for Data Analysis",
        },
        {
          href: "http://doc.sccode.org/Reference/Adverbs.html",
          title: "SuperCollider documentation, Adverbs for Binary Operators",
        },
      ],
    },
    people: [["person+Roger-Hui", "designer"]],
    licenses: ["lic+gpl-3"],
    paradigms: [
      "para+array",
      "para+functional",
      "para+objects",
      "para+class-based",
      "para+prototypes",
      "para+function-level",
      "para+tacit",
    ],
    typeSystems: ["tsys+dynamic"],
    platforms: [
      "platf+cross-platform",
      "platf+windows",
      "platf+linux",
      "platf+macos",
      "platf+android",
      "platf+ios",
      "platf+rpi",
    ],
    influences: ["pl+APL", "pl+FL", "pl+NumPy", "pl+SuperCollider"],
    influenced: ["pl+APL", "pl+FL"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Java", "Java", {
    name: "Java",
    websites: [
      {
        kind: "wikipedia",
        title: "Java",
        href: "https://en.wikipedia.org/wiki/Java_(programming_language)",
      },
      { kind: "homepage", title: "oracle.com/java/", href: "http://oracle.com/java/" },
      { kind: "homepage", title: "java.com", href: "http://java.com" },
      { kind: "homepage", title: "dev.java", href: "http://dev.java" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      },
    ],
    references: {
      first_appeared: [
        {
          href: "https://web.archive.org/web/20160314102242/http://www.forbes.com/sites/oracle/2015/05/20/javas-20-years-of-innovation/",
          title: "Java's 20 Years of Innovation",
        },
      ],
      influenced_by: [
        {
          href: "https://web.archive.org/web/20230929040943/https://books.google.com/books?id=0rUtBAAAQBAJ&pg=PAPA133#v=onepage&q&f=false",
          title: "Cracking The Java Programming Interview :: 2000+ Java Interview Que/Ans",
        },
        {
          href: "https://web.archive.org/web/20110319065438/http://www.barrycornelius.com/papers/java5/",
          title: "[1]",
        },
        {
          href: "https://web.archive.org/web/20140506214653/http://www.oracle.com/technetwork/java/langenv-140151.html",
          title: "The Java Language Environment",
        },
        {
          href: "https://web.archive.org/web/20110805051057/http://java.sun.com/docs/books/jls/second_edition/html/intro.doc.html#237601",
          title: "The Java Language Specification, 2nd Edition",
        },
        {
          href: "https://web.archive.org/web/20090105145818/http://www.computerworld.com.au/index.php/id%3B1422447371%3Bpp%3B3%3Bfp%3B4194304%3Bfpid%3B1",
          title: "The A-Z of Programming Languages: Modula-3",
        },
        {
          href: "https://web.archive.org/web/20201201054813/http://www.delphikingdom.com/asp/viewitem.asp?catalogid=1155",
          title: "Niklaus Wirth's lecture at the Polytechnic Museum in Moscow",
        },
        {
          href: "https://web.archive.org/web/20110713014816/http://cs.gmu.edu/~sean/stuff/java-objc.html",
          title: "[3]",
        },
        {
          href: "https://web.archive.org/web/20101229090912/http://www.fscript.org/prof/javapassport.pdf",
          title: "History of Java",
        },
        {
          href: "https://web.archive.org/web/20150716194245/http://queue.acm.org/detail.cfm?id=1017013",
          title: "A Conversation with James Gosling – ACM Queue",
        },
        {
          href: "https://web.archive.org/web/20120627043929/http://java.sun.com/docs/white/delegates.html",
          title: 'About Microsoft\'s "Delegates"',
        },
      ],
      influenced: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
        {
          href: "https://web.archive.org/web/20171009041815/http://gambaswiki.org/wiki/doc/intro?nh&l=en",
          title: "Gambas Documentation Introduction",
        },
        {
          href: "https://web.archive.org/web/20150213220946/http://www.infoworld.com/article/2610885/facebook-q-a--hack-brings-static-typing-to-php-world.html",
          title: "Facebook Q&A: Hack brings static typing to PHP world",
        },
      ],
    },
    releases: [{ version: "unknown", date: "1995-05-23", kind: "first" }],
    extensions: [".java", ".jmod"],
    people: [["person+James-Gosling", "designer"]],
    paradigms: [
      "para+multi-paradigm",
      "para+generic",
      "para+objects",
      "para+class-based",
      "para+functional",
      "para+imperative",
      "para+reflective",
      "para+concurrent",
    ],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"],
    influences: [
      "pl+CLU",
      "pl+Simula67",
      "pl+Lisp",
      "pl+Smalltalk",
      "pl+Ada-83",
      "pl+C-Plus-Plus",
      "pl+C-Sharp",
      "pl+Eiffel",
      "pl+Mesa",
      "pl+Modula-3",
      "pl+Oberon",
      "pl+Objective-C",
      "pl+UCSD-Pascal",
      "pl+Object-Pascal",
      "pl+Ada-2005",
      "pl+BeanShell",
      "pl+Chapel",
      "pl+Clojure",
      "pl+ECMAScript",
      "pl+Fantom",
      "pl+Gambas",
      "pl+Groovy",
      "pl+Hack",
      "pl+Haxe",
      "pl+J-Sharp",
      "pl+Kotlin",
      "pl+PHP",
      "pl+Python",
      "pl+Scala",
      "pl+Seed7",
      "pl+Vala",
      "pl+JavaScript",
      "pl+JS-Plus-Plus",
      "pl+ArkTS",
    ],
    influenced: [
      "pl+Haxe",
      "pl+Qore",
      "pl+Ada",
      "pl+Objective-C",
      "pl+Umple",
      "pl+Object-Pascal",
      "pl+X10",
      "pl+OptimJ",
      "pl+Whiley",
      "pl+Chapel",
      "pl+Emerald",
      "pl+Xtend",
      "pl+MDL",
      "pl+Clojure",
      "pl+Mirah",
      "pl+C-Plus-Plus",
      "pl+BeanShell",
      "pl+Vala",
      "pl+ECMAScript",
      "pl+Ballerina",
      "pl+Fantom",
      "pl+ArkTS",
      "pl+Pizza",
      "pl+Mesa[1]",
      "pl+Modula-3",
      "pl+PHP",
      "pl+Scala",
      "pl+NetRexx",
      "pl+E",
      "pl+Join-Java",
      "pl+SystemVerilog",
      "pl+Eiffel",
      "pl+Gosu",
      "pl+JavaScript",
      "pl+Dart",
      "pl+ActionScript",
      "pl+Seed7",
      "pl+Pascal",
      "pl+C",
      "pl+JS-Plus-Plus",
      "pl+Hack",
      "pl+Strongtalk",
      "pl+Tea",
      "pl+Oaklisp",
      "pl+Gambas",
      "pl+Groovy",
      "pl+TypeScript",
      "pl+Kotlin",
      "pl+Ceylon",
      "pl+Smalltalk",
      "pl+D-programming-language",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+JavaScript", "JavaScript", {
    name: "JavaScript",
    websites: [
      { kind: "wikipedia", title: "JavaScript", href: "https://en.wikipedia.org/wiki/JavaScript" },
      {
        kind: "wikipedia",
        title: "JavaScript",
        href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
      },
      {
        kind: "homepage",
        title: "ecma-international.org/publications-and-standards/standards/ecma-262/",
        href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
      },
    ],
    references: {
      first_appeared: [
        {
          href: "https://web.archive.org/web/20070916144913/https://wp.netscape.com/newsref/pr/newsrelease67.html",
          title:
            "Netscape and Sun announce JavaScript, the Open, Cross-platform Object Scripting Language for Enterprise Networks and the Internet",
        },
      ],
      stable_release: [
        {
          href: "https://262.ecma-international.org/14.0/",
          title: "ECMAScript® 2023 Language Specification",
        },
      ],
      preview_release: [
        { href: "https://tc39.es/ecma262/", title: "ECMAScript® 2025 Language Specification" },
      ],
      influenced_by: [
        {
          href: "https://web.archive.org/web/20201224233514/https://books.google.com/books?id=nneBa6-mWfgC&q=The+immediate+concern+at+Netscape+was+it+must+look+like+Java.&pg=PA141",
          title: "Coders at Work: Reflections on the Craft of Programming",
        },
        {
          href: "https://web.archive.org/web/20200227184037/https://speakingjs.com/es5/ch04.html",
          title: "Chapter 4. How JavaScript Was Created",
        },
        { href: "https://brendaneich.com/2008/04/popularity/", title: "Popularity – Brendan Eich" },
        {
          href: "https://web.archive.org/web/20200829024704/https://www.youtube.com/watch?v=1EyRscXrehw",
          title: "Brendan Eich: An Introduction to JavaScript, JSConf 2010",
        },
        { href: "https://archive.org/details/javascriptbible000good", title: "JavaScript Bible" },
      ],
    },
    releases: [
      { version: "unknown", date: "1995-12-04", kind: "first" },
      { version: "unknown", date: "2023-01-01", kind: "stable" },
      { version: "unknown", date: "2025-01-01", kind: "preview" },
    ],
    people: [["person+Brendan-Eich", "designer"]],
    paradigms: [
      "para+multi-paradigm",
      "para+event-driven",
      "para+functional",
      "para+imperative",
      "para+objects",
    ],
    typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    implementations: ["pl+V8", "pl+JavaScriptCore", "pl+SpiderMonkey", "pl+Chakra"],
    dialects: ["pl+AssemblyScript"],
    influences: [
      "pl+Java",
      "pl+Scheme",
      "pl+Self",
      "pl+AWK",
      "pl+HyperTalk",
      "pl+ActionScript",
      "pl+ArkTS",
      "pl+AssemblyScript",
      "pl+CoffeeScript",
      "pl+Dart",
      "pl+Haxe",
      "pl+JS-Plus-Plus",
      "pl+Opa",
      "pl+TypeScript",
    ],
    influenced: [
      "pl+Haxe",
      "pl+Java",
      "pl+Curl",
      "pl+HyperTalk",
      "pl+Scheme",
      "pl+Lisp",
      "pl+Bosque",
      "pl+Source",
      "pl+Squirrel",
      "pl+asm.js",
      "pl+Reason",
      "pl+Solidity",
      "pl+BeanShell",
      "pl+AssemblyScript",
      "pl+ArkTS",
      "pl+LiveScript",
      "pl+PureScript",
      "pl+PHP",
      "pl+Opa",
      "pl+Self",
      "pl+Dart",
      "pl+ActionScript",
      "pl+C",
      "pl+Script.NET",
      "pl+QML",
      "pl+JS-Plus-Plus",
      "pl+Gleam",
      "pl+Raku",
      "pl+TypeScript",
      "pl+Kotlin",
      "pl+Python",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Javascript", "Javascript", {
    name: "Javascript",
    websites: [
      {
        kind: "wikipedia",
        title: "Javascript",
        href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
      },
    ],
    influenced: ["pl+Ballerina"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+jq", "jq", {
    name: "jq",
    websites: [
      {
        kind: "wikipedia",
        title: "jq",
        href: "https://en.wikipedia.org/wiki/Jq_(programming_language)",
      },
      { kind: "repository", title: "jqlang.github.io/jq", href: "https://jqlang.github.io/jq" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "2012-08-21", kind: "first" },
      { version: "1.7.1", date: "2023-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://github.com/jqlang/jq/releases/tag/jq-1.7.1", title: "Release jq 1.7.1" },
      ],
    },
    people: [["person+Stephen-Dolan", "designer"]],
    licenses: ["lic+mit"],
    paradigms: ["para+functional", "para+json", "para+tacit"],
    platforms: ["platf+cross-platform"],
    implementations: ["pl+C", "pl+Go", "pl+Rust"],
    influenced: ["pl+Icon"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+JRuby", "JRuby", {
    name: "JRuby",
    websites: [
      { kind: "wikipedia", title: "JRuby", href: "https://en.wikipedia.org/wiki/JRuby" },
      { kind: "homepage", title: "www.jruby.org", href: "https://www.jruby.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2001-01-01", kind: "first" },
      { version: "9.4.5.0", date: "2023-11-02", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://github.com/jruby/jruby/releases", title: "Releases · jruby/jruby" },
      ],
    },
    people: [
      ["person+Charles-Oliver-Nutter", "designer"],
      ["person+Thomas-Enebo", "designer"],
      ["person+Ola-Bini", "designer"],
      ["person+Nick-Sieger", "designer"],
    ],
    licenses: ["lic+eclipse-public", "lic+gpl", "lic+lgpl"],
    platforms: ["platf+jvm"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+JSON", "JSON", {
    name: "JSON",
    websites: [{ kind: "wikipedia", title: "JSON", href: "https://en.wikipedia.org/wiki/JSON" }],
    influenced: ["pl+QML", "pl+Rebol"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Julia", "Julia", {
    name: "Julia",
    websites: [
      {
        kind: "wikipedia",
        title: "Julia",
        href: "https://en.wikipedia.org/wiki/Julia_(programming_language)",
      },
      { kind: "homepage", title: "JuliaLang.org", href: "https://JuliaLang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
      },
    ],
    references: {
      paradigm: [
        {
          href: "https://www.oreilly.com/library/view/beginning-julia-programming/9781484231715/A458482_1_En_2_Chapter.html",
          title:
            "2. Object-Oriented Programming - Beginning Julia Programming: For Engineers and Scientists [Book]",
        },
        {
          href: "https://medium.com/@acidflask/smoothing-data-with-julia-s-generated-functions-c80e240e05f3#.615wk3dle",
          title: "Smoothing data with Julia's @generated functions",
        },
      ],
      developer: [
        { href: "https://github.com/JuliaLang/julia/blob/master/LICENSE.md", title: "LICENSE.md" },
        {
          href: "https://github.com/JuliaLang/julia/graphs/contributors",
          title: "Contributors to JuliaLang/julia",
        },
      ],
      first_appeared: [
        {
          href: "https://julialang.org/blog/2012/02/why-we-created-julia",
          title: "Why We Created Julia",
        },
      ],
      stable_release: [
        { href: "https://julialang.org/downloads/", title: "Download Julia" },
        {
          href: "https://github.com/JuliaLang/julia/tree/release-1.6",
          title: "GitHub - JuliaLang/julia at release-1.6",
        },
        {
          href: "https://github.com/JuliaLang/julia/pull/45319",
          title:
            "release-1.6: Backports for 1.6.7 by KristofferC · Pull Request #45319 · JuliaLang/julia",
        },
      ],
      preview_release: [
        {
          href: "https://discourse.julialang.org/t/julia-v1-11-0-beta2-is-now-available/114938",
          title: "Julia v1.11.0-beta2 is now available",
        },
        {
          href: "https://github.com/JuliaLang/julia",
          title: "GitHub - JuliaLang/julia at release-1.11",
        },
        {
          href: "https://discourse.julialang.org/t/julia-1-10-4-testing-period/114958",
          title: "Julia 1.10.4 testing period",
        },
      ],
      typing_discipline: [
        {
          href: "https://erik-engheim.medium.com/dynamically-typed-languages-are-not-what-you-think-ac8d1392b803",
          title: "Dynamically Typed Languages Are Not What You Think",
        },
      ],
      implementation_language: [
        {
          href: "https://github.com/JuliaLang/julia/blob/master/doc/src/devdocs/build/build.md#required-build-tools-and-external-libraries",
          title: "Building Julia (Detailed)",
        },
      ],
      platform: [{ href: "https://juliagpu.org/cuda/", title: "NVIDIA CUDA ⋅ JuliaGPU" }],
      influenced_by: [
        {
          href: "https://increment.com/programming-languages/goldilocks-language-history-of-julia/",
          title: "Julia: The Goldilocks language",
        },
        {
          href: "https://julialang.org/blog/2012/02/why-we-created-julia",
          title: "Why We Created Julia",
        },
        { href: "https://juliacon.org/2016", title: "JuliaCon 2016" },
        { href: "https://docs.julialang.org/en/v1/", title: "Home · The Julia Language" },
        {
          href: "https://web.archive.org/web/20201220131729/http://fatiherikli.github.io/programming-language-network/#language:Julia",
          title: "Programming Language Network",
        },
        {
          href: "https://writings.stephenwolfram.com/2013/02/what-should-we-call-the-language-of-mathematica/",
          title: "What Should We Call the Language of Mathematica?—Stephen Wolfram Writings",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "2012-01-01", kind: "first" },
      { version: "1.10.3", date: "2022-07-19", kind: "stable" },
      { version: "1.11.0", date: "2024-05-30", kind: "preview" },
    ],
    extensions: [".jl"],
    people: [
      ["person+Jeff-Bezanson", "designer"],
      ["person+Alan-Edelman", "designer"],
      ["person+Stefan-Karpinski", "designer"],
      ["person+Viral-B-Shah", "designer"],
    ],
    licenses: ["lic+mit"],
    paradigms: [
      "para+multi-paradigm",
      "para+objects",
      "para+functional",
      "para+array",
      "para+imperative",
      "para+structured",
      "para+reflective",
      "para+meta",
    ],
    typeSystems: [
      "tsys+dynamic",
      "tsys+inferred",
      "tsys+optional",
      "tsys+nominative",
      "tsys+parametric",
      "tsys+strong",
    ],
    platforms: [
      "platf+x86-64",
      "platf+ia-32",
      "platf+macos",
      "platf+aarch64",
      "platf+cuda",
      "platf+bsd",
      "platf+arm",
      "platf+rocm",
      "platf+oneapi",
      "platf+linux",
      "platf+windows",
    ],
    implementations: ["pl+C", "pl+C-Plus-Plus", "pl+LLVM", "pl+Scheme"],
    influences: [
      "pl+Dylan",
      "pl+Lisp",
      "pl+Lua",
      "pl+Mathematica",
      "pl+MATLAB",
      "pl+Perl",
      "pl+Python",
      "pl+R",
      "pl+Ruby",
      "pl+Fortress",
    ],
    influenced: [
      "pl+Wolfram-Language",
      "pl+Scheme",
      "pl+Lisp",
      "pl+MATLAB-(programming-language)MATLAB-(software)",
      "pl+R",
      "pl+Ruby",
      "pl+Dylan",
      "pl+Common-Lisp",
      "pl+C",
      "pl+Python",
    ],
  });
}
