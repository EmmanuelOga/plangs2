import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+crystal",
    {
      name: "Crystal",
      websites: [
        { kind: "wikipedia", title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg" }],
      releases: [{ version: "1.12.1", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c-sharp", "pl+ruby", "pl+c", "pl+rust", "pl+go", "pl+python", "pl+ms-visual-c-sharp"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+concurrent"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+aarch64", "platf+linux", "platf+mac", "platf+bsd", "platf+win"],
      typeSystems: ["tsys+static", "tsys+inferred", "tsys+nominative", "tsys+duck"],
    },
  );
}
