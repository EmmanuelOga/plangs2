import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+nix", {
      name: "Nix",
      description:
        "Cross-platform, purely functional package manager and language, known for its ability to manage packages with immutable directories and unique content-addressed dependency models.",
      shortDesc: "Cross-platform, functional package manager and language with immutable directory management.",
      created: "2003",
      extensions: [".nix"],
      extGithubPath: "NixOS/nix",
      extHomeURL: "https://nixos.org",
      extRedditPath: "NixOS",
      extWikipediaPath: "Nix_package_manager",
      githubColor: "#7e7eff",
      githubLangId: "252",
      githubName: "Nix",
      githubPopular: false,
      githubStars: 13000,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["cross-platform", "declarative", "functional", "nix", "open-source", "package manager"],
      languishRanking: 45,
      releases: [{ version: "2.22.1", name: "Nix Stable Release", date: "2024-05-10" }],
      stackovTags: ["nix"],
    })
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+declarative", "para+functional")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux")
    .relTypeSystems.add("tsys+dynamic");
}
