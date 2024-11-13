import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jinja", {
      name: "Jinja",
      languishRanking: 57,
      websites: [
        { title: "Jinja (template engine) - Wikipedia", href: "https://en.wikipedia.org/wiki/Jinja_(template_engine)", kind: "wikipedia" },
        { title: "Jinja Official Website", href: "https://palletsprojects.com/p/jinja/", kind: "homepage" },
        { title: "Jinja GitHub Repository", href: "https://github.com/pallets/jinja", kind: "repository" },
      ],
      stackovTags: ["jinja2"],
      githubName: "Jinja",
      githubLangId: "147",
      githubColor: "#a52a22",
      githubPopular: false,
      githubType: "markup",
      description:
        "Jinja is a web template engine for the Python programming language. It was created by Armin Ronacher and is licensed under a BSD License. Jinja provides Python-like expressions while ensuring that templates are evaluated in a sandbox, making it useful for generating markup and source code.",
      keywords: ["Jinja", "Python", "template engine", "web development"],
      extensions: [".jinja"],
      year: 2008,
      isTranspiler: true,
      isMainstream: true,
      releases: [{ version: "3.1.4", name: "Stable Release", date: "2024-05-05" }],
    })
    .addCompilesTo(["pl+python"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+scripting"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
