import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+zulip", {
      name: "Zulip",
      description: "Powerful, open source group chat application.",
      extHomeURL: "https://github.com/zulip/zulip",
      keywords: ["chat", "communication", "group"],
    })
    .relWrittenWith.add("pl+python");
}
