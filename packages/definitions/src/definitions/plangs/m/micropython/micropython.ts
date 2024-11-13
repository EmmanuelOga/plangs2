import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+micropython", {
      name: "MicroPython",
      description:
        "MicroPython is a lean and efficient implementation of the Python 3 programming language, encompassing a small subset of the standard library optimized to run on microcontrollers and embedded systems.",
      keywords: ["micro python", "micropython"],
      websites: [
        { title: "MicroPython Official Site", href: "https://micropython.org/", kind: "homepage" },
        { title: "MicroPython - Wikipedia", href: "https://en.wikipedia.org/wiki/MicroPython", kind: "wikipedia" },
      ],
      extensions: [".py"],
      year: 2013,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.23.0", name: "MicroPython 1.23.0", date: "2024-01-01" }],
    })
    .addImplements(["pl+python"])
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+embedded", "paradigm+interpreted", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+arduino", "plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry"])
    .addTags(["tag+app", "tag+embedded", "tag+interpreter", "tag+iot", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
