import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ezhil",
    "Ezhil",
    {
      name: "Ezhil",
      websites: [
        { kind: "wikipedia", title: "Ezhil", href: "https://en.wikipedia.org/wiki/Ezhil_(programming_language)" },
        { kind: "homepage", title: "ezhillang.org", href: "http://ezhillang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Ezhil_-_A_Tamil_Programming_Language_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "0.99", date: "2017-08-23", kind: "stable" },
        { version: "unknown", date: "2021-03-14", kind: "preview" },
      ],
      extensions: [".n"],
    },
    {
      influences: ["pl+logo", "pl+basic", "pl+python"],
      licenses: ["lic+gpl"],
      paradigms: ["para+interpreted", "para+imperative", "para+structured"],
      people: ["person+google-scholar"],
      platforms: ["platf+linux", "platf+win", "platf+mac", "platf+python", "platf+pip"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );
}
