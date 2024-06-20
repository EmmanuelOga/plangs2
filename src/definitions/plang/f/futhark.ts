import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Futhark";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Futhark" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Futhark",
			href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)",
		},
		{
			kind: "homepage",
			title: "futhark-lang.org",
			href: "http://futhark-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Cosmin-Oancea", "designer"],
		["person+Martin-Elsman", "designer"],
		["person+Troels-Henriksen", "designer"],
	]);

	plb.addLicenses(["license+ISC"]);

	plb.addParadigms(["para+array", "para+functional"]);

	plb.addTypeSystems([
		"tsys+dependent",
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+uniqueness",
	]);

	plb.addPlatforms(["platf+cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+APL", "pl+Haskell", "pl+NESL", "pl+Standard-ML"]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "unknown", date: "2014-01-01", kind: "first" }]);
}
