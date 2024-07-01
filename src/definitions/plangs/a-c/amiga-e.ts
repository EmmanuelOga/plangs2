import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+amiga-e")
    .merge({
      name: "Amiga E",
      websites: [
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E#PortablE" },
        { kind: "wikipedia", title: "Amiga E", href: "https://en.wikipedia.org/wiki/Amiga_E" },
      ],
    })
    .addInfluences(["pl+ada", "pl+cpp", "pl+lisp"])
    .addLicenses(["lic+freeware"])
    .addParadigms(["para+multi", "para+functional", "para+objects", "para+imperative"])
    .addPlatforms(["platf+amiga"]);

  /**/
}
