import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+academic-free").merge({
    name: "Academic Free License",
    websites: [
      {
        kind: "wikipedia",
        title: "Academic Free License",
        href: "https://en.wikipedia.org/wiki/Academic_Free_License",
      },
    ],
  });

  /**/
  g.buildLicense("lic+free").merge({
    name: "free licenses",
    websites: [
      { kind: "wikipedia", title: "free licenses", href: "https://en.wikipedia.org/wiki/Free-software_license" },
      { kind: "wikipedia", title: "Free software", href: "https://en.wikipedia.org/wiki/Free_software" },
    ],
  });

  /**/
  g.buildLicense("lic+free-and-open-source").merge({
    name: "free and open-source",
    websites: [
      {
        kind: "wikipedia",
        title: "free and open-source",
        href: "https://en.wikipedia.org/wiki/Free_and_open_source_software",
      },
    ],
  });

  /**/
  g.buildLicense("lic+freely-redistributable").merge({
    name: "Freely redistributable software",
    websites: [
      {
        kind: "wikipedia",
        title: "Freely redistributable software",
        href: "https://en.wikipedia.org/wiki/Freely_redistributable_software",
      },
    ],
  });

  /**/
  g.buildLicense("lic+freemium").merge({
    name: "Freemium",
    websites: [{ kind: "wikipedia", title: "Freemium", href: "https://en.wikipedia.org/wiki/Freemium" }],
  });

  /**/
  g.buildLicense("lic+freeware").merge({
    name: "freeware",
    websites: [{ kind: "wikipedia", title: "freeware", href: "https://en.wikipedia.org/wiki/Freeware" }],
  });

  /**/
  g.buildLicense("lic+permissive-free").merge({
    name: "Permissive free software",
    websites: [
      {
        kind: "wikipedia",
        title: "Permissive free software",
        href: "https://en.wikipedia.org/wiki/Permissive_free_software_license",
      },
    ],
  });

  /**/
  g.buildLicense("lic+permissive-free-licence").merge({
    name: "Permissive free software licence",
    websites: [
      {
        kind: "wikipedia",
        title: "Permissive free software licence",
        href: "https://en.wikipedia.org/wiki/Permissive_free_software_licence",
      },
    ],
  });

  /**/
  g.buildLicense("lic+xfree86").merge({
    name: "XFree86",
    websites: [{ kind: "wikipedia", title: "XFree86", href: "https://en.wikipedia.org/wiki/XFree86_License" }],
  });

  /**/
}
