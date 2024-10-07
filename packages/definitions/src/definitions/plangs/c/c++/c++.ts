import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c++", {
      name: "C++",
      description:
        'C++ (/ˈsiː plʌs plʌs/, pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, it has since expanded significantly over time; as of 1997, C++ has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation for systems like microcomputers or to make operating systems like Linux or Windows. It is usually implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM.',
      firstAppeared: "1985-01-01",
      extensions: [".C", ".H", ".c++", ".cc", ".cpp", ".cppm", ".cxx", ".h", ".h++", ".hh", ".hpp", ".hxx", ".ixx"],
      websites: [
        { href: "https://isocpp.org/", title: "isocpp.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/C%2B%2B", title: "C++", kind: "wikipedia" },
      ],
    })
    .addDialectOf(["pl+c"])
    .addInfluencedBy(["pl+ada", "pl+apl", "pl+c", "pl+clu", "pl+f-sharp", "pl+ml", "pl+simula"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+cross"])
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
    .addTypeSystems(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"]);
}
