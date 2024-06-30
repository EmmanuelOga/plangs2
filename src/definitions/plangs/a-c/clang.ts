import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+clang").merge({
    name: "Clang",
    websites: [{ kind: "wikipedia", title: "Clang", href: "https://en.wikipedia.org/wiki/Clang" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Clang_13.0.1_version_information_screenshot.png/220px-Clang_13.0.1_version_information_screenshot.png",
      },
    ],
    releases: [{ version: "18.1.6", date: "2024-01-01", kind: "stable" }],
  });
}
