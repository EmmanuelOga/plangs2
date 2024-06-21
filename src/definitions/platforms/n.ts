import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+.net", ".NET Framework", [
    {
      kind: "wikipedia",
      title: ".NET Framework",
      href: "https://en.wikipedia.org/wiki/.NET_Framework",
    },
    { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
    {
      kind: "wikipedia",
      title: "Microsoft .NET",
      href: "https://en.wikipedia.org/wiki/Microsoft_.NET",
    },
    {
      kind: "wikipedia",
      title: ".NET Framework 4.5",
      href: "https://en.wikipedia.org/wiki/.NET_Framework_4.5",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+nintendo_switch", "Nintendo Switch", [
    {
      kind: "wikipedia",
      title: "Nintendo Switch",
      href: "https://en.wikipedia.org/wiki/Nintendo_Switch",
    },
  ]);
}
