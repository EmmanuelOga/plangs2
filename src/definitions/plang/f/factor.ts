import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Factor";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Factor" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/NewFactorLogo.png/200px-NewFactorLogo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Factor",
			href: "https://en.wikipedia.org/wiki/Factor_(programming_language)",
		},
		{
			kind: "homepage",
			title: "factorcode.org",
			href: "http://factorcode.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Slava-Pestov", "designer"]]);

	plb.addLicenses(["license+BSD-license"]);

	plb.addParadigms([
		"para+concatenative",
		"para+functional",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+stack-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Forth", "pl+Joy", "pl+Lisp", "pl+Self"]);

	plb.addInfluenced(["pl+Forth", "pl+Joy", "pl+Self"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2003-01-01",
			kind: "first",
		},
		{
			version: "0.99",
			date: "2023-08-24",
			kind: "stable",
		},
	]);
}
