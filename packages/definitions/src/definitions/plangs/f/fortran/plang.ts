import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
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
    .addParadigms(["para+array", "para+imperative", "para+multi", "para+oop", "para+procedural", "para+structured"])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+strong"]);
}
