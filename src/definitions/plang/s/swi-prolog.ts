import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+SWI-Prolog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "SWI-Prolog";

	const plb = g.plangBuilder;

	plb.addImages(pl, []);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "SWI-Prolog",
			href: "https://en.wikipedia.org/wiki/SWI-Prolog",
		},
		{
			kind: "homepage",
			title: "swi-prolog.org",
			href: "http://swi-prolog.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Anjo-Anjewierden", "designer"],
		["person+Jan-Wielemaker", "designer"],
	]);

	plb.addLicenses(pl, ["license+lgpl", "license+simplified-bsd"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1987-01-01",
			kind: "first",
		},
		{
			version: "9.2.2",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "9.3.2",
			date: "2024-02-29",
			kind: "preview",
		},
	]);
}
