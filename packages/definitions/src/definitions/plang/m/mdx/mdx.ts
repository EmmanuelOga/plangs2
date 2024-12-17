import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mdx", {
      name: "MDX",
      description:
        "MDX is a syntax that allows you to write JSX content with Markdown, and it is commonly used with React-based frameworks. It allows developers to seamlessly integrate JavaScript components with Markdown content, making it easier to create rich and interactive documentation or blog content.",
      shortDesc: "MDX is a syntax integrating JSX with Markdown for interactive content.",
      created: "2018",
      extensions: [".mdx"],
      extGithubPath: "mdx-js/mdx/",
      extHomeURL: "https://mdxjs.com/",
      githubColor: "#fcb32c",
      githubLangId: "512838272",
      githubName: "MDX",
      githubPopular: false,
      githubStars: 17800,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["javascript", "jsx", "markdown", "mdx", "react"],
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
