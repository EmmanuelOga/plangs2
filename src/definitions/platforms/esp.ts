import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+esp32").merge({
    name: "ESP32",
    websites: [{ kind: "wikipedia", title: "ESP32", href: "https://en.wikipedia.org/wiki/ESP32" }],
  });

  /**/
  g.buildPlatform("platf+esp8266").merge({
    name: "ESP8266",
    websites: [{ kind: "wikipedia", title: "ESP8266", href: "https://en.wikipedia.org/wiki/ESP8266" }],
  });

  /**/
}
