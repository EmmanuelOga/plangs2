import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+dbase",
    "DBase",
    {
      name: "DBase",
      websites: [
        { kind: "wikipedia", title: "DBase", href: "https://en.wikipedia.org/wiki/DBase" },
        { kind: "homepage", title: "www.dbase.com", href: "http://www.dbase.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DBaseLogo_BlackWithRed_glass_300.png/121px-DBaseLogo_BlackWithRed_glass_300.png",
        },
      ],
      references: {
        developer: [
          {
            href: "http://www.foxprohistory.org/interview_wayne_ratliff.htm",
            title: "The FoxPro History - Interview with Wayne Ratliff",
          },
          { href: "https://archive.org/details/programmersatwor00lamm_0/", title: "Programmers at Work" },
        ],
      },
      releases: [
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "unknown", date: "2019-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+clipper", "pl+foxpro", "pl+harbour", "pl+vp-info"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+dec", "para+imperative"],
      people: [["person+cecil-wayne-ratliff", "designer"]],
      platforms: ["platf+dos", "platf+win"],
    },
  );

  /**/
}
