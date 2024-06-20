import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+XOD";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "XOD" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "XOD",
			href: "https://en.wikipedia.org/wiki/XOD_(programming_language)",
		},
		{
			kind: "homepage",
			title: "xod.io",
			href: "http://xod.io",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GNU-Affero-General-Public-License"]);

	plb.addParadigms([
		"para+dataflow",
		"para+declarative",
		"para+functional",
		"para+visual",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Arduino", "platf+Raspberry-Pi"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2016-01-01",
			kind: "first",
		},
		{
			version: "0.38.0",
			date: "2021-03-12",
			kind: "stable",
		},
	]);
}
