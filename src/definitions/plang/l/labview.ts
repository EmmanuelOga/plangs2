import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+LabVIEW";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "LabVIEW" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/LabVIEW_Logo.jpg/300px-LabVIEW_Logo.jpg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "LabVIEW",
			href: "https://en.wikipedia.org/wiki/LabVIEW",
		},
		{
			kind: "homepage",
			title: "www.ni.com/labview",
			href: "https://www.ni.com/labview",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+National-Instruments", "designer"]]);

	plb.addLicenses(["license+Proprietary"]);

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
			date: "1986-01-01",
			kind: "first",
		},
		{
			version: "5.1",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
