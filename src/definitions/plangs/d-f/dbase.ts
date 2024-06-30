import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+dbase")
    .merge({
      name: "DBase",
      websites: [{ kind: "wikipedia", title: "DBase", href: "https://en.wikipedia.org/wiki/DBase" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DBaseLogo_BlackWithRed_glass_300.png/121px-DBaseLogo_BlackWithRed_glass_300.png",
        },
      ],
      releases: [{ name: "DBase", version: "unknown", date: "2019-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addPerson("person+cecil-wayne-ratliff", {
      role: "developer",
      refs: [
        {
          href: "http://www.foxprohistory.org/interview_wayne_ratliff.htm",
          title: "The FoxPro History - Interview with Wayne Ratliff",
        },
      ],
    })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative", "para+dec"])
    .addPlatforms(["platf+dos", "platf+win"]);

  /**/
}
