import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ballerina", {
      name: "Ballerina",
      description: "Ballerina is an open source general-purpose programming language designed by WSO2 for cloud-era application programmers.",
      firstAppeared: "2017-01-01",
      websites: [
        { href: "http://ballerina.io/", title: "ballerina.io", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)", title: "Ballerina", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+go", "pl+javascript", "pl+rust"])
    .addLicenses(["license+apache"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+automation", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
