import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+eC";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "eC" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "eC",
			href: "https://en.wikipedia.org/wiki/EC_(programming_language)",
		},
		{
			kind: "homepage",
			title: "ec-lang.org",
			href: "http://ec-lang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".ec", ".eh"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+BSD-3"]);

	plb.addParadigms([
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+nominative", "tsys+static"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+C", "pl+CPP", "pl+Python"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2004-01-01",
			kind: "first",
		},
		{
			version: "0.44.15",
			date: "2016-08-04",
			kind: "stable",
		},
	]);
}
