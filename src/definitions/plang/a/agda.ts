import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Agda";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Agda" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Agda%27s_official_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Agda",
			href: "https://en.wikipedia.org/wiki/Agda_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Agda",
			href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)",
		},
		{
			kind: "homepage",
			title: "wiki.portal.chalmers.se/agda",
			href: "http://wiki.portal.chalmers.se/agda",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".agda", ".lagda"]);

	plb.addReferences({});

	plb.addPeople([["person+Ulf-Norell", "designer"]]);

	plb.addLicenses(["license+BSD-like"]);

	plb.addParadigms(["para+functional"]);

	plb.addTypeSystems([
		"tsys+dependent",
		"tsys+inferred",
		"tsys+manifest",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+Haskell"]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Coq", "pl+Epigram", "pl+Haskell", "pl+Idris"]);

	plb.addInfluenced(["pl+Epigram", "pl+Idris"]);

	plb.addReleases([
		{
			version: "1.0",
			date: "2007-01-01",
			kind: "first",
		},
		{
			version: "2.6.3",
			date: "2023-01-30",
			kind: "stable",
		},
	]);
}
