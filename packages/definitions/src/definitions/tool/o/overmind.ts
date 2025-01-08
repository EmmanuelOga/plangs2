import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+overmind", {
      name: "overmind",
      description:
        "Overmind is a process manager for Procfile-based applications and tmux. With Overmind, you can easily run several processes from your Procfile in a single terminal.",
      shortDesc: "Process manager for Procfile-based applications and tmux.",
      extGithubPath: "DarthSim/overmind",
    })
    .relWrittenWith.add("pl+go");
}
