import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+oxygene",
    "Oxygene",
    {
      name: "Oxygene",
      websites: [
        { kind: "wikipedia", title: "Oxygene", href: "https://en.wikipedia.org/wiki/Oxygene_(programming_language)" },
        {
          kind: "homepage",
          title: "elementscompiler.com/elements/oxygene/",
          href: "https://elementscompiler.com/elements/oxygene/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Chrome-128.png/121px-Chrome-128.png",
        },
      ],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20180105180341/https://www.elementscompiler.com/elements/oxygene/history.aspx",
            title: "Evolution of the Oxygene Language | Oxygene | Elements",
          },
        ],
      },
      releases: [{ version: "unknown", date: "2005-01-01", kind: "first" }],
    },
    {
      dialects: ["pl+object-pascal"],
      influenced: ["pl+pascal"],
      influences: ["pl+c-sharp", "pl+delphi", "pl+object-pascal"],
      licenses: ["lic+trialware"],
      platforms: ["platf+.net", "platf+jvm", "platf+linux", "platf+wasm", "platf+win"],
    },
  );

  /**/
}
