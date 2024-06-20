import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+P4";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "P4" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "P4",
			href: "https://en.wikipedia.org/wiki/P4_(programming_language)",
		},
		{
			kind: "homepage",
			title: "p4.org",
			href: "https://p4.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".p4"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache"]);

	plb.addParadigms([
		"para+compiled",
		"para+domain-specific",
		"para+imperative",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "first",
		},
		{
			version: "1.2.2",
			date: "2021-01-01",
			kind: "stable",
		},
	]);
}
