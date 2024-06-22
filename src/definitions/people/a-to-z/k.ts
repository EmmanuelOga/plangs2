import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+k-rustan-m-leino", "K. Rustan M. Leino", []);

  //-------------------------------------------------------------------------------

  lb.define("person+karl-glazebrook", "Karl Glazebrook", [
    { title: "Karl Glazebrook", href: "https://en.wikipedia.org/wiki/Karl_Glazebrook", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+karthikeyan-bhargavan", "Karthikeyan Bhargavan", []);

  //-------------------------------------------------------------------------------

  lb.define("person+kathleen-o-brien", "Kathleen O'Brien", []);

  //-------------------------------------------------------------------------------

  lb.define("person+keith-clark", "Keith Clark", [
    { title: "Keith Clark", href: "https://en.wikipedia.org/wiki/Keith_Clark_(computer_scientist)", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+kemal-ebcioglu", "Kemal Ebcioğlu", []);

  //-------------------------------------------------------------------------------

  lb.define("person+ken-thompson", "Ken Thompson", [
    { title: "Ken Thompson", href: "https://en.wikipedia.org/wiki/Ken_Thompson", kind: "wikipedia" },
    {
      title: "Ken Thompson",
      href: "https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+kent-pitman", "Kent Pitman", [
    { title: "Kent Pitman", href: "https://en.wikipedia.org/wiki/Kent_Pitman", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+khang-dao", "Khang Dao", []);

  //-------------------------------------------------------------------------------

  lb.define("person+klaus-samelson", "Klaus Samelson", [
    { title: "Klaus Samelson", href: "https://en.wikipedia.org/wiki/Klaus_Samelson", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+koichi-sasada", "Koichi Sasada", [
    { title: "Koichi Sasada", href: "https://en.wikipedia.org/wiki/Koichi_Sasada", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+konrad-zuse", "Konrad Zuse", [
    { title: "Konrad Zuse", href: "https://en.wikipedia.org/wiki/Konrad_Zuse", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+kostis-sagonas", "Kostis Sagonas", []);

  //-------------------------------------------------------------------------------

  lb.define("person+kristen-nygaard", "Kristen Nygaard", [
    { title: "Kristen Nygaard", href: "https://en.wikipedia.org/wiki/Kristen_Nygaard", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+krzysztof-apt", "Krzysztof Apt", [
    { title: "Krzysztof Apt", href: "https://en.wikipedia.org/wiki/Krzysztof_R._Apt", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("person+kyle-jessup", "Kyle Jessup", []);
}
