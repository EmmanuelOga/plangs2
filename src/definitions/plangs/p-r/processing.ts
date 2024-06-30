import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+processing",
    {
      name: "ProcessingProcessing IDE",
      websites: [
        {
          kind: "wikipedia",
          title: "Processing",
          href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" }],
      releases: [{ version: "4.3", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c"],
      people: ["person+ben-fry", "person+casey-reas"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+objects"],
    },
  );
}
