import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+crystal",
    "Crystal",
    {
      name: "Crystal",
      websites: [
        { kind: "wikipedia", title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)" },
        { kind: "homepage", title: "crystal-lang.org", href: "https://crystal-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2014-06-19", kind: "first" },
        { version: "1.12.1", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".cr"],
    },
    {
      influences: ["pl+go", "pl+ruby", "pl+c", "pl+rust", "pl+c-sharp", "pl+python"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+objects", "para+concurrent"],
      people: ["person+ary-borenszweig", "person+juan-wajnerman", "person+brian-cardiff"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+aarch64", "platf+linux", "platf+mac", "platf+bsd", "platf+win"],
      typeSystems: ["tsys+static", "tsys+inferred", "tsys+nominative", "tsys+duck"],
    },
  );
}
