import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PLSlashpgSQL" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "PL/pgSQL";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "PL/pgSQL",
			href: "https://en.wikipedia.org/wiki/PL/pgSQL",
		},
		{
			kind: "homepage",
			title: "www.postgresql.org/docs/current/static/plpgsql.html",
			href: "https://www.postgresql.org/docs/current/static/plpgsql.html",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Jan-Wieck", "designer"]]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, ["pl+Ada", "pl+PLSlashSQL"]);

	plb.addInfluenced(pl, ["pl+Ada"]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1998-10-30", kind: "first" },
	]);
}
