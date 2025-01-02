import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+better-c", {
    name: "Better-C",
    description:
      "Programming languages that aim to retain C's simplicity, performance, and low-level control while offering improvements like enhanced safety, better tooling, or modern features.",
    shortDesc: "Improves on C's performance and simplicity with added safety and modern features",
    extHomeURL: "https://web.archive.org/web/20141218090724/https://www.drdobbs.com/open-source/a-better-c/223000087",
    keywords: ["better-c"],
    links: [{ url: "https://dlang.org/blog/2017/08/23/d-as-a-better-c/", title: "D as a Better C" }],
  });
}
