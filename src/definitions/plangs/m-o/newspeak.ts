import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+newspeak")
    .merge({
      name: "Newspeak",
      websites: [
        { kind: "wikipedia", title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)" },
      ],
      releases: [{ name: "Newspeak", version: "unknown", date: "2013-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+cpp", "pl+javascript"])
    .addInfluences(["pl+smalltalk", "pl+self", "pl+beta", "pl+e"])
    .addPerson("person+gilad-bracha", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects", "para+functional"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+android", "platf+web"])
    .addTypeSystems(["tsys+dynamic", "tsys+optional"]);

  /**/
}
