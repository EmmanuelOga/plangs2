import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Ballerina";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Ballerina" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Ballerina",
			href: "https://en.wikipedia.org/wiki/Ballerina_(programming_language)",
		},
		{
			kind: "homepage",
			title: "ballerina.io",
			href: "http://ballerina.io/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Frank-Leymann", "designer"],
		["person+James-Clark", "designer"],
		["person+Sanjiva-Weerawarana", "designer"],
	]);

	plb.addLicenses(["license+Apache-License"]);

	plb.addParadigms([]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CSharp",
		"pl+Go",
		"pl+Java",
		"pl+Javascript",
		"pl+Rust",
	]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "2017-01-01", kind: "first" }]);
}
