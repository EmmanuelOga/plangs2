import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+mruby",
    "mruby",
    {
      name: "mruby",
      websites: [
        { kind: "wikipedia", title: "mruby", href: "https://en.wikipedia.org/wiki/Mruby" },
        { kind: "homepage", title: "mruby.org", href: "https://mruby.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mruby_logo_red.svg" }],
      releases: [
        { version: "unknown", date: "2012-04-20", kind: "first" },
        { version: "3.3.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/mruby/mruby/releases/tag/3.3.0", title: "Release 3.3.0" },
          { href: "https://mruby.org/releases/2024/02/14/mruby-3.3.0-released.html", title: "mruby 3.3.0 released" },
        ],
        license: [{ href: "https://github.com/mruby/mruby/blob/master/LICENSE", title: "LICENSE" }],
      },
    },
    { licenses: ["lic+mit"], people: [["person+yukihiro-matsumoto", "designer"]] },
  );

  /**/
}
