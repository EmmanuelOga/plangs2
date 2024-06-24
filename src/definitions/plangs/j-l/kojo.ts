import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+kojo",
    "The Kojo Learning Environment",
    {
      name: "The Kojo Learning Environment",
      websites: [
        {
          kind: "wikipedia",
          title: "The Kojo Learning Environment",
          href: "https://en.wikipedia.org/wiki/Kojo_(programming_language)",
        },
        { kind: "homepage", title: "www.kogics.net/kojo", href: "http://www.kogics.net/kojo" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kojo-screenshot.png/300px-Kojo-screenshot.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "first" },
        { version: "2.9.24", date: "2023-02-15", kind: "stable" },
      ],
      extensions: [".scala", ".kojo"],
    },
    {
      influences: ["pl+logo", "pl+processing"],
      licenses: ["lic+gpl"],
      paradigms: ["para+functional", "para+objects", "para+structured"],
      people: [["person+lalit-pant", "designer"]],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/
}
