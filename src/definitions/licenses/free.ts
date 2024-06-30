import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+academic-free", "Academic Free License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Academic Free License",
        href: "https://en.wikipedia.org/wiki/Academic_Free_License",
      },
    ],
  });

  lb.define("lic+free", "free licenses", {
    websites: [
      { kind: "wikipedia", title: "free licenses", href: "https://en.wikipedia.org/wiki/Free-software_license" },
      { kind: "wikipedia", title: "Free software", href: "https://en.wikipedia.org/wiki/Free_software" },
    ],
  });

  lb.define("lic+free-and-open-source", "free and open-source", {
    websites: [
      {
        kind: "wikipedia",
        title: "free and open-source",
        href: "https://en.wikipedia.org/wiki/Free_and_open_source_software",
      },
    ],
  });

  lb.define("lic+freely-redistributable", "Freely redistributable software", {
    websites: [
      {
        kind: "wikipedia",
        title: "Freely redistributable software",
        href: "https://en.wikipedia.org/wiki/Freely_redistributable_software",
      },
    ],
  });

  lb.define("lic+freemium", "Freemium", {
    websites: [{ kind: "wikipedia", title: "Freemium", href: "https://en.wikipedia.org/wiki/Freemium" }],
  });

  lb.define("lic+freeware", "freeware", {
    websites: [{ kind: "wikipedia", title: "freeware", href: "https://en.wikipedia.org/wiki/Freeware" }],
  });

  lb.define("lic+permissive-free", "Permissive free software", {
    websites: [
      {
        kind: "wikipedia",
        title: "Permissive free software",
        href: "https://en.wikipedia.org/wiki/Permissive_free_software_license",
      },
    ],
  });

  lb.define("lic+permissive-free-licence", "Permissive free software licence", {
    websites: [
      {
        kind: "wikipedia",
        title: "Permissive free software licence",
        href: "https://en.wikipedia.org/wiki/Permissive_free_software_licence",
      },
    ],
  });

  lb.define("lic+xfree86", "XFree86", {
    websites: [{ kind: "wikipedia", title: "XFree86", href: "https://en.wikipedia.org/wiki/XFree86_License" }],
  });
}
