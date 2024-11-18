import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+micropython", {
      name: "MicroPython",
      description:
        "MicroPython is a lean and efficient implementation of the Python 3 programming language, optimized for microcontrollers. It offers a subset of the Python standard library with additional modules for hardware access and features such as REPL, inline assembler, and cross-compilation support.",
      keywords: ["embedded python", "micro python", "micropython"],
      extensions: [".py"],
      year: 2013,
      releases: [
        { version: "1.24.0", name: "MicroPython 1.24.0", date: "2024-10-26" },
        { version: "1.23.0", name: "MicroPython 1.23.0", date: "2024-01-01" },
      ],
      extWikipediaPath: "MicroPython",
      extHomeURL: "https://micropython.org/",
    })
    .addImplements(["pl+python"])
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+embedded", "paradigm+interpreted", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+arduino", "plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry", "plat+riscv", "plat+windows"])
    .addTags(["tag+app", "tag+embedded", "tag+interpreter", "tag+iot", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
