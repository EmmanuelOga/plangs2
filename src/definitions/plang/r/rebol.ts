import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Rebol";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Rebol" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Rebol",
			href: "https://en.wikipedia.org/wiki/Rebol",
		},
		{
			kind: "wikipedia",
			title: "Rebol",
			href: "https://en.wikipedia.org/wiki/REBOL",
		},
		{
			kind: "homepage",
			title: "www.rebol.com",
			href: "http://www.rebol.com",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".r", ".reb"]);

	plb.addReferences({});

	plb.addPeople([["person+Carl-Sassenrath", "designer"]]);

	plb.addLicenses([
		"license+Apache-2dot0-license",
		"license+Freely-redistributable-software",
	]);

	plb.addParadigms([
		"para+data-exchange",
		"para+functional",
		"para+imperative",
		"para+language-oriented",
		"para+prototype-based",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Forth",
		"pl+JSON",
		"pl+Lisp",
		"pl+Logo",
		"pl+Red",
		"pl+Self",
	]);

	plb.addInfluenced(["pl+Forth", "pl+Lisp", "pl+Red", "pl+Self", "pl+UCBLogo"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "first",
		},
		{
			version: "2.7.8",
			date: "2011-01-01",
			kind: "stable",
		},
		{
			version: "2.101.0",
			date: "2012-01-01",
			kind: "preview",
		},
	]);
}
