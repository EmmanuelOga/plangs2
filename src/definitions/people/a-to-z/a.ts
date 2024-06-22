import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+a-b-tonik", "A. B. Tonik", {});

  //-------------------------------------------------------------------------------

  lb.define("person+a-k-dewdney", "A. K. Dewdney", {
    websites: [{ title: "A. K. Dewdney", href: "https://en.wikipedia.org/wiki/A._K._Dewdney", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+a-n-habermann", "A. N. Habermann", {
    websites: [{ title: "A. N. Habermann", href: "https://en.wikipedia.org/wiki/Nico_Habermann", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+a-van-wijngaarden", "A. van Wijngaarden", {
    websites: [
      { title: "A. van Wijngaarden", href: "https://en.wikipedia.org/wiki/Adriaan_van_Wijngaarden", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+adele-goldberg", "Adele Goldberg", {
    websites: [
      {
        title: "Adele Goldberg",
        href: "https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+alain-colmerauer", "Alain Colmerauer", {
    websites: [
      { title: "Alain Colmerauer", href: "https://en.wikipedia.org/wiki/Alain_Colmerauer", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+alan-edelman", "Alan Edelman", {
    websites: [{ title: "Alan Edelman", href: "https://en.wikipedia.org/wiki/Alan_Edelman", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+alan-kay", "Alan Kay", {
    websites: [{ title: "Alan Kay", href: "https://en.wikipedia.org/wiki/Alan_Kay", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+alan-perlis", "Alan Perlis", {
    websites: [{ title: "Alan Perlis", href: "https://en.wikipedia.org/wiki/Alan_Perlis", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+albert-graf", "Albert Gräf", {});

  //-------------------------------------------------------------------------------

  lb.define("person+alberto-demichelis", "Alberto Demichelis", {});

  //-------------------------------------------------------------------------------

  lb.define("person+alexander-burger", "Alexander Burger", {});

  //-------------------------------------------------------------------------------

  lb.define("person+alexander-medvednikov", "Alexander Medvednikov", {});

  //-------------------------------------------------------------------------------

  lb.define("person+alexander-repenning", "Alexander Repenning", {
    websites: [
      { title: "Alexander Repenning", href: "https://en.wikipedia.org/wiki/Alexander_Repenning", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+alfred-aho", "Alfred Aho", {
    websites: [{ title: "Alfred Aho", href: "https://en.wikipedia.org/wiki/Alfred_Aho", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+allen-newell", "Allen Newell", {
    websites: [{ title: "Allen Newell", href: "https://en.wikipedia.org/wiki/Allen_Newell", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+alok-menghrajani", "Alok Menghrajani", {});

  //-------------------------------------------------------------------------------

  lb.define("person+anders-hejlsberg", "Anders Hejlsberg", {
    websites: [
      { title: "Anders Hejlsberg", href: "https://en.wikipedia.org/wiki/Anders_Hejlsberg", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+andre-victor", "Andre Victor", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andreas-falkenhahn", "Andreas Falkenhahn", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andreas-raab", "Andreas Raab", {
    websites: [{ title: "Andreas Raab", href: "https://en.wikipedia.org/wiki/Andreas_Raab", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+andreas-rumpf", "Andreas Rumpf", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andrei-alexandrescu", "Andrei Alexandrescu", {
    websites: [
      { title: "Andrei Alexandrescu", href: "https://en.wikipedia.org/wiki/Andrei_Alexandrescu", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+andrew-ireland", "Andrew Ireland", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andrew-kelley", "Andrew Kelley", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andrey-ershov", "Andrey Ershov", {
    websites: [{ title: "Andrey Ershov", href: "https://en.wikipedia.org/wiki/Andrey_Ershov", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+andy-bower", "Andy Bower", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andy-frank", "Andy Frank", {});

  //-------------------------------------------------------------------------------

  lb.define("person+andy-gavin", "Andy Gavin", {
    websites: [{ title: "Andy Gavin", href: "https://en.wikipedia.org/wiki/Andy_Gavin", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+andy-wallace", "Andy Wallace", {});

  //-------------------------------------------------------------------------------

  lb.define("person+aneil-mallavarapu", "Aneil Mallavarapu", {});

  //-------------------------------------------------------------------------------

  lb.define("person+anjo-anjewierden", "Anjo Anjewierden", {});

  //-------------------------------------------------------------------------------

  lb.define("person+anselm-kruis", "Anselm Kruis", {});

  //-------------------------------------------------------------------------------

  lb.define("person+anthony-w-knapp", "Anthony W. Knapp", {
    websites: [
      { title: "Anthony W. Knapp", href: "https://en.wikipedia.org/wiki/Anthony_W._Knapp", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+anton-rapetov", "Anton Rapetov", {});

  //-------------------------------------------------------------------------------

  lb.define("person+antonio-linares", "Antonio Linares", {});

  //-------------------------------------------------------------------------------

  lb.define("person+arkady-dzakrevskij", "Arkady D.Zakrevskij", {});

  //-------------------------------------------------------------------------------

  lb.define("person+arthur-whitney", "Arthur Whitney", {
    websites: [
      {
        title: "Arthur Whitney",
        href: "https://en.wikipedia.org/wiki/Arthur_Whitney_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+ary-borenszweig", "Ary Borenszweig", {});

  //-------------------------------------------------------------------------------

  lb.define("person+aubrey-jaffer", "Aubrey Jaffer", {});
}
