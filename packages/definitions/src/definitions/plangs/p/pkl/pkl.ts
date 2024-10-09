import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pkl", {
      name: "PKL",
      description:
        "PKL is a high-level programming language designed for simplicity and expressiveness. It aims to provide a robust and intuitive environment for developing both small-scale and complex software applications.",
      keywords: ["pkl"],
      websites: [
        { title: "PKL Homepage", href: "https://pkl-lang.org/", kind: "homepage" },
        { title: "PKL Wikipedia", href: "https://en.wikipedia.org/wiki/PKL_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".pkl"],
      firstAppeared: "2021-06-01",
      images: [{ kind: "logo", title: "PKL Logo", url: "https://pkl-lang.org/logo.png", width: 800, height: 800 }],
      releases: [{ version: "1.0.0", name: "PKL 1.0.0", date: "2021-06-01" }],
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+data-driven", "paradigm+functional", "paradigm+multi"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+automation", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+python"]);
}
