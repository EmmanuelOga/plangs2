import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+c++", {"name":"C++","description":"C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup. Designed initially as an extension of the C programming language in 1985, C++ incorporates object-oriented, generic, and functional features alongside facilities for low-level memory manipulation. The language is widely used in systems programming, and resource-constrained software, such as operating systems and embedded systems, due to its performance and flexibility. C++ is standardized by ISO, with its latest iteration, C++23 (ISO/IEC 14882:2024), continuing to expand its features and library.","keywords":["c++","cplusplus","cpp"],"extensions":[".C",".H",".c++",".cc",".cpp",".cppm",".cxx",".h",".h++",".hh",".hpp",".hxx",".ixx"],"year":1985,"isTranspiler":true,"isMainstream":true,"releases":[{"version":"C++98","name":"ISO/IEC 14882:1998","date":"1998"},{"version":"C++03","name":"ISO/IEC 14882:2003","date":"2003"},{"version":"C++11","name":"ISO/IEC 14882:2011","date":"2011"},{"version":"C++14","name":"ISO/IEC 14882:2014","date":"2014"},{"version":"C++17","name":"ISO/IEC 14882:2017","date":"2017"},{"version":"C++20","name":"ISO/IEC 14882:2020","date":"2020"},{"version":"C++23","name":"ISO/IEC 14882:2024","date":"2024"},{"version":"11","name":"C++11","date":"2011-08-12"},{"version":"14","name":"C++14","date":"2014-12-15"},{"version":"17","name":"C++17","date":"2017-12-01"},{"version":"20","name":"C++20","date":"2020-12-15"}],"stackovTags":["c++"],"githubName":"C++","languishRanking":5,"githubLangId":"43","githubColor":"#f34b7d","githubPopular":true,"githubType":"programming","extWikipediaPath":"C++","extRedditPath":"cpp","extHomeURL":"https://isocpp.org/"})
    .addDialectOf(["pl+c"])
    .addInfluencedBy(["pl+ada","pl+apl","pl+c","pl+f-sharp"])
    .addParadigms(["paradigm+functional","paradigm+imperative","paradigm+modular","paradigm+multi","paradigm+oop","paradigm+procedural"])
    .addPlatforms(["plat+apple","plat+cross","plat+linux","plat+wasm","plat+windows"])
    .addTags(["tag+app","tag+compiler","tag+dataq","tag+embedded","tag+games","tag+industrial","tag+instrument_control","tag+interpreter","tag+viz"])
    .addTypeSystems(["tsys+inferred","tsys+nominal","tsys+static","tsys+strong"])
    .addWrittenIn(["pl+c"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  