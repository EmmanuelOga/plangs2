import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Reason" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Reason";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Reason-logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Reason",
			href: "https://en.wikipedia.org/wiki/Reason_(programming_language)",
		},
		{
			kind: "repository",
			title: "reasonml.github.io",
			href: "https://reasonml.github.io/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".re", ".rei"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Jordan-Walke", "designer"]]);

	plb.addLicenses(pl, ["license+mit"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+modular",
		"para+multi-paradigm",
		"para+objects",
	]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+JavaScript", "pl+OCaml"]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2016-05-16",
			kind: "first",
		},
		{
			version: "3.11.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
