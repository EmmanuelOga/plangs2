import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+peachpie")
    .merge({
      name: "PeachPie",
      websites: [{ kind: "wikipedia", title: "PeachPie", href: "https://en.wikipedia.org/wiki/PeachPie" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peachpie-logo.png/150px-Peachpie-logo.png",
        },
      ],
    })
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://github.com/peachpiecompiler/peachpie/blob/master/LICENSE.txt",
          title: "iolevel/peachpie: License",
        },
      ],
    });

  /**/
}
