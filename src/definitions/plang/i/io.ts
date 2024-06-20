import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Io";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Io" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Io",
			href: "https://en.wikipedia.org/wiki/Io_(programming_language)",
		},
		{
			kind: "homepage",
			title: "iolanguage.org",
			href: "https://iolanguage.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Jeremy-Tregunna", "designer"],
		["person+Jonathan-Wright", "designer"],
		["person+Steve-Dekorte", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms(["para+object-oriented", "para+prototype-based"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Act1",
		"pl+Lisp",
		"pl+Lua",
		"pl+NewtonScript",
		"pl+Python",
		"pl+Self",
		"pl+Smalltalk",
	]);

	plb.addInfluenced([
		"pl+Lisp",
		"pl+NewtonScript",
		"pl+Self",
		"pl+Smalltalk",
		"pl+urbiscript",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2002-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2017-08-11",
			kind: "stable",
		},
	]);
}
