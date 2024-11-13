import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+circuitpython", {
      name: "CircuitPython",
      description:
        "CircuitPython is an open-source derivative of the MicroPython programming language targeted toward students and beginners. Development of CircuitPython is supported by Adafruit Industries. It is a software implementation of the Python 3 programming language, written in C. It has been ported to run on several modern microcontrollers.",
      keywords: ["circuit python", "circuitpython"],
      websites: [
        { title: "circuitpython.org", href: "https://circuitpython.org/", kind: "homepage" },
        { title: "CircuitPython", href: "https://en.wikipedia.org/wiki/CircuitPython", kind: "wikipedia" },
      ],
      extensions: [".py"],
      year: 2017,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "9.1.1", name: "CircuitPython 9.1.1", date: "2024-01-01" }],
    })
    .addImplements(["pl+python"])
    .addInfluencedBy(["pl+micropython"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+embedded", "paradigm+interpreted", "paradigm+scripting"])
    .addPlatforms(["plat+arm", "plat+embedded", "plat+esp32"])
    .addTags(["tag+edu", "tag+embedded", "tag+interpreter", "tag+iot"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
