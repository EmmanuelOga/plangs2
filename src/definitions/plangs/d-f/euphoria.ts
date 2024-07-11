import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+euphoria")
    .merge({
      name: "Euphoria",
      websites: [
        { kind: "wikipedia", title: "Euphoria", href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png" }],
      releases: [{ name: "Euphoria", version: "4.1.0", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+imperative"])
    .addPlatforms(["platf+cross-platform", "platf+win", "platf+linux", "platf+mac", "platf+bsd"]);

  /**/
}
