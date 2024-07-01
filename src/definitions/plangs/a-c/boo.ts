import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+boo")
    .merge({
      name: "Boo",
      websites: [{ kind: "wikipedia", title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BooLogo.png" }],
      releases: [{ name: "Boo", version: "0.9.7", date: "2013-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c-sharp"])
    .addInfluences(["pl+c-sharp", "pl+python"])
    .addLicense("lic+bsd-s", {
      refs: [{ href: "https://github.com/bamboo/boo/blob/master/license.txt", title: "license.txt" }],
    })
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+.net", "platf+mono"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred", "tsys+duck"]);

  /**/
}
