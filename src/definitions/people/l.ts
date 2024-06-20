import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+Lalit-Pant", "Lalit Pant", []);

  lb.define("person+Lambert-Meertens", "Lambert Meertens", [
    {
      title: "Lambert Meertens",
      href: "https://en.wikipedia.org/wiki/Lambert_Meertens",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Larry-Breed", "Larry Breed", [
    {
      title: "Larry Breed",
      href: "https://en.wikipedia.org/wiki/Lawrence_M._Breed",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Larry-Tesler", "Larry Tesler", [
    {
      title: "Larry Tesler",
      href: "https://en.wikipedia.org/wiki/Larry_Tesler",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Larry-Wall", "Larry Wall", [
    {
      title: "Larry Wall",
      href: "https://en.wikipedia.org/wiki/Larry_Wall",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Lars-Bak", "Lars Bak", [
    {
      title: "Lars Bak",
      href: "https://en.wikipedia.org/wiki/Lars_Bak_(computer_programmer)",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Lee-E-McMahon", "Lee E. McMahon", [
    {
      title: "Lee E. McMahon",
      href: "https://en.wikipedia.org/wiki/Lee_E._McMahon",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Lennart-Augustsson", "Lennart Augustsson", [
    {
      title: "Lennart Augustsson",
      href: "https://en.wikipedia.org/wiki/Lennart_Augustsson",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Li-Chen-Wang", "Li Chen Wang", []);

  lb.define("person+Lisp-Machines", "Lisp Machines", [
    {
      title: "Lisp Machines",
      href: "https://en.wikipedia.org/wiki/Lisp_Machines",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Lorinda-Cherry", "Lorinda Cherry", [
    {
      title: "Lorinda Cherry",
      href: "https://en.wikipedia.org/wiki/Lorinda_Cherry",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Louis-Pilfold", "Louis Pilfold", []);

  lb.define("person+Luca-Cardelli", "Luca Cardelli", [
    {
      title: "Luca Cardelli",
      href: "https://en.wikipedia.org/wiki/Luca_Cardelli",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Lutz-Mueller", "Lutz Mueller", []);
}
