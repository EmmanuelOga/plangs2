import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+DataFlex" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "DataFlex";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Data-Access-Worldwide", "designer"]]);

	plb.addLicenses(pl, ["license+commercial", "license+proprietary-software"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "24.0", date: "2024-03-13", kind: "stable" },
	]);
}
