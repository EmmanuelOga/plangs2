import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+lalit-pant", "Lalit Pant", []);

  //-------------------------------------------------------------------------------

  lb.define("person+lambert-meertens", "Lambert Meertens", [
    { title: "Lambert Meertens", href: "https://en.wikipedia.org/wiki/Lambert_Meertens", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+larry-breed", "Larry Breed", [
    { title: "Larry Breed", href: "https://en.wikipedia.org/wiki/Lawrence_M._Breed", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+larry-tesler", "Larry Tesler", [
    { title: "Larry Tesler", href: "https://en.wikipedia.org/wiki/Larry_Tesler", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+larry-wall", "Larry Wall", [
    { title: "Larry Wall", href: "https://en.wikipedia.org/wiki/Larry_Wall", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+lars-bak", "Lars Bak", [
    { title: "Lars Bak", href: "https://en.wikipedia.org/wiki/Lars_Bak_(computer_programmer)", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+lee-e-mcmahon", "Lee E. McMahon", [
    { title: "Lee E. McMahon", href: "https://en.wikipedia.org/wiki/Lee_E._McMahon", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+lennart-augustsson", "Lennart Augustsson", [
    { title: "Lennart Augustsson", href: "https://en.wikipedia.org/wiki/Lennart_Augustsson", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+li-chen-wang", "Li Chen Wang", []);

  //-------------------------------------------------------------------------------

  lb.define("person+lisp-machines", "Lisp Machines", [
    { title: "Lisp Machines", href: "https://en.wikipedia.org/wiki/Lisp_Machines", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+lorinda-cherry", "Lorinda Cherry", [
    { title: "Lorinda Cherry", href: "https://en.wikipedia.org/wiki/Lorinda_Cherry", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+louis-pilfold", "Louis Pilfold", []);

  //-------------------------------------------------------------------------------

  lb.define("person+luca-cardelli", "Luca Cardelli", [
    { title: "Luca Cardelli", href: "https://en.wikipedia.org/wiki/Luca_Cardelli", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+lutz-mueller", "Lutz Mueller", []);
}
