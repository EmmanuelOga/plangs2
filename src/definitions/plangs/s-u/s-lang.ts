import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+s-lang",
    "S-Lang",
    {
      name: "S-Lang",
      websites: [
        { kind: "wikipedia", title: "S-Lang", href: "https://en.wikipedia.org/wiki/S-Lang" },
        { kind: "homepage", title: "www.jedsoft.org/slang/", href: "https://www.jedsoft.org/slang/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/JED-editor-slang-source.png/220px-JED-editor-slang-source.png",
        },
      ],
      references: {
        developers: [
          {
            href: "https://web.archive.org/web/20200601010922/https://www.jedsoft.org/aboutme.html",
            title: "A little bit about me",
          },
        ],
        stable_release: [{ href: "https://www.jedsoft.org/releases/slang/", title: "slang releases" }],
        license: [
          {
            href: "https://web.archive.org/web/20200601011204/http://jedsoft.org/slang/license.html",
            title: "S-Lang Software License Information",
          },
        ],
      },
      releases: [{ version: "2.3.3", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], people: [["person+john-e-davis", "developer"]] },
  );

  /**/
}
