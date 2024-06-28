import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+turtlestitch",
    "Turtlestitch",
    {
      name: "Turtlestitch",
      websites: [
        { kind: "wikipedia", title: "TurtleStitch", href: "https://en.wikipedia.org/wiki/Turtlestitch" },
        { kind: "homepage", title: "www.turtlestitch.org", href: "http://www.turtlestitch.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turtlestitch_Logo.png/121px-Turtlestitch_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2015-01-01", kind: "first" },
        { version: "2.7.7", date: "2022-08-02", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://github.com/backface/turtlestitch",
            title:
              "GitHub - backface/Turtlestitch: Visual, blocks-based programming for turtle graphics and generative embroidery",
          },
        ],
      },
      extensions: [],
    },
    {
      implementations: ["pl+javascript"],
      influences: ["pl+logo", "pl+maker-culture", "pl+scratch", "pl+snap-"],
      licenses: ["lic+affero-gpl"],
      paradigms: ["para+educational", "para+event", "para+objects"],
      people: [["person+andrea-mayr-stalder", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
