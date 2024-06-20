import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+SystemVerilog";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "SystemVerilog" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "SystemVerilog",
			href: "https://en.wikipedia.org/wiki/SystemVerilog",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".sv"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms(["para+object-oriented", "para+structured"]);

	plb.addTypeSystems(["tsys+static", "tsys+weak"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CPP",
		"pl+Java",
		"pl+OpenVera",
		"pl+VHDL",
		"pl+Verilog",
	]);

	plb.addInfluenced(["pl+Verilog"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2002-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2023-12-16",
			kind: "stable",
		},
	]);
}
