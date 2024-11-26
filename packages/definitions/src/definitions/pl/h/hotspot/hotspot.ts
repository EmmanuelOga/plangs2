import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hotspot", {
      name: "HotSpot VM",
      description:
        "HotSpot, released as Java HotSpot Performance Engine, is a Java virtual machine for desktop and server computers. Developed initially by Sun Microsystems and later by Oracle Corporation, HotSpot is known for its just-in-time compilation and adaptive optimization techniques, serving as the reference implementation of the Java programming language.",
      keywords: ["adaptive optimization", "hotspot", "java vm", "just-in-time compilation", "jvm"],
      releases: [
        { version: "23.25-b01", name: "JDK 9", date: "2016-01-01" },
        { version: "23.25", name: "JDK 9", date: "2016-01-01" },
      ],
      extWikipediaPath: "HotSpot_(virtual_machine)",
      extHomeURL: "https://openjdk.org/groups/hotspot/",
      created: "1999",
    })
    .relInfluence.add(["pl+self"])
    .relLicense.add(["lic+gnu-gpl"])
    .relParadigm.add(["para+compiled", "para+concurrent", "para+interpreted"])
    .relPlatform.add(["plat+apple", "plat+bsd", "plat+cross", "plat+java", "plat+linux", "plat+windows"])
    .relTag.add(["tag+asm", "tag+compiler", "tag+interpreters", "tag+server"])
    .relTypeSystem.add(["tsys+nominal", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+assembly", "pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
