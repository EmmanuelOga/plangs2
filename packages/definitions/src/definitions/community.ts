import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.nodes.community
    .set("community+bembem", {
      name: "BEMBEM",
      description:
        "Community by the creator of Plangs! Welcome to Billie English Muffin's Brilliantly Engineered Machine of Boundless Excitement and Marvel! A place for friends to talk about anything. Feel free to share or talk about whatever you may find interesting!",
      extHomeURL: "https://bembem.page/",
      links: [{ title: "Discord", url: "https://discord.gg/MRrkpywtKR" }],
    })
    .relPlangs.add(["pl+c", "pl+c-sharp", "pl+go", "pl+javascript", "pl+python", "pl+typescript"])
    .relTags.add(["tag+games", "tag+multimedia", "tag+webdev"]);

  g.nodes.community
    .set("community+contextfree", {
      name: "Context Free",
      description: "Context Free is about programming languages, including design, usage, implementation, and history.",
      extHomeURL: "https://contextfree.info/",
      links: [
        { title: "Bluesky", url: "https://contextfree.bsky.social/" },
        { title: "Taca App Runtime", url: "htps://github.com/contextfreeinfo/taca" },
        { title: "Languish Trends", url: "https://tjpalmer.github.io/languish/" },
        { title: "Discord", url: "https://discord.gg/4yJM5MbcAp" },
        { title: "Mastodon", url: "https://hachyderm.io/@contextfree" },
        { title: "GitHub", url: "https://github.com/contextfreecode" },
        { title: "Reddit", url: "https://reddit.com/r/contextfree/" },
      ],
    })
    .relPlangs.add(["pl+c3", "pl+rust"])
    .relTags.add(["tag+compiler", "tag+interpreters", "tag+languages"]);

  g.nodes.community
    .set("community+prefix.dev", {
      name: "Prefix.dev",
      description:
        "Creators of pixi, a fast software package manager built on top of the existing conda ecosystem. Spins up development environments quickly on Windows, macOS and Linux. Automatic lockfiles produce reproducible environments across operating systems (without Docker!). pixi supports Python, R, C/C++, Rust, Ruby, and many other languages.",
      extHomeURL: "https://prefix.dev/",
      links: [{ title: "Discord", url: "https://discord.gg/kKV8ZxyzY4" }],
    })
    .relPlangs.add(["pl+python"])
    .relTags.add(["tag+packaging", "tag+sci"]);

  g.nodes.community
    .set("community+threejsjourney", {
      name: "ThreeJS Journey Community",
      description: "Public and Private communities for ThreeJS Journey students.",
      extHomeURL: "https://threejs-journey.com/discord",
    })
    .relPlangs.add(["pl+javascript"])
    .relTags.add(["tag+3dg", "tag+games", "tag+webdev"]);
}
