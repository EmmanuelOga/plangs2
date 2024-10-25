import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rye", {
      name: "Rye",
      description:
        "Rye is a high-level, interpreted programming language designed for ease of use and flexibility. It is particularly well-suited for scripting and rapid application development.",
      keywords: ["rye", "ryelang"],
      websites: [{ title: "Rye", href: "https://ryelang.org/", kind: "homepage" }],
      extensions: [".ry"],
      year: 2022,
      images: [{ kind: "logo", title: "Rye Logo", url: "https://ryelang.org/images/logo.png", width: 512, height: 512 }],
      releases: [
        { version: "1.0", name: "Rye 1.0", date: "2022-01-01" },
        { version: "1.1", name: "Rye 1.1", date: "2023-03-10" },
      ],
    })
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+interpreted", "paradigm+multi", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+cli", "tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+python"]);
}
