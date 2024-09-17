import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+f-sharp", {
      name: "F#",
      description:
        "F# (pronounced F sharp) is a general-purpose, high-level, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. It is most often used as a cross-platform Common Language Infrastructure (CLI) language on .NET, but can also generate JavaScript and graphics processing unit (GPU) code.",
      firstAppeared: "2005-01-01",
      extensions: [".fs", ".fsi", ".fsscript", ".fsx"],
      websites: [
        { href: "https://fsharp.org/", title: "fsharp.org", kind: "other" },
        { href: "https://learn.microsoft.com/en-us/dotnet/fsharp", title: "learn.microsoft.com/en-us/dotnet/fsharp", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/F_Sharp_programming_language", title: "F#", kind: "wikipedia" },
      ],
      releases: [{ version: "8.0.0", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "F#", url: "/images/plangs/f/f-sharp/logo.png" }],
    })
    .addDialectOf(["pl+ml", "pl+ocaml"])
    .addInfluencedBy(["pl+c-sharp", "pl+erlang", "pl+haskell", "pl+ml", "pl+ocaml", "pl+python", "pl+scala", "pl+standard-ml"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+agents",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+framework",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
