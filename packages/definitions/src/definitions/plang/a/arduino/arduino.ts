import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+arduino", {
      name: "Arduino",
      stackovTags: ["arduino"],
      description:
        "Arduino is an open-source electronics platform based on easy-to-use hardware and software, designed for creating interactive projects. The Arduino programming language is based on C/C++, allowing users to control hardware like motors and LEDs.",
      keywords: ["arduino", "embedded", "iot", "microcontroller", "open-source"],
      extensions: [".ino", ".pde"],
      releases: [{ version: "2.3.3", name: "Arduino IDE 2.3.3", date: "2024-09-25" }],
      extWikipediaPath: "Arduino",
      extHomeURL: "https://www.arduino.cc/",
      created: "2005",
      isTranspiler: false,
      shortDesc: "Arduino is an open-source platform for creating interactive electronics projects, using a C/C++-based language.",
      githubStars: 14000,
      extGithubPath: "arduino/Arduino",
      ghRepoCreated: "2012-08-02",
    })
    .relWrittenWith.add("pl+c++")
    .relLicenses.add("lic+cc-by", "lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add("para+embedded", "para+event-driven", "para+procedural")
    .relPlatforms.add("plat+arduino", "plat+embedded", "plat+linux", "plat+windows")
    .relTags.add("tag+edu", "tag+embedded", "tag+iot", "tag+sci");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
