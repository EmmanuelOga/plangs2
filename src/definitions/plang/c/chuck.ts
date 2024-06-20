import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+ChucK";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "ChucK" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "ChucK",
			href: "https://en.wikipedia.org/wiki/ChucK",
		},
		{
			kind: "homepage",
			title: "chuck.cs.princeton.edu",
			href: "http://chuck.cs.princeton.edu",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Ge-Wang", "designer"]]);

	plb.addLicenses([
		"license+GPL-2dot0-or-later",
		"license+Linux",
		"license+Mac",
		"license+Windows",
		"license+iOS",
	]);

	plb.addParadigms(["para+multi-paradigm"]);

	plb.addTypeSystems(["tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2003-01-01",
			kind: "first",
		},
		{
			version: "1.5.2.4",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
