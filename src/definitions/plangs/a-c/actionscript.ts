import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+actionscript",
    "ActionScript",
    {
      name: "ActionScript",
      websites: [
        { kind: "wikipedia", title: "ActionScript", href: "https://en.wikipedia.org/wiki/ActionScript" },
        {
          kind: "homepage",
          title: "adobe.com/devnet/actionscript/",
          href: "https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/ActionScript_icon.png/121px-ActionScript_icon.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "3.0", date: "2006-06-27", kind: "stable" },
      ],
      references: {
        influenced: [
          {
            href: "https://javascript.plainenglish.io/how-actionscript-foreshadowed-typescript-149cdb764de9",
            title: "How ActionScript foreshadowed TypeScript",
          },
        ],
        internet_media_type: [{ href: "https://datatracker.ietf.org/doc/html/rfc4329", title: "4329" }],
      },
      extensions: [],
    },
    {
      implementations: ["pl+adobe-air", "pl+adobe-flash-player", "pl+apache-flex", "pl+scaleform-gfx"],
      influences: ["pl+hypertalk", "pl+java", "pl+javascript"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+prototypes",
        "para+scripting",
      ],
      people: [["person+gary-grossman", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );
}
