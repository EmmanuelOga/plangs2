import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+R" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "R";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "R",
			href: "https://en.wikipedia.org/wiki/R_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.r-project.org",
			href: "https://www.r-project.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Robert-Gentleman", "designer"],
		["person+Ross-Ihaka", "designer"],
	]);

	plb.addLicenses(pl, ["license+gnu-gpl-2"]);

	plb.addParadigms(pl, [
		"para+array",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
		"para+reflective",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic"]);

	plb.addPlatforms(pl, ["platf+arm64", "platf+x86-64"]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Julia", "pl+Lisp", "pl+S", "pl+Scheme"]);

	plb.addInfluenced(pl, [
		"pl+Common-Lisp",
		"pl+Julia",
		"pl+Lisp",
		"pl+PCASTL",
		"pl+S",
		"pl+Scheme",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "4.4.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
