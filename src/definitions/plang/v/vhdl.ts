import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+VHDL";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "VHDL" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "VHDL",
			href: "https://en.wikipedia.org/wiki/VHDL",
		},
		{
			kind: "homepage",
			title: "IEEE VASG",
			href: "https://opensource.ieee.org/vasg",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".vhd"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+concurrent", "para+dataflow", "para+reactive"]);

	plb.addTypeSystems(["tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Ada", "pl+Pascal"]);

	plb.addInfluenced(["pl+Ada", "pl+Pascal", "pl+SystemVerilog"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1980-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2019-12-23",
			kind: "stable",
		},
	]);
}
