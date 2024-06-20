import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PLSlashpgSQL";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PL/pgSQL" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Jan-Wieck", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Ada", "pl+PLSlashSQL"]);

	plb.addInfluenced(["pl+Ada"]);

	plb.addReleases([{ version: "unknown", date: "1998-10-30", kind: "first" }]);
}
