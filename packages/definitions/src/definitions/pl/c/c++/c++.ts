import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+c++", {
      name: "C++",
      description:
        "C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup. Designed initially as an extension of the C programming language in 1985, C++ incorporates object-oriented, generic, and functional features alongside facilities for low-level memory manipulation. The language is widely used in systems programming, and resource-constrained software, such as operating systems and embedded systems, due to its performance and flexibility. C++ is standardized by ISO, with its latest iteration, C++23 (ISO/IEC 14882:2024), continuing to expand its features and library.",
      keywords: ["c++", "cplusplus", "cpp"],
      extensions: [".C", ".H", ".c++", ".cc", ".cpp", ".cppm", ".cxx", ".h", ".h++", ".hh", ".hpp", ".hxx", ".ixx"],
      isTranspiler: true,
      releases: [
        { version: "C++98", name: "ISO/IEC 14882:1998", date: "1998" },
        { version: "C++03", name: "ISO/IEC 14882:2003", date: "2003" },
        { version: "C++11", name: "ISO/IEC 14882:2011", date: "2011" },
        { version: "C++14", name: "ISO/IEC 14882:2014", date: "2014" },
        { version: "C++17", name: "ISO/IEC 14882:2017", date: "2017" },
        { version: "C++20", name: "ISO/IEC 14882:2020", date: "2020" },
        { version: "C++23", name: "ISO/IEC 14882:2024", date: "2024" },
        { version: "11", name: "C++11", date: "2011-08-12" },
        { version: "14", name: "C++14", date: "2014-12-15" },
        { version: "17", name: "C++17", date: "2017-12-01" },
        { version: "20", name: "C++20", date: "2020-12-15" },
      ],
      stackovTags: ["c++"],
      githubName: "C++",
      languishRanking: 5,
      githubLangId: "43",
      githubColor: "#f34b7d",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "C++",
      extRedditPath: "cpp",
      extHomeURL: "https://isocpp.org/",
      created: "1985",
    })
    .relDialectOf.add(["pl+c"])
    .relInfluencedBy.add(["pl+ada", "pl+apl", "pl+c", "pl+f-sharp"])
    .relParadigm.add(["para+functional", "para+imperative", "para+modular", "para+multi", "para+oop", "para+procedural"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows"])
    .relTags.add([
      "tag+app",
      "tag+compiler",
      "tag+control",
      "tag+dataq",
      "tag+embedded",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+viz",
    ])
    .relTsys.add(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
