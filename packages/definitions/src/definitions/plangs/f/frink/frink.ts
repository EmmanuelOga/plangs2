import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+frink", {
      name: "Frink",
      description:
        "Frink is a computer programming language focused on performing physical calculations while tracking units of measure, ensuring that calculations have the right dimensions and that the answers are meaningful.",
      keywords: ["frink", "units", "measurement", "calculation"],
      websites: [
        { title: "frinklang.org", href: "https://frinklang.org/", kind: "homepage" },
        { title: "Frink", href: "https://en.wikipedia.org/wiki/Frink_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".frink"],
      firstAppeared: "2001-01-01",
      images: [{ kind: "logo", title: "Frink Logo", url: "https://frinklang.org/images/frinklogo.png", width: 512, height: 512 }],
      isTranspiler: false,
      isMainstream: false,
    })
    .addLicenses(["license+artistic"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+numeric", "tag+sci"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+java"]);
}
