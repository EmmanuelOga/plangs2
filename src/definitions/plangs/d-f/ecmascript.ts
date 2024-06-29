import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ecmascript",
    "ECMAScript",
    {
      name: "ECMAScript",
      websites: [
        { kind: "wikipedia", title: "ECMAScript", href: "https://en.wikipedia.org/wiki/ECMAScript" },
        {
          kind: "homepage",
          title: "Standards",
          href: "https://www.ecma-international.org/publications-and-standards/standards/",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg" }],
      releases: [
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "unknown", date: "2023-01-01", kind: "other" },
      ],
      extensions: [],
    },
    {
      dialects: ["pl+haxe"],
      implementations: [
        "pl+actionscript",
        "pl+google-apps-script",
        "pl+inscript",
        "pl+javascript",
        "pl+jscript",
        "pl+qtscript",
      ],
      influences: [
        "pl+awk",
        "pl+c",
        "pl+coffeescript",
        "pl+hypertalk",
        "pl+java",
        "pl+perl",
        "pl+python",
        "pl+scheme",
        "pl+self",
      ],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+prototypes"],
      people: [["person+brendan-eich", { role: "designer" }]],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
