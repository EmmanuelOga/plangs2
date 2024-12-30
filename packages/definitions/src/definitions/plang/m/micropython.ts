import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+micropython", {
      name: "MicroPython",
      description:
        "Efficient implementation of Python 3 designed to run on microcontrollers and in constrained environments, offering Python's tools, libraries, and syntax for resource-limited devices.",
      shortDesc: "Subset of Python 3 tailored for microcontrollers.",
      created: "2013",
      extensions: [".py"],
      extGithubPath: "micropython/micropython",
      extHomeURL: "https://micropython.org/",
      extWikipediaPath: "MicroPython",
      githubStars: 19500,
      isTranspiler: false,
      keywords: ["embedded-python", "micro-python", "micropython"],
      links: [
        { url: "https://github.com/micropython/micropython", title: "GitHub Repository" },
        { url: "https://docs.micropython.org", title: "MicroPython Documentation" },
      ],
      releases: [{ version: "1.24.1", date: "2024-09-29" }],
    })
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+embedded", "para+interpreted", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+arduino", "plat+arm", "plat+embedded", "plat+esp32", "plat+raspberry", "plat+riscv", "plat+windows")
    .relTags.add("tag+app", "tag+embedded", "tag+interpreters", "tag+iot", "tag+scripting", "tag+testing")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+c");
}
