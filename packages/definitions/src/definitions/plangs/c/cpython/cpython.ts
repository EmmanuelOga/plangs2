import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cpython", {
      name: "CPython",
      description:
        "CPython is the reference implementation of the Python programming language, combining interpreter and compiler functionalities. It is written in C and Python and uses a Global Interpreter Lock (GIL) to manage threads. It was initially released by Guido van Rossum and is maintained by Python core developers and the community, supported by the Python Software Foundation.",
      keywords: ["cpython", "python", "python language implementation"],
      websites: [
        { title: "Welcome to Python.org", href: "https://www.python.org/", kind: "homepage" },
        { title: "CPython - Wikipedia", href: "https://en.wikipedia.org/wiki/CPython", kind: "wikipedia" },
      ],
      extensions: [".py", ".pyc", ".pyd", ".pyo", ".pyw", ".pyz"],
      year: 1994,
      isMainstream: true,
      releases: [
        { version: "3.13.0", name: "Stable release 3.13.0", date: "2024-10-07" },
        { version: "3.12.0", name: "CPython 3.12.0", date: "2023-01-01" },
      ],
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

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
