import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+arduino", {
      name: "Arduino",
      stackovTags: ["arduino"],
      description:
        "Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects. Arduino boards are able to read inputs and produce outputs such as turning on a motor or LED. The Arduino Programming Language is based on C/C++.",
      keywords: ["Arduino", "IoT", "embedded systems", "microcontroller", "open-source"],
      extensions: [".ino", ".pde"],
      releases: [{ version: "2.3.3", name: "Arduino IDE 2.3.3", date: "2024-09-25" }],
      extWikipediaPath: "Arduino",
      extHomeURL: "https://www.arduino.cc",
      created: "2005",
    })
    .relLicenses.add(["lic+cc-by", "lic+gnu-gpl", "lic+lgpl"])
    .relParadigms.add(["para+embedded", "para+event-driven", "para+procedural"])
    .relPlatforms.add(["plat+arduino", "plat+embedded", "plat+linux", "plat+windows"])
    .relTags.add(["tag+edu", "tag+embedded", "tag+iot", "tag+sci"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
