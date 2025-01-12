import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+zulip", {
      name: "Zulip",
      description:
        "Zulip server and web application. Open-source team chat that helps teams stay productive and focused.",
      shortDesc: "Powerful, open-source group chat application.",
      extGithubPath: "zulip/zulip",
      extHomeURL: "https://zulip.com/",
      keywords: ["chat", "communication", "group"],
    })
    .relPlatforms.add("plat+web")
    .relTags.add("tag+collab")
    .relWrittenWith.add("pl+python");
}
