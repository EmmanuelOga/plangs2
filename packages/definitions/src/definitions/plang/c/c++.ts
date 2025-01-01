import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+c++", {
      name: "C++",
      description:
        "General-purpose language created by Bjarne Stroustrup as an extension of C. It supports object-oriented, generic, and functional programming with low-level memory manipulation capabilities. Used broadly for its performance, C++ is implemented in systems programming and resource-constrained applications like operating systems and game development.",
      shortDesc: "General-purpose language designed by Bjarne Stroustrup, supporting multiple programming paradigms.",
      created: "1985",
      extensions: [".C", ".H", ".c++", ".cc", ".cpp", ".cppm", ".cxx", ".h", ".h++", ".hh", ".hpp", ".hxx", ".ixx"],
      extHomeURL: "https://isocpp.org/",
      extRedditPath: "cpp",
      extWikipediaPath: "C++",
      githubColor: "#f34b7d",
      githubLangId: "43",
      githubName: "C++",
      githubPopular: true,
      githubType: "programming",
      keywords: ["c++", "cplusplus", "cpp"],
      languishRanking: 5,
      links: [{ url: "https://en.cppreference.com/w/", title: "cppreference" }],
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
    })
    .relDialectOf.add("pl+c")
    .relInfluencedBy.add("pl+ada", "pl+apl", "pl+c", "pl+f-sharp")
    .relParadigms.add("para+functional", "para+imperative", "para+modular", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+control", "tag+dataq", "tag+embedded", "tag+games", "tag+industrial", "tag+interpreters", "tag+viz")
    .relTypeSystems.add("tsys+generic", "tsys+inferred", "tsys+nominal", "tsys+object", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
