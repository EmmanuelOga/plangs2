import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+circuitpython", {
      images: [{ title: "CircuitPython", kind: "other", url: "/images/plangs/c/circuitpython/main.png" }],
      name: "CircuitPython",
      description:
        "CircuitPython is an open-source derivative of the MicroPython programming language targeted toward students and beginners. Development of CircuitPython is supported by Adafruit Industries. It is a software implementation of the Python 3 programming language, written in C. It has been ported to run on several modern microcontrollers.",
      websites: [
        { href: "https://circuitpython.org/", title: "circuitpython.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/CircuitPython", title: "CircuitPython", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "9.1.1", date: "2024-01-01" }],
    })
    .addLicenses(["lic+mit"])
    .addWrittenIn(["pl+c"]);
}
