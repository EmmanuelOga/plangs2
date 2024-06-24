import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+typescript",
    "TypeScript",
    {
      name: "TypeScript",
      websites: [
        { kind: "wikipedia", title: "TypeScript", href: "https://en.wikipedia.org/wiki/TypeScript" },
        { kind: "homepage", title: "www.typescriptlang.org", href: "https://www.typescriptlang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20150403224440/https://typescript.codeplex.com/releases/view/95554",
            title: "TypeScript",
          },
        ],
        stable_release: [
          {
            href: "https://github.com/microsoft/TypeScript/releases/tag/v5.4.2",
            title: "Release TypeScript 5.4 microsoft/TypeScript",
          },
        ],
        typing_discipline: [
          { href: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html", title: "Type Compatibility" },
        ],
        influenced_by: [
          { href: "https://fsharp.org/history/hopl-final/hopl-fsharp.pdf", title: "The Early History of F#" },
          {
            href: "https://javascript.plainenglish.io/how-actionscript-foreshadowed-typescript-149cdb764de9",
            title: "How ActionScript foreshadowed TypeScript",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2012-10-01", kind: "first" },
        { version: "5.4.2", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ts", ".tsx", ".mts", ".cts"],
    },
    {
      dialects: ["pl+assemblyscript"],
      influences: ["pl+actionscript", "pl+c-sharp", "pl+f-sharp", "pl+java", "pl+javascript"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );

  /**/
}
