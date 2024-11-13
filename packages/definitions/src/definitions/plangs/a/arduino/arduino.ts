import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+arduino", {
      name: "Arduino",
      languishRanking: 73,
      websites: [
        { title: "Arduino on Wikipedia", href: "https://en.wikipedia.org/wiki/Arduino", kind: "wikipedia" },
        { title: "Official Arduino Website", href: "https://www.arduino.cc", kind: "homepage" },
      ],
      stackovTags: ["arduino"],
      description:
        "Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects. Arduino boards are able to read inputs and produce outputs such as turning on a motor or LED. The Arduino Programming Language is based on C/C++.",
      keywords: ["Arduino", "IoT", "embedded systems", "microcontroller", "open-source"],
      extensions: [".ino", ".pde"],
      year: 2005,
      isMainstream: true,
      releases: [{ version: "2.3.3", name: "Arduino IDE 2.3.3", date: "2024-09-25" }],
    })
    .addLicenses(["license+cc-by", "license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+embedded", "paradigm+event-driven", "paradigm+procedural"])
    .addPlatforms(["plat+arduino", "plat+embedded", "plat+linux", "plat+windows"])
    .addTags(["tag+edu", "tag+embedded", "tag+iot", "tag+sci"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
