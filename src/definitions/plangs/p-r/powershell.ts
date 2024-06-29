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
        { version: "unknown", kind: "stable" },
        { version: "7.4.2", date: "2024-04-11", kind: "stable" },
      ],
      extensions: [],
    },
    {
      implementations: ["pl+c-sharp"],
      influences: [
        "pl+sql",
        "pl+tcl",
        "pl+python",
        "pl+kornshell",
        "pl+perl",
        "pl+c-sharp",
        "pl+control",
        "pl+digital-command",
        "pl+tk",
        "pl+chef",
        "pl+puppet",
      ],
      licenses: ["lic+mit", "lic+proprietary"],
      paradigms: ["para+imperative", "para+pipeline", "para+objects", "para+functional", "para+reflective"],
      people: ["person+jeffrey-snover"],
      platforms: ["platf+.net", "platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+strong", "tsys+safe", "tsys+inferred", "tsys+dynamic"],
    },
  );
}
