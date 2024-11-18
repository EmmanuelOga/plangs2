import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
        "Markdown is a lightweight markup language for creating formatted text using a plain-text editor. It is widely used for blogging, instant messaging, online forums, and more. Created by John Gruber in 2004, its design emphasizes readability without looking like it has been marked up with tags or formatting.",
      keywords: ["easy-to-read", "markup", "plain-text", "text"],
      extensions: [".markdown", ".md"],
      year: 2004,
      isTranspiler: true,
      releases: [
        { version: "1.0", name: "", date: "2004-03-09" },
        { version: "1.0.1", name: "", date: "2004-12-17" },
      ],
      extWikipediaPath: "Markdown",
      extRedditPath: "Markdown",
    })
    .addCompilesTo(["pl+html"])
    .addParadigms(["paradigm+dsl", "paradigm+scripting"])
    .addTags(["tag+editor", "tag+scripting"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
