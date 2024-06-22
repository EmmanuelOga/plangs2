import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tom",
    "Tom",
    {
      name: "Tom",
      websites: [
        { kind: "wikipedia", title: "Tom", href: "https://en.wikipedia.org/wiki/Tom_(pattern_matching_language)" },
        { kind: "homepage", title: "tom.loria.fr", href: "http://tom.loria.fr" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Tom_%28pattern_matching_language%29_logo.png",
        },
      ],
      references: {
        stable_release: [
          {
            href: "https://gforge.inria.fr/frs/?group_id=78&release_id=7940",
            title: "https://gforge.inria.fr/frs/?group_id=78&release_id=7940",
          },
        ],
      },
      releases: [{ version: "2.10", date: "2013-03-21", kind: "stable" }],
    },
    { licenses: ["lic+bsds", "lic+gpl"] },
  );

  /**/

  lb.define(
    "pl+turbo-pascal",
    "Turbo Pascal",
    {
      name: "Turbo Pascal",
      websites: [{ kind: "wikipedia", title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal" }],
    },
    { dialects: ["pl+object-pascal", "pl+pascal"] },
  );

  /**/

  lb.define(
    "pl+txl",
    "TXL",
    {
      name: "TXL",
      websites: [
        { kind: "wikipedia", title: "TXL", href: "https://en.wikipedia.org/wiki/TXL_(programming_language)" },
        { kind: "homepage", title: "www.txl.ca", href: "https://www.txl.ca/" },
      ],
    },
    { paradigms: ["para+pattern-matching", "para+term-rewriting"], people: [["person+james-cordy", "designer"]] },
  );

  /**/

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
      influenced: ["pl+actionscript", "pl+arkts", "pl+assemblyscript", "pl+bosque", "pl+dart", "pl+javascript"],
      influences: [
        "pl+actionscript",
        "pl+arkts",
        "pl+assemblyscript",
        "pl+atscript",
        "pl+c-sharp",
        "pl+f-sharp",
        "pl+java",
        "pl+javascript",
      ],
      licenses: ["lic+apache-2"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi-paradigm", "para+objects"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );

  /**/
}
