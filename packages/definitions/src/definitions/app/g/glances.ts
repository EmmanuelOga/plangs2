import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+glances", {
      name: "Glances",
      description:
        "Glances: an Eye on your system. A top or htop alternative for GNU/Linux, BSD, Mac OS and Windows operating systems.",
      shortDesc: "Cross-platform system monitoring tool written in Python.",
      extGithubPath: "nicolargo/glances",
      extHomeURL: "https://nicolargo.github.io/glances/",
      keywords: ["monitoring", "system", "terminal"],
    })
    .relLicenses.add("lic+lgpl")
    .relPlatforms.add("plat+bsd", "plat+linux", "plat+osx", "plat+windows")
    .relTags.add("tag+gui", "tag+server")
    .relWrittenWith.add("pl+python");
}
