import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cpp",
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
      extensions: [".C", ".cc", ".cpp", ".cxx", ".c++", ".h", ".H", ".hh", ".hpp", ".hxx", ".ixx"],
    },
    {
      implementations: [
        "pl+gcc",
        "pl+clang",
        "pl+ms-visual-cpp",
        "pl+cppbuilder",
        "pl+intel-cpp-compiler",
        "pl+ibm-xl-cpp",
        "pl+edison-design-group",
      ],
      influences: [
        "pl+ada",
        "pl+algol",
        "pl+bcpl",
        "pl+c",
        "pl+clu",
        "pl+f-sharp",
        "pl+ml",
        "pl+mesa",
        "pl+modula",
        "pl+simula",
        "pl+smalltalk",
        "pl+apl",
      ],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+generic", "para+modular"],
      people: ["person+bjarne-stroustrup"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+nominative", "tsys+inferred"],
    },
  );
}
