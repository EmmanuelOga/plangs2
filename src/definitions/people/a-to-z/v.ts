import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+v-olyunin", "V. Olyunin", {});

  //-------------------------------------------------------------------------------

  lb.define("person+vagabondo-enterprises", "Vagabondo Enterprises", {});

  //-------------------------------------------------------------------------------

  lb.define("person+valentin-turchin", "Valentin Turchin", {
    websites: [
      { title: "Valentin Turchin", href: "https://en.wikipedia.org/wiki/Valentin_Turchin", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+van-wijngaarden", "van Wijngaarden", {
    websites: [
      { title: "van Wijngaarden", href: "https://en.wikipedia.org/wiki/Adriaan_van_Wijngaarden", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+vassili-bykov", "Vassili Bykov", {});

  //-------------------------------------------------------------------------------

  lb.define("person+victor-glushkov", "Victor Glushkov", {
    websites: [{ title: "Victor Glushkov", href: "https://en.wikipedia.org/wiki/Victor_Glushkov", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+victor-yngve", "Victor Yngve", {
    websites: [{ title: "Victor Yngve", href: "https://en.wikipedia.org/wiki/Victor_Yngve", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+vijay-mital", "Vijay Mital", {});

  //-------------------------------------------------------------------------------

  lb.define("person+vijay-saraswat", "Vijay Saraswat", {});

  //-------------------------------------------------------------------------------

  lb.define("person+viktor-szakats", "Viktor Szakáts", {});

  //-------------------------------------------------------------------------------

  lb.define("person+viral-b-shah", "Viral B. Shah", {
    websites: [{ title: "Viral B. Shah", href: "https://en.wikipedia.org/wiki/Viral_B._Shah", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("person+vivek-sarkar", "Vivek Sarkar", {});
}
