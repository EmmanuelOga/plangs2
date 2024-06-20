import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Reason";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Reason" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Reason-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Reason",
			href: "https://en.wikipedia.org/wiki/Reason_(programming_language)",
		},
		{
			kind: "repository",
			title: "reasonml.github.io",
			href: "https://reasonml.github.io/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".re", ".rei"]);

	plb.addReferences({});

	plb.addPeople([["person+Jordan-Walke", "designer"]]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+modular",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+JavaScript", "pl+OCaml"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2016-05-16",
			kind: "first",
		},
		{
			version: "3.11.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
