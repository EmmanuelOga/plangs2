import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+raku", {
      name: "Raku",
      description:
        "Raku is a member of the Perl family of programming languages. Formerly named Perl 6, it was renamed in October 2019. Raku introduces elements of many modern and historical languages. Compatibility with Perl was not a goal, though a compatibility mode is part of the specification. The design process for Raku began in 2000.",
      firstAppeared: "2015-01-01",
      extensions: [".raku", ".rakudoc", ".rakumod", ".rakutest", ".t"],
      websites: [
        { href: "http://raku.org/", title: "raku.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Raku_(programming_language)", title: "Raku", kind: "wikipedia" },
      ],
      images: [{ kind: "other", title: "Raku", url: "/images/plangs/r/raku/other.png" }],
    })
    .addDialectOf(["pl+perl"])
    .addInfluencedBy(["pl+haskell", "pl+javascript", "pl+perl", "pl+ruby"])
    .addLicenses(["lic+artistic"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual"]);
}