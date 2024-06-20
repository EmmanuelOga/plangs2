import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Pyomo";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Pyomo" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Pyomo",
			href: "https://en.wikipedia.org/wiki/Pyomo",
		},
		{
			kind: "homepage",
			title: "www.pyomo.org",
			href: "https://www.pyomo.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".py"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Carl-Laird", "designer"],
		["person+David-Woodruff", "designer"],
		["person+Gabriel-Hackebeil", "designer"],
		["person+Jean-Paul-Watson", "designer"],
		["person+John-Siirola", "designer"],
		["person+William-Edot-Hart", "designer"],
	]);

	plb.addLicenses(["license+BSD-license"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+Linux",
		"platf+Mac-OS-X",
		"platf+Windows",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+AMPL",
		"pl+General-Algebraic-Modeling-System",
		"pl+Python",
	]);

	plb.addInfluenced(["pl+AMPL"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "6.4.2",
			date: "2022-08-17",
			kind: "stable",
		},
	]);
}
