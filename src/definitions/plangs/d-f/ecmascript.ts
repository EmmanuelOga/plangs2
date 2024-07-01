import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ecmascript")
    .merge({
      name: "ECMAScript",
      websites: [
        { kind: "wikipedia", title: "ECMAScript", href: "https://en.wikipedia.org/wiki/ECMAScript" },
        {
          kind: "homepage",
          title: "Standards",
          href: "https://www.ecma-international.org/publications-and-standards/standards/",
        },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg" }],
      extensions: [".es"],
      releases: [{ name: "ECMAScript", version: "unknown", date: "2023-01-01", kind: "other" }],
    })
    .addDialects(["pl+haxe"])
    .addImplementations([
      "pl+javascript",
      "pl+actionscript",
      "pl+jscript",
      "pl+qtscript",
      "pl+inscript",
      "pl+google-apps-script",
    ])
    .addInfluences([
      "pl+self",
      "pl+hypertalk",
      "pl+awk",
      "pl+c",
      "pl+coffeescript",
      "pl+perl",
      "pl+python",
      "pl+java",
      "pl+scheme",
      "pl+xtalk",
    ])
    .addPerson("person+brendan-eich", { role: "designer" })
    .addParadigms(["para+multi", "para+prototypes", "para+functional", "para+imperative"])
    .addTypeSystems(["tsys+weak", "tsys+dynamic"]);

  /**/
}
