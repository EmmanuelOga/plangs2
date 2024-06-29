import type { PlangsGraph } from "../../../entities/plangs_graph";

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
      influences: [
        "pl+java",
        "pl+typescript",
        "pl+swift",
        "pl+objective-c",
        "pl+javascript",
        "pl+c-sharp",
        "pl+f-sharp",
        "pl+actionscript",
        "pl+atscript",
        "pl+assemblyscript",
      ],
      licenses: ["lic+apache", "lic+proprietary"],
      paradigms: ["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"],
      platforms: ["platf+mac", "platf+win", "platf+android", "platf+ios"],
      typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
    },
  );
}
