import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+msgspec", {
      name: "msgspec",
      description: "Fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML.",
      extHomeURL: "https://jcristharif.com/msgspec/",
      keywords: ["json", "messagepack", "serialization", "toml", "validation", "yaml"],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+python", "pl+rust");
}
