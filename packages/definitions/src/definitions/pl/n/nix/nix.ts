import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
      releases: [{ version: "2.22.1", name: "Nix Stable Release", date: "2024-05-10" }],
      extWikipediaPath: "Nix_package_manager",
      extRedditPath: "NixOS",
      extGithubPath: "NixOS/nix",
      extHomeURL: "https://nixos.org",
      created: "2003",
    })
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+declarative", "para+functional")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
