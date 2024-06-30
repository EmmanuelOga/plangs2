import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+speakeasy")
    .merge({
      name: "SpeakeasySpeakeasy (the interpreted programming language)",
      websites: [
        {
          kind: "wikipedia",
          title: "SpeakeasySpeakeasy (the interpreted programming language)",
          href: "https://en.wikipedia.org/wiki/Speakeasy_(computational_environment)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Speakeasy_Red_Logo.png/120px-Speakeasy_Red_Logo.png",
        },
      ],
      releases: [
        {
          name: "SpeakeasySpeakeasy (the interpreted programming language)",
          version: "unknown",
          date: "2006-01-01",
          kind: "stable",
        },
      ],
    })
    .addInfluence("pl+apl", {
      refs: [
        {
          href: "http://www.cs.nyu.edu/media/publications/rubinsteyn_alex.pdf",
          title: "Runtime Compilation of Array-Oriented Python Programs",
        },
      ],
    })
    .addPerson("person+stanley-cohen", { role: "designer" })
    .addLicenses(["lic+trialware"])
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
