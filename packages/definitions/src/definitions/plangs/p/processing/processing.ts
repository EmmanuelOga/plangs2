import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+processing", {
      name: "Processing",
      description:
        "Processing is a free graphics library and integrated development environment (IDE) built for the electronic arts, new media art, and visual design communities with the purpose of teaching non-programmers the fundamentals of computer programming in a visual context.",
      firstAppeared: "2001-01-01",
      extensions: [".pde"],
      websites: [
        { href: "http://processing.org/", title: "processing.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Processing_(programming_language)", title: "Processing", kind: "wikipedia" },
      ],
      releases: [{ version: "4.3", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "Processing", url: "/images/plangs/p/processing/logo.png" }],
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+oop"])
    .addTags(["tag+app", "tag+framework", "tag+games", "tag+if", "tag+industrial", "tag+interpreter", "tag+ray-tracer"]);
}
