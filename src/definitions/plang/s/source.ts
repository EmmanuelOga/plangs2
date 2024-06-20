import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Source";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Source" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Source",
			href: "https://en.wikipedia.org/wiki/Source_(programming_language)",
		},
		{
			kind: "homepage",
			title: "docs.sourceacademy.org",
			href: "https://docs.sourceacademy.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".js"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+scripting",
	]);

	plb.addTypeSystems(["tsys+duck", "tsys+dynamic"]);

	plb.addPlatforms(["platf+browser-based"]);

	plb.addImplementations(["pl+Safari", "pl+properly-tail-recursive"]);

	plb.addDialects([]);

	plb.addInfluences(["pl+JavaScript", "pl+Scheme"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2017-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2021-12-31",
			kind: "stable",
		},
	]);
}
