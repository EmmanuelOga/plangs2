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
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2019-03-03", kind: "first" },
      ],
      extensions: [".bsq"],
    },
    {
      influences: ["pl+javascript", "pl+typescript", "pl+ml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+typed"],
      people: ["person+mark-marron"],
    },
  );
}
