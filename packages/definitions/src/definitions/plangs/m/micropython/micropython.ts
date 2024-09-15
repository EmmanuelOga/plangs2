import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+micropython", {
      name: "MicroPython",
      description:
        "MicroPython is a software implementation of a programming language largely compatible with Python 3, written in C, that is optimized to run on a microcontroller.",
      websites: [
        { href: "https://micropython.org/", title: "micropython.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/MicroPython", title: "MicroPython", kind: "wikipedia" },
      ],
      releases: [{ version: "1.23.0", date: "2024-01-01" }],
    })
    .addImplements(["pl+python"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+esp32", "plat+nodejs", "plat+windows"])
    .addWrittenIn(["pl+c"]);
}
