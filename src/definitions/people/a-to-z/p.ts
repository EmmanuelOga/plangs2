import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+p-nowosad", "P. Nowosad", {});

  //-------------------------------------------------------------------------------

  lb.define("person+patricia-hill", "Patricia Hill", {});

  //-------------------------------------------------------------------------------

  lb.define("person+paul-cockshott", "Paul Cockshott", {
    websites: [{ title: "Paul Cockshott", href: "https://en.wikipedia.org/wiki/Paul_Cockshott", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+paul-graham", "Paul Graham", {
    websites: [
      { title: "Paul Graham", href: "https://en.wikipedia.org/wiki/Paul_Graham_(programmer)", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+paul-hudak", "Paul Hudak", {
    websites: [{ title: "Paul Hudak", href: "https://en.wikipedia.org/wiki/Paul_Hudak", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+paul-king", "Paul King", {});

  //-------------------------------------------------------------------------------

  lb.define("person+paul-laughton", "Paul Laughton", {});

  //-------------------------------------------------------------------------------

  lb.define("person+paul-rovner", "Paul Rovner", {});

  //-------------------------------------------------------------------------------

  lb.define("person+paul-tagliamonte", "Paul Tagliamonte", {});

  //-------------------------------------------------------------------------------

  lb.define("person+paul-tenczar", "Paul Tenczar", {});

  //-------------------------------------------------------------------------------

  lb.define("person+paulo-moura", "Paulo Moura", {});

  //-------------------------------------------------------------------------------

  lb.define("person+pdc-a-slashs", "PDC A/S", {});

  //-------------------------------------------------------------------------------

  lb.define("person+per-bothner", "Per Bothner", {});

  //-------------------------------------------------------------------------------

  lb.define("person+peter-d-schofield", "Peter D. Schofield", {});

  //-------------------------------------------------------------------------------

  lb.define("person+peter-d-stephens", "Peter D. Stephens", {});

  //-------------------------------------------------------------------------------

  lb.define("person+peter-deutsch", "Peter Deutsch", {
    websites: [{ title: "Peter Deutsch", href: "https://en.wikipedia.org/wiki/L._Peter_Deutsch", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+peter-landin", "Peter Landin", {
    websites: [{ title: "Peter Landin", href: "https://en.wikipedia.org/wiki/Peter_Landin", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+peter-robertson", "Peter Robertson", {});

  //-------------------------------------------------------------------------------

  lb.define("person+peter-von-der-ahe", "Peter von der Ahé", {});

  //-------------------------------------------------------------------------------

  lb.define("person+peter-weinberger", "Peter Weinberger", {
    websites: [
      { title: "Peter Weinberger", href: "https://en.wikipedia.org/wiki/Peter_J._Weinberger", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+peter-welch", "Peter Welch", {});

  //-------------------------------------------------------------------------------

  lb.define("person+phil-freeman", "Phil Freeman", {});

  //-------------------------------------------------------------------------------

  lb.define("person+phil-moorby", "Phil Moorby", {
    websites: [{ title: "Phil Moorby", href: "https://en.wikipedia.org/wiki/Phil_Moorby", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+philip-wadler", "Philip Wadler", {
    websites: [{ title: "Philip Wadler", href: "https://en.wikipedia.org/wiki/Philip_Wadler", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+philip-woodward", "Philip Woodward", {
    websites: [{ title: "Philip Woodward", href: "https://en.wikipedia.org/wiki/Philip_Woodward", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+philippe-choquette", "Philippe Choquette", {});

  //-------------------------------------------------------------------------------

  lb.define("person+pierre-yves-strub", "Pierre-Yves Strub", {});

  //-------------------------------------------------------------------------------

  lb.define("person+prabhu-goel", "Prabhu Goel", {
    websites: [{ title: "Prabhu Goel", href: "https://en.wikipedia.org/wiki/Prabhu_Goel", kind: "wikipedia" }],
  });
}
