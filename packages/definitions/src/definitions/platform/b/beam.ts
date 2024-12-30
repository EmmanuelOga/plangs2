import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+beam", {
    name: "Erlang BEAM/OTP",
    description: "Open Telecom Platform (OTP) is a collection of useful middleware, libraries, and tools written in the Erlang programming language.",
    extHomeURL: "https://en.wikipedia.org/wiki/Open_Telecom_Platform",
    keywords: ["beam", "erlang", "otp"],
  });
}
