import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Standard-ML";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Standard ML" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Standard ML",
			href: "https://en.wikipedia.org/wiki/Standard_ML",
		},
		{
			kind: "repository",
			title: "smlfamily.github.io",
			href: "https://smlfamily.github.io/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".sml"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+modular",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+MLton", "pl+PolySlashML", "pl+SMLSlashNJ"]);

	plb.addDialects([
		"pl+Alice",
		"pl+ML",
		"pl+MLton",
		"pl+Standard-ML-of-New-Jersey",
	]);

	plb.addInfluences([
		"pl+Elm",
		"pl+FSharp",
		"pl+FStar",
		"pl+Haskell",
		"pl+Hope",
		"pl+ML",
		"pl+OCaml",
		"pl+Pascal",
		"pl+Python",
		"pl+Rust",
		"pl+Scala",
	]);

	plb.addInfluenced([
		"pl+Elm",
		"pl+EuLisp",
		"pl+FStar",
		"pl+Futhark",
		"pl+Haskell",
		"pl+ML",
		"pl+MLton",
		"pl+OCaml",
		"pl+Pascal",
		"pl+Python",
		"pl+Rust",
		"pl+Scala",
		"pl+Standard-ML-of-New-Jersey",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1983-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "stable",
		},
	]);
}
