import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ring",
    "Ring",
    {
      name: "Ring",
      websites: [
        { kind: "wikipedia", title: "Ring", href: "https://en.wikipedia.org/wiki/Ring_(programming_language)" },
        { kind: "homepage", title: "http://ring-lang.net", href: "http://ring-lang.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://link.springer.com/content/pdf/bbm%3A978-1-4842-5833-0%2F1.pdf",
            title: "A Dialogue with Mahmoud Fayed",
          },
        ],
        stable_release: [{ href: "https://github.com/ring-lang/ring/releases/tag/v1.20", title: "Released 1.20" }],
        influenced: [
          { href: "https://simple-lang.sourceforge.io", title: "The Simple programming language" },
          { href: "https://www.dragon-lang.org/", title: "The Dragon programming language" },
        ],
      },
      releases: [
        { version: "unknown", date: "2016-01-25", kind: "first" },
        { version: "1.20", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ring", ".rh", ".rform"],
    },
    {
      implementations: ["pl+c"],
      influenced: ["pl+python", "pl+qml", "pl+ruby"],
      influences: ["pl+basic", "pl+c", "pl+c-sharp", "pl+lua", "pl+python", "pl+qml", "pl+ruby", "pl+xbase"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+declarative",
        "para+functional",
        "para+imperative",
        "para+multi",
        "para+natural",
        "para+objects",
        "para+reflective",
      ],
      people: [["person+mahmoud-samir-fayed", "designer"]],
      platforms: ["platf+linux", "platf+mac", "platf+windows"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
