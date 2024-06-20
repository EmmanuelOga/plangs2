import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Max";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Max" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Max",
			href: "https://en.wikipedia.org/wiki/Max_(software)",
		},
		{
			kind: "homepage",
			title: "cycling74.com/products/max/",
			href: "https://cycling74.com/products/max/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Proprietary"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "8.6.2", date: "2024-01-01", kind: "stable" }]);
}
