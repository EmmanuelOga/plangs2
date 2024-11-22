import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mdx", {
      name: "MDX",
      githubName: "MDX",
      githubLangId: "512838272",
      githubColor: "#fcb32c",
      githubPopular: false,
      githubType: "markup",
      description:
        "MDX is a syntax that allows you to write JSX content with Markdown, and it is commonly used with React-based frameworks. It allows developers to seamlessly integrate JavaScript components with Markdown content, making it easier to create rich and interactive documentation or blog content.",
      keywords: ["JSX", "JavaScript", "MDX", "Markdown", "React"],
      extensions: [".mdx"],
      isTranspiler: true,
      extHomeURL: "https://mdxjs.com/",
      created: "2018",
    })
    .relCompilesTo.add(["pl+html", "pl+javascript", "pl+markdown"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+dsl", "paradigm+interpreted", "paradigm+reactive"])
    .relPlatforms.add(["plat+web"])
    .relTags.add(["tag+modular", "tag+scripting", "tag+ui"])
    .relTsys.add(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
