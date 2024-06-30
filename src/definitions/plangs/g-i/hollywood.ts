import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hollywood").merge({
    name: "HollywoodHollywood Designer",
    websites: [
      {
        kind: "wikipedia",
        title: "HollywoodHollywood Designer",
        href: "https://en.wikipedia.org/wiki/Hollywood_(programming_language)",
      },
      { kind: "homepage", title: "www.hollywood-mal.com", href: "http://www.hollywood-mal.com" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hollywood-ide3.jpg/220px-Hollywood-ide3.jpg",
      },
    ],
    releases: [{ version: "6.0", date: "2022-01-01", kind: "stable" }],
  });
}
