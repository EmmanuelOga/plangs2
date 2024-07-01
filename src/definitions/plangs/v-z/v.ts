import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+v")
    .merge({
      name: "V",
      websites: [
        { kind: "wikipedia", title: "V (Vlang)", href: "https://en.wikipedia.org/wiki/V_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" }],
      releases: [{ name: "V", version: "0.4.5", date: "2024-01-01", kind: "stable" }],
      extensions: [".v", ".vsh"],
    })
    .addInfluences(["pl+c", "pl+go", "pl+kotlin", "pl+oberon", "pl+python", "pl+rust"])
    .addInfluence("pl+swift", {
      refs: [
        {
          href: "https://github.com/vlang/v/blob/master/doc/docs.md#introduction",
          title: "influenced by - V documentation",
        },
      ],
    })
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+structured", "para+concurrent"])
    .addPlatforms(["platf+x86-64", "platf+linux", "platf+mac", "platf+win", "platf+bsd"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
