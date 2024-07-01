import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rebol")
    .merge({
      name: "Rebol",
      websites: [{ kind: "wikipedia", title: "Rebol", href: "https://en.wikipedia.org/wiki/Rebol" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png" }],
      releases: [
        { name: "Rebol", version: "2.7.8", date: "2011-01-01", kind: "stable" },
        { name: "Rebol", version: "2.101.0", date: "2012-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+forth", "pl+logo", "pl+objectlogo", "pl+self", "pl+lisp", "pl+ucblogo"])
    .addPerson("person+carl-sassenrath", { role: "designer" })
    .addLicense("lic+freely-redistributable", {
      refs: [{ href: "http://www.rebol.com/license.html", title: "license" }],
    })
    .addLicense("lic+apache", { refs: [{ href: "https://github.com/rebol/r3", title: "R3 source" }] })
    .addParadigms(["para+language", "para+data", "para+functional", "para+prototypes", "para+imperative"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
