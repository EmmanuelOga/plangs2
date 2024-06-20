import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Blockly";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Blockly" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Blockly-Demo.png/220px-Blockly-Demo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Blockly",
			href: "https://en.wikipedia.org/wiki/Blockly",
		},
		{
			kind: "homepage",
			title: "developers.google.com/blockly",
			href: "http://developers.google.com/blockly",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Web-browser"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2012-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2022-06-08",
			kind: "stable",
		},
	]);
}
