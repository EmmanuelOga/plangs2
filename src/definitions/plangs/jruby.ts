import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+jruby",
    "JRuby",
    {
      name: "JRuby",
      websites: [
        { kind: "wikipedia", title: "JRuby", href: "https://en.wikipedia.org/wiki/JRuby" },
        { kind: "homepage", title: "www.jruby.org", href: "https://www.jruby.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JRuby_logo.png/200px-JRuby_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2001-01-01", kind: "first" },
        { version: "9.4.5.0", date: "2023-11-02", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/jruby/jruby/releases", title: "Releases · jruby/jruby" }],
      },
    },
    {
      licenses: ["lic+eclipse-public", "lic+gpl", "lic+lgpl"],
      people: [
        ["person+charles-oliver-nutter", "designer"],
        ["person+nick-sieger", "designer"],
        ["person+ola-bini", "designer"],
        ["person+thomas-enebo", "designer"],
      ],
      platforms: ["platf+jvm"],
    },
  );

  /**/
}
