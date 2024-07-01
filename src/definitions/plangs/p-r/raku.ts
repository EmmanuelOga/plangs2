import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+raku")
    .merge({
      name: "Raku",
      websites: [
        { kind: "wikipedia", title: "Raku", href: "https://en.wikipedia.org/wiki/Raku_(programming_language)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg" }],
      releases: [{ name: "Raku", version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+rakudo"])
    .addInfluences(["pl+perl", "pl+ruby", "pl+smalltalk", "pl+javascript"])
    .addInfluence("pl+haskell", {
      refs: [
        {
          href: "https://web.archive.org/web/20120121145808/http://www.perlfoundation.org/perl6/index.cgi?glossary_of_terms_and_jargon",
          title: "Glossary of Terms and Jargon",
        },
      ],
    })
    .addPerson("person+larry-wall", { role: "designer" })
    .addLicenses(["lic+gpl", "lic+artistic"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual"]);

  /**/

  g.buildPlang("pl+rakudo")
    .merge({
      name: "Rakudo",
      websites: [{ kind: "wikipedia", title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
        },
      ],
      releases: [{ name: "Rakudo", version: "2024.05", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+artistic"]);

  /**/
}
