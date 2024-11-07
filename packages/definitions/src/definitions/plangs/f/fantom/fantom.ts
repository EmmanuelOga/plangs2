import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fantom", {
      name: "Fantom",
      description:
        'Fantom is a general-purpose object-oriented programming language, created by Brian Frank and Andy Frank. It runs on the Java Runtime Environment (JRE), JavaScript, and the .NET Common Language Runtime (CLR) (.NET support is considered "prototype" status). Its stated goal is to provide a standard library API. Fantom uses a curly brace syntax, supports functional programming through closures and concurrency through the Actor model, and blends aspects of both static and dynamic typing.',
      keywords: ["fantom"],
      websites: [
        { title: "www.fantom.org", href: "http://www.fantom.org/", kind: "homepage" },
        { title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".fan", ".fwt", ".pod"],
      year: 2005,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.0.79", name: "Fantom 1.0.79", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+erlang", "pl+ruby", "pl+scala"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+.net", "plat+cross", "plat+java", "plat+javascript"])
    .addTags(["tag+app", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
