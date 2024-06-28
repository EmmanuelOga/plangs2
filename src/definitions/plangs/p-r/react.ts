import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+react",
    "React",
    {
      name: "React",
      websites: [
        { kind: "wikipedia", title: "React JS", href: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
        { kind: "homepage", title: "react.dev", href: "https://react.dev/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" }],
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20220531133559/https://www.youtube.com/watch?v=GW0rj4sNH2w",
            title: "JS Apps at Facebook",
          },
        ],
        stable_release: [{ href: "https://registry.npmjs.com/react", title: "https://registry.npmjs.com/react" }],
        preview_release: [
          {
            href: "https://web.archive.org/web/20240512195006/https://react.dev/blog/2024/04/25/react-19#whats-new-in-react-19",
            title: "What's new in React 19",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2013-05-29", kind: "first" },
        { version: "18.3.1", date: "2024-01-01", kind: "stable" },
        { version: "19.0", date: "2024-04-25", kind: "preview" },
      ],
    },
    { influences: ["pl+php"], licenses: ["lic+mit"], platforms: ["platf+web"] },
  );
}
