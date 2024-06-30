import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+crystal")
    .merge({
      name: "Crystal",
      websites: [
        { kind: "wikipedia", title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg" }],
      releases: [{ name: "Crystal", version: "1.12.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+ruby", "pl+c", "pl+rust", "pl+go", "pl+python"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+concurrent"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+linux", "platf+mac", "platf+bsd"])
    .addPlatform("platf+aarch64", {
      refs: [{ href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" }],
    })
    .addPlatform("platf+win", {
      refs: [{ href: "https://crystal-lang.org/reference/platform_support.html", title: "Crystal Platform Support" }],
    })
    .addTypeSystems(["tsys+static", "tsys+inferred", "tsys+nominative", "tsys+duck"]);

  /**/
}
