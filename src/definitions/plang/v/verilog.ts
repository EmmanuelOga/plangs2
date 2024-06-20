import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Verilog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Verilog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Verilog",
			href: "https://en.wikipedia.org/wiki/Verilog",
		},
		{
			kind: "homepage",
			title: "https://ieeexplore.ieee.org/document/10458102",
			href: "https://ieeexplore.ieee.org/document/10458102",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".v"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Phil-Moorby", "designer"],
		["person+Prabhu-Goel", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms(["para+structured"]);

	plb.addTypeSystems(["tsys+static", "tsys+weak"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Ada",
		"pl+C",
		"pl+Fortran",
		"pl+Pascal",
		"pl+SystemVerilog",
	]);

	plb.addInfluenced(["pl+C", "pl+SystemVerilog"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1984-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2023-12-06",
			kind: "stable",
		},
	]);
}
