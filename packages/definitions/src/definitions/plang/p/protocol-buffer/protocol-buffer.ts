import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+protocol-buffer", {
      name: "Protocol Buffer",
      description:
        "Language-neutral, platform-neutral extensible mechanism for serializing structured data, developed by Google. It is widely used for network communications and storing data efficiently and is known for its compact size and high performance compared to formats like XML.",
      shortDesc: "Platform-neutral extensible mechanism for serializing structured data developed by Google.",
      created: "2001",
      extensions: [".proto"],
      extGithubPath: "protocolbuffers/protobuf",
      extHomeURL: "https://developers.google.com/protocol-buffers",
      extWikipediaPath: "Protocol_Buffers",
      githubLangId: "297",
      githubName: "Protocol Buffer",
      githubPopular: false,
      githubStars: 66000,
      githubType: "data",
      isTranspiler: true,
      keywords: ["Google", "RPC", "cross-platform", "protobuf", "serialization", "structured data"],
      languishRanking: 85,
      releases: [{ version: "28.3", name: "Stable Release", date: "2024-10-22" }],
      stackovTags: ["protocol-buffers"],
    })
    .relCompilesTo.add("pl+c++", "pl+c-sharp", "pl+dart", "pl+go", "pl+java", "pl+javascript", "pl+php", "pl+python", "pl+ruby")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+data-exchange")
    .relPlatforms.add("plat+cross");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
