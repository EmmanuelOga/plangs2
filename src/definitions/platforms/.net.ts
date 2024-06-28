import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+.net", ".NET Framework", {
    websites: [
      { kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" },
      { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
      { kind: "wikipedia", title: "Microsoft .NET", href: "https://en.wikipedia.org/wiki/Microsoft_.NET" },
      { kind: "wikipedia", title: ".NET Framework 4.5", href: "https://en.wikipedia.org/wiki/.NET_Framework_4.5" },
    ],
  });

  lb.define("platf+mono", "Mono", {
    websites: [{ kind: "wikipedia", title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)" }],
  });
}
