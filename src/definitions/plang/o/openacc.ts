import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+OpenACC" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "OpenACC";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "OpenACC",
			href: "https://en.wikipedia.org/wiki/OpenACC",
		},
		{
			kind: "homepage",
			title: "www.openacc.org",
			href: "https://www.openacc.org/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, []);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [{ version: "3.2", date: "2021-01-01", kind: "stable" }]);
}