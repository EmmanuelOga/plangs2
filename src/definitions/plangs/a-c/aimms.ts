import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+aimms").merge({
    name: "AIMMS",
    websites: [
      { kind: "wikipedia", title: "AIMMS", href: "https://en.wikipedia.org/wiki/AIMMS" },
      { kind: "homepage", title: "AIMMS home page", href: "http://www.aimms.com" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/AIMMS_logo.png/121px-AIMMS_logo.png" },
    ],
  });
}
