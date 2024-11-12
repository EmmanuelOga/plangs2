import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c++", {
      name: "C++",
      description:
        'C++ (/ˈsiː plʌs plʌs/, pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, it has since expanded significantly over time; as of 1997, C++ has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation for systems like microcomputers or to make operating systems like Linux or Windows. It is usually implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM.',
      keywords: ["cpp", "c++", "cplusplus"],
      websites: [
        { title: "isocpp.org", href: "https://isocpp.org/", kind: "homepage" },
        { title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B", kind: "wikipedia" },
        { title: "C++ on Reddit", kind: "reddit", href: "https://reddit.com/r/cpp" },
        { title: "C++ on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/C++" },
      ],
      extensions: [".C", ".H", ".c++", ".cc", ".cpp", ".cppm", ".cxx", ".h", ".h++", ".hh", ".hpp", ".hxx", ".ixx"],
      year: 1985,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "11", name: "C++11", date: "2011-08-12" },
        { version: "14", name: "C++14", date: "2014-12-15" },
        { version: "17", name: "C++17", date: "2017-12-01" },
        { version: "20", name: "C++20", date: "2020-12-15" },
      ],
      github: { name: "C++", langId: "43", color: "#f34b7d", popular: true, type: "programming" },
      stackovTags: ["c++"],
      githubName: "C++",
      languishRanking: 6,
    })
    .addDialectOf(["pl+c"])
    .addInfluencedBy(["pl+ada", "pl+apl", "pl+c", "pl+clu", "pl+f-sharp", "pl+ml", "pl+simula"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dataq",
      "tag+embedded",
      "tag+games",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
