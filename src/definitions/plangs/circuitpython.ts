import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+circuitpython",
    "CircuitPython",
    {
      name: "CircuitPython",
      websites: [
        { kind: "wikipedia", title: "CircuitPython", href: "https://en.wikipedia.org/wiki/CircuitPython" },
        { kind: "homepage", title: "circuitpython.org", href: "https://circuitpython.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Adafruit_blinka_angles-left.svg" },
      ],
      references: {
        initial_release: [
          { href: "https://blog.adafruit.com/2017/07/19/circuitpython-1-0-0/", title: "CircuitPython 1.0.0!" },
        ],
        stable_release: [
          { href: "https://github.com/adafruit/circuitpython/releases/tag/9.0.4", title: "Release 9.0.4" },
        ],
        written_in: [{ href: "https://github.com/adafruit/circuitpython", title: "adafruit/circuitpython" }],
        license: [
          {
            href: "https://github.com/adafruit/circuitpython/blob/master/LICENSE/micropython",
            title: "circuitpython/LICENSE",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2017-07-19", kind: "first" },
        { version: "9.0.4", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+mit"] },
  );

  /**/
}
