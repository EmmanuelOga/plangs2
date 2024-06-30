import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+turing")
    .merge({
      name: "TuringTuring+Object-Oriented Turing",
      websites: [
        { kind: "wikipedia", title: "Turing Plus", href: "https://en.wikipedia.org/wiki/Turing_Plus" },
        { kind: "wikipedia", title: "Turing", href: "https://en.wikipedia.org/wiki/Turing_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Turing_logo.gif/121px-Turing_logo.gif",
        },
      ],
    })
    .addInfluences(["pl+concurrent-euclid", "pl+euclid", "pl+sp-slashk"])
    .addPerson("person+ric-holt", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+objects", "para+concurrent"])
    .addPlatforms(["platf+cross-platform", "platf+mips"])
    .addTypeSystems(["tsys+static", "tsys+manifest"]);

  /**/
}
