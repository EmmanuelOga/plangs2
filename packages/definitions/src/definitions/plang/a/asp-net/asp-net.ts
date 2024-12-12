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
        "ASP.NET is a server-side web-application framework designed for web development to generate dynamic web pages. Developed by Microsoft, it allows building web applications and services using the Microsoft .NET runtime. ASP.NET supports multiple .NET languages for coding, leveraging the Common Language Runtime (CLR).",
      keywords: ["asp.net", "dynamic web pages", "microsoft", "server-side", "web framework"],
      extensions: [".aspx", ".cshtml", ".vbhtml"],
      isTranspiler: false,
      releases: [{ version: "v9.0.0", date: "2024-09-13" }],
      extWikipediaPath: "ASP.NET",
      extRedditPath: "ASPNET",
      created: "2002",
      shortDesc: "ASP.NET is a server-side web-application framework by Microsoft for building dynamic websites and services using the .NET runtime.",
      extHomeURL: "https://dotnet.microsoft.com/apps/aspnet",
      links: [{ url: "https://docs.microsoft.com/en-us/aspnet/core/", title: "ASP.NET Core Documentation" }],
      extGithubPath: "dotnet/aspnetcore",
      githubStars: 35600,
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
