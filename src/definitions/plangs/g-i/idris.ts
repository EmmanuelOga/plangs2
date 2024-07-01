import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+idris")
    .merge({
      name: "Idris",
      websites: [
        { kind: "wikipedia", title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)" },
      ],
      releases: [
        { name: "Idris", version: "1.3.4", date: "2021-01-01", kind: "stable" },
        { name: "Idris", version: "0.7.0", date: "2023-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+agda", "pl+epigram", "pl+f-sharp"])
    .addInfluence("pl+clean", {
      refs: [
        {
          href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html",
          title: "Idris - Uniqueness Types",
        },
      ],
    })
    .addInfluence("pl+coq", {
      refs: [{ href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" }],
    })
    .addInfluence("pl+haskell", {
      refs: [{ href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" }],
    })
    .addInfluence("pl+ml", {
      refs: [{ href: "http://www.idris-lang.org/", title: "Idris, a language with dependent types" }],
    })
    .addInfluence("pl+rust", {
      refs: [
        { href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html", title: "Uniqueness Types" },
      ],
    })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
