import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+php", {
      name: "PHP",
      description:
        "PHP is a popular general-purpose scripting language especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
      keywords: ["php"],
      websites: [
        { title: "PHP", href: "https://www.php.net/", kind: "homepage" },
        { title: "PHP on Wikipedia", href: "https://en.wikipedia.org/wiki/PHP", kind: "wikipedia" },
      ],
      extensions: [".php", ".php3", ".php4", ".php5", ".phtml"],
      year: 1995,
      images: [{ kind: "logo", title: "PHP Logo", url: "https://www.php.net/images/logos/new-php-logo.svg", width: 512, height: 512 }],
      isMainstream: true,
      releases: [
        { version: "8.0.0", name: "PHP 8.0.0", date: "2020-11-26" },
        { version: "8.1.0", name: "PHP 8.1.0", date: "2021-11-25" },
        { version: "8.2.0", name: "PHP 8.2.0", date: "2022-12-08" },
      ],
    })
    .addInfluencedBy(["pl+c", "pl+java"])
    .addLicenses(["license+php"])
    .addParadigms(["paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+scripting", "tag+server", "tag+web"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
