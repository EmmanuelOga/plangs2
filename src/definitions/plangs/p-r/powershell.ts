import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+powershell",
    {
      name: "PowerShell",
      websites: [
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/PowerShell" },
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/Windows_PowerShell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
        },
      ],
      releases: [{ version: "7.4.2", date: "2024-01-01", kind: "stable" }],
      extensions: [".cdxml", ".ps1", ".ps1xml", ".psc1", ".psd1", ".psm1", ".psrc", ".pssc"],
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
      people: ["person+jeffrey-snover"],
      licenses: ["lic+mit", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+objects", "para+pipeline", "para+reflective"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+safe", "tsys+strong"],
    },
  );
}
