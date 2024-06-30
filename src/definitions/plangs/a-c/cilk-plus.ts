import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cilk-plus",
    {
      name: "Cilk Plus",
      websites: [
        { kind: "wikipedia", title: "CilkOpenCilkCilk Plus", href: "https://en.wikipedia.org/wiki/Cilk_Plus" },
        {
          kind: "homepage",
          title: "http://cilkplus.org/",
          href: "https://web.archive.org/web/20210117031010/http://cilkplus.org/",
        },
      ],
      releases: [{ version: "1.2", date: "2013-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+parallel", "para+structured"],
      platforms: ["platf+mac", "platf+unix"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );
}
