import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+emacs", "Emacs", [
    { kind: "wikipedia", title: "Emacs", href: "https://en.wikipedia.org/wiki/Emacs" },
  ]);

  lb.define("platf+esp32", "ESP32", [
    { kind: "wikipedia", title: "ESP32", href: "https://en.wikipedia.org/wiki/ESP32" },
  ]);

  lb.define("platf+esp8266", "ESP8266", [
    { kind: "wikipedia", title: "ESP8266", href: "https://en.wikipedia.org/wiki/ESP8266" },
  ]);
}
