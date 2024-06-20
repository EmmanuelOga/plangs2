import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Umple" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Umple";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Umple_Logo.png/200px-Umple_Logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Umple",
			href: "https://en.wikipedia.org/wiki/Umple",
		},
		{
			kind: "homepage",
			title: "www.umple.org",
			href: "http://www.umple.org/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".ump"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, ["para+objects"]);

	plb.addTypeSystems(pl, ["tsys+static"]);

	plb.addPlatforms(pl, ["platf+jvm"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C-Plus-Plus",
		"pl+Java",
		"pl+PHP",
		"pl+Ruby",
		"pl+UML",
	]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2024-06-06",
			kind: "stable",
		},
	]);
}
