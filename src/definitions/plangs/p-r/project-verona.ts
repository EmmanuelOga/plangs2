import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+project-verona")
    .merge({
      name: "Project Verona",
      websites: [
        { kind: "wikipedia", title: "Project Verona", href: "https://en.wikipedia.org/wiki/Project_Verona" },
        { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
      ],
    })
    .addInfluences(["pl+rust"])
    .addInfluence("pl+cyclone", {
      refs: [
        {
          href: "https://www.zdnet.com/article/microsoft-opens-up-rust-inspired-project-verona-programming-language-on-github/",
          title: "Microsoft opens up Rust-inspired Project Verona programming language on GitHub",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"]);

  /**/
}
