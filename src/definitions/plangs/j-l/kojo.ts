import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+kojo")
    .merge({
      name: "The Kojo Learning Environment",
      websites: [
        {
          kind: "wikipedia",
          title: "The Kojo Learning Environment",
          href: "https://en.wikipedia.org/wiki/Kojo_(programming_language)",
        },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kojo-screenshot.png/300px-Kojo-screenshot.png",
        },
      ],
      releases: [{ name: "The Kojo Learning Environment", version: "2.9.24", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+logo", "pl+processing"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+structured", "para+functional", "para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
