import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+bun", {
      name: "Bun",
      description:
        "A fast JavaScript runtime designed to enhance JavaScript and TypeScript projects with a built-in bundler, transpiler, and npm-compatible package manager.",
      shortDesc:
        "A fast JavaScript runtime with a built-in bundler and npm-compatible package manager.",
      created: "2022",
      extensions: [".js", ".ts"],
      extGithubPath: "oven-sh/bun",
      extHomeURL: "https://bun.sh",
      isTranspiler: true,
      keywords: [
        "bun",
        "bundler",
        "javascript",
        "npm",
        "runtime",
        "typescript",
      ],
    })
    .relCompilesTo.add("pl+javascript")
    .relDialectOf.add("pl+node")
    .relImplements.add("pl+javascript", "pl+node", "pl+typescript")
    .relInfluencedBy.add(
      "pl+javascript",
      "pl+node",
      "pl+nodejs",
      "pl+typescript",
      "pl+zig",
    )
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+interpreted")
    .relPlatforms.add(
      "plat+cross",
      "plat+linux",
      "plat+nodejs",
      "plat+web",
      "plat+windows",
    )
    .relTags.add("tag+scripting", "tag+server", "tag+webdev")
    .relTypeSystems.add("tsys+dynamic", "tsys+inferred")
    .relWrittenWith.add("pl+zig");
}
