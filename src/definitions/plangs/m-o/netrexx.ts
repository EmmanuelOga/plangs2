import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+netrexx")
    .merge({
      name: "NetRexx",
      websites: [{ kind: "wikipedia", title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/NETREXX.gif" }],
      releases: [{ name: "NetRexx", version: "4.06", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+pl-slash", "pl+rexx", "pl+object-rexx", "pl+java"])
    .addPerson("person+mike-cowlishaw", { role: "designer" })
    .addLicense("lic+icu", {
      refs: [{ href: "https://kenai.com/projects/netrexx/pages/License", title: "ICU License - ICU 1.8.1 and later" }],
    })
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+structured"])
    .addPlatforms([
      "platf+cross-platform",
      "platf+linux",
      "platf+win",
      "platf+mac",
      "platf+z-slashos",
      "platf+z-slashvm",
      "platf+android",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+dynamic"]);

  /**/
}
