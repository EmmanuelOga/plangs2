import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+micropython", {
      name: "MicroPython",
      description:
        "MicroPython is an efficient implementation of Python 3 designed to run on microcontrollers and in constrained environments, offering Python's tools, libraries, and syntax for resource-limited devices.",
      keywords: ["embedded-python", "micro-python", "micropython"],
      extensions: [".py"],
      releases: [{ version: "1.24.1", date: "2024-09-29" }],
      extWikipediaPath: "MicroPython",
      extHomeURL: "https://micropython.org/",
      created: "2013",
      isTranspiler: false,
      shortDesc: "MicroPython is a subset of Python 3 tailored for microcontrollers.",
      links: [
        { url: "https://github.com/micropython/micropython", title: "GitHub Repository" },
        { url: "https://docs.micropython.org", title: "MicroPython Documentation" },
      ],
      githubStars: 19500,
      extGithubPath: "micropython/micropython",
      ghRepoCreated: "2013-09-02",
    })
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+embedded", "para+interpreted", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+arduino", "plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry", "plat+riscv", "plat+windows")
    .relTags.add("tag+app", "tag+embedded", "tag+interpreters", "tag+iot", "tag+scripting", "tag+testing")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
