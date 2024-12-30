import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+esp32", {
    name: "ESP32",
    description: "Low-cost, low-power system-on-chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.",
    extHomeURL: "https://en.wikipedia.org/wiki/ESP32",
    keywords: ["bluetooth", "esp32", "esp8266", "microcontroller", "wifi"],
  });
}
