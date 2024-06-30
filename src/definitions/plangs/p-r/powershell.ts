import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+powershell").merge({
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
  });
}
