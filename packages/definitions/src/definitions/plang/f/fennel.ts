import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+fennel", {
      name: "Fennel",
      description:
        "Programming language that combines the simplicity, speed, and reach of Lua with the flexibility of Lisp syntax and a macro system. It offers full Lua compatibility and can run wherever Lua runs, including game development, web servers, and microcontrollers.",
      shortDesc: "Lua-compatible language with Lisp syntax and macro system.",
      created: "2020",
      extensions: [".fnl"],
      extGithubPath: "bakpakin/Fennel",
      extHomeURL: "https://fennel-lang.org",
      githubColor: "#fff3d7",
      githubLangId: "239946126",
      githubName: "Fennel",
      githubPopular: false,
      githubStars: 2500,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["fennel"],
      languishRanking: 244,
      releases: [
        { version: "0.6.0", name: "Fennel 0.6.0", date: "2021-07-22" },
        { version: "0.7.0", name: "Fennel 0.7.0", date: "2022-03-01" },
        { version: "0.8.0", name: "Fennel 0.8.0", date: "2022-12-15" },
      ],
    })
    .relCompilesTo.add("pl+lua")
    .relInfluencedBy.add("pl+lua", "pl+scheme")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+macro",
      "para+metaprogramming",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+lua");
}
