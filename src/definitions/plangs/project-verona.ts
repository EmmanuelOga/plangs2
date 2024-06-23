import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+project-verona",
    "Project Verona",
    {
      name: "Project Verona",
      websites: [
        { kind: "wikipedia", title: "Project Verona", href: "https://en.wikipedia.org/wiki/Project_Verona" },
        {
          kind: "homepage",
          title: "www.microsoft.com/en-us/research/project/project-verona",
          href: "https://www.microsoft.com/en-us/research/project/project-verona",
        },
        { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
      ],
      releases: [{ version: "unknown", date: "2019-01-01", kind: "first" }],
      references: {
        filename_extensions: [
          { href: "https://www.microsoft.com/en-us/research/project/project-verona/", title: "Project Verona" },
        ],
        influenced_by: [
          {
            href: "https://www.zdnet.com/article/microsoft-opens-up-rust-inspired-project-verona-programming-language-on-github/",
            title: "Microsoft opens up Rust-inspired Project Verona programming language on GitHub",
          },
        ],
      },
      extensions: [".verona"],
    },
    {
      influenced: ["pl+cyclone", "pl+rust"],
      influences: ["pl+cyclone", "pl+rust"],
      licenses: ["lic+mit"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+windows"],
    },
  );

  /**/
}
