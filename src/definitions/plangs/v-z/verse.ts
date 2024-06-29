import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+verse",
    "Verse",
    {
      name: "Verse",
      websites: [
        { kind: "wikipedia", title: "Verse", href: "https://en.wikipedia.org/wiki/Verse_(programming_language)" },
        {
          kind: "homepage",
          title: "dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
          href: "https://dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
        },
      ],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "first" }],
      extensions: [],
    },
    {
      implementations: ["pl+uefn", "pl+visual-studio-code"],
      influences: ["pl+lambda-calculus"],
      paradigms: ["para+objects"],
      people: ["person+simon-peyton-jones", "person+tim-sweeney", "person+lennart-augustsson", "person+guy-steele"],
      typeSystems: ["tsys+strong"],
    },
  );
}
