import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+R";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "R" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "R",
			href: "https://en.wikipedia.org/wiki/R_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.r-project.org",
			href: "https://www.r-project.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Robert-Gentleman", "designer"],
		["person+Ross-Ihaka", "designer"],
	]);

	plb.addLicenses(["license+GNU-GPL-v2"]);

	plb.addParadigms([
		"para+array",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+arm64", "platf+x86-64"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Julia", "pl+Lisp", "pl+S", "pl+Scheme"]);

	plb.addInfluenced([
		"pl+Common-Lisp",
		"pl+Julia",
		"pl+Lisp",
		"pl+PCASTL",
		"pl+S",
		"pl+Scheme",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "4.4.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
