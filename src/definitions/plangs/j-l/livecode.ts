import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+livecode",
    {
      name: "LiveCode",
      websites: [{ kind: "wikipedia", title: "LiveCode", href: "https://en.wikipedia.org/wiki/LiveCode" }],
      releases: [
        { version: "9.6.4", date: "2021-01-01", kind: "stable" },
        { version: "9.6.5", date: "2021-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+hypertalk", "pl+xtalk"],
      licenses: ["lic+gpl", "lic+proprietary"],
      paradigms: ["para+objects"],
      platforms: ["platf+linux", "platf+mac", "platf+rpi", "platf+unix", "platf+win"],
    },
  );
}
