import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+GNU-Prolog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "GNU Prolog";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "GNU Prolog",
			href: "https://en.wikipedia.org/wiki/GNU_Prolog",
		},
		{
			kind: "homepage",
			title: "www.gprolog.org",
			href: "http://www.gprolog.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Daniel-Diaz", "designer"]]);

	plb.addLicenses(pl, ["license+gnu-gpl", "license+gnu-lesser-gpl"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "1.5.0", date: "2021-07-08", kind: "stable" },
	]);
}
