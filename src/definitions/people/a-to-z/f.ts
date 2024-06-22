import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+frank-leymann", "Frank Leymann", {
    websites: [{ title: "Frank Leymann", href: "https://en.wikipedia.org/wiki/Frank_Leymann", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+frank-sanchez", "Frank Sanchez", {});

  /**/

  lb.define("person+fred-barnes", "Fred Barnes", {});

  /**/

  lb.define("person+fred-gilham", "Fred Gilham", {});

  /**/

  lb.define("person+fredrik-hubinette", "Fredrik Hübinette", {});

  /**/

  lb.define("person+free-pascal", "Free Pascal", {
    websites: [{ title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+friedrich-l-bauer", "Friedrich L. Bauer", {
    websites: [
      { title: "Friedrich L. Bauer", href: "https://en.wikipedia.org/wiki/Friedrich_L._Bauer", kind: "wikipedia" },
    ],
  });

  /**/
}
