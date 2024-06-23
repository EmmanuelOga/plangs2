import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+visual-basic",
    "Visual Basic",
    {
      name: "Visual Basic",
      websites: [
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic" },
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)" },
        {
          kind: "homepage",
          title:
            "learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
          href: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Visual_Basic_6.0_logo.png/210px-Visual_Basic_6.0_logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+microsoft-visual-studio"],
      influenced: ["pl+basic", "pl+basic4ppc", "pl+gambas", "pl+visual-basic-for-applications"],
      influences: [
        "pl+basic",
        "pl+basic4android",
        "pl+basic4ppc",
        "pl+gambas",
        "pl+microsoft-basic",
        "pl+ns-basic",
        "pl+qbasic",
        "pl+visual-basic-.net",
        "pl+visual-basic-for-applications",
        "pl+windows-forms",
        "pl+xojo",
      ],
      paradigms: ["para+event", "para+objects"],
      platforms: ["platf+dos", "platf+windows"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/
}
