import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jruby", {
      name: "JRuby",
      description:
        "JRuby is an implementation of the Ruby programming language atop the Java Virtual Machine, written largely in Java. It is free software released under a three-way EPL/GPL/LGPL license. JRuby is tightly integrated with Java to allow the embedding of the interpreter into any Java application with full two-way access between the Java and the Ruby code (similar to Jython for the Python language).",
      websites: [
        { href: "https://www.jruby.org/", title: "www.jruby.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/JRuby", title: "JRuby", kind: "wikipedia" },
      ],
      releases: [{ version: "9.4.5.0", date: "2023-01-01" }],
    })
    .addImplements(["pl+ruby"])
    .addLicenses(["license+epl", "license+gnu-gpl", "license+lgpl"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreter", "tag+scripting"])
    .addWrittenIn(["pl+ruby"]);
}
