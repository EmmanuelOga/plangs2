import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+imba", {
      name: "Imba",
      description:
        "Imba is a programming language for building web applications. It is designed for rapid development and features reactive programming and a rich syntax that blends HTML, CSS, and JavaScript concepts.",
      keywords: ["imba", "web", "reactive"],
      websites: [
        { title: "Imba", href: "https://imba.io", kind: "homepage" },
        { title: "Imba", href: "https://en.wikipedia.org/wiki/Imba_(programming_language)", kind: "wikipedia" },
        { title: "Imba", href: "https://github.com/imba/imba", kind: "repository" },
      ],
      extensions: [".imba"],
      firstAppeared: "2013-01-01",
      isTranspiler: true,
      releases: [
        { version: "v1.5.0", name: "Imba 1.5.0", date: "2020-06-15" },
        { version: "v2.0.0", name: "Imba 2.0.0", date: "2022-10-12" },
      ],
    })
    .addInfluencedBy(["pl+coffeescript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop", "paradigm+reactive"])
    .addPlatforms(["plat+nodejs", "plat+web"])
    .addTags(["tag+rapid-development", "tag+ui", "tag+webdev"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static"])
    .addWrittenIn(["pl+javascript"]);
}
