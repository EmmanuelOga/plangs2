import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+mruby", {
      images: [{ kind: "logo", title: "mruby", url: "/images/plangs/m/mruby/logo.png" }],
      name: "mruby",
      description:
        "mruby is an interpreter for the Ruby programming language with the intention of being lightweight and easily embeddable. The project is headed by Yukihiro Matsumoto, with over 100 contributors currently working on the project.",
      websites: [
        { href: "https://mruby.org/", title: "mruby.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Mruby", title: "mruby", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "3.3.0", date: "2024-01-01" }],
    })
    .addImplements(["pl+ruby"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross"])
    .addTags(["tag+interpreter"])
    .addWrittenIn(["pl+c", "pl+ruby"]);
}
