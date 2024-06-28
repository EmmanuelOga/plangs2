import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+bosque",
    "Bosque",
    {
      name: "Bosque",
      websites: [
        { kind: "wikipedia", title: "Bosque", href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)" },
        {
          kind: "homepage",
          title: "www.microsoft.com/en-us/research/project/bosque-programming-language/",
          href: "https://www.microsoft.com/en-us/research/project/bosque-programming-language/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png",
        },
      ],
      references: {
        first_appeared: [{ href: "https://github.com/Microsoft/BosqueLanguage", title: "BosqueLanguage" }],
        filename_extensions: [
          { href: "https://bosque-lang.com/docs/using-bosque/", title: "Using Bosque - Bosque Programming Language" },
        ],
      },
      releases: [{ version: "unknown", date: "2019-03-03", kind: "first" }],
      extensions: [".bsq"],
    },
    {
      influences: ["pl+javascript", "pl+ml", "pl+typescript"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+multi", "para+typed"],
      people: [["person+mark-marron", "designer"]],
    },
  );
}
