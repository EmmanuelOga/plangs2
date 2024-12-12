import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+protocol-buffer", {
      name: "Protocol Buffer",
      languishRanking: 85,
      stackovTags: ["protocol-buffers"],
      githubName: "Protocol Buffer",
      githubLangId: "297",
      githubPopular: false,
      githubType: "data",
      description:
        "Protocol Buffers (Protobuf) is a language-neutral, platform-neutral extensible mechanism for serializing structured data, developed by Google. It is widely used for network communications and storing data efficiently and is known for its compact size and high performance compared to formats like XML.",
      keywords: ["Google", "RPC", "cross-platform", "protobuf", "serialization", "structured data"],
      extensions: [".proto"],
      isTranspiler: true,
      releases: [{ version: "28.3", name: "Stable Release", date: "2024-10-22" }],
      extWikipediaPath: "Protocol_Buffers",
      created: "2001",
      shortDesc: "Protocol Buffers is a platform-neutral extensible mechanism for serializing structured data developed by Google.",
      extHomeURL: "https://developers.google.com/protocol-buffers",
      githubStars: 66000,
      extGithubPath: "protocolbuffers/protobuf",
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
