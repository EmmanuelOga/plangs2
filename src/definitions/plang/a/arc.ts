import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Arc";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Arc" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Arc",
			href: "https://en.wikipedia.org/wiki/Arc_(programming_language)",
		},
		{
			kind: "homepage",
			title: "arclanguage.org",
			href: "http://arclanguage.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".arc"]);

	plb.addReferences({});

	plb.addPeople([["person+Paul-Graham", "designer"]]);

	plb.addLicenses(["license+Artistic-License"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+IA-32", "platf+Linux", "platf+x86-64"]);

	plb.addImplementations(["pl+Racket"]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences(["pl+Lisp", "pl+Scheme"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-29",
			kind: "first",
		},
		{
			version: "3.2",
			date: "2018-10-28",
			kind: "stable",
		},
	]);
}
