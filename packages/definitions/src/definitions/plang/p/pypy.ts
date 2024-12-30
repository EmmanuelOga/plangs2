import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pypy", {
      name: "PyPy",
      description:
        "High-performance, compliant alternative implementation of the Python language. It is notable for its Just-in-Time (JIT) compiler, often achieving faster execution than standard CPython by optimizing Python code dynamically. PyPy prioritizes speed and flexibility while maintaining code compatibility.",
      shortDesc: "High-performance alternative implementation of Python featuring a JIT compiler for speed.",
      created: "2007",
      extensions: [".py"],
      extGithubPath: "pypy/pypy",
      extHomeURL: "https://pypy.org",
      extRedditPath: "Python",
      extWikipediaPath: "Python_(programming_language)",
      githubColor: "#3572A5",
      githubLangId: "303",
      githubName: "Python",
      githubPopular: true,
      githubStars: 1200,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["jit", "pypy", "python alternative", "python interpreter"],
      releases: [
        { version: "7.3.17", name: "PyPy 7.3.17", date: "2024-08-28" },
        { version: "7.3.16", name: "PyPy 7.3.16", date: "2024-01-01" },
      ],
      stackovTags: ["python"],
    })
    .relDialectOf.add("pl+python")
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+interpreted", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+analysis", "tag+compiler", "tag+framework", "tag+interpreters", "tag+testing")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+c", "pl+python");
}
