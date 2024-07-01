import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+scm")
    .merge({
      name: "SCM",
      websites: [
        { kind: "wikipedia", title: "SCM", href: "https://en.wikipedia.org/wiki/SCM_(Scheme_implementation)" },
      ],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/SCM_64.png" }],
      releases: [{ name: "SCM", version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp", "pl+scheme", "pl+siod"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic", "tsys+latent"]);

  /**/
}
