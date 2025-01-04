import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+iot", {
    name: "IoT",
    description:
      "Internet of Things: Software and platforms designed to connect and manage IoT devices and networks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Internet_of_things",
    keywords: ["IoT", "connected devices", "smart devices"],
  });
}
