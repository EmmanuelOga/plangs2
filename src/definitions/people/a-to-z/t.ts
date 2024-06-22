import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ted-kaehler", "Ted Kaehler", {
    websites: [{ title: "Ted Kaehler", href: "https://en.wikipedia.org/wiki/Ted_Kaehler", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+terrance-swift", "Terrance Swift", {});

  /**/

  lb.define("person+terry-winograd", "Terry Winograd", {});

  /**/

  lb.define("person+tetsuo-yokoyama", "Tetsuo Yokoyama", {});

  /**/

  lb.define("person+the-byte-works", "The Byte Works", {
    websites: [{ title: "The Byte Works", href: "https://en.wikipedia.org/wiki/The_Byte_Works", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+theo-d-hondt", "Theo D'Hondt", {});

  /**/

  lb.define("person+thinking-machines", "Thinking Machines", {
    websites: [
      {
        title: "Thinking Machines",
        href: "https://en.wikipedia.org/wiki/Thinking_Machines_Corporation",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("person+thom-fruhwirth", "Thom Frühwirth", {});

  /**/

  lb.define("person+thomas-e-kurtz", "Thomas E. Kurtz", {
    websites: [{ title: "Thomas E. Kurtz", href: "https://en.wikipedia.org/wiki/Thomas_E._Kurtz", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+thomas-enebo", "Thomas Enebo", {});

  /**/

  lb.define("person+thomas-mertes", "Thomas Mertes", {});

  /**/

  lb.define("person+tim-burks", "Tim Burks", {});

  /**/

  lb.define("person+tim-sweeney", "Tim Sweeney", {
    websites: [{ title: "Tim Sweeney", href: "https://en.wikipedia.org/wiki/Tim_Sweeney", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+tom-duff", "Tom Duff", {
    websites: [{ title: "Tom Duff", href: "https://en.wikipedia.org/wiki/Tom_Duff", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+tom-lord", "Tom Lord", {});

  /**/

  lb.define("person+tom-van-cutsem", "Tom Van Cutsem", {});

  /**/

  lb.define("person+tony-brooker", "Tony Brooker", {
    websites: [{ title: "Tony Brooker", href: "https://en.wikipedia.org/wiki/Tony_Brooker", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+tony-hoare", "Tony Hoare", {
    websites: [{ title: "Tony Hoare", href: "https://en.wikipedia.org/wiki/Tony_Hoare", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+trevor-hastie", "Trevor Hastie", {
    websites: [{ title: "Trevor Hastie", href: "https://en.wikipedia.org/wiki/Trevor_Hastie", kind: "wikipedia" }],
  });

  /**/

  lb.define("person+troels-henriksen", "Troels Henriksen", {});

  /**/
}
