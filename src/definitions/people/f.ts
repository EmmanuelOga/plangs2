import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+Frank-Leymann", "Frank Leymann", [
    {
      title: "Frank Leymann",
      href: "https://en.wikipedia.org/wiki/Frank_Leymann",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Frank-Sanchez", "Frank Sanchez", []);

  lb.define("person+Fred-Barnes", "Fred Barnes", []);

  lb.define("person+Fred-Gilham", "Fred Gilham", []);

  lb.define("person+Fredrik-Hubinette", "Fredrik Hübinette", []);

  lb.define("person+Free-Pascal", "Free Pascal", [
    { title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal", kind: "wikipedia" },
  ]);

  lb.define("person+Friedrich-L-Bauer", "Friedrich L. Bauer", [
    {
      title: "Friedrich L. Bauer",
      href: "https://en.wikipedia.org/wiki/Friedrich_L._Bauer",
      kind: "wikipedia",
    },
  ]);
}
