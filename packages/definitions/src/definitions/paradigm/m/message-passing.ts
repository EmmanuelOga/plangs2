import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+message-passing", {
    name: "Message Passing",
    description: "Communication between processes through the exchange of messages.",
    extHomeURL: "https://en.wikipedia.org/wiki/Message_passing",
    keywords: ["message-passing"],
  });
}
