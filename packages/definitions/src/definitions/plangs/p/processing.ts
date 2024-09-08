import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+processing", {
      images: [{ title: "Processing", kind: "logo", url: "/images/plangs/p/processing/main.png" }],
      name: "Processing",
      description:
        "Processing is a free graphics library and integrated development environment (IDE) built for the electronic arts, new media art, and visual design communities with the purpose of teaching non-programmers the fundamentals of computer programming in a visual context.",
      websites: [
        { href: "http://processing.org/", title: "processing.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Processing_(programming_language)", title: "Processing", kind: "wikipedia" },
      ],
      extensions: [".pde"],
      releases: [{ version: "4.3", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["lic+gnu-gpl", "lic+lgpl"])
    .addParadigms(["para+oop"]);
}
