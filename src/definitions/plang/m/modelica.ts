import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Modelica";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Modelica" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Modelica_Language.png/300px-Modelica_Language.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Modelica",
			href: "https://en.wikipedia.org/wiki/Modelica",
		},
		{
			kind: "homepage",
			title: "www.modelica.org",
			href: "https://www.modelica.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".mo"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+CC-BY-SA"]);

	plb.addParadigms(["para+declarative"]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([
		"pl+AMESim",
		"pl+CATIA",
		"pl+Dymola",
		"pl+JModelicadotorg",
		"pl+MapleSim",
		"pl+OpenModelica",
		"pl+Scicos",
		"pl+SimulationX",
		"pl+Wolfram-SystemModeler",
		"pl+Xcos",
	]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "first",
		},
		{
			version: "3.6",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
