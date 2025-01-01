import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+circuitpython", {
      name: "CircuitPython",
      description:
        "An open-source derivative of the MicroPython programming language targeted towards microcontroller applications and educational purposes, primarily maintained by Adafruit Industries. It simplifies Python for use on microcontrollers, enabling easier experimentation for beginners and hobbyists, and it is implemented in C.",
      shortDesc: "Maintained by Adafruit, simplifies Python for microcontroller applications and is implemented in C.",
      created: "2017",
      extensions: [".py"],
      extGithubPath: "adafruit/circuitpython",
      extHomeURL: "https://circuitpython.org/",
      extWikipediaPath: "CircuitPython",
      githubStars: 4100,
      isTranspiler: false,
      keywords: ["", "adafruit", "circuitpython", "python-microcontrollers"],
      releases: [{ version: "9.1.4", name: "CircuitPython 9.1.4", date: "2024-09-17" }],
    })
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+micropython")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+embedded", "para+interpreted", "para+scripting")
    .relPlatforms.add("plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry")
    .relTags.add("tag+edu", "tag+embedded", "tag+interpreters", "tag+iot")
    .relTypeSystems.add("tsys+dynamic", "tsys+object", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
