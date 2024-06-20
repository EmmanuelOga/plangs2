import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Pharo" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Pharo";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Pharo",
			href: "https://en.wikipedia.org/wiki/Pharo",
		},
		{
			kind: "homepage",
			title: "pharo.org",
			href: "http://pharo.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache", "license+mit"]);

	plb.addParadigms(pl, ["para+object-oriented"]);

	plb.addTypeSystems(pl, ["tsys+dynamic"]);

	plb.addPlatforms(pl, [
		"platf+ARM",
		"platf+IA-32",
		"platf+Linux",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations(pl, ["pl+Smalltalk"]);

	plb.addDialects(pl, ["pl+Squeak"]);

	plb.addInfluences(pl, ["pl+Smalltalk", "pl+Squeak"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "12.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
