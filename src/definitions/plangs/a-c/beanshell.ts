import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+beanshell")
    .merge({
      name: "BeanShell",
      websites: [{ kind: "wikipedia", title: "BeanShell", href: "https://en.wikipedia.org/wiki/BeanShell" }],
      releases: [{ name: "BeanShell", version: "2.1.1", date: "2022-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+java"])
    .addInfluences(["pl+java", "pl+javascript", "pl+perl"])
    .addLicenses(["lic+apache", "lic+sun-public", "lic+lgpl"])
    .addParadigms(["para+objects", "para+scripting"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
