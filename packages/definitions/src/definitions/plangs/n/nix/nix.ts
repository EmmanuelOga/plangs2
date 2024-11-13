import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+nix", {
    name: "Nix",
    languishRanking: 45,
    websites: [
      { kind: "reddit", title: "Nix on Reddit", href: "https://reddit.com/r/NixOS" },
      { kind: "wikipedia", title: "Nix on Wikipedia", href: "https://en.wikipedia.org/wiki/Nix_package_manager" },
    ],
    stackovTags: ["nix"],
    githubName: "Nix",
    githubLangId: "252",
    githubColor: "#7e7eff",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
