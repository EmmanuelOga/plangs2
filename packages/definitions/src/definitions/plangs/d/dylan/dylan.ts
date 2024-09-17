import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+dylan", {
      name: "Dylan",
      description:
        "Dylan is a multi-paradigm programming language that includes support for functional and object-oriented programming (OOP), and is dynamic and reflective while providing a programming model designed to support generating efficient machine code, including fine-grained control over dynamic and static behaviors. It was created in the early 1990s by a group led by Apple Computer.",
      firstAppeared: "1992-01-01",
      websites: [
        { href: "https://opendylan.org/", title: "opendylan.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)", title: "Dylan", kind: "wikipedia" },
      ],
      releases: [{ version: "2022.1", date: "2022-01-01" }],
      images: [{ kind: "logo", title: "Dylan", url: "/images/plangs/d/dylan/logo.png" }],
    })
    .addInfluencedBy(["pl+algol", "pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+industrial", "tag+interpreter", "tag+testing"]);
}
