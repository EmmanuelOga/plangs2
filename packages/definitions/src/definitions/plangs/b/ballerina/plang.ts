import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ballerina", {
      images: [],
      name: "Ballerina",
      description: "Ballerina is an open source general-purpose programming language designed by WSO2 for cloud-era application programmers.",
      websites: [
        { href: "http://ballerina.io/", title: "ballerina.io", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)", title: "Ballerina", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+go", "pl+javascript", "pl+rust"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
