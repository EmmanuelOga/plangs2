import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+Ted-Kaehler", "Ted Kaehler", [
    { title: "Ted Kaehler", href: "https://en.wikipedia.org/wiki/Ted_Kaehler", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Terrance-Swift", "Terrance Swift", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Terry-Winograd", "Terry Winograd", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Tetsuo-Yokoyama", "Tetsuo Yokoyama", []);

  //-------------------------------------------------------------------------------

  lb.define("person+The-Byte-Works", "The Byte Works", [
    {
      title: "The Byte Works",
      href: "https://en.wikipedia.org/wiki/The_Byte_Works",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Theo-D-Hondt", "Theo D'Hondt", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Thinking-Machines", "Thinking Machines", [
    {
      title: "Thinking Machines",
      href: "https://en.wikipedia.org/wiki/Thinking_Machines_Corporation",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Thom-Fruhwirth", "Thom Frühwirth", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Thomas-E-Kurtz", "Thomas E. Kurtz", [
    {
      title: "Thomas E. Kurtz",
      href: "https://en.wikipedia.org/wiki/Thomas_E._Kurtz",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Thomas-Enebo", "Thomas Enebo", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Thomas-Mertes", "Thomas Mertes", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Tim-Burks", "Tim Burks", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Tim-Sweeney", "Tim Sweeney", [
    { title: "Tim Sweeney", href: "https://en.wikipedia.org/wiki/Tim_Sweeney", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Tom-Duff", "Tom Duff", [
    { title: "Tom Duff", href: "https://en.wikipedia.org/wiki/Tom_Duff", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Tom-Lord", "Tom Lord", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Tom-Van-Cutsem", "Tom Van Cutsem", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Tony-Brooker", "Tony Brooker", [
    {
      title: "Tony Brooker",
      href: "https://en.wikipedia.org/wiki/Tony_Brooker",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Tony-Hoare", "Tony Hoare", [
    { title: "Tony Hoare", href: "https://en.wikipedia.org/wiki/Tony_Hoare", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Trevor-Hastie", "Trevor Hastie", [
    {
      title: "Trevor Hastie",
      href: "https://en.wikipedia.org/wiki/Trevor_Hastie",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Troels-Henriksen", "Troels Henriksen", []);
}
