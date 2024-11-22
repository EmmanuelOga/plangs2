import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pypy", {
      name: "PyPy",
      description:
        "PyPy is a fast, compliant alternative implementation of Python. Known for its Just-in-Time (JIT) compiler, PyPy often runs faster than CPython. It aims to provide flexibility and speed while supporting a high degree of compatibility with Python code. PyPy is written in RPython and supports Python versions 2.7 and 3.10.",
      keywords: ["cpython", "interpreter", "jit", "pypy", "python", "python alternative"],
      extensions: [".py"],
      releases: [
        { version: "7.3.17", name: "PyPy 7.3.17", date: "2024-08-28" },
        { version: "7.3.16", name: "PyPy 7.3.16", date: "2024-01-01" },
      ],
      stackovTags: ["python"],
      githubName: "Python",
      githubLangId: "303",
      githubColor: "#3572A5",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Python_(programming_language)",
      extRedditPath: "Python",
      extGithubPath: "pypy/pypy",
      extHomeURL: "https://pypy.org/",
      created: "2007",
    })
    .relDialectOf.add(["pl+python"])
    .relImplements.add(["pl+python"])
    .relInfluencedBy.add(["pl+python"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+interpreted", "paradigm+scripting"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+analysis", "tag+compiler", "tag+framework", "tag+interpreters", "tag+testing"])
    .relTsys.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenIn.add(["pl+c", "pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
