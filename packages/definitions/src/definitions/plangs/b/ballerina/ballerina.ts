import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ballerina", {
      name: "Ballerina",
      description:
        "Ballerina is an open source general-purpose programming language designed by WSO2 for cloud-era application programmers. It is designed to be easy to use for both experienced and novice developers to build and deploy distributed applications.",
      keywords: ["ballerina"],
      websites: [
        { title: "ballerina.io", href: "http://ballerina.io/", kind: "homepage" },
        { title: "Ballerina", href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".bal"],
      firstAppeared: "2017-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "2201.3.6", name: "Swan Lake Update", date: "2023-03-01" },
        { version: "2201.3.5", name: "Swan Lake Update", date: "2023-01-01" },
      ],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+go", "pl+javascript", "pl+rust"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+event-driven", "paradigm+functional", "paradigm+multi"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+interpreter", "tag+workflow"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
