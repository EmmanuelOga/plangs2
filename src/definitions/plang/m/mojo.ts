import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Mojo" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Mojo";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Mojo",
			href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.modular.com/mojo",
			href: "https://www.modular.com/mojo",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Chris-Lattner", "designer"]]);

	plb.addLicenses(pl, ["license+proprietary"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(pl, [
		"tsys+affine",
		"tsys+duck",
		"tsys+dynamic",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, ["pl+Python"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2023-01-01",
			kind: "first",
		},
		{
			version: "24.4",
			date: "2024-05-24",
			kind: "preview",
		},
	]);
}
