import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+algol-68",
    "ALGOL 68",
    {
      name: "ALGOL 68",
      websites: [{ kind: "wikipedia", title: "ALGOL 68", href: "https://en.wikipedia.org/wiki/ALGOL_68" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Algol68RevisedReportCover.jpg/121px-Algol68RevisedReportCover.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1968-01-01", kind: "first" },
        { version: "unknown", date: "1973-01-01", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+algol-68-r", "pl+algol-68c", "pl+algol-68rs", "pl+algol-68s", "pl+flacc", "pl+odra"],
      influenced: [
        "pl+abc",
        "pl+ada",
        "pl+c",
        "pl+c-plus-plus",
        "pl+draco",
        "pl+elan",
        "pl+python",
        "pl+rtl-slash2",
        "pl+s3",
        "pl+seed7",
        "pl+tmg",
      ],
      influences: ["pl+algol-60", "pl+algol-y"],
      paradigms: ["para+concurrent", "para+imperative", "para+multi"],
      people: [
        ["person+a-van-wijngaarden", "designer"],
        ["person+b-j-mailloux", "designer"],
        ["person+c-h-a-koster", "designer"],
        ["person+j-e-l-peck", "designer"],
      ],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/
}
