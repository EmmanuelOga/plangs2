import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+io", {
      images: [],
      name: "Io",
      description:
        "Io is a pure object-oriented programming language inspired by Smalltalk, Self, Lua, Lisp, Act1, and NewtonScript. Io has a prototype-based object model similar to those in Self and NewtonScript, eliminating the distinction between instance and class. Like Smalltalk, everything is an object and it uses dynamic typing. Like Lisp, programs are just data trees. Io uses actors for concurrency.",
      websites: [
        { href: "https://iolanguage.org/", title: "iolanguage.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Io_(programming_language)", title: "Io", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "2019.05.22", date: "2019-05-22" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+lua", "pl+moonscript", "pl+self"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+oop", "para+prototype"])
    .addPlatforms(["platf+.net", "platf+apple", "platf+windows", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
