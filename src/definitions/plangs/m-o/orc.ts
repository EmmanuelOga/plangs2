import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+orc")
    .merge({
      name: "Orc",
      websites: [{ kind: "wikipedia", title: "Orc", href: "https://en.wikipedia.org/wiki/Orc_(programming_language)" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/5e/Orc_programming_language_logo.png" },
      ],
    })
    .addInfluences(["pl+haskell", "pl+ml", "pl+oz", "pl+smalltalk", "pl+pict"])
    .addPerson("person+jayadev-misra", { role: "designer" })
    .addPerson("person+william-r-cook", { role: "developer" })
    .addLicenses(["lic+bsd-n"])
    .addParadigms(["para+concurrent", "para+nondeterministic"]);

  /**/
}
