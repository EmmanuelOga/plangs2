import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Whiley" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Whiley";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Whiley",
			href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)",
		},
		{
			kind: "homepage",
			title: "whiley.org",
			href: "http://whiley.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+David-J.-Pearce", "designer"]]);

	plb.addLicenses(pl, ["license+bsd"]);

	plb.addParadigms(pl, ["para+functional", "para+imperative"]);

	plb.addTypeSystems(pl, [
		"tsys+flow-sensitive",
		"tsys+safe",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+C", "pl+Java", "pl+Python", "pl+Rust"]);

	plb.addInfluenced(pl, ["pl+Ceylon"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2010-01-01",
			kind: "first",
		},
		{
			version: "0.6.1",
			date: "2022-06-27",
			kind: "stable",
		},
	]);
}
