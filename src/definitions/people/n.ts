import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+Nate-Foster", "Nate Foster", []);

  //-------------------------------------------------------------------------------

  lb.define("person+National-Instruments", "National Instruments", [
    {
      title: "National Instruments",
      href: "https://en.wikipedia.org/wiki/National_Instruments",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+National-Security-Agency", "National Security Agency", [
    {
      title: "National Security Agency",
      href: "https://en.wikipedia.org/wiki/National_Security_Agency",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Naughty-Dog", "Naughty Dog", [
    { title: "Naughty Dog", href: "https://en.wikipedia.org/wiki/Naughty_Dog", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Neil-Pappalardo", "Neil Pappalardo", [
    {
      title: "Neil Pappalardo",
      href: "https://en.wikipedia.org/wiki/Neil_Pappalardo",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Nenad-Rakocevic", "Nenad Rakočević", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Nevil-Brownlee", "Nevil Brownlee", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Nick-Sieger", "Nick Sieger", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Nicolas-Cannasse", "Nicolas Cannasse", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Nikhil-Swamy", "Nikhil Swamy", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Niklaus-Wirth", "Niklaus Wirth", [
    {
      title: "Niklaus Wirth",
      href: "https://en.wikipedia.org/wiki/Niklaus_Wirth",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Norman-I-Adams", "Norman I. Adams", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Norsk-Data", "Norsk Data", [
    { title: "Norsk Data", href: "https://en.wikipedia.org/wiki/Norsk_Data", kind: "wikipedia" },
  ]);
}
