import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+tmux", {
      name: "tmux",
      description:
        "A terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal.",
      shortDesc:
        "Terminal multiplexer for switching between programs in a single terminal.",
      extHomeURL: "https://github.com/tmux/tmux/wiki",
    })
    .relWrittenWith.add("pl+c");
}
