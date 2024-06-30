import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+parasail",
    {
      name: "ParaSail",
      websites: [
        { kind: "wikipedia", title: "ParaSail", href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Sparkel",
          href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)#Description",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/c/c1/Logo_for_ParaSail_Programming_Language.jpg",
        },
      ],
      releases: [{ version: "9.3", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ada", "pl+ml", "pl+modula", "pl+pascal"],
      licenses: ["lic+gpl"],
      paradigms: ["para+compiled", "para+concurrent", "para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+linux", "platf+mac", "platf+win", "platf+x86"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );
}
