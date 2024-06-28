import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cilk-plus",
    "Cilk Plus",
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
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "first" },
        { version: "1.2", date: "2013-09-09", kind: "stable" },
      ],
      references: {
        influenced: [
          { href: "https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.221.2775", title: "10.1.1.221.2775" },
          {
            href: "https://github.com/rayon-rs/rayon/blob/master/FAQ.md#how-does-rayon-balance-work-between-threads",
            title: "Rayon FAQ",
          },
        ],
      },
      extensions: [],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+parallel", "para+structured"],
      platforms: ["platf+mac", "platf+unix"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );
}
