import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fortran", {
      name: "Fortran",
      description:
        "Fortran (/ˈfɔːrtræn/; formerly FORTRAN) is a third generation, compiled, imperative programming language that is especially suited to numeric computation and scientific computing.",
      firstAppeared: "1957-01-01",
      extensions: [".f", ".f90", ".for"],
      websites: [
        { href: "https://fortran-lang.org/", title: "fortran-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Fortran", title: "Fortran", kind: "wikipedia" },
      ],
      images: [{ kind: "other", title: "Fortran", url: "/images/plangs/f/fortran/other.jpg" }],
    })
    .addParadigms(["paradigm+array", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+dsp",
      "tag+framework",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+multivar",
      "tag+numeric",
      "tag+ray-tracer",
      "tag+sci",
      "tag+scripting",
      "tag+stats",
      "tag+testing",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+strong"]);
}
