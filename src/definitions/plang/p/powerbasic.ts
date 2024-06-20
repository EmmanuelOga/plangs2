import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PowerBASIC";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PowerBASIC" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PowerBasic-screen-shot.png/300px-PowerBasic-screen-shot.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PowerBASIC",
			href: "https://en.wikipedia.org/wiki/PowerBASIC",
		},
		{
			kind: "homepage",
			title: "www.powerbasic.com",
			href: "https://www.powerbasic.com/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Turbo-Basic"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1989-01-01",
			kind: "first",
		},
		{
			version: "10.0",
			date: "2011-05-04",
			kind: "stable",
		},
	]);
}
