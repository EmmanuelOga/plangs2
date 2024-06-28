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
      implementations: [
        "pl+clang",
        "pl+cppbuilder",
        "pl+edison-design-group",
        "pl+gcc",
        "pl+ibm-xl-cpp",
        "pl+intel-cpp-compiler",
        "pl+ms-visual-cpp",
      ],
      influences: [
        "pl+ada",
        "pl+algol-68",
        "pl+apl",
        "pl+bcpl",
        "pl+c",
        "pl+clu",
        "pl+f-sharp",
        "pl+mesa",
        "pl+ml",
        "pl+modula-2",
        "pl+simula",
        "pl+smalltalk",
      ],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+modular", "para+multi", "para+objects"],
      people: [["person+bjarne-stroustrup", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"],
    },
  );
}
