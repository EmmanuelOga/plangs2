import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+transcript",
    "LiveCodeLiveCode Script",
    {
      name: "LiveCodeLiveCode Script",
      websites: [
        {
          kind: "wikipedia",
          title: "LiveCodeLiveCode Script",
          href: "https://en.wikipedia.org/wiki/Transcript_(programming_language)",
        },
        { kind: "homepage", title: "livecode.com", href: "https://livecode.com/" },
      ],
      releases: [
        { version: "unknown", date: "2001-07-11", kind: "first" },
        { version: "9.6.4", date: "2021-08-31", kind: "stable" },
        { version: "9.6.5", date: "2021-10-25", kind: "preview" },
        { version: "unknown", date: "1993-01-01", kind: "first" },
      ],
      references: {
        stable_release: [{ href: "https://downloads.livecode.com/livecode/", title: "All LiveCode Downloads" }],
        preview_release: [{ href: "https://downloads.livecode.com/livecode/", title: "All LiveCode Downloads" }],
      },
    },
    {
      influences: ["pl+hypertalk"],
      licenses: ["lic+gpl", "lic+proprietary"],
      paradigms: ["para+objects"],
      platforms: ["platf+linux", "platf+mac", "platf+rpi", "platf+unix", "platf+win"],
    },
  );

  /**/
}
