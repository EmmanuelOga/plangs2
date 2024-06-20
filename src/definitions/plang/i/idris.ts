import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Idris";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Idris" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Idris",
			href: "https://en.wikipedia.org/wiki/Idris_(programming_language)",
		},
		{
			kind: "homepage",
			title: "idris-lang.org",
			href: "http://idris-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".idr", ".lidr"]);

	plb.addReferences({});

	plb.addPeople([["person+Edwin-Brady", "designer"]]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms(["para+functional"]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Agda",
		"pl+Clean",
		"pl+Coq",
		"pl+Epigram",
		"pl+FSharp",
		"pl+Haskell",
		"pl+ML",
		"pl+Rust",
	]);

	plb.addInfluenced(["pl+Agda", "pl+Clean", "pl+Epigram", "pl+ML", "pl+Rust"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2007-01-01",
			kind: "first",
		},
		{
			version: "1.3.4",
			date: "2021-10-22",
			kind: "stable",
		},
		{
			version: "0.7.0",
			date: "2023-12-22",
			kind: "preview",
		},
	]);
}
