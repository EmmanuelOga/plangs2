import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+icon",
    "Icon",
    {
      name: "Icon",
      websites: [
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_programming_language" },
        { kind: "homepage", title: "www.cs.arizona.edu/icon", href: "http://www.cs.arizona.edu/icon" },
        { kind: "wikipedia", title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Panorama_Icon_logo_Mondadori.png/121px-Panorama_Icon_logo_Mondadori.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "9.5.24", date: "2024-01-17", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/gtownsend/icon/commits/master", title: "Update version to 9.5.22e" },
        ],
        influenced: [{ href: "https://github.com/proebsting/goaldi", title: "Goaldi" }],
      },
    },
    {
      dialects: ["pl+unicon"],
      influenced: ["pl+jq", "pl+python", "pl+unicon"],
      influences: ["pl+algol", "pl+snobol"],
      paradigms: ["para+multi", "para+structured"],
      people: [["person+ralph-griswold", "designer"]],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
