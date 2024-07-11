import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+typescript")
    .merge({
      name: "TypeScript",
      websites: [{ kind: "wikipedia", title: "TypeScript", href: "https://en.wikipedia.org/wiki/TypeScript" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" }],
      releases: [{ name: "TypeScript", version: "5.4.2", date: "2024-01-01", kind: "stable" }],
    })
    .addDialects(["pl+assemblyscript"])
    .addInfluences(["pl+c-sharp", "pl+javascript", "pl+java"])
    .addInfluence("pl+actionscript", {
      refs: [
        {
          href: "https://javascript.plainenglish.io/how-actionscript-foreshadowed-typescript-149cdb764de9",
          title: "How ActionScript foreshadowed TypeScript",
        },
      ],
    })
    .addInfluence("pl+f-sharp", {
      refs: [{ href: "https://fsharp.org/history/hopl-final/hopl-fsharp.pdf", title: "The Early History of F#" }],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+duck", "tsys+gradual"])
    .addTypeSystem("tsys+structural", {
      refs: [
        { href: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html", title: "Type Compatibility" },
      ],
    });

  /**/
}
