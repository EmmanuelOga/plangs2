import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+YAP-Prolog", "YAP Prolog", {
    websites: [
      {
        kind: "wikipedia",
        title: "YAP Prolog",
        href: "https://en.wikipedia.org/wiki/YAP_(Prolog)",
      },
      {
        kind: "homepage",
        title: "www.dcc.fc.up.pt/~vsc/yap/",
        href: "https://www.dcc.fc.up.pt/~vsc/yap/",
      },
    ],
    releases: [
      { version: "6.3.3", date: "2013-01-21", kind: "stable" },
      { version: "7.1", date: "2016-01-09", kind: "preview" },
    ],
    licenses: ["lic+perl-artistic-2"],
  });
}
