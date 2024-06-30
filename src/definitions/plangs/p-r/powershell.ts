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
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
        },
      ],
      releases: [{ version: "7.4.2", date: "2024-01-01", kind: "stable" }],
      extensions: [".ps1", ".ps1xml", ".psc1", ".psd1", ".psm1", ".pssc", ".psrc", ".cdxml"],
    },
    {
      implementations: ["pl+c-sharp"],
      influences: [
        "pl+python",
        "pl+kornshell",
        "pl+perl",
        "pl+c-sharp",
        "pl+control",
        "pl+digital-command",
        "pl+sql",
        "pl+tcl",
        "pl+tk",
        "pl+chef",
        "pl+puppet",
      ],
      licenses: ["lic+mit", "lic+proprietary"],
      paradigms: ["para+imperative", "para+pipeline", "para+objects", "para+functional", "para+reflective"],
      people: ["person+jeffrey-snover"],
      platforms: ["platf+.net"],
      typeSystems: ["tsys+strong", "tsys+safe", "tsys+inferred", "tsys+dynamic"],
    },
  );
}
