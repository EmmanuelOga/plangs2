import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+arkts",
    "ArkTS",
    {
      name: "ArkTS",
      websites: [
        { kind: "wikipedia", title: "ArkTS", href: "https://en.wikipedia.org/wiki/ArkTS" },
        { kind: "homepage", title: "developer.harmonyos.com", href: "https://developer.harmonyos.com/" },
        { kind: "homepage", title: "www.harmonyos.com/arkts/", href: "https://www.harmonyos.com/arkts/" },
      ],
      releases: [
        { version: "unknown", date: "2021-09-30", kind: "first" },
        { version: "4.1.7.3", date: "2024-03-30", kind: "stable" },
      ],
      extensions: [".ets", ".ts"],
    },
    {
      influenced: ["pl+java", "pl+javascript", "pl+typescript"],
      influences: [
        "pl+actionscript",
        "pl+assemblyscript",
        "pl+atscript",
        "pl+c-sharp",
        "pl+f-sharp",
        "pl+java",
        "pl+javascript",
        "pl+objective-c",
        "pl+swift",
        "pl+typescript",
      ],
      licenses: ["lic+apache", "lic+proprietary"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+android", "platf+ios", "platf+mac", "platf+windows"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );

  /**/
}
