import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pypy", {
      name: "PyPy",
      description:
        "PyPy (/ˈpaɪpaɪ/) is an implementation of the Python programming language. PyPy often runs faster than the standard implementation CPython because PyPy uses a just-in-time compiler. Most Python code runs well on PyPy except for code that depends on CPython extensions, which either does not work or incurs some overhead when run in PyPy.",
      keywords: ["pypy"],
      websites: [
        { title: "pypy.org", href: "https://pypy.org/", kind: "homepage" },
        { title: "PyPy on Reddit", kind: "reddit", href: "https://reddit.com/r/pypy" },
        { title: "PyPy on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/PyPy" },
      ],
      extensions: [".py"],
      year: 2007,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "7.3.16", name: "PyPy 7.3.16", date: "2024-01-01" }],
      stackovTags: ["python"],
      githubName: "Python",
      languishRanking: 1,
      githubLangId: "303",
      githubColor: "#3572A5",
      githubPopular: true,
      githubType: "programming",
    })
    .addDialectOf(["pl+python"])
    .addImplements(["pl+python"])
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+interpreted", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+compiler", "tag+framework", "tag+interpreter", "tag+testing"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c", "pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
