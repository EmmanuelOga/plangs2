import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c-sharp", {
      name: "C#",
      description:
        "C# (/ˌsiː ˈʃɑːrp/ see SHARP) is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.",
      keywords: ["c-sharp", "csharp"],
      websites: [
        { title: "learn.microsoft.com/en-us/dotnet/csharp/", href: "https://learn.microsoft.com/en-us/dotnet/csharp/", kind: "other" },
        { title: "C#", href: "https://en.wikipedia.org/wiki/C%EF%BC%83_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".cs", ".csx"],
      firstAppeared: "2000-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "12.0", name: "C# 12", date: "2023-01-01" }],
    })
    .addDialectOf(["pl+c"])
    .addInfluencedBy([
      "pl+c",
      "pl+c++",
      "pl+d",
      "pl+eiffel",
      "pl+f-sharp",
      "pl+haskell",
      "pl+icon",
      "pl+ml",
      "pl+pascal",
      "pl+scala",
      "pl+visual-basic",
    ])
    .addLicenses(["license+gnu-gpl", "license+lgpl", "license+mit"])
    .addParadigms([
      "paradigm+async",
      "paradigm+concurrent",
      "paradigm+event-driven",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+.net", "plat+cross"])
    .addTags([
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+interpreter",
      "tag+scripting",
      "tag+shell",
      "tag+ui",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);
}
