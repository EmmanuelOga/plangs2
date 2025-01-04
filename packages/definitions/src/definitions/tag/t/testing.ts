import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+testing", {
    name: "Testing",
    description:
      "Tools that automatically execute tests on software to ensure quality and performance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Test_automation",
    keywords: [
      "quality assurance",
      "software testing",
      "test automation",
      "testing",
    ],
  });
}
