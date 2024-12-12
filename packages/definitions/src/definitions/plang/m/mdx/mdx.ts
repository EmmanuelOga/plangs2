import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mdx", {
      name: "MDX",
      githubName: "MDX",
      githubLangId: "512838272",
      githubColor: "#fcb32c",
      githubPopular: false,
      githubType: "markup",
      description:
        "MDX is a syntax that allows you to write JSX content with Markdown, and it is commonly used with React-based frameworks. It allows developers to seamlessly integrate JavaScript components with Markdown content, making it easier to create rich and interactive documentation or blog content.",
      keywords: ["javascript", "jsx", "markdown", "mdx", "react"],
      extensions: [".mdx"],
      isTranspiler: true,
      extHomeURL: "https://mdxjs.com/",
      created: "2018",
      shortDesc: "MDX is a syntax integrating JSX with Markdown for interactive content.",
      githubStars: 17800,
      extGithubPath: "mdx-js/mdx/",
    })
    .relCompilesTo.add("pl+html", "pl+javascript", "pl+markdown")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+dsl", "para+interpreted", "para+reactive")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+gui", "tag+modular", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
