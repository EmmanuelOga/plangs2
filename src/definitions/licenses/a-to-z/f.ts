import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+free-and-open-source", "free and open-source", {
    websites: [
      {
        kind: "wikipedia",
        title: "free and open-source",
        href: "https://en.wikipedia.org/wiki/Free_and_open_source_software",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+freely-redistributable-software", "Freely redistributable software", {
    websites: [
      {
        kind: "wikipedia",
        title: "Freely redistributable software",
        href: "https://en.wikipedia.org/wiki/Freely_redistributable_software",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+freemium", "Freemium", {
    websites: [{ kind: "wikipedia", title: "Freemium", href: "https://en.wikipedia.org/wiki/Freemium" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+frees", "free licenses", {
    websites: [
      { kind: "wikipedia", title: "free licenses", href: "https://en.wikipedia.org/wiki/Free-software_license" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+freeware", "freeware", {
    websites: [{ kind: "wikipedia", title: "freeware", href: "https://en.wikipedia.org/wiki/Freeware" }],
  });
}
