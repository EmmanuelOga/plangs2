import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+flask", {
      name: "Flask",
      description: "Lightweight WSGI web application framework.",
      extHomeURL: "https://flask.palletsprojects.com/",
      keywords: ["framework", "web", "wsgi"],
    })
    .relPlangs.add("pl+python");
}
