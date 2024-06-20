import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Forth";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Forth" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Charles-Hdot-Moore", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+concatenative",
		"para+imperative",
		"para+reflective",
		"para+stack-oriented",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+Gforth"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Bitcoin-Script",
		"pl+Factor",
		"pl+Joy",
		"pl+RPL",
		"pl+Rebol",
		"pl+STOIC",
	]);

	plb.addInfluenced([
		"pl+Befunge",
		"pl+Factor",
		"pl+Joy",
		"pl+Lisp",
		"pl+RPL",
		"pl+Rebol",
		"pl+STOIC",
	]);

	plb.addReleases([{ version: "unknown", date: "1970-01-01", kind: "first" }]);
}
