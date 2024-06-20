import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+SmallBASIC";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "SmallBASIC" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "SmallBASIC",
			href: "https://en.wikipedia.org/wiki/SmallBasic",
		},
		{
			kind: "repository",
			title: "smallbasic.github.io",
			href: "https://smallbasic.github.io",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".bas"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GPL-3"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+BASIC"]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "12.27", date: "2024-04-26", kind: "stable" }]);
}
