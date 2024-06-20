import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+FAUST";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "FAUST" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "FAUST",
			href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)",
		},
		{
			kind: "homepage",
			title: "faust.grame.fr",
			href: "http://faust.grame.fr",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GPL"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2002-01-01",
			kind: "first",
		},
		{
			version: "2.60.3",
			date: "2023-06-14",
			kind: "stable",
		},
	]);
}
