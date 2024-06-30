import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hypercard",
    {
      name: "HyperCard",
      websites: [{ kind: "wikipedia", title: "HyperCard", href: "https://en.wikipedia.org/wiki/HyperCard" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/ee/HyperCard_2-icon.png" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+mac"] },
  );
}
