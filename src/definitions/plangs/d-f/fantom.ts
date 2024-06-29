import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+fantom",
    "Fantom",
    {
      name: "Fantom",
      websites: [
        { kind: "wikipedia", title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)" },
        { kind: "homepage", title: "www.fantom.org", href: "http://www.fantom.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png" }],
      references: {
        first_appeared: [{ href: "http://fantom.org/sidewalk/topic/355", title: "Blog post about history of Fantom" }],
        stable_release: [{ href: "https://www.fantom.org/forum/topic/2892", title: "Fantom" }],
        license: [{ href: "http://fantom.org/doc/docIntro/Faq.html", title: "FAQ of Fandoc language website" }],
      },
      releases: [
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "1.0.79", date: "2023-07-17", kind: "stable" },
      ],
      extensions: [".fan", ".fwt", ".pod"],
    },
    {
      influences: ["pl+c-sharp", "pl+erlang", "pl+java", "pl+ruby", "pl+scala"],
      licenses: ["lic+academic-free"],
      paradigms: ["para+multi"],
      people: [
        ["person+andy-frank", { role: "developer" }],
        ["person+brian-frank", { role: "developer" }],
      ],
      typeSystems: ["tsys+dynamic", "tsys+static"],
    },
  );
}
