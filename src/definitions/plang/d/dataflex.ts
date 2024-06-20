import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+DataFlex";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "DataFlex" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "DataFlex",
			href: "https://en.wikipedia.org/wiki/Visual_DataFlex",
		},
		{
			kind: "homepage",
			title: "www.dataaccess.com/DataFlex",
			href: "http://www.DataAccess.com/DataFlex",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Data-Access-Worldwide", "designer"]]);

	plb.addLicenses(["license+Commercial", "license+proprietary-software"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "24.0", date: "2024-03-13", kind: "stable" }]);
}
