import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jinja", {
      name: "Jinja",
      description:
        "Web template engine widely used in Python applications for rendering templates. It was developed by Armin Ronacher and offers a familiar syntax borrowed from Python, enabling flexible and sandboxed template design.",
      shortDesc:
        "Web template engine for Python, known for its flexible syntax and functionality.",
      created: "2008",
      extensions: [".jinja", ".jinja2"],
      extGithubPath: "pallets/jinja",
      extHomeURL: "http://jinja.pocoo.org/",
      extWikipediaPath: "Jinja_(template_engine)",
      githubColor: "#a52a22",
      githubLangId: "147",
      githubName: "Jinja",
      githubPopular: false,
      githubStars: 10400,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["jinja", "python"],
      languishRanking: 57,
      releases: [
        { version: "3.1.4", name: "Stable Release", date: "2024-05-05" },
      ],
      stackovTags: ["jinja2"],
    })
    .relCompilesTo.add("pl+python")
    .relInfluencedBy.add("pl+python")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+scripting", "tag+webdev");
}
