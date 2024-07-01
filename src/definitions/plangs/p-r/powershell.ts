import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+powershell")
    .merge({
      name: "PowerShell",
      websites: [
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/PowerShell" },
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/Windows_PowerShell" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
        },
      ],
      releases: [{ name: "PowerShell", version: "7.4.2", date: "2024-01-01", kind: "stable" }],
      extensions: [".cdxml", ".ps1", ".ps1xml", ".psc1", ".psd1", ".psm1", ".psrc", ".pssc"],
    })
    .addImplementations(["pl+c-sharp"])
    .addInfluences([
      "pl+python",
      "pl+kornshell",
      "pl+perl",
      "pl+c-sharp",
      "pl+control",
      "pl+digital-command",
      "pl+chef",
      "pl+puppet",
    ])
    .addInfluence("pl+sql", {
      refs: [
        {
          href: "https://arstechnica.com/business/news/2005/10/msh.ars/4",
          title: "A guided tour of the Microsoft Command Shell",
        },
      ],
    })
    .addInfluence("pl+tcl", {
      refs: [
        {
          href: "https://web.archive.org/web/20081225093003/http://blogs.msdn.com/powershell/archive/2008/05/25/powershell-and-wpf-wtf.aspx",
          title: "PowerShell and WPF: WTF",
        },
      ],
    })
    .addInfluence("pl+tk", {
      refs: [
        {
          href: "https://blogs.msdn.microsoft.com/powershell/2008/05/25/powershell-and-wpf-wtf/",
          title: "PowerShell and WPF: WTF",
        },
      ],
    })
    .addPerson("person+jeffrey-snover", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addLicense("lic+mit", {
      refs: [{ href: "https://github.com/PowerShell/PowerShell", title: "PowerShell for every system!" }],
    })
    .addParadigms(["para+imperative", "para+pipeline", "para+objects", "para+functional", "para+reflective"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+strong", "tsys+safe", "tsys+inferred", "tsys+dynamic"]);

  /**/
}
