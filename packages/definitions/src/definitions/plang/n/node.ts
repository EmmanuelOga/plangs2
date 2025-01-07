import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+node", {
      name: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side execution of JavaScript code.",
      shortDesc: "A JavaScript runtime for server-side execution.",
      created: "2009",
      extensions: [".js"],
      extGithubPath: "nodejs/node",
      extHomeURL: "https://nodejs.org/en",
      isTranspiler: false,
      keywords: ["javascript", "runtime", "server-side"],
      links: [
        { url: "https://nodejs.org/en/docs/", title: "Node.js Documentation" },
      ],
    })
    .relImplements.add("pl+javascript")
    .relInfluencedBy.add("pl+javascript")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+event-driven",
      "para+functional",
      "para+imperative",
      "para+oop",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+scripting", "tag+server", "tag+webdev")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+c", "pl+c++");
}
