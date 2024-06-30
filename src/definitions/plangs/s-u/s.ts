import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+s").merge({
    name: "S",
    websites: [
      { kind: "wikipedia", title: "S", href: "https://en.wikipedia.org/wiki/S_(programming_language)" },
      {
        kind: "homepage",
        title: "ect.bell-labs.com/sl/S/",
        href: "https://web.archive.org/web/20181014111802/http://ect.bell-labs.com/sl/S/",
      },
    ],
  });
}
