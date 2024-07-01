import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+bliss")
    .merge({
      name: "BLISS",
      websites: [{ kind: "wikipedia", title: "BLISS", href: "https://en.wikipedia.org/wiki/BLISS" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+w-a-wulf", { role: "designer" })
    .addPerson("person+a-n-habermann", { role: "designer" })
    .addParadigms(["para+structured", "para+imperative"])
    .addPlatforms(["platf+dec", "platf+mips", "platf+ia-32", "platf+ia-64", "platf+x86-64", "platf+cross-platform"]);

  /**/
}
