import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+jython", {
      name: "Jython",
      description:
        "Jython is an implementation of the Python programming language designed to run on the Java platform. It was known as JPython until 1999.",
      websites: [
        { href: "https://www.jython.org/", title: "www.jython.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Jython", title: "Jython", kind: "wikipedia" },
      ],
      releases: [{ version: "2.7.4", date: "2024-01-01" }],
    })
    .addLicenses(["lic+python"])
    .addPlatforms(["platf+cross", "platf+java"])
    .addTags(["tag+interpreter"]);
}
