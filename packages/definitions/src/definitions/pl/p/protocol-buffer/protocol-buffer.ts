import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+protocol-buffer", {
      name: "Protocol Buffer",
      languishRanking: 85,
      stackovTags: ["protocol-buffers"],
      githubName: "Protocol Buffer",
      githubLangId: "297",
      githubPopular: false,
      githubType: "data",
      description:
        "Protocol Buffers (Protobuf) is an open-source, cross-platform data format developed by Google. It is used to serialize structured data and is employed for network communication and data storage. Protobuf emphasizes simplicity and performance, aiming to be smaller and faster than XML.",
      keywords: ["Google", "RPC", "cross-platform", "serialization", "structured data"],
      extensions: [".proto"],
      isTranspiler: true,
      releases: [{ version: "28.3", name: "Stable Release", date: "2024-10-22" }],
      extWikipediaPath: "Protocol_Buffers",
      created: "2001",
    })
    .relCompilesTo.add(["pl+c++", "pl+c-sharp", "pl+dart", "pl+go", "pl+java", "pl+javascript", "pl+php", "pl+python", "pl+ruby"])
    .relLicenses.add(["license+bsd"])
    .relParadigms.add(["paradigm+data-exchange"])
    .relPlatforms.add(["plat+cross"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
