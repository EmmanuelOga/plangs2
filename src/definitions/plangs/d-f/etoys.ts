import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+etoys")
    .merge({
      name: "Etoys",
      websites: [
        { kind: "wikipedia", title: "Etoys", href: "https://en.wikipedia.org/wiki/Etoys_(programming_language)" },
      ],
    })
    .addImplementations(["pl+squeak", "pl+morphic", "pl+tweak"])
    .addInfluences([
      "pl+agentsheets",
      "pl+logo",
      "pl+smalltalk",
      "pl+hypercard",
      "pl+starlogo",
      "pl+objectlogo",
      "pl+squeak",
      "pl+ucblogo",
    ])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+ted-kaehler", { role: "developer" })
    .addPerson("person+andreas-raab", { role: "developer" })
    .addPerson("person+dan-ingalls", {
      role: "developer",
      refs: [{ href: "https://computerhistory.org/profile/dan-ingalls-2/", title: "Dan Ingalls" }],
    })
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", {
      refs: [{ href: "http://www.squeakland.org/download/license.jsp", title: "Squeakland : Download : License" }],
    })
    .addParadigms(["para+objects", "para+prototypes", "para+educational"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
