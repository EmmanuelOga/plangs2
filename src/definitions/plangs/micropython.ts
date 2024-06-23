import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+micropython",
    "MicroPython",
    {
      name: "MicroPython",
      websites: [
        { kind: "wikipedia", title: "MicroPython", href: "https://en.wikipedia.org/wiki/MicroPython" },
        { kind: "homepage", title: "micropython.org", href: "https://micropython.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/MicroPython_new_logo.svg" }],
      releases: [
        { version: "unknown", date: "2014-05-03", kind: "first" },
        { version: "1.23.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        license: [
          {
            href: "https://github.com/micropython/micropython/blob/master/LICENSE",
            title: "micropython/LICENSE at master · micropython/micropython",
          },
        ],
      },
    },
    {
      licenses: ["lic+mit"],
      people: [["person+damien-p-george", "designer"]],
      platforms: [
        "platf+arm",
        "platf+esp32",
        "platf+esp8266",
        "platf+javascript",
        "platf+pic-microcontrollers",
        "platf+rp2040",
        "platf+stm32",
        "platf+unix",
        "platf+windows",
        "platf+zephyr",
      ],
    },
  );

  /**/
}
