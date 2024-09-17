import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ironruby", {
      name: "IronRuby",
      description:
        "IronRuby is an implementation of the Ruby programming language targeting Microsoft .NET Framework. It is implemented on top of the Dynamic Language Runtime (DLR), a library running on top of the Common Language Infrastructure that provides dynamic typing and dynamic method dispatch, among other things, for dynamic languages.",
      websites: [
        { href: "http://www.ironruby.net/", title: "www.ironruby.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/IronRuby", title: "IronRuby", kind: "wikipedia" },
      ],
      releases: [
        { version: "1.0", date: "2010-01-01" },
        { version: "1.1.3", date: "2011-01-01" },
      ],
    })
    .addLicenses(["license+apache"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter", "tag+scripting"])
    .addWrittenIn(["pl+c-sharp"]);
}
