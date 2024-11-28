import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+micropython", {
      name: "MicroPython",
      description:
        "MicroPython is a lean and efficient implementation of the Python 3 programming language, optimized for microcontrollers. It offers a subset of the Python standard library with additional modules for hardware access and features such as REPL, inline assembler, and cross-compilation support.",
      keywords: ["embedded python", "micro python", "micropython"],
      extensions: [".py"],
      releases: [
        { version: "1.24.0", name: "MicroPython 1.24.0", date: "2024-10-26" },
        { version: "1.23.0", name: "MicroPython 1.23.0", date: "2024-01-01" },
      ],
      extWikipediaPath: "MicroPython",
      extHomeURL: "https://micropython.org/",
      created: "2013",
    })
    .relImplements.add(["pl+python"])
    .relInfluencedBy.add(["pl+python"])
    .relLicenses.add(["lic+mit"])
    .relParadigms.add(["para+embedded", "para+interpreted", "para+multi", "para+oop", "para+scripting"])
    .relPlatforms.add(["plat+arduino", "plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry", "plat+riscv", "plat+windows"])
    .relTags.add(["tag+app", "tag+embedded", "tag+interpreters", "tag+iot", "tag+scripting", "tag+testing"])
    .relTypeSystems.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenWith.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
