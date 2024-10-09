import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vala", {
      name: "Vala",
      description:
        "Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system. It aims to bring modern language features to C, without requiring an additional runtime or different ABI compared to applications and libraries written in C.",
      keywords: ["vala", "gobject"],
      websites: [
        { title: "Vala", href: "https://wiki.gnome.org/Projects/Vala", kind: "homepage" },
        { title: "Vala", href: "https://en.wikipedia.org/wiki/Vala_(programming_language)", kind: "wikipedia" },
        { title: "Vala", href: "https://wiki.gnome.org/Projects/Vala#Valac_the_Compiler", kind: "apidocs" },
      ],
      extensions: [".vala"],
      firstAppeared: "2006-07-17",
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "0.56", name: "Vala 0.56", date: "2023-03-22" }],
    })
    .addInfluencedBy(["pl+boo", "pl+c", "pl+c-sharp", "pl+d"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+linux"])
    .addTags(["tag+compiler", "tag+framework", "tag+ui"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
