import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+kawa")
    .merge({
      name: "Kawa",
      websites: [
        { kind: "wikipedia", title: "Kawa", href: "https://en.wikipedia.org/wiki/Kawa_(Scheme_implementation)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kawa-logo.svg" }],
      releases: [{ name: "Kawa", version: "3.1.1", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+java", "pl+scheme"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"]);

  /**/
}
