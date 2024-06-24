import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+visual-foxpro",
    "Visual FoxPro",
    {
      name: "Visual FoxPro",
      websites: [
        { kind: "wikipedia", title: "Visual FoxPro", href: "https://en.wikipedia.org/wiki/Visual_FoxPro" },
        { kind: "homepage", title: "msdn.microsoft.com/vfoxpro", href: "http://msdn.microsoft.com/vfoxpro" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/VisualFoxProScreenshot.png/220px-VisualFoxProScreenshot.png",
        },
      ],
      references: {
        final_release: [
          { href: "http://www.microsoft.com/en-us/download/details.aspx?id=13959", title: "Visual FoxPro 9.0 Updates" },
          {
            href: "http://www.microsoft.com/en-us/download/details.aspx?displaylang=en&id=13959",
            title: "Download Microsoft Visual FoxPro 9.0 Service Pack 2.0",
          },
        ],
        operating_system: [{ href: "http://msdn.microsoft.com/en-us/vfoxpro/bb190292", title: "System Requirements" }],
        platform: [{ href: "http://msdn.microsoft.com/en-us/vfoxpro/bb190289", title: "Frequently Asked Questions" }],
      },
    },
    { licenses: ["lic+commercial", "lic+proprietary"], platforms: ["platf+ia-32"] },
  );

  /**/
}
