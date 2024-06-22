import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+w-a-wulf", "W. A. Wulf", {
    websites: [{ title: "W. A. Wulf", href: "https://en.wikipedia.org/wiki/William_Wulf", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+wally-feurzeig", "Wally Feurzeig", {
    websites: [{ title: "Wally Feurzeig", href: "https://en.wikipedia.org/wiki/Wally_Feurzeig", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+walter-bright", "Walter Bright", {
    websites: [{ title: "Walter Bright", href: "https://en.wikipedia.org/wiki/Walter_Bright", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+walter-smith", "Walter Smith", {});

  /**/

  lb.define("person+waterloo-maple", "Waterloo Maple", {
    websites: [{ title: "Waterloo Maple", href: "https://en.wikipedia.org/wiki/Waterloo_Maple", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+william-e-hart", "William E. Hart", {});

  /**/

  lb.define("person+william-f-schmitt", "William F Schmitt", {});

  /**/

  lb.define("person+william-maddox", "William Maddox", {});

  /**/

  lb.define("person+william-r-cook", "William R. Cook", {
    websites: [
      {
        title: "William R. Cook",
        href: "https://en.wikipedia.org/wiki/William_Cook_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("person+william-s-cleveland", "William S. Cleveland", {
    websites: [
      { title: "William S. Cleveland", href: "https://en.wikipedia.org/wiki/William_S._Cleveland", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("person+william-w-wadge", "William W. Wadge", {});

  /**/

  lb.define("person+wolfgang-de-meuter", "Wolfgang De Meuter", {});

  /**/

  lb.define("person+wolfgang-slany", "Wolfgang Slany", {});

  /**/

  lb.define("person+wouter-van-oortmerssen", "Wouter van Oortmerssen", {});

  /**/
}
