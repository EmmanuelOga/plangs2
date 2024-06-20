import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PeachPie";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PeachPie" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peachpie-logo.png/150px-Peachpie-logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PeachPie",
			href: "https://en.wikipedia.org/wiki/PeachPie",
		},
		{
			kind: "homepage",
			title: "www.peachpie.io",
			href: "http://www.peachpie.io",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "2016-07-18", kind: "first" }]);
}
