import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Solidity";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Solidity" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([".sol"]);

	plb.addReferences({});

	plb.addPeople([["person+Gavin-Wood", "designer"]]);

	plb.addLicenses(["license+GNU-General-Public-License-v3dot0"]);

	plb.addParadigms(["para+imperative"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+CPP"]);

	plb.addDialects([]);

	plb.addInfluences(["pl+CPP", "pl+JavaScript", "pl+Python"]);

	plb.addInfluenced([]);

	plb.addReleases([
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
