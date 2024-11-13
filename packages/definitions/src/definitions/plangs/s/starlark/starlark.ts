import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+starlark", {
    name: "Starlark",
    languishRanking: 77,
    websites: [
      { kind: "reddit", title: "Starlark on Reddit", href: "https://reddit.com/r/bazel" },
      { kind: "wikipedia", title: "Starlark on Wikipedia", href: "https://en.wikipedia.org/wiki/Bazel_(software)" },
    ],
    stackovTags: ["bazel"],
    githubName: "Starlark",
    githubLangId: "960266174",
    githubColor: "#76d275",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
