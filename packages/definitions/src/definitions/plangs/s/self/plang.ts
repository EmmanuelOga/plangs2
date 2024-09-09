import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+self", {
      images: [{ kind: "logo", title: "Self", url: "/images/plangs/s/self/logo.png" }],
      name: "Self",
      description:
        "Self is a general-purpose, high-level, object-oriented programming language based on the concept of prototypes. Self began as a dialect of Smalltalk, being dynamically typed and using just-in-time compilation (JIT) with the prototype-based approach to objects: it was first used as an experimental test system for language design in the 1980s and 1990s. In 2006, Self was still being developed as part of the Klein project, which was a Self virtual machine written fully in Self. The latest version, 2017.1 was released in May 2017.",
      websites: [
        { href: "http://www.selflanguage.org/", title: "www.selflanguage.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Self_(programming_language)", title: "Self", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "2017.1", date: "2017-01-01" }],
    })
    .addInfluencedBy(["pl+apl"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+oop", "para+prototype"])
    .addPlatforms(["platf+apple", "platf+cross", "platf+windows"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
