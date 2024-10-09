import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+orca", {
      name: "Orca",
      description:
        "Orca is an esoteric programming language designed mainly for real-time algorithmic music creation and experimentation. It's an interactive environment that allows musicians and artists to compose and perform music through code.",
      keywords: ["orca", "music", "algorithmic", "esoteric"],
      websites: [
        { title: "Orca", href: "https://100r.co/site/orca.html", kind: "homepage" },
        { title: "Orca GitHub Repository", href: "https://github.com/hundredrabbits/Orca", kind: "repository" },
      ],
      extensions: [".orca"],
      firstAppeared: "2019-01-01",
      releases: [{ version: "0.9.0", name: "Orca 0.9.0", date: "2019-05-01" }],
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+esoteric", "paradigm+visual"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+interpreter", "tag+midi"])
    .addTypeSystems(["tsys+untyped"]);
}
