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
      releases: [
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2015-12-24", kind: "stable" },
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "6.33", date: "2014-05-10", kind: "preview" },
      ],
    },
    {
      licenses: ["lic+freeware", "lic+artistic"],
      paradigms: ["para+natural", "para+dec", "para+imperative"],
      people: ["person+graham-nelson"],
      platforms: ["platf+win", "platf+mac", "platf+linux"],
    },
  );
}
