import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.community
    .set("comm+contextfree", {
      name: "Context Free",
      description: "Programming languages, including design, usage, implementation, and history.",
      extHomeURL: "https://contextfree.info/",
      links: [
        { title: "Bluesky", url: "https://contextfree.bsky.social/" },
        { title: "Taca App Runtime", url: "https://github.com/contextfreeinfo/taca" },
        { title: "Languish Trends", url: "https://tjpalmer.github.io/languish/" },
        { title: "Discord", url: "https://discord.gg/4yJM5MbcAp" },
        { title: "Mastodon", url: "https://hachyderm.io/@contextfree" },
        { title: "GitHub", url: "https://github.com/contextfreecode" },
        { title: "Reddit", url: "https://reddit.com/r/contextfree/" },
      ],
    })
    .relPlangs.add("pl+c3", "pl+rust")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+languages");
}
