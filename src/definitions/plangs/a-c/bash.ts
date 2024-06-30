import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+bash")
    .merge({
      name: "Bash",
      websites: [{ kind: "wikipedia", title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" }],
      releases: [{ version: "5.2.21", date: "2023-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+gnu"]);

  /**/
}
