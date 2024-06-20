import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Maple";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Maple" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Maple",
			href: "https://en.wikipedia.org/wiki/Maple_(software)",
		},
		{
			kind: "homepage",
			title: "www.maplesoft.com/products/Maple/",
			href: "https://www.maplesoft.com/products/Maple/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Waterloo-Maple", "designer"]]);

	plb.addLicenses(["license+Proprietary", "license+commercial-software"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+Darwin"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1982-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2024-03-06",
			kind: "stable",
		},
	]);
}
