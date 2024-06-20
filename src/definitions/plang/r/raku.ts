import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Raku";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Raku" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Raku",
			href: "https://en.wikipedia.org/wiki/Raku_(programming_language)",
		},
		{
			kind: "homepage",
			title: "raku.org",
			href: "http://raku.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".raku", ".t"]);

	plb.addReferences({});

	plb.addPeople([["person+Larry-Wall", "designer"]]);

	plb.addLicenses([
		"license+Artistic-License-2",
		"license+GNU-General-Public-License",
	]);

	plb.addParadigms(["para+multi-paradigm"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+gradual"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+Rakudo"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Haskell",
		"pl+JavaScript",
		"pl+Perl",
		"pl+Ruby",
		"pl+Smalltalk",
	]);

	plb.addInfluenced(["pl+Smalltalk"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2015-12-25",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2020-10-24",
			kind: "stable",
		},
	]);
}
