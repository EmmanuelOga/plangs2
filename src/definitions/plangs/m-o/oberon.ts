import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+active-oberon").merge({
    name: "Active Oberon",
    websites: [{ kind: "wikipedia", title: "Active Oberon", href: "https://en.wikipedia.org/wiki/Active_Oberon" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg" },
    ],
  });

  g.buildPlang("pl+oberon").merge({
    name: "Oberon",
    websites: [
      { kind: "wikipedia", title: "Oberon", href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)" },
      {
        kind: "wikipedia",
        title: "Oberon",
        href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)#Oberon-07",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg" },
    ],
    releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+oberon-2").merge({
    name: "Oberon-2",
    websites: [{ kind: "wikipedia", title: "Oberon-2", href: "https://en.wikipedia.org/wiki/Oberon-2" }],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg" },
    ],
  });

  g.buildPlang("pl+object-oberon").merge({
    name: "Object Oberon",
    websites: [{ kind: "wikipedia", title: "Object Oberon", href: "https://en.wikipedia.org/wiki/Object_Oberon" }],
  });
}
