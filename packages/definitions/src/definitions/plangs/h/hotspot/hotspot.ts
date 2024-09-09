import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+hotspot", {
      name: "Java HotSpot Virtual Machine",
      description:
        "HotSpot, released as Java HotSpot Performance Engine, is a Java virtual machine for desktop and server computers, developed by Sun Microsystems which was purchased by and became a division of Oracle Corporation in 2010. Its features improved performance via methods such as just-in-time compilation and adaptive optimization. It is the de facto Java Virtual Machine, serving as the reference implementation of the Java programming language.",
      websites: [
        { href: "https://openjdk.org/groups/hotspot/", title: "openjdk.org/groups/hotspot/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)", title: "Java HotSpot Virtual Machine", kind: "wikipedia" },
      ],
      releases: [{ version: "23.25", date: "2016-01-01" }],
    })
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+assembly", "pl+c++"]);
}
