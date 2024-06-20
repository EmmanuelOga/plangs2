import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Solidity" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Solidity";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Solidity",
			href: "https://en.wikipedia.org/wiki/Solidity",
		},
		{
			kind: "homepage",
			title: "soliditylang.org",
			href: "https://soliditylang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".sol"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Gavin-Wood", "designer"]]);

	plb.addLicenses(pl, ["license+gnu-gpl-3"]);

	plb.addParadigms(pl, ["para+imperative"]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, ["pl+C-Plus-Plus"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+C-Plus-Plus", "pl+JavaScript", "pl+Python"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2014-01-01",
			kind: "first",
		},
		{
			version: "0.8.26",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
