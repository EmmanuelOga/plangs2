import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jinja", {
      name: "Jinja",
      languishRanking: 57,
      stackovTags: ["jinja2"],
      githubName: "Jinja",
      githubLangId: "147",
      githubColor: "#a52a22",
      githubPopular: false,
      githubType: "markup",
      description:
        "Jinja is a web template engine widely used in Python applications for rendering templates. It was developed by Armin Ronacher and offers a familiar syntax borrowed from Python, enabling flexible and sandboxed template design.",
      keywords: ["jinja", "python"],
      extensions: [".jinja", ".jinja2"],
      isTranspiler: false,
      releases: [{ version: "3.1.4", name: "Stable Release", date: "2024-05-05" }],
      extWikipediaPath: "Jinja_(template_engine)",
      extGithubPath: "pallets/jinja",
      extHomeURL: "http://jinja.pocoo.org/",
      created: "2008",
      shortDesc: "Jinja is a web template engine for Python, known for its flexible syntax and functionality.",
      githubStars: 10400,
      ghRepoCreated: "2010-03-12",
    })
    .relCompilesTo.add("pl+python")
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+scripting", "tag+webdev");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
