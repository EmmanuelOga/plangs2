import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Verse";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Verse" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Epic-Games", "designer"],
		["person+Guy-Steele", "designer"],
		["person+Lennart-Augustsson", "designer"],
		["person+Simon-Peyton-Jones", "designer"],
		["person+Tim-Sweeney", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms(["para+object-oriented"]);

	plb.addTypeSystems(["tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+UEFN", "pl+Visual-Studio-Code"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Functional-logic-programming",
		"pl+Lambda-calculus",
		"pl+Object-oriented-programming",
	]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "2023-01-01", kind: "first" }]);
}
