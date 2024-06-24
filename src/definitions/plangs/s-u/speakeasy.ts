import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+speakeasy",
    "Speakeasy",
    {
      name: "Speakeasy",
      websites: [
        {
          kind: "wikipedia",
          title: "Speakeasy",
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
        { version: "unknown", date: "2006-01-01", kind: "stable" },
        { version: "unknown", date: "1964-01-01", kind: "first" },
      ],
      references: {
        operating_system: [
          { href: "http://www.speakeasy.com/about_speakeasy.htm#Platforms", title: "Supported platforms" },
        ],
        influenced_by: [
          {
            href: "http://www.cs.nyu.edu/media/publications/rubinsteyn_alex.pdf",
            title: "Runtime Compilation of Array-Oriented Python Programs",
          },
        ],
        influenced: [
          {
            href: "http://archive.computerhistory.org/resources/access/text/2013/12/102746804-05-01-acc.pdf",
            title:
              "An interview with CLEVE MOLER Conducted by Thomas Haigh On 8 and 9 March, 2004 Santa Barbara, California",
          },
        ],
      },
    },
    {
      influenced: ["pl+matlab"],
      influences: ["pl+apl"],
      licenses: ["lic+trialware"],
      paradigms: ["para+imperative"],
      people: [["person+stanley-cohen", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
