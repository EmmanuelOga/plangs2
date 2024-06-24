import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+powershell",
    "PowerShell",
    {
      name: "PowerShell",
      websites: [
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/PowerShell" },
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/Windows_PowerShell" },
        { kind: "homepage", title: "microsoft.com/powershell", href: "https://microsoft.com/powershell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2006-11-14", kind: "first" },
        { version: "7.4.2", date: "2024-04-11", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://github.com/PowerShell/PowerShell/releases/tag/v7.4.2",
            title: "Release v7.4.2 Release of PowerShell · PowerShell/PowerShell",
          },
        ],
        license: [{ href: "https://github.com/PowerShell/PowerShell", title: "PowerShell for every system!" }],
        influenced_by: [
          {
            href: "https://blogs.msdn.microsoft.com/powershell/2008/05/25/powershell-and-wpf-wtf/",
            title: "PowerShell and WPF: WTF",
          },
        ],
      },
      extensions: [],
    },
    {
      implementations: ["pl+c-sharp"],
      influences: [
        "pl+c-sharp",
        "pl+chef",
        "pl+control",
        "pl+digital-command",
        "pl+kornshell",
        "pl+perl",
        "pl+puppet",
        "pl+python",
        "pl+sql",
        "pl+tcl",
        "pl+tk",
      ],
      licenses: ["lic+mit", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+objects", "para+pipeline", "para+reflective"],
      people: [["person+jeffrey-snover", "designer"]],
      platforms: ["platf+.net", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+safe", "tsys+strong"],
    },
  );

  /**/
}
