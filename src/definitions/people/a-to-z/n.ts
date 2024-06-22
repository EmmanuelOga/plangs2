import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+nate-foster", "Nate Foster", {});

  //-------------------------------------------------------------------------------

  lb.define("person+national-instruments", "National Instruments", {
    websites: [
      { title: "National Instruments", href: "https://en.wikipedia.org/wiki/National_Instruments", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+national-security-agency", "National Security Agency", {
    websites: [
      {
        title: "National Security Agency",
        href: "https://en.wikipedia.org/wiki/National_Security_Agency",
        kind: "wikipedia",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+naughty-dog", "Naughty Dog", {
    websites: [{ title: "Naughty Dog", href: "https://en.wikipedia.org/wiki/Naughty_Dog", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+neil-pappalardo", "Neil Pappalardo", {
    websites: [{ title: "Neil Pappalardo", href: "https://en.wikipedia.org/wiki/Neil_Pappalardo", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+nenad-rakocevic", "Nenad Rakočević", {});

  //-------------------------------------------------------------------------------

  lb.define("person+nevil-brownlee", "Nevil Brownlee", {});

  //-------------------------------------------------------------------------------

  lb.define("person+nick-sieger", "Nick Sieger", {});

  //-------------------------------------------------------------------------------

  lb.define("person+nicolas-cannasse", "Nicolas Cannasse", {});

  //-------------------------------------------------------------------------------

  lb.define("person+nikhil-swamy", "Nikhil Swamy", {});

  //-------------------------------------------------------------------------------

  lb.define("person+niklaus-wirth", "Niklaus Wirth", {
    websites: [{ title: "Niklaus Wirth", href: "https://en.wikipedia.org/wiki/Niklaus_Wirth", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+norman-i-adams", "Norman I. Adams", {});

  //-------------------------------------------------------------------------------

  lb.define("person+norsk-data", "Norsk Data", {
    websites: [{ title: "Norsk Data", href: "https://en.wikipedia.org/wiki/Norsk_Data", kind: "wikipedia" }],
  });
}
