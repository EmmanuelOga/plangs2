import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PARI-SlashGP" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "PARI/GP";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "PARI/GP",
			href: "https://en.wikipedia.org/wiki/PARI/GP",
		},
		{
			kind: "homepage",
			title: "pari.math.u-bordeaux.fr",
			href: "http://pari.math.u-bordeaux.fr/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Henri-Cohen", "designer"]]);

	plb.addLicenses(pl, ["license+gnu-gpl"]);

	plb.addParadigms(pl, []);

	plb.addTypeSystems(pl, []);

	plb.addPlatforms(pl, []);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, []);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{ version: "2.15.5", date: "2024-01-01", kind: "stable" },
	]);
}
