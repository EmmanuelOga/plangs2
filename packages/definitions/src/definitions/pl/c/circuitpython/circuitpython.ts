import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+circuitpython", {
      name: "CircuitPython",
      description:
        "CircuitPython is an open-source derivative of the MicroPython programming language targeted toward students and beginners. Development of CircuitPython is supported by Adafruit Industries. It is a software implementation of the Python 3 programming language, written in C. It has been ported to run on several modern microcontrollers.",
      keywords: ["circuit python", "circuitpython"],
      extensions: [".py"],
      isTranspiler: true,
      releases: [
        { version: "9.1.4", name: "CircuitPython 9.1.4", date: "2024-09-17" },
        { version: "9.1.1", name: "CircuitPython 9.1.1", date: "2024-01-01" },
      ],
      extWikipediaPath: "CircuitPython",
      extGithubPath: "adafruit/circuitpython",
      extHomeURL: "https://circuitpython.org/",
      created: "2017",
    })
    .relImplements.add(["pl+python"])
    .relInfluencedBy.add(["pl+micropython"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+embedded", "para+interpreted", "para+scripting"])
    .relPlatform.add(["plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry"])
    .relTag.add(["tag+edu", "tag+embedded", "tag+interpreters", "tag+iot"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
