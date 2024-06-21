import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+E-Dean-Tribble", "E. Dean Tribble", []);

  //-------------------------------------------------------------------------------

  lb.define("person+E-Kent-Gordon", "E. Kent Gordon", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Ecma-International", "Ecma International", [
    { title: "Ecma International", href: "https://en.wikipedia.org/wiki/Ecma_International", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Edgar-T-Irons", "Edgar T. Irons", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Edward-A-Ashcroft", "Edward A. Ashcroft", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Edwin-Brady", "Edwin Brady", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Eliot-Miranda", "Eliot Miranda", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Emmanuel-St-James", "Emmanuel St. James", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Erik-Meijer", "Erik Meijer", [
    { title: "Erik Meijer", href: "https://en.wikipedia.org/wiki/Erik_Meijer_(computer_scientist)", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Evan-Czaplicki", "Evan Czaplicki", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Evan-Phoenix", "Evan Phoenix", []);
}
