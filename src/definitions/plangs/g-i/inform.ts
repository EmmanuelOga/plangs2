import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+inform")
    .merge({
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
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Inform_7_IDE_Icon.png" }],
      releases: [
        { name: "InformInform 1–6Inform 7", version: "unknown", date: "2015-01-01", kind: "stable" },
        { name: "InformInform 1–6Inform 7", version: "6.33", date: "2014-01-01", kind: "preview" },
      ],
    })
    .addPerson("person+graham-nelson", { role: "designer" })
    .addLicenses(["lic+freeware", "lic+artistic"])
    .addParadigms(["para+natural", "para+dec", "para+imperative"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux"]);

  /**/
}
