import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+c-sharp", {
      images: [{ kind: "logo", title: "C#", url: "/images/plangs/c/c-sharp/logo.png" }],
      name: "C#",
      description:
        "C# (/ˌsiː ˈʃɑːrp/ see SHARP) is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.",
      websites: [
        { href: "https://learn.microsoft.com/en-us/dotnet/csharp/", title: "learn.microsoft.com/en-us/dotnet/csharp/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/C%EF%BC%83_(programming_language)", title: "C#", kind: "wikipedia" },
      ],
      extensions: [".cs", ".csx"],
      releases: [{ version: "12.0", date: "2023-01-01" }],
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
    .addLicenses(["lic+gnu-gpl", "lic+lgpl", "lic+mit"])
    .addParadigms([
      "para+async",
      "para+concurrent",
      "para+event-driven",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+reflective",
      "para+structured",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);
}
