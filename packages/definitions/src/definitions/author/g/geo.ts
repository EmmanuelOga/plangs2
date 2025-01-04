import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.author
    .set("author+geo", {
      name: "Emmanuel Oga",
      description:
        "Hello! I'm the creator of the Plangs! community. Thanks for visiting Plangs!",
      extHomeURL: "https://emmanueloga.com/",
    })
    .relCommunites.add(
      "comm+bembem",
      "comm+contextfree",
      "comm+prefix.dev",
      "comm+threejs-journey",
    );
}
