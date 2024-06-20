import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Stateflow";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Stateflow" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Automatic_Transmission_Logic.png/220px-Automatic_Transmission_Logic.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Stateflow",
			href: "https://en.wikipedia.org/wiki/Stateflow",
		},
		{
			kind: "homepage",
			title: "Stateflow product page",
			href: "http://www.mathworks.com/products/stateflow?s_cid=wiki_stateflow_2",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Proprietary"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+x64"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2018-09-12",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2018-06-14",
			kind: "preview",
		},
	]);
}
