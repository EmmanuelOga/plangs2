import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ironpython",
    "IronPython",
    {
      name: "IronPython",
      websites: [
        { kind: "wikipedia", title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython" },
        { kind: "homepage", title: "ironpython.net", href: "https://ironpython.net" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/IronPython_3_logo.svg" }],
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20171226082609/http://ironpython.codeplex.com/releases/view/423",
            title: "CodePlex Archive",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2006-09-05", kind: "first" },
        { version: "3.4.1", date: "2023-07-12", kind: "stable" },
        { version: "3.4.0", date: "2022-04-30", kind: "preview" },
      ],
    },
    { licenses: ["lic+apache"], platforms: ["platf+.net", "platf+mono"] },
  );

  /**/
}
