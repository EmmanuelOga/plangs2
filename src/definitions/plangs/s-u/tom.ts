import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tom",
    "Tom",
    {
      name: "Tom",
      websites: [
        { kind: "wikipedia", title: "Tom", href: "https://en.wikipedia.org/wiki/Tom_(pattern_matching_language)" },
        { kind: "homepage", title: "tom.loria.fr", href: "http://tom.loria.fr" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Tom_%28pattern_matching_language%29_logo.png",
        },
      ],
      references: {
        stable_release: [
          {
            href: "https://gforge.inria.fr/frs/?group_id=78&release_id=7940",
            title: "https://gforge.inria.fr/frs/?group_id=78&release_id=7940",
          },
        ],
      },
      releases: [{ version: "2.10", date: "2013-03-21", kind: "stable" }],
    },
    { licenses: ["lic+bsd-s", "lic+gpl"] },
  );
}
