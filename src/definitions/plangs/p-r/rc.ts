import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rc")
    .merge({
      name: "rc",
      websites: [{ kind: "wikipedia", title: "rc", href: "https://en.wikipedia.org/wiki/Rc_(Unix_shell)" }],
    })
    .addInfluences(["pl+bourne-shell"])
    .addPerson("person+tom-duff", { role: "designer" })
    .addParadigms(["para+imperative", "para+pipeline"])
    .addPlatforms(["platf+cross-platform", "platf+plan9"])
    .addTypeSystems(["tsys+weak"]);

  /**/
}
