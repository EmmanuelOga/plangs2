import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+msgspec", {
      name: "msgspec",
      description:
        "Fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML. Alternative to Pydantic.",
      shortDesc:
        "Fast serialization and validation library. Alternative to Pydantic.",
      extGithubPath: "jcrist/msgspec",
      extHomeURL: "https://jcristharif.com/msgspec/",
      githubStars: 2500,
      keywords: [
        "json",
        "messagepack",
        "serialization",
        "toml",
        "validation",
        "yaml",
      ],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+python", "pl+rust");
}
