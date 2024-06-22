import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+gabriel-hackebeil", "Gabriel Hackebeil", {});

  //-------------------------------------------------------------------------------

  lb.define("person+gary-grossman", "Gary Grossman", {
    websites: [{ title: "Gary Grossman", href: "https://en.wikipedia.org/wiki/Gary_Grossman", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gary-kildall", "Gary Kildall", {
    websites: [{ title: "Gary Kildall", href: "https://en.wikipedia.org/wiki/Gary_Kildall", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gaston-gonnet", "Gaston Gonnet", {
    websites: [{ title: "Gaston Gonnet", href: "https://en.wikipedia.org/wiki/Gaston_Gonnet", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gavin-king", "Gavin King", {});

  //-------------------------------------------------------------------------------

  lb.define("person+gavin-wood", "Gavin Wood", {
    websites: [{ title: "Gavin Wood", href: "https://en.wikipedia.org/wiki/Gavin_Wood", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+ge-wang", "Ge Wang", {
    websites: [{ title: "Ge Wang", href: "https://en.wikipedia.org/wiki/Ge_Wang", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+geoffrey-gordon", "Geoffrey Gordon", {
    websites: [
      {
        title: "Geoffrey Gordon",
        href: "https://en.wikipedia.org/wiki/Geoffrey_Gordon_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+george-j-carrette", "George J. Carrette", {});

  //-------------------------------------------------------------------------------

  lb.define("person+george-mills", "George Mills", {});

  //-------------------------------------------------------------------------------

  lb.define("person+george-zahariev", "George Zahariev", {});

  //-------------------------------------------------------------------------------

  lb.define("person+gerald-j-popek", "Gerald J. Popek", {
    websites: [{ title: "Gerald J. Popek", href: "https://en.wikipedia.org/wiki/Gerald_J._Popek", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gerald-jay-sussman", "Gerald Jay Sussman", {
    websites: [
      { title: "Gerald Jay Sussman", href: "https://en.wikipedia.org/wiki/Gerald_Jay_Sussman", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gerald-sussman", "Gerald Sussman", {
    websites: [{ title: "Gerald Sussman", href: "https://en.wikipedia.org/wiki/Gerald_Sussman", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gerard-huet", "Gérard Huet", {
    websites: [{ title: "Gérard Huet", href: "https://en.wikipedia.org/wiki/G%C3%A9rard_Huet", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gert-smolka", "Gert Smolka", {});

  //-------------------------------------------------------------------------------

  lb.define("person+gilad-bracha", "Gilad Bracha", {
    websites: [{ title: "Gilad Bracha", href: "https://en.wikipedia.org/wiki/Gilad_Bracha", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+giuseppe-attardi", "Giuseppe Attardi", {});

  //-------------------------------------------------------------------------------

  lb.define("person+google-scholar", "Google scholar", {
    websites: [{ title: "Google scholar", href: "https://en.wikipedia.org/wiki/Google_scholar", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+goran-hemdahl", "Göran Hemdahl", {});

  //-------------------------------------------------------------------------------

  lb.define("person+grace-hopper", "Grace Hopper", {
    websites: [{ title: "Grace Hopper", href: "https://en.wikipedia.org/wiki/Grace_Hopper", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+graham-nelson", "Graham Nelson", {
    websites: [{ title: "Graham Nelson", href: "https://en.wikipedia.org/wiki/Graham_Nelson", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+greg-lindhorst", "Greg Lindhorst", {});

  //-------------------------------------------------------------------------------

  lb.define("person+greg-michaelson", "Greg Michaelson", {});

  //-------------------------------------------------------------------------------

  lb.define("person+greg-nelson", "Greg Nelson", {
    websites: [
      {
        title: "Greg Nelson",
        href: "https://en.wikipedia.org/wiki/Greg_Nelson_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+guido-van-rossum", "Guido van Rossum", {
    websites: [
      { title: "Guido van Rossum", href: "https://en.wikipedia.org/wiki/Guido_van_Rossum", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+gustaf-neumann", "Gustaf Neumann", {});

  //-------------------------------------------------------------------------------

  lb.define("person+guy-steele", "Guy Steele", {
    websites: [{ title: "Guy Steele", href: "https://en.wikipedia.org/wiki/Guy_Steele", kind: "wikipedia" }],
  });
}
