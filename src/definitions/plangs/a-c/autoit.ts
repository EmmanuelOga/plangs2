import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+autoit",
    "AutoIt",
    {
      name: "AutoIt",
      websites: [
        { kind: "wikipedia", title: "AutoIt", href: "https://en.wikipedia.org/wiki/AutoIt" },
        { kind: "homepage", title: "www.autoitscript.com", href: "https://www.autoitscript.com" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Autoitlogo.png/121px-Autoitlogo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "3.3.16.1", date: "2022-09-19", kind: "stable" },
        { version: "3.3.16.1", date: "2022-06-09", kind: "preview" },
      ],
      references: {
        stable_release: [{ href: "https://www.autoitscript.com/site/autoit/downloads/", title: "AutoIt Downloads" }],
        preview_release: [
          {
            href: "https://www.autoitscript.com/forum/topic/208263-autoit-33161-release-candidate/?do=findComment&comment=1503008",
            title: "AutoIt 3.3.16.1 Release Candidate",
          },
        ],
      },
      extensions: [".au3"],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+freeware"],
      paradigms: ["para+functional", "para+imperative", "para+reflective"],
      people: [["person+jonathan-bennett", { role: "designer" }]],
      platforms: ["platf+ia-32", "platf+win", "platf+x64"],
    },
  );
}
