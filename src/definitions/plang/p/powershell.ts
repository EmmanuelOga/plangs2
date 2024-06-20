import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PowerShell" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "PowerShell";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "PowerShell",
    "href": "https://en.wikipedia.org/wiki/PowerShell"
  },
  {
    "kind": "wikipedia",
    "title": "PowerShell",
    "href": "https://en.wikipedia.org/wiki/Windows_PowerShell"
  },
  {
    "kind": "homepage",
    "title": "microsoft.com/powershell",
    "href": "https://microsoft.com/powershell"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Jeffrey-Snover","designer"]]);

   plb.addLicenses(pl, ["license+mit","license+proprietary"]);

   plb.addParadigms(pl, [
  "para+functional",
  "para+imperative",
  "para+objects",
  "para+pipeline",
  "para+reflective"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+inferred","tsys+safe","tsys+strong"]);

   plb.addPlatforms(pl, [
  "platf+.NET",
  "platf+.NET-Framework",
  "platf+CentOS",
  "platf+Debian",
  "platf+Fedora",
  "platf+Red-Hat-Enterprise-Linux",
  "platf+Ubuntu",
  "platf+Windows-7",
  "platf+Windows-Server-2008-R2",
  "platf+macOS-10.12",
  "platf+openSUSE"
]);

   plb.addImplementations(pl, ["pl+C-Sharp"]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+C-Sharp",
  "pl+CL",
  "pl+Chef",
  "pl+DCL",
  "pl+Ksh",
  "pl+Perl",
  "pl+Puppet",
  "pl+Python",
  "pl+SQL",
  "pl+Tcl",
  "pl+Tk"
]);

   plb.addInfluenced(pl, ["pl+SQL--Structured-Query-Language-","pl+Tcl"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2006-11-14",
    "kind": "first"
  },
  {
    "version": "7.4.2",
    "date": "2024-04-11",
    "kind": "stable"
  }
]);
}