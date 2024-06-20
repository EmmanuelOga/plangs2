import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Idris" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Idris";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".idr", ".lidr"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Edwin-Brady", "designer"]]);

	plb.addLicenses(pl, ["license+bsd"]);

	plb.addParadigms(pl, ["para+functional"]);

	plb.addTypeSystems(pl, ["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Agda",
		"pl+Clean",
		"pl+Coq",
		"pl+Epigram",
		"pl+F-Sharp",
		"pl+Haskell",
		"pl+ML",
		"pl+Rust",
	]);

	plb.addInfluenced(pl, [
		"pl+Agda",
		"pl+Clean",
		"pl+Epigram",
		"pl+ML",
		"pl+Rust",
	]);

	plb.addReleases(pl, [
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
