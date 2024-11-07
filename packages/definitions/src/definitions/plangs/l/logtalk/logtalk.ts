import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+logtalk", {
      name: "Logtalk",
      description:
        "Logtalk is an object-oriented logic programming language that extends and leverages the Prolog language with a feature set suitable for programming in the large. It provides support for encapsulation and data hiding, separation of concerns and enhanced code reuse. Logtalk uses standard Prolog syntax with the addition of a few operators and directives.",
      keywords: ["logtalk"],
      websites: [
        { title: "logtalk.org", href: "https://logtalk.org/", kind: "homepage" },
        { title: "Logtalk", href: "https://en.wikipedia.org/wiki/Logtalk", kind: "wikipedia" },
      ],
      year: 1998,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "3.66.0", name: "", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+apache", "license+artistic"])
    .addParadigms(["paradigm+logic", "paradigm+oop", "paradigm+prototype"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+compiler", "tag+framework", "tag+interpreter", "tag+viz"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
