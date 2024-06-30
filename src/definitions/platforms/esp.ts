import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+esp32", "ESP32", {
		websites: [
			{
				kind: "wikipedia",
				title: "ESP32",
				href: "https://en.wikipedia.org/wiki/ESP32",
			},
		],
	});

	lb.define("platf+esp8266", "ESP8266", {
		websites: [
			{
				kind: "wikipedia",
				title: "ESP8266",
				href: "https://en.wikipedia.org/wiki/ESP8266",
			},
		],
	});
}
