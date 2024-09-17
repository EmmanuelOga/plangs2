import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+logtalk", {
      name: "Logtalk",
      description:
        "Logtalk is an object-oriented logic programming language that extends and leverages the Prolog language with a feature set suitable for programming in the large. It provides support for encapsulation and data hiding, separation of concerns and enhanced code reuse. Logtalk uses standard Prolog syntax with the addition of a few operators and directives.",
      firstAppeared: "1998-01-01",
      websites: [
        { href: "https://logtalk.org/", title: "logtalk.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Logtalk", title: "Logtalk", kind: "wikipedia" },
      ],
      releases: [{ version: "3.66.0", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+apache", "license+artistic"])
    .addParadigms(["paradigm+logic", "paradigm+oop", "paradigm+prototype"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+compiler", "tag+framework", "tag+interpreter", "tag+viz"]);
}
