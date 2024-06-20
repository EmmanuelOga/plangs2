import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Tcl";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Tcl" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Tcl",
			href: "https://en.wikipedia.org/wiki/Tcl",
		},
		{
			kind: "homepage",
			title: "www.tcl-lang.org",
			href: "https://www.tcl-lang.org",
		},
		{
			kind: "homepage",
			title: "www.tcl.tk",
			href: "https://www.tcl.tk",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".tbc", ".tcl"]);

	plb.addReferences({});

	plb.addPeople([["person+John-Ousterhout", "designer"]]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms([
		"para+event-driven",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+AWK", "pl+Lisp", "pl+PHP", "pl+PowerShell", "pl+Tea"]);

	plb.addInfluenced([
		"pl+AWK",
		"pl+Lisp",
		"pl+PHP",
		"pl+PowerShell",
		"pl+Tea",
		"pl+XOTcl",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1988-01-01",
			kind: "first",
		},
		{
			version: "8.6.14",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
