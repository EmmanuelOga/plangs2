import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+asp.net", {
      name: "ASP.NET",
      description:
        "Server-side web-application framework designed for web development to generate dynamic web pages. Developed by Microsoft, it allows building web applications and services using the Microsoft .NET runtime. ASP.NET supports multiple .NET languages for coding, leveraging the Common Language Runtime (CLR).",
      shortDesc: "Server-side web-application framework by Microsoft for building dynamic websites and services using the .NET runtime.",
      created: "2002",
      extensions: [".aspx", ".cshtml", ".vbhtml"],
      extGithubPath: "dotnet/aspnetcore",
      extHomeURL: "https://dotnet.microsoft.com/apps/aspnet",
      extRedditPath: "ASPNET",
      extWikipediaPath: "ASP.NET",
      githubColor: "#9400ff",
      githubLangId: "564186416",
      githubName: "ASP.NET",
      githubPopular: false,
      githubStars: 35600,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["asp.net", "dynamic web pages", "microsoft", "server-side", "web framework"],
      languishRanking: 23,
      links: [{ url: "https://docs.microsoft.com/en-us/aspnet/core/", title: "ASP.NET Core Documentation" }],
      releases: [{ version: "v9.0.0", date: "2024-09-13" }],
      stackovTags: ["asp.net", "asp.net-core"],
    })
    .relCompilesTo.add("pl+.net")
    .relImplements.add("pl+.net")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+multi", "para+oop")
    .relPlatforms.add("plat+.net", "plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+framework", "tag+server", "tag+webdev")
    .relTypeSystems.add("tsys+nominal", "tsys+static");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
