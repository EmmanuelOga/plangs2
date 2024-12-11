import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+asp.net", {
      name: "ASP.NET",
      languishRanking: 23,
      stackovTags: ["asp.net", "asp.net-core"],
      githubName: "ASP.NET",
      githubLangId: "564186416",
      githubColor: "#9400ff",
      githubPopular: false,
      githubType: "programming",
      description:
        "ASP.NET is a server-side web-application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic websites, applications, and services. It is built on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code using .NET languages.",
      keywords: ["ASP.NET", "Microsoft", "dynamic web pages", "server-side", "web framework"],
      extensions: [".aspx", ".cshtml", ".vbhtml"],
      isTranspiler: true,
      releases: [{ version: "v9.0.0", date: "2024-09-13" }],
      extWikipediaPath: "ASP.NET",
      extRedditPath: "ASPNET",
      extGithubPath: "dotnet/aspnetcore",
      created: "2002",
    })
    .relCompilesTo.add("pl+.net")
    .relParadigms.add("para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+framework", "tag+server")
    .relTypeSystems.add("tsys+nominal", "tsys+static");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
