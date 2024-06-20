import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Fantom" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Fantom";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Fantom",
			href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.fantom.org",
			href: "http://www.fantom.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".fan", ".fwt", ".pod"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Andy-Frank", "designer"],
		["person+Brian-Frank", "designer"],
	]);

	plb.addLicenses(pl, ["license+academic-free"]);

	plb.addParadigms(pl, ["para+multi-paradigm"]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+static"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C-Sharp",
		"pl+Erlang",
		"pl+Java",
		"pl+Ruby",
		"pl+Scala",
	]);

	plb.addInfluenced(pl, ["pl+Java", "pl+Scala"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2005-01-01",
			kind: "first",
		},
		{
			version: "1.0.79",
			date: "2023-07-17",
			kind: "stable",
		},
	]);
}
