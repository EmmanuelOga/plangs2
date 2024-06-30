import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+moonscript")
    .merge({
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ name: "Lua", version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    })
    .addImplementations(["pl+ansi-c", "pl+luajit"])
    .addInfluences(["pl+coffeescript", "pl+cpp", "pl+clu", "pl+modula", "pl+scheme", "pl+snobol"])
    .addPerson("person+roberto-ierusalimschy", { role: "designer" })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+scripting",
      "para+imperative",
      "para+prototypes",
      "para+objects",
      "para+functional",
      "para+meta",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/
}
