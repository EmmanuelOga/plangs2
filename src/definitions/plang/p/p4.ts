import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+P4" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "P4";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "P4",
			href: "https://en.wikipedia.org/wiki/P4_(programming_language)",
		},
		{
			kind: "homepage",
			title: "p4.org",
			href: "https://p4.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".p4"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, ["license+apache"]);

	plb.addParadigms(pl, [
		"para+compiled",
		"para+domain-specific",
		"para+imperative",
	]);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "first",
		},
		{
			version: "1.2.2",
			date: "2021-01-01",
			kind: "stable",
		},
	]);
}
