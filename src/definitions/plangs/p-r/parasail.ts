import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+parasail",
    "ParaSail",
    {
      name: "ParaSail",
      websites: [
        { kind: "wikipedia", title: "ParaSail", href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Sparkel",
          href: "https://en.wikipedia.org/wiki/ParaSail_(programming_language)#Description",
        },
        { kind: "homepage", title: "parasail-lang.org", href: "http://parasail-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/c/c1/Logo_for_ParaSail_Programming_Language.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "2009-01-01", kind: "first" },
        { version: "9.3", date: "2021-06-06", kind: "stable" },
      ],
      extensions: [".psi", ".psl"],
    },
    {
      influences: ["pl+ada", "pl+modula", "pl+pascal", "pl+ml"],
      licenses: ["lic+gpl"],
      paradigms: ["para+compiled", "para+concurrent", "para+imperative", "para+structured", "para+objects"],
      people: ["person+s-tucker-taft"],
      platforms: ["platf+x86", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+strong", "tsys+static"],
    },
  );
}
