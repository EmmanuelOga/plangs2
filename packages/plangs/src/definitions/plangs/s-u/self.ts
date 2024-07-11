import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+self")
    .merge({
      name: "Self",
      websites: [
        { kind: "wikipedia", title: "Self", href: "https://en.wikipedia.org/wiki/Self_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg" }],
      releases: [{ name: "Self", version: "2017.1", date: "2017-01-01", kind: "stable" }],
    })
    .addDialects(["pl+newspeak"])
    .addInfluences(["pl+smalltalk"])
    .addInfluence("pl+apl", {
      refs: [{ href: "https://doi.org/10.1145%2F1238844.1238853", title: "10.1145/1238844.1238853" }],
    })
    .addPerson("person+david-ungar", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+objects", "para+prototypes"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
