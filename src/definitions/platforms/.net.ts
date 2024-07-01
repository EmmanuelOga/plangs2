import type { PlangsGraph } from "../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+.net").merge({
    name: ".NET Framework",
    websites: [
      {
        kind: "wikipedia",
        title: "Common Language Infrastructure",
        href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure",
      },
      { kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" },
      { kind: "wikipedia", title: "Microsoft .NET", href: "https://en.wikipedia.org/wiki/Microsoft_.NET" },
      { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
      { kind: "wikipedia", title: ".NET Framework 4.5", href: "https://en.wikipedia.org/wiki/.NET_Framework_4.5" },
    ],
  });

  /**/

  g.buildPlatform("platf+mono").merge({
    name: "Mono",
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });

  /**/
}
