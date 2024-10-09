import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shex", {
      name: "ShEx - Shape Expressions",
      description:
        "Shape Expressions (ShEx) is a data modeling language used for validating and describing Resource Description Framework (RDF) data. It specifically targets semantic web technologies and offers a concise syntax for expressing constraints.",
      keywords: ["shex", "shape expressions"],
      websites: [
        { title: "ShEx at w3.org", href: "https://www.w3.org/community/shex/", kind: "homepage" },
        { title: "ShEx - Shape Expressions Wikipedia", href: "https://en.wikipedia.org/wiki/ShEx", kind: "wikipedia" },
      ],
      extensions: [".shex"],
      firstAppeared: "2014-01-01",
      images: [
        {
          kind: "logo",
          title: "ShEx - Shape Expressions",
          url: "https://upload.wikimedia.org/wikipedia/commons/2/29/ShEx_Logo.svg",
          width: 512,
          height: 512,
        },
      ],
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.1", name: "ShEx 2.1", date: "2018-01-01" }],
    })
    .addLicenses(["license+cc-by"])
    .addParadigms(["paradigm+dsl", "paradigm+validation"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+framework", "tag+scripting"])
    .addWrittenIn(["pl+javascript", "pl+scala"]);
}
