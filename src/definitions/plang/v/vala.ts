import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Vala" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Vala";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Vala",
			href: "https://en.wikipedia.org/wiki/Vala_(programming_language)",
		},
		{
			kind: "homepage",
			title: "vala.dev",
			href: "https://vala.dev",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".vala", ".vapi"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Jurg-Billeter", "designer"],
		["person+Raffaele-Sandrini", "designer"],
		["person+Rico-Tzschichholz", "designer"],
	]);

	plb.addLicenses(pl, ["license+lgpl-2.1-plus"]);

	plb.addParadigms(pl, [
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
		"para+structured",
	]);

	plb.addTypeSystems(pl, [
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(pl, ["platf+Cross-platform", "platf+GLib"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Boo",
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+C-Sharp",
		"pl+D",
		"pl+Java",
	]);

	plb.addInfluenced(pl, [
		"pl+Boo",
		"pl+C",
		"pl+D-programming-language",
		"pl+Java",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2006-01-01",
			kind: "first",
		},
		{
			version: "0.57.0",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
