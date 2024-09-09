import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+f-sharp", {
      images: [{ kind: "logo", title: "F#", url: "/images/plangs/f/f-sharp/logo.png" }],
      name: "F#",
      description:
        "F# (pronounced F sharp) is a general-purpose, high-level, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. It is most often used as a cross-platform Common Language Infrastructure (CLI) language on .NET, but can also generate JavaScript and graphics processing unit (GPU) code.",
      websites: [
        { href: "https://fsharp.org/", title: "fsharp.org", kind: "other" },
        { href: "https://learn.microsoft.com/en-us/dotnet/fsharp", title: "learn.microsoft.com/en-us/dotnet/fsharp", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/F_Sharp_programming_language", title: "F#", kind: "wikipedia" },
      ],
      extensions: [".fs", ".fsi", ".fsscript", ".fsx"],
      releases: [
        { version: "1.0", date: "2005-01-01" },
        { version: "8.0.0", date: "2023-01-01" },
      ],
    })
    .addDialectOf(["pl+ml", "pl+ocaml"])
    .addInfluencedBy(["pl+c-sharp", "pl+erlang", "pl+haskell", "pl+ml", "pl+ocaml", "pl+scala", "pl+standard-ml"])
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+agents",
      "para+concurrent",
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
