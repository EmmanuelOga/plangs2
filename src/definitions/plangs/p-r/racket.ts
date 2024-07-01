import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+racket")
    .merge({
      name: "Racket",
      websites: [
        { kind: "wikipedia", title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg" }],
      releases: [{ name: "Racket", version: "8.13", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+scheme"])
    .addInfluence("pl+eiffel", {
      refs: [
        {
          href: "http://www.ccs.neu.edu/racket/pubs/dls10-sf.pdf",
          title: "DLS 2010: Contracts for First-Class Classes",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://blog.racket-lang.org/2019/11/completing-racket-s-relicensing-effort.html",
          title: "Completing Racket's relicensing effort",
        },
      ],
    })
    .addParadigms([
      "para+multi",
      "para+functional",
      "para+imperative",
      "para+logic",
      "para+meta",
      "para+modular",
      "para+objects",
      "para+reflective",
    ])
    .addPlatforms(["platf+x86", "platf+mips", "platf+arm", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

  /**/
}
