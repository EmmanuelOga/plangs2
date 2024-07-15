import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+transcript")
    .merge({
      name: "LiveCodeLiveCode Script",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveCodeLiveCode Script",
          href: "https://en.wikipedia.org/wiki/Transcript_(programming_language)",
        },
      ],
      releases: [
        { name: "LiveCodeLiveCode Script", version: "9.6.4", date: "2021-01-01", kind: "stable" },
        { name: "LiveCodeLiveCode Script", version: "9.6.5", date: "2021-01-01", kind: "preview" },
      ],
    })
    .addInfluences(["pl+hypertalk"])
    .addLicenses(["lic+proprietary", "lic+gpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+win", "platf+mac", "platf+linux", "platf+unix", "platf+rpi"]);

  /**/
}
