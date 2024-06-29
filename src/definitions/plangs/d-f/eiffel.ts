import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+eiffel",
    "Eiffel",
    {
      name: "Eiffel",
      websites: [
        { kind: "wikipedia", title: "Eiffel", href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)" },
        { kind: "homepage", title: "eiffel.org", href: "http://eiffel.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Eiffel_logo.svg" }],
      references: {
        first_appeared: [{ href: "https://archive.eiffel.com/eiffel/nutshell.html", title: "Eiffel in a Nutshell" }],
        stable_release: [
          { href: "https://www.eiffel.org/blog/eiffelstudio_23_09", title: "EiffelStudio 23.09 is available!" },
        ],
      },
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", date: "2023-10-06", kind: "stable" },
      ],
      extensions: [".e"],
    },
    {
      implementations: ["pl+eiffelstudio", "pl+libertyeiffel", "pl+smarteiffel", "pl+visual-eiffel"],
      influences: ["pl+ada", "pl+simula", "pl+simula-67", "pl+z-notation"],
      paradigms: ["para+class", "para+concurrent", "para+generic", "para+objects"],
      people: [["person+bertrand-meyer", { role: "designer" }]],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static"],
    },
  );
}
