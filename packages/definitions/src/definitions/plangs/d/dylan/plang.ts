import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+dylan", {
      images: [{ kind: "logo", title: "Dylan", url: "/images/plangs/d/dylan/logo.png" }],
      name: "Dylan",
      description:
        "Dylan is a multi-paradigm programming language that includes support for functional and object-oriented programming (OOP), and is dynamic and reflective while providing a programming model designed to support generating efficient machine code, including fine-grained control over dynamic and static behaviors. It was created in the early 1990s by a group led by Apple Computer.",
      websites: [
        { href: "https://opendylan.org/", title: "opendylan.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)", title: "Dylan", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "2022.1", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+algol", "pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .addParadigms(["para+functional", "para+multi", "para+oop"])
    .addPlatforms(["platf+cross", "platf+x86-64"]);
}
