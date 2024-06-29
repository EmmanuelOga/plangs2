import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+inform",
    "Inform",
    {
      name: "Inform",
      websites: [
        {
          kind: "wikipedia",
          title: "InformInform 1–6Inform 7",
          href: "https://en.wikipedia.org/wiki/Inform_(programming_language)",
        },
        { kind: "homepage", title: "http://inform7.com/", href: "http://inform7.com/" },
        { kind: "wikipedia", title: "Inform", href: "https://en.wikipedia.org/wiki/Inform" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Inform_7_IDE_Icon.png" }],
      references: {
        stable_release: [
          { href: "https://web.archive.org/web/20150227005308/http://inform7.com/download/", title: "Download" },
        ],
        preview_release: [
          { href: "https://github.com/DavidKinder/Inform6/releases/tag/v6.33", title: "Release v6.33" },
        ],
      },
      releases: [
        { version: "unknown", date: "2015-12-24", kind: "stable" },
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "6.33", date: "2014-05-10", kind: "preview" },
      ],
    },
    {
      licenses: ["lic+artistic", "lic+freeware"],
      paradigms: ["para+dec", "para+imperative", "para+natural"],
      people: [["person+graham-nelson", { role: "designer" }]],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );
}
