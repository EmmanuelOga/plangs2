import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+e-dean-tribble", "E. Dean Tribble", {});

  //-------------------------------------------------------------------------------

  lb.define("person+e-kent-gordon", "E. Kent Gordon", {});

  //-------------------------------------------------------------------------------

  lb.define("person+ecma-international", "Ecma International", {
    websites: [
      { title: "Ecma International", href: "https://en.wikipedia.org/wiki/Ecma_International", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+edgar-t-irons", "Edgar T. Irons", {});

  //-------------------------------------------------------------------------------

  lb.define("person+edward-a-ashcroft", "Edward A. Ashcroft", {});

  //-------------------------------------------------------------------------------

  lb.define("person+edwin-brady", "Edwin Brady", {});

  //-------------------------------------------------------------------------------

  lb.define("person+eliot-miranda", "Eliot Miranda", {});

  //-------------------------------------------------------------------------------

  lb.define("person+emmanuel-st-james", "Emmanuel St. James", {});

  //-------------------------------------------------------------------------------

  lb.define("person+erik-meijer", "Erik Meijer", {
    websites: [
      {
        title: "Erik Meijer",
        href: "https://en.wikipedia.org/wiki/Erik_Meijer_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+evan-czaplicki", "Evan Czaplicki", {});

  //-------------------------------------------------------------------------------

  lb.define("person+evan-phoenix", "Evan Phoenix", {});
}
