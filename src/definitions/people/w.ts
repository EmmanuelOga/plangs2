import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+W-A-Wulf", "W. A. Wulf", [
    { title: "W. A. Wulf", href: "https://en.wikipedia.org/wiki/William_Wulf", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Wally-Feurzeig", "Wally Feurzeig", [
    { title: "Wally Feurzeig", href: "https://en.wikipedia.org/wiki/Wally_Feurzeig", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Walter-Bright", "Walter Bright", [
    { title: "Walter Bright", href: "https://en.wikipedia.org/wiki/Walter_Bright", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Walter-Smith", "Walter Smith", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Waterloo-Maple", "Waterloo Maple", [
    { title: "Waterloo Maple", href: "https://en.wikipedia.org/wiki/Waterloo_Maple", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+William-E-Hart", "William E. Hart", []);

  //-------------------------------------------------------------------------------

  lb.define("person+William-F-Schmitt", "William F Schmitt", []);

  //-------------------------------------------------------------------------------

  lb.define("person+William-Maddox", "William Maddox", []);

  //-------------------------------------------------------------------------------

  lb.define("person+William-R-Cook", "William R. Cook", [
    {
      title: "William R. Cook",
      href: "https://en.wikipedia.org/wiki/William_Cook_(computer_scientist)",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+William-S-Cleveland", "William S. Cleveland", [
    { title: "William S. Cleveland", href: "https://en.wikipedia.org/wiki/William_S._Cleveland", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+William-W-Wadge", "William W. Wadge", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Wolfgang-De-Meuter", "Wolfgang De Meuter", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Wolfgang-Slany", "Wolfgang Slany", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Wouter-van-Oortmerssen", "Wouter van Oortmerssen", []);
}
