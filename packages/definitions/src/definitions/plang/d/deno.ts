import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+deno", {
      name: "Deno",
      description:
        "A secure JavaScript and TypeScript runtime built on V8, offering a modern alternative to Node.js with a focus on security and simplicity, featuring TypeScript support out of the box.",
      shortDesc:
        "A secure JavaScript and TypeScript runtime focusing on simplicity.",
      created: "2018",
      extensions: [".js", ".ts"],
      extGithubPath: "denoland/deno",
      extHomeURL: "https://deno.land/",
      isTranspiler: false,
      keywords: ["runtime", "secure", "typescript"],
      links: [{ url: "https://deno.land/manual", title: "Deno Manual" }],
    })
    .relImplements.add("pl+javascript", "pl+typescript")
    .relInfluencedBy.add("pl+rust")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+concurrent",
      "para+event-driven",
      "para+general-purpose",
      "para+reactive",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+cross",
      "plat+linux",
      "plat+nodejs",
      "plat+web",
      "plat+windows",
    )
    .relTags.add("tag+cli", "tag+scripting", "tag+webdev")
    .relTypeSystems.add("tsys+dynamic", "tsys+static")
    .relWrittenWith.add("pl+rust", "pl+typescript");
}
