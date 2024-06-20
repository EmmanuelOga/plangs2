import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Verse" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Verse";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Verse",
			href: "https://en.wikipedia.org/wiki/Verse_(programming_language)",
		},
		{
			kind: "homepage",
			title:
				"dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
			href: "https://dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Epic-Games", "designer"],
		["person+Guy-Steele", "designer"],
		["person+Lennart-Augustsson", "designer"],
		["person+Simon-Peyton-Jones", "designer"],
		["person+Tim-Sweeney", "designer"],
	]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+objects"]);

	plb.addTypeSystems(pl, ["tsys+strong"]);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, ["pl+UEFN", "pl+Visual-Studio-Code"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Functional-logic-programming",
		"pl+Lambda-calculus",
		"pl+Object-oriented-programming",
	]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "unknown", date: "2023-01-01", kind: "first" },
	]);
}
