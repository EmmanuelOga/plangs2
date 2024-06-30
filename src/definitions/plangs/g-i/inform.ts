import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+inform",
    {
      name: "InformInform 1–6Inform 7",
      websites: [
        { kind: "wikipedia", title: "Inform", href: "https://en.wikipedia.org/wiki/Inform" },
        {
          kind: "wikipedia",
          title: "InformInform 1–6Inform 7",
          href: "https://en.wikipedia.org/wiki/Inform_(programming_language)",
        },
        { kind: "homepage", title: "http://inform7.com/", href: "http://inform7.com/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Inform_7_IDE_Icon.png" }],
      releases: [
        { version: "unknown", date: "2015-01-01", kind: "stable" },
        { version: "6.33", date: "2014-01-01", kind: "preview" },
      ],
    },
    {
      people: ["person+graham-nelson"],
      licenses: ["lic+artistic", "lic+freeware"],
      paradigms: ["para+dec", "para+imperative", "para+natural"],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );
}
