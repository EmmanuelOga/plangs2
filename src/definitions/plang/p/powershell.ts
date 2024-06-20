import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PowerShell";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PowerShell" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PowerShell",
			href: "https://en.wikipedia.org/wiki/PowerShell",
		},
		{
			kind: "wikipedia",
			title: "PowerShell",
			href: "https://en.wikipedia.org/wiki/Windows_PowerShell",
		},
		{
			kind: "homepage",
			title: "microsoft.com/powershell",
			href: "https://microsoft.com/powershell",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Jeffrey-Snover", "designer"]]);

	plb.addLicenses(["license+MIT-License", "license+proprietary"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+object-oriented",
		"para+pipeline",
		"para+reflective",
	]);

	plb.addTypeSystems([
		"tsys+dynamic",
		"tsys+inferred",
		"tsys+safe",
		"tsys+strong",
	]);

	plb.addPlatforms([
		"platf+CentOS",
		"platf+Debian",
		"platf+Fedora",
		"platf+Red-Hat-Enterprise-Linux",
		"platf+Ubuntu",
		"platf+Windows-7",
		"platf+Windows-Server-2008-R2",
		"platf+dotNET",
		"platf+dotNET-Framework",
		"platf+macOS-10dot12",
		"platf+openSUSE",
	]);

	plb.addImplementations(["pl+CSharp"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CL",
		"pl+CSharp",
		"pl+Chef",
		"pl+DCL",
		"pl+Ksh",
		"pl+Perl",
		"pl+Puppet",
		"pl+Python",
		"pl+SQL",
		"pl+Tcl",
		"pl+Tk",
	]);

	plb.addInfluenced(["pl+SQL--Structured-Query-Language-", "pl+Tcl"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2006-11-14",
			kind: "first",
		},
		{
			version: "7.4.2",
			date: "2024-04-11",
			kind: "stable",
		},
	]);
}
