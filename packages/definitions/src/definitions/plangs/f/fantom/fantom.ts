import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fantom", {
      name: "Fantom",
      description:
        'Fantom is a general-purpose object-oriented programming language, created by Brian Frank and Andy Frank. It runs on the Java Runtime Environment (JRE), JavaScript, and the .NET Common Language Runtime (CLR) (.NET support is considered "prototype" status). Its stated goal is to provide a standard library API. Fantom uses a curly brace syntax, supports functional programming through closures and concurrency through the Actor model, and blends aspects of both static and dynamic typing.',
      firstAppeared: "2005-01-01",
      extensions: [".fan", ".fwt", ".pod"],
      websites: [
        { href: "http://www.fantom.org/", title: "www.fantom.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)", title: "Fantom", kind: "wikipedia" },
      ],
      releases: [{ version: "1.0.79", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+erlang", "pl+ruby", "pl+scala"])
    .addParadigms(["paradigm+multi"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);
}
