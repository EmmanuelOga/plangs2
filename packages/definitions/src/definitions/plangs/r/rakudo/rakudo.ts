import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rakudo", {
      name: "Rakudo",
      description:
        "Rakudo is a Raku compiler targeting MoarVM, and the Java Virtual Machine, that implements the Raku specification. It is currently the only major Raku compiler in active development.",
      websites: [
        { href: "http://rakudo.org/", title: "rakudo.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Rakudo", title: "Rakudo", kind: "wikipedia" },
      ],
      releases: [{ version: "2024.08", date: "2024-01-01" }],
    })
    .addImplements(["pl+raku"])
    .addLicenses(["license+artistic"])
    .addPlatforms(["plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler"]);
}
