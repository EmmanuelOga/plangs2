import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Ballerina" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Ballerina";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Official_Ballerina_Programming_Language_Logo.png/200px-Official_Ballerina_Programming_Language_Logo.png",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Frank-Leymann", "designer"],
		["person+James-Clark", "designer"],
		["person+Sanjiva-Weerawarana", "designer"],
	]);

	plb.addLicenses(pl, ["license+apache"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, [
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(pl, ["platf+cross-platform"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C-Sharp",
		"pl+Go",
		"pl+Java",
		"pl+Javascript",
		"pl+Rust",
	]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "unknown", date: "2017-01-01", kind: "first" },
	]);
}
