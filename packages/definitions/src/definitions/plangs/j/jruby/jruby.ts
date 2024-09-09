import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
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
    .addLicenses(["lic+epl", "lic+gnu-gpl", "lic+lgpl"])
    .addPlatforms(["platf+cross", "platf+java"])
    .addWrittenIn(["pl+ruby"]);
}
