import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Dylan";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Dylan" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Dylan",
			href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)",
		},
		{
			kind: "homepage",
			title: "opendylan.org",
			href: "https://opendylan.org/",
		},
		{
			kind: "wikipedia",
			title: "Dylan",
			href: "https://en.wikipedia.org/wiki/Dylan_programming_language",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions(["dylan", "lid"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+gradual", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform", "platf+IA-32", "platf+x86-64"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+ALGOL",
		"pl+CLOS",
		"pl+EuLisp",
		"pl+Julia",
		"pl+Lasso",
		"pl+Python",
		"pl+Ruby",
		"pl+Scheme",
	]);

	plb.addInfluenced([
		"pl+Common-Lisp",
		"pl+EuLisp",
		"pl+Julia",
		"pl+Lasso",
		"pl+Lisp",
		"pl+NewtonScript",
		"pl+Oaklisp",
		"pl+Python",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Smalltalk",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1992-01-01",
			kind: "first",
		},
		{
			version: "2022.1",
			date: "2022-11-28",
			kind: "stable",
		},
	]);
}
