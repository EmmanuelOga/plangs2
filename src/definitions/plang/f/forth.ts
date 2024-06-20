import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Forth" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Forth";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Forth",
			href: "https://en.wikipedia.org/wiki/Forth_(programming_language)",
		},
		{
			kind: "homepage",
			title: "forth-standard.org",
			href: "https://forth-standard.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Charles-H-Moore", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+concatenative",
		"para+imperative",
		"para+reflective",
		"para+stack-oriented",
	]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, ["pl+Gforth"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Bitcoin-Script",
		"pl+Factor",
		"pl+Joy",
		"pl+RPL",
		"pl+Rebol",
		"pl+STOIC",
	]);

	plb.addInfluenced(pl, [
		"pl+Befunge",
		"pl+Factor",
		"pl+Joy",
		"pl+Lisp",
		"pl+RPL",
		"pl+Rebol",
		"pl+STOIC",
	]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1970-01-01", kind: "first" },
	]);
}
