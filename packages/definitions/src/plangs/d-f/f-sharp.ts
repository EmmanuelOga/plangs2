import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+f-sharp")
    .merge({
      name: "F#",
      websites: [
        { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/66/F_Sharp_logo.svg" }],
      releases: [{ name: "F#", version: "8.0.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+c-sharp",
      "pl+erlang",
      "pl+haskell",
      "pl+ml",
      "pl+python",
      "pl+scala",
      "pl+poly-slashml",
      "pl+sml",
    ])
    .addInfluence("pl+ocaml", {
      refs: [
        {
          href: "https://www.microsoft.com/en-us/research/project/f-at-microsoft-research/",
          title: "F# Historical Acknowledgements",
        },
      ],
    })
    .addPerson("person+don-syme", { role: "designer" })
    .addLicense("lic+mit", {
      refs: [
        { href: "https://github.com/fsharp/fsharp/blob/master/License.txt", title: "F# Software Foundation's License" },
      ],
    })
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+agent",
      "para+meta",
      "para+reflective",
      "para+concurrent",
    ])
    .addPlatforms(["platf+cross-platform", "platf+.net", "platf+mono"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
