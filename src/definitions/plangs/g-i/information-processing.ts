import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+information-processing")
    .merge({
      name: "Information Processing Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Information Processing Language (IPL)",
          href: "https://en.wikipedia.org/wiki/Information_Processing_Language",
        },
      ],
    })
    .addPerson("person+allen-newell", { role: "designer" })
    .addPerson("person+cliff-shaw", { role: "designer" })
    .addPerson("person+herbert-a-simon", { role: "designer" })
    .addParadigms(["para+assembly"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
