import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Delphi";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Delphi" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Delphi",
			href: "https://en.wikipedia.org/wiki/Delphi_(software)",
		},
		{
			kind: "homepage",
			title: "www.embarcadero.com/products/delphi",
			href: "https://www.embarcadero.com/products/delphi",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Freemium"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Object-Pascal", "pl+Pascal"]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+CPPBuilder", "pl+Oxygene"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1995-01-01",
			kind: "first",
		},
		{
			version: "12.1",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
