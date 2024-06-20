import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Ceylon";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Ceylon" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Ceylon",
			href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)",
		},
		{
			kind: "homepage",
			title: "ceylon-lang.org",
			href: "http://ceylon-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".ceylon"]);

	plb.addReferences({});

	plb.addPeople([["person+Gavin-King", "designer"]]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms(["para+object-oriented"]);

	plb.addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(["platf+Java-virtual-machine", "platf+JavaScript"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Java",
		"pl+Lisp",
		"pl+ML",
		"pl+Scala",
		"pl+Smalltalk",
		"pl+Whiley",
	]);

	plb.addInfluenced(["pl+Scala"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2011-01-01",
			kind: "first",
		},
		{
			version: "1.3.3",
			date: "2017-08-21",
			kind: "stable",
		},
	]);
}
