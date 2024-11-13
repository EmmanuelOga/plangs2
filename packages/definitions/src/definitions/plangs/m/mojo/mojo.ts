import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mojo", {
      name: "Mojo",
      description:
        "Mojo is a new programming language designed for performance and ease of use, simplifying the development process for large scale systems by integrating advancements from compiler and language theory.",
      keywords: ["modular", "mojo", "performance", "programming"],
      websites: [
        { title: "Mojo", href: "https://www.modular.com/mojo", kind: "homepage" },
        { title: "Mojo on Reddit", kind: "reddit", href: "https://reddit.com/r/MojoLang" },
        { title: "Mojo on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)" },
      ],
      extensions: [".mojo"],
      year: 2023,
      stackovTags: ["mojolang"],
      githubName: "Mojo",
      languishRanking: 208,
      githubLangId: "1045019587",
      githubColor: "#ff4c1f",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+python"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+multi", "paradigm+object-oriented"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+performance", "tag+scripting"])
    .addTypeSystems(["tsys+generic", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
