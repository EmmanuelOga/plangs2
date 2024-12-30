import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+arduino", {
      name: "Arduino",
      description:
        "Electronics platform based on easy-to-use hardware and software, designed for creating interactive projects. The Arduino programming language is based on C/C++, allowing users to control hardware like motors and LEDs.",
      shortDesc: "platform for creating interactive electronics projects, using a C/C++-based language.",
      created: "2005",
      extensions: [".ino", ".pde"],
      extGithubPath: "arduino/Arduino",
      extHomeURL: "https://www.arduino.cc/",
      extWikipediaPath: "Arduino",
      githubStars: 14000,
      isTranspiler: false,
      keywords: ["arduino", "embedded", "iot", "microcontroller", "open-source"],
      releases: [{ version: "2.3.3", name: "Arduino IDE 2.3.3", date: "2024-09-25" }],
      stackovTags: ["arduino"],
    })
    .relLicenses.add("lic+cc-by", "lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add("para+embedded", "para+event-driven", "para+procedural")
    .relPlatforms.add("plat+arduino", "plat+embedded", "plat+linux", "plat+windows")
    .relTags.add("tag+edu", "tag+embedded", "tag+iot", "tag+sci")
    .relWrittenWith.add("pl+c++");
}
