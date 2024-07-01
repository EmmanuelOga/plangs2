import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cilk")
    .merge({
      name: "CilkOpenCilkCilk Plus",
      websites: [
        { kind: "wikipedia", title: "Cilk", href: "https://en.wikipedia.org/wiki/Cilk" },
        {
          kind: "homepage",
          title: "http://cilkplus.org/",
          href: "https://web.archive.org/web/20210117031010/http://cilkplus.org/",
        },
      ],
      releases: [{ name: "CilkOpenCilkCilk Plus", version: "1.2", date: "2013-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c"])
    .addParadigms(["para+imperative", "para+structured", "para+parallel"])
    .addPlatforms(["platf+unix", "platf+mac"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/
}
