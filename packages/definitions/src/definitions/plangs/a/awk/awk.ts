import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+awk", {
      name: "AWK",
      description:
        "AWK (/ɔːk/) is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. Like sed and grep, it is a filter, and is a standard feature of most Unix-like operating systems.",
      firstAppeared: "1977-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/AWK_programming_language", title: "AWK", kind: "wikipedia" }],
      images: [{ kind: "other", title: "AWK", url: "/images/plangs/a/awk/other.png" }],
    })
    .addInfluencedBy(["pl+c", "pl+sed"])
    .addParadigms(["para+data-driven", "para+procedural", "para+scripting"])
    .addPlatforms(["platf+cross"]);
}
