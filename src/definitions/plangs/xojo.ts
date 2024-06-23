import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xojo",
    "Xojo",
    {
      name: "Xojo",
      websites: [
        { kind: "wikipedia", title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo" },
        { kind: "homepage", title: "xojo.com", href: "http://xojo.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg" }],
      references: { stable_release: [{ href: "https://www.xojo.com/download/", title: "Xojo: Downloads" }] },
      releases: [{ version: "3.1", date: "2023-10-25", kind: "stable" }],
    },
    { influenced: ["pl+basic", "pl+visual-basic"], licenses: ["lic+freemium"] },
  );

  /**/
}
