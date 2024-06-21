import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+H-Peter-Anvin", "H. Peter Anvin", [
    {
      title: "H. Peter Anvin",
      href: "https://en.wikipedia.org/wiki/H._Peter_Anvin",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Hamish-Dewar", "Hamish Dewar", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Hans-Zima", "Hans Zima", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Hanspeter-Mossenbock", "Hanspeter Mössenböck", [
    {
      title: "Hanspeter Mössenböck",
      href: "https://en.wikipedia.org/wiki/Hanspeter_M%C3%B6ssenb%C3%B6ck",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Heinz-Rutishauser", "Heinz Rutishauser", [
    {
      title: "Heinz Rutishauser",
      href: "https://en.wikipedia.org/wiki/Heinz_Rutishauser",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Henri-Cohen", "Henri Cohen", [
    {
      title: "Henri Cohen",
      href: "https://en.wikipedia.org/wiki/Henri_Cohen_(number_theorist)",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Henry-M-Levy", "Henry M. Levy", [
    {
      title: "Henry M. Levy",
      href: "https://en.wikipedia.org/wiki/Hank_Levy_(computer_scientist)",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Herbert-A-Simon", "Herbert A. Simon", [
    {
      title: "Herbert A. Simon",
      href: "https://en.wikipedia.org/wiki/Herbert_A._Simon",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Hermann-Bottenbruch", "Hermann Bottenbruch", [
    {
      title: "Hermann Bottenbruch",
      href: "https://en.wikipedia.org/wiki/Hermann_Bottenbruch",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+Hongwei-Xi", "Hongwei Xi", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Howard-Derby", "Howard Derby", []);
}
