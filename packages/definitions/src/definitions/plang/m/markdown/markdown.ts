import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+markdown", {
      name: "Markdown",
      languishRanking: 12,
      stackovTags: ["markdown"],
      githubName: "Markdown",
      githubLangId: "222",
      githubColor: "#083fa1",
      githubPopular: false,
      githubType: "prose",
      description:
        "Markdown is a lightweight markup language created by John Gruber in 2004 for formatting text using a simple, plain-text syntax. It is popular for use in digital publishing and web development, offering easy conversion to HTML.",
      keywords: ["lightweight", "markup", "plain-text", "text-formatting"],
      extensions: [".markdown", ".md"],
      isTranspiler: true,
      releases: [
        { version: "1.0", name: "", date: "2004-03-09" },
        { version: "1.0.1", name: "", date: "2004-12-17" },
      ],
      extWikipediaPath: "Markdown",
      extRedditPath: "Markdown",
      created: "2004",
      shortDesc: "Markdown is a lightweight markup language for formatting text using simple syntax.",
      extHomeURL: "https://daringfireball.net/projects/markdown/",
    })
    .relCompilesTo.add("pl+html")
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+dsl", "para+scripting")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+editor", "tag+scripting", "tag+webdev")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
