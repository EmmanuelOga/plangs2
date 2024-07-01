import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+qore")
    .merge({
      name: "Qore",
      websites: [
        { kind: "wikipedia", title: "Qore", href: "https://en.wikipedia.org/wiki/Qore_(programming_language)" },
      ],
      releases: [{ name: "Qore", version: "1.16.1", date: "2023-01-01", kind: "stable" }],
      extensions: [".q", ".qm", ".qtest"],
    })
    .addImplementations(["pl+cpp", "pl+pthreads"])
    .addInfluences(["pl+d", "pl+perl", "pl+cpp", "pl+java"])
    .addLicenses(["lic+mit", "lic+gpl", "lic+lgpl"])
    .addParadigms([
      "para+multi",
      "para+thread",
      "para+parallel",
      "para+shared",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+class",
    ])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
