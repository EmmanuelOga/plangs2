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
      influences: ["pl+c", "pl+c-sharp", "pl+go", "pl+ms-visual-c-sharp", "pl+python", "pl+ruby", "pl+rust"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+multi", "para+objects"],
      platforms: ["platf+aarch64", "platf+bsd", "platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+duck", "tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );
}
