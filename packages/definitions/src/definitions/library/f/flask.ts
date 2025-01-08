import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+flask", {
      name: "Flask",
      description: "Lightweight WSGI web application framework.",
      extGithubPath: "pallets/flask",
      extHomeURL: "https://flask.palletsprojects.com/",
      githubStars: 68500,
      keywords: ["framework", "web", "wsgi"],
    })
    .relPlangs.add("pl+python");
}
