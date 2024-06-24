import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+peachpie",
    "PeachPie",
    {
      name: "PeachPie",
      websites: [
        { kind: "wikipedia", title: "PeachPie", href: "https://en.wikipedia.org/wiki/PeachPie" },
        { kind: "homepage", title: "www.peachpie.io", href: "http://www.peachpie.io" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peachpie-logo.png/150px-Peachpie-logo.png",
        },
      ],
      references: {
        initial_release: [
          { href: "https://github.com/peachpiecompiler/peachpie/releases", title: "PeachPie Compiler pre-release" },
        ],
        written_in: [{ href: "https://github.com/peachpiecompiler/peachpie/releases", title: "PeachPie repository" }],
        license: [
          {
            href: "https://github.com/peachpiecompiler/peachpie/blob/master/LICENSE.txt",
            title: "iolevel/peachpie: License",
          },
        ],
      },
      releases: [{ version: "unknown", date: "2016-07-18", kind: "first" }],
    },
    { licenses: ["lic+apache"] },
  );

  /**/
}
