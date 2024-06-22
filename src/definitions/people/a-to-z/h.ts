import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+h-peter-anvin", "H. Peter Anvin", {
    websites: [{ title: "H. Peter Anvin", href: "https://en.wikipedia.org/wiki/H._Peter_Anvin", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+hamish-dewar", "Hamish Dewar", {});

  /**/

  lb.define("person+hans-zima", "Hans Zima", {});

  /**/

  lb.define("person+hanspeter-mossenbock", "Hanspeter Mössenböck", {
    websites: [
      {
        title: "Hanspeter Mössenböck",
        href: "https://en.wikipedia.org/wiki/Hanspeter_M%C3%B6ssenb%C3%B6ck",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("person+heinz-rutishauser", "Heinz Rutishauser", {
    websites: [
      { title: "Heinz Rutishauser", href: "https://en.wikipedia.org/wiki/Heinz_Rutishauser", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("person+henri-cohen", "Henri Cohen", {
    websites: [
      { title: "Henri Cohen", href: "https://en.wikipedia.org/wiki/Henri_Cohen_(number_theorist)", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("person+henry-m-levy", "Henry M. Levy", {
    websites: [
      {
        title: "Henry M. Levy",
        href: "https://en.wikipedia.org/wiki/Hank_Levy_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("person+herbert-a-simon", "Herbert A. Simon", {
    websites: [
      { title: "Herbert A. Simon", href: "https://en.wikipedia.org/wiki/Herbert_A._Simon", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("person+hermann-bottenbruch", "Hermann Bottenbruch", {
    websites: [
      { title: "Hermann Bottenbruch", href: "https://en.wikipedia.org/wiki/Hermann_Bottenbruch", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("person+hongwei-xi", "Hongwei Xi", {});

  /**/

  lb.define("person+howard-derby", "Howard Derby", {});

  /**/
}
