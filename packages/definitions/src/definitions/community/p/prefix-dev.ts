import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.community
    .set("comm+prefix.dev", {
      name: "Prefix.dev",
      description:
        "Creators of pixi, a fast software package manager built on top of the existing conda ecosystem. Spins up development environments quickly on Windows, macOS and Linux. Automatic lockfiles produce reproducible environments across operating systems (without Docker!). pixi supports Python, R, C/C++, Rust, Ruby, and many other languages.",
      shortDesc:
        "Creators of pixi, a fast software package manager for Python.",
      extHomeURL: "https://prefix.dev/",
      links: [{ title: "Discord", url: "https://discord.gg/kKV8ZxyzY4" }],
    })
    .relPlangs.add("pl+python")
    .relTags.add("tag+packaging", "tag+sci");
}
