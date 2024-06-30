import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+bourne-shell", "Bourne shell", {
    name: "Bourne shell",
    websites: [{ kind: "wikipedia", title: "Bourne shell", href: "https://en.wikipedia.org/wiki/Bourne_shell" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png/220px-Version_7_UNIX_SIMH_PDP11_Kernels_Shell.png",
      },
    ],
  });
}
