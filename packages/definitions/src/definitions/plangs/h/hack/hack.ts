import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hack", {
      name: "Hack",
      description:
        "Hack is a programming language for the HipHop Virtual Machine (HHVM), created by Meta (formerly Facebook) as a dialect of PHP. The language implementation is open-source, licensed under the MIT License.",
      firstAppeared: "2014-01-01",
      websites: [
        { href: "https://hacklang.org/", title: "hacklang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Hack_(programming_language)", title: "Hack", kind: "wikipedia" },
      ],
      releases: [{ version: "4.172", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+haskell", "pl+ocaml", "pl+scala"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual", "tsys+static", "tsys+weak"]);
}
