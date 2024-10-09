import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cpython", {
      name: "CPython",
      description:
        "CPython is the reference implementation of the Python programming language. Written in C and Python, CPython is the default and most widely used implementation of the Python language. It serves as both an interpreter and a compiler, compiling Python into bytecode that is interpreted by the Python Virtual Machine.",
      keywords: ["cpython", "python"],
      websites: [
        { title: "python.org", href: "https://www.python.org/", kind: "homepage" },
        { title: "CPython", href: "https://en.wikipedia.org/wiki/CPython", kind: "wikipedia" },
      ],
      extensions: [".py", ".pyo", ".pyc", ".pyd", ".pyw", ".pyz"],
      firstAppeared: "1991-01-01",
      images: [],
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "3.12.0", name: "CPython 3.12.0", date: "2023-01-01" }],
    })
    .addImplements(["pl+python"])
    .addInfluencedBy(["pl+c", "pl+python"])
    .addLicenses(["license+python"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+raspberry", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+audio-dev",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+testing",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+python"]);
}
