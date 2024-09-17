import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xojo", {
      name: "Xojo",
      description:
        "The Xojo programming environment and programming language is developed and commercially marketed by Xojo, Inc. of Austin, Texas for software development targeting macOS, Microsoft Windows, Linux, iOS, Android, the Web and Raspberry Pi. Xojo uses a proprietary object-oriented language.",
      websites: [
        { href: "http://xojo.com/", title: "xojo.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Xojo", title: "Xojo", kind: "wikipedia" },
      ],
      releases: [{ version: "3.1", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "Xojo", url: "/images/plangs/x/xojo/logo.png" }],
    })
    .addInfluencedBy(["pl+basic", "pl+visual-basic"])
    .addPlatforms(["plat+android", "plat+apple", "plat+linux", "plat+raspberry", "plat+windows"])
    .addTags(["tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+interpreter"]);
}
