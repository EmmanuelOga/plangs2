import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hotspot", {
      name: "Java HotSpot Virtual Machine",
      description:
        "HotSpot, released as Java HotSpot Performance Engine, is a Java virtual machine for desktop and server computers, developed by Sun Microsystems which was purchased by and became a division of Oracle Corporation in 2010. Its features improved performance via methods such as just-in-time compilation and adaptive optimization. It is the de facto Java Virtual Machine, serving as the reference implementation of the Java programming language.",
      keywords: ["hotspot", "jvm"],
      websites: [
        { title: "openjdk.org/groups/hotspot/", href: "https://openjdk.org/groups/hotspot/", kind: "other" },
        { title: "Java HotSpot Virtual Machine", href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)", kind: "wikipedia" },
      ],
      firstAppeared: "1999-04-27",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "23.25", name: "JDK 9", date: "2016-01-01" }],
    })
    .addInfluencedBy(["pl+self", "pl+smalltalk"])
    .addLicenses(["license+gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+interpreted"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+java", "plat+linux", "plat+windows"])
    .addTags(["tag+asm", "tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+assembly", "pl+c++"]);
}
