import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+c-sharp")
    .merge({
      name: "C#",
      websites: [
        { kind: "wikipedia", title: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
        { kind: "wikipedia", title: "Visual C#", href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C_Sharp" },
        { kind: "wikipedia", title: "Polyphonic C#", href: "https://en.wikipedia.org/wiki/Polyphonic_C_Sharp" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
      releases: [{ name: "C#", version: "12.0", date: "2023-01-01", kind: "stable" }],
      extensions: [".cs", ".csx"],
    })
    .addDialects(["pl+c-", "pl+c-sharp", "pl+nemerle"])
    .addImplementations(["pl+c-sharp", "pl+.net", "pl+mono", "pl+win", "pl+.net-framework", "pl+dotgnu"])
    .addInfluences([
      "pl+c",
      "pl+cpp",
      "pl+c-",
      "pl+eiffel",
      "pl+f-sharp",
      "pl+haskell",
      "pl+scala",
      "pl+icon",
      "pl+j-sharp",
      "pl+visual-jpp",
      "pl+java",
      "pl+ml",
      "pl+modula",
      "pl+basic",
      "pl+d",
    ])
    .addInfluence("pl+pascal", {
      refs: [
        {
          href: "https://web.archive.org/web/20100324124903/http://www.computerworld.com.au/article/261958/a-z_programming_languages_c_/?pp=7",
          title: "The A-Z of Programming Languages: C#",
        },
      ],
    })
    .addPerson("person+anders-hejlsberg", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+imperative",
      "para+objects",
      "para+event",
      "para+the",
      "para+functional",
      "para+generic",
      "para+reflective",
      "para+concurrent",
    ])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+inferred"])
    .addTypeSystem("tsys+dynamic", {
      refs: [
        {
          href: "https://web.archive.org/web/20120103195731/http://code.msdn.microsoft.com/csharpfuture/Release/ProjectReleases.aspx?ReleaseId=1686",
          title: "New features in C# 4.0",
        },
      ],
    });

  /**/
}
