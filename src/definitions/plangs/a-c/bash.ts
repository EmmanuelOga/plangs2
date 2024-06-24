import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+bash",
    "Bash",
    {
      name: "Bash",
      websites: [
        { kind: "wikipedia", title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
        { kind: "homepage", title: "www.gnu.org/software/bash/", href: "https://www.gnu.org/software/bash/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" }],
      releases: [
        { version: "unknown", date: "1989-01-01", kind: "first" },
        { version: "5.2.21", date: "2023-01-01", kind: "stable" },
      ],
      references: { stable_release: [{ href: "https://ftp.gnu.org/gnu/bash/", title: "bash-5.2.21.tar.gz" }] },
    },
    { licenses: ["lic+gpl"], people: [["person+chet-ramey", "developer"]], platforms: ["platf+gnu"] },
  );

  /**/
}
