import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+markdown", {
      name: "Markdown",
      description:
        "Lightweight markup language created by John Gruber in 2004 for formatting text using a simple, plain-text syntax. It is popular for use in digital publishing and web development, offering easy conversion to HTML.",
      shortDesc:
        "Lightweight markup language for formatting text using simple syntax.",
      created: "2004",
      extensions: [".markdown", ".md"],
      extHomeURL: "https://daringfireball.net/projects/markdown/",
      extRedditPath: "Markdown",
      extWikipediaPath: "Markdown",
      githubColor: "#083fa1",
      githubLangId: "222",
      githubName: "Markdown",
      githubPopular: false,
      githubType: "prose",
      isTranspiler: true,
      keywords: ["lightweight", "markup", "plain-text", "text-formatting"],
      languishRanking: 12,
      releases: [
        { version: "1.0", name: "", date: "2004-03-09" },
        { version: "1.0.1", name: "", date: "2004-12-17" },
      ],
      stackovTags: ["markdown"],
    })
    .relCompilesTo.add("pl+html")
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+dsl", "para+scripting")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+editor", "tag+scripting", "tag+webdev")
    .relTypeSystems.add("tsys+untyped");
}
