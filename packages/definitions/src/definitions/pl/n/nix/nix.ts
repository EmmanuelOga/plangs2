import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+nix", {
      name: "Nix",
      languishRanking: 45,
      stackovTags: ["nix"],
      githubName: "Nix",
      githubLangId: "252",
      githubColor: "#7e7eff",
      githubPopular: false,
      githubType: "programming",
      description:
        "Nix is a cross-platform, purely functional package manager and language, known for its ability to manage packages with immutable directories and unique content-addressed dependency models.",
      keywords: ["Nix", "cross-platform", "declarative", "functional", "open-source", "package manager"],
      extensions: [".nix"],
      year: 2003,
      isMainstream: true,
      releases: [{ version: "2.22.1", name: "Nix Stable Release", date: "2024-05-10" }],
      extWikipediaPath: "Nix_package_manager",
      extRedditPath: "NixOS",
      extGithubPath: "NixOS/nix",
      extHomeURL: "https://nixos.org",
    })
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+declarative", "paradigm+functional"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
